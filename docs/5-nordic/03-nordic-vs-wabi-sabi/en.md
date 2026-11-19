---
x-title: Nordic versus Wabi-sabi
x-desc: Two families with the same discipline and opposite temperatures. Where Nordic and wabi-sabi actually differ, how to choose between them, and how to mix them without losing either.
x-sidebar: Nordic vs Wabi-sabi
x-keywords: nordic vs wabi sabi, wabi sabi palette, nordic or wabi sabi, colour family comparison, 北欧 vs 侘寂, 侘寂配色, 色系对比
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Nordic versus Wabi-sabi'
      inLanguage: 'en'
      about: 'the difference between the nordic and wabi-sabi colour families'
---

# Nordic versus Wabi-sabi

---

These two get confused more than any other pair in this book, and the reason is understandable:
both are low-chroma, both are quiet, both are sold on the idea of restraint, and both are full of
colours that look like they came out of the ground. A page of Nordic greys and a page of wabi-sabi
clays can be mistaken for each other at a glance.

They are not the same, and the difference is not subtle once you know where to look. **Nordic light
comes from white and blue. Wabi-sabi light comes from clay and timber.** Everything else follows
from that one sentence.

---

## 1. The short version

Nordic is **cool, pale, clean and even**. Wabi-sabi is **warm, textured, darker and imperfect**.
Nordic's reference points are daylight, white walls and glass; wabi-sabi's are earth, fire and
age.

That difference shows up in four places at once:

| | Nordic | Wabi-sabi |
| --- | --- | --- |
| Temperature | Cool — every neutral is a blue tint | Warm — every neutral is a clay tint |
| Lightness | High — mean `L` 0.79 | Low — mean `L` 0.61 |
| Chroma | Mean `C` 0.05, ceiling 0.12 | Mean `C` 0.04, ceiling 0.05 |
| Texture | Smooth, flat, invisible | Visible — the point of the family |

If you had to pick one sentence to test a design against: **Nordic is a room with the windows open.
Wabi-sabi is a room with a fire lit.**

---

## 2. Side by side

| | Nordic | Wabi-sabi |
| --- | --- | --- |
| Surface | Snow `#F7F9FA` — near-white, faintly blue | Lime plaster `#E8E0D5` — off-white, warm, textured |
| Bases | Frost `#E8EDF0`, glacier `#C9D6DE`, fjord `#9FB6C4`, deep fjord `#6B8FA3` | Sand `#C9BBA6`, clay `#A08C7D`, moss `#7D8471` |
| Accents | Terracotta `#D9A38F`, eucalyptus `#A9BC8F`, mustard `#E3C46A` | Bark `#8C6D5B`, forest `#4A5A45` |
| Ink | `#2E3A40` — blue-black | `#3B342E` — brown-black |
| Lightness band | `L` 0.63 – 0.94 | `L` 0.45 – 0.80 |
| Chroma band | `C` 0.01 – 0.12 | `C` 0.03 – 0.05 |
| Distinct hues | 4 | 4 |
| Mean lightness | 0.79 | 0.61 |
| Mean chroma | 0.05 | 0.04 |
| Mean HSL saturation | 34% | 16% |

Two rows deserve attention because they are counterintuitive.

The **chroma** row says Nordic is the more colourful family, by a small margin — mean `C` 0.05 against
0.04, and a ceiling of 0.12 against wabi-sabi's 0.05. This is the opposite of the usual expectation.
It works because wabi-sabi achieves its effect entirely through hue and lightness: clay at `C` 0.03
still reads as unmistakably earthy, because the hue is doing all the work. Nordic has to push the
chroma up slightly, because its hues are colder and a cold colour at `C` 0.02 simply disappears.

The **HSL saturation** row says the opposite: 34% against 16%. This is HSL's blind spot showing up
in practice. Wabi-sabi's colours have HSL saturation of only 8% to 29% because HSL measures against
the brightest channel, and a muted tan has a high bright channel. Nordic's blues keep more of their
saturation in HSL terms because blue is dark in all channels. **Use the OKLCH chroma number, not the
HSL one, when comparing these two families** — see
[reading a palette](../../1-overview/02-reading-a-palette/en.md).

---

## 3. Where they really differ

### 3.1 Where the light comes from

Nordic's darkest base is deep fjord at `L` 0.63, and its surface is snow at `L` 0.98. The whole
palette lives in the top third of the lightness range, and the blue-greys are all within two degrees
of each other in hue. The effect is a page that reads as lit from above — the light of a north-facing
window.

Wabi-sabi's darkest base is forest at `L` 0.45, and its surface is lime plaster at `L` 0.91. Its
hues run from 52° to 138° — bark, clay, moss — and they are not close to each other in the way
Nordic's blues are. The effect is a page that reads as lit from a low source — a fire, a lamp, the
warm bounce off a floor.

This is the difference that a photograph would show immediately and a hex list hides.

### 3.2 The lightness gap

Mean lightness differs by 0.18 — 0.79 against 0.61. That is a large gap in perceptual terms. It
means Nordic interfaces are, on average, considerably brighter and airier, while wabi-sabi
interfaces sit closer to the middle of the range and carry more visual weight.

