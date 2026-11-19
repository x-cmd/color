---
x-title: Swiss Neutral — the palette
x-desc: The seven colours of Swiss Neutral, what each step of the grey ladder is for, the contrast numbers that decide where each one may be used, and how to derive new steps without breaking the system.
x-sidebar: Swiss Neutral palette
x-keywords: swiss neutral palette, grey ladder, signal red, contrast ratio, oklch, colour ramp, 瑞士中立色板, 灰阶, 信号红, 对比度
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Swiss Neutral — the palette'
      inLanguage: 'en'
      about: 'the swiss neutral palette, its grey ladder and its contrast numbers'
---

# Swiss Neutral — the palette

---

Seven colours. Six of them are true greys and one is a pure red. This is the smallest palette in
the book, and it is worth reading slowly, because almost every decision in a Swiss Neutral design
is a decision about *which step of the ladder* to use, not about which colour to pick.

The history is in [where the palette comes from](../01-swiss-neutral-origin/en.md); the practical
side is in [swiss neutral in practice](../04-swiss-neutral-in-practice/en.md).

---

## 1. The colours

<!-- palette:swiss-neutral:en -->
| Swatch | Name | Hex | Role | HSL | OKLCH | White text | Black text |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Paper | `#FFFFFF` | Surface | 0° 0% 100% | 1.00 0.00 90° | 1.00 (fail) | 21.00 (AAA) |
| <span style="background-color:#F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Panel | `#F5F5F5` | Base | 0° 0% 96% | 0.97 0.00 90° | 1.09 (fail) | 19.26 (AAA) |
| <span style="background-color:#E0E0E0">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Rule | `#E0E0E0` | Base | 0° 0% 88% | 0.91 0.00 90° | 1.32 (fail) | 15.91 (AAA) |
| <span style="background-color:#9B9B9B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Secondary | `#9B9B9B` | Muted | 0° 0% 61% | 0.69 0.00 90° | 2.78 (fail) | 7.56 (AAA) |
| <span style="background-color:#333333">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Deep | `#333333` | Base | 0° 0% 20% | 0.32 0.00 90° | 12.63 (AAA) | 1.66 (fail) |
| <span style="background-color:#FF0000">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Signal Red | `#FF0000` | Accent | 0° 100% 50% | 0.63 0.26 29° | 4.00 (AA-large) | 5.25 (AA) |
| <span style="background-color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Black | `#000000` | Ink | 0° 0% 0% | 0.00 0.00 0° | 21.00 (AAA) | 1.00 (fail) |
<!-- /palette -->

<!-- demo:swiss-neutral:en -->
<div style="border:1px solid #D7D7D7;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#FF0000;color:#000000;font-size:13px;font-weight:600">Swiss Neutral · Exact, quiet, rational</div>
  <div style="padding:16px;background:#FFFFFF">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FF0000;color:#000000;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #000000;color:#000000;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FAFAFA;color:#9B9B9B;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#F5F5F5;color:#000000;font-size:12px">Panel</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#E0E0E0;color:#000000;font-size:12px">Rule</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#333333;color:#FFFFFF;font-size:12px">Deep</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF0000;color:#000000;font-size:12px">Signal Red</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FAFAFA"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FAFAFA"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#757575"><div style="font-size:20px;font-weight:700;color:#FFFFFF">1,904</div><div style="font-size:12px;color:#FFFFFF;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #9B9B9B;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#F5F5F5"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#E0E0E0"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#333333"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#FF0000"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFC3B9;border-left:3px solid #FF0000;color:#000000;font-size:13px"><strong>Note</strong> · A near-monochrome system: paper, black, a ladder of greys, and exactly one signal colour. The layout does the work, not the palette.</div>
    <div style="margin-top:10px;font-size:11px;color:#9B9B9B">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

Read the two contrast columns as permissions rather than as descriptions.

`paper` at `#FFFFFF` gives black text a ratio of 21.00 — the maximum the WCAG formula can produce —
and is the default page. `panel` at `#F5F5F5` is the one step below it and is meant for quiet
regions: a table header strip, a code block, a card that needs to be visibly a card. `rule` at
`#E0E0E0` is a hairline separator and nothing else; at a contrast of 1.32 against white it is
structurally, deliberately almost invisible.

`secondary` at `#9B9B9B` is the family's only mid-grey and its most misused member. It reads as
7.56 against black, which sounds generous, but the same grey on the white page gives 2.78. It is
therefore a colour for large or bold type only, and for placeholder text that is genuinely
inactive. On anything at body size it fails every threshold.

