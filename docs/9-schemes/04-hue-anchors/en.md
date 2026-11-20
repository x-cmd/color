---
x-title: Hue anchors — one style, every blood colour
x-desc: Red, blue, green and purple are not styles — they are anchors. Separate the structure of a scheme (lightness discipline, chroma budget, hue geometry) from where it sits on the colour wheel, and one scheme becomes infinitely many. The parametric level of the ladder.
x-sidebar: Hue anchors
x-keywords: hue anchor, oklch hue rotation, parametric theme, theme variants, palette generator, 色相锚, 参数化主题, 配色变体
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Hue anchors — one style, every blood colour'
      inLanguage: 'en'
      about: 'separating scheme structure from hue position'
---

# Hue anchors — one style, every blood colour

---

Red is not a style. Blue is not a style. They are **positions**. What makes a scheme a scheme is
its *structure* — the lightness discipline, the chroma budget, the geometry between its series —
and structure can sit down anywhere on the colour wheel. Anchor phosphor at red instead of green
and you have a different product wearing the same suit.

This is the move that turns a theme library from a list into a **generator**: one definition,
`style × anchor`, and every customer's brand colour becomes an entry point rather than a
fork.

---

## 1. Structure and anchor

A scheme decomposes into two independent decisions:

| | What it fixes | Example (phosphor) |
| --- | --- | --- |
| **Structure** | the `L` band, the `C` band, how far apart series sit in hue, which member is neutral | `L` 0.52–0.67, `C` 0.09–0.25, even steps around the wheel, one reserved grey |
| **Anchor** | where series 1 lands on the wheel | signal green, OKLCH hue 166° |

Rotation is then trivial in OKLCH: hold `L` and `C` of every colour, shift every `H` by the same
delta. The discipline survives the turn because the discipline never depended on the hue.

---

## 2. One scheme, seven anchors

The same phosphor series, anchored at each position. Every cell is computed — hold lightness,
hold chroma, turn the wheel:

<!-- anchors:phosphor:en -->
<table style="border-collapse:collapse;max-width:600px"><colgroup><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"></colgroup><tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">Anchor (series 1 lands on)</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">30° red</th><td style="background:#9D5044;height:26px" title="#9D5044"></td><td style="background:#5A7E00;height:26px" title="#5A7E00"></td><td style="background:#8784F1;height:26px" title="#8784F1"></td><td style="background:#007599;height:26px" title="#007599"></td><td style="background:#008550;height:26px" title="#008550"></td><td style="background:#80651D;height:26px" title="#80651D"></td><td style="background:#A8436F;height:26px" title="#A8436F"></td><td style="background:#A0A598;height:26px" title="#A0A598"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">55° orange</th><td style="background:#975726;height:26px" title="#975726"></td><td style="background:#008743;height:26px" title="#008743"></td><td style="background:#AE76DE;height:26px" title="#AE76DE"></td><td style="background:#006AC4;height:26px" title="#006AC4"></td><td style="background:#008173;height:26px" title="#008173"></td><td style="background:#6A6E27;height:26px" title="#6A6E27"></td><td style="background:#AF4448;height:26px" title="#AF4448"></td><td style="background:#9BA69C;height:26px" title="#9BA69C"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">85° gold</th><td style="background:#856406;height:26px" title="#856406"></td><td style="background:#008375;height:26px" title="#008375"></td><td style="background:#CF6AB6;height:26px" title="#CF6AB6"></td><td style="background:#614FD6;height:26px" title="#614FD6"></td><td style="background:#007D8F;height:26px" title="#007D8F"></td><td style="background:#477643;height:26px" title="#477643"></td><td style="background:#A94F00;height:26px" title="#A94F00"></td><td style="background:#96A7A3;height:26px" title="#96A7A3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">150° green</th><td style="background:#367A48;height:26px" title="#367A48"></td><td style="background:#0075BF;height:26px" title="#0075BF"></td><td style="background:#E16E3C;height:26px" title="#E16E3C"></td><td style="background:#B5217E;height:26px" title="#B5217E"></td><td style="background:#574BF9;height:26px" title="#574BF9"></td><td style="background:#007783;height:26px" title="#007783"></td><td style="background:#6A7400;height:26px" title="#6A7400"></td><td style="background:#99A4AE;height:26px" title="#99A4AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">200° cyan</th><td style="background:#00787D;height:26px" title="#00787D"></td><td style="background:#8246DB;height:26px" title="#8246DB"></td><td style="background:#B19000;height:26px" title="#B19000"></td><td style="background:#B73800;height:26px" title="#B73800"></td><td style="background:#B209B6;height:26px" title="#B209B6"></td><td style="background:#456A9E;height:26px" title="#456A9E"></td><td style="background:#00805D;height:26px" title="#00805D"></td><td style="background:#A3A0AE;height:26px" title="#A3A0AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">260° blue</th><td style="background:#4469A5;height:26px" title="#4469A5"></td><td style="background:#C81272;height:26px" title="#C81272"></td><td style="background:#2CAF62;height:26px" title="#2CAF62"></td><td style="background:#7B6A00;height:26px" title="#7B6A00"></td><td style="background:#D10015;height:26px" title="#D10015"></td><td style="background:#7F578C;height:26px" title="#7F578C"></td><td style="background:#007899;height:26px" title="#007899"></td><td style="background:#AD9EA3;height:26px" title="#AD9EA3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">300° purple</th><td style="background:#735A9D;height:26px" title="#735A9D"></td><td style="background:#C33900;height:26px" title="#C33900"></td><td style="background:#00AAA7;height:26px" title="#00AAA7"></td><td style="background:#317E00;height:26px" title="#317E00"></td><td style="background:#9C5F00;height:26px" title="#9C5F00"></td><td style="background:#935169;height:26px" title="#935169"></td><td style="background:#4567BD;height:26px" title="#4567BD"></td><td style="background:#AE9F9B;height:26px" title="#AE9F9B"></td></tr></table>
<!-- /anchors -->

