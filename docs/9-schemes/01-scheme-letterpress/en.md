---
x-title: Letterpress — an editorial UI scheme
x-desc: A UI scheme distilled from szum.io's public design tokens — warm paper, black as the accent, gold and rust as the two spot colours. Why it works, and how to borrow the structure without copying the tokens.
x-sidebar: Letterpress
x-keywords: szum, letterpress, editorial ui, gold, rust, paper background, 印刷装帧, 编辑风格
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Letterpress — an editorial UI scheme'
      inLanguage: 'en'
      about: 'an editorial UI scheme distilled from szum.io'
---

# Letterpress — an editorial UI scheme

---

This scheme is a **competitive analysis, written in colour values**. szum.io is a chart design
system in the same space as x-cmd/draw, and its visual identity is one of the better-executed
editorial schemes in the field. Everything below is derived from its public CSS custom properties
— facts, not secrets — and then reduced to the structure that makes it work.

The structure is what you should learn. The tokens themselves you should not copy wholesale onto
a competing product: not because colour lists can be copyrighted (they cannot), but because
wearing a competitor's exact face invites a confusion argument no tool needs.

---

## 1. The scheme

Warm paper, neutral black as the accent, and exactly two mineral spot colours.

<!-- palette:letterpress:en -->
| Swatch | Name | Hex | Role | HSL | OKLCH | White text | Black text |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#F8F8F6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Paper | `#F8F8F6` | Surface | 60° 12% 97% | 0.98 0.00 106° | 1.06 (fail) | 19.75 (AAA) |
| <span style="background-color:#F0EFED">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Inset | `#F0EFED` | Base | 40° 9% 94% | 0.95 0.00 85° | 1.15 (fail) | 18.27 (AAA) |
| <span style="background-color:#D4A853">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Gold | `#D4A853` | Accent | 40° 60% 58% | 0.76 0.12 82° | 2.20 (fail) | 9.53 (AAA) |
| <span style="background-color:#B84233">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Rust | `#B84233` | Accent | 7° 57% 46% | 0.54 0.16 30° | 5.43 (AA) | 3.87 (AA-large) |
| <span style="background-color:#171717">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Ink | `#171717` | Ink | 0° 0% 9% | 0.20 0.00 90° | 17.93 (AAA) | 1.17 (fail) |
| <span style="background-color:#6B6B6B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Grey | `#6B6B6B` | Muted | 0° 0% 42% | 0.53 0.00 90° | 5.33 (AA) | 3.94 (AA-large) |
<!-- /palette -->

<!-- demo:letterpress:en -->
<div style="border:1px solid #D0D0CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#D4A853;color:#000000;font-size:13px;font-weight:600">Letterpress · Editorial, letterpress, restrained</div>
  <div style="padding:16px;background:#F8F8F6">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#D4A853;color:#000000;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #171717;color:#171717;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FBFAF8;color:#6B6B6B;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#F0EFED;color:#000000;font-size:12px">Inset</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#D4A853;color:#000000;font-size:12px">Gold</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#B84233;color:#FFFFFF;font-size:12px">Rust</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FBFAF8"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF9F0"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FF9786"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #6B6B6B;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#F0EFED"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#D4A853"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#B84233"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFF9F0;border-left:3px solid #D4A853;color:#000000;font-size:13px"><strong>Note</strong> · An editorial UI scheme distilled from szum.io's public design tokens: warm paper, neutral-black as the accent, and exactly two mineral spot colours — gold and rust.</div>
    <div style="margin-top:10px;font-size:11px;color:#6B6B6B">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

The reading: a **swiss-neutral skeleton** (achromatic ground, ink doing the emphasis) with
**wabi-sabi warmth** in the paper and the two spot colours. It is the letterpress tradition —
black ink on cream stock, gold foil on the spine, a rust-red chapter mark.

---

## 2. Why it works

- **Black as the accent is a power move.** Every competitor reaches for a brand blue. Making the
  ink itself the button colour says the product trusts its typography; gold and rust then read as
  *curation*, not as branding.
- **The paper is warm, not white.** `#F8F8F6` at OKLCH `0.979 0.003 106` — barely a hue, but the
  warmth is what makes the black feel like ink rather than like a screen. Pure white would read
  as "app"; this reads as "publication".
- **Two spot colours, rationed.** Gold `#D4A853` for value ("Creator", highlights), rust
  `#B84233` for story (data, emphasis). At 2.20 and 5.43 against white neither can carry body
  text — they are marks, not ink, which is exactly how the site uses them.

<!-- band:letterpress:en -->
| Dimension | Measured on | Value |
| --- | --- | --- |
| Lightness | OKLCH L | 0.54 – 0.95 |
| Chroma | OKLCH C | 0.00 – 0.16 |
| Hue spread | distinct hues (30° buckets) | 2 |
| Mean lightness | mean OKLCH L | 0.75 |
| Mean chroma | mean OKLCH C | 0.09 |
| Reference: mean HSL saturation | HSL overstates pastels | 42% |
<!-- /band -->

---

## 3. Using the structure, not the tokens

The legal position first, because it gets asked: **a palette of hex values is not copyrightable.**
Copyright protects expression, not facts or methods, and a short list of colour values does not
reach the originality threshold in any major system. Colour *trademarks* exist (Tiffany blue) but
require registration and distinctiveness that "black, gold and rust" will never have.

The practical position is narrower: **trade dress and unfair competition**. Clone the layout,
the type and the tokens together onto a competing product and you invite the argument that you
are causing confusion. Borrow the *structure* — warm ground, ink accent, two rationed spot
colours — and nobody has a case, because that structure is the shared property of five centuries
of print.

The proof is [phosphor paper](../02-scheme-phosphor/en.md): the same discipline, a different
bloodline entirely.

---

## 4. Where to go next

| | |
| --- | --- |
| [Phosphor Paper](../02-scheme-phosphor/en.md) | the counter-proposal — same restraint, terminal blood |
| [Chart style schemes](../03-chart-schemes/en.md) | series palettes for the charts themselves |
| [Swiss neutral](../../4-swiss-neutral/01-swiss-neutral-origin/en.md) | the skeleton this scheme wears |
| [Wabi-sabi](../../6-wabi-sabi/01-wabi-sabi-origin/en.md) | where the warmth comes from |
