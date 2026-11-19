---
x-title: Macaron — the palette
x-desc: The ten colours of the macaron family, what each role is for, how the tint ramp works when the tints are the working surface, how to derive new colours under a chroma ceiling, and which pairings actually pass contrast.
x-sidebar: Macaron palette
x-keywords: macaron colours, macaron palette, pastel hex codes, tint ramp, contrast, 马卡龙色值, 马卡龙色板, 色阶, 对比度
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Macaron — the palette'
      inLanguage: 'en'
      about: 'the macaron palette, its roles, its ramp and its pairing rules'
---

# Macaron — the palette

---

This is the working set: ten colours, one accent, one ink, and a lot of rules about where each is
allowed to appear. The [origin article](../01-macaron-origin/en.md) explains why the family exists;
this one is for the moments when you need to pick a colour and be right.

The short version: **the surface is cream, the six base colours are decorative, the accent is the
only thing that means "act", and the ink is the only thing that carries words.** Everything else
follows from those four statements.

---

## 1. The colours

<!-- palette:macaron:en -->
| Swatch | Name | Hex | Role | HSL | OKLCH | White text | Black text |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#FFFDFB">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Cream Paper | `#FFFDFB` | Surface | 30° 100% 99% | 1.00 0.00 68° | 1.01 (fail) | 20.70 (AAA) |
| <span style="background-color:#F8C8DC">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Strawberry Milk | `#F8C8DC` | Base | 335° 77% 88% | 0.88 0.06 351° | 1.47 (fail) | 14.29 (AAA) |
| <span style="background-color:#A8E6CF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Mint | `#A8E6CF` | Base | 158° 55% 78% | 0.88 0.07 170° | 1.41 (fail) | 14.88 (AAA) |
| <span style="background-color:#C3B1E1">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Lavender | `#C3B1E1` | Base | 263° 44% 79% | 0.79 0.07 302° | 1.96 (fail) | 10.70 (AAA) |
| <span style="background-color:#FFF1A8">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Lemon | `#FFF1A8` | Base | 50° 100% 83% | 0.95 0.09 99° | 1.14 (fail) | 18.40 (AAA) |
| <span style="background-color:#FFD3B6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Peach | `#FFD3B6` | Base | 24° 100% 86% | 0.90 0.06 55° | 1.38 (fail) | 15.25 (AAA) |
| <span style="background-color:#AED6F1">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Sky | `#AED6F1` | Base | 204° 71% 81% | 0.86 0.06 238° | 1.53 (fail) | 13.69 (AAA) |
| <span style="background-color:#FFAAA5">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Coral | `#FFAAA5` | Accent | 3° 100% 82% | 0.82 0.10 23° | 1.82 (fail) | 11.55 (AAA) |
| <span style="background-color:#4A4045">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Ink Plum | `#4A4045` | Ink | 330° 7% 27% | 0.38 0.02 346° | 9.95 (AAA) | 2.11 (fail) |
| <span style="background-color:#8C7F84">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Dusty Rose | `#8C7F84` | Muted | 337° 5% 52% | 0.61 0.02 352° | 3.83 (AA-large) | 5.48 (AA) |
<!-- /palette -->

<!-- demo:macaron:en -->
<div style="border:1px solid #D7D5D3;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#FFAAA5;color:#000000;font-size:13px;font-weight:600">Macaron · Sweet, soft, playful</div>
  <div style="padding:16px;background:#FFFDFB">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFAAA5;color:#000000;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #4A4045;color:#4A4045;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFF8FB;color:#8C7F84;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#F8C8DC;color:#000000;font-size:12px">Strawberry Milk</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A8E6CF;color:#000000;font-size:12px">Mint</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C3B1E1;color:#000000;font-size:12px">Lavender</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFF1A8;color:#000000;font-size:12px">Lemon</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFD3B6;color:#000000;font-size:12px">Peach</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#AED6F1;color:#000000;font-size:12px">Sky</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF8FB"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#EDFFF8"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FBF9FF"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #8C7F84;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#F8C8DC"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#A8E6CF"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#C3B1E1"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#FFF1A8"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#FFD3B6"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#AED6F1"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFF8F8;border-left:3px solid #FFAAA5;color:#000000;font-size:13px"><strong>Note</strong> · Pastel candy colours: high lightness, clear but never harsh saturation, and a bias toward pink, mint and cream. Reads as sweet, soft and approachable.</div>
    <div style="margin-top:10px;font-size:11px;color:#8C7F84">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

