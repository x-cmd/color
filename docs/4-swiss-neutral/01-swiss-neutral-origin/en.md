---
x-title: Swiss Neutral — where the palette comes from
x-desc: Swiss Neutral is the International Typographic Style of 1950s Zurich turned into a working colour system. Its history, its four rules, and the two neighbours it is usually confused with.
x-sidebar: Swiss Neutral origin
x-keywords: swiss neutral, swiss style, international typographic style, helvetica, muller-brockmann, grid system, signal red, 瑞士中立, 瑞士风格, 国际主义风格, 网格系统
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Swiss Neutral — where the palette comes from'
      inLanguage: 'en'
      about: 'the swiss neutral colour family, its origin and its rules'
---

# Swiss Neutral — where the palette comes from

---

Swiss Neutral is the smallest palette in this book and the strictest: paper, a ladder of greys, a
true black, and exactly one saturated colour that is allowed to mean something.

That one-colour rule is the whole idea. Everything else — the greys, the rules, the panels — exists
so that the single red has something to be loud against. A palette with two accents has no accent;
a palette with one has a voice.

This article is the definition: what the family is, where it came from, and the four rules that
make it recognisable. The colours and their numbers are in
[the palette article](../02-swiss-neutral-palette/en.md); the comparison with its nearest neighbour
is in [swiss neutral versus nordic](../03-swiss-neutral-vs-nordic/en.md).

---

## 1. What swiss neutral is

A swiss neutral palette is a set of constraints, not a set of nice greys:

- **achromatic by default** — every member except one has a chroma of exactly `C` 0.00
- **one accent only** — a single colour, the signal red `#FF0000`, is allowed to carry meaning
- **the grid does the work** — structure comes from alignment and rules, not from tinted boxes
- **hierarchy comes from type and space** — size, weight and position, not from colour

Read that last point again if you only remember one. In this family, colour is the exception, and
an exception needs a rule to be an exception. If you find yourself adding a second accent because
"the link needs to look different from the button", the family has already been broken — the answer
is a different weight of type, not another hue.

The lightness range here is much wider than in any other family: `L` 0.32 to 0.97. That is not a
loose band but a *ladder*. A dark ink and a pale panel are both allowed, because the family needs
both ends of the value scale to do its job.

---

## 2. Where it comes from

### 2.1 Zurich, in the 1950s

The style is usually traced to a group of Swiss designers working in and around Zurich in the
1950s and 1960s, known as the International Typographic Style, the Swiss Style, or in German
*Schweizer Typografie*. The name is sometimes given as *Neue Grafik* — "new graphics" — which
tells you what the movement thought it was doing: not decorating, but reforming.

The setting was specific. Post-war Switzerland had an unusually literate, design-conscious public
culture and a strong publishing economy — annual reports, concert programmes, exhibition
catalogues, timetables. These are printed documents with an audience that reads them. A style
optimised for such documents would be exact, systematic and legible, and it would treat the page
as a grid rather than as a canvas.

Josef Müller-Brockmann's concert posters are the most reproduced images of the period, and they
show the method plainly: a photographic image, a grid, a type family, and a small number of
colours with clearly assigned jobs. Nothing on the poster is there because it looked nice.

Massimo Vignelli, who came from Italy and worked in New York, carried the same method across the
Atlantic. His 1972 book *The New Canon* set out the principles as a manual, and his work for
American National, Knoll and Unimark applied them at scale. The New York Subway diagrams are the
canonical example of a system where a fixed set of line colours and a strict typographic hierarchy
had to work across thousands of pages.

### 2.2 Typography first

The decisive move was typographic, not chromatic. Helvetica — commissioned by the Swiss
post office, drawn by Eduard Hoffmann and Max Miedinger, released in 1957 — gave the style a
neutral, geometric grotesque with identical widths and a large x-height that read cleanly at
small sizes and at distance. Akzidenz-Grotesk, Univers and later Franklin Gothic served the same
goal in neighbouring markets.

The point was not that these fonts are beautiful. The point was that they are *systematic*: one
family, consistent metrics, a small number of weights, no ornament. A grid plus one sans-serif
plus nothing else is a complete design system, and if the system works, colour has almost nothing
left to do.

This is the part that gets lost when the style is reduced to "minimalist black and white". The
minimalism is a consequence, not the premise. The premise is that a page is a system of relations —
columns, baselines, measure, rhythm — and that if you get those right, decoration becomes
optional.

---

## 3. The visual grammar

### 3.1 Achromatic by default

Every colour in this family except one is a true grey with chroma of exactly `C` 0.00. That is not
a stylistic shrug; it is a measurement. A "warm grey" at `C` 0.02 is a different colour system, and
it belongs to a different family — morandi, which is the subject of
[morandi versus swiss neutral](../../3-morandi/03-morandi-vs-swiss/en.md).

