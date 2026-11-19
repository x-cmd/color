---
x-title: Neon in practice
x-desc: Where neon works — nightlife, music, gaming, developer tools, portfolios — and what it costs. Concrete components, the accessibility bills, the cases where it breaks, and a checklist you can run a design against.
x-sidebar: Neon in practice
x-keywords: neon design, dark mode accessibility, neon UI, developer tools design, portfolio design, focus ring contrast, 霓虹设计, 暗色界面, 无障碍, 焦点圈
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Neon in practice'
      inLanguage: 'en'
      about: 'applying the neon colour family in interfaces, and where it fails'
---

# Neon in practice

---

Neon is not a family you apply to a whole product. It is a family for the moments when you want
something to look lit — and it costs you something in legibility, in print, and in daylight. This
article is about where the trade is worth making, what it looks like on actual components, and
where it breaks.

The palette is in [neon — the palette](../02-neon-palette/en.md); the family and its history are
in [neon — where the palette comes from](../01-neon-origin/en.md).

---

## 1. Where it works

Neon works when three things are true at once: the user is likely to be in a dark room, the
content is read in short bursts rather than continuously, and the product wants to look like it
has an edge.

**Nightlife and events.** Club systems, event listings, ticketing for late events. The audience is
literally in the dark. A near-black ground with a magenta accent is not a stylistic choice here,
it is a match for the room.

**Music.** Release pages, artist sites, live-stream overlays, DJ tooling, hardware and
synthesiser products. Music has used the neon-on-black visual language since the record sleeves
of the late 1970s and 1980s, so the association is already there and it is already understood.

**Gaming.** Game launcher clients, in-game companion sites, esports and streaming overlays,
hardware and modding communities. Games and their surrounding sites are read in the same room the
game is played in.

**Developer tools that want an edge.** This is the largest practical use, and it is worth being
honest about why: developers spend their working day in dark interfaces already, and they are
attuned to the visual language of terminals and editors. A CLI tool, a TUI, a status dashboard, a
build monitor, an observability console — neon is at home in all of them, and the audience will
read it as competent rather than as a fashion statement. This is where the family's terminal
adjacency in its profile comes from.

**Portfolios and landing pages.** A portfolio is read in bursts, usually at night, and wants to
make an impression in a scroll. A single neon accent on a hero heading is enough; the mistake is
putting it everywhere.

The common factor is not "cool". It is that the user is at night, the content is episodic, and
the product benefits from looking like an object rather than a document.

---

## 2. In the interface

### 2.1 The hero

The hero is where neon belongs. A headline in the text colour, one accent-coloured word or
underline, a single line of accent for a rule. The hero is read once, glanced at, and it needs
to look like something. This is the highest-value placement in a whole interface, and the reason
is that the cost of the family — its poor behaviour under long reading — is exactly zero here.

### 2.2 The code block

A code block is the most natural home for a dark family, and neon is the natural accent for it.
Put the panel `#131722` on the void `#05060A` — a ratio of 1.13, subtle but enough to read as a
raised surface — and set the code in the text colour with syntax colours drawn from the five
accents.

The practical constraint: syntax highlighting is a place where palettes genuinely need six or
eight distinguishable colours, and this family has five plus two neutrals. The way through is not
to add colours but to let the *neutrals* carry part of the load. Reserve the accents for the
constructs that matter — keywords, strings, functions, comments — and let plain identifiers be the
text colour, and let the panel and the muted grey separate the rest. A code block that uses all
five accents in a single line is unreadable in a way that no amount of contrast ratio fixes.

### 2.3 A status badge

Status badges are a good fit, and the reason is that they are marks rather than words — a small
filled shape with a short label. The accents map onto statuses naturally: acid lime for success
or running, amber for warning, magenta for error or critical, cyan for information, violet for
anything that is neither.

The rule that keeps this honest: the status must not be carried by colour alone. Add a glyph, a
label, or a border style, because the accents are not reliably distinguishable for a reader with
a red-green colour vision deficiency — and lime against magenta, at `C` 0.29 and 0.24, is
precisely the pair most likely to be confused.

### 2.4 A pricing table

Pricing tables are usually the worst possible fit, and it is worth understanding why before
using one. A pricing table is a comparison the reader does slowly, with numbers, at length. It
is a reading task wearing a decision task's clothes, and neon is bad at the first and has no
advantage on the second.

If you use one anyway, the compromise is to keep the table itself in the neutrals — text colour,
muted, panel surfaces, hairline borders — and let neon appear in at most two places: the
recommended tier's border and its badge. That is enough to draw the eye without making the
comparison harder to read.

### 2.5 The chart on dark

A chart is where neon gets interesting, and where it gets dangerous. The good news is real: on
the void, the accents separate well — lime at 14.94 against the void, cyan at 14.38, amber at
11.68, magenta at 5.78, violet at 5.18. These are strong, distinct series colours.

The bad news is that this is exactly the case where five colours is not enough and where the
temptation to add a sixth is strongest. The honest answers are: fewer series, more chart types, or
use lightness as the distinguishing channel within a hue rather than adding hues. A chart with
three series in cyan, magenta and lime at different lightnesses is more readable than a chart
with five series in five hues that a colour-blind reader cannot separate.

---

## 3. In brand and print

Neon as a brand has one enormous advantage and one enormous problem.

The advantage is that it is unmistakably identifiable. There are few brands with a magenta-on-
black look, and when a brand owns one, it is not mistaken for anything else.

The problem is that the ground is the brand. A brand system built on a near-black ground cannot
be printed, cannot be put on a white document, and cannot be shown in daylight on a screen
without looking broken. If the brand needs to exist on a business card, an invoice, a packaging
box, a sponsor banner in daylight, or a pitch deck, the neon ground cannot come with it.

