---
x-title: Morandi in practice
x-desc: Where morandi works and where it fails — editorial pages, galleries, dashboards, lifestyle brands, long-form reading — with the specific changes each component needs and the contrast numbers that decide them.
x-sidebar: Morandi in practice
x-keywords: morandi ui design, morandi website, muted ui palette, editorial design, 莫兰迪配色应用, 莫兰迪界面, 莫兰迪网页, 灰调界面
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Morandi in practice'
      inLanguage: 'en'
      about: 'applying the morandi colour family to real interfaces and editorial pages'
---
# Morandi in practice

---

A palette is only as good as the components it survives contact with. Morandi is forgiving of
photography and hostile to anything that must shout, so the components change more than the hex
codes do.

The palette is in [the morandi palette](../02-morandi-palette/en.md); the reasoning in
[morandi origin](../01-morandi-origin/en.md); the comparison in
[morandi versus swiss neutral](../03-morandi-vs-swiss/en.md).

---

## 1. Where it works

**Editorial pages.** A long article, an essay, a magazine feature. The ground is `#F5F2ED`, the body
text is ink `#3F3A38` at 11.21 against it, and pull quotes and rules can be umber.

**Portfolio and gallery layouts.** Image-forward sites, studios, photographers, ceramics.
Morandi's mid-tones — sage, clay, mist blue, taupe, mauve — work as image backgrounds because they
are close in lightness to the paper but not identical, so an image reads as placed rather than
floating. At `C` 0.01 to 0.06 they never compete with photographs.

**Lifestyle brands.** Homeware, apparel, food and drink, hospitality, anything where the product
needs to look tactile. This is where morandi came from: the palette reads as material, and material
is what these brands sell.

**Subtle dashboards.** Analytics, monitoring, internal tools, admin panels — where the audience
reads numbers all day and would tire of a high-chrome palette. Read section 4 first: the constraints
bite hardest here.

**Long-form reading** overlaps with the first two. What makes morandi good for it is the ink: a
warm `#3F3A38` at 10.04 against paper is less harsh over a long paragraph than black at 21.00.

---

## 2. In the interface

The rule that governs every component: **in morandi, hierarchy comes from size, weight and
space.**

**Cards.** A card is defined by border and shadow, not fill: a hairline rule in stone
`#8A817A`, a fill in oat `#E3DDD3` or clay `#DAD7CD`, or a raised shadow. A fill in sage `#A3B18A` is
possible but the loudest thing on the page: sage is the only base with real chroma (`C` 0.06).
Ground-tier cards take ink for their text — never the fill's own colour, never white on a light
fill, since oat against white is 1.35.

**Dividers.** A 1px rule in umber `#8C7A6E` against the paper sits at 3.67, passing the 3:1
threshold WCAG sets for non-text elements like rules and focus rings. Stone at 3.42 also passes; mist
blue at 1.80 does not — a divider that carries meaning must clear 3:1. Use umber for structural
rules, stone for decorative ones.

**Buttons.** The primary action is ink `#3F3A38` with paper-coloured text, or paper `#F5F2ED` with
ink text and a 1px umber border. Umber with white text fails: 5.12 against white, under the body-text threshold.

**Focus rings.** Non-text elements need 3:1 against the adjacent colour. Umber at 3.67 against paper
works; sage at 2.04 does not against an oat fill — there, use ink.

**Empty states.** The opposite of macaron's territory, and where morandi is genuinely strong: the
illustration uses the mid-tones, the copy ink on paper with nothing behind it.

**Tags and chips.** A chip in clay or oat, or in mist blue or mauve, with ink text works. A chip in
a mid-tone with text in a different mid-tone does not: sage on a mist blue chip is 2.28 against
2.01, not a pairing but a slightly different grey.

---

## 3. In brand and print

Morandi is more forgiving in print than on screen. On paper, ink on uncoated stock reads darker and
warmer than the screen calculation suggests. The screen's `#F5F2ED` roughly stands in for a warm uncoated sheet, but pull the actual stock and
check the pair.

With no near-black and no pure white, there is nothing to over-ink and nothing to blow out. Umber at
`L` 0.59 prints as a dark without looking heavy — which is why it is the structural colour, not the
ink colour.

On branding, the weakness is that the family does not survive being flattened. Morandi's character
lives in the relationships between colours, so a single-colour mark must carry it alone, and a flat
umber mark reads as brown. It works better on surfaces than on a logo.

---

## 4. In data visualisation

