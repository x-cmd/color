---
x-title: Nordic in practice
x-desc: Where the Nordic palette works, how to build specific components with it, how print differs from screen, and the places it is likely to fail.
x-sidebar: Nordic in practice
x-keywords: nordic ui design, nordic colour scheme, saas design palette, healthcare design palette, nordic in interfaces, 北欧界面, 北欧配色应用, SaaS 配色
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Nordic in practice'
      inLanguage: 'en'
      about: 'applying the nordic colour family to real interfaces'
---

# Nordic in practice

---

The Nordic palette is a good fit for products where the content is information and the brand wants
to read as calm, current and clean: developer tools, healthcare, travel and hospitality, portfolios,
documentation. It is a bad fit for anything that needs to shout, and it has one specific weakness
that shows up in dense layouts.

This article works through specific components, because Nordic mostly fails in ordinary places — a
sidebar, a table, a badge — and the failures are visible long before anyone would use the word
"aesthetic".

---

## 1. Where it works

**SaaS and developer tools.** This is the family's home ground, and the reason is structural rather
than decorative. A developer tool is a screen full of information on a light background, and Nordic's
pale blue-greys let structure come from tint and spacing while the actual content — code, numbers,
logs — stays the darkest thing on the page. The ink at 11.70 against white means code blocks and
terminal output read properly, and the accent colours are available for state without competing with
the content.

**Healthcare.** Nordic's coolness is an asset here rather than a liability. Calm, low-chroma,
high-legibility surfaces read as clinical without reading as cold or institutional, and the warm
accents give a place for the human signals — a warning, a recovery status, a reassuring
confirmation — that healthcare interfaces genuinely need.

**Travel and hospitality.** The reservation, the itinerary, the map, the confirmation. These are
screens where the content is beautiful and the interface should get out of the way. A snow surface
with glacier rules lets a photograph carry all the colour, which is exactly the division of labour
Nordic is built for.

**Portfolios.** A portfolio wants a light ground, a lot of space, and a place for the work to be the
only saturated thing on the page. Nordic does this well, and a eucalyptus or terracotta accent is
enough to make the site feel designed rather than default.

**Documentation.** The same argument as developer tools, plus one more: documentation is read for
long stretches, and the family's high mean lightness of 0.79 means less eye strain than a page
built on mid-tones. A sidebar in frost, a code block in glacier, and an active link in deep fjord
is a complete documentation chrome with three colours.

Where Nordic does *not* work: brands that need warmth or urgency. A checkout, an error, a
countdown, a product launch — these need colour that means something, and Nordic's chroma ceiling
of 0.12 means it cannot supply it.

---

## 2. In the interface

### 2.1 The sidebar

The sidebar is where Nordic's structure earns its keep, because a sidebar needs three levels of
separation and a restrained palette can still do it.

The sidebar background is snow, not frost — the sidebar and the main content area are both snow, and
the separation comes from a single glacier rule at the edge. Section headings within the sidebar are
ink at reduced size; inactive items are fjord; the active item is ink with a deep fjord left border,
or deep fjord text. That is three levels — rule, muted, active — using two colours plus a border,
and the surface never changes value.

### 2.2 The table

Tables are Nordic's hardest case and the place where the family most often breaks.

The workable version: a frost header row, no vertical rules, a glacier horizontal rule between
rows, and ink for the primary column. Secondary columns use fjord. Hover is a very slightly deeper
tint of the surface — a step that does not have a name in the palette but sits inside the band.

The version that fails: alternating row tints drawn from frost and glacier, plus a fjord secondary
column, plus a glacier border. Three pale values within a few hundred pixels, and the row structure
disappears on anything worse than a good monitor.

**Do not rely on a pale tint to carry row structure.** Use a rule, or use spacing, or use a weight
change on the primary column. If you need a tinted stripe, use frost on white and accept that it is
a grouping device rather than a separator — and never tint a table with a colour that also appears
as text.

### 2.3 The status badge

Badges are the best use of the warm accents, and the reason is arithmetic: all three clear 9.59
against black, so ink text on a warm chip is comfortably legible. A mustard chip with an ink label
is a high-chroma element that never becomes unreadable, which is a rare combination.

The rule is dosage. One mustard chip in a list of twelve frost chips reads as "this one is
different". Six mustard chips read as a page with a colour problem. And the badges should differ in
kind, not just in colour — if "warning" and "new" are both mustard, the user has nothing to hold.

A badge also cannot be the only carrier of meaning. At the sizes badges actually appear, terracotta
and mustard are hard to tell apart for many readers, and both are hard on a low-quality display.
Pair the colour with an icon or a word.

### 2.4 The hero

The hero is the most dangerous component, because it is the largest area on the page and the place
where people reach for colour.

The Nordic hero works like this: snow background, ink headline, fjord or deep fjord supporting line,
one button. If the button is the accent colour, it must be the *only* coloured thing in the hero —
no coloured label, no coloured illustration fragment, no coloured rule under the headline. The
hero's job is to be the calmest part of the page so that the rest of it can be read.

A common and effective variant: the hero carries a photograph, and the interface around it stays
snow and frost. The photograph supplies all the warmth and saturation; the interface supplies none.
This is the division of labour the family was built for.

### 2.5 The chart

For a chart, the four blues are four steps of one hue, which makes them usable as a series ramp —
with the caveat that the series must be ordered, because the eye cannot tell two adjacent blues
apart without help. Deep fjord is the primary series, fjord the secondary, glacier the gridlines,
and a warm accent marks the one series that matters. Three categories means deep fjord, fjord and a
warm accent; more than four, and you need direct labels instead of a legend.

Gridlines are glacier, always, and lighter than any data mark on the page. Axis labels are fjord. A
chart that puts a fjord line and a fjord gridline on the same screen is a chart nobody can read.

