---
x-title: Neon — where the palette comes from
x-desc: Neon is a lighting technology before it is a colour family — a near-black ground and a few fluorescent accents that read as light sources rather than as paint. Where the look came from, the four rules that hold it together, and what neon is not.
x-sidebar: Neon origin
x-keywords: neon colours, neon palette, synthwave, cyberpunk, dark mode palette, fluorescent colours, 霓虹色, 霓虹配色, 赛博朋克, 暗色配色
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Neon — where the palette comes from'
      inLanguage: 'en'
      about: 'the neon colour family, its origin and its rules'
---

# Neon — where the palette comes from

---

Neon is the one family in this book that is named after a piece of hardware. A neon sign is a
glass tube filled with an inert gas — neon itself, or argon, or mercury vapour — through which a
high voltage makes the gas glow. It is not a pigment and it is not a paint. It is light.

That matters because a family built from light behaves differently from one built from paint, and
the difference is the whole design argument. A painted colour sits on a surface and reflects
whatever light is in the room. A neon tube makes its own light, in its own colour, in a dark
street. So the colour is inseparable from its ground: the tube is only impressive because
everything around it is night.

This article is the definition — what the family is, where the look came from, the rules that
make it recognisable, and what it is not. The colours themselves are in
[the palette article](../02-neon-palette/en.md); the comparison with the family that shares its
sweetness but not its ground is in [neon versus macaron](../03-neon-vs-macaron/en.md), and the
comparison with the other loud family is in
[memphis versus neon](../../7-memphis/03-memphis-vs-neon/en.md).

---

## 1. What neon is

A neon palette is a specific set of constraints:

- a **near-black ground** — a void and a panel, both well below ordinary "dark grey"
- **fluorescent accents at high chroma** — the family's chroma range runs to `C` 0.29, higher than
  any other family in this book
- **a small, fixed number of accents** — five, kept distinct in hue so that each one reads as its
  own light source
- **near-white text** — not off-white, not grey; a light ink that sits high on the lightness scale

The word that does the work here is *light source*. Every other family in this book treats colour
as something that sits on a surface. Neon treats it as something that emits onto the surface.
That single difference explains all the rest: why the ground must be near-black rather than
merely dark, why the accents must be few enough to be countable as separate tubes, and why the
text is near-white — a lit surface throws light back at you, and the surface reads by its own
light rather than by reflecting a lamp.

---

## 2. Where it comes from

### 2.1 The tube

The neon lamp itself is a nineteenth-century technology. Pure neon, sealed in a glass tube at low
pressure, glows a characteristic reddish-orange when an electric current passes through it;
other gases were added later to reach other colours — argon and mercury for the blues and
whites, and coatings on the inside of the tube for the rest of the spectrum. Signs became a
standard piece of urban infrastructure in the first half of the twentieth century, and the
colours they produced were limited, brilliant and sharply separated from one another. The
famous signs were largely red, orange and blue because those were the tubes that were easy to
make.

What the tube teaches a designer is this: an emissive colour is *saturated in a way that paint
cannot reach*, and it is surrounded by darkness that is not merely a background but a condition of
the effect.

### 2.2 The cinema

The look that became a palette did not come from signage. It came from screens. Neon lighting
became a signature of science-fiction cinema in the 1980s — films such as *Blade Runner* (1982)
and *Tron* (1982) are usually cited as the two that fixed the imagery, and the wider genre of
cyberpunk film alongside them. These are movies in which a great deal happens at night, in
cities, in rain, and the practical lighting was supplemented or replaced by saturated colour
that the eye reads as emitted rather than reflected.

The vocabulary that came out of those films — violet and cyan and magenta on black — is now so
familiar that it risks looking like a style rather than a photograph of a technology. But it was
a photograph of a technology. The designers who built the synthwave and cyberpunk visual
languages of the late 1980s and 1990s were working from those films and from record sleeves
that used the same lighting, and they took the colours from the tubes.

### 2.3 The system

What came out of all this is not "bright colours on dark". It is closer to a set of rules for
lighting a scene with a small number of coloured sources. That is why the family has a
near-black ground, why the accents are limited, and why it never settles into decoration.

---

## 3. The visual grammar

### 3.1 A near-black ground

The ground is `#05060A` — a void with a faint blue cast, not a neutral black — and it is the most
important colour in the family. Anything brighter stops being neon and starts being a dark
theme with neon decorations.