`deep` at `#333333` gives 12.63 against white and is a legitimate body-text colour, softer than
pure black without being warm. `black` at `#000000` is reserved for the strongest contrast
demands: display type, the primary button fill, the hardest edge on the page.

And `signal-red` at `#FF0000`, which the table shows at 4.00 against white and 5.25 against black.
Note carefully what that means.

---

## 2. The ramp

<!-- ramp:swiss-neutral:en -->
| Colour | Tint 40 | Tint 20 | Base | Shade 20 | Shade 40 |
| --- | --- | --- | --- | --- | --- |
| Panel `#F5F5F5` | `#A8A8A8` | `#CECECE` | `#F5F5F5` | `#FAFAFA` | `#FAFAFA` |
| Rule `#E0E0E0` | `#949494` | `#B9B9B9` | `#E0E0E0` | `#FAFAFA` | `#FAFAFA` |
| Deep `#333333` | `#020202` | `#161616` | `#333333` | `#535353` | `#757575` |
| Signal Red `#FF0000` | `#850000` | `#C00000` | `#FF0000` | `#FF8473` | `#FFC3B9` |
<!-- /ramp -->

Two things in this ramp are worth stopping on.

First, the achromatic members generate a ramp that is genuinely useful in one direction and
useless in the other. Shades of the greys — `#555555` and `#777777` from `secondary`, `#161616`
and `#020202` from `deep` — are real, printable steps that stay inside the family's rules. The
tints of the pale greys (`#FAFAFA` and similar) collapse into each other, because a true grey
near white has nowhere to go: `#FAFAFA` is the end of the road in that direction. A tinted grey
would have further steps, but then it would be a tinted grey.

Second, look at the red's ramp: `#850000` and `#C00000` go darker, and `#FF8473` and `#FFC3B9` go
toward pink. The lighter steps are not swiss neutral any more — they are tints of red, and they
have chromatic character that the family does not sanction. The darker steps stay inside the rule,
because they stay the same hue with the same chromatic intent.

---

## 3. How the palette is put together

The seven colours are not seven peers. They are four roles, and the roles carry rules.

| Role | Colour | What it may do |
| --- | --- | --- |
| surface | `paper` `#FFFFFF` | the page itself; never carries text in another colour |
| base | `panel` `#F5F5F5`, `rule` `#E0E0E0`, `deep` `#333333` | structure: panels, separators, heavy blocks |
| muted | `secondary` `#9B9B9B` | captions, metadata, disabled states, large bold secondary type |
| ink | `black` `#000000` | body text at the strongest setting, primary fills |
| accent | `signal-red` `#FF0000` | one meaning per screen: act, current, live, alert |

Three rules govern how they combine.

**The ladder is fixed.** There are six grey steps and each one has a job. A design that needs
"another grey" usually needs a *different existing step* — a heavier weight, a rule, more space —
and only after all of those are exhausted is a new step worth deriving.

**The accent appears once per screen.** Not once per page in a footer plus once in a banner —
once per screenful. If two things are red on the same view, the red has stopped discriminating
between them and is now decoration.

**Text is ink, not colour.** Body copy is `black` or `deep`. `secondary` is for text that is
genuinely deprioritised — a timestamp, a helper line, a placeholder — and for that text to be
legible at normal sizes it must also be bold, or larger, or both. A grey caption at 14px regular
is a contrast failure, not a design choice.

---

## 4. Extending it

The safest extension is a step *inside* the ladder. Because the family is achromatic, a new grey
can be checked for two things at once: is it between `L` 0.32 and `L` 0.97, and is its chroma
exactly `C` 0.00? If both hold, it belongs.

Deriving from the ramp mechanically is the most reliable method. Take a base grey, move its
OKLCH lightness by an even amount, hold chroma and hue at zero, and the result is automatically a
member of the family. The `secondary` ramp gives `#555555` and `#777777` below it and `#C1C1C1`
and `#E8E8E8` above it — four extra steps, all legal, all already computed and checked.

The rules for a new step:

- **Keep chroma at exactly zero.** A grey that drifts to `C` 0.01 is still, visually, a grey, and
  it is a very common way for a Swiss Neutral implementation to quietly become something else.
- **Do not create steps between `rule` and `panel`, or between `paper` and `panel`.** The gaps
  there are 1.09 and 1.32 in contrast ratio — visible only as texture, never as a distinguishable
  step. Two surfaces that are a hair apart will just look like a mistake.
