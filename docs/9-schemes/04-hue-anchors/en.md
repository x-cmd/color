---
x-title: Hue anchors — one style, every blood colour
x-desc: Red, blue, green and purple are not styles — they are anchors. Separate the structure of a scheme from where it sits on the colour wheel, and one scheme becomes infinitely many. Every anchor rendered below as a live interface example.
x-sidebar: Hue anchors
x-keywords: hue anchor, oklch hue rotation, parametric theme, theme variants, palette generator, 色相锚, 参数化主题, 配色变体
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Hue anchors — one style, every blood colour'
      inLanguage: 'en'
      about: 'separating scheme structure from hue position'
---

# Hue anchors — one style, every blood colour

---

Red is not a style. Blue is not a style. They are **positions**. What makes a scheme a scheme is
its *structure* — the lightness discipline, the chroma budget, the geometry between its series —
and structure can sit down anywhere on the colour wheel. Anchor phosphor at red instead of green
and you have a different product wearing the same suit.

This is the move that turns a theme library from a list into a **generator**: one definition,
`style × anchor`, and every customer's brand colour becomes an entry point rather than a fork.

---

## 1. Structure and anchor

A scheme decomposes into two independent decisions:

| | What it fixes | Example (phosphor) |
| --- | --- | --- |
| **Structure** | the `L` band, the `C` band, how far apart series sit in hue, which member is neutral | `L` 0.52–0.67, `C` 0.09–0.25, even steps around the wheel, one reserved grey |
| **Anchor** | where series 1 lands on the wheel | signal green, OKLCH hue 166° |

Rotation is then trivial in OKLCH: hold `L` and `C` of every colour, shift every `H` by the same
delta. The discipline survives the turn because the discipline never depended on the hue.

What rotation can **never** do is cross structures. Turn macaron for a thousand degrees and it
will not become wabi-sabi — those two differ in their `L` band and their chroma budget, which
rotation holds fixed by definition. That crossing lives on a different axis of a theme, and it
is covered in [type and spacing](../05-type-and-spacing/en.md).

---

## 2. One scheme, seven anchors — worn

Not charted this time — **worn**. The same interface and the same eight-series chart, in every
anchor of phosphor. Each card is computed: hold lightness, hold chroma, turn the wheel.

<!-- anchor-cards:phosphor:en -->
<div style="border:1px solid #D3D0D0;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FAF8F7;border-bottom:1px solid #D3D0D0">
    <strong style="color:#2C1F1B;font-size:13px">Phosphor Paper · 30° red</strong>
    <code style="color:#726460;font-size:12px">#9D5044</code>
  </div>
  <div style="padding:14px 16px;background:#FAF8F7">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#9D5044;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #2C1F1B;color:#2C1F1B;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #726460;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#9D5044"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#5A7E00"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#8784F1"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#007599"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#008550"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#80651D"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A8436F"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#A0A598"></div></div>
  </div>
</div>
<div style="border:1px solid #D2D1CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FAF8F7;border-bottom:1px solid #D2D1CF">
    <strong style="color:#2A2118;font-size:13px">Phosphor Paper · 55° orange</strong>
    <code style="color:#70655D;font-size:12px">#975726</code>
  </div>
  <div style="padding:14px 16px;background:#FAF8F7">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#975726;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #2A2118;color:#2A2118;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #70655D;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#975726"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#008743"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#AE76DE"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#006AC4"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#008173"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#6A6E27"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#AF4448"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#9BA69C"></div></div>
  </div>
</div>
<div style="border:1px solid #D2D1CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F9F8F7;border-bottom:1px solid #D2D1CF">
    <strong style="color:#262317;font-size:13px">Phosphor Paper · 85° gold</strong>
    <code style="color:#6B675B;font-size:12px">#856406</code>
  </div>
  <div style="padding:14px 16px;background:#F9F8F7">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#856406;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #262317;color:#262317;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6B675B;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#856406"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#008375"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#CF6AB6"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#614FD6"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#007D8F"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#477643"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A94F00"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#96A7A3"></div></div>
  </div>