True grey also has a practical consequence that matters for print and for projectors: it cannot
pick up a cast from the substrate, the stock, or the ambient light. A page of pure greys prints as
greys.

### 3.2 The grid does the work

Alignment is the primary structuring device. A flush-left, ragged-right setting on a fixed number
of columns gives an asymmetric page that still looks ordered — asymmetry here is not casual, it is
the visible result of a decision about where the type sits relative to the column.

The greys follow from this. A hairline rule at `#E0E0E0` separates a heading from its body; a
`#F5F5F5` panel marks a region without claiming to be a coloured region; a `#333333` block marks
something heavy. Each is a *step*, chosen from a fixed ladder, and each step means the same thing
everywhere in the system. That consistency is what makes a page feel designed rather than
decorated.

### 3.3 Asymmetry, and the space between

Layouts in this family are flush left and set ragged right. The right edge is allowed to be uneven
because the grid, not the margin, is what the eye reads as structure — and because an uneven right
edge is what shows the type is being set rather than poured.

Space is the other half of the system. The interval between a heading and its body, the margin
between a panel and the text it holds, the padding inside a table cell: these are the real
hierarchy, and they are set by spacing rules rather than by colour.

### 3.4 Exactly one accent

Signal red `#FF0000` is the only chromatic member of the family, and the only colour allowed to
mean "act", "this one", "attend to this". It is the active state, the current row, the live
figure, the alert that is genuinely an error.

Its chroma is `C` 0.26 — the highest in this book — and that is the point of it. Against a field
of `C` 0.00 greys, even a red that is not very dark is the loudest thing on the page.

But "loudest" is not "most useful". Red on white measures a contrast ratio of 4.00, which is
below the 4.5 needed for normal body text and above the 3 needed for large text and for non-text
elements such as chart marks and rules. So the signal red is a good colour for a large number, a
filled marker, a border, an icon — and a poor colour for a sentence. Its job is to be noticed, not
to be read at length.

---

## 4. The numbers

<!-- band:swiss-neutral:en -->
| Dimension | Measured on | Value |
| --- | --- | --- |
| Lightness | OKLCH L | 0.32 – 0.97 |
| Chroma | OKLCH C | 0.00 – 0.26 |
| Hue spread | distinct hues (30° buckets) | 1 |
| Mean lightness | mean OKLCH L | 0.71 |
| Mean chroma | mean OKLCH C | 0.06 |
| Reference: mean HSL saturation | HSL overstates pastels | 25% |
<!-- /band -->

The lightness range is the widest in the book — 0.32 to 0.97 — because this family is built from a
ladder rather than from a cluster. The chroma range runs 0.00 to 0.26, and that spread is not a
band at all in the usual sense: it is one colour at the top of the scale and six at the bottom.

The mean figures (0.71 lightness, 0.06 chroma) describe the average of the palette, but the average
is not the point here. The point is the *distribution*: one chromatic outlier in a field of
achromatic steps. A family with a chroma range of 0.00 to 0.26 is not a family with a loose rule
about colour; it is a family whose rule is that colour appears exactly once.

---

## 5. What swiss neutral is not

- **Not "boring".** The neutrality is a method, not a mood. What makes it read as austere in a bad
  implementation is a layout with nothing to do — no grid, no hierarchy, no use of the space. The
  same greys on a real grid look considered.
- **Not for brands that need warmth.** A product sold on craft, comfort, family or handmade
  value will find true grey cold, and it will find one red insufficient. Morandi keeps its warmth
  while staying quiet; wabi-sabi keeps the material feeling.
- **Not morandi grey.** Swiss grey is a true grey at chroma `C` 0.00. Morandi's greys are
  warm-tinted — its paper is `#F5F2ED`, its ink is `#3F3A38`, both with a visible cast. The
  difference is explained in [morandi versus swiss neutral](../../3-morandi/03-morandi-vs-swiss/en.md).
- **Not a general-purpose UI palette.** With one accent and no second state colour, there is
  nothing to distinguish a warning from a success. Systems that need error, warning, success and
  info states need more colour than this family allows, or they need to carry those states in
  typography and icons.
- **Not the same as Nordic.** Both are light and calm, and they are different families with
  different rules. Swiss neutral is truly achromatic and rational; Nordic is tinted and
  atmospheric. See [swiss neutral versus nordic](../03-swiss-neutral-vs-nordic/en.md).

---

## 6. Where to go next

| | |
| --- | --- |
| [The swiss neutral palette](../02-swiss-neutral-palette/en.md) | the grey ladder, the signal red, contrast numbers, and how to extend them |
| [Swiss neutral versus nordic](../03-swiss-neutral-vs-nordic/en.md) | two calm light families, one rational and one atmospheric |
| [Swiss neutral in practice](../04-swiss-neutral-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