---

## 3. In brand and print

### 3.1 The brand palette

A Nordic brand identity is small by nature. The paper is snow, the wordmark is ink, and there is one
accent — terracotta, most often, because it is the warmest and the least "tech" of the three. A
brand that needs a full colour system should look elsewhere; a brand that needs to be calm,
credible and slightly Scandinavian should look here.

Do not put mustard in a logo. At `C` 0.12 it is the family's most saturated colour and it will read
as a different identity from the interface it is supposed to belong to. Terracotta at `C` 0.07 is
the safe choice for a mark; eucalyptus at `C` 0.07 is the choice for something that should read
organic.

### 3.2 Print is harder than screen

Print is where Nordic gets tested, and it usually fails there first. Ink on snow measures 11.70
against white on screen; on paper the same pairing gives a much smaller margin, because paper is
off-white and ink spreads. Three practical consequences:

- **Do not rely on fjord for anything you need to read.** Its 2.11 against white is a screen number;
  on paper it is thinner still, and in greyscale it merges with the rules and the gridlines.
- **Keep body text in ink.** At 11.70 there is real headroom; every other colour in the family
  lacks it.
- **Do not print a light tint as a background and a pale tint as a rule on it.** On press, the
  smallest tints drop out entirely or come out unevenly. Frost on snow may not print at all.

The general principle: **the screen is the forgiving medium for Nordic, and print is the strict one.**
A pale ramp that works beautifully on a calibrated display will read as mud on an uncoated stock.

### 3.3 Screen and projector are not the same

The projector fails the same way. It compresses the dark end and flattens the light end of the
range, so two pale greys that are clearly different on a laptop arrive at the wall as one. If a
presentation contains a Nordic table, the row structure has to come from a rule or from type
weight, not from a tint.

---

## 4. In data visualisation

The family's four blues make a usable sequential ramp, and the three warm accents make usable
categorical accents. The constraints are worth stating precisely.

**Do not use the four blues as four categories.** They are one hue at four lightnesses, so a reader
cannot tell them apart except by position. As a sequential ramp — one measure, several steps — they
work well. As categories, they work badly.

**Do not use more than one warm accent in a chart.** Terracotta, eucalyptus and mustard are three
different hues, which is what makes them distinguishable as categories. Using two of them is fine
and often good. Using all three plus four blues gives a chart with seven series, which is a chart
nobody reads.

**Let one accent carry the point.** If a chart has one series that matters, it should be the warm one
and the rest should be blues at lower emphasis. This is the Nordic version of the "one accent per
screen" rule, and it works in charts better than anywhere else, because the chart has already told
the reader where to look.

**Mind the greyscale case.** A report that will be printed in black and white loses all three warm
accents. If that is a real possibility, the chart needs to work on structure — direct labels,
different line styles, position — rather than on hue. Nordic charts are more vulnerable here than
most, because its distinguishing colours are all of them pale.

---

## 5. Where it fails

**Dense dashboards.** The most common and most predictable failure. When a screen has four or five
panels of data at once, the family's pale tints stop separating, and the accent colour gets used to
compensate — which pushes the page towards a different family entirely. If a dashboard is dense
enough that the pale steps stop working, the answer is a different palette, not a stricter Nordic.

**Anything that needs urgency.** There is no red. Nordic cannot make a deadline feel like a
deadline, and there is no way to derive one — the hue set has no red in it at any chroma. A product
that lives or dies by a conversion rate under time pressure will find the family too polite.

**Very large type on a very light ground.** At 60px in snow, a thin weight can look washed out
because there is no surrounding structure to anchor it. Nordic headings want a slightly heavier
weight or a touch more colour than the pure ground allows.

**Products aimed at children.** The family has no high-chroma colour, and children read colour as
excitement. This is a design-mismatch, not a fixable one.

**Dense forms with many field states.** Errors, disabled states and required-field markers all want
a small amount of colour, and Nordic has exactly three to give. Reserve them: one error treatment
that is not a red, one disabled treatment that is not a grey, and be consistent.

---

## 6. A checklist

Before shipping a Nordic design, walk this list.

- **The surface is snow or frost**, and every large area is one of them. No large blocks of deep
  fjord, no dark panels.
- **Every neutral is a tint.** No pure greys, no pure black. Ink is `#2E3A40` and it is used for
  body text and nothing else.
- **Ink carries the body text.** Not fjord, not deep fjord, not a warm accent.
- **Deep fjord is the only blue that carries text**, and it is the link colour.
- **One warm accent per screen**, and within that screen the accent is used sparingly.
- **The three warm accents are used for different things**, so colour is not carrying meaning
  alone.
- **No text sits on a warm fill in white.** The text on terracotta, eucalyptus and mustard is ink.
- **New colours are ramp steps**, not new hues. Check the band: `L` 0.63 to 0.94, `C` under 0.12.
- **Row and column structure comes from rules and spacing**, not from pale tints — especially if
  this will be printed or projected.
- **A second muted text colour is fjord, checked against its actual surface**, not assumed.
- **There is a plan for error states** that does not assume a red exists.
- **There is air.** Wide margins, uncluttered surfaces, and enough whitespace that the pale colours
  have somewhere to sit.

---

## 7. Where to go next

| | |
| --- | --- |
| [Nordic — where the palette comes from](../01-nordic-origin/en.md) | what the family is, where it came from, its four rules |
| [The nordic palette](../02-nordic-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Nordic versus wabi-sabi](../03-nordic-vs-wabi-sabi/en.md) | the same low-chroma discipline, on the warm side |
| [Swiss neutral versus nordic](../../4-swiss-neutral/03-swiss-neutral-vs-nordic/en.md) | the other neighbour, and where to go instead when the layout is dense |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
