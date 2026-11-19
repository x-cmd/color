---
x-title: Memphis in practice
x-desc: Where memphis works and where it fails hard. Concrete components — posters, card grids, charts, pricing tables, illustrations — and the domains where the colour will be read as unserious.
x-sidebar: Memphis in practice
x-keywords: memphis design, memphis in practice, memphis ui, 孟菲斯设计, 孟菲斯应用, 孟菲斯界面
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Memphis in practice'
      inLanguage: 'en'
      about: 'applying the memphis colour family in real interfaces and print'
---

# Memphis in practice

---

Memphis is a style for moments, not for systems of record. It works when the screen is asking for
attention and the user has no reason to be sceptical. It fails hard when the user has arrived to
make a decision about money, health, or liability.

---

## 1. Where it works

**Youth brands.** Anything aimed at a young audience and competing on energy rather than
credibility: a beverage label, a sneaker brand's launch page, a music festival's identity. The
reason is not that young people like bright colours — it is that the category is already full of
sober-looking competitors, and the loud one is the one that gets noticed.

**Events and music.** Festival line-ups, tour posters, album releases, DJ sets, club nights.
The genre has an existing visual vocabulary of print — silkscreen posters, hand-set type, risograph
misregistration — and memphis is a close cousin of it. Here the style is not a costume, it is a
reference to how the posters already looked.

**Tech that wants to look like a launch.** Developer tooling, a hardware product that wants to feel
like a new object, a startup landing page the week it raises money or ships a version. The memphis
treatment on a product page communicates *now*, and it is a way of saying "this is new" without
needing a photograph of the new thing.

**Illustration and editorial accents.** This is the most productive use of the family and probably
the least obvious. A memphis illustration — squiggles, dot grids, terrazzo scatter, misaligned
geometry — works as an accent inside an otherwise neutral editorial layout. The illustration carries
the noise; the page stays readable. Marketing sites, blog headers, packaging panels.

The general shape: memphis works where the artefact is a **moment** (a poster, an announcement, a
launch, a cover) and where the audience is not being asked to make a high-stakes judgement.

---

## 2. In the interface

### 2.1 A card grid

The most natural memphis component. Each card is a white rectangle with a hard black border, one
flat colour field, and black type on it. The colours rotate across the grid rather than
grouping — a row of yellow, orange, turquoise, blue, pink, violet — because a memphis grid is a
display of the palette, not a chart.

What makes it work: white cards on a white page separated by black rules, so the grid reads as a
set of shapes rather than a set of boxes. What breaks it: rounded corners, drop shadows, grey
borders, and any hint of a neutral fill. A memphis card with a soft shadow stops being a shape and
becomes a floating rectangle.

### 2.2 A pricing table

Memphis pricing tables work when there are three tiers and the differences are large. Make the
recommended tier a solid violet block with white type — violet is the only colour in the family
where white text passes, at 5.61 — and let the other two tiers be white cards with black type.
That is a legitimate way to use two accents: one is the call to action, the other is the
secondary action.

What does not work is a memphis pricing table with a "most popular" ribbon in yellow. The ribbon
is competing with the violet block for the same job, and the eye has no way to rank them.

### 2.3 Buttons and states

Black text on yellow, white on violet, black on pink. Black-on-yellow at 16.13 is the most
comfortable pairing in the whole book. Never white on blue (3.48) or white on pink (3.17) at
label size, and never white on orange (2.05) or turquoise (2.17).

States follow from the palette's lack of a muted colour: hover is a tint of the same fill, focus
is a black ring, disabled is the button without a fill rather than a greyed-out one. This family
has no generic grey to fall back on, and introducing one is a sign the design has drifted.

### 2.4 Typography

Black, heavy, and often set at an angle. The typography carries as much of the memphis character
as the colour does — a memphis palette set in a calm humanist sans reads as a normal site with
loud buttons. Display type in a grotesque, tight leading, occasional rotation, is what sells it.

The rule to keep: the type does the geometry. If the shapes are all aligned and the type is
straight, you have a colourful layout, not memphis.

---

## 3. In brand and print

**Posters.** The native form. A white poster, three or four flat colour shapes that overlap, one
hard black word, and the squiggle or dot pattern doing the rest. Print is where memphis is most
honest because the materials are already there — uncoated stock, spot colours, misregistered ink.

