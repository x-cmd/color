---
x-title: Memphis — where the palette comes from
x-desc: The Memphis Group was founded in Milan in 1981 and named after a Bob Dylan song. Here is what the style is, where it came from, the four rules that hold it together, and what Memphis is not.
x-sidebar: Memphis origin
x-keywords: memphis colour, memphis palette, memphis group, 1980s design, 孟菲斯配色, 孟菲斯风格, 撞色
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Memphis — where the palette comes from'
      inLanguage: 'en'
      about: 'the memphis colour family, its origin and its rules'
---

# Memphis — where the palette comes from

---

Memphis is a family of loud colours: yellow, orange, turquoise, blue, hot pink, violet, set against
black and white. It is the only family in this book whose chroma ceiling (`C` 0.25) sits near the
top of the perceptual scale, and the only one whose ground is a hard white rather than a soft
off-white.

This article is the definition: what the family is, where it came from, the rules that make it
recognisable, and where it stops working. The colours themselves are in
[the palette article](../02-memphis-palette/en.md); the comparison with its loudest neighbour is in
[memphis versus neon](../03-memphis-vs-neon/en.md).

---

## 1. What memphis is

A memphis palette is not "bright colours" and not "primary colours". It is a specific set of
constraints:

- a **high chroma floor** — every colour sits at `C` 0.12 or above, the only family here with no
  near-neutral member among its base colours
- a **narrow lightness band** — `L` 0.55 to 0.91, so the colours are roughly equally bright and
  none of them recedes
- **six chromatic hues** — yellow, orange, turquoise, blue, hot pink, violet — deliberately
  unbalanced, with no warm–cool logic holding them in place
- **a hard black-and-white ground**, never a grey

Read the chroma floor again if you only remember one. Memphis does not have a quiet option. Every
member of the palette is shouting, and the style is built on the assumption that they will shout at
each other.

---

## 2. Where it comes from

### 2.1 The group

The Memphis Group was founded in Milan in 1981 by Ettore Sottsass, together with a circle of
designers that included Michele De Lucchi, George Sowden, Nathalie Du Pasquier and Peter Shire. It
was founded as an alternative to what design had become: the corporate, restrained rationalism of
the previous decade. Sottsass and his colleagues were arguing that objects and graphics could be
made for pleasure rather than for function alone.

The name came from Bob Dylan's song "Oh! Memphis" — a deliberate pun on the American city, borrowed
as a joke rather than a reference. The first Memphis collection, shown in Milan in 1981, was
furniture and laminate panels: brightly patterned surfaces, clashing colour, geometric shapes that
did not line up.

### 2.2 What the surfaces were made of

The visual grammar was set by the materials, and the materials are the reason the style looks the
way it does.

The **squiggles** come from Sottsass's laminate patterns — the printed plastic veneers used on the
group's furniture, with wandering lines that refuse to form a grid. The **dot grids** and the
**terrazzo textures** came from the same production world: printed surfaces where a flat field of
high-chroma colour is interrupted by a regular or irregular scatter of other colours. The
**clashing colour** was not decoration on top of the furniture — it was the point of it. Two
saturated colours side by side were meant to be uncomfortable.

### 2.3 How it spread

Memphis left the furniture salon and entered graphic design through the 1980s: album sleeves,
posters, television graphics, type. Typography borrowed the same vocabulary, setting heavy
display faces at sharp angles to waves and grids.

What carried it forward was not the Milan originals but the aesthetic as a look. By the 1990s it
was circulating as a historical reference, and in the 2010s and 2020s it returned as a *nostalgia*
signifier — a way of saying "the eighties" or "playful" without having to build anything new. That
second life is the one most interfaces are actually drawing on, and it is worth keeping in mind
when you reach for it: memphis today often means *referenced* rather than *original*.

---

## 3. The visual grammar

### 3.1 Black and white are the ground

Everything is built on a hard `#FFFFFF` page and a `#1A1A1A` ink. Memphis is almost never a
mid-grey composition. The ground is the paper, and the ink is the line.

