---
x-title: Do & don't — the theory, drawn
x-desc: Every rule in this book as a pair of pictures — the common mistake next to the correct move, with the numbers under each card. These widgets are self-contained HTML built from the palette data, designed to be extracted into x-cmd/draw SVG templates.
x-sidebar: Do & don't
x-keywords: do don't examples, contrast examples, bad color combinations, visual guide, chart mistakes, 正反例, 配色错误, 图解
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Do & don’t — the theory, drawn'
      inLanguage: 'en'
      about: 'visual positive and negative examples for every colour rule'
---

# Do & don't — the theory, drawn

---

Theory pages are cheap to write and expensive to read. This page is the correction: every rule
from this book as **one pair of pictures** — the mistake next to the correct move, numbers under
each card. Read the cards first; the prose is only there when you want to argue.

Every widget below is generated from [`data/palettes.json`](https://github.com/x-cmd/color/blob/main/data/palettes.json)
by [`scripts/widgets.mjs`](https://github.com/x-cmd/color/blob/main/scripts/widgets.mjs) — which
means each one is a self-contained unit, deliberately shaped to be extracted later as an SVG
template and hosted on x-cmd/draw (`/draw?type=widget&name=…`).

---

## 1. Text on fills

<!-- widget:text-on-pastel:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="background:#FFF1A8;border-radius:8px;padding:14px;color:#4A4045;font-size:15px;font-weight:600">季度营收 1,203 万</div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">ink on lemon 8.72 — body-grade</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="background:#FFF1A8;border-radius:8px;padding:14px;color:#FFFFFF;font-size:15px;font-weight:600">季度营收 1,203 万</div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">white on lemon 1.14 — washed out</div>
  </div>
</div>
<!-- /widget -->

The rule: whichever contrast number is larger tells you which text colour goes on the fill —
[reading a palette](../../1-overview/02-reading-a-palette/en.md) §1.

---

## 2. A family belongs to its ground

<!-- widget:family-on-dark:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="background:#FFFDFB;border-radius:8px;padding:12px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#F8C8DC;border-radius:4px"></div><div style="flex:1;height:26px;background:#A8E6CF;border-radius:4px"></div><div style="flex:1;height:26px;background:#C3B1E1;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFF1A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFD3B6;border-radius:4px"></div><div style="flex:1;height:26px;background:#AED6F1;border-radius:4px"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">band calibrated for a light ground: pastels whisper on cream</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="background:#05060A;border-radius:8px;padding:12px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#F8C8DC;border-radius:4px"></div><div style="flex:1;height:26px;background:#A8E6CF;border-radius:4px"></div><div style="flex:1;height:26px;background:#C3B1E1;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFF1A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFD3B6;border-radius:4px"></div><div style="flex:1;height:26px;background:#AED6F1;border-radius:4px"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">same palette on near-black: everything glows — reads neon, not macaron</div>
  </div>
</div>
<!-- /widget -->

Five of the seven families are calibrated for a light ground. Moving the palette does not move
the calibration — see [what is a colour family](../../1-overview/01-what-is-a-color-family/en.md) §6.

---

## 3. The HSL trap

<!-- widget:hsl-trap:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="width:56px;height:40px;background:#FFF1A8;border:1px solid #DDD;border-radius:6px"></div><div style="font-size:12px;color:#444">HSL 饱和度 <b>100%</b><br>实际彩度 OKLCH <b>0.09</b></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">trusting HSL saturation overstates this pastel 2×+</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="width:56px;height:40px;background:#F43F5E;border-radius:6px"></div><div style="font-size:12px;color:#444">HSL 饱和度 <b>89%</b><br>实际彩度 OKLCH <b>0.22</b></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">nearly identical HSL %, 2.4× the real colour — read chroma in OKLCH</div>
  </div>
</div>
<!-- /widget -->

Saturation in HSL is measured against the brightest channel, not against perception. Move
lightness in OKLCH, ignore HSL saturation entirely.

---

## 4. Inside labels

<!-- widget:inside-label:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #8A8A8A;padding:4px 2px 0"><div style="position:relative;flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">12</div><div style="position:relative;flex:1;max-width:52px;height:40px;background:#1A7F37;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">19</div><div style="position:relative;flex:1;max-width:52px;height:52px;background:#BC4C00;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">26</div><div style="position:relative;flex:1;max-width:52px;height:30px;background:#8250DF;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">33</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">mid-band fills carry white at 4.9–5.4 — inside labels work</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #8A8A8A;padding:4px 2px 0"><div style="position:relative;flex:1;max-width:52px;height:64px;background:#F8C8DC;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">12</div><div style="position:relative;flex:1;max-width:52px;height:40px;background:#A8E6CF;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">19</div><div style="position:relative;flex:1;max-width:52px;height:52px;background:#AED6F1;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">26</div><div style="position:relative;flex:1;max-width:52px;height:30px;background:#FFD3B6;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">33</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">white on pastel ≈1.41 — move values out, or use ink</div>
  </div>
</div>
<!-- /widget -->

Mid-band fills carry white inside labels; pastels never do. This is the exact gap the
[macaron variant design](https://github.com/x-cmd-hub/draw/issues/133) works around.

---

## 5. One accent

<!-- widget:one-accent:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="display:flex;gap:8px"><span style="padding:7px 16px;border-radius:8px;background:#FFAAA5;color:#000;font-size:12.5px;font-weight:700">立即开始</span><span style="padding:7px 16px;border-radius:8px;border:1px solid #4A4045;color:#4A4045;font-size:12.5px">文档</span><span style="padding:7px 16px;border-radius:8px;border:1px solid #4A4045;color:#4A4045;font-size:12.5px">示例</span></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">one action at a glance: coral owns "act"</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="display:flex;gap:8px"><span style="padding:7px 16px;border-radius:8px;background:#FFAAA5;color:#000;font-size:12.5px;font-weight:700">立即开始</span><span style="padding:7px 16px;border-radius:8px;background:#A8E6CF;color:#000;font-size:12.5px;font-weight:700">文档</span><span style="padding:7px 16px;border-radius:8px;background:#AED6F1;color:#000;font-size:12.5px;font-weight:700">示例</span></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">three buttons argue — accent is rationed</div>
  </div>
</div>
<!-- /widget -->

An accent does not need to be loud to be seen — it needs to be *alone*.

---

## 6. Density follows chroma

<!-- widget:density:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="padding:8px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #1A1A1A;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#FFE14D;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#FF9F1C;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#2EC4B6;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#3A86FF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">loud colours packed tight reads designed, not accidental</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="padding:26px 30px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #1A1A1A;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#FFE14D;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#FF9F1C;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#2EC4B6;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#3A86FF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">high chroma + air reads unfinished; air is earned by quiet families</div>
  </div>
</div>
<!-- /widget -->

Loud palettes earn tight packing; quiet palettes earn air. Crossing the two reads unfinished.

---

## 7. The grid serves, never performs

<!-- widget:grid-weight:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="position:relative"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#1A7F37;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#BC4C00;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#8250DF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">hairline grid: structure without stealing attention</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="background:repeating-linear-gradient(0deg,#9A9A9A 0,#9A9A9A 2px,transparent 2px,transparent 16px);border-radius:6px;padding-top:2px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:3px solid #555;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#1A7F37;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#BC4C00;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#8250DF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">grid louder than the series = the chart has nothing to say</div>
  </div>
</div>
<!-- /widget -->

---

## 8. Overflow must keep the family's blood

<!-- widget:overflow:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#72CEDC;border-radius:4px"></div><div style="flex:1;height:26px;background:#F3C898;border-radius:4px"></div><div style="flex:1;height:26px;background:#7698D6;border-radius:4px"></div><div style="flex:1;height:26px;background:#D281A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#82BA95;border-radius:4px"></div><div style="flex:1;height:26px;background:#5AAFC4;border-radius:4px"></div><div style="flex:1;height:26px;background:#D9AF7E;border-radius:4px"></div><div style="flex:1;height:26px;background:#5F82BE;border-radius:4px"></div><div style="flex:1;height:26px;background:#B76E96;border-radius:4px"></div><div style="flex:1;height:26px;background:#6BA37E;border-radius:4px"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">same-blood extension: overflow steps stay in character</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#72CEDC;border-radius:4px"></div><div style="flex:1;height:26px;background:#F3C898;border-radius:4px"></div><div style="flex:1;height:26px;background:#7698D6;border-radius:4px"></div><div style="flex:1;height:26px;background:#D281A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#82BA95;border-radius:4px"></div><div style="flex:1;height:26px;background:#F59E0B;border-radius:4px"></div><div style="flex:1;height:26px;background:#0EA5E9;border-radius:4px"></div><div style="flex:1;height:26px;background:#8B5CF6;border-radius:4px"></div><div style="flex:1;height:26px;background:#EC4899;border-radius:4px"></div><div style="flex:1;height:26px;background:#6366F1;border-radius:4px"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">global Tailwind overflow: from #6 it screams — today’s live behaviour</div>
  </div>
</div>
<!-- /widget -->

When data exceeds the palette, the extension steps must stay in character — today's global
overflow table breaks this live, measured in [the draw audit](https://github.com/x-cmd-hub/draw/issues/133).

---

## 9. Gradient is a dialect

<!-- widget:gradient-vs-solid:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:44px;background:#0969DA;border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:56px;background:#0969DA;border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:34px;background:#0969DA;border-radius:3px 3px 0 0"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">solid primer — GitHub charts don’t gradient</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:44px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:56px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:34px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">blue→green blend: two semantic hues per bar, platform feel gone</div>
  </div>
</div>
<!-- /widget -->

---

## 10. Never bet on red vs green

<!-- widget:cvd:en -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ Do</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="display:flex;gap:4px"><div style="width:40px;height:26px;background:#CBD130;border-radius:4px"></div><div style="width:40px;height:26px;background:#2B229F;border-radius:4px"></div></div><div style="font-size:11.5px;color:#666">deuteranopia view: orange vs blue still split</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">okabe-ito: lightness + blue/orange axis — never bet on red/green</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ Don’t</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="display:flex;gap:4px"><div style="width:40px;height:26px;background:#8E9B2A;border-radius:4px"></div><div style="width:40px;height:26px;background:#40384D;border-radius:4px"></div></div><div style="font-size:11.5px;color:#666">deuteranopia view: red ≈ green</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">~8% of men can’t split this — pair red/green with shape or position</div>
  </div>
</div>
<!-- /widget -->

---

## 11. From widget to SVG template

These ten cards are the seed of a draw feature: each `WIDGETS` entry in `scripts/widgets.mjs`
takes a name and a language, reads only the palette registry, and emits self-contained HTML
with inline styles — no scripts, no external CSS. The extraction to `/draw?type=widget` is a
port, not a redesign: same names (`text-on-pastel`, `cvd`, …), same registry, SVG instead of
HTML. Teaching pages could then embed do/don't cards the same way they embed charts.

---

## 12. Where to go next

| | |
| --- | --- |
| [Reading a palette](../../1-overview/02-reading-a-palette/en.md) | the numbers these cards quote |
| [Chart style schemes](../03-chart-schemes/en.md) | the palettes these cards wear |
| [Charts on GitHub](../06-github-charts/en.md) | where several of these rules came from |
