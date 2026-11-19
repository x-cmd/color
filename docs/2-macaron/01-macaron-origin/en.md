---
x-title: Macaron — where the palette comes from
x-desc: The macaron family takes its name from the French pastry and its recipe from the pastel trend of the mid-2010s. What the colours are, where they came from, the four rules that hold them together, and what macaron is not.
x-sidebar: Macaron origin
x-keywords: macaron colour, macaron palette, pastel colours, macaron colours, 马卡龙色, 马卡龙配色, 粉彩
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Macaron — where the palette comes from'
      inLanguage: 'en'
      about: 'the macaron colour family, its origin and its rules'
---

# Macaron — where the palette comes from

---

Macaron is a family of pale, sweet colours: strawberry milk, mint, lavender, lemon, peach, sky,
coral. It is one of the most recognisable palettes in use, and one of the most often copied badly —
usually by taking six pinks and calling it a macaron.

This article is the definition: what the family is, where it came from, and the rules that make it
recognisable. The colours themselves are in [the palette article](../02-macaron-palette/en.md);
the comparison with its closest neighbour is in
[macaron versus morandi](../03-macaron-vs-morandi/en.md).

---

## 1. What macaron is

A macaron palette is not "light colours". It is a specific set of constraints:

- a **very high lightness band** — every colour sits between `L` 0.79 and 0.95
- a **low chroma ceiling** — nothing above `C` 0.10
- **seven named hues** — pink, mint, lavender, lemon, peach, sky, coral, kept roughly warm-cool
  balanced
- **one accent**, and colour used as decoration rather than as material

Read that last point again if you only remember one. In macaron, colour is what a page wears, not
what a page is made of. Pastel fills, pastel illustrations, pastel chips — and the actual interface
work happens in ink, in white space and in one bright-ish accent.

---

## 2. Where it comes from

### 2.1 The pastry

The name comes from the French *macaron*, and the colours come from the pastry itself. A macaron
shell is baked with very little pigment — it takes a faint tint of almond, pistachio, lemon or
raspberry, and the intense colour lives in the filling. The shells are pastel; the flavour is not.

That is the whole idea in one object: a pale surface that promises a strong taste.

### 2.2 The trend

"Macaron colours" as a named palette is usually traced to the mid-2010s, largely through Korean
fashion and interior styling, where it became the marketing word for cute, sweet and soft. From
there it spread into packaging, app interfaces and social media as a way of describing a pastel
palette that felt friendly without being childish.

The palette itself is much older than the name. Pastel — the *pâle* of powdered wigs and porcelain —
goes back to the eighteenth century, and every decade since has rediscovered it in a different
material.

What the 2010s added was not the colours but the **system**: the understanding that a set of
pastels works as a set, not as a collection.

---

## 3. The visual grammar

### 3.1 Lightness first

Everything is bright. The only dark values in a macaron interface are the ink and, occasionally,
the muted grey. If a layout starts needing a dark block for structure, it has stopped being macaron
and become something else — usually morandi, which handles that far better.

### 3.2 The hue stays legible

Each base colour is one you can name without hesitation: pink, mint, lemon, peach. That is why the
family has seven distinct hues rather than twelve near-identical pinks. Palettes built from a
single hue at many lightnesses look washed out; palettes built from many hues at one lightness
look like a macaron.

The seven are kept roughly warm-cool balanced — strawberry milk, lemon and peach against mint,
sky and lavender — so that no single area of a page reads as a colour temperature of its own.

### 3.3 Colour as decoration

The base colours fill things. They do not carry text: even the darkest of them, lemon at `C` 0.09,
sits at a contrast ratio of 18.40 against black text but only 1.14 against white, so white text on
a macaron fill is unreadable and always will be. Body text is ink — here a plum `#4A4045` rather
than a true black, because the family keeps even its text warm.

### 3.4 One accent

Coral `#FFAAA5` is the one colour allowed to mean "act". It is the button, the active tab, the
selected chip. Because the rest of the palette is so quiet, the accent does not need to be
saturated to be seen — it needs to be *alone*.

---

## 4. The numbers

<!-- band:macaron:en -->
| Dimension | Measured on | Value |
| --- | --- | --- |
| Lightness | OKLCH L | 0.79 – 0.95 |
| Chroma | OKLCH C | 0.06 – 0.10 |
| Hue spread | distinct hues (30° buckets) | 7 |
| Mean lightness | mean OKLCH L | 0.87 |
| Mean chroma | mean OKLCH C | 0.07 |
| Reference: mean HSL saturation | HSL overstates pastels | 78% |
<!-- /band -->

Two numbers carry most of the meaning. A lightness floor of 0.79 is what makes the family read as
light at a glance. A chroma ceiling of 0.10 is what keeps it from reading as loud — and it is also
the number most often broken, because a designer pulling a "nicer" pink from a tool will happily
land at `C` 0.15.

---

## 5. What macaron is not

- **Not any pale colour.** A warm grey at `L` 0.85 is not macaron. The chroma ceiling and the hue
  set are what make it macaron; lightness alone is not enough.
- **Not a data palette.** Pastels separate poorly as chart series. Seven pastel bars on white are
  seven things of nearly equal weight, and the eye has nothing to hold on to.
- **Not a dark-mode palette.** The band assumes a light ground. On a dark surface these colours
  glow rather than whisper, and the family stops reading as macaron at all.
- **Not morandi.** Both are pale, and they are different families with different rules. The
  difference is explained in [macaron versus morandi](../03-macaron-vs-morandi/en.md).

---

## 6. Where to go next

| | |
| --- | --- |
| [The macaron palette](../02-macaron-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Macaron versus morandi](../03-macaron-vs-morandi/en.md) | two pale families, two different systems |
| [Macaron in practice](../04-macaron-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
