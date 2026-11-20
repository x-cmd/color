---
x-title: Type and spacing — the other half of a style
x-desc: A chart theme is three orthogonal axes — structure, anchor, and skin. The skin is fonts, weights, density, corner radius and grid. The full guide for all thirteen styles, and the same chart rendered in seven different skins.
x-sidebar: Type and spacing
x-keywords: typography guide, spacing, chart typography, font pairing, tabular numbers, corner radius, grid, 字体, 间距, 图表字体, 等宽数字
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Type and spacing — the other half of a style'
      inLanguage: 'en'
      about: 'typography, density and grid as the third axis of a chart theme'
---

# Type and spacing — the other half of a style

---

Colour gets all the attention, but a theme has three orthogonal axes, and colour is only the
first:

1. **Structure** — the lightness band, the chroma budget, the series geometry.
2. **Anchor** — where the scheme sits on the colour wheel. [Rotatable](../04-hue-anchors/en.md).
3. **Skin** — typography, weight, tracking, density, corner radius, grid.

This is why "use macaron, then switch the theme to wabi-sabi" cannot be one parameter. Rotating
an anchor turns phosphor-green into phosphor-purple; it can never turn macaron into wabi-sabi,
because those two differ in *structure*. And even after you fix both colour axes, the theme is
not done: put Helvetica and square corners on macaron and the family dies in front of you.
That last half is this page.

---

## 1. Three axes

| Axis | What it fixes | Cheap to change? |
| --- | --- | --- |
| Structure | `L` band, `C` band, hue geometry, which member is neutral | No — it is the style |
| Anchor | where series 1 lands on the wheel | Yes — one number, [safe to rotate](../04-hue-anchors/en.md) |
| Skin | fonts, weights, tracking, density, radius, grid | Yes — but it must *agree* with the structure |

A complete chart theme for a product like draw is therefore
`theme = structure × anchor × skin` — three parameters, not thirty hex codes.

---

## 2. The guide

Every family and scheme in this book, in one table each. Fonts are system-safe stacks; webfonts
substitute directly when you have them.

<!-- type-guide:en -->
### The seven families

| Style | Headings | Body | Numbers | Weight / tracking / density | Radius | Grid |
| --- | --- | --- | --- | --- | --- | --- |
| Macaron | ui-rounded, 'SF Pro Rounded', Quicksand, system-ui | ui-rounded, system-ui, sans-serif | tabular | 600 / 0em / airy | 14 | none |
| Morandi | Georgia, 'Source Serif 4', serif | 'Avenir Next', 'Segoe UI', sans-serif | tabular | 400 / 0.01em / airy | 6 | hairline |
| Swiss Neutral | 'Helvetica Neue', Helvetica, Inter, Arial | 'Helvetica Neue', Helvetica, Inter, Arial | tabular (mandatory) | 700 / -0.01em / normal | 0 | hairline |
| Nordic | Inter, system-ui, sans-serif | Inter, system-ui, sans-serif | tabular | 300 / 0.02em / airy | 8 | hairline |
| Wabi-sabi | 'Iowan Old Style', Palatino, Georgia, serif | 'Iowan Old Style', Palatino, Georgia, serif | old-style (prose) / tabular (data) | 400 / 0em / airy | 2 | none |
| Memphis | 'Archivo Black', 'Arial Black', system-ui | Inter, system-ui, sans-serif | tabular | 900 / 0em / compact | mixed 0 / pill | dotted |
| Neon | 'JetBrains Mono', ui-monospace, monospace | system-ui, sans-serif | tabular mono | 600 / 0em / compact | 6 | none |

### The six schemes

| Style | Headings | Body | Numbers | Weight / tracking / density | Radius | Grid |
| --- | --- | --- | --- | --- | --- | --- |
| Letterpress | 'Playfair Display', Georgia, serif | Georgia, serif | old-style (prose) / tabular (data) | 700 / 0em / normal | 2 | hairline |
| Phosphor Paper | Inter, system-ui, sans-serif | Inter, system-ui, sans-serif | tabular | 650 / -0.01em / normal | 8 | hairline |
| Broadsheet | Georgia, 'Nimbus Roman', serif | 'Helvetica Neue', Arial, sans-serif | tabular | 700 / -0.005em / compact | 0 | dotted |
| Salmon | 'Financier Display', Georgia, serif | 'Metric', 'Segoe UI', sans-serif | tabular | 600 / 0em / normal | 2 | hairline |
| Okabe-Ito | Arial, Helvetica, sans-serif | Arial, Helvetica, sans-serif | tabular | 400 / 0em / normal | 4 | hairline |
| Mono Signal | 'Helvetica Neue', Helvetica, Arial | 'Helvetica Neue', Helvetica, Arial | tabular (mandatory) | 700 / 0em / airy | 0 | hairline |
<!-- /type-guide -->