Ten colours, and only three do interface work: cream is the page, ink is the text, coral is the
action. The other seven are paint.

A base colour is not a theme you "apply" — it is a colour you spend, on a card, a chip, a chart bar,
an illustration. The moment you ask one to carry a paragraph of text, you have both a contrast
failure and a tone failure, because a page of coloured text reads as a page of shouting no matter
how carefully the hue was chosen.

The six base colours are warm-cool balanced. Strawberry milk `#F8C8DC`, lemon `#FFF1A8` and peach
`#FFD3B6` are warm; mint `#A8E6CF`, sky `#AED6F1` and lavender `#C3B1E1` are cool. If you use three
in a row, pick from both sides of that line, or the area reads as a single colour temperature rather
than as a macaron set.

These are also seven **named** hues, not seven swatches of a gradient: strawberry milk is a pink,
mint is a green, lavender is a violet, lemon is a yellow, peach is an orange, sky is a blue, coral
is a red-orange. That legibility is the family's core asset, and it is what a "twelve pinks" palette
gives up.

---

## 2. The ramp

<!-- ramp:macaron:en -->
| Colour | Tint 40 | Tint 20 | Base | Shade 20 | Shade 40 |
| --- | --- | --- | --- | --- | --- |
| Strawberry Milk `#F8C8DC` | `#A97E90` | `#D0A2B5` | `#F8C8DC` | `#FFF8FB` | `#FFF8FB` |
| Mint `#A8E6CF` | `#5D9984` | `#82BFA9` | `#A8E6CF` | `#EDFFF8` | `#EDFFF8` |
| Lavender `#C3B1E1` | `#796894` | `#9D8CBA` | `#C3B1E1` | `#E8DAFF` | `#FBF9FF` |
| Lemon `#FFF1A8` | `#B1A35D` | `#D7CA82` | `#FFF1A8` | `#FFFBE4` | `#FFFBE4` |
| Peach `#FFD3B6` | `#B0886C` | `#D7AD90` | `#FFD3B6` | `#FFF9F5` | `#FFF9F5` |
| Sky `#AED6F1` | `#658AA3` | `#89B0CA` | `#AED6F1` | `#F0F9FF` | `#F5FBFF` |
| Coral `#FFAAA5` | `#AE615D` | `#D68580` | `#FFAAA5` | `#FFE4E1` | `#FFF8F8` |
<!-- /ramp -->

A ramp is five steps of one colour: two tints lighter, the base, two shades darker. It is built by
moving `L` in even steps and holding hue and chroma fixed. In most palettes a ramp is a tool for
making one colour usable in several contexts — a border, a hover state, a disabled state, a shadow.
In macaron it is used differently.

**In this family the tints are where the colour actually gets used.** The base colours are the
bright end of the scale already; at `L` 0.79 to 0.95 they are all too pale to sit next to each
other in large amounts without turning a page into a nursery. So the tint steps are the working
surface: a pale pink wash behind a card, a barely-there mint panel behind a form, a lavender tint
as a callout background — and the base colour arrives only as a small solid: a chip, an icon, a
progress bar, a 4-pixel stripe on the edge of a card.

That reversal is why the ramp matters. A design that puts base colours in large fields will look
wrong in a way that is hard to name — too sweet, too soft, too much like a nursery — while the same
design with the tint steps as the fill and the base as a small accent reads as a considered pastel
system.

