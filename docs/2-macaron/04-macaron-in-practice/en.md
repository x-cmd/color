---
x-title: Macaron in practice
x-desc: Where the macaron family works, how to apply it to real components, photos and print, and the four situations in which it will fail you — dashboards, dense tables, legal and medical information, and dark mode.
x-sidebar: Macaron in practice
x-keywords: macaron ui design, pastel interface, macaron in print, pastel photography, empty state design, 马卡龙 UI, 粉彩界面, 空状态, 印刷
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Macaron in practice'
      inLanguage: 'en'
      about: 'applying the macaron colour family to interfaces, brand and print, and its failure modes'
---

# Macaron in practice

---

The palette articles tell you what the colours are. This one is about putting them on a screen,
into a photo, or onto paper — and about the four situations where the whole approach collapses.

Macaron is a **surface-and-decoration family**. It is at its best where the job is to make someone
feel something in the first three seconds — a food app, a gift shop, a birthday flow, an empty
state. It is at its worst where the job is to make someone read fast and trust what they read.

---

## 1. Where it works

**Food and drink.** The family's home ground. A food product is judged on appearance before taste,
and the palette is named after a food whose whole identity is pale shells around intense filling.
Strawberry milk `#F8C8DC` for a berry product, lemon `#FFF1A8` for citrus, mint `#A8E6CF` for
herbal and green, peach `#FFD3B6` for anything roasted. The names do half the work: a user
scanning a menu sees a lemon-yellow tile and knows what it is before reading the name.

**Consumer subscription apps.** Anything with a recurring billing relationship, a card-based home
screen, and a tone of gentle encouragement. The palette covers a soft landing state, a progress or
reward moment (a coral fill, a mint chip), and a page that stays pleasant after the novelty wears
off. It cannot convey urgency, and apps that need urgency should not use it.

**Children's products, done carefully.** What makes a product childish is quantity, not hue. A
reading app for seven-year-olds with a cream background, a strawberry milk card and one coral
button reads as kind; the same app with six pastel cards, a cartoon mascot and a lemon-yellow
progress bar reads as a toy. Keep the fills few and the text in ink.

**Seasonal and campaign surfaces.** Macaron is good at being a wrapper: a limited-time banner, a
holiday theme, a gift-guide email, a seasonal landing page. It recolours without restructuring —
you can change a campaign's accent from coral to mint without touching layout. One accent per
screen means a seasonal re-skin changes the accent everywhere; decide early whether the season is
a full re-skin or a set of accented panels, because the second is much cheaper.

**Onboarding and empty states.** The strongest single use of the family. An empty state has no
content to be legible, so its only job is mood. A soft cream panel, a simple illustration in
lavender and mint, one coral button does exactly one thing well, and makes the product feel
designed rather than assembled. The same panel in swiss neutral would be correct and forgettable.

---

## 2. In the interface

The [palette article](../02-macaron-palette/en.md) sets out the rules; here is what they look like
applied to actual components.

**A card.** The most common macaron component and the easiest to get wrong. The working card is:
cream or white background, a hairline border in a tint, an optional 4-pixel stripe of the base
colour on one edge, ink text, one small accent element. A card whose background is a base colour
at full chroma does not work: strawberry milk `#F8C8DC` at full strength behind a card is a wall
of pink. The general rule: **the base colour appears as an edge, a stripe, an icon or a label, and
the tint appears as the field.**

**A button.** The primary button is coral `#FFAAA5` with ink on it. Ink against coral is 5.47,
which clears 4.5 for normal text, so the label can be any size. White on coral is 1.82 and must
not be used. Secondary buttons are ink-coloured outline on cream, or a tinted fill with ink. A
coral button next to a peach button is not two buttons, it is one button and one decoration; if
both are actionable, one is not the primary and should not be coral.

**A chip and a tag.** Tags are the natural home of macaron: a mint chip for a "vegetarian" label, a
lavender chip for a category, a coral chip for a selected filter. Chips carry ink text (5.07 to
8.72 against the base colours) and can be filled at full base colour because the text sits on them
in ink. This is the one place where the base colours appear at full strength and it works. Set a
paragraph in a base colour instead and it collapses: lavender on the cream surface is 1.93.

