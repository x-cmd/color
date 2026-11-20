#!/usr/bin/env node
// 色板计算与文档自检。
//
// data/palettes.json 是色值的唯一真相源；文档里的 HSL / OKLCH / 对比度
// 全部由本脚本算出来，不手写。文档里用标记块挂载生成的表格：
//
//   <!-- palette:macaron:cn -->
//   ...脚本生成的表格...
//   <!-- /palette -->
//
// 用法：
//   node scripts/palette.mjs stats    打印所有色值的派生数值
//   node scripts/palette.mjs tables   重写文档里的标记块
//   node scripts/palette.mjs check    文档自检（改动文档后跑）

import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderWidget } from './widgets.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = join(ROOT, 'data', 'palettes.json');
const DOCS_DIR = join(ROOT, 'docs');

const ROLE_LABEL = {
  en: { surface: 'Surface', base: 'Base', accent: 'Accent', support: 'Support', ink: 'Ink', muted: 'Muted' },
  cn: { surface: '底色', base: '主色', accent: '强调', support: '辅助', ink: '文字', muted: '次要' },
};

const ORDERS = ['macaron', 'morandi', 'swiss-neutral', 'nordic', 'wabi-sabi', 'memphis', 'neon'];

/* ---------- 色彩数学 ---------- */

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function rgbToHex([r, g, b]) {
  return ('#' + [r, g, b].map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('')).toUpperCase();
}

function srgbToLinear(c) {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c) {
  return c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

// sRGB -> OKLab（Björn Ottosson 的矩阵）
function rgbToOklab([r, g, b]) {
  const lr = srgbToLinear(r), lg = srgbToLinear(g), lb = srgbToLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

// OKLab -> 线性 sRGB（未做色域裁剪）
function oklabToLinearRgb([L, a, b]) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ * l_ * l_, m = m_ * m_ * m_, s = s_ * s_ * s_;
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}

function inGamut(lin) {
  const eps = 1e-4;
  return lin.every((v) => v >= -eps && v <= 1 + eps);
}

// OKLCH -> sRGB；超出色域时按二分法压低彩度
function oklchToRgb(L, C, hDeg) {
  const h = (hDeg * Math.PI) / 180;
  const toLin = (c) => oklabToLinearRgb([L, c * Math.cos(h), c * Math.sin(h)]);
  let lo = 0, hi = C;
  if (!inGamut(toLin(hi))) {
    for (let i = 0; i < 24; i++) {
      const mid = (lo + hi) / 2;
      if (inGamut(toLin(mid))) lo = mid;
      else hi = mid;
    }
    return toLin(lo).map((v) => Math.round(clamp(linearToSrgb(clamp(v, 0, 1)), 0, 1) * 255));
  }
  return toLin(C).map((v) => Math.round(clamp(linearToSrgb(clamp(v, 0, 1)), 0, 1) * 255));
}

function rgbToHsl([r, g, b]) {
  const rn = r / 255, gn = g / 255, bn = b / 255;
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return [0, 0, l];
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h;
  if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) * 60;
  else if (max === gn) h = ((bn - rn) / d + 2) * 60;
  else h = ((rn - gn) / d + 4) * 60;
  return [h, s, l];
}

function rgbToOklch(rgb) {
  const [L, a, b] = rgbToOklab(rgb);
  const C = Math.sqrt(a * a + b * b);
  let h = (Math.atan2(b, a) * 180) / Math.PI;
  if (h < 0) h += 360;
  return [L, C, h];
}

// WCAG 2.1 相对亮度与对比度
function relativeLuminance([r, g, b]) {
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

function contrastRatio(rgb1, rgb2) {
  const l1 = relativeLuminance(rgb1), l2 = relativeLuminance(rgb2);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}

function wcagLevel(ratio) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA-large';
  return 'fail';
}

/* ---------- 派生数据 ---------- */

const BLACK = [0, 0, 0];
const WHITE = [255, 255, 255];

function analyze(color) {
  const rgb = hexToRgb(color.hex);
  const [h, s, l] = rgbToHsl(rgb);
  const [L, C, okHue] = rgbToOklch(rgb);
  return {
    ...color,
    rgb,
    hex: rgbToHex(rgb),
    hsl: [h, s, l],
    oklch: [L, C, okHue],
    vsWhite: contrastRatio(rgb, WHITE),
    vsBlack: contrastRatio(rgb, BLACK),
    onWhite: contrastRatio(rgb, WHITE) >= contrastRatio(rgb, BLACK) ? 'black' : 'white',
  };
}

const raw = JSON.parse(readFileSync(DATA_FILE, 'utf8'));
const families = raw.families;
for (const key of Object.keys(families)) {
  families[key].key = key;
  families[key].colors = families[key].colors.map(analyze);
}