Two consequences follow. **Tints are decoration too, not text**: a tinted background carries ink
text, never base-colour text, because the darkest ramp step of lavender against cream is 1.30. And
**a tint ramp is where a "new colour" comes from most honestly**, because it costs no new hue and no
new chroma. A shade appears in one place only, the ink-adjacent structure: a hairline border, a
subtle separator, a shadow. Keep those thin.

---

## 3. How the palette is put together

The palette is organised around one asymmetry that governs everything: **lightness is cheap, chroma is
expensive.**

The band's lightness range, `L` 0.79 to 0.95, spans about sixteen points. The chroma range, `C`
0.06 to 0.10, spans four. A designer can move a macaron colour up or down freely and stay inside the
family; almost any attempt to make it *more colourful* leaves the family immediately. This is not a
stylistic preference, it is a measurement.

Coral at `C` 0.10 and lemon at `C` 0.09 are already at the ceiling. There is no headroom above
coral. Any "richer" version of the pink, the mint, the lemon — the thing a designer reaches for
when a colour looks a bit flat on screen — is at `C` 0.14 or 0.16, and at that point it is simply
a different family.

The room the palette does have is in lightness. Lemon at `L` 0.95 and lavender at `L` 0.79 are
sixteen points apart while staying in the family, and they read as completely different colours,
because at these lightnesses the hue still dominates. That is why the family can carry seven hues
without becoming noisy: it does not need to vary chroma to stay interesting.

---

## 4. Extending it

When you need a colour that is not in the list, work in this order.

**First, move the lightness.** Take the nearest base colour and shift it up or down in `L`, holding
hue and chroma. A deeper pink for a hover state, a paler yellow for a background wash — both are
free. Stay above `L` 0.79 for anything that will be a fill in the family itself, and under `C` 0.10.

**Second, look for a tint of an existing base.** If the need is "a soft background", you do not need
a new colour at all, you need the tint step of a colour you already have. This is the most common
extension in macaron work and it costs nothing.

**Third, treat a new hue as a real decision.** If the colour you want is genuinely a new hue — a
teal, a butter yellow, a periwinkle — then you are changing the family's hue set, and the set is
what keeps the family from drifting. A legitimate new hue:

- Is nameable at a glance, the way the six existing bases are. "Teal" is nameable. "The blue-green
  one" is not.
- Lands inside the band: `L` 0.79–0.95, `C` 0.06–0.10. If it needs `C` 0.12 to work, it belongs to
  another family.
- Keeps the warm-cool balance. A seventh cool hue needs a warm counterpart.
- Is justified by a role the seven existing colours cannot fill. "The brief said teal" is not a
  role.

Most projects that need an eighth macaron hue end up better served by adding a second accent or by
switching to morandi, whose wider lightness range absorbs the kind of thing macaron cannot. That is
a legitimate outcome, not a failure — but make it on purpose rather than discover it three releases
later.

**What you may not derive:** a darker structural colour. Macaron has no dark neutral beyond the ink
and the muted grey, and inventing one — a dark button, a dark header band — is the single most
common way a macaron interface stops being macaron. If a layout needs a dark block, you are looking
at morandi.

---

## 5. Pairing rules

The palette's geometry makes the rules unusually mechanical, which is a gift. Follow them and you
will not need to check a single contrast ratio.

**Rule 1 — text is ink or it is nothing.** Ink plum `#4A4045` gives 9.95 against white and 9.81
against the cream surface, comfortably above the 4.5 threshold. No base colour does this, and none
of them ever will.

**Rule 2 — white text on a macaron fill never works.** Every base colour and the accent fall
between 1.14 and 1.96 against white: lemon is the extreme at 1.14, lavender the least bad at 1.96.
Against pure black the same colours score between 10.70 and 18.40. That gap is the whole rule — a
macaron fill is a *dark-text* surface, never a light-text one. Buttons in this family are coral
with ink on them, not coral with white on them.