Morandi has the most to prove here: the family's central mechanism — that everything is nearly the
same lightness — is what chart series must *not* be.

The first rule: **morandi chart series must be separated by lightness, not by hue.** Five mid-tones
at `L` 0.74 to 0.80 — sage 0.74, taupe 0.77, mist blue 0.78, mauve 0.80 — are almost the same
lightness; as bars side by side, they are four greys. So use fewer series (two or three, far apart
in lightness), or extend each ramp so the series differ by `L` step.

The second rule: **one series may be umber.** Umber `#8C7A6E` at `L` 0.59 is a full 0.15 lightness
steps below sage at 0.74, and at 3.67 against the paper it reads as a heavier mark. One highlighted
series in umber, the rest in mid-tones, is the most reliable morandi chart there is: the thing you
want the eye to land on, as weight not hue.

The third rule: **gridlines take stone, and the axis takes ink.** Stone `#8A817A` at 3.42 against
the paper clears the 3:1 threshold for non-text elements. Axis labels are text, so they are ink —
stone at 3.42 is not large-text grade, so make them ink and small.

The fourth rule concerns hover states. With no highlight colour to hover into, a hover must be a
lightness change: tint the series colour by 0.08 to 0.12 in `L`, holding `C` and `H` — the only
hover that does not break the chroma ceiling.

What does not work: any chart whose series are distinguished by hue among the four allowed hues,
and any chart whose categories need instant, unambiguous identification, such as a pie chart or an
eight-segment stacked bar. Those need morandi's sibling
[swiss neutral](../03-morandi-vs-swiss/en.md), whose signal red gives one series an unambiguous
identity.

---

## 5. Where it fails

**Interfaces that need one obvious action.** No colour in morandi wants to be pressed. If a page's
job is to get one click, the accent either breaks the chroma ceiling — and with it the family — or
type and space carry the hierarchy.

**Anything where colour is the only differentiator.** Form validation, status indicators, tag
categories: colour is the fastest differentiator there is, and morandi has removed it. Every state
needs a second channel — shape, position, text.

**Dark mode.** The band assumes a warm light ground. On a dark surface these colours do not whisper,
they glow: oat at 15.55 against black and clay at 14.58 will be the brightest things on the page, and
the warm hues read as brownish. A dark morandi is not this palette inverted; it needs its own
derivation.

**Dense data tables.** Twenty rows of alternating clay and paper at a 1.29 and 1.00 contrast
difference are a row of the same grey: morandi cannot zebra-stripe a table, its ground tier lacks
the lightness separation. Add an umber rule between rows — it clears 3:1 and reads as structure.

**Anything that needs to look fast or new.** Morandi is slow by construction: it signals care, craft
and permanence. That is worth a great deal in an editorial context and nothing in a fast-moving
product.

**Print, at scale, in CMYK.** A pale warm grey at `C` 0.01 is a thin thing to convert to four
process inks. For a large run, pull the colours and check the separations.

---

## 6. A checklist

1. **Is the ground warm?** The page and panel backgrounds should be warm neutrals at `C` 0.01, not
   true greys. A grey panel is the most common mistake: invisible until a hue sits beside it.
2. **Is every colour at or under `C` 0.06?** Open the swatches in a tool that shows OKLCH chroma.
   Above 0.06, the family has drifted.
3. **Are there exactly four hues?** Sage, clay, mist blue, mauve. A fifth hue is a different family.
4. **Is there one accent, and is it structural?** Umber, for rules, labels and structure — not for
   a button to press.
5. **Does every text-on-fill pair clear the right threshold?** Body text needs 4.5:1; large text and
   non-text elements need 3:1. Check ink on paper (10.04, fine), umber on paper (3.67, large text
   only), and every mid-tone chip you invented (mist blue at 1.80 against paper, fails).
6. **Is white text only on ink?** No white text on umber or any mid-tone: it looks like an
   accident.
7. **Do the chart series differ in lightness?** Two series sharing an `L` are the same colour to the
   reader.
8. **Is the hierarchy carried by type and space?** If colour is what makes one thing look more
   important than another, the design is not working here.

---

## 7. Where to go next

| | |
| --- | --- |
| [The morandi palette](../02-morandi-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Morandi — where the palette comes from](../01-morandi-origin/en.md) | the painter, the name, and the four rules |
| [Morandi versus swiss neutral](../03-morandi-vs-swiss/en.md) | when you need hard contrast or a real accent instead |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