**An empty state.** Cream background, an illustration using two or three base colours, a heading in
ink, a body line in muted grey, one coral button. Keep the illustration flat and simple — macaron
illustration that tries to be detailed ends up muddy, because there is no value range to model with.

**A chart.** Read section 4 before drawing one. One series is fine, several series are not.

**A photo treatment.** A pastel accent on a photograph is delicate, because the photograph brings
its own colours and they are not in your palette. The safe approach is to place the accent
*outside* the image — a coral pill label on a caption plate, a pastel frame around the image, a
coloured section header above it. Tinting the image itself is unsafe: a strawberry milk overlay on
a photo fights the photograph's own skin tones and reads as a filter, not a brand. If you must
tint, tint toward the image's shadows rather than over its midtones, and keep the tint below what
you would consider "a colour" — the family has no darkness to give you.

**A notification or badge.** Small, saturated, and alone: coral, or ink. A pastel badge on a pastel
background does not read as a badge.

---

## 3. In brand and print

**Print is where macaron is at its most fragile.** CMYK conversion dulls both of the colours the
family leans on: the yellow goes greenish and weak, and the pink goes muddy and slightly grey. A
screen mockup in lemon `#FFF1A8` and strawberry milk `#F8C8DC` will not reproduce in print. The
rule for anything that goes to a printer is: **proof it first, in CMYK, on the actual stock.**

That proof changes the palette. Print people often end up nudging the lemon and the pink toward
more saturation to survive the conversion, which pushes them out of the family's `C` 0.10 ceiling
— but the chroma ceiling is a screen constraint. Treat the print palette as its own palette with
its own values, derived by proofing rather than by formula.

Two more print-specific notes. On uncoated stock, the yellow and the light pinks will appear
lighter and flatter than on screen. And on a photograph printed alongside macaron panels, the
panels will read as more saturated than they are — the eye calibrates to the darkest thing in view.

**Brand identity.** The palette is memorable without being loud. Seven distinguishable hues at one
lightness means a distinctive colour signature: an application, a card, a bag and a shopfront are
recognisably the same brand from a distance. The disadvantage is that it does not scale to an
identity system on its own. It needs a type system, a layout system, and usually a logo that is
not a pastel blob, to become a brand rather than a colour scheme.

**Illustration and iconography.** Macaron illustration works when it is flat, simple, and set on
cream. The family has no dark values, so there is no natural shadow — either drop shadow entirely,
or invent one using a shade step of a base colour, which is outside the family band but acceptable
as a local convention. Line work is a good solution: ink-plum outlines over pastel fills give the
drawing its contrast without spending a colour on it.

---

## 4. In data visualisation

Macaron's numbers make this a short section, and the short section is the point.

Two colours from the family are nearly the same lightness by construction, so they are nearly the
same contrast against any background. The contrast ratio between strawberry milk and mint is
**1.04**. Between mint and peach, 1.02. Between lavender and coral, 1.08. Between strawberry milk
and sky, 1.04. As chart series, these colours are not distinguishable — a viewer looking at a
legend cannot tell which bar is which, not because of the legend's design but because the bars
have the same value.

That is not a fixable charting problem. It is what the family is. The rules that follow:

- **One series only.** A single pastel bar chart works, because there is nothing to distinguish.
  Use coral for the single series if it is the focus and a base colour if it is not.
- **Never seven, never stacked, never a pie chart.** The origin article's "not a data palette" is
  not a matter of taste; it is arithmetic.

If the chart is not the point — a small sparkline, a progress indicator, a proportion bar on a
card — macaron is fine. If the chart *is* the point, you need a family with a lightness ladder
built for it: swiss neutral's greys, or morandi's, or a dedicated categorical palette. Mixing
macaron pastels with a saturated accent works only if the accent carries all the meaning and the
pastels are decoration. Two things do work if you must: labels placed directly on or beside the
marks, so colour is not the only channel; and patterns, hatching or gaps, so a mark's identity does
not depend on hue at all.

---

## 5. Where it fails