</div>
<div style="border:1px solid #D0D1D0;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7F9F8;border-bottom:1px solid #D0D1D0">
    <strong style="color:#1A261F;font-size:13px">Phosphor Paper · 150° green</strong>
    <code style="color:#5F6B63;font-size:12px">#367A48</code>
  </div>
  <div style="padding:14px 16px;background:#F7F9F8">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#367A48;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A261F;color:#1A261F;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5F6B63;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#367A48"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#0075BF"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#E16E3C"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#B5217E"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#574BF9"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#007783"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#6A7400"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#99A4AE"></div></div>
  </div>
</div>
<div style="border:1px solid #CFD1D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7F9F9;border-bottom:1px solid #CFD1D2">
    <strong style="color:#172528;font-size:13px">Phosphor Paper · 200° cyan</strong>
    <code style="color:#5B6B6D;font-size:12px">#00787D</code>
  </div>
  <div style="padding:14px 16px;background:#F7F9F9">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#00787D;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #172528;color:#172528;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5B6B6D;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#00787D"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#8246DB"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#B19000"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#B73800"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#B209B6"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#456A9E"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#00805D"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#A3A0AE"></div></div>
  </div>
</div>
<div style="border:1px solid #D0D1D3;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7F9FA;border-bottom:1px solid #D0D1D3">
    <strong style="color:#1E222D;font-size:13px">Phosphor Paper · 260° blue</strong>
    <code style="color:#626772;font-size:12px">#4469A5</code>
  </div>
  <div style="padding:14px 16px;background:#F7F9FA">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#4469A5;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1E222D;color:#1E222D;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #626772;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#4469A5"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#C81272"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#2CAF62"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#7B6A00"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#D10015"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#7F578C"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#007899"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#AD9EA3"></div></div>
  </div>
</div>
<div style="border:1px solid #D1D1D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F9F8FA;border-bottom:1px solid #D1D1D2">
    <strong style="color:#26202A;font-size:13px">Phosphor Paper · 300° purple</strong>
    <code style="color:#6A6570;font-size:12px">#735A9D</code>
  </div>
  <div style="padding:14px 16px;background:#F9F8FA">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#735A9D;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #26202A;color:#26202A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6A6570;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#735A9D"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#C33900"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#00AAA7"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#317E00"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#9C5F00"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#935169"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#4567BD"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#AE9F9B"></div></div>
  </div>
</div>
<!-- /anchor-cards -->

What each anchor reads as:

| Anchor | It reads as |
| --- | --- |
| 30° red | editorial alert — the financial-pages red, urgent by inheritance |
| 55° orange | consumer energy — food, fitness, appetite |
| 85° gold | heritage premium — banking, whiskey, law |
| 150° green | the terminal original — instrument, x-cmd's own blood |
| 200° cyan | clinical calm — healthcare, analytics |
| 260° blue | corporate default — safe, institutional, slightly anonymous |
| 300° purple | product launch — the colour every tech debut reaches for |

And the same seven as a compact matrix, for comparison at a glance:

<!-- anchors:phosphor:en -->
<table style="border-collapse:collapse;max-width:600px"><colgroup><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"></colgroup><tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">Anchor (series 1 lands on)</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">30° red</th><td style="background:#9D5044;height:26px" title="#9D5044"></td><td style="background:#5A7E00;height:26px" title="#5A7E00"></td><td style="background:#8784F1;height:26px" title="#8784F1"></td><td style="background:#007599;height:26px" title="#007599"></td><td style="background:#008550;height:26px" title="#008550"></td><td style="background:#80651D;height:26px" title="#80651D"></td><td style="background:#A8436F;height:26px" title="#A8436F"></td><td style="background:#A0A598;height:26px" title="#A0A598"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">55° orange</th><td style="background:#975726;height:26px" title="#975726"></td><td style="background:#008743;height:26px" title="#008743"></td><td style="background:#AE76DE;height:26px" title="#AE76DE"></td><td style="background:#006AC4;height:26px" title="#006AC4"></td><td style="background:#008173;height:26px" title="#008173"></td><td style="background:#6A6E27;height:26px" title="#6A6E27"></td><td style="background:#AF4448;height:26px" title="#AF4448"></td><td style="background:#9BA69C;height:26px" title="#9BA69C"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">85° gold</th><td style="background:#856406;height:26px" title="#856406"></td><td style="background:#008375;height:26px" title="#008375"></td><td style="background:#CF6AB6;height:26px" title="#CF6AB6"></td><td style="background:#614FD6;height:26px" title="#614FD6"></td><td style="background:#007D8F;height:26px" title="#007D8F"></td><td style="background:#477643;height:26px" title="#477643"></td><td style="background:#A94F00;height:26px" title="#A94F00"></td><td style="background:#96A7A3;height:26px" title="#96A7A3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">150° green</th><td style="background:#367A48;height:26px" title="#367A48"></td><td style="background:#0075BF;height:26px" title="#0075BF"></td><td style="background:#E16E3C;height:26px" title="#E16E3C"></td><td style="background:#B5217E;height:26px" title="#B5217E"></td><td style="background:#574BF9;height:26px" title="#574BF9"></td><td style="background:#007783;height:26px" title="#007783"></td><td style="background:#6A7400;height:26px" title="#6A7400"></td><td style="background:#99A4AE;height:26px" title="#99A4AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">200° cyan</th><td style="background:#00787D;height:26px" title="#00787D"></td><td style="background:#8246DB;height:26px" title="#8246DB"></td><td style="background:#B19000;height:26px" title="#B19000"></td><td style="background:#B73800;height:26px" title="#B73800"></td><td style="background:#B209B6;height:26px" title="#B209B6"></td><td style="background:#456A9E;height:26px" title="#456A9E"></td><td style="background:#00805D;height:26px" title="#00805D"></td><td style="background:#A3A0AE;height:26px" title="#A3A0AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">260° blue</th><td style="background:#4469A5;height:26px" title="#4469A5"></td><td style="background:#C81272;height:26px" title="#C81272"></td><td style="background:#2CAF62;height:26px" title="#2CAF62"></td><td style="background:#7B6A00;height:26px" title="#7B6A00"></td><td style="background:#D10015;height:26px" title="#D10015"></td><td style="background:#7F578C;height:26px" title="#7F578C"></td><td style="background:#007899;height:26px" title="#007899"></td><td style="background:#AD9EA3;height:26px" title="#AD9EA3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">300° purple</th><td style="background:#735A9D;height:26px" title="#735A9D"></td><td style="background:#C33900;height:26px" title="#C33900"></td><td style="background:#00AAA7;height:26px" title="#00AAA7"></td><td style="background:#317E00;height:26px" title="#317E00"></td><td style="background:#9C5F00;height:26px" title="#9C5F00"></td><td style="background:#935169;height:26px" title="#935169"></td><td style="background:#4567BD;height:26px" title="#4567BD"></td><td style="background:#AE9F9B;height:26px" title="#AE9F9B"></td></tr></table>
<!-- /anchors -->

---

## 3. It generalises

The same transform on broadsheet — warm, print-safe, `C` 0.08–0.13 — survives the turn because
its discipline is chroma, not hue:

<!-- anchor-cards:broadsheet:en -->
<div style="border:1px solid #D4D1CD;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FBF9F4;border-bottom:1px solid #D4D1CD">
    <strong style="color:#1A1A1A;font-size:13px">Broadsheet · 30° red</strong>
    <code style="color:#6F675C;font-size:12px">#B54334</code>
  </div>
  <div style="padding:14px 16px;background:#FBF9F4">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#B54334;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6F675C;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#B54334"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#0B5F8A"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#419C88"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#CD9931"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#685C96"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#52794B"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A65D52"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#8D8578"></div></div>
  </div>
</div>
<div style="border:1px solid #D2D2CD;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F9FAF4;border-bottom:1px solid #D2D2CD">
    <strong style="color:#1A1A1A;font-size:13px">Broadsheet · 55° orange</strong>
    <code style="color:#6A695C;font-size:12px">#A75500</code>
  </div>
  <div style="padding:14px 16px;background:#F9FAF4">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#A75500;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6A695C;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#A75500"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#3C5791"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#349AA1"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#AFA737"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#7C5589"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#367D62"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A16439"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#888779"></div></div>
  </div>
</div>
<div style="border:1px solid #CFD3CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7FAF6;border-bottom:1px solid #CFD3CF">
    <strong style="color:#1A1A1A;font-size:13px">Broadsheet · 85° gold</strong>
    <code style="color:#646A5F;font-size:12px">#8B6800</code>
  </div>
  <div style="padding:14px 16px;background:#F7FAF6">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#8B6800;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #646A5F;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#8B6800"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#5D4C8B"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#4994B8"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#7DB55F"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#8C5071"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#1D7C7D"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#8F7026"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#81897C"></div></div>
  </div>