- **Do not invent a second red.** If the accent is already doing the job of "act", a second red
  for "warning" needs a different mechanism entirely: an icon, a weight, a position. If the system
  genuinely needs error/warning/success/info, it needs a palette with four accents, and that is
  not this family.

The signal red is the one place where a derived step is usually wrong. Red has the most perceptual
room of any hue, which means designers reach for it constantly — a "softer red" for a secondary
button, a "darker red" for a hover state. The darker shades are fine, and they are on the ramp.
Lighter ones are not: `#FFC3B9` is a pink, and a page with a pink button is not in this family.

---

## 5. Pairing rules

**Text on paper.** `black` on `paper` is 21.00, `deep` on `paper` is 12.63, `secondary` on `paper`
is 2.78. The first two are safe for any text. The third is safe only for large bold type, and even
then it is at the edge.

**Text on panel.** `paper` on `panel` is 1.09 — that is not a pairing, it is the same colour. Text
on a `panel` background must be `black` or `deep`; a panel is a surface change, not a text
colour.

**The accent in each direction.** `signal-red` on `paper` is 4.00, which passes the 3:1 threshold
for non-text elements and the 4.5:1 threshold for large text, and fails 4.5:1 for normal body
text. `paper` on `signal-red` is also 4.00, by the same arithmetic. `black` on `signal-red` is
5.25, which passes AA for normal text.

This gives a precise rule, and it is worth stating plainly because it is where implementations
usually go wrong:

- **Red text on white**: allowed for large or bold text only. At body size it fails.
- **White text on red**: allowed for large or bold text only, and it is the more common choice
  visually because red is usually used as a fill for a button.
- **Black text on red**: allowed at any size. It reads slightly less like a warning than white on
  red, which is a design preference, not an accessibility one.
- **Red as a mark**: a bar, a dot, a border, an underline, a small filled shape — all fine, since
  the 3:1 non-text threshold is what applies.

**Rules and separators.** `rule` at `#E0E0E0` is the default. `secondary` at `#9B9B9B` is for a
rule that needs to be seen without being read as content — an active tab underline, a focus
indicator boundary.

**Two surfaces at once.** `paper` and `panel` together are the most common combination in the
family and the safest. `panel` and `rule` together are fine. Anything involving `deep` next to a
light surface is a deliberate, strong statement — use it once per screen.

---

## 6. Common mistakes

- **Using grey where a hierarchy step was needed.** The most common failure in this family.
  Something on the page needs to look more important, and the response is to reach for a lighter
  grey. But greys in this family are structural, not expressive: they mark *kind* (panel vs rule),
  not *rank*. Rank comes from type size, type weight, and space. If a caption needs to be less
  prominent, make it smaller and use `secondary` — do not invent a mid-grey between
  `secondary` and `rule`.
- **Adding a second accent.** A second saturated colour destroys the only mechanism the family
  has. One red is loud because it is alone. Two reds are just colours, and the reader no longer
  knows which one means "this is the one to look at".
- **Using the accent as decoration.** If red appears in a logo lockup, a pull quote, a bullet, a
  chart and a button, the reader cannot tell which of them is interactive. Reserve it.
- **Treating `secondary` as body text.** It is 2.78 against white. It is a caption colour for bold
  or large type, and a placeholder colour, and it is not a paragraph colour.
- **Using red for body copy.** 4.00 against white fails AA for normal text, and long paragraphs in
  a red that is meant to be alarming read as a mistake regardless.
- **Letting the ladder drift.** One extra grey per release, each one a reasonable-looking
  `#B1B1B1`, and the family becomes "light greys" rather than a system with six named steps. The
  whole point is that `panel` means the same thing on every surface in the product.
- **Borrowing a tint from another family.** A cool grey lifted from a Nordic palette, or a warm
  one lifted from Morandi, breaks achromaticity. Swiss greys are true greys.

---

## 7. Where to go next

| | |
| --- | --- |
| [Where the palette comes from](../01-swiss-neutral-origin/en.md) | the Swiss style, the grid, and the four rules |
| [Swiss neutral versus nordic](../03-swiss-neutral-vs-nordic/en.md) | achromatic and rational against tinted and atmospheric |
| [Swiss neutral in practice](../04-swiss-neutral-in-practice/en.md) | components, charts, and what the rules forbid |
| [The macaron palette](../../2-macaron/02-macaron-palette/en.md) | a family with seven hues, for contrast |