**Packaging.** It works when the shelf is loud and the product is fun, and fails when the package
has to communicate dosage, ingredients or a certification. On a shelf of sober competitor packs, a
memphis pack reads as the treat, not the product.

**Print production note.** Memphis prints. The four base colours are all CMYK-reachable, and the
black `#1A1A1A` is a near-black that will print cleanly as a rich black or as 100K. What does not
survive is the memphis look built out of glow effects or blend modes — those are screen-only.

---

## 4. In data visualisation

Memphis charts are a bad idea, and it is worth being precise about why rather than just saying
"don't".

Six saturated colours at equal lightness (0.55–0.91) and equal weight, sitting on white, are six
things the eye cannot rank. The chroma floor that makes memphis memphis is exactly the property
that destroys the ordering in a chart. A yellow series and a pink series at `C` 0.16 and 0.22 have
no visual hierarchy between them, so the reader has to work it out from position alone.

There is one use that survives: **memphis as the frame, not the data.** A white chart card with a
black border, a violet or yellow header block, and a chart drawn in black and one accent works
well — the colour is doing branding and hierarchy, and the actual series are monochrome. This is
the same move as *memphis as an editorial accent* (section 1): the noise lives in the
decoration, the information stays legible.

What never works: six memphis colours as six chart series, or a legend that requires the reader to
match a colour to a line.

---

## 5. Where it fails

**Finance.** The palette reads as unserious, and in a financial product unseriousness is a
correctness signal — a trading platform that looks like a toy is assumed to be a scam or a game.
Memphis in a fintech dashboard will cost you trust with the exact users you most need to keep.

**Healthcare.** Patients and institutions use colour as a proxy for how seriously the organisation
takes itself. A clinical tool in hot pink and turquoise reads as a startup, and the startup reading
connotes "not regulated". Where a treatment decision is on screen, the cost of that misreading is
not a design problem.

**Government.** Same mechanism, plus procurement. Public-sector interfaces have accessibility and
plain-language obligations, and a memphis treatment is the first thing a design review will flag as
gimmicky. The colours survive the contrast requirements (black text works everywhere) — it is the
register that does not survive.

**Enterprise procurement.** Buying committees read vendor interfaces as evidence of vendor maturity.
Memphis reads as a small design team having fun, which is exactly the wrong signal when the
decision involves a six-figure contract and a five-year support relationship.

**Anything where the colour will be read as unserious.** This is the general rule the four above
are instances of. The test: if a user would be confused or embarrassed if this interface appeared
in a screenshot attached to a serious document, memphis is wrong. A developer tool's landing page:
fine. The same tool's enterprise admin console: not fine. Same colours, different register, and the
register is carried by the colour more than by anything else on screen.

**Long-form reading.** Two mechanisms work against it. The chromatic floor means text on any colour
fill is at best 3.74 (violet) and at worst 1.30 (yellow), so paragraphs need to sit on pure white
with black type. And the point of memphis is that the eye keeps being pulled sideways by shapes
that are arguing with the column.

---

## 6. A checklist

Before shipping memphis, walk this list.

- Is the surface pure `#FFFFFF`? A grey page means the daylight quality is gone.
- Is all text black `#1A1A1A`, or white on violet `#8338EC`?
- Is white text used on anything other than violet or black? Fix it.
- Is there a colour on every screen, or does one screen carry the whole palette? One colour alone
  reads as a swatch.
- Do the shapes misalign somewhere? Straight geometry with loud colour is just loud.
- Is there a third accent? There should be exactly two: pink and violet.
- Would this survive being screenshotted next to a serious document? If not, it belongs in a
  campaign, not a product.
- Is anything in here that needs to be trusted with a number? Move it to a calmer family.

---

## 7. Where to go next

| | |
| --- | --- |
| [Memphis — where the palette comes from](../01-memphis-origin/en.md) | the history and the four rules |
| [The memphis palette](../02-memphis-palette/en.md) | the colours, the ramp, and the pairing rules |
| [Memphis versus neon](../03-memphis-vs-neon/en.md) | when the dark ground is the right answer instead |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