Two near-blacks are needed, and they are not the same value. The void is the street; the panel
`#131722` is the wall in front of it. The difference between them is a contrast ratio of 1.13,
which is far below anything you would use to separate two elements that need to look
different — the panel is not a high-contrast card, it is a slightly raised surface. The family
uses it for the things a real room would give you: code blocks, cards, the raised edge of a
panel, a menu that floats above a page.

### 3.2 Fluorescent accents at high chroma

The five accents are the point of the family. Acid lime `#39FF14` sits at `C` 0.29, which is
higher than anything else in this book; neon cyan `#00F0FF` and neon violet `#9B5CFF` sit at 0.15
and 0.23; neon magenta `#FF2E88` at 0.24; neon amber `#FFB800` at 0.17.

These are not "vivid versions" of ordinary colours. They are hues pushed to the edge of what the
display can hold, which is exactly what a gas tube does — the colour is the strongest thing
available in that hue, and it comes from somewhere else rather than from a pigment jar.

### 3.3 A small number of accents

Five accents, and the number is doing structural work. A neon sign with five different colours
reads as five signs; a page with fifteen reads as a paint chart. The count is what keeps the
accents legible as *sources* rather than as decoration.

The five are also spaced far apart in hue — cyan at 203°, amber at 81°, lime at 142°, violet at
297°, magenta at 2° — so that any two of them can sit next to each other without muddying, and
so that a reader can tell at a glance which one is which.

### 3.4 Near-white text

Text is `#E6EDF3`, at `L` 0.94. It is not pure white, and that is deliberate: pure white on a
near-black ground produces a hard, vibrating edge that is tiring to read at length. But it is
very close to white — the point is that in this family the ground is lit down and the text is lit
up.

Muted `#8B98A5` handles captions, metadata and disabled states, and it is the only other
non-accent colour in the family. It is a desaturated blue-grey, so it reads as the same
coolness as the ground rather than as a separate grey imported from somewhere else.

---

## 4. The numbers

<!-- band:neon:en -->
| Dimension | Measured on | Value |
| --- | --- | --- |
| Lightness | OKLCH L | 0.21 – 0.87 |
| Chroma | OKLCH C | 0.02 – 0.29 |
| Hue spread | distinct hues (30° buckets) | 6 |
| Mean lightness | mean OKLCH L | 0.68 |
| Mean chroma | mean OKLCH C | 0.18 |
| Reference: mean HSL saturation | HSL overstates pastels | 88% |
<!-- /band -->

The lightness band is unusually wide, and it is wide for a structural reason rather than an
accident: the family deliberately holds its darkest surface at `L` 0.21 and its brightest accent
at `L` 0.87, so that accents and ground are separated by lightness as well as by chroma. That
separation is what lets a cyan button sit on a black panel and still be readable.

The chroma ceiling of 0.29 is the number that makes the family fluorescent. Nothing else in this
book goes there. It is also the number most likely to be broken by accident, since every colour
picker will happily offer something brighter.

---

## 5. What neon is not

- **Not dark mode in general.** This is a family with its own rules, not a general-purpose dark
  theme. Dark mode as a practice is "the same palette, inverted"; neon is a different palette
  with a different ground, a different set of accents and different text. A dark theme that
  inverts macaron is not neon, and a neon palette with the accents dialled down is not dark
  mode either.
- **Not for reading-heavy content.** The family's text sits at a contrast ratio of 17.77 against
  the void, which is excellent, but that number says nothing about the effect of bright text on
  a black field over a long session. Neon is comfortable in bursts and tiring over length.
- **Not for forms.** Form fields need placeholder text, disabled states, help text and error
  states, and they need several colours to say those different things. The family has five
  accents and no semantic set, so a form built on it will spend its accents on decoration and
  have nothing left for meaning.
- **Not for print.** The ground is the palette. Print it and you get a very large quantity of
  near-black ink, a ground that reads as a slightly grey rectangle, and accents that have lost
  the one thing that made them work.
- **Not memphis.** Memphis is also loud, also uses saturated colour on a dark ground, and also
  came out of the 1980s. But Memphis is loud on *purpose*, in daylight, with a white in the
  palette and squiggles and geometry doing the work. The comparison is in
  [memphis versus neon](../../7-memphis/03-memphis-vs-neon/en.md).

---

## 6. Where to go next

| | |
| --- | --- |
| [The neon palette](../02-neon-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Neon versus macaron](../03-neon-vs-macaron/en.md) | the same sweetness, turned all the way up and set on black |
| [Neon in practice](../04-neon-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