// 品牌方案(9-schemes):结构同 families,另有 series 图表系列色
const schemes = raw.schemes || {};
for (const key of Object.keys(schemes)) {
  schemes[key].key = key;
  schemes[key].colors = schemes[key].colors.map(analyze);
  if (schemes[key].series) schemes[key].seriesData = schemes[key].series.map((hex) => analyze({ hex }));
}
const registry = { ...families, ...schemes };

// 派生色阶：以 OKLCH 明度为轴做等距阶梯，色相与彩度保持不变
function ramp(color) {
  const [L, C, h] = color.oklch;
  return [-0.24, -0.12, 0, 0.12, 0.24].map((d) => {
    const l = clamp(L + d, 0.06, 0.985);
    return rgbToHex(oklchToRgb(l, C, h));
  });
}

// 色域带：主色 + 强调色（底色/文字/次要不算），一律用 OKLCH 口径。
// HSL 的饱和度在粉彩上会失真——#FFF1A8 的 HSL 饱和度是 100%，彩度却只有 0.09。
function bandOf(family) {
  const pool = family.colors.filter((c) => c.role === 'base' || c.role === 'accent');
  const list = pool.length ? pool : family.colors;
  const ls = list.map((c) => c.oklch[0]);
  const cs = list.map((c) => c.oklch[1]);
  const hues = new Set(list.filter((c) => c.oklch[1] > 0.02).map((c) => Math.round(c.oklch[2] / 30) * 30 % 360));
  return {
    lightness: [Math.min(...ls), Math.max(...ls)],
    chroma: [Math.min(...cs), Math.max(...cs)],
    hueCount: hues.size,
    meanLightness: ls.reduce((a, b) => a + b, 0) / ls.length,
    meanChroma: cs.reduce((a, b) => a + b, 0) / cs.length,
    meanHslSaturation: list.reduce((a, c) => a + c.hsl[1], 0) / list.length,
  };
}

/* ---------- 表格渲染 ---------- */

const pct = (v) => `${Math.round(v * 100)}%`;
const num = (v, d = 2) => v.toFixed(d);
const swatch = (hex) => `<span style="background-color:${hex}">&nbsp;&nbsp;&nbsp;&nbsp;</span>`;

function renderBandBlock(family, lang) {
  const b = bandOf(family);
  const L = lang === 'cn';
  const rows = [
    L ? ['明度', 'OKLCH L', `${num(b.lightness[0])} – ${num(b.lightness[1])}`] : ['Lightness', 'OKLCH L', `${num(b.lightness[0])} – ${num(b.lightness[1])}`],
    L ? ['彩度', 'OKLCH C', `${num(b.chroma[0])} – ${num(b.chroma[1])}`] : ['Chroma', 'OKLCH C', `${num(b.chroma[0])} – ${num(b.chroma[1])}`],
    L ? ['色相跨度', '独立色相数（每 30° 一档）', `${b.hueCount}`] : ['Hue spread', 'distinct hues (30° buckets)', `${b.hueCount}`],
    L ? ['平均明度', 'OKLCH L 均值', num(b.meanLightness)] : ['Mean lightness', 'mean OKLCH L', num(b.meanLightness)],
    L ? ['平均彩度', 'OKLCH C 均值', num(b.meanChroma)] : ['Mean chroma', 'mean OKLCH C', num(b.meanChroma)],
    L ? ['参考：HSL 饱和度均值', 'HSL 口径，粉彩上会明显高估', pct(b.meanHslSaturation)] : ['Reference: mean HSL saturation', 'HSL overstates pastels', pct(b.meanHslSaturation)],
  ];
  const head = L ? ['维度', '口径', '取值'] : ['Dimension', 'Measured on', 'Value'];
  return [
    `| ${head[0]} | ${head[1]} | ${head[2]} |`,
    '| --- | --- | --- |',
    ...rows.map((r) => `| ${r[0]} | ${r[1]} | ${r[2]} |`),
  ].join('\n');
}

function renderPaletteBlock(family, lang) {
  const L = lang === 'cn';
  const roles = ROLE_LABEL[lang];
  const head = L
    ? ['色块', '名称', '色值', '角色', 'HSL', 'OKLCH', '白字对比度', '黑字对比度']
    : ['Swatch', 'Name', 'Hex', 'Role', 'HSL', 'OKLCH', 'White text', 'Black text'];
  const rows = family.colors.map((c) => {
    const hsl = `${Math.round(c.hsl[0])}° ${pct(c.hsl[1])} ${pct(c.hsl[2])}`;
    const ok = `${num(c.oklch[0])} ${num(c.oklch[1])} ${Math.round(c.oklch[2])}°`;
    return `| ${swatch(c.hex)} | ${c.name[lang]} | \`${c.hex}\` | ${roles[c.role]} | ${hsl} | ${ok} | ${num(c.vsWhite)} (${wcagLevel(c.vsWhite)}) | ${num(c.vsBlack)} (${wcagLevel(c.vsBlack)}) |`;
  });
  return [
    `| ${head[0]} | ${head[1]} | ${head[2]} | ${head[3]} | ${head[4]} | ${head[5]} | ${head[6]} | ${head[7]} |`,
    '| --- | --- | --- | --- | --- | --- | --- | --- |',
    ...rows,
  ].join('\n');
}

