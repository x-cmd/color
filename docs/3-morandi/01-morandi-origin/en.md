---
x-title: Morandi — where the palette comes from
x-desc: The morandi family is usually traced to the still lifes of Giorgio Morandi and to the Chinese design and interiors press of the 2010s. What the family is, the four rules that hold it together, and what it is not.
x-sidebar: Morandi origin
x-keywords: morandi colours, morandi palette, muted colours, grey palette, 莫兰迪色, 莫兰迪配色, 灰调, 高级灰
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Morandi — where the palette comes from'
      inLanguage: 'en'
      about: 'the morandi colour family, its origin and its rules'
---

# Morandi — where the palette comes from

---

Morandi is a family of quiet, greyed colours: sage, clay, mist blue, taupe, dusty mauve, oat,
umber, ink, on a warm paper surface. Where macaron asks you to look at something, morandi asks
you to stay with it.

This article is the definition: what the family is, where the name came from, the four rules that
make it recognisable, and what morandi is not. The colours themselves are in
[the palette article](../02-morandi-palette/en.md); the comparison with its neighbour on the cool
side is in [morandi versus swiss neutral](../03-morandi-vs-swiss/en.md), and the one on the warm
side in [macaron versus morandi](../../2-macaron/03-macaron-vs-morandi/en.md).

---

## 1. What morandi is

A morandi palette is not "desaturated colours". It is a specific set of constraints:

- a **lightness band of `L` 0.59 to 0.90** — much wider than macaron, because morandi needs room
  for a deep structural tone
- a **very low chroma ceiling** — every colour sits between `C` 0.01 and 0.06, barely more
  colourful than the greys around it
- **four distinct hues** — sage, clay, mist blue and a dusty mauve, each pulled hard toward grey
- **one deep accent**, used for structure rather than for calling attention

That last point is the one that separates morandi from everything else pale. Macaron's accent is a
coral that draws the eye to a button. Morandi's accent is umber `#8C7A6E` — a deep earth brown
that holds a border, a rule, a column of small type. It is the darkest colour in the palette
besides the ink, and it is not trying to be noticed.

Read the four constraints as one sentence: morandi spends its colour on *material* and keeps it
for *structure*.

---

## 2. Where it comes from

### 2.1 The painter

The name is usually traced to Giorgio Morandi (1890–1964), the Italian painter who spent most of
his career painting nothing much at all: bottles, boxes, small bowls, vases and folded cloths,
arranged on a table in a shallow studio space. The works are small, quiet and nearly monochromatic.
The colours sit between grey and earth — chalky whites, dusty greens, faded ochres, browns that
have been handled.

What made the still lifes reproducible as a palette is not a single painting but the whole body of
work, and it is worth being precise about what it contributes. It does not supply a set of hex
codes. It supplies a *method*: the sense that a limited group of dulled earth colours can hold a
composition together indefinitely, and that nothing needs to be brighter for the picture to work.
Morandi's greys are never neutral greys — they carry a temperature, usually a warm one, because
they are made of pigment rather than of nothing.

### 2.2 The name in circulation

"莫兰迪色" as a marketing and design term is usually traced to the Chinese design and interiors
press of the 2010s, where it spread from accounts about the painter into homeware, apparel and
packaging, and eventually into interface design. The vocabulary it brought with it was
"高级灰" — "advanced grey", or high-end grey — a phrase that captures the intent precisely: grey
as a premium material rather than as an absence of decision.

Whether the term was applied accurately to the paintings is a separate question, and it was not
always. Much of what circulated as "Morandi colour" was simply a warm beige, and much of it was a
lifestyle aesthetic — linen, rattan, unbleached cotton — with a painter's name attached. The
family described here is narrower and more disciplined than that: four hues, a hard chroma
ceiling, and a lightness band that runs dark enough to hold structure.

What the name does give you is a shared reference. Two designers in different countries, both
aware of Morandi, will land on similar-looking neutrals without ever discussing it. That is the
same trick the Swiss school plays with a grid, and it is why a name is worth having.

---

## 3. The visual grammar

### 3.1 Every hue is pulled toward grey

This is the definition of the family and the constraint that comes first. No colour in the palette
is more than `C` 0.06 away from its own grey version. Sage `#A3B18A` sits at `C` 0.06; mist blue
`#B0B7C6` at `C` 0.02; mauve `#C8B6C6` at `C` 0.03.

