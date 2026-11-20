---
x-title: Charts on GitHub — status quo and a recommendation
x-desc: An audit of what x-cmd/draw ships today (shadcn blues plus Tailwind 500s — the tech-blue crowd), the four hard constraints of github.com as a canvas, and a recommendation: a GitHub-native Primer scheme, with broadsheet and mono-signal as the alternates.
x-sidebar: Charts on GitHub
x-keywords: github charts, readme charts, primer colors, github dark mode, chart palette recommendation, tech blue, GitHub 配色, README 图表
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Charts on GitHub — status quo and a recommendation'
      inLanguage: 'en'
      about: 'auditing x-cmd/draw palettes for the github.com embedding scenario'
---

# Charts on GitHub — status quo and a recommendation

---

draw's charts live mostly where its users live: READMEs, issues, PRs — github.com. That page is a
harsher canvas than it looks, and the current default palette, while competent, is the same suit
every developer tool on the platform is wearing. This page audits the status quo, states the
constraints, and proposes what to ship instead.

---

## 1. The scene — four constraints

1. **Two grounds, one image.** GitHub renders the same `<img>` on `#FFFFFF` (light) and `#0D1117`
   (dark). A transparent-canvas chart must survive both; a pale series that reads on dark
   disappears on light.
2. **The platform has house colours.** Links, merges, issues, reviews — github.com is already
   coloured by Primer's functional tokens. A chart that harmonises reads as *content*; a chart
   that clashes reads as *an ad*.
3. **Screenshots travel.** A chart in a README ends up in Slack posts, talks and blog articles
   within a week — on grounds you never chose. Mid-band lightness is the only insurance.
4. **The workaround exists but costs syntax.** GitHub does honour `<picture>` with
   `prefers-color-scheme`, so dual variants are possible — at the price of a nine-line embed.
   Most users will paste the one-line `<img>`; the default palette must therefore work
   single-image.

---

## 2. Status quo — the tech-blue crowd

What x-cmd/draw ships today, distilled from its style source (`src/styles/common.ts`): a shadcn
blue ramp (`#8EC6FF…#0E3994`), Tailwind's 500-grade green/amber/violet for multi-series work
(`#10B981`, `#F59E0B`, `#8B5CF6`), and a bright cyan/violet glow set for dark cards:

<!-- series:tech-blue:en -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#3B82F6"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#10B981"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#F59E0B"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#8B5CF6"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#22D3EE"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#A78BFA"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#F43F5E"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#579DFF"></div></div>

| Swatch | Hex | HSL | OKLCH | Black text | White text |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#3B82F6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#3B82F6` | 217° 91% 60% | 0.62 0.19 260° | 5.71 (AA) | 3.68 (AA-large) |
| <span style="background-color:#10B981">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#10B981` | 160° 84% 39% | 0.70 0.15 162° | 8.28 (AAA) | 2.54 (fail) |
| <span style="background-color:#F59E0B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#F59E0B` | 38° 92% 50% | 0.77 0.16 70° | 9.78 (AAA) | 2.15 (fail) |
| <span style="background-color:#8B5CF6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#8B5CF6` | 258° 90% 66% | 0.61 0.22 293° | 4.96 (AA) | 4.23 (AA-large) |
| <span style="background-color:#22D3EE">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#22D3EE` | 188° 86% 53% | 0.80 0.13 212° | 11.62 (AAA) | 1.81 (fail) |
| <span style="background-color:#A78BFA">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#A78BFA` | 255° 92% 76% | 0.71 0.16 294° | 7.72 (AAA) | 2.72 (fail) |
| <span style="background-color:#F43F5E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#F43F5E` | 350° 89% 60% | 0.65 0.22 16° | 5.72 (AA) | 3.67 (AA-large) |
| <span style="background-color:#579DFF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#579DFF` | 215° 100% 67% | 0.70 0.16 257° | 7.67 (AAA) | 2.74 (fail) |
<!-- /series -->

The audit, in three lines:

- **The mid-band members are fine.** The 500-grade blue/green/violet carry text and survive both
  grounds — this is why the charts look good on the dark hero cards.
- **The glow members are dark-mode-only.** The cyan and pale violet sit near 2:1 against white —
  on a light README they wash out, which is most READMEs.
- **The look is the crowd.** Tailwind 500s plus a shadcn ramp is precisely what the neighbouring
  dev tools ship. Nothing is wrong; nothing is remembered. The user's word for it — 乏味, *tiring* —
  is the correct diagnosis: it is everyone's default suit.