function renderRampBlock(family, lang) {
  const L = lang === 'cn';
  const pool = family.colors.filter((c) => c.role === 'base' || c.role === 'accent');
  const head = L
    ? ['颜色', '浅 40', '浅 20', '本色', '深 20', '深 40']
    : ['Colour', 'Tint 40', 'Tint 20', 'Base', 'Shade 20', 'Shade 40'];
  const rows = pool.map((c) => {
    const steps = ramp(c);
    return `| ${c.name[lang]} \`${c.hex}\` | ${steps.map((s) => `\`${s}\``).join(' | ')} |`;
  });
  return [
    `| ${head[0]} | ${head[1]} | ${head[2]} | ${head[3]} | ${head[4]} | ${head[5]} |`,
    '| --- | --- | --- | --- | --- | --- |',
    ...rows,
  ].join('\n');
}


/* ---------- 实例渲染 ---------- */

// 从候选文字色里选与 fill 对比度最高者
function textOn(fill, family) {
  const inkHex = family.colors.find((c) => c.role === 'ink')?.hex || '#000000';
  const cands = [...new Set([inkHex, '#FFFFFF', '#000000'])];
  let best = cands[0], bestR = -1;
  for (const h of cands) {
    const r = contrastRatio(hexToRgb(h), hexToRgb(fill));
    if (r > bestR) { bestR = r; best = h; }
  }
  return best;
}

const FONT = "font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif";

// 用该系列的色板渲染同一套界面: 按钮行 / 标签行 / 统计卡 / 图表条 / 提示条。
// 只用本系列颜色与其色阶派生值,文字色按对比度自动选。
function renderDemoBlock(family, lang) {
  const L = lang === 'cn';
  const byRole = (role) => family.colors.filter((c) => c.role === role);
  const surfaceC = byRole('surface')[0] || family.colors[0];
  const surface = surfaceC.hex;
  const ink = byRole('ink')[0]?.hex || '#000000';
  const muted = byRole('muted')[0]?.hex || byRole('support')[0]?.hex || ink;
  const accent = byRole('accent')[0] || byRole('base')[0];
  const mains = [...byRole('base'), ...byRole('accent')];
  const dark = surfaceC.oklch[0] < 0.5;
  const on = (fill) => textOn(fill, family);
  const tint = (c, i) => ramp(c)[i]; // 0 最深 → 4 最浅
  const border = ramp(surfaceC)[dark ? 4 : 1];
  const cardTint = (c) => tint(c, dark ? 3 : 4);
  const alertBg = dark ? (byRole('base')[0]?.hex || tint(accent, 3)) : tint(accent, 4);
  const bars = mains.slice(0, 6);
  const heights = [72, 44, 58, 32, 50, 26];

  const labels = L
    ? { primary: '主要操作', secondary: '次要操作', disabled: '已禁用', active: '活跃', fresh: '新增', back: '回访', alert: '提示', caption: '同一套界面,穿这个系列的颜色 —— 由色板生成' }
    : { primary: 'Primary', secondary: 'Secondary', disabled: 'Disabled', active: 'Active', fresh: 'New', back: 'Returning', alert: 'Note', caption: 'The same interface, generated from this palette' };

  const chips = bars.map((c) =>
    `<span style="display:inline-block;padding:4px 12px;border-radius:999px;background:${c.hex};color:${on(c.hex)};font-size:12px">${c.name[lang]}</span>`).join('');

  const stats = [['12.4k', labels.active], ['+8.2%', labels.fresh], ['1,904', labels.back]]
    .map(([v, k], i) => {
      const bg = cardTint(mains[i % mains.length]);
      return `<div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:${bg}"><div style="font-size:20px;font-weight:700;color:${on(bg)}">${v}</div><div style="font-size:12px;color:${on(bg)};opacity:.75">${k}</div></div>`;
    }).join('');

  const barRow = bars.map((c, i) =>
    `<div style="width:26px;height:${heights[i % heights.length]}px;border-radius:4px 4px 0 0;background:${c.hex}"></div>`).join('');

  return [
    `<div style="border:1px solid ${border};border-radius:12px;overflow:hidden;max-width:640px;${FONT}">`,
    `  <div style="padding:10px 16px;background:${accent.hex};color:${on(accent.hex)};font-size:13px;font-weight:600">${family.name[lang]} · ${family.mood[lang]}</div>`,
    `  <div style="padding:16px;background:${surface}">`,
    `    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">`,
    `      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:${accent.hex};color:${on(accent.hex)};font-size:13px;font-weight:600">${labels.primary}</span>`,
    `      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid ${ink};color:${ink};font-size:13px">${labels.secondary}</span>`,
    `      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:${tint(mains[0], dark ? 0 : 4)};color:${muted};font-size:13px">${labels.disabled}</span>`,
    `    </div>`,
    `    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">${chips}</div>`,
    `    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px">${stats}</div>`,
    `    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid ${muted};padding:4px 2px 0;margin-bottom:12px;height:80px">${barRow}</div>`,
    `    <div style="padding:10px 14px;border-radius:8px;background:${alertBg};border-left:3px solid ${accent.hex};color:${on(alertBg)};font-size:13px"><strong>${labels.alert}</strong> · ${family.summary[lang]}</div>`,
    `    <div style="margin-top:10px;font-size:11px;color:${muted}">${labels.caption}</div>`,
    `  </div>`,
    `</div>`,
  ].join('\n');
}