The practical consequence: you cannot use colour to draw attention. A sage element next to an oat
element is a change of temperature, not a change of focus. In a morandi layout, hierarchy comes
from size, weight and space — not from saturation.

### 3.2 The neutrals are warm, not grey

This is where morandi separates from every other muted palette. Look at the surface: `#F5F2ED`.
That is not white, and it is not a neutral grey either — it is a warm off-white with a visible
yellow-red bias (hue 81° in OKLCH). The ink is `#3F3A38`, also warm (hue 43°), and the muted
secondary, stone `#8A817A`, is warm too. There is no true grey anywhere in the family.

The reason is practical rather than decorative: a warm neutral lets a cool colour sit beside it
without vibrating. A cool grey next to a cool blue has a colour edge; a warm grey does not. The
warm ground is what makes it possible to put mist blue and clay on the same page and have them
stay friends.

### 3.3 One deep accent, used for structure

Umber `#8C7A6E` is the only colour with weight. At `L` 0.59 it is the floor of the family's
lightness band, and it does structural work: rules and dividers, the small caps label, the
secondary action, the darker end of a fill.

Notice what it does not do. It is not the button. Umber reaches 4.10 against white and 3.67 against
the paper surface `#F5F2ED` — enough to pass the WCAG threshold for large text and for non-text
elements like focus rings, and not enough for body copy (4.5 is the threshold there). It is a
structural colour that can carry a number at 24px and cannot carry a paragraph.

### 3.4 The ink is warm

Body text is `#3F3A38`, which reaches 11.21 against white and 10.04 against the paper surface, and
1.87 against black. It is warm, it is not black, and it is not a colour from the palette in the
sense that the base colours are — it is what the whole family is measured against.

Text colour is part of the family, not a neutral that sits outside it. A morandi page that sets
body copy in pure black `#000000` loses the warmth of the ground immediately, and the page starts
to look like a Swiss page with soft pictures on it.

---

## 4. The numbers

<!-- band:morandi:en -->
| Dimension | Measured on | Value |
| --- | --- | --- |
| Lightness | OKLCH L | 0.59 – 0.90 |
| Chroma | OKLCH C | 0.01 – 0.06 |
| Hue spread | distinct hues (30° buckets) | 4 |
| Mean lightness | mean OKLCH L | 0.78 |
| Mean chroma | mean OKLCH C | 0.03 |
| Reference: mean HSL saturation | HSL overstates pastels | 17% |
<!-- /band -->

Two of these carry most of the meaning. The chroma ceiling of `C` 0.06 is what makes the family
read as quiet; it is also the number most easily broken, because a designer reaching for "a bit more
life" in a colour picker will land somewhere around `C` 0.15 without noticing. The lightness floor
of `L` 0.59 is the other one — it is what leaves room for umber to exist as a structural tone
rather than a decorative one.

The band also shows what morandi gives up: a mean lightness of 0.78 against macaron's 0.87, and a
mean chroma of 0.03 against macaron's 0.07. Morandi is darker and greyer on average, which is
exactly what buys it the range it has.

---

## 5. What morandi is not

- **Not any beige.** A warm grey at `L` 0.85 with `C` 0.00 is not morandi — it is a grey. Morandi
  needs the four hues *and* the chroma ceiling. A palette of six warm off-whites has none of the
  family's structure and none of its character.
- **Not a palette for interfaces that need one obvious action.** Morandi has no colour that wants
  to be pressed. If the primary button must be the thing the eye lands on, morandi is the wrong
  family; the accent would have to break the rule to do its job.
- **Not macaron.** Both are pale, and they are different systems with different rules. Macaron is
  bright, decorative and hue-legible; morandi is quiet, material and hue-suppressed. The
  difference is explained in [macaron versus morandi](../../2-macaron/03-macaron-vs-morandi/en.md).
- **Not the painter's palette.** The paintings are a reference, not a specification. Nothing here
  claims to reproduce a specific canvas, and a colour chosen because it appears in a Morandi
  painting is not automatically in this family.

---

## 6. Where to go next

| | |
| --- | --- |
| [The morandi palette](../02-morandi-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Morandi versus swiss neutral](../03-morandi-vs-swiss/en.md) | warm and muted against achromatic and exact |
| [Morandi in practice](../04-morandi-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
