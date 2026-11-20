#!/usr/bin/env node
// 把 docs/ 与 data/palettes.json 渲染成静态站 → dist/color/
// 由 wrangler 以 assets-only worker 发布到 x-cmd.com/color*(见 wrangler.jsonc)。
//
// 布局(路由前缀 /color):
//   /color/                 首页 = family-at-a-glance(en)
//   /color/cn/              首页(cn)
//   /color/<slug>/          文章(en)
//   /color/cn/<slug>/       文章(cn)
//
// 用法: node scripts/build-site.mjs   (或 npm run build:site)

import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { pageFiles, readBody } from './palette.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(ROOT, 'docs');
const DIST = join(ROOT, 'dist');

/* ---------- 页面清单 ---------- */

const groupNum = (dir) => Number(dir.split('-')[0]);
const pageNum = (dir) => Number(dir.split('-')[0]);

// 组名(侧边栏标题)从 _sidebar.yml 的 <text> 读;读不到就用目录名
function groupText(groupDir) {
  const file = join(DOCS, groupDir, '_sidebar.yml');
  if (!existsSync(file)) return { en: groupDir, zh: groupDir };
  const text = readFileSync(file, 'utf8').match(/<text>:\s*\n\s*en:\s*(.+)\n\s*zh:\s*(.+)/);
  return text ? { en: text[1].trim(), zh: text[2].trim() } : { en: groupDir, zh: groupDir };
}

const pages = pageFiles().map(({ dir }) => {
  const rel = relative(DOCS, dir);
  const [groupDir, pageDir] = rel.split('/');
  return {
    dir,
    groupDir,
    pageDir,
    slug: pageDir.replace(/^\d+-/, ''),
    order: [groupNum(groupDir), pageNum(pageDir)],
  };
}).sort((a, b) => a.order[0] - b.order[0] || a.order[1] - b.order[1]);

const bySlug = new Map(pages.map((p) => [p.slug, p]));
const groups = [...new Set(pages.map((p) => p.groupDir))]
  .sort((a, b) => groupNum(a) - groupNum(b))
  .map((g) => ({ dir: g, text: groupText(g), pages: pages.filter((p) => p.groupDir === g) }));

/* ---------- markdown 渲染 ---------- */

marked.setOptions({ gfm: true });

const SITE_TITLES = { en: 'Colour Families', cn: '色系手册' };

const fmGet = (fm, key) => fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))?.[1]?.trim();

// 相对 .md 链接 → 站内路由;保持语言不变
function rewriteLinks(html, page, lang) {
  return html.replace(/\]\(([^)]+\.md)\)/g, (_m, target) => {
    const abs = resolve(dirname(join(page.dir, `${lang}.md`)), target);
    const pageDir = relative(DOCS, dirname(abs)).split('/').pop();
    const slug = pageDir?.replace(/^\d+-/, '');
    if (!slug || !bySlug.has(slug)) return `](${target})`;
    return `](/color/${lang === 'cn' ? 'cn/' : ''}${slug}/)`;
  });
}

function renderPage(page, lang) {
  const file = join(page.dir, `${lang}.md`);
  const { fm, body } = readBody(file);
  const raw = fm.length ? body : readFileSync(file, 'utf8');
  const html = rewriteLinks(marked.parse(raw), page, lang);
  return {
    title: fmGet(fm, 'x-title') || page.slug,
    desc: fmGet(fm, 'x-desc') || '',
    html,
  };
}

/* ---------- 模板 ---------- */

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function nav(page, lang) {
  const zh = lang === 'cn';
  const list = groups.map((g) => {
    const items = g.pages.map((p) => {
      const cur = page && p.slug === page.slug;
      const label = fmGet(readBody(join(p.dir, `${lang}.md`)).fm, 'x-sidebar') || p.slug;
      return `<a class="${cur ? 'cur' : ''}" href="/color/${lang === 'cn' ? 'cn/' : ''}${p.slug}/">${label}</a>`;
    }).join('');
    return `<div class="grp"><h3>${g.text[zh ? 'zh' : 'en']}</h3>${items}</div>`;
  }).join('');
  return `<nav>${list}
  <div class="grp"><h3>${zh ? '数据' : 'Data'}</h3>
    <a href="https://github.com/x-cmd/color/blob/main/data/palettes.json">palettes.json</a>
    <a href="https://github.com/x-cmd/color">GitHub</a>
  </div></nav>`;
}

