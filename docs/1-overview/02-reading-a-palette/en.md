---
x-title: Reading a palette
x-desc: How to read the tables in this book — roles, OKLCH columns, contrast ratios, ramps and bands — and a five-step method for reading any palette you meet.
x-sidebar: Reading a palette
x-keywords: read palette, colour roles, oklch, contrast ratio, wcag, colour ramp, palette analysis, 色板, 对比度, 色阶
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Reading a palette'
      inLanguage: 'en'
      about: 'how to read the palette tables and analyse any palette'
---

# Reading a palette

---

Every family in this book is documented with the same generated tables: the palette, the band, the
ramp. This article explains how to read them — and, more usefully, how to take apart any palette
you meet, including your own.

All the numbers come from `scripts/palette.mjs` working over `data/palettes.json`. Nothing in the
tables is hand-typed, which is the point: if a table says a colour fails a threshold, it fails.

---

## 1. The palette table

Each family article opens with a table like this:

| Column | What it tells you |
| --- | --- |
| Swatch | the colour itself |
| Name | the name used throughout the series |
| Hex | the value to copy |
| Role | the colour's job — see the next section |
| HSL | hue, saturation, lightness — what most tools show |
| OKLCH | perceptual lightness `L`, chroma `C`, hue `H` — what this book reasons with |
| White text / Black text | the WCAG contrast ratio of that text colour on this fill, with the level it passes |

The last two columns are the practical ones. A ratio of 4.5 or better passes AA for normal text;
3.0 passes AA for large text and for non-text elements such as chart bars and focus rings; 7.0 is
AAA. Below 3.0, the colour pairing is decoration only.

Read those two columns as a pair: whichever is larger tells you which text colour to put on the
fill. Macaron's lemon `#FFF1A8` shows 1.30 against white text and 16.13 against black — so it is a
fill for black-ish ink and never for white. Neon's magenta `#FF2E88` shows 6.00 against black and
3.50 against white — white text "works" numerically and still looks wrong, because the whole
family is built to be read on a dark ground.

---

## 2. Roles

Every colour in this book carries one of six roles. The roles are the same across families; what
changes is how many colours each family assigns to each.

| Role | Job | Hard rule |
| --- | --- | --- |
| `surface` | the ground behind everything | one per palette; never carries body text |
| `base` | the main colours — fills, chips, chart series | no body text on a light base fill |
| `accent` | the colour that means "act" or "look here" | rationed — one in most families |
| `support` | a structural shade, usually a darker step of a base | structure, never emphasis |
| `ink` | body text | never a fill |
| `muted` | captions, metadata, disabled states | must still pass contrast for its use |

When you read an unfamiliar palette, the first question is not "what colours?" but "which colour
is the accent, and what is the ink?" A palette where three colours all behave as accents is not
one palette; it is three arguing.

---

## 3. HSL, OKLCH, and which to trust

Tools show HSL because it is cheap to compute, and for coarse moves — "lighter", "more green" —
it is fine. It fails in two places that matter here.

First, HSL saturation overstates pale colours. A pale lemon `#FFF1A8` reports *100% saturation*
because saturation is measured against the brightest channel; its OKLCH chroma is 0.09. A macaron
pink and a memphis pink can both say "85% saturated" and differ by a factor of three in actual
colourfulness.

Second, HSL lightness is not perceptual. Yellow at HSL lightness 50% looks far lighter than blue
at 50%. OKLCH `L` corrects for this, which is why the ramps in this book step `L` in even
increments and look even.

The rule this book follows: **move lightness in OKLCH, sanity-check hue in HSL, ignore HSL
saturation entirely.**

---

## 4. The ramp

A ramp is one base colour stepped five times in `L` — two steps lighter, itself, two steps darker
— with chroma and hue held fixed. Out-of-gamut steps are pulled back along the chroma axis, which
is the correct direction: the colour stays recognisably the same hue.

Read a ramp as a budget statement. The pale end is what large surfaces may use; the dark end is
what text and borders may use; the middle is the colour you actually chose. Families differ in
what their ramps give you:

- Macaron ramps are pale at every step — the family spends its lightness range on being light.
- Morandi ramps move in near-grey steps — extending the family means new lightnesses, not new
  colour.
- Memphis ramps stay loud to the end — you cannot de-escalate a memphis colour by tinting it.
- Neon ramps are how the glow is faked: a lighter step of the same hue reads as a halo.

---

## 5. The band

The band is the family's footprint: the `L` range and `C` range its main colours occupy, the
number of distinct hues, and the means. Two numbers do most of the work:

- **Mean lightness** — where the family sits vertically. 0.87 (macaron) against 0.61 (wabi-sabi)
  is the difference between a family that is almost all light and one that lives in the middle.
- **Mean chroma** — how much colour the family spends. 0.03 (morandi) against 0.19 (memphis) is
  the difference between a whisper and a shout.

When a palette drifts — a "nicer" blue added, a second accent for a banner — the band is where it
shows up first: one dot outside the `C` ceiling, and the family has started to dissolve.

---

## 6. A method for any palette

To take apart a palette you did not make — a competitor's product, a brand guideline, a theme you
inherited:

1. **Find the ground.** The lightest large-area colour is the surface; note whether it is pure
   white, tinted, or dark. Everything else is judged relative to it.
2. **Find the ink.** The colour body text is actually set in — not `#000000` unless it really is.
   The ink tells you the family's temperature faster than any other single colour.
3. **Count the accents.** Colours that appear on buttons, links, or active states. One is a
   system; two needs a justification; three is an accident.
4. **Compute the band.** The `L` and `C` ranges of the main colours. Compare against the families
   in this book — most palettes in the wild sit near one of them, or between two.
5. **Check the pairs you actually use.** Text on surface, text on accent, accent on surface. Three
   ratios catch the failures that matter; a full matrix mostly catches ones nobody will ever ship.

Step 4 is why the seven families here are worth memorising: they are landmarks. Once you can say
"this is morandi with a memphis accent bolted on", you know both what works in it and what will
break.

---

## 7. Where to go next

| | |
| --- | --- |
| [What is a colour family](../01-what-is-a-color-family/en.md) | the four constraints behind these tables |
| [Family at a glance](../03-family-at-a-glance/en.md) | all seven families compared, with live examples |
| [The macaron palette](../../2-macaron/02-macaron-palette/en.md) | a full set of tables on one family |
