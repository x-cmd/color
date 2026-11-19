---
x-title: Swiss Neutral versus Nordic
x-desc: Two light, calm families that get confused for each other. Swiss Neutral is truly achromatic with one hard accent and does its work with typography; Nordic is tinted, glacial and atmospheric. How to tell them apart and how to choose.
x-sidebar: Swiss Neutral vs Nordic
x-keywords: swiss neutral vs nordic, achromatic palette, tinted palette, colour comparison, 瑞士中立 vs 北欧, 无彩色, 带色调, 配色对比
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Swiss Neutral versus Nordic'
      inLanguage: 'en'
      about: 'the difference between swiss neutral and nordic colour families'
---

# Swiss Neutral versus Nordic

---

These two get confused more than any other pair in this book, and the confusion is understandable:
both are light, both are calm, both resist shouting, and both have a "quiet" reputation.

But they are opposites in how they achieve that quiet, and the difference is not subtle once you
look at the numbers.

---

## 1. The short version

Swiss neutral is **achromatic**. Every colour except one has a chroma of exactly `C` 0.00, and the
one exception — signal red `#FF0000` at `C` 0.26 — is the only colour allowed to carry meaning.
Nordic is **tinted**. Its surfaces are near-whites with a cool cast, its middle values are glacial
blues, and its warm accents — terracotta, eucalyptus, mustard — are used sparingly against that
cool field.

That gives the pair two different characters. Swiss neutral is **rational**: it works by
typography, grid and a single hard accent, and it reads as exact and considered. Nordic is
**atmospheric**: it works by tinted surfaces and low-chroma colour, and it reads as cool, spacious
and quiet.

Neither is better. They are answering different questions.

---

## 2. Side by side

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

Pulling the two apart on paper:

| | Swiss Neutral | Nordic |
| --- | --- | --- |
| Chroma of the surfaces | exactly `C` 0.00 | `C` 0.00 to 0.01, with a cool cast |
| Hue count | 1 | 4 |
| Chroma ceiling | `C` 0.26, one colour only | `C` 0.12, three accents |
| Lightness range | `L` 0.32 to 0.97 | `L` 0.63 to 0.94 |
| Page colour | `#FFFFFF` | `#F7F9FA` |
| Darkest value | `#000000` | `#2E3A40`, a blue-black |
| Warm colours | none except the accent | terracotta `#D9A38F`, eucalyptus `#A9BC8F`, mustard `#E3C46A` |
| How hierarchy is made | type size, weight, space, rules | surface tint, then type, then space |
| What it feels like | exact, considered, printed | cool, airy, calm |

The lightness ranges are the first clue and the easiest to verify. Swiss neutral spans 0.32 to
0.97 because it needs a true black for hard edges and a set of pale greys for surfaces. Nordic
spans 0.63 to 0.94 — a much narrower band — because it has no pure black at all. Its darkest
colour, `#2E3A40`, is a blue-black at `C` 0.02, and it gives 11.70 against its own near-white
rather than the 21.00 a true black would.

---

## 3. Where they really differ

### 3.1 Tint is the whole difference

Take the two surfaces. Swiss neutral's paper is `#FFFFFF` — a value with no colour in it at all.
Nordic's snow is `#F7F9FA`, which is nearly white but carries a cool cast: `C` 0.00, hue 229°.

Read together with Nordic's other surfaces — frost `#E8EDF0` at `C` 0.01, glacier `#C9D6DE` at
`C` 0.02, fjord `#9FB6C4` at `C` 0.03 — and the pattern is clear. Nordic's greys are not neutral;
they are white with progressively more blue in them. That is what makes a Nordic page feel cold
and spacious rather than blank.

Swiss neutral cannot do this. Its greys are true greys at `C` 0.00, which means every step from
`panel` to `rule` to `secondary` differs only in lightness. To get a cool surface, Swiss neutral
would have to break its own primary rule.

### 3.2 One accent versus three

Swiss neutral permits exactly one chromatic colour. Nordic permits three — terracotta at `C` 0.07,
eucalyptus at `C` 0.07, mustard at `C` 0.12 — against a field of blues at `C` 0.01 to 0.05.

This is the difference that bites in practice. In Swiss neutral, red means "this is the one to
look at", and because nothing else competes, it can be used sparingly and still be effective. In
Nordic, colour is doing something different: the warm accents are set against cool blues, so they
read as *warmth in a cold room* — a plant, a cushion, a biscuit — rather than as urgency.

That is a materially different meaning. A terracotta in Nordic is not an alert; it is an accent
that adds life. Red in Swiss neutral cannot be an accent that adds life, because red at `C` 0.26
is far too saturated to sit in the background. It is a signal or it is nothing.

### 3.3 Rational versus atmospheric

This is the least measurable difference and the one that decides most choices.

Swiss neutral's job is to make content legible and structure visible. Its greys mark kinds of
region; its rules divide; its red marks. Everything about it is instrumental, and it produces a
page that looks like a printed document — a timetable, a report, a catalogue.

Nordic's job is to make a space feel calm. Its tints do most of that work before a single word is
read, and the warm accents add relief. It produces a page that feels like a room — airy, cool,
considered.