</div>
<div style="border:1px solid #CDD3D4;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F4FBFB;border-bottom:1px solid #CDD3D4">
    <strong style="color:#1A1A1A;font-size:13px">Broadsheet · 150° green</strong>
    <code style="color:#5C6C6B;font-size:12px">#00853B</code>
  </div>
  <div style="padding:14px 16px;background:#F4FBFB">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#00853B;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5C6C6B;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#00853B"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#843E57"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#8F7EBB"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#00B9C1"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#8F5632"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#516D9E"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#478555"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#788A8B"></div></div>
  </div>
</div>
<div style="border:1px solid #CFD2D6;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F6F9FE;border-bottom:1px solid #CFD2D6">
    <strong style="color:#1A1A1A;font-size:13px">Broadsheet · 200° cyan</strong>
    <code style="color:#5F6973;font-size:12px">#007E83</code>
  </div>
  <div style="padding:14px 16px;background:#F6F9FE">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#007E83;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5F6973;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#007E83"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#85451F"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#B27395"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#5FA8F1"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#716820"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#7D5F91"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#00858A"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#7D8792"></div></div>
  </div>
</div>
<div style="border:1px solid #D3D0D5;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FBF8FC;border-bottom:1px solid #D3D0D5">
    <strong style="color:#1A1A1A;font-size:13px">Broadsheet · 260° blue</strong>
    <code style="color:#6B6571;font-size:12px">#356BC5</code>
  </div>
  <div style="padding:14px 16px;background:#FBF8FC">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#356BC5;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6B6571;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#356BC5"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#5E5D00"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#B87859"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#BD8ADF"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#2B7756"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#975862"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#5275AE"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#8A8390"></div></div>
  </div>
</div>
<div style="border:1px solid #D6D0D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FDF7F9;border-bottom:1px solid #D6D0D2">
    <strong style="color:#1A1A1A;font-size:13px">Broadsheet · 300° purple</strong>
    <code style="color:#71646A;font-size:12px">#7D55B8</code>
  </div>
  <div style="padding:14px 16px;background:#FDF7F9">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#7D55B8;color:#FFFFFF;font-size:12.5px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">Secondary</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #71646A;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#7D55B8"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#286838"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#A28644"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#DF7FAD"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#00757C"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#945F3F"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#7D67A6"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#908188"></div></div>
  </div>
</div>
<!-- /anchor-cards -->