This is what makes the style readable at speed. Because the neutrals are truly neutral and the
colours are fully saturated, the eye gets an unambiguous split: this is text, this is colour, and
they are not competing for the same role.

### 3.2 Saturated primaries are the material

The colours are the material of the composition, not its accent. A yellow shape does not point at
anything — it *is* the shape. This is the opposite of macaron, where colour is worn by the page,
and it is why memphis allows so many colours at once.

The constraint is the band, not the count: `C` 0.12 to 0.25, `L` 0.55 to 0.91. Any colour in that
zone belongs to the family; a colour outside it does not.

### 3.3 The imbalance is the point

The six hues are **not a harmony**. There is no proportional scheme, no warm-cool balance, no
dominant-with-support structure. Yellow and orange sit next to each other, blue and violet sit
next to each other, and pink and orange are close enough to disagree.

This is the rule most often broken in practice, because a palette that fights feels like a
mistake. It is not a mistake — the friction is the subject. Memphis is a family of *oppositions*,
and a memphis palette that resolves into a smooth gradient has stopped being memphis.

### 3.4 Geometry that fights the colour

Colour is not enough on its own; the shapes have to argue too. Memphis surfaces are built from
patterns that deliberately misalign: a wave crossing a grid, a dot scatter over a hard rectangle,
a bar chart whose baseline is a squiggle.

The practical rule for interfaces is the same one the laminate patterns followed: **if two
elements are both trying to be noticed, do not line them up neatly.** Misalignment is what makes
the composition feel energetic rather than merely colourful.

---

## 4. The numbers

<!-- band:memphis:en -->
| Dimension | Measured on | Value |
| --- | --- | --- |
| Lightness | OKLCH L | 0.55 – 0.91 |
| Chroma | OKLCH C | 0.12 – 0.25 |
| Hue spread | distinct hues (30° buckets) | 6 |
| Mean lightness | mean OKLCH L | 0.72 |
| Mean chroma | mean OKLCH C | 0.19 |
| Reference: mean HSL saturation | HSL overstates pastels | 91% |
<!-- /band -->

Two numbers carry most of the meaning. The chroma floor of 0.12 is the highest of any family in
this book, and it is what makes memphis read as loud rather than merely bright — compare macaron's
ceiling of 0.10, which is a limit, against memphis's floor, which is a requirement. The lightness
band is narrow for a six-hue palette: 0.55 to 0.91 means the colours sit at roughly the same
brightness, so none of them sits back.

The hue count of 6 with mean lightness 0.72 and mean chroma 0.19 is the profile of a family built
out of equal voices. Note also the HSL saturation mean of 91% — high, but here HSL is roughly
honest, because these colours really are that saturated. The number HSL exaggerates on pastels
does not mislead on memphis.

---

## 5. What memphis is not

- **Not a colour scheme you can apply quietly.** There is no memphis "muted" version. Dropping the
  chroma of every colour gives you macaron, morandi or swiss neutral — different families with
  different rules, not a calmer memphis.
- **Not a scheme with a leading colour.** The absence of a dominant hue is structural. Promote one
  colour to "primary" and the family stops being the thing that makes memphis memphis.
- **Not for trust-heavy domains.** Finance, healthcare, government and enterprise procurement all
  depend on a palette reading as sober and reliable. Memphis reads as playful and unserious, and
  no amount of careful execution fixes that at the level of perception.
- **Not neon.** Both are loud, but they are loud in opposite conditions. Memphis is loud on white
  in daylight; neon is loud on black at night. The difference is spelled out in
  [memphis versus neon](../03-memphis-vs-neon/en.md), and the other side of that pair is
  [wabi-sabi versus memphis](../../6-wabi-sabi/03-wabi-sabi-vs-memphis/en.md) — between those
  two comparisons you can place memphis on a scale from quiet to loud.

---

## 6. Where to go next

| | |
| --- | --- |
| [The memphis palette](../02-memphis-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Memphis versus neon](../03-memphis-vs-neon/en.md) | two loud families, two opposite conditions |
| [Memphis in practice](../04-memphis-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