---

## 3. The recommendation — wear the platform

The strongest move on GitHub is not a better generic palette; it is **GitHub's own**. Assembled
from Primer's functional accents — link blue, success green, attention orange, done purple,
danger red, sponsors pink, teal, attention yellow — with Primer's own ink, border and muted
tokens for the chrome:

<!-- series:primer:en -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#0969DA"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#1A7F37"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#BC4C00"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#8250DF"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#CF222E"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#BF3989"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#1B7C83"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#9A6700"></div></div>

| Swatch | Hex | HSL | OKLCH | Black text | White text |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#0969DA">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0969DA` | 212° 92% 45% | 0.54 0.19 257° | 4.04 (AA-large) | 5.19 (AA) |
| <span style="background-color:#1A7F37">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#1A7F37` | 137° 66% 30% | 0.52 0.14 148° | 4.13 (AA-large) | 5.08 (AA) |
| <span style="background-color:#BC4C00">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#BC4C00` | 24° 100% 37% | 0.56 0.16 45° | 4.17 (AA-large) | 5.03 (AA) |
| <span style="background-color:#8250DF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#8250DF` | 261° 69% 59% | 0.56 0.21 295° | 4.16 (AA-large) | 5.05 (AA) |
| <span style="background-color:#CF222E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#CF222E` | 356° 72% 47% | 0.55 0.21 25° | 3.92 (AA-large) | 5.36 (AA) |
| <span style="background-color:#BF3989">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#BF3989` | 324° 54% 49% | 0.57 0.19 348° | 4.16 (AA-large) | 5.05 (AA) |
| <span style="background-color:#1B7C83">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#1B7C83` | 184° 66% 31% | 0.54 0.08 202° | 4.26 (AA-large) | 4.93 (AA) |
| <span style="background-color:#9A6700">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#9A6700` | 40° 100% 30% | 0.55 0.12 75° | 4.31 (AA-large) | 4.87 (AA) |
<!-- /series -->

Why this wins on this platform specifically:

- **Native, not novel.** These are the colours GitHub already uses to mean "merged", "issue",
  "review". A chart in them reads as part of the page — the anti-clash argument in reverse.
- **Dual-ground by construction.** Every member sits in the mid lightness band (OKLCH `L`
  0.45–0.6), because Primer designed them for text on both of GitHub's grounds. The single-image
  `<img>` embed just works in both themes.
- **Not another blue.** Only one of eight members is GitHub blue. The tired tech-blue read is
  gone, replaced by the platform's own semantic spread.
- **Honest trade-off, stated.** Off GitHub, you are wearing someone's house colours — the
  [type and spacing](../05-type-and-spacing/en.md) entry for this scheme says so, and pins the
  alternates.

---

## 4. The alternates

- **[Broadsheet](../03-chart-schemes/en.md)** — when the goal is to be *remembered*, not native:
  warm newsprint series, print-safe, and visibly unlike any other README chart. The editorial
  counterweight.
- **[Mono-signal](../03-chart-schemes/en.md)** — for the most common README chart of all: one number
  with history. Greys plus one signal red; the highlight is the story.
- **Phosphor, anchored at GitHub blue** — the brand option: [rotate](../04-hue-anchors/en.md) draw's
  own scheme to the customer's hue and keep the x-cmd bones.

---

## 5. Dark strategy, in order of cost

1. **Ship mid-band as the default** (Primer above) — one image, both grounds, zero syntax. This
   should be the README default.
2. **Card mode** — draw's white-card canvas keeps its own ground in dark mode. Fine for hero
   charts; heavy for a row of five.
3. **Dual-variant `<picture>`** — for signature charts, generate `scheme=light|dark` URLs and
   let the README switch:

   ```html
   <picture>
     <source media="(prefers-color-scheme: dark)"
             srcset="https://x-cmd.com/draw?type=hbar&scheme=dark&…">
     <img src="https://x-cmd.com/draw?type=hbar&…">
   </picture>
   ```

---

## 6. Where to go next

| | |
| --- | --- |
| [Chart style schemes](../03-chart-schemes/en.md) | the full library the recommendation draws from |
| [Type and spacing](../05-type-and-spacing/en.md) | the skin that keeps a GitHub chart native |
| [Hue anchors](../04-hue-anchors/en.md) | re-anchoring any scheme to a brand hue |
