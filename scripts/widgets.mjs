// 图解 widget 库 —— 正反例对比卡。自足 HTML,色值一律来自调用方传入的注册表,
// 将来整文件可抽成 x-cmd/draw 的 SVG 模板(每个 WIDGETS 条目 = 一个模板)。
//
// 用法(palette.mjs): <!-- widget:<name>:<lang> --> … <!-- /widget -->

// ---- 自足色彩数学(与 palette.mjs 同算法,独立成单元便于抽取) ----
const hexToRgb = (h) => [0, 2, 4].map((i) => parseInt(h.slice(1 + i, 3 + i), 16));
const rgbToHex = (rgb) => ('#' + rgb.map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0')).join('')).toUpperCase();
const s2l = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const rel = ([r, g, b]) => 0.2126 * s2l(r) + 0.7152 * s2l(g) + 0.0722 * s2l(b);
const contrast = (a, b) => { const x = rel(a), y = rel(b); const [h, l] = x > y ? [x, y] : [y, x]; return (h + 0.05) / (l + 0.05); };
// 近似红色盲(deuteranopia)模拟 —— Viénot 简化矩阵,教学演示足够
const deutan = (rgb) => [
  0.625 * rgb[0] + 0.375 * rgb[1],
  0.70 * rgb[0] + 0.30 * rgb[1],
  0.30 * rgb[1] + 0.70 * rgb[2],
];

const FONT = "font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif";
const pct = (v) => `${Math.round(v * 100)}%`;

// ---- 卡片骨架:一正一反并排 ----
function pair(lang, good, bad) {
  const L = lang === 'cn';
  const cell = (mark, ok, inner, why) => `
  <div style="flex:1;min-width:250px;border:1px solid ${ok ? '#9ACD9A' : '#E0A0A0'};border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:${ok ? '#1A6B3C' : '#A02020'};background:${ok ? '#EFF8F0' : '#FBF0F0'}">${mark}</div>
    <div style="padding:14px">${inner}</div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">${why}</div>
  </div>`;
  return `<div style="display:flex;gap:14px;flex-wrap:wrap;${FONT};margin:16px 0">
${cell(L ? '✅ 对' : '✅ Do', true, good.inner, good.why)}
${cell(L ? '❌ 错' : '❌ Don’t', false, bad.inner, bad.why)}
</div>`;
}

// 内容片段助手
const swatchRow = (hexes, h = 26) => `<div style="display:flex;gap:4px">${hexes.map((h2) => `<div style="flex:1;height:${h}px;background:${h2};border-radius:4px"></div>`).join('')}</div>`;
const miniBars = (hexes, opts = {}) => {
  const hs = [64, 40, 52, 30];
  const label = (i) => (opts.labelIn
    ? `<div style="position:relative;flex:1;max-width:52px;height:${hs[i % 4]}px;background:${hexes[i % hexes.length]};border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:${opts.labelColor};font-size:10.5px;font-weight:600">${12 + i * 7}</div>`
    : `<div style="flex:1;max-width:52px;height:${hs[i % 4]}px;background:${hexes[i % hexes.length]};border-radius:4px 4px 0 0"></div>`);
  return `<div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:${opts.axis || '1px solid #8A8A8A'};padding:4px 2px 0">${[0, 1, 2, 3].map(label).join('')}</div>`;
};

// ---- widget 注册表(每个条目 = 未来一个 draw SVG 模板) ----
// R = 注册表 { families, schemes } 由 palette.mjs 传入
export function renderWidget(name, lang, R) {
  const L = lang === 'cn';
  const F = R.families, S = R.schemes;
  const fam = (k) => F[k].colors;
  const byRole = (k, r) => F[k].colors.find((c) => c.role === r);
  const hex = (k, id) => F[k].colors.find((c) => c.id === id).hex;

  const W = {
    // 1. 文字压粉彩
    'text-on-pastel': () => pair(lang,
      { inner: `<div style="background:${hex('macaron', 'lemon')};border-radius:8px;padding:14px;color:${hex('macaron', 'ink-plum')};font-size:15px;font-weight:600">季度营收 1,203 万</div>`,
        why: L ? `墨梅对柠檬 ${contrast(hexToRgb(hex('macaron', 'ink-plum')), hexToRgb(hex('macaron', 'lemon'))).toFixed(2)} —— 正文级可读` : `ink on lemon ${contrast(hexToRgb(hex('macaron', 'ink-plum')), hexToRgb(hex('macaron', 'lemon'))).toFixed(2)} — body-grade` },
      { inner: `<div style="background:${hex('macaron', 'lemon')};border-radius:8px;padding:14px;color:#FFFFFF;font-size:15px;font-weight:600">季度营收 1,203 万</div>`,
        why: L ? `白字对柠檬 ${contrast(hexToRgb('#FFFFFF'), hexToRgb(hex('macaron', 'lemon'))).toFixed(2)} —— 糊成一团` : `white on lemon ${contrast(hexToRgb('#FFFFFF'), hexToRgb(hex('macaron', 'lemon'))).toFixed(2)} — washed out` }),

    // 2. 家族离开它的底
    'family-on-dark': () => pair(lang,
      { inner: `<div style="background:${hex('macaron', 'cream-paper')};border-radius:8px;padding:12px">${swatchRow(fam('macaron').filter((c) => c.role === 'base').map((c) => c.hex))}</div>`,
        why: L ? '明度带按浅底校准:粉彩在奶油纸上恰好"低语"' : 'band calibrated for a light ground: pastels whisper on cream' },
      { inner: `<div style="background:${hex('neon', 'void')};border-radius:8px;padding:12px">${swatchRow(fam('macaron').filter((c) => c.role === 'base').map((c) => c.hex))}</div>`,
        why: L ? '同一色板压近黑底:全部发光,读成霓虹而不是马卡龙' : 'same palette on near-black: everything glows — reads neon, not macaron' }),

    // 3. HSL 饱和度陷阱
    'hsl-trap': () => {
      const pale = '#FFF1A8', hot = '#F43F5E';
      return pair(lang,
        { inner: `<div style="display:flex;gap:10px;align-items:center"><div style="width:56px;height:40px;background:${pale};border:1px solid #DDD;border-radius:6px"></div><div style="font-size:12px;color:#444">HSL 饱和度 <b>100%</b><br>实际彩度 OKLCH <b>0.09</b></div></div>`,
          why: L ? '按工具显示的"饱和度"理解粉彩,会高估 2 倍以上' : 'trusting HSL saturation overstates this pastel 2×+' },
        { inner: `<div style="display:flex;gap:10px;align-items:center"><div style="width:56px;height:40px;background:${hot};border-radius:6px"></div><div style="font-size:12px;color:#444">HSL 饱和度 <b>89%</b><br>实际彩度 OKLCH <b>0.22</b></div></div>`,
          why: L ? '两者"饱和度"几乎相同,实际色彩量差 2.4 倍——彩度要在 OKLCH 里读' : 'nearly identical HSL %, 2.4× the real colour — read chroma in OKLCH' });
    },

    // 4. 数值内标
    'inside-label': () => pair(lang,
      { inner: miniBars(S.primer.series.slice(0, 4), { labelIn: true, labelColor: '#FFFFFF' }),
        why: L ? `中段色(L 0.52–0.57)白字 4.9–5.4,内标成立` : `mid-band fills carry white at 4.9–5.4 — inside labels work` },
      { inner: miniBars([hex('macaron', 'strawberry-milk'), hex('macaron', 'mint'), hex('macaron', 'sky'), hex('macaron', 'peach')], { labelIn: true, labelColor: '#FFFFFF' }),
        why: L ? `粉彩白字仅 ${contrast(hexToRgb('#FFFFFF'), hexToRgb(hex('macaron', 'mint'))).toFixed(2)} 上下——数字要移到柱外或换墨色` : `white on pastel ≈${contrast(hexToRgb('#FFFFFF'), hexToRgb(hex('macaron', 'mint'))).toFixed(2)} — move values out, or use ink` }),

    // 5. 一个强调色
    'one-accent': () => pair(lang,
      { inner: `<div style="display:flex;gap:8px"><span style="padding:7px 16px;border-radius:8px;background:${hex('macaron', 'coral')};color:#000;font-size:12.5px;font-weight:700">立即开始</span><span style="padding:7px 16px;border-radius:8px;border:1px solid ${hex('macaron', 'ink-plum')};color:${hex('macaron', 'ink-plum')};font-size:12.5px">文档</span><span style="padding:7px 16px;border-radius:8px;border:1px solid ${hex('macaron', 'ink-plum')};color:${hex('macaron', 'ink-plum')};font-size:12.5px">示例</span></div>`,
        why: L ? '一眼一个动作:珊瑚独占"可以点"' : 'one action at a glance: coral owns "act"' },
      { inner: `<div style="display:flex;gap:8px"><span style="padding:7px 16px;border-radius:8px;background:${hex('macaron', 'coral')};color:#000;font-size:12.5px;font-weight:700">立即开始</span><span style="padding:7px 16px;border-radius:8px;background:${hex('macaron', 'mint')};color:#000;font-size:12.5px;font-weight:700">文档</span><span style="padding:7px 16px;border-radius:8px;background:${hex('macaron', 'sky')};color:#000;font-size:12.5px;font-weight:700">示例</span></div>`,
        why: L ? '三个"按钮"打架,眼睛来回扫——强调是配给制' : 'three buttons argue — accent is rationed' }),

    // 6. 密度跟彩度走
    'density': () => pair(lang,
      { inner: `<div style="padding:8px">${miniBars(fam('memphis').filter((c) => c.role === 'base').map((c) => c.hex), { axis: '1px solid ' + hex('memphis', 'black') })}</div>`,
        why: L ? '吵的颜色收紧排,能量才像设计而不像事故' : 'loud colours packed tight reads designed, not accidental' },
      { inner: `<div style="padding:26px 30px">${miniBars(fam('memphis').filter((c) => c.role === 'base').map((c) => c.hex), { axis: '1px solid ' + hex('memphis', 'black') })}</div>`,
        why: L ? '高彩度 + 大留白 = 未完成感;留白是安静家族挣的' : 'high chroma + air reads unfinished; air is earned by quiet families' }),

    // 7. 网格重量
    'grid-weight': () => pair(lang,
      { inner: `<div style="position:relative">${miniBars(S.primer.series.slice(0, 4), { axis: '1px solid #D0D7DE' })}</div>`,
        why: L ? '发丝网格:结构在,注意力在数据' : 'hairline grid: structure without stealing attention' },
      { inner: `<div style="background:repeating-linear-gradient(0deg,#9A9A9A 0,#9A9A9A 2px,transparent 2px,transparent 16px);border-radius:6px;padding-top:2px">${miniBars(S.primer.series.slice(0, 4), { axis: '3px solid #555' })}</div>`,
        why: L ? '网格比系列还响 = 图在承认无话可说' : 'grid louder than the series = the chart has nothing to say' }),

    // 8. 溢出污染
    'overflow': () => {
      const soft = ['#72CEDC', '#F3C898', '#7698D6', '#D281A8', '#82BA95'];
      return pair(lang,
        { inner: swatchRow([...soft, '#5AAFC4', '#D9AF7E', '#5F82BE', '#B76E96', '#6BA37E']),
          why: L ? '同族延伸:软色板超编时按同气质加深,第 10 色仍是 OpenData' : 'same-blood extension: overflow steps stay in character' },
        { inner: swatchRow([...soft, '#F59E0B', '#0EA5E9', '#8B5CF6', '#EC4899', '#6366F1']),
          why: L ? '全局 Tailwind 溢出:第 6 色起突然鲜艳 —— 今天的 padSeries 行为(实测)' : 'global Tailwind overflow: from #6 it screams — today’s live behaviour' });
    },

    // 9. 渐变 vs 单色
    'gradient-vs-solid': () => pair(lang,
      { inner: `<div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0">${[64, 44, 56, 34].map((h) => `<div style="flex:1;max-width:52px;height:${h}px;background:${S.primer.series[0]};border-radius:3px 3px 0 0"></div>`).join('')}</div>`,
        why: L ? 'Primer 单色:GitHub 图表不做渐变' : 'solid primer — GitHub charts don’t gradient' },
      { inner: `<div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0">${[64, 44, 56, 34].map((h) => `<div style="flex:1;max-width:52px;height:${h}px;background:linear-gradient(90deg,${S.primer.series[0]},${S.primer.series[1]});border-radius:3px 3px 0 0"></div>`).join('')}</div>`,
        why: L ? '蓝→绿渐变:每根柱两种语义色,平台气质全失' : 'blue→green blend: two semantic hues per bar, platform feel gone' }),

    // 10. 色盲可分
    'cvd': () => {
      const red = '#CF222E', green = '#1A7F37';
      const sim = (h) => rgbToHex(deutan(hexToRgb(h)));
      return pair(lang,
        { inner: `<div style="display:flex;gap:10px;align-items:center"><div style="display:flex;gap:4px"><div style="width:40px;height:26px;background:${sim('#E69F00')};border-radius:4px"></div><div style="width:40px;height:26px;background:${sim('#0072B2')};border-radius:4px"></div></div><div style="font-size:11.5px;color:#666">${L ? '红绿色盲视角:橙 vs 蓝 仍然分开' : 'deuteranopia view: orange vs blue still split'}</div></div>`,
          why: L ? 'Okabe-Ito:用明度+蓝橙轴,不赌红绿' : 'okabe-ito: lightness + blue/orange axis — never bet on red/green' },
        { inner: `<div style="display:flex;gap:10px;align-items:center"><div style="display:flex;gap:4px"><div style="width:40px;height:26px;background:${sim(red)};border-radius:4px"></div><div style="width:40px;height:26px;background:${sim(green)};border-radius:4px"></div></div><div style="font-size:11.5px;color:#666">${L ? '红绿色盲视角:红绿几近同色' : 'deuteranopia view: red ≈ green'}</div></div>`,
          why: L ? `约 8% 男性分不开这对 —— "红涨绿跌"要配形状/位置双编码` : `~8% of men can’t split this — pair red/green with shape or position` });
    },
  };

  const fn = W[name];
  if (!fn) throw new Error(`unknown widget: ${name} (have: ${Object.keys(W).join(', ')})`);
  return fn();
}
