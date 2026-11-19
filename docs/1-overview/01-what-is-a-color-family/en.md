---
x-title: What is a colour family
x-desc: A colour family is a rule set, not a list of hex codes — a lightness band, a chroma ceiling, a hue set and a rule about where colour may appear. What the seven families in this book share, and how to read them.
x-sidebar: What is a colour family
x-keywords: colour family, color palette, palette system, macaron, morandi, swiss neutral, oklch, 色系风格, 配色体系
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'What is a colour family'
      inLanguage: 'en'
      about: 'colour style families and how to read them'
---

# What is a colour family

---

A palette is a list of colours. A **family** is the rule that says which colours belong together,
and where each of them is allowed to appear.

That distinction matters more than it sounds. Two teams can both say "we use macaron" and ship
products that look nothing alike — one of them meant a set of swatches, the other meant a system.
The swatches are the easy part. The system is what you actually have to learn, and it is what lets
you make something new that still reads as the same family.

Seven families are documented here — macaron, morandi, swiss neutral, nordic, wabi-sabi, memphis
and neon. Each is described by the same four constraints.

---

## 1. The four constraints

### 1.1 A lightness band

Every colour in a family occupies a known set of perceptual lightness steps. In [OKLCH](https://bottosson.github.io/posts/oklab/)
terms that is `L` — roughly "how light", on a scale where 0 is black and 1 is white.

The band is what makes a family recognisable before you can name it. Macaron lives between `L`
0.79 and 0.95: everything is bright, and nothing is allowed to be dark except the text. Swiss
neutral has a much wider band (0.32 to 0.97) because it is built from a ladder of greys, but that
ladder is fixed — you pick steps from it, you do not invent new ones.

A band is not the same as "everything is light". It is a promise about *which* lights.

### 1.2 A chroma ceiling

Chroma (`C` in OKLCH) is how much colour a colour has, independent of how light or dark it is. It
is the difference between a colour and its grey version.

Families differ here more sharply than they do on lightness. Morandi's colours sit between `C` 0.01
and 0.06 — barely more colourful than the greys around them. Memphis runs from 0.12 to 0.25, in
the range where colour starts to shout.

Some families have no ceiling at all, because the discipline comes from somewhere else. Swiss
neutral allows exactly one chromatic colour, its signal red, and the rule that matters is *there
is only one*.

### 1.3 A hue set

Which hues are permitted, and how many. Macaron uses seven distinct hues across its main colours
and keeps them balanced warm and cool. Swiss neutral permits one.

This is the constraint people skip, and it is the one that keeps a family from drifting. Left
alone, a palette accumulates: one more blue for a link, one more red for a warning, and the
family is gone within a release or two.

### 1.4 Role discipline

Where colour is allowed to appear at all. Every palette in this book divides its colours into
roles, and the roles carry rules.

| Role | What it does | Rule |
| --- | --- | --- |
| `surface` | the page or canvas behind everything | never carries text |
| `base` | the main colours — blocks, chips, illustrations, series in a chart | never carries body text on a light fill |
| `accent` | the one colour allowed to mean "act" | one per screen |
| `support` | a supporting shade, usually a darker step of a base | structure, not emphasis |
| `ink` | body text | never a fill |
| `muted` | captions, metadata, disabled states | still has to pass contrast |

Role discipline is what separates a *system* from a *collection*. A collection of macaron swatches
is six hex codes; a macaron system says which of them is the accent, that ink is never a fill, and
that the surface stays near-white.

---

## 2. "Pale" is not a family

Macaron and morandi are both pale. That is the whole of their similarity, and it is not enough.

Morandi pulls every hue toward grey: its neutrals are warm-tinted greys rather than true greys, and
its most saturated colour is a dark earth brown. Macaron keeps its hues legible — you can name
each one, pink or mint or lemon, at a glance — and spends colour on decoration where morandi
spends it on material.

Then there is what each family uses colour *for*. Macaron's accent is a coral that draws the eye
to the button. Morandi's accent is a deep umber, used for structure, not for calling attention.

One more difference is worth naming, because it is easy to miss in a hex list: morandi's ink is
warm (`#3F3A38`), macaron's is a plum (`#4A4045`). Text colour is part of the family, not a
neutral that sits outside it.

---

## 3. The vocabulary used here

**HSL** is what most tools show you, and it is worth knowing its blind spot. HSL saturation is
computed against the brightest channel, so a pale yellow like `#FFF1A8` comes out as *100%
saturated* — while its OKLCH chroma is only 0.09. HSL is fine for picking "a lighter mint"; it
is not a measure of how colourful something actually is.

**OKLCH** is used for every number in this book. `L` is lightness, `C` is chroma, `H` is hue in
degrees. It is perceptually even, which means equal steps look like equal steps — the property
that makes it worth the extra letters.

**Contrast** is measured the WCAG way: the ratio of relative luminance between two colours,
between 1 and 21. 4.5 is the threshold for normal body text, 3 for large text and for
non-text elements such as chart bars and focus rings.

**A band** is the range a family's colours occupy, quoted as `L` and `C` ranges. **A ramp** is
the set of tints and shades derived from one base colour by moving `L` in even steps and holding
chroma and hue fixed.

Every number here is computed by `scripts/palette.mjs` from `data/palettes.json`, so the tables in
these articles cannot drift away from the palettes they describe.

---

## 4. How the series are organised

Each family gets four articles:

| Article | What it covers |
| --- | --- |
| **Origin** | what the family is, where it came from, its visual grammar, and what it is not |
| **Palette** | the colours themselves, their numbers, the ramp, and how to extend them |
| **Versus** | a side-by-side comparison with a neighbouring family |
| **In practice** | where it works, where it fails, and the rules that keep it intact |

The comparison articles form a ring — macaron against morandi, morandi against swiss neutral,
swiss neutral against nordic, nordic against wabi-sabi, wabi-sabi against memphis, memphis against
neon, and neon back against macaron. Each family is therefore compared with the two neighbours
that bracket it, which is usually where the real decisions live.

---

## 5. The seven families

<!-- families:en -->
| Family | Mean lightness (L) | Mean chroma (C) | Hue spread | Main colours | Mood | Good for | Avoid for |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Macaron | 0.87 | 0.07 | 7 | 7 | Sweet, soft, playful | Consumer apps, food and drink, children's products, seasonal campaigns, onboarding and empty states | Financial dashboards, dense data tables, legal or medical information, anything where numbers must be read fast |
| Morandi | 0.78 | 0.03 | 4 | 7 | Quiet, studied, tactile | Editorial layouts, gallery and portfolio sites, lifestyle brands, subtle dashboards, long-form reading | Interfaces that need one obvious action, or audiences that expect vivid energy |
| Swiss Neutral | 0.71 | 0.06 | 1 | 4 | Exact, quiet, rational | Editorial and publishing, documentation, architecture and design studios, data reporting, ticketing and wayfinding | Brands that need warmth or playfulness, and products aimed at children |
| Nordic | 0.79 | 0.05 | 4 | 7 | Calm, clean, airy | SaaS and developer tools, healthcare, travel and hospitality, portfolios, documentation | Brands that need warmth or urgency, and dense dashboards where pale colours wash out |
| Wabi-sabi | 0.61 | 0.04 | 4 | 5 | Earthy, honest, weathered | Furniture and interiors, craft and handmade goods, food brands, wellness, slow-living publications | Products that need to look new, technical, or fast-moving |
| Memphis | 0.72 | 0.19 | 6 | 6 | Loud, ironic, playful | Youth brands, events and music, tech that wants to look like a launch, illustration and editorial accents | Trust-heavy domains such as finance, healthcare, government and enterprise procurement |
| Neon | 0.68 | 0.18 | 6 | 6 | Electric, nocturnal, synthetic | Nightlife, music and gaming, developer tools that want an edge, portfolio and landing pages, terminal-adjacent products | Reading-heavy content, forms, printing, and anyone who needs daylight clarity |
<!-- /families -->

---

## 6. Pitfalls

- **Copying the hexes but not the band.** A macaron palette used on a dark background is not a
  macaron palette. The band assumes a light surface.
- **Treating the family name as a colour.** "Morandi" is not a shade; it is a range of lightness and
  a rule about how much colour is allowed.
- **Letting the palette accumulate.** The hue set is the constraint that stops a family from
  drifting. Every new colour that is not in the set is a decision to make deliberately.
- **Expecting the rules to survive the context.** These bands were computed for interfaces and
  editorial pages on a light ground. A projector, a print run and a dark-mode UI are three
  different problems.