**Financial dashboards and dense tables.** The canonical failure. A table needs to let the eye
scan a row, align a column, and separate a total from the numbers above it. Macaron has one dark
value (the ink), and it needs it for text. There is no second dark value for a header row, no
mid-grey ladder for zebra striping, and the base colours are too close in value to stripe with
(strawberry milk against mint is 1.04 — the eye reads that as one field, which is exactly the
failure). If you want to stripe a table in this family, the honest answer is: don't use macaron.

**Legal, medical and financial information.** The problem here is not contrast, it is authority. A
page that tells someone their blood test is abnormal, or that their tenancy agreement has a clause
in it, is making a claim about a matter with consequences. Macaron's register — soft, friendly,
sweet — is a register for invitations, not for findings. And because macaron has no dark structural
value, the only emphasis tool is a coral fill, which is a decorative accent, not an emphasis
device. Put the two side by side: a coral "your result is 94" on a mint card reads as a sticker;
the same result in ink on white, with one dark rule above it, reads as a finding.

**Dark mode.** A hard structural failure, not a matter of taste. The family's band — `L` 0.79 to
0.95 — assumes a light ground. On a dark surface these colours do not whisper, they glow: a lemon
`#FFF1A8` at `L` 0.95 on a near-black background is at the very top of the visible range and reads
as a light source. Worse, the ink plum `#4A4045` — the family's entire text solution, a comfortable
9.95 against white — gives only 2.11 against black and disappears.

So there are exactly two options, and the second is much better: either macaron stays a light-mode
system and dark mode uses a different family entirely, or the dark theme is built from inverted
logic with a light ink and a much darker version of each base colour, which is no longer macaron
but a new family with a new band. What you must not do is put the existing ten hexes on a black
background and call it a dark theme.

**Anything where numbers must be read fast.** This covers finance, logistics, monitoring, medical,
and anything with a service-level target attached. The palette's whole mechanism is decoration —
colour that means "this is nice" rather than "this is a value". A system where the colour carries
no information has nothing to give a reader who needs information fast.

**Long-form reading.** Softer than the hard failures, but real. A macaron article page can be
beautiful and tiring. The chroma of the palette is not high enough to give the eye hard edges to
track, and the palette's charm relies on being noticed, which is a cost when the reader has four
thousand words to get through.

---

## 6. A checklist

Before shipping anything in this family, walk these eleven questions.

1. **Is the page one thing?** Macaron wants a single focus: one product, one action, one idea. A
   page that lists six equal things makes all six equally sweet, and none stands out.
2. **Is there exactly one coral?** If more than one thing means "act", you have a hierarchy
   problem.
3. **Does every piece of text sit on ink, or on a colour with ink on it?** White text on any base
   colour is 1.14 to 1.96 — always a bug.
4. **Is the muted grey only on metadata?** Dusty rose `#8C7F84` gives 3.77 against cream: fine for
   a caption, not for a sentence.
5. **Are the large colour fields tints rather than base colours?** A card whose background is a
   full-chroma base colour is too loud.
6. **Is the chart a single series?** If not, this is not a macaron chart.
7. **Is there any dark colour besides the ink and the muted grey?** If yes, you have drifted into
   swiss neutral, and the two systems are now fighting.
8. **Is the surface cream rather than pure white?** Pure white is a common accident, and it kills
   the warm cast the family depends on. The surface is `#FFFDFB`.
9. **Will this be printed?** If yes, get a CMYK proof on the actual stock before committing.
10. **Is there a dark theme?** If yes, the palette needs re-deriving, not reusing.
11. **Could a stranger tell this is one family?** Screenshot it, cover the text, and look. If what
    remains looks like a collection of nice swatches rather than a system, the hue set or the role
    discipline has slipped.

---

## 7. Where to go next

| | |
| --- | --- |
| [Where the palette comes from](../01-macaron-origin/en.md) | what the family is, where it came from, and its four rules |
| [The macaron palette](../02-macaron-palette/en.md) | the colours, their roles, the ramp, and pairing rules |
| [Macaron versus morandi](../03-macaron-vs-morandi/en.md) | the neighbouring family, and how to choose |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