**Rule 3 — ink on a base colour is allowed.** Ink against the base colours runs from 5.07
(lavender) to 8.72 (lemon), clearing 4.5 everywhere, so a dark label on a filled chip is fine at
any size. It does not clear 7 (AAA) against lavender or coral, so for AAA on small text over a
fill, keep it on lemon, peach, mint or strawberry milk.

**Rule 4 — the accent is alone.** Coral is the only colour allowed to mean "act", and it earns that
by being scarce. One primary action per screen. If a coral button sits next to a coral badge next
to a coral active tab, none of the three reads as the primary action any more. Against six other
pastels, the accent earns the eye by being the only saturated thing on the page.

**Rule 5 — the muted grey is for metadata, not for text.** Dusty rose `#8C7F84` gives 3.83 against
white and 3.77 against cream. That clears the 3:1 threshold for large text and for non-text
elements such as icons and chart marks, and it fails the 4.5 threshold for body text. Use it for
captions, timestamps, placeholder text and disabled labels — never for a sentence.

**Rule 6 — the surface carries nothing.** Cream paper `#FFFDFB` gives 1.01 against white. It is the
page, not a card. When a card needs to sit on the page, the card is white or a tint, and the
separation comes from a border or a shadow, not from a background block.

| Fill | Ink on it | White on it | Use it for |
| --- | --- | --- | --- |
| Cream paper `#FFFDFB` | 9.81 | 1.01 | the page, and nothing else |
| A tint of any base | 4.5 – 9.6 | 1.0 – 3.3 | card, panel, callout background |
| A base colour | 5.07 – 8.72 | 1.14 – 1.96 | chip, badge, stripe, illustration |
| Coral `#FFAAA5` | 5.47 | 1.82 | the one action |
| Dusty rose `#8C7F84` | 2.60 | 3.83 | metadata, disabled state, large text only |

---

## 6. Common mistakes

**Six pinks instead of seven hues.** The most common failure, and the one the family name
invites. Six pinks at six lightnesses is not a macaron palette — it is a monochrome scheme with a
dessert name. The test is simple: cover the labels and ask someone to name the colours. If the
answer is "pink" six times, the hue set has collapsed. The opposite failure is worth avoiding too: a
palette where every element is a different hue reads as a toy box.

**An accent that is not alone.** See rule 4. The instinct is to make the coral stronger — which
breaks the chroma ceiling instead of fixing the problem. The fix is to remove colour, not add it.

**Text in a base colour.** A paragraph set in lavender `#C3B1E1` gives 1.93 against the cream
surface. It is not "low contrast but kind of sweet"; it is unreadable, and unreadable in a way that
makes the whole page look broken. Ink for text, colour for everything else.

**A dark button.** This is how people reach for a contrast solution and lose the family. A near-black
primary button on a cream page with pastel chips is a swiss-neutral page with macaron decorations.
The macaron button is coral with ink on it, and it works because coral at 1.82 against white is
*supposed* to be low contrast — the fill is a decoration, and the ink on top of it is what the
reader reads.

**Using the base colours as the page background.** Six large pastel fields at full chroma is where
"too sweet" comes from. Let the tints do the filling and keep the base colours small.

**Treating HSL saturation as the rule.** A tool will tell you lemon is 100% saturated. It is not
100% saturated in any meaningful sense — its OKLCH chroma is 0.09. Most "too saturated" judgments
made from an HSL picker are wrong, and they push you to the wrong fix. Work in OKLCH, where the
family's actual limits are visible.

---

## 7. Where to go next

| | |
| --- | --- |
| [Where the palette comes from](../01-macaron-origin/en.md) | what the family is, where it came from, and its four rules |
| [Macaron versus morandi](../03-macaron-vs-morandi/en.md) | the neighbouring family, and how to tell them apart |
| [Macaron in practice](../04-macaron-in-practice/en.md) | components, photographs, print, and where the family fails |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