Read a row and you can feel it: the *green* row is the terminal-instrument original; the *blue*
row reads corporate; the *red* row reads editorial-alert; the *purple* row reads product-launch.
Same bones, different blood.

---

## 3. It generalises

The same transform on broadsheet — warm, print-safe, `C` 0.08–0.13 — survives the turn because
its discipline is chroma, not hue:

<!-- anchors:broadsheet:en -->
<table style="border-collapse:collapse;max-width:600px"><colgroup><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"></colgroup><tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">Anchor (series 1 lands on)</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">30° red</th><td style="background:#B54334;height:26px" title="#B54334"></td><td style="background:#0B5F8A;height:26px" title="#0B5F8A"></td><td style="background:#419C88;height:26px" title="#419C88"></td><td style="background:#CD9931;height:26px" title="#CD9931"></td><td style="background:#685C96;height:26px" title="#685C96"></td><td style="background:#52794B;height:26px" title="#52794B"></td><td style="background:#A65D52;height:26px" title="#A65D52"></td><td style="background:#8D8578;height:26px" title="#8D8578"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">55° orange</th><td style="background:#A75500;height:26px" title="#A75500"></td><td style="background:#3C5791;height:26px" title="#3C5791"></td><td style="background:#349AA1;height:26px" title="#349AA1"></td><td style="background:#AFA737;height:26px" title="#AFA737"></td><td style="background:#7C5589;height:26px" title="#7C5589"></td><td style="background:#367D62;height:26px" title="#367D62"></td><td style="background:#A16439;height:26px" title="#A16439"></td><td style="background:#888779;height:26px" title="#888779"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">85° gold</th><td style="background:#8B6800;height:26px" title="#8B6800"></td><td style="background:#5D4C8B;height:26px" title="#5D4C8B"></td><td style="background:#4994B8;height:26px" title="#4994B8"></td><td style="background:#7DB55F;height:26px" title="#7DB55F"></td><td style="background:#8C5071;height:26px" title="#8C5071"></td><td style="background:#1D7C7D;height:26px" title="#1D7C7D"></td><td style="background:#8F7026;height:26px" title="#8F7026"></td><td style="background:#81897C;height:26px" title="#81897C"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">150° green</th><td style="background:#00853B;height:26px" title="#00853B"></td><td style="background:#843E57;height:26px" title="#843E57"></td><td style="background:#8F7EBB;height:26px" title="#8F7EBB"></td><td style="background:#00B9C1;height:26px" title="#00B9C1"></td><td style="background:#8F5632;height:26px" title="#8F5632"></td><td style="background:#516D9E;height:26px" title="#516D9E"></td><td style="background:#478555;height:26px" title="#478555"></td><td style="background:#788A8B;height:26px" title="#788A8B"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">200° cyan</th><td style="background:#007E83;height:26px" title="#007E83"></td><td style="background:#85451F;height:26px" title="#85451F"></td><td style="background:#B27395;height:26px" title="#B27395"></td><td style="background:#5FA8F1;height:26px" title="#5FA8F1"></td><td style="background:#716820;height:26px" title="#716820"></td><td style="background:#7D5F91;height:26px" title="#7D5F91"></td><td style="background:#00858A;height:26px" title="#00858A"></td><td style="background:#7D8792;height:26px" title="#7D8792"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">260° blue</th><td style="background:#356BC5;height:26px" title="#356BC5"></td><td style="background:#5E5D00;height:26px" title="#5E5D00"></td><td style="background:#B87859;height:26px" title="#B87859"></td><td style="background:#BD8ADF;height:26px" title="#BD8ADF"></td><td style="background:#2B7756;height:26px" title="#2B7756"></td><td style="background:#975862;height:26px" title="#975862"></td><td style="background:#5275AE;height:26px" title="#5275AE"></td><td style="background:#8A8390;height:26px" title="#8A8390"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">300° purple</th><td style="background:#7D55B8;height:26px" title="#7D55B8"></td><td style="background:#286838;height:26px" title="#286838"></td><td style="background:#A28644;height:26px" title="#A28644"></td><td style="background:#DF7FAD;height:26px" title="#DF7FAD"></td><td style="background:#00757C;height:26px" title="#00757C"></td><td style="background:#945F3F;height:26px" title="#945F3F"></td><td style="background:#7D67A6;height:26px" title="#7D67A6"></td><td style="background:#908188;height:26px" title="#908188"></td></tr></table>
<!-- /anchors -->