The workable approach separates the two halves. Keep the neon palette for the places where the
brand is *shown* — the site, the screen, the stage, the booth — and build a parallel "ink" version
for the places where it is *printed*. That ink version is not macaron and not neon; it is a
dark-ground palette with the accent hues held at their brand hues but their chroma pulled down
and their lightness pulled up so they pass contrast on white.

If you can only afford one version, choose the light one and keep the accents as small marks on
it. A magenta rule under a black heading on white will read as confident; a black page will read
as a problem.

---

## 4. In data visualisation

Data visualisation is where neon has the most natural claim and the most specific constraints,
and the two belong in the same paragraph.

The claim: on a near-black ground, high-chroma series colours have more headroom than they do on
white. Macaron's pastels separate poorly as chart series on a light surface because they are all
close in lightness; neon's accents run from `L` 0.63 to 0.87 and from `C` 0.15 to 0.29, which is
a much wider separation on both axes at once.

The constraints:

**Few series.** Five accents, so a chart with more than four or five series needs another channel.
Use lightness within a hue, or use the small multiples approach, or use the panel and the muted
grey to carry the categories that are not data.

**Never for the values themselves.** Axis labels, tick labels, tooltips and data labels are text.
Use the text colour for them. An accent-coloured axis label at `C` 0.29 is a bright smear next
to the number it is supposed to be explaining.

**Gridlines and axes should be muted.** `#8B98A5` is the right colour for a gridline on the void
— it is visible at 6.88 against the void without competing with the data.

**Labels need a surface.** A data label sitting directly on the void in an accent colour will
collide with whatever is behind it. Put it on the panel, which at 1.13 against the void reads as
a raised surface and gives the label a place to sit.

---

## 5. Where it fails

**Long reading.** This is the family's fundamental limit and it is not a contrast problem. The
text colour reaches 17.77 against the void, which is excellent by measurement. What the number
does not capture is that bright text on a black field produces more halation and more eye
fatigue over a paragraph than dark text on white does, and that the effect compounds across
several thousand words. Neon is comfortable in bursts and tiring over length. Any product whose
core activity is reading — documentation, articles, a legal agreement, a long form — should use
a different family.

**Forms.** A form needs placeholder text, disabled states, helper text, validation errors,
required-field markers and focus states, and it needs several colours to tell those apart. Neon
has five accents and no semantic set, so a form built on it spends its accents on decoration and
has nothing meaningful left. If a form is unavoidable inside a neon product, borrow a semantic
set from another family rather than improvising one out of the accents.

**Daylight.** On a laptop in a bright room, a near-black ground with a cyan accent is a
high-glare, low-comfort combination. The void at `L` 0.12 next to a bright window is a real
readability problem, and no amount of accent tuning fixes it.

**Print.** Covered above, but the short version: the ground is the palette, so there is nothing
to print.

**Focus rings.** This one is specific and worth spelling out, because it is the failure mode most
likely to be shipped by accident.

A focus ring is a non-text element, and WCAG requires a ratio of at least 3 against adjacent
colours. The problem is that a focus ring in an accent colour is often drawn on the panel, and
the accents against the panel are: cyan 12.71, lime 13.20, amber 10.32, magenta 5.11, violet
4.58. Those numbers look fine — all of them clear 3 comfortably. But a focus ring is not a
filled shape; it is a thin outline, and a 1px outline in a colour that bright against a dark
panel is legible as a *shape* while the thing it is outlining may be the same colour as the ring
itself.

The specific failure: an outlined button whose border is violet `#9B5CFF` on the panel, focused
with a violet ring. The ring and the border are the same colour and the same hue, so the user
sees one shape, not two, and cannot tell where the focus is. The fix is not a brighter ring; it
is a ring in a different channel from the thing it surrounds — either the text colour, or the
accent tint, or a double ring in two tones.

**Dense tables.** Rows of alternating near-blacks with hairline borders, read for long periods,
is a reading task wearing a data task's clothes. Use a different family.

---

## 6. A checklist

Before shipping a neon interface, walk these:

- Is the ground still `#05060A` for the page and `#131722` for raised surfaces, with nothing in
  between?
- Are there still exactly five accents, and does each one have a named job rather than "we needed
  a colour for this state"?
- Is every word in the text colour or the muted grey, and is the muted grey used only for
  metadata, captions and disabled states?
- Does any accent carry body text? It should not.
- Does every glow or halo use a lighter tint of the *same* hue as the thing it surrounds?
- Do focus rings clear 3 against their adjacent colour, and are they a different hue or a
  different lightness from the border they surround?
- Is any status or series colour carried by something other than hue alone — a glyph, a label, a
  border style?
- If there is a chart, does it have five series or fewer, and are its labels and axes in the text
  and muted colours?
- If there is a form, does it have a real semantic set, or is it borrowing the accents for
  meanings the family was not designed to carry?
- Will this be read in daylight, printed, or read for long enough that the fatigue matters?

If the last one is yes, the answer is a different family. Neon is a good answer to a narrow set
of questions, and this list exists to help you notice when you are outside them.

---

## 7. Where to go next

| | |
| --- | --- |
| [Neon — the palette](../02-neon-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Neon — where the palette comes from](../01-neon-origin/en.md) | the lighting technology, the cinema, and the four rules |
| [Neon versus macaron](../03-neon-vs-macaron/en.md) | the same sweetness, turned all the way up and set on black |
| [Memphis versus neon](../../7-memphis/03-memphis-vs-neon/en.md) | the other loud family, and how the two differ |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
