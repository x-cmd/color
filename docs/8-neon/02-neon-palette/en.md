---
x-title: Neon — the palette
x-desc: Nine colours on a near-black ground — two surfaces, five fluorescent accents, and two text roles. How the ramp fakes a glow, how to derive new colours without breaking the family, the pairing rules, and the mistakes that break it fastest.
x-sidebar: Neon palette
x-keywords: neon palette, neon colours, dark palette, acid lime, neon cyan, accent colours, 霓虹色板, 霓虹配色, 强调色, 暗色板
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Neon — the palette'
      inLanguage: 'en'
      about: 'the neon colour palette, its ramp, pairing rules and common mistakes'
---

# Neon — the palette

---

Nine colours. Two of them are the ground, five are the accents, two carry text. That is the whole
palette, and the interesting part is not the colours themselves but the rules that keep nine
colours from becoming fourteen.

The family is described in [the origin article](../01-neon-origin/en.md); this one is the
reference. Where it sits relative to its neighbours is in [neon versus
macaron](../03-neon-vs-macaron/en.md) and in
[memphis versus neon](../../7-memphis/03-memphis-vs-neon/en.md).

---

## 1. The colours

<!-- palette:neon:en -->
| Swatch | Name | Hex | Role | HSL | OKLCH | White text | Black text |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#05060A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Void | `#05060A` | Surface | 228° 33% 3% | 0.12 0.01 271° | 20.25 (AAA) | 1.04 (fail) |
| <span style="background-color:#131722">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Panel | `#131722` | Base | 224° 28% 10% | 0.21 0.02 269° | 17.90 (AAA) | 1.17 (fail) |
| <span style="background-color:#00F0FF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Neon Cyan | `#00F0FF` | Accent | 184° 100% 50% | 0.87 0.15 203° | 1.41 (fail) | 14.91 (AAA) |
| <span style="background-color:#FF2E88">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Neon Magenta | `#FF2E88` | Accent | 334° 100% 59% | 0.66 0.24 2° | 3.50 (AA-large) | 6.00 (AA) |
| <span style="background-color:#39FF14">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Acid Lime | `#39FF14` | Accent | 111° 100% 54% | 0.87 0.29 142° | 1.36 (fail) | 15.49 (AAA) |
| <span style="background-color:#9B5CFF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Neon Violet | `#9B5CFF` | Accent | 263° 100% 68% | 0.63 0.23 297° | 3.91 (AA-large) | 5.37 (AA) |
| <span style="background-color:#FFB800">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Neon Amber | `#FFB800` | Accent | 43° 100% 50% | 0.83 0.17 81° | 1.73 (fail) | 12.11 (AAA) |
| <span style="background-color:#E6EDF3">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Text | `#E6EDF3` | Ink | 208° 35% 93% | 0.94 0.01 244° | 1.18 (fail) | 17.77 (AAA) |
| <span style="background-color:#8B98A5">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Muted | `#8B98A5` | Muted | 210° 13% 60% | 0.67 0.02 248° | 2.94 (fail) | 7.13 (AAA) |
<!-- /palette -->

<!-- demo:neon:en -->
<div style="border:1px solid #3C3E44;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#00F0FF;color:#000000;font-size:13px;font-weight:600">Neon · Electric, nocturnal, synthetic</div>
  <div style="padding:16px;background:#05060A">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#00F0FF;color:#000000;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #E6EDF3;color:#E6EDF3;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#000104;color:#8B98A5;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#131722;color:#FFFFFF;font-size:12px">Panel</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#00F0FF;color:#000000;font-size:12px">Neon Cyan</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF2E88;color:#000000;font-size:12px">Neon Magenta</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#39FF14;color:#000000;font-size:12px">Acid Lime</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#9B5CFF;color:#000000;font-size:12px">Neon Violet</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFB800;color:#000000;font-size:12px">Neon Amber</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#2F3440"><div style="font-size:20px;font-weight:700;color:#FFFFFF">12.4k</div><div style="font-size:12px;color:#FFFFFF;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#EEFEFF"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FF91B2"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #8B98A5;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#131722"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#00F0FF"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#FF2E88"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#39FF14"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#9B5CFF"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#FFB800"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#131722;border-left:3px solid #00F0FF;color:#FFFFFF;font-size:13px"><strong>Note</strong> · A near-black canvas lit by fluorescent accents: cyan, magenta, acid lime. The colours glow because everything around them stays dark.</div>
    <div style="margin-top:10px;font-size:11px;color:#8B98A5">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