It also means the two families cannot share a background. Snow `#F7F9FA` next to lime plaster
`#E8E0D5` is not a subtle difference; it reads as two different rooms.

### 3.3 Ink, and what it says about the whole page

Nordic's ink is `#2E3A40` at hue 230° — a blue-black. Wabi-sabi's ink is `#3B342E` at hue 63° — a
brown-black. They are almost the same lightness (`L` 0.34 against `L` 0.33) and the same contrast
against white (11.70 against 12.23), and yet they belong to completely different worlds.

This is the clearest single test. **Set your body text and ask whether it looks blue or brown.**
In a Nordic interface the ink is a cold dark; in a wabi-sabi interface it is a warm dark, and that
warmth bleeds into everything else on the page.

### 3.4 What each one is not allowed to do

Nordic's discipline is *lightness and restraint*. It forbids dark blocks, forbids many saturated
colours, and forbids more than a couple of accents on a screen.

Wabi-sabi's discipline is *texture and earth*. It forbids anything that looks manufactured — no
pure greys, no clean synthetic whites, no sharp geometric accents, and a chroma ceiling of 0.05 that
stops any colour from becoming a signal.

The clearest expression of this is Nordic's mustard `#E3C46A` at `C` 0.12. It is a perfectly
respectable colour, and in a wabi-sabi palette it would be impossible: there is no chroma headroom
at all. A yellow that clean reads as industrial, not earthy.

---

## 4. Choosing between them

Choose **Nordic** when:

- the content is information — documentation, dashboards, healthcare, developer tools
- the audience needs to feel the product is clean, current and trustworthy
- the interface has to sit next to a lot of white space or a lot of content
- the product wants to look like an instrument rather than an object

Choose **wabi-sabi** when:

- the product is about material, craft, food, furniture or a way of living
- the brand wants to look handmade, aged or grounded
- the page should feel like a room rather than a screen
- the audience is buying a story as much as a thing

A useful tiebreaker: **Nordic is a light source; wabi-sabi is a surface.** If the design question
is "what light is this in?", you want Nordic. If it is "what is this made of?", you want wabi-sabi.

---

## 5. Where people confuse them

**"They're both muted, so it doesn't matter."** The muted part is shared; the temperature is not.
Nail the hue before anything else. Blue-grey at low chroma is Nordic. Tan-grey at low chroma is
wabi-sabi. A palette with both is a third thing, and it is usually just muddy.

**"Wabi-sabi is the darker Nordic."** It is not a shade of Nordic. Wabi-sabi's darkest colour is
`L` 0.45, which is below Nordic's whole band. Nordic does not have a version of forest green;
wabi-sabi does not have a version of snow.

**"You can get wabi-sabi by desaturating Nordic."** Desaturating terracotta `#D9A38F` gives you a
dull orange, not a clay. The families differ in hue, not only in chroma. Nordic's hue range is
cold and narrow; wabi-sabi's is warm and spread across three different kinds of brown and green.

**"They're both Scandinavian."** Wabi-sabi is a Japanese aesthetic, connected to the tea ceremony and
to Japanese ceramics. The two traditions share a certain restraint but nothing else — no shared
language, no shared objects, no shared notion of beauty. Nordic's origins are covered in
[nordic — where the palette comes from](../01-nordic-origin/en.md); wabi-sabi's are in
[wabi-sabi — where the palette comes from](../../6-wabi-sabi/01-wabi-sabi-origin/en.md).

---

## 6. Using both

They can share a page, and when they do the seam has to be deliberate. The trick is that they are
adjacent, not blended: put Nordic's cool pale surface against wabi-sabi's warm textured one, and
let the difference be the point.

A common and effective arrangement: **Nordic for the interface, wabi-sabi for the material.** The
navigation, the table, the form controls, the charts are all in snow and the blue ramp; the
photography, the product shots, the specimen swatches, the pull quotes sit in clay and bark. The
warm side carries the physical world, the cool side carries the information.

What does not work is interleaving them — a wabi-sabi card, a Nordic card, a wabi-sabi row, a
Nordic row. The alternation reads as noise, because each switch changes the room.

Two hard rules if you mix them:

- **Never blend the neutrals.** Do not make a "compromise" grey that is half blue and half tan. It
  will be the worst of both and will not match anything.
- **Keep the inks separate.** Nordic text stays `#2E3A40`, wabi-sabi text stays `#3B342E`. A single
  document cannot have two body-text colours in the same paragraph without looking like a mistake.

---

## 7. Where to go next

| | |
| --- | --- |
| [The nordic palette](../02-nordic-palette/en.md) | the colours, their numbers, the ramp, and how to extend them |
| [Nordic in practice](../04-nordic-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [Swiss neutral versus nordic](../../4-swiss-neutral/03-swiss-neutral-vs-nordic/en.md) | the other neighbour — where Nordic sits between swiss neutral and wabi-sabi |
| [Wabi-sabi — where the palette comes from](../../6-wabi-sabi/01-wabi-sabi-origin/en.md) | the history on the other side of this pair |
| [Wabi-sabi — the palette](../../6-wabi-sabi/02-wabi-sabi-palette/en.md) | the colours on the other side of this pair |
