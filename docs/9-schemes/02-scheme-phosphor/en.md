---
x-title: Phosphor Paper — a scheme proposed for draw
x-desc: The counter-proposal to letterpress — cool paper, green-black ink, terminal-signal green as the single accent, plus an eight-colour chart series calibrated in OKLCH. An instrument, not a press.
x-sidebar: Phosphor Paper
x-keywords: phosphor paper, draw theme, terminal green, chart series palette, signal green, 磷光纸, 信号绿, 图表配色
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Phosphor Paper — a scheme proposed for draw'
      inLanguage: 'en'
      about: 'a UI and chart scheme proposed for x-cmd/draw'
---

# Phosphor Paper — a scheme proposed for draw

---

Where [letterpress](../01-scheme-letterpress/en.md) is a press, this is an **instrument**. It was
designed as the identity for x-cmd/draw: a chart tool that lives in URLs and terminals, open
source, fast. The restraint is the same as the editorial scheme's; the bloodline is entirely
different — cool paper where they warm it, green ink where they use neutral black, one signal
colour where they spend two.

---

## 1. The scheme

Cool snow paper, green-black ink, terminal-signal green as the single accent, amber as the
secondary mark.

<!-- palette:phosphor:en -->
| Swatch | Name | Hex | Role | HSL | OKLCH | White text | Black text |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#F7F9F8">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Snow | `#F7F9F8` | Surface | 150° 14% 97% | 0.98 0.00 165° | 1.06 (fail) | 19.86 (AAA) |
| <span style="background-color:#EDF1EF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Inset | `#EDF1EF` | Base | 150° 12% 94% | 0.95 0.01 165° | 1.14 (fail) | 18.43 (AAA) |
| <span style="background-color:#0E7C5B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Signal Green | `#0E7C5B` | Accent | 162° 80% 27% | 0.52 0.10 166° | 5.18 (AA) | 4.05 (AA-large) |
| <span style="background-color:#B45309">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Amber | `#B45309` | Accent | 26° 90% 37% | 0.56 0.15 49° | 5.02 (AA) | 4.18 (AA-large) |
| <span style="background-color:#0A5C44">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Deep Signal | `#0A5C44` | Support | 162° 80% 20% | 0.42 0.08 167° | 7.99 (AAA) | 2.63 (fail) |
| <span style="background-color:#182622">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Ink | `#182622` | Ink | 163° 23% 12% | 0.25 0.02 175° | 15.68 (AAA) | 1.34 (fail) |
| <span style="background-color:#5D6B66">&nbsp;&nbsp;&nbsp;&nbsp;</span> | Mist | `#5D6B66` | Muted | 159° 7% 39% | 0.51 0.02 172° | 5.58 (AA) | 3.76 (AA-large) |
<!-- /palette -->

<!-- demo:phosphor:en -->
<div style="border:1px solid #D0D1D0;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#0E7C5B;color:#FFFFFF;font-size:13px;font-weight:600">Phosphor Paper · Instrumental, terminal, precise</div>
  <div style="padding:16px;background:#F7F9F8">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#0E7C5B;color:#FFFFFF;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #182622;color:#182622;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#F7FBF9;color:#5D6B66;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#EDF1EF;color:#000000;font-size:12px">Inset</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#0E7C5B;color:#FFFFFF;font-size:12px">Signal Green</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#B45309;color:#FFFFFF;font-size:12px">Amber</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F7FBF9"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#6AC7A2"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFA26F"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #5D6B66;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#EDF1EF"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#0E7C5B"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#B45309"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#6AC7A2;border-left:3px solid #0E7C5B;color:#000000;font-size:13px"><strong>Note</strong> · A UI scheme proposed for x-cmd/draw: cool paper, green-black ink, and terminal-signal green as the single accent — an instrument, not a letterpress.</div>
    <div style="margin-top:10px;font-size:11px;color:#5D6B66">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

Every value passes AA where it needs to: signal green carries 5.18 against white — buttons and
body-weight links both work; the green-black ink carries 15.68. The accent does not need to be
loud to be seen. It needs to be *alone*.