<!-- anchors:broadsheet:en -->
<table style="border-collapse:collapse;max-width:600px"><colgroup><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"></colgroup><tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">Anchor (series 1 lands on)</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">30° red</th><td style="background:#B54334;height:26px" title="#B54334"></td><td style="background:#0B5F8A;height:26px" title="#0B5F8A"></td><td style="background:#419C88;height:26px" title="#419C88"></td><td style="background:#CD9931;height:26px" title="#CD9931"></td><td style="background:#685C96;height:26px" title="#685C96"></td><td style="background:#52794B;height:26px" title="#52794B"></td><td style="background:#A65D52;height:26px" title="#A65D52"></td><td style="background:#8D8578;height:26px" title="#8D8578"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">55° orange</th><td style="background:#A75500;height:26px" title="#A75500"></td><td style="background:#3C5791;height:26px" title="#3C5791"></td><td style="background:#349AA1;height:26px" title="#349AA1"></td><td style="background:#AFA737;height:26px" title="#AFA737"></td><td style="background:#7C5589;height:26px" title="#7C5589"></td><td style="background:#367D62;height:26px" title="#367D62"></td><td style="background:#A16439;height:26px" title="#A16439"></td><td style="background:#888779;height:26px" title="#888779"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">85° gold</th><td style="background:#8B6800;height:26px" title="#8B6800"></td><td style="background:#5D4C8B;height:26px" title="#5D4C8B"></td><td style="background:#4994B8;height:26px" title="#4994B8"></td><td style="background:#7DB55F;height:26px" title="#7DB55F"></td><td style="background:#8C5071;height:26px" title="#8C5071"></td><td style="background:#1D7C7D;height:26px" title="#1D7C7D"></td><td style="background:#8F7026;height:26px" title="#8F7026"></td><td style="background:#81897C;height:26px" title="#81897C"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">150° green</th><td style="background:#00853B;height:26px" title="#00853B"></td><td style="background:#843E57;height:26px" title="#843E57"></td><td style="background:#8F7EBB;height:26px" title="#8F7EBB"></td><td style="background:#00B9C1;height:26px" title="#00B9C1"></td><td style="background:#8F5632;height:26px" title="#8F5632"></td><td style="background:#516D9E;height:26px" title="#516D9E"></td><td style="background:#478555;height:26px" title="#478555"></td><td style="background:#788A8B;height:26px" title="#788A8B"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">200° cyan</th><td style="background:#007E83;height:26px" title="#007E83"></td><td style="background:#85451F;height:26px" title="#85451F"></td><td style="background:#B27395;height:26px" title="#B27395"></td><td style="background:#5FA8F1;height:26px" title="#5FA8F1"></td><td style="background:#716820;height:26px" title="#716820"></td><td style="background:#7D5F91;height:26px" title="#7D5F91"></td><td style="background:#00858A;height:26px" title="#00858A"></td><td style="background:#7D8792;height:26px" title="#7D8792"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">260° blue</th><td style="background:#356BC5;height:26px" title="#356BC5"></td><td style="background:#5E5D00;height:26px" title="#5E5D00"></td><td style="background:#B87859;height:26px" title="#B87859"></td><td style="background:#BD8ADF;height:26px" title="#BD8ADF"></td><td style="background:#2B7756;height:26px" title="#2B7756"></td><td style="background:#975862;height:26px" title="#975862"></td><td style="background:#5275AE;height:26px" title="#5275AE"></td><td style="background:#8A8390;height:26px" title="#8A8390"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">300° purple</th><td style="background:#7D55B8;height:26px" title="#7D55B8"></td><td style="background:#286838;height:26px" title="#286838"></td><td style="background:#A28644;height:26px" title="#A28644"></td><td style="background:#DF7FAD;height:26px" title="#DF7FAD"></td><td style="background:#00757C;height:26px" title="#00757C"></td><td style="background:#945F3F;height:26px" title="#945F3F"></td><td style="background:#7D67A6;height:26px" title="#7D67A6"></td><td style="background:#908188;height:26px" title="#908188"></td></tr></table>
<!-- /anchors -->

One exception proves the rule: **okabe-ito must not be rotated.** Its value is its calibration
for colour-blind separation; rotating the hues preserves the *confusion structure* while
invalidating the testing. A functional palette is a measurement, not a mood.

---

## 4. What breaks

- **Gamut clipping.** High chroma near yellow (hue ~90–110) cannot exist at `L` 0.7 — the
  converter pulls chroma back in, so those cells are slightly quieter than their neighbours.
  Visible in the gold row if you look closely. This is physics, not a bug.
- **Semantic collisions.** Anchoring a financial scheme at green makes "up" and "down" fight
  the brand. Anchoring anything at red borrows urgency you may not have earned. The anchor is a
  meaning, choose it like one.
- **The grey stays grey.** The reserved neutral series does not rotate — it is the fixed point
  that makes the rotation legible.

---

## 5. The ladder

Where this sits in the scheme universe, bottom to top:

| Level | What it is | Who is there |
| --- | --- | --- |
| 1 · Flat palettes | curated hex lists | szum's six themes; most products |
| 2 · Scheme as object | canvas + series + type + axes, switchable, validated | [this book's schemes](../03-chart-schemes/en.md) |
| 3 · **Parametric** | structure × anchor × skin — a generator, not a list | this page + [type & spacing](../05-type-and-spacing/en.md) |
| 4 · Selection | an agent reads the data and context, picks the parameters | the draw SKILL |

Each level makes the one below cheaper: a parametric scheme means "match the customer's logo"
is one number, not a design project.

---

## 6. Where to go next

| | |
| --- | --- |
| [Type and spacing](../05-type-and-spacing/en.md) | the third axis — fonts, density, radius, grid |
| [Chart style schemes](../03-chart-schemes/en.md) | the four series palettes this rotates |
| [Phosphor Paper](../02-scheme-phosphor/en.md) | the scheme used in the examples |