Read the table by column, not by row: the **Numbers** column is the only one with no exceptions
worth making — data figures are tabular or they misalign; the **Radius** column is the fastest
skin signal a screenshot carries (14px never says "swiss", 0px never says "macaron").

---

## 3. Worn — the same chart in seven skins

The same mini chart, wearing each family's skin over its own palette. Same data, same layout —
only type, weight, spacing, radius and grid change:

<!-- skins:en -->
<div style="border:1px solid #8C7F8433;border-radius:14px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#FFFDFB">
    <div style="font-family:ui-rounded, 'SF Pro Rounded', Quicksand, system-ui;font-weight:600;letter-spacing:0em;color:#4A4045;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:ui-rounded, system-ui, sans-serif;color:#8C7F84;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#F8C8DC;border-radius:14px 14px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#A8E6CF;border-radius:14px 14px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#C3B1E1;border-radius:14px 14px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#FFF1A8;border-radius:14px 14px 0 0"></div></div>
    <div style="margin-top:8px;font-family:ui-rounded, system-ui, sans-serif;font-size:10.5px;color:#8C7F84;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#8C7F84">Macaron — Rounded everything; generous padding; no gridlines — softness is the message</div>
  </div>
</div>
<div style="border:1px solid #8A817A33;border-radius:6px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#F5F2ED">
    <div style="font-family:Georgia, 'Source Serif 4', serif;font-weight:400;letter-spacing:0.01em;color:#3F3A38;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:'Avenir Next', 'Segoe UI', sans-serif;color:#8A817A;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:1px solid #8A817A;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#A3B18A;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#DAD7CD;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#B0B7C6;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#C4AFA1;border-radius:6px 6px 0 0"></div></div>
    <div style="margin-top:8px;font-family:'Avenir Next', 'Segoe UI', sans-serif;font-size:10.5px;color:#8A817A;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#8A817A">Morandi — Serif titles over quiet sans body; hairline rules only</div>
  </div>
</div>
<div style="border:1px solid #9B9B9B33;border-radius:0px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:14px 18px;background:#FFFFFF">
    <div style="font-family:'Helvetica Neue', Helvetica, Inter, Arial;font-weight:700;letter-spacing:-0.01em;color:#000000;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:'Helvetica Neue', Helvetica, Inter, Arial;color:#9B9B9B;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:1px solid #9B9B9B;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#F5F5F5;border-radius:0"></div><div style="flex:1;max-width:46px;height:36px;background:#E0E0E0;border-radius:0"></div><div style="flex:1;max-width:46px;height:47px;background:#333333;border-radius:0"></div><div style="flex:1;max-width:46px;height:28px;background:#FF0000;border-radius:0"></div></div>
    <div style="margin-top:8px;font-family:'Helvetica Neue', Helvetica, Inter, Arial;font-size:10.5px;color:#9B9B9B;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#9B9B9B">Swiss Neutral — One family, one weight jump, 8pt grid, square corners; tabular figures everywhere</div>
  </div>
</div>
<div style="border:1px solid #2E3A4033;border-radius:8px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#F7F9FA">
    <div style="font-family:Inter, system-ui, sans-serif;font-weight:300;letter-spacing:0.02em;color:#2E3A40;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:Inter, system-ui, sans-serif;color:#2E3A40;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:1px solid #2E3A40;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#E8EDF0;border-radius:8px 8px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#C9D6DE;border-radius:8px 8px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#9FB6C4;border-radius:8px 8px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#6B8FA3;border-radius:8px 8px 0 0"></div></div>
    <div style="margin-top:8px;font-family:Inter, system-ui, sans-serif;font-size:10.5px;color:#2E3A40;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#2E3A40">Nordic — Light weights, wide leading, more whitespace than content</div>
  </div>
