# color — docs

One article series per **colour style family** — macaron, morandi, swiss neutral, nordic,
wabi-sabi, memphis and neon — each with a definition, a palette walk-through, a comparison with
its nearest neighbour, and a set of applications. Every article exists in English and Chinese;
the two versions mirror each other section for section.

All colour values live in [`data/palettes.json`](../data/palettes.json). Every table in these
articles is generated from that file by [`scripts/palette.mjs`](../scripts/palette.mjs) — after
editing the data, run `node scripts/palette.mjs tables`, and lint with `node scripts/palette.mjs check`.

Folder names carry a numeric prefix for ordering — the prefix is dropped when the site is
published.

## 1 · Overview

| page | what it covers |
| --- | --- |
| [What is a colour family](1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares, and the vocabulary used throughout |
| [Reading a palette](1-overview/02-reading-a-palette/en.md) | how to read the tables in this book — and how to take apart any palette you meet |
| [Family at a glance](1-overview/03-family-at-a-glance/en.md) | the map, the comparison table, choosing by use case, and the same interface rendered in all seven families |

## 2 · Macaron 马卡龙

| page | what it covers |
| --- | --- |
| [Origin](2-macaron/01-macaron-origin/en.md) | the pastry, the mid-2010s trend, the four rules |
| [Palette](2-macaron/02-macaron-palette/en.md) | the colours, the ramp, how to extend, pairing rules |
| [Versus morandi](2-macaron/03-macaron-vs-morandi/en.md) | two pale families, two different systems |
| [In practice](2-macaron/04-macaron-in-practice/en.md) | consumer apps, food and drink, children's products — and where it fails |

## 3 · Morandi 莫兰迪

| page | what it covers |
| --- | --- |
| [Origin](3-morandi/01-morandi-origin/en.md) | the painter, the still lifes, why "morandi" became a word |
| [Palette](3-morandi/02-morandi-palette/en.md) | the grey-toned colours, the ramp, derivation inside a near-zero chroma budget |
| [Versus swiss neutral](3-morandi/03-morandi-vs-swiss/en.md) | warm-tinted grey against true grey |
| [In practice](3-morandi/04-morandi-in-practice/en.md) | editorial, portfolios, subtle dashboards, long-form reading |

## 4 · Swiss neutral 瑞士中立

| page | what it covers |
| --- | --- |
| [Origin](4-swiss-neutral/01-swiss-neutral-origin/en.md) | the International Typographic Style, the grid, the one signal red |
| [Palette](4-swiss-neutral/02-swiss-neutral-palette/en.md) | the grey ladder, the signal colour, what each step is for |
| [Versus nordic](4-swiss-neutral/03-swiss-neutral-vs-nordic/en.md) | achromatic method against atmospheric tint |
| [In practice](4-swiss-neutral/04-swiss-neutral-in-practice/en.md) | publishing, documentation, data reporting, wayfinding |

## 5 · Nordic 北欧

| page | what it covers |
| --- | --- |
| [Origin](5-nordic/01-nordic-origin/en.md) | the umbrella label, functionalism at home, the pale-and-cool recipe |
| [Palette](5-nordic/02-nordic-palette/en.md) | the four blues, the three warm accents, the blue-black ink |
| [Versus wabi-sabi](5-nordic/03-nordic-vs-wabi-sabi/en.md) | light from white and blue against light from clay and timber |
| [In practice](5-nordic/04-nordic-in-practice/en.md) | SaaS, developer tools, healthcare, travel — components and print |

## 6 · Wabi-sabi 侘寂

| page | what it covers |
| --- | --- |
| [Origin](6-wabi-sabi/01-wabi-sabi-origin/en.md) | 侘 and 寂, the tea ceremony, colour that comes from materials |
| [Palette](6-wabi-sabi/02-wabi-sabi-palette/en.md) | plaster, sand, clay, bark, moss — the narrowest chroma band in the book |
| [Versus memphis](6-wabi-sabi/03-wabi-sabi-vs-memphis/en.md) | the quietest family against the loudest |
| [In practice](6-wabi-sabi/04-wabi-sabi-in-practice/en.md) | interiors, craft goods, food brands — palette and treatment |

## 7 · Memphis 孟菲斯

| page | what it covers |
| --- | --- |
| [Origin](7-memphis/01-memphis-origin/en.md) | Milan 1981, Sottsass, the laminate squiggles |
| [Palette](7-memphis/02-memphis-palette/en.md) | the chroma floor, two accents, why the ramp stays loud |
| [Versus neon](7-memphis/03-memphis-vs-neon/en.md) | loud on white against loud on black |
| [In practice](7-memphis/04-memphis-in-practice/en.md) | youth brands, events, launches — and the domains it disqualifies itself from |

## 8 · Neon 霓虹

| page | what it covers |
| --- | --- |
| [Origin](8-neon/01-neon-origin/en.md) | gas-discharge light, 1980s cinema, synthwave |
| [Palette](8-neon/02-neon-palette/en.md) | the two near-blacks, five accents, the ramp as glow |
| [Versus macaron](8-neon/03-neon-vs-macaron/en.md) | the same sweetness read two ways — the ring closes |
| [In practice](8-neon/04-neon-in-practice/en.md) | nightlife, gaming, developer tools, portfolios — and the accessibility bills |

## 9 · Schemes 方案

| page | what it covers |
| --- | --- |
| [Letterpress](9-schemes/01-scheme-letterpress/en.md) | the editorial UI scheme distilled from szum.io — and the copyright boundary |
| [Phosphor Paper](9-schemes/02-scheme-phosphor/en.md) | the scheme proposed for draw, with its eight-colour chart series |
| [Chart style schemes](9-schemes/03-chart-schemes/en.md) | four series palettes — broadsheet, salmon, okabe-ito, mono-signal — and the five decisions |
| [Hue anchors](9-schemes/04-hue-anchors/en.md) | one style, every blood colour — structure × anchor, worn examples |
| [Type and spacing](9-schemes/05-type-and-spacing/en.md) | the third axis — fonts, density, radius, grid for all thirteen styles |
| [Charts on GitHub](9-schemes/06-github-charts/en.md) | status-quo audit of draw's palettes and the GitHub-native recommendation |