Read the table by role rather than by hex. The two surfaces are not "two greys" — they are a
ground and a raised surface, and the family needs both. The five accents are not "five bright
colours" — they are five light sources, and each has a job. And the two text roles are not
"black and grey" — they are a lit ink and an unlit one.

---

## 2. The ramp

<!-- ramp:neon:en -->
| Colour | Tint 40 | Tint 20 | Base | Shade 20 | Shade 40 |
| --- | --- | --- | --- | --- | --- |
| Panel `#131722` | `#000104` | `#010207` | `#131722` | `#2F3440` | `#4F5461` |
| Neon Cyan `#00F0FF` | `#009CA6` | `#00C5D1` | `#00F0FF` | `#EEFEFF` | `#EEFEFF` |
| Neon Magenta `#FF2E88` | `#900047` | `#CA0066` | `#FF2E88` | `#FF91B2` | `#FFD0DC` |
| Acid Lime `#39FF14` | `#1DA600` | `#28D200` | `#39FF14` | `#F1FFEF` | `#F1FFEF` |
| Neon Violet `#9B5CFF` | `#5600A3` | `#7831D5` | `#9B5CFF` | `#B897FF` | `#D8CAFF` |
| Neon Amber `#FFB800` | `#A17300` | `#CF9500` | `#FFB800` | `#FFEBC9` | `#FFF9F0` |
<!-- /ramp -->

This is where the family's central illusion is built, and it is worth being precise about how it
works. A real neon tube has a bright core, a coloured falloff, and a glow bleeding into the air
around it. On a screen you cannot have a glow, so you fake it with **lighter tints of the same
hue**: a step about 20% up the lightness scale in the same hue, used as a halo behind or beside
the accent.

The hue is preserved exactly through that step — cyan at 203° tints to 202°, magenta at 2° tints
to 2°, violet at 297° tints to 297°. What does not survive is the chroma, and it cannot: at
those lightnesses the same chroma is outside sRGB, so the tint step drops to `C` 0.14 for magenta
and 0.15 for violet. Cyan and lime have to fall much further, to `C` 0.02 and 0.03, because
their base lightness is already at the top of the scale and there is almost nowhere left to go.

That constraint is worth stating plainly: **the glow step is a tint of the accent, not a
different colour.** A halo that is not the same hue as the thing it surrounds reads as a second
light source, and two light sources near each other is what breaks the "one glowing thing"
reading the whole family depends on.

---

## 3. How the palette is put together

### 3.1 Why two near-blacks

The void `#05060A` is `L` 0.12 and the panel `#131722` is `L` 0.21. The ratio between them is
1.13, which is worth pausing on: that is a separation you would normally call invisible. It is
invisible in the sense that it does not shout, and it is exactly enough to let a raised surface
read as raised.

One near-black would have been simpler, and it would have cost the family its interiors. A
neon street scene with no wall in it is a flat graphic with bright shapes on it. The panel is
what lets a code block, a card, or a floating menu exist as a *place* — the way a surface in a
room exists because the light falls on it differently.

### 3.2 What each accent is for

The five accents are not interchangeable, and assigning them jobs is what stops the palette from
drifting.

**Acid lime `#39FF14`** is the highest-chroma colour in the book at `C` 0.29 and the family most
distinctive voice. It is the one that reads most unmistakably as light. Give it the things that
should feel alive: a success state, a running indicator, the active state of something.

**Neon cyan `#00F0FF`** is the family's cool anchor and the most "technical" of the five. It is
what a terminal, a code editor, or a link would use.

**Neon magenta `#FF2E88`** is the hot one, and the one that most often reads as decoration if it
is left to. It is at `C` 0.24 but `L` 0.66, which makes it the darkest of the five accents and
the one that has to work hardest to be seen.

**Neon violet `#9B5CFF`** sits between magenta and cyan in feel and is the one that most needs a
reason to exist. It has the lowest lightness of the five at `L` 0.63.

**Neon amber `#FFB800`** is the one that breaks the cool. Every other accent is on the cyan-to-
magenta arc; amber sits alone at 81°. It is the family's one warm note and it should be rare,
because it reads as a different temperature rather than as a different hue.

### 3.3 The two text roles

Text `#E6EDF3` at `L` 0.94 and muted `#8B98A5` at `L` 0.67.