</div>
<div style="border:1px solid #3B342E33;border-radius:2px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#E8E0D5">
    <div style="font-family:'Iowan Old Style', Palatino, Georgia, serif;font-weight:400;letter-spacing:0em;color:#3B342E;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:'Iowan Old Style', Palatino, Georgia, serif;color:#3B342E;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#C9BBA6;border-radius:2px 2px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#A08C7D;border-radius:2px 2px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#8C6D5B;border-radius:2px 2px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#7D8471;border-radius:2px 2px 0 0"></div></div>
    <div style="margin-top:8px;font-family:'Iowan Old Style', Palatino, Georgia, serif;font-size:10.5px;color:#3B342E;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#3B342E">Wabi-sabi — Serif throughout, hand-cut corners, no mechanical grid</div>
  </div>
</div>
<div style="border:1px solid #1A1A1A33;border-radius:0px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:10px 14px;background:#FFFFFF">
    <div style="font-family:'Archivo Black', 'Arial Black', system-ui;font-weight:900;letter-spacing:0em;color:#1A1A1A;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:Inter, system-ui, sans-serif;color:#1A1A1A;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:2px dotted #1A1A1A;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#FFE14D;border-radius:999px 999px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#FF9F1C;border-radius:999px 999px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#2EC4B6;border-radius:999px 999px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#3A86FF;border-radius:999px 999px 0 0"></div></div>
    <div style="margin-top:8px;font-family:Inter, system-ui, sans-serif;font-size:10.5px;color:#1A1A1A;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#1A1A1A">Memphis — Display weight up front, blocks tight, dot grids welcome</div>
  </div>
</div>
<div style="border:1px solid #8B98A533;border-radius:6px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:10px 14px;background:#05060A">
    <div style="font-family:'JetBrains Mono', ui-monospace, monospace;font-weight:600;letter-spacing:0em;color:#E6EDF3;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:system-ui, sans-serif;color:#8B98A5;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#131722;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#00F0FF;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#FF2E88;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#39FF14;border-radius:6px 6px 0 0"></div></div>
    <div style="margin-top:8px;font-family:system-ui, sans-serif;font-size:10.5px;color:#8B98A5;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#8B98A5">Neon — Mono for anything technical; glow replaces lines</div>
  </div>
</div>
<!-- /skins -->

Squint and the families stay separable with the colours removed. That is the test of a skin: it
should survive greyscale, because half the charts in the world are printed that way.

---

## 4. Rules that travel

- **Tabular figures for all data.** `font-variant-numeric: tabular-nums`. Old-style figures are
  beautiful in prose and treacherous in axes — 1 and 7 dancing above and below the baseline.
  Wabi-sabi and letterpress may use them in running text, never in the chart.
- **Density follows the family's chroma budget.** Quiet palettes earn air (nordic, wabi-sabi,
  morandi at *airy*); loud palettes tighten (memphis, neon at *compact*). Loud *and* airy reads
  as unfinished; quiet *and* tight reads as apologetic.
- **One weight jump, not two.** Swiss to memphis, every family above uses exactly one bold step
  over its body weight. A second jump is a second voice, and charts cannot afford dialogue.
- **Radius is dialect.** 0–2px speaks print and instruments; 6–8px speaks product; 14px+ speaks
  consumer softness; pills speak play. Mixing dialects on one canvas needs a reason — memphis
  is the only one here that has one.
- **Gridlines are quieter than data, always.** Hairline for structure, dotted for guidance,
  none for confidence. A grid heavier than the series is the chart admitting it has nothing to
  say.

---

## 5. Why this completes the theme

With the third axis named, the draw theme system closes:

```text
theme = structure (which of 13) × anchor (0–360°) × skin (bound to structure)
```

One URL parameter trio, every output validated, every combination coherent by construction.
That is the difference between a theme *library* and a theme *system* — and it is what the
[selection SKILL](../03-chart-schemes/en.md) chooses between, when the agent reads your data and
picks your parameters for you.

---

## 6. Where to go next

| | |
| --- | --- |
| [Hue anchors](../04-hue-anchors/en.md) | the second axis, with worn examples |
| [Chart style schemes](../03-chart-schemes/en.md) | the structures this guide dresses |
| [Reading a palette](../../1-overview/02-reading-a-palette/en.md) | the colour axis, from the beginning |