The practical test: take a screenshot of each with all text removed. A Swiss neutral rectangle
looks like a blank sheet of paper. A Nordic rectangle looks like a pale blue wall. Neither is
better, but they cannot be substituted for each other without noticing.

### 3.4 The place between them

Swiss neutral's other neighbour is morandi, and the pair [morandi versus swiss
neutral](../../3-morandi/03-morandi-vs-swiss/en.md) explains why this comparison needs to sit
here.

Morandi is also muted and also quiet, but it is quiet through *warmth*: its greys are tinted
(`#F5F2ED` paper, `#3F3A38` ink, `#8A817A` stone), its chroma ceiling is `C` 0.06, and its accent
is a dark earth umber at `C` 0.03 — barely more colourful than the greys around it.

So the three families line up as a scale of chroma:

- **Morandi** — warm-tinted greys, chroma up to `C` 0.06, one earth accent. Tactile.
- **Swiss Neutral** — true greys at `C` 0.00, one hard accent at `C` 0.26. Rational.
- **Nordic** — cool-tinted greys, chroma up to `C` 0.12, three warm accents. Atmospheric.

Swiss neutral sits in the middle of that line, and it is the only one of the three that is
achromatic at its core. Morandi is the warm end, Nordic the cool end, and Swiss neutral is the
point where the greys stop having a temperature at all.

---

## 4. Choosing between them

Choose **swiss neutral** when the content is the point and the reader must not be distracted:

- documentation, API references, technical specifications
- publishing and editorial work where hierarchy must be unambiguous
- architecture and design studio sites, where the work is the image and the page is a frame
- data reporting where one series has to stand out from the others
- ticketing, wayfinding, timetables — anything with functional signage

Choose **nordic** when the space is the point:

- SaaS and developer tools where a calm surface reduces anxiety
- healthcare and wellness, where coldness is unwelcome and cold *tints* are not
- travel, hospitality, and portfolio work that benefits from air
- lifestyle and editorial work that wants quiet without wanting austerity

The tie-breaker is usually a single question: does the page need to *inform* or does it need to
*feel*? Inform, and use Swiss neutral. Feel, and use Nordic.

And if the requirement is warmth — genuinely warm, tactile, human — then neither is right, and
morandi is the family that was built for it.

---

## 5. Where people confuse them

- **"They both look grey."** They do not, once you compare the surfaces. One is a true grey at
  `C` 0.00; the other is a set of white-with-blue-in-it greys at `C` 0.01 to 0.03. Side by side
  the difference is obvious; alone, in isolation, the brain fills in "grey" for both.
- **"Nordic is just a lighter Swiss neutral."** It is not lighter — Nordic's darkest colour is
  `L` 0.34 and its lightest is `L` 0.98, a band roughly half as wide as Swiss neutral's
  0.32–0.97. Nordic has no black and no pure white, which is a different design decision, not a
  paler version of the same one.
- **"You can add a Nordic blue to Swiss neutral for links."** This is the most common failure, and
  it breaks the family at its foundation. Swiss neutral's links are `black` or `deep`, underlined
  or set in a heavier weight. A blue link adds a hue, and if you add one blue you will add a
  second blue for a visited state, and then a red for an error.
- **"Signal red is a Nordic terracotta."** Red at `C` 0.26 and terracotta at `C` 0.07 are about
  three times as far apart in chroma as they look on screen. The terracotta is a background
  accent; the red is a signal.
- **"Swiss neutral is cold."** It is neutral — that is the point. Cold is what you get when
  neutrality has a blue cast, which is Nordic. Swiss neutral has no temperature to be cold.

---

## 6. Using both

They can coexist, but not casually. Two rules make it work.

**Use one as the system and the other as an accent.** The common pattern is a Swiss neutral
application with a Nordic accent surface — a Nordic blue panel inside a Swiss neutral page, or a
Nordic-tinted illustration on a Swiss neutral ground. This works because Nordic's surfaces are
tinted and Swiss neutral's are not, so the two do not collide; a Nordic panel reads as a distinct
region rather than as a step in the grey ladder.

**Never mix the accent systems.** If the page has a red signal, it may not also have mustard and
terracotta. The red has to be alone to mean anything. Conversely, if the accents are Nordic's
warm set, then red should not appear at all — a red among warm accents stops being distinguishable
from terracotta.

The reverse also fails: a Nordic page with Swiss neutral's red will read as an error state in a
palette where nothing else is an error state.

---

## 7. Where to go next

| | |
| --- | --- |
| [The swiss neutral palette](../02-swiss-neutral-palette/en.md) | the grey ladder, the signal red, and the contrast numbers |
| [Where the palette comes from](../01-swiss-neutral-origin/en.md) | the Swiss style and the four rules |
| [Morandi versus swiss neutral](../../3-morandi/03-morandi-vs-swiss/en.md) | the other side of this comparison — where swiss neutral sits between morandi and nordic |
| [Nordic — where the palette comes from](../../5-nordic/01-nordic-origin/en.md) | the other side of this pair, in the nordic series |
| [Swiss neutral in practice](../04-swiss-neutral-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