function renderFamiliesBlock(lang) {
  const L = lang === 'cn';
  const head = L
    ? ['系列', '平均明度 (L)', '平均彩度 (C)', '色相跨度', '主色数', '气质', '适合', '不适合']
    : ['Family', 'Mean lightness (L)', 'Mean chroma (C)', 'Hue spread', 'Main colours', 'Mood', 'Good for', 'Avoid for'];
  const rows = ORDERS.map((key) => {
    const f = families[key];
    const b = bandOf(f);
    const mainCount = f.colors.filter((c) => c.role === 'base' || c.role === 'accent').length;
    return `| ${f.name[lang]} | ${num(b.meanLightness)} | ${num(b.meanChroma)} | ${b.hueCount} | ${mainCount} | ${f.mood[lang]} | ${f.bestFor[lang]} | ${f.avoidFor[lang]} |`;
  });
  return [
    `| ${head[0]} | ${head[1]} | ${head[2]} | ${head[3]} | ${head[4]} | ${head[5]} | ${head[6]} | ${head[7]} |`,
    '| --- | --- | --- | --- | --- | --- | --- | --- |',
    ...rows,
  ].join('\n');
}

// series 块:图表方案系列色 —— 条图 + 数值表
function renderSeriesBlock(scheme, lang) {
  const L = lang === 'cn';
  const list = scheme.seriesData || [];
  const heights = [72, 44, 58, 32, 50, 26, 40, 62];
  const bars = list.map((c, i) =>
    `<div style="flex:1;max-width:52px;height:${heights[i % heights.length]}px;border-radius:4px 4px 0 0;background:${c.hex}"></div>`).join('');
  const strip = `<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px">${bars}</div>`;
  const head = L ? ['色块', '色值', 'HSL', 'OKLCH', '对黑字', '对白字'] : ['Swatch', 'Hex', 'HSL', 'OKLCH', 'Black text', 'White text'];
  const rows = list.map((c) => {
    const hsl = `${Math.round(c.hsl[0])}° ${pct(c.hsl[1])} ${pct(c.hsl[2])}`;
    const ok = `${num(c.oklch[0])} ${num(c.oklch[1])} ${Math.round(c.oklch[2])}°`;
    return `| ${swatch(c.hex)} | \`${c.hex}\` | ${hsl} | ${ok} | ${num(c.vsBlack)} (${wcagLevel(c.vsBlack)}) | ${num(c.vsWhite)} (${wcagLevel(c.vsWhite)}) |`;
  });
  const table = [
    `| ${head[0]} | ${head[1]} | ${head[2]} | ${head[3]} | ${head[4]} | ${head[5]} |`,
    '| --- | --- | --- | --- | --- | --- |',
    ...rows,
  ].join('\n');
  return strip + '\n\n' + table;
}


// anchors 块:风格 x 色相锚 —— 系列色整体绕色环平移,结构与彩度纪律不动
const ANCHORS = [
  { deg: 30, en: 'red', cn: '红' },
  { deg: 55, en: 'orange', cn: '橙' },
  { deg: 85, en: 'gold', cn: '金' },
  { deg: 150, en: 'green', cn: '绿' },
  { deg: 200, en: 'cyan', cn: '青' },
  { deg: 260, en: 'blue', cn: '蓝' },
  { deg: 300, en: 'purple', cn: '紫' },
];

