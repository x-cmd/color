---
x-title: Chart style schemes
x-desc: Four series palettes for charts — broadsheet, salmon, okabe-ito and mono-signal — and the five decisions every chart scheme must make. Written for x-cmd/draw's style ceiling.
x-sidebar: Chart schemes
x-keywords: chart palette, series colours, categorical palette, okabe-ito, colorblind safe, financial charts, 图表配色, 系列色, 色盲安全
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Chart style schemes'
      inLanguage: 'en'
      about: 'categorical series palettes for chart rendering'
---

# Chart style schemes

---

A UI scheme is judged by its landing page. A **chart scheme** is judged by the millionth chart
it renders. That difference changes what matters: the canvas matters less, the *series* matter
more, and the questions become engineering questions — distinguishability at depth, colour-blind
safety, print, dark ground. This page holds four schemes, each answering those questions
differently, plus [phosphor](../02-scheme-phosphor/en.md)'s series from the previous page.

---

## 1. What a chart scheme must decide

1. **Canvas** — light paper, tinted paper, or dark. Everything else is judged against it.
2. **Series count** — how many colours stay separable. Six is honest; eight is ambitious; twelve
   is a lie the legend tells.
3. **Chroma discipline** — one band (like phosphor's `C` 0.09–0.25) keeps any chart coordinated;
   mixed bands make each chart a new accident.
4. **Colour-blind safety** — ~8% of men cannot separate red from green. Either the palette is
   CVD-ordered (okabe-ito) or you accept the loss and say so.
5. **Print** — pale yellows and cyans die on office printers. A print-safe set keeps `L` below
   ~0.75 and gives every series a dark-enough stroke.

---

## 2. Broadsheet — the serious newspaper

Warm newsprint ground, brick and deep blue carrying the story. Journalistic authority with
print-safe chroma throughout — every series sits between `C` 0.08 and 0.13, which is why the
palette survives both newsprint and laser toner.

<!-- series:broadsheet:en -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#B5442C"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#175E8C"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#3E9C8C"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#C99B2F"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#6B5B95"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#4E7A4E"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#A65E4E"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#8C8578"></div></div>

| Swatch | Hex | HSL | OKLCH | Black text | White text |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#B5442C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#B5442C` | 11° 61% 44% | 0.54 0.15 34° | 3.83 (AA-large) | 5.49 (AA) |
| <span style="background-color:#175E8C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#175E8C` | 204° 72% 32% | 0.46 0.10 243° | 3.02 (AA-large) | 6.96 (AA) |
| <span style="background-color:#3E9C8C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#3E9C8C` | 170° 43% 43% | 0.63 0.09 180° | 6.34 (AA) | 3.31 (AA-large) |
| <span style="background-color:#C99B2F">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#C99B2F` | 42° 62% 49% | 0.71 0.13 84° | 8.21 (AAA) | 2.56 (fail) |
| <span style="background-color:#6B5B95">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#6B5B95` | 257° 24% 47% | 0.51 0.09 296° | 3.56 (AA-large) | 5.91 (AA) |
| <span style="background-color:#4E7A4E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#4E7A4E` | 120° 22% 39% | 0.54 0.08 144° | 4.22 (AA-large) | 4.98 (AA) |
| <span style="background-color:#A65E4E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#A65E4E` | 11° 36% 48% | 0.56 0.10 33° | 4.33 (AA-large) | 4.85 (AA) |
| <span style="background-color:#8C8578">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#8C8578` | 39° 8% 51% | 0.62 0.02 83° | 5.74 (AA) | 3.66 (AA-large) |
<!-- /series -->

Use it for: reports, editorial data pages, anywhere the chart is *evidence* rather than
decoration.

---

## 3. Salmon — the financial pages

The pink-paper press: claret and oxford blue on salmon ground. The paper itself is part of the
data story — financial charts on salmon read as *institutional*, the way the same charts on white
read as startup.

<!-- series:salmon:en -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#8F1D3E"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#0F6E75"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#0E93C9"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#F07F2E"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#2E8A7A"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#80855C"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#5A648B"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#B48A9E"></div></div>

| Swatch | Hex | HSL | OKLCH | Black text | White text |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#8F1D3E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#8F1D3E` | 343° 66% 34% | 0.43 0.15 10° | 2.41 (fail) | 8.70 (AAA) |
| <span style="background-color:#0F6E75">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0F6E75` | 184° 77% 26% | 0.49 0.08 203° | 3.51 (AA-large) | 5.99 (AA) |
| <span style="background-color:#0E93C9">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0E93C9` | 197° 87% 42% | 0.63 0.13 234° | 6.04 (AA) | 3.48 (AA-large) |
| <span style="background-color:#F07F2E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#F07F2E` | 25° 87% 56% | 0.71 0.16 52° | 7.78 (AAA) | 2.70 (fail) |
| <span style="background-color:#2E8A7A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#2E8A7A` | 170° 50% 36% | 0.58 0.09 179° | 5.03 (AA) | 4.17 (AA-large) |
| <span style="background-color:#80855C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#80855C` | 67° 18% 44% | 0.60 0.06 114° | 5.43 (AA) | 3.87 (AA-large) |
| <span style="background-color:#5A648B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#5A648B` | 228° 21% 45% | 0.51 0.06 273° | 3.63 (AA-large) | 5.78 (AA) |
| <span style="background-color:#B48A9E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#B48A9E` | 331° 22% 62% | 0.68 0.06 349° | 7.07 (AAA) | 2.97 (fail) |
<!-- /series -->

Use it for: business and financial charts, annual-report exports. The claret doubles as the
negative-direction colour in diverging charts, oxford as positive.

---

## 4. Okabe-Ito — the accessibility standard

Included **verbatim**, because its value is its calibration. Okabe & Ito's eight-colour set is
the de-facto standard for colour-blind-safe categorical colour across scientific publishing:
every pair remains separable under deuteranopia, protanopia and tritanopia.

<!-- series:okabe-ito:en -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#E69F00"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#56B4E9"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#009E73"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#F0E442"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#0072B2"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#D55E00"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#CC79A7"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#000000"></div></div>

| Swatch | Hex | HSL | OKLCH | Black text | White text |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#E69F00">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#E69F00` | 41° 100% 45% | 0.75 0.16 77° | 9.32 (AAA) | 2.25 (fail) |
| <span style="background-color:#56B4E9">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#56B4E9` | 202° 77% 63% | 0.73 0.12 236° | 9.10 (AAA) | 2.31 (fail) |
| <span style="background-color:#009E73">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#009E73` | 164° 100% 31% | 0.62 0.13 165° | 6.14 (AA) | 3.42 (AA-large) |
| <span style="background-color:#F0E442">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#F0E442` | 56° 85% 60% | 0.90 0.17 105° | 15.88 (AAA) | 1.32 (fail) |
| <span style="background-color:#0072B2">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0072B2` | 202° 100% 35% | 0.53 0.13 244° | 4.05 (AA-large) | 5.19 (AA) |
| <span style="background-color:#D55E00">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#D55E00` | 26° 100% 42% | 0.62 0.17 48° | 5.43 (AA) | 3.87 (AA-large) |
| <span style="background-color:#CC79A7">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#CC79A7` | 327° 45% 64% | 0.68 0.12 346° | 6.86 (AA) | 3.06 (AA-large) |
| <span style="background-color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#000000` | 0° 0% 0% | 0.00 0.00 0° | 1.00 (fail) | 21.00 (AAA) |
<!-- /series -->

Use it for: public data, science, anything accessibility-critical. Two honest warnings — the
yellow `#F0E442` cannot carry text or thin strokes (1.07 against black), and the black member is
a series colour, not an ink.

---

## 5. Mono-signal — one story, told straight

Seven greys and one signal red. The swiss discipline applied to data: when the chart has one
thing to say, colour is the exclamation mark and everything else is context. For multi-series
work it is the wrong tool — by design.

<!-- series:mono-signal:en -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#101010"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#333333"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#555555"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#777777"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#999999"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#BBBBBB"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#DDDDDD"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#C0182B"></div></div>

| Swatch | Hex | HSL | OKLCH | Black text | White text |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#101010">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#101010` | 0° 0% 6% | 0.17 0.00 90° | 1.10 (fail) | 19.03 (AAA) |
| <span style="background-color:#333333">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#333333` | 0° 0% 20% | 0.32 0.00 90° | 1.66 (fail) | 12.63 (AAA) |
| <span style="background-color:#555555">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#555555` | 0° 0% 33% | 0.45 0.00 90° | 2.82 (fail) | 7.46 (AAA) |
| <span style="background-color:#777777">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#777777` | 0° 0% 47% | 0.57 0.00 90° | 4.69 (AA) | 4.48 (AA-large) |
| <span style="background-color:#999999">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#999999` | 0° 0% 60% | 0.68 0.00 90° | 7.37 (AAA) | 2.85 (fail) |
| <span style="background-color:#BBBBBB">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#BBBBBB` | 0° 0% 73% | 0.79 0.00 90° | 10.94 (AAA) | 1.92 (fail) |
| <span style="background-color:#DDDDDD">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#DDDDDD` | 0° 0% 87% | 0.90 0.00 90° | 15.46 (AAA) | 1.36 (fail) |
| <span style="background-color:#C0182B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#C0182B` | 353° 78% 42% | 0.52 0.20 23° | 3.41 (AA-large) | 6.16 (AA) |
<!-- /series -->

Use it for: executive summaries, one-series-is-the-story charts, print. The signal red
`#C0182B` carries 5.93 against white — labels and annotations are safe.

---

## 6. How far this can go

The ceiling for a chart product is not more palettes — it is **scheme as a first-class object**:
canvas + series + typography + axis treatment as one switchable definition, validated the way
draw validates data. Five schemes now exist here (phosphor's included); the pattern generalises
to any lineage you can name — each new one is an afternoon of OKLCH work plus the judgment this
book exists to teach.

The next step beyond palettes is selection: an agent that reads the data shape and the context
and picks the scheme — which is exactly what a draw SKILL should do.

---

## 7. Where to go next

| | |
| --- | --- |
| [Phosphor Paper](../02-scheme-phosphor/en.md) | the scheme proposed for draw, with its series |
| [Letterpress](../01-scheme-letterpress/en.md) | where the editorial lineage comes from |
| [Hue anchors](../04-hue-anchors/en.md) | one style, every anchor on the wheel — the parametric level |
| [Reading a palette](../../1-overview/02-reading-a-palette/en.md) | audit any series palette in five steps |
