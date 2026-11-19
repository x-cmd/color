---
x-title: Morandi — the palette
x-desc: The ten colours of the morandi family, their roles and numbers, the ramp, how to derive new colours inside the chroma ceiling, which colour may carry text, and the mistakes that break the family.
x-sidebar: Morandi palette
x-keywords: morandi palette, morandi colours, morandi hex codes, muted neutral palette, 莫兰迪色板, 莫兰迪色值, 莫兰迪配色
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Morandi — the palette'
      inLanguage: 'en'
      about: 'the morandi colours, their roles, ramps and pairing rules'
---

# Morandi — the palette

---

This is the working list: the ten colours, what each one is for, what the numbers say, and the
rules that decide which of them may carry text. For the reasoning behind the family, see
[morandi origin](../01-morandi-origin/en.md); for the comparison with the neighbouring family, see
[morandi versus swiss neutral](../03-morandi-vs-swiss/en.md).

---

## 1. The colours

<!-- palette:morandi:en -->
| Swatch | Name | Hex | Role | HSL | OKLCH | White text | Black text |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#F5F2ED">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Paper | `#F5F2ED` | Surface | 37° 29% 95% | 0.96 0.01 81° | 1.12 (fail) | 18.81 (AAA) |
| <span style="background-color:#A3B18A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Sage | `#A3B18A` | Base | 82° 20% 62% | 0.74 0.06 124° | 2.28 (fail) | 9.21 (AAA) |
| <span style="background-color:#DAD7CD">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Clay | `#DAD7CD` | Base | 46° 15% 83% | 0.88 0.01 93° | 1.44 (fail) | 14.58 (AAA) |
| <span style="background-color:#B0B7C6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Mist Blue | `#B0B7C6` | Base | 221° 16% 73% | 0.78 0.02 266° | 2.01 (fail) | 10.43 (AAA) |
| <span style="background-color:#C4AFA1">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Taupe | `#C4AFA1` | Base | 24° 23% 70% | 0.77 0.03 56° | 2.10 (fail) | 9.99 (AAA) |
| <span style="background-color:#C8B6C6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Dusty Mauve | `#C8B6C6` | Base | 307° 14% 75% | 0.80 0.03 329° | 1.92 (fail) | 10.96 (AAA) |
| <span style="background-color:#E3DDD3">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Oat | `#E3DDD3` | Base | 38° 22% 86% | 0.90 0.01 81° | 1.35 (fail) | 15.55 (AAA) |
| <span style="background-color:#8C7A6E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Umber | `#8C7A6E` | Accent | 24° 12% 49% | 0.59 0.03 56° | 4.10 (AA-large) | 5.12 (AA) |
| <span style="background-color:#3F3A38">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Ink | `#3F3A38` | Ink | 17° 6% 23% | 0.35 0.01 43° | 11.21 (AAA) | 1.87 (fail) |
| <span style="background-color:#8A817A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Stone | `#8A817A` | Muted | 26° 6% 51% | 0.61 0.02 60° | 3.82 (AA-large) | 5.50 (AA) |
<!-- /palette -->

<!-- demo:morandi:en -->
<div style="border:1px solid #CECBC6;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#8C7A6E;color:#000000;font-size:13px;font-weight:600">Morandi · Quiet, studied, tactile</div>
  <div style="padding:16px;background:#F5F2ED">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#8C7A6E;color:#000000;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #3F3A38;color:#3F3A38;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#F0FFD7;color:#8A817A;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A3B18A;color:#000000;font-size:12px">Sage</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#DAD7CD;color:#000000;font-size:12px">Clay</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#B0B7C6;color:#000000;font-size:12px">Mist Blue</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C4AFA1;color:#000000;font-size:12px">Taupe</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C8B6C6;color:#000000;font-size:12px">Dusty Mauve</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#E3DDD3;color:#000000;font-size:12px">Oat</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F0FFD7"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FDFAF0"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F8FAFF"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #8A817A;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#A3B18A"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#DAD7CD"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#B0B7C6"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#C4AFA1"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#C8B6C6"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#E3DDD3"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#D8C4B7;border-left:3px solid #8C7A6E;color:#000000;font-size:13px"><strong>Note</strong> · Grey-toned muted colours: every hue is pulled toward neutral, so nothing shouts. Reads as quiet, studied and tactile.</div>
    <div style="margin-top:10px;font-size:11px;color:#8A817A">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

Ten colours, six roles. The shape of the palette is easy to read off the role column: one surface,
five bases, one accent, one ink, one muted. There is no second surface and no second accent, and
that is not an accident — the family is defined by having few enough parts that each one has a job.