function renderAnchorsBlock(scheme, lang) {
  const L = lang === 'cn';
  const list = scheme.seriesData || [];
  if (!list.length) throw new Error(`scheme has no series: ${scheme.key}`);
  const base = list[0].oklch[2];
  const rows = ANCHORS.map((a) => {
    const cells = list.map((c) => {
      const h = (c.oklch[2] + (a.deg - base) + 360) % 360;
      const hex = rgbToHex(oklchToRgb(c.oklch[0], c.oklch[1], h));
      return `<td style="background:${hex};height:26px" title="${hex}"></td>`;
    }).join('');
    const name = `<th style="text-align:left;font-weight:500;white-space:nowrap">${a.deg}° ${L ? a.cn : a.en}</th>`;
    return `<tr>${name}${cells}</tr>`;
  }).join('');
  const head = L ? '锚(系列一落在)' : 'Anchor (series 1 lands on)';
  return `<table style="border-collapse:collapse;max-width:600px">${'<colgroup>' + list.map(() => '<col style="width:44px">').join('') + '</colgroup>'}<tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">${head}</th>${list.map(() => '<th></th>').join('')}</tr>${rows}</table>`;
}


// anchor-cards 块:每个锚点渲染一张实例卡 —— 同一套界面(按钮+8系列条图)穿转动后的颜色
function renderAnchorCardsBlock(scheme, lang) {
  const L = lang === 'cn';
  const series = scheme.seriesData || scheme.colors.filter((c) => c.role === 'base' || c.role === 'accent');
  if (!series.length) throw new Error(`scheme has no series: ${scheme.key}`);
  const byRole = (role) => scheme.colors.find((c) => c.role === role);
  const surfaceC = byRole('surface') || scheme.colors[0];
  const inkC = byRole('ink') || scheme.colors[scheme.colors.length - 1];
  const mutedC = byRole('muted') || inkC;
  const accentC = byRole('accent') || series[0];
  const base = series[0].oklch[2];
  const rot = (c, d) => rgbToHex(oklchToRgb(c.oklch[0], c.oklch[1], (c.oklch[2] + d + 360) % 360));
  // 旋转后的底色/墨色几乎无彩,转动看不出 —— 但为了概念干净,一并转
  const heights = [64, 40, 54, 32, 48, 26, 44, 58];
  const labels = L
    ? { primary: '主要操作', secondary: '次要操作' }
    : { primary: 'Primary', secondary: 'Secondary' };
  const cards = ANCHORS.map((a) => {
    const d = a.deg - base;
    const acc = rot(accentC, d);
    const sf = rot(surfaceC, d);
    const ink = rot(inkC, d);
    const muted = rot(mutedC, d);
    const border = rot({ ...surfaceC, oklch: [surfaceC.oklch[0] - 0.12, surfaceC.oklch[1], surfaceC.oklch[2]] }, d);
    const accText = relativeLuminance(hexToRgb(acc)) > 0.35 ? '#000000' : '#FFFFFF';
    const bars = series.slice(0, 8).map((c, i) =>
      `<div style="flex:1;max-width:46px;height:${heights[i % 8]}px;border-radius:4px 4px 0 0;background:${rot(c, d)}"></div>`).join('');
    return [
      `<div style="border:1px solid ${border};border-radius:12px;overflow:hidden;max-width:640px;${FONT};margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">`,
      `  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:${sf};border-bottom:1px solid ${border}">`,
      `    <strong style="color:${ink};font-size:13px">${scheme.name[lang]} · ${a.deg}° ${L ? a.cn : a.en}</strong>`,
      `    <code style="color:${muted};font-size:12px">${rot(series[0], d)}</code>`,
      `  </div>`,
      `  <div style="padding:14px 16px;background:${sf}">`,
      `    <div style="display:flex;gap:8px;margin-bottom:12px">`,
      `      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:${acc};color:${accText};font-size:12.5px;font-weight:600">${labels.primary}</span>`,
      `      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid ${ink};color:${ink};font-size:12.5px">${labels.secondary}</span>`,
      `    </div>`,
      `    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid ${muted};padding:4px 2px 0;height:68px">${bars}</div>`,
      `  </div>`,
      `</div>`,
    ].join('\n');
  }).join('\n');
  return cards;
}


// type-guide 块:字体与间距总表(families + schemes 两张表)
function typeRow(entry, lang) {
  const t = entry.type;
  const L = lang === 'cn';
  const cols = [
    entry.name[lang],
    t.headingFont,
    t.bodyFont,
    t.numbers,
    `${t.weight} / ${t.tracking} / ${t.spacing}`,
    t.radius,
    t.grid,
  ];
  return `| ${cols.join(' | ')} |`;
}
function typeTable(entries, lang) {
  const L = lang === 'cn';
  const head = L
    ? ['风格', '标题字', '正文字', '数字', '字重 / 字距 / 密度', '圆角', '网格']
    : ['Style', 'Headings', 'Body', 'Numbers', 'Weight / tracking / density', 'Radius', 'Grid'];
  return [
    `| ${head.join(' | ')} |`,
    `| ${head.map(() => '---').join(' | ')} |`,
    ...entries.map((e) => typeRow(e, lang)),
  ].join('\n');
}
function renderTypeGuideBlock(lang) {
  const L = lang === 'cn';
  const famTable = typeTable(ORDERS.map((k) => families[k]), lang);
  const schTable = typeTable(Object.keys(schemes).map((k) => schemes[k]), lang);
  const h1 = L ? '### 七个风格家族' : '### The seven families';
  const h2 = L ? '### 六套方案' : '### The six schemes';
  return `${h1}\n\n${famTable}\n\n${h2}\n\n${schTable}`;
}