<!-- band:phosphor:en -->
| Dimension | Measured on | Value |
| --- | --- | --- |
| Lightness | OKLCH L | 0.52 – 0.95 |
| Chroma | OKLCH C | 0.01 – 0.15 |
| Hue spread | distinct hues (30° buckets) | 2 |
| Mean lightness | mean OKLCH L | 0.68 |
| Mean chroma | mean OKLCH C | 0.09 |
| Reference: mean HSL saturation | HSL overstates pastels | 61% |
<!-- /band -->

---

## 2. The chart series

A chart tool is judged by its series palette before its landing page. These eight are calibrated
to hold one band — OKLCH `L` 0.52–0.67, chroma 0.09–0.25 — so any chart composed from them is
coordinated at birth, light or dark ground notwithstanding.

<!-- series:phosphor:en -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#0E7C5B"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#2563EB"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#D97706"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#BE185D"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#7C3AED"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#0E7490"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#4D7C0F"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#9CA3AF"></div></div>

| Swatch | Hex | HSL | OKLCH | Black text | White text |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#0E7C5B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0E7C5B` | 162° 80% 27% | 0.52 0.10 166° | 4.05 (AA-large) | 5.18 (AA) |
| <span style="background-color:#2563EB">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#2563EB` | 221° 83% 53% | 0.55 0.22 263° | 4.06 (AA-large) | 5.17 (AA) |
| <span style="background-color:#D97706">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#D97706` | 32° 95% 44% | 0.67 0.16 58° | 6.59 (AA) | 3.19 (AA-large) |
| <span style="background-color:#BE185D">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#BE185D` | 335° 78% 42% | 0.52 0.20 4° | 3.48 (AA-large) | 6.04 (AA) |
| <span style="background-color:#7C3AED">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#7C3AED` | 262° 83% 58% | 0.54 0.25 293° | 3.69 (AA-large) | 5.70 (AA) |
| <span style="background-color:#0E7490">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0E7490` | 193° 82% 31% | 0.52 0.09 223° | 3.92 (AA-large) | 5.36 (AA) |
| <span style="background-color:#4D7C0F">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#4D7C0F` | 86° 78% 27% | 0.53 0.14 132° | 4.21 (AA-large) | 4.99 (AA) |
| <span style="background-color:#9CA3AF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#9CA3AF` | 218° 11% 65% | 0.71 0.02 261° | 8.27 (AAA) | 2.54 (fail) |
<!-- /series -->

Read the table as a spec, not a swatch wall: every colour carries black text at AA or better
(the palest, grey, is the reserved "other/unknown" series), and the hue circle is walked in even
steps so adjacent series stay separable at six colours deep.

---

## 3. Why this and not the editorial scheme

The honest answer is that draw should not dress like its competitor even if the dress were free.
The practical answer:

- **The lineage is already there.** x-cmd is a terminal project; phosphor terminals put green on
  black. Making the brand colour the signal green is not a decoration decision, it is a
  *provenance* decision.
- **Cool ground separates the two products at a glance.** Put the two landing pages side by side
  and no one asks which is which — which is the entire point of a colour identity.
- **One accent, instrument-grade.** An instrument has one indicator that means "act". A press
  has two that mean "value" and "story". Charts are instruments.

---

## 4. Where it should live

Three layers, in order of payoff:

1. **The site** — landing, docs, editor chrome. The values above drop straight into CSS custom
   properties.
2. **The default light scheme for rendered charts** — canvas snow, ink text, the eight series.
   A chart that arrives "already coordinated" is a product feature.
3. **As a named theme** (`t=phosphor`) alongside the existing styles, with `scheme=dark` mapped
   to the same hues at inverted lightness — the series band was chosen so it survives that flip.

---

## 5. Where to go next

| | |
| --- | --- |
| [Chart style schemes](../03-chart-schemes/en.md) | four more series palettes, and what a chart scheme must decide |
| [Letterpress](../01-scheme-letterpress/en.md) | the editorial counterweight |
| [Reading a palette](../../1-overview/02-reading-a-palette/en.md) | how to audit any series palette |