One exception proves the rule: **okabe-ito must not be rotated.** Its value is its calibration
for colour-blind separation; rotating the hues preserves the *confusion structure* while
invalidating the testing. A functional palette is a measurement, not a mood.

---

## 4. What breaks

- **Gamut clipping.** High chroma near yellow (hue ~90–110) cannot exist at `L` 0.7 — the
  converter pulls chroma back in, so those cells are slightly quieter than their neighbours.
  Visible in the gold row if you look closely. This is physics, not a bug.
- **Semantic collisions.** Anchoring a financial scheme at green makes "up" and "down" fight
  the brand. Anchoring anything at red borrows urgency you may not have earned. The anchor is a
  meaning, choose it like one.
- **The grey stays grey.** The reserved neutral series does not rotate — it is the fixed point
  that makes the rotation legible.

---

## 5. The ladder

Where this sits in the scheme universe, bottom to top:

| Level | What it is | Who is there |
| --- | --- | --- |
| 1 · Flat palettes | curated hex lists | szum's six themes; most products |
| 2 · Scheme as object | canvas + series + type + axes, switchable, validated | [this book's schemes](../03-chart-schemes/en.md) |
| 3 · **Parametric** | structure × anchor × ground — a generator, not a list | this page |
| 4 · Selection | an agent reads the data and context, picks the parameters | the draw SKILL |

Each level makes the one below cheaper: a parametric scheme means "match the customer's logo"
is one number, not a design project.

---

## 6. Where to go next

| | |
| --- | --- |
| [Chart style schemes](../03-chart-schemes/en.md) | the four series palettes this rotates |
| [Phosphor Paper](../02-scheme-phosphor/en.md) | the scheme used in the examples |
| [Reading a palette](../../1-overview/02-reading-a-palette/en.md) | audit what a rotation preserves |