// skins 块:同一张迷你图穿七个家族的"皮肤"(字体/字重/密度/圆角/网格)
const SKIN_SPACE = { compact: '10px 14px', normal: '14px 18px', airy: '20px 24px' };
function renderSkinsBlock(lang) {
  const L = lang === 'cn';
  return ORDERS.map((key) => {
    const f = families[key];
    const t = f.type;
    const byRole = (r) => f.colors.find((c) => c.role === r);
    const sf = byRole('surface') || f.colors[0];
    const ink = byRole('ink') || f.colors[f.colors.length - 1];
    const muted = byRole('muted') || ink;
    const mains = f.colors.filter((c) => c.role === 'base' || c.role === 'accent');
    const barR = t.radius === 'mixed 0 / pill' ? '999px' : `${t.radius}px 0 0 0`.replace(' 0 0 0', 'px');
    const gridStyle = t.grid === 'none' ? 'none' : (t.grid === 'dotted' ? '2px dotted' : '1px solid');
    const heights = [58, 36, 47, 28];
    const bars = mains.slice(0, 4).map((c, i) =>
      `<div style="flex:1;max-width:46px;height:${heights[i % 4]}px;background:${c.hex};${t.grid === 'none' ? '' : ''}border-radius:${t.radius === 'mixed 0 / pill' ? '999px 999px 0 0' : (t.radius === '0' ? '0' : t.radius + 'px ' + t.radius + 'px 0 0')}"></div>`).join('');
    const title = L ? '各区域季度增长' : 'Quarterly growth by area';
    const sub = L ? '同比 %,四舍五入' : 'YoY %, rounded';
    return [
      `<div style="border:1px solid ${muted.hex}33;border-radius:${t.radius === 'mixed 0 / pill' ? '0' : t.radius}px;overflow:hidden;max-width:620px;${FONT};margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">`,
      `  <div style="padding:${SKIN_SPACE[t.spacing] || '14px 18px'};background:${sf.hex}">`,
      `    <div style="font-family:${t.headingFont};font-weight:${t.weight.startsWith('3') ? '300' : t.weight};letter-spacing:${t.tracking};color:${ink.hex};font-size:16px;margin-bottom:2px">${title}</div>`,
      `    <div style="font-family:${t.bodyFont};color:${muted.hex};font-size:11.5px;font-variant-numeric:${t.numbers.includes('tabular') ? 'tabular-nums' : 'normal'};margin-bottom:14px">${sub}</div>`,
      `    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;${t.grid === 'none' ? '' : `border-bottom:${gridStyle} ${muted.hex};`}padding:4px 2px 0">${bars}</div>`,
      `    <div style="margin-top:8px;font-family:${t.bodyFont};font-size:10.5px;color:${muted.hex};display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>`,
      `    <div style="margin-top:10px;font-size:10.5px;color:${muted.hex}">${f.name[lang]} — ${t.note[lang]}</div>`,
      `  </div>`,
      `</div>`,
    ].join('\n');
  }).join('\n');
}

/* ---------- 标记块读写 ---------- */

const MARK_RE = /<!--\s*(palette|band|ramp|families|demo|series|anchors|anchor-cards|type-guide|skins|widget):([a-z0-9-]+(?::[a-z0-9-]+)?)\s*-->([\s\S]*?)<!--\s*\/\1\s*-->/g;

function renderBlock(kind, spec) {
  if (kind === 'families') return renderFamiliesBlock(spec);
  if (kind === 'type-guide') return renderTypeGuideBlock(spec.split(':')[1] || 'en');
  if (kind === 'skins') return renderSkinsBlock(spec.split(':')[1] || 'en');
  if (kind === 'widget') { const [wname, wlang] = spec.split(':'); return renderWidget(wname, wlang || 'en', { families, schemes }); }
  const [family, lang] = spec.split(':');
  const f = registry[family];
  if (!f) throw new Error(`unknown family or scheme: ${family}`);
  if (kind === 'band') return renderBandBlock(f, lang);
  if (kind === 'palette') return renderPaletteBlock(f, lang);
  if (kind === 'ramp') return renderRampBlock(f, lang);
  if (kind === 'demo') return renderDemoBlock(f, lang);
  if (kind === 'series') return renderSeriesBlock(f, lang);
  if (kind === 'anchors') return renderAnchorsBlock(f, lang);
  if (kind === 'anchor-cards') return renderAnchorCardsBlock(f, lang);
  if (kind === 'type-guide') return renderTypeGuideBlock(spec.split(':')[1] || 'en');
  if (kind === 'skins') return renderSkinsBlock(spec.split(':')[1] || 'en');
  if (kind === 'widget') { const [wname, wlang] = spec.split(':'); return renderWidget(wname, wlang || 'en', { families, schemes }); }
  throw new Error(`unknown block: ${kind}`);
}