Muted is not a lighter grey version of white — it is a blue-grey, deliberately cooled toward the
hue of the ground (244° and 271° are both in that same blue region), so that a caption reads as
part of the same lit room rather than as an imported grey.

The gap between text and muted is 6.88 against the void and 6.08 against the panel, which
comfortably clears the 4.5 threshold for body text in both places. That is the number that makes
the family usable at all.

---

## 4. Extending it

Two rules, and they are both about not adding.

**Hold the ground.** The void and the panel do not move. If you need a third surface, derive it
from the panel by moving lightness a little and holding hue and chroma — a slightly raised panel
for a nested card, a slightly darker one for a well. Never a new hue.

**Hold the count.** Five accents. When you need a sixth, the answer is usually that one of the
five already means the right thing, and you were about to introduce it for a different reason.
If you genuinely need a sixth, the family has already ended, and the honest move is to start a
different family rather than to extend this one quietly.

The way to make new colours legitimately is the ramp. Moving an accent along its own hue by a
small lightness step gives you a legitimate variation: a hover state, a pressed state, a
disabled state, a tint for a background wash, a shade for a border. All of these are derived, not
invented, and they keep the hue count at five because they are the same five hues.

---

## 5. Pairing rules

The family is built to be read on dark and only on dark, and the numbers say so plainly.

Neon magenta `#FF2E88` reaches a contrast ratio of 6.00 against black but only 3.50 against
white. Text `#E6EDF3` reaches 17.77 against the void but 1.18 against white — which is to say
that this family's text on a white page is invisible. There is no version of this palette that
works on a light ground, and any design that tries has stopped being neon.

Against the void, the accents separate well: lime at 14.94, cyan at 14.38, amber at 11.68,
magenta at 5.78, violet at 5.18. Magenta and violet clear the 4.5 body-text threshold on the
void and the 3 threshold on the panel, so they can carry small text; the other three are for
larger marks and for non-text elements.

Text on the accents is a different matter. Cyan against text is 1.19, lime against text is 1.15
— these are unreadable combinations in either direction, so an accent-coloured button should carry
the void or the panel as its label colour, not text. Magenta against text is 2.96 and violet
against text is 3.31: still below the body-text threshold, which means even the darker accents
are for large marks rather than for words.

The two grounds are also worth separating carefully. Panel against void is 1.13, so a panel is
distinguished by its placement and its border rather than by a strong tonal difference. Borders
and separators in this family should come from the accent tints, where a hairline of the accent's
tint is what a real lit edge would look like.

---

## 6. Common mistakes

**Using an accent for body text.** Acid lime at `L` 0.87 and neon cyan at `L` 0.87 are the two
brightest colours on the page. Putting a paragraph in either one produces something that is
technically high-contrast and practically unusable, because the eye has nothing to rest against.
Accents are for marks.

**Adding a sixth accent.** This is the most common way the family gets diluted. The tell is a
new colour appearing because "we needed a colour for this one state". Look instead for the
existing accent that already means that, or restructure so the state is carried by weight,
border or position rather than by a new hue.

**Forgetting that the glow step is a tint, not a new colour.** The halo around a magenta
element is a lighter magenta. The moment it becomes a desaturated pink, or a white, or a
different hue, the "this is one glowing thing" reading is gone and the interface starts to look
like a set of unrelated highlights.

**Treating the accents as interchangeable.** Lime, cyan, amber, magenta and violet carry
different temperatures and different lightnesses; swapping them changes the temperature of the
page. If lime is on the button, the page feels colder than if magenta is.

**Using the family on a light background.** The single most common failure, and the one that
produces the worst result: a bright accent on white at `C` 0.29 is genuinely hard to read, and
there is no good fix short of changing the ground.

**Assuming the ground can be lightened.** Raising the void from `L` 0.12 to 0.20 to fit a
"softer" design takes the glow with it. The accents stop reading as light sources and start
reading as bright paint, and the family is over.

---

## 7. Where to go next

| | |
| --- | --- |
| [Neon — where the palette comes from](../01-neon-origin/en.md) | the lighting technology, the cinema, and the four rules |
| [Neon versus macaron](../03-neon-vs-macaron/en.md) | the same sweetness, turned all the way up and set on black |
| [Neon in practice](../04-neon-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [What is a colour family](../../1-overview/01-what-is-a-color-family/en.md) | the four constraints every family shares |