function shell({ title, desc, body, page, lang, extraHead = '' }) {
  const zh = lang === 'cn';
  const other = lang === 'cn' ? 'en' : 'cn';
  const otherHref = page
    ? `/color/${other === 'cn' ? 'cn/' : ''}${page.slug}/`
    : (other === 'cn' ? '/color/cn/' : '/color/');
  // 切语言:记住语言 + 记住滚动位置(新页恢复,不跳顶)
  const toggleClick = `try{localStorage.setItem('color-lang','${other}');sessionStorage.setItem('color-pos',String(scrollY))}catch(e){}`;
  const bootScript = `<script>
(function(){
  try {
    if (matchMedia('(max-width:860px)').matches)
      document.querySelectorAll('details.navbox').forEach(function(d){ d.open = false });
    var EN = '/color/', CN = '/color/cn/', path = location.pathname;
    var cur = path.indexOf(CN) === 0 ? 'cn' : 'en';
    var saved = localStorage.getItem('color-lang');
    if (saved && saved !== cur) {
      var target = saved === 'cn' ? CN + path.slice(EN.length) : EN + path.slice(CN.length);
      if (target !== path) {
        var x = new XMLHttpRequest(); x.open('HEAD', target, false); x.send();
        if (x.status === 200) { location.replace(target); return; }
      }
    }
    var p = sessionStorage.getItem('color-pos');
    if (p !== null) { sessionStorage.removeItem('color-pos'); scrollTo(0, +p); }
  } catch (e) {}
})();
</script>`;
  return `<!doctype html>
<html lang="${lang === 'cn' ? 'zh-CN' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)} · ${SITE_TITLES[lang]}</title>
<meta name="description" content="${esc(desc)}">
<link rel="stylesheet" href="/color/style.css">
${extraHead}
</head>
<body>
<header>
  <a class="brand" href="/color/${lang === 'cn' ? 'cn/' : ''}"><span class="dot"></span>${SITE_TITLES[lang]}</a>
  <span class="switch"><a href="${otherHref}" lang="${other}" onclick="${toggleClick}">${other === 'cn' ? '中文' : 'EN'}</a></span>
</header>
<div class="wrap">
<details class="navbox" open>
<summary>${zh ? '目录' : 'Contents'}</summary>
${nav(page, lang)}
</details>
<main>${body}</main>
</div>
${bootScript}
</body>
</html>`;
}

/* ---------- 输出 ---------- */

const out = (p) => join(DIST, p);
rmSync(DIST, { recursive: true, force: true });
mkdirSync(out('color'), { recursive: true });

for (const lang of ['en', 'cn']) {
  const prefix = lang === 'cn' ? 'color/cn' : 'color';
  mkdirSync(out(prefix), { recursive: true });

  for (const page of pages) {
    const r = renderPage(page, lang);
    const dir = out(`${prefix}/${page.slug}`);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), shell({
      title: r.title, desc: r.desc, body: r.html, page, lang,
    }));
  }
}

// 首页 = family-at-a-glance(实例长廊所在页)
for (const lang of ['en', 'cn']) {
  const home = bySlug.get('family-at-a-glance');
  const r = renderPage(home, lang);
  const dir = lang === 'cn' ? out('color/cn') : out('color');
  writeFileSync(join(dir, 'index.html'), shell({
    title: r.title, desc: r.desc, body: r.html, page: { slug: 'family-at-a-glance' }, lang,
  }));
}

writeFileSync(out('color/style.css'), readFileSync(join(ROOT, 'scripts', 'site.css'), 'utf8'));

// workers.dev 直连时的根路径跳转 + 404
writeFileSync(out('_redirects'), '/ /color/ 302\n');
writeFileSync(out('404.html'), `<!doctype html><meta charset="utf-8"><title>404 · Colour Families</title>
<meta http-equiv="refresh" content="0;url=/color/">`);

const count = pages.length * 2 + 2;
console.log(`dist/color: ${count} pages (${pages.length} articles × en/cn + 2 home)`);