// 把生成内容写回文件；返回是否有改动
function rewriteFile(file) {
  const src = readFileSync(file, 'utf8');
  let changed = false;
  const out = src.replace(MARK_RE, (_m, kind, spec, body) => {
    const generated = renderBlock(kind, spec);
    const next = `\n${generated}\n`;
    if (body === next) return _m;
    changed = true;
    return `<!-- ${kind}:${spec} -->${next}<!-- /${kind} -->`;
  });
  if (changed) writeFileSync(file, out);
  return changed;
}

/* ---------- 文档遍历 ---------- */

function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function pageFiles() {
  // 页面 = 含 en.md / cn.md 的目录
  const pages = [];
  for (const dir of new Set(walk(DOCS_DIR).map((f) => dirname(f)))) {
    const hasEn = existsSync(join(dir, 'en.md'));
    const hasCn = existsSync(join(dir, 'cn.md'));
    if (hasEn || hasCn) pages.push({ dir, en: hasEn, cn: hasCn });
  }
  return pages;
}

function readBody(file) {
  const raw = readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  const fm = m ? m[1] : '';
  const body = m ? raw.slice(m[0].length) : raw;
  return { fm, body };
}

function headings(body) {
  const out = [];
  let fence = false;
  for (const line of body.split('\n')) {
    if (/^\s*```/.test(line)) { fence = !fence; continue; }
    if (fence) continue;
    const m = line.match(/^(#{1,6})\s+(.*)$/);
    if (m) out.push({ level: m[1].length, text: m[2] });
  }
  return out;
}

/* ---------- 命令 ---------- */

function cmdStats() {
  for (const key of ORDERS) {
    const f = families[key];
    const b = bandOf(f);
    console.log(`\n${f.name.en} / ${f.name.cn}  (${key})`);
    console.log('id'.padEnd(16), 'hex'.padEnd(9), 'HSL'.padEnd(20), 'OKLCH'.padEnd(20), 'vs white'.padEnd(9), 'vs black');
    for (const c of f.colors) {
      const hsl = `${Math.round(c.hsl[0])} ${pct(c.hsl[1])} ${pct(c.hsl[2])}`;
      const ok = `${num(c.oklch[0])} ${num(c.oklch[1])} ${Math.round(c.oklch[2])}`;
      console.log(
        c.id.padEnd(16),
        c.hex.padEnd(9),
        hsl.padEnd(20),
        ok.padEnd(20),
        num(c.vsWhite).padEnd(9),
        num(c.vsBlack),
      );
    }
    console.log(
      'band'.padEnd(16),
      `L ${num(b.lightness[0])}-${num(b.lightness[1])}`.padEnd(20),
      `C ${num(b.chroma[0])}-${num(b.chroma[1])}`.padEnd(20),
      `hues ${b.hueCount}`.padEnd(9),
      `meanL ${num(b.meanLightness)} meanC ${num(b.meanChroma)} hslS ${pct(b.meanHslSaturation)}`,
    );
  }
}

function cmdTables() {
  const files = walk(DOCS_DIR).filter((f) => f.endsWith('.md'));
  let n = 0;
  for (const f of files) if (rewriteFile(f)) { n++; console.log(`updated ${relative(ROOT, f)}`); }
  console.log(n ? `${n} file(s) updated` : 'already up to date');
}

function cmdCheck() {
  const errors = [];
  const warnings = [];
  const err = (m) => errors.push(m);
  const warn = (m) => warnings.push(m);

  const pages = pageFiles();
  const slugs = new Map();

  // 允许出现的色值：调色板本身 + 派生的色阶
  const allowed = new Set();
  for (const key of Object.keys(registry)) {
    for (const c of registry[key].colors) {
      allowed.add(c.hex);
      for (const s of ramp(c)) allowed.add(s);
    }
    for (const c of registry[key].series || []) allowed.add(c);
  }
  allowed.add('#FFFFFF');
  allowed.add('#000000');

  for (const page of pages) {
    const rel = relative(DOCS_DIR, page.dir);
    const slug = rel.split('/').pop();

    if (slugs.has(slug)) err(`duplicate slug "${slug}": ${slugs.get(slug)} and ${rel}`);
    else slugs.set(slug, rel);

    if (!page.en) err(`${rel}: missing en.md`);
    if (!page.cn) err(`${rel}: missing cn.md`);

    const docs = {};
    for (const lang of ['en', 'cn']) {
      const file = join(page.dir, `${lang}.md`);
      if (!existsSync(file)) continue;
      const { fm, body } = readBody(file);
      docs[lang] = { file, fm, body };

      if (!/^x-title:\s*\S/m.test(fm)) err(`${rel}/${lang}.md: missing x-title`);
      if (!/^x-desc:\s*\S/m.test(fm)) warn(`${rel}/${lang}.md: missing x-desc`);
      if (!/^x-sidebar:\s*\S/m.test(fm)) warn(`${rel}/${lang}.md: missing x-sidebar`);

      // 文中出现的色值必须来自调色板(生成块内部除外 —— 那是脚本算的,由块一致性把关)
      const handWritten = body.replace(MARK_RE, '<!-- generated -->');
      const hexes = handWritten.match(/#[0-9A-Fa-f]{6}\b/g) || [];
      for (const h of hexes) {
        const up = h.toUpperCase();
        if (!allowed.has(up)) err(`${rel}/${lang}.md: colour ${h} is not in data/palettes.json`);
      }

      // 相对链接必须指向存在的文件
      const links = body.match(/\]\(([^)\s]+\.md)\)/g) || [];
      for (const link of links) {
        const target = link.slice(2, -1);
        if (/^https?:/.test(target)) continue;
        const abs = resolve(dirname(file), target);
        if (!existsSync(abs)) err(`${rel}/${lang}.md: broken link ${target}`);
      }

      // 标记块必须是最新的
      for (const m of body.matchAll(MARK_RE)) {
        const [, kind, spec, block] = m;
        let generated;
        try {
          generated = `\n${renderBlock(kind, spec)}\n`;
        } catch (e) {
          err(`${rel}/${lang}.md: ${e.message}`);
          continue;
        }
        if (block !== generated) err(`${rel}/${lang}.md: ${kind}:${spec} block is stale — run: node scripts/palette.mjs tables`);
      }
    }

    // 中英结构对应
    if (docs.en && docs.cn) {
      const he = headings(docs.en.body).map((h) => h.level);
      const hc = headings(docs.cn.body).map((h) => h.level);
      if (he.join(',') !== hc.join(',')) {
        err(`${rel}: en/cn heading structure differs — en has ${he.length} headings, cn has ${hc.length}`);
      }
    }
  }

  // 组目录要有 _sidebar.yml
  const groups = new Set(pages.map((p) => dirname(relative(DOCS_DIR, p.dir))));
  for (const g of groups) {
    const sb = join(DOCS_DIR, g, '_sidebar.yml');
    if (!existsSync(sb)) { warn(`${g}: missing _sidebar.yml`); continue; }
    const text = readFileSync(sb, 'utf8');
    if (!/en:\s*\S/.test(text)) err(`${g}/_sidebar.yml: missing <text>.en`);
    if (!/zh:\s*\S/.test(text)) err(`${g}/_sidebar.yml: missing <text>.zh`);
  }

  // 声明的色域带要能框住实际色值
  for (const key of ORDERS) {
    const f = families[key];
    const b = bandOf(f);
    const [l0, l1] = f.band.lightness;
    const [c0, c1] = f.band.chroma;
    const EPS = 0.005;
    if (l1 < b.lightness[1] - EPS || l0 > b.lightness[0] + EPS) {
      warn(`${key}: declared lightness ${l0}-${l1} does not cover actual ${num(b.lightness[0])}-${num(b.lightness[1])}`);
    }
    if (c1 < b.chroma[1] - EPS || c0 > b.chroma[0] + EPS) {
      warn(`${key}: declared chroma ${c0}-${c1} does not cover actual ${num(b.chroma[0])}-${num(b.chroma[1])}`);
    }
  }

  for (const w of warnings) console.log(`warn: ${w}`);
  for (const e of errors) console.log(`error: ${e}`);
  console.log(`\n${pages.length} page(s), ${errors.length} error(s), ${warnings.length} warning(s)`);
  if (errors.length) process.exit(1);
}

// 供 build-site.mjs 导入(不触发 CLI)
export { families, schemes, registry, ORDERS, ramp, renderBlock, pageFiles, readBody, headings };

const invokedDirectly = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (invokedDirectly) {
  const cmd = process.argv[2];
  if (cmd === 'stats') cmdStats();
  else if (cmd === 'tables') cmdTables();
  else if (cmd === 'check') cmdCheck();
  else {
    console.log('usage: node scripts/palette.mjs <stats|tables|check>');
    process.exit(2);
  }
}