The five bases split into two lightness clusters. Oat `#E3DDD3` and clay `#DAD7CD` are pale enough
to read as a second surface. Mist blue `#B0B7C6`, mauve `#C8B6C6`, taupe `#C4AFA1` and sage `#A3B18A`
sit in the middle, close together in lightness, separated mainly by temperature: sage and taupe are
warm, mist blue and mauve are cool, clay sits between them.

Sage is the outlier and the most used colour in the family, because it is the only base with any
chroma at all (`C` 0.06). It is also the only base that will not work as a large flat fill without
making a page look green.

---

## 2. The ramp

<!-- ramp:morandi:en -->
| Colour | Tint 40 | Tint 20 | Base | Shade 20 | Shade 40 |
| --- | --- | --- | --- | --- | --- |
| Sage `#A3B18A` | `#5C6945` | `#7F8C66` | `#A3B18A` | `#C9D7AF` | `#F0FFD7` |
| Clay `#DAD7CD` | `#8E8C82` | `#B4B1A7` | `#DAD7CD` | `#FDFAF0` | `#FDFAF0` |
| Mist Blue `#B0B7C6` | `#686E7C` | `#8B92A0` | `#B0B7C6` | `#D6DEED` | `#F8FAFF` |
| Taupe `#C4AFA1` | `#7A675A` | `#9E8A7D` | `#C4AFA1` | `#EBD5C7` | `#FFF9F5` |
| Dusty Mauve `#C8B6C6` | `#7E6D7C` | `#A291A0` | `#C8B6C6` | `#EFDDED` | `#FFF7FE` |
| Oat `#E3DDD3` | `#979188` | `#BCB6AD` | `#E3DDD3` | `#FFF9F0` | `#FFF9F0` |
| Umber `#8C7A6E` | `#47372D` | `#69584C` | `#8C7A6E` | `#B19E92` | `#D8C4B7` |
<!-- /ramp -->

The ramp moves lightness while holding hue and chroma fixed, which is exactly the operation this
family needs. Because the chroma ceiling is so low, a ramp built this way can never turn into a
coloured ramp — the tints of sage stay sage, they do not become mint.

Note what the ramp cannot do for you. It cannot rescue a colour that was already too chromatic:
tints and shades of a saturated base are still saturated at the light end and muddy at the dark end.
The ramp works inside the ceiling, it does not extend it.

One structural point: because umber is already at `L` 0.59, its shade steps are the only genuinely
dark values the palette can produce, and they sit close to ink. In practice the family has a real
floor at roughly `L` 0.35 and nothing below it — which is why it needs ink as a separate member
rather than as the darkest shade.

---

## 3. How the palette is put together

The palette is built in three tiers.

The **ground** is the paper `#F5F2ED` and, above it, oat and clay. These three are within 0.08 of
each other in lightness and sit between 1.12 and 1.44 against white. They are what the page is
made of. Nothing in the ground tier should ever be asked to carry text — not even a caption.

The **field** is mist blue, mauve, taupe and sage. These are the working colours: chart series,
tags, illustration fills, the coloured band across the top of a gallery page, the background of a
quietly distinguished card. They are separated by hue and a little by lightness, but never enough
to be told apart at a glance without context.

The **structure** is umber, stone and ink. Umber is the accent in the role sense — the one colour
with weight — but its job is structural. Stone `#8A817A` is the muted role: captions, metadata,
disabled states, axis labels. Ink `#3F3A38` is body text.

The whole palette has a notable property: the darkest base colour, umber, is still lighter than
stone and ink, and the lightest base, oat, is only 1.35 against white. There is no high-contrast
colour in the family at all. Morandi gets its contrast from text and from space, not from fills.

---

## 4. Extending it

This family has almost no chroma to spend. Its chroma ceiling is `C` 0.06 and five of its ten
colours sit at `C` 0.01 or `C` 0.02. That has a direct consequence for anyone extending it:

**A new morandi colour is almost entirely a new lightness, not a new hue.**

If you need a new colour, move `L` first and only then consider touching `C` or `H`. A new step
between oat and clay is a new lightness. A new step between sage and taupe is a new lightness too,
because sage is warm and taupe is warm and the difference between them is a small hue shift at
very low chroma.

What you must not do is add a fifth hue in the hope of making the family livelier. The hue set is
four wide, and the reason the family reads as coherent is that the four are far enough apart to
be distinguishable and close enough in lightness and chroma to belong together. Add a fifth and
you have a different family — one that is probably not any of the seven in this book.

Two extensions are legitimate:

- **Tints of the same hues**, for borders and hover states. Take sage or mist blue and lighten it
  by 0.08 to 0.12 in `L`, holding `C` and `H`. The result is still a morandi colour.
- **A second neutral**, but only if it stays warm and stays near the family. A neutral at `C` 0.01
  with a hue between 40° and 90° is in the family. A neutral at `C` 0.00 is not — that is a grey,
  and it will read as Swiss.

If you find yourself needing a fifth base, needing a saturated colour, or needing to distinguish
two states by hue alone, you have left morandi. That is not a failure; it means the design needs a
different family.

---

## 5. Pairing rules

The first rule is a filter on every colour in the palette, and it should be applied before
anything else.

**Which colours may carry text?**

| Colour | vs white | vs black | Verdict |
| --- | --- | --- | --- |
| Ink `#3F3A38` | 11.21 | 1.87 | the only colour for body text |
| Umber `#8C7A6E` | 4.10 | 5.12 | large text and non-text only |
| Stone `#8A817A` | 3.82 | 5.50 | large text and non-text only |
| Sage `#A3B18A` | 2.28 | 9.21 | never text on paper; black text on it |
| Taupe `#C4AFA1` | 2.10 | 9.99 | never text on paper; black text on it |
| Mist blue `#B0B7C6` | 2.01 | 10.43 | never text on paper; black text on it |
| Mauve `#C8B6C6` | 1.92 | 10.96 | never text on paper; black text on it |
| Clay `#DAD7CD` | 1.44 | 14.58 | never text on paper; black text on it |
| Oat `#E3DDD3` | 1.35 | 15.55 | never text on paper; black text on it |

The two columns are the same ones the palette table prints: contrast against pure white and
against pure black. Against the family's own paper surface `#F5F2ED` the figures are slightly
lower — umber 3.67, stone 3.42, ink 10.04 — which changes nothing that follows, because the
mid-tones were already failing.

Only one of the ten colours is comfortable as body text: ink, at 11.21 against white and 10.04
against the paper. Black reaches 21.00, but black is not in this family at all. Umber at 4.10 and
stone at 3.82 clear the 3:1 threshold for large text and for non-text elements such as focus
rings and chart strokes, and fall short of the 4.5:1 that body copy needs.

The second rule follows from the first:

**Which colours may carry white text?** None of the palette's own colours, without exception.
Umber is the darkest base at 5.12 against black text, which is not enough for white text on it
either. White text in a morandi layout belongs on ink `#3F3A38` — the one dark member of the
family — and almost nowhere else. This is the single most common way morandi layouts break: a
button in umber with white label text, which is unreadable at 5.12.

**The third rule is about pairing two bases.** Two mid-lightness bases next to each other — sage
next to taupe, mist blue next to mauve — are nearly indistinguishable in contrast terms (2.28
against 2.10, or 2.01 against 1.92). That is fine for adjacent fills. It is not fine when one of
them carries a border or an icon that the other has to be found against. Pair bases with the
ground, not only with each other.

---

## 6. Common mistakes

- **Adding saturation.** The most common failure by a wide margin. A "morandi green" picked at
  `C` 0.12 is not a morandi green; it is a green, and it will sit oddly next to sage, which is
  still at `C` 0.06. If you want more life in a fill, change the lightness.
- **Using umber as the button.** It is the accent in the role table and that fact does not make it
  a call to action. White text on umber is 5.12 and fails. If the family needs a button, the button
  is ink, and it should be designed to look deliberate rather than to be loud.
- **Making the neutrals grey.** A `#E0E0E0` card on a `#F5F2ED` page is a Swiss card on a morandi
  page. The warmth of the ground is what makes the hues sit still; a neutral grey next to mist
  blue grows an edge.
- **Treating the accent as singular-but-visible.** The instinct is to make umber the one saturated
  element so it stands out. It is already the darkest base. Making it shout would require
  abandoning the chroma ceiling, which abandons the family.
- **Letting the palette accumulate.** One more colour for a warning state, one for a link, one for
  a chart series, and the hue set is gone within a release.

---

## 7. Where to go next

| | |
| --- | --- |
| [Morandi — where the palette comes from](../01-morandi-origin/en.md) | the painter, the name, and the four rules |
| [Morandi versus swiss neutral](../03-morandi-vs-swiss/en.md) | warm and muted against achromatic and exact |
| [Morandi in practice](../04-morandi-in-practice/en.md) | where it works, where it fails, and the rules that keep it intact |
| [Reading a palette](../../1-overview/02-reading-a-palette/en.md) | how to read the numbers in a colour table |
