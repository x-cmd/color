---
x-title: Family at a glance
x-desc: All seven colour families on one page — the map, the comparison table, choosing by use case, and a live example rendered in each family's own colours.
x-sidebar: Family at a glance
x-keywords: colour families compared, macaron vs morandi, choose palette, palette examples, ui colour examples, 色系对比, 配色选择, 配色实例
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'Family at a glance'
      inLanguage: 'en'
      about: 'comparing and choosing between the seven colour families'
---

# Family at a glance

---

Seven families, one page. If you know what you are building, section 3 gets you to a shortlist; if
you know what you have — a logo, a photograph, an existing brand — section 5 works backwards from
it. Section 4 shows every family rendered as the same interface, in its own colours, so you can
judge with your eyes instead of by the numbers.

---

## 1. The map

Two axes sort the seven families almost completely: **how light the ground is**, and **how much
colour the family spends** (mean chroma across its main colours).

```text
                mean chroma →
                0.03   0.05   0.07   0.19
   light  0.87  morandi nordic macaron
   ground 0.71                swiss*       memphis
   dark   0.68                                    neon

   * swiss neutral spends almost nothing on colour by design —
     its one signal red is a rule, not a budget.
```

Three of the families are pale (macaron, morandi, nordic) and separated by chroma and by
temperature — macaron keeps its hues legible, morandi pulls every hue toward grey, nordic tints
everything cool and warms it back with accents. Two are loud (memphis, neon) and separated by the
ground they stand on — white daylight against black night. Wabi-sabi sits alone in the middle
band: neither pale nor loud, warm where the others are cool.

---

## 2. The table

<!-- families:en -->
| Family | Mean lightness (L) | Mean chroma (C) | Hue spread | Main colours | Mood | Good for | Avoid for |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Macaron | 0.87 | 0.07 | 7 | 7 | Sweet, soft, playful | Consumer apps, food and drink, children's products, seasonal campaigns, onboarding and empty states | Financial dashboards, dense data tables, legal or medical information, anything where numbers must be read fast |
| Morandi | 0.78 | 0.03 | 4 | 7 | Quiet, studied, tactile | Editorial layouts, gallery and portfolio sites, lifestyle brands, subtle dashboards, long-form reading | Interfaces that need one obvious action, or audiences that expect vivid energy |
| Swiss Neutral | 0.71 | 0.06 | 1 | 4 | Exact, quiet, rational | Editorial and publishing, documentation, architecture and design studios, data reporting, ticketing and wayfinding | Brands that need warmth or playfulness, and products aimed at children |
| Nordic | 0.79 | 0.05 | 4 | 7 | Calm, clean, airy | SaaS and developer tools, healthcare, travel and hospitality, portfolios, documentation | Brands that need warmth or urgency, and dense dashboards where pale colours wash out |
| Wabi-sabi | 0.61 | 0.04 | 4 | 5 | Earthy, honest, weathered | Furniture and interiors, craft and handmade goods, food brands, wellness, slow-living publications | Products that need to look new, technical, or fast-moving |
| Memphis | 0.72 | 0.19 | 6 | 6 | Loud, ironic, playful | Youth brands, events and music, tech that wants to look like a launch, illustration and editorial accents | Trust-heavy domains such as finance, healthcare, government and enterprise procurement |
| Neon | 0.68 | 0.18 | 6 | 6 | Electric, nocturnal, synthetic | Nightlife, music and gaming, developer tools that want an edge, portfolio and landing pages, terminal-adjacent products | Reading-heavy content, forms, printing, and anyone who needs daylight clarity |
<!-- /families -->

Read the "Mood" column first; it is the fastest filter. Then "Good for" against what you are
building, and "Avoid for" against what you must not break.

---

## 3. Choosing by use case

| If you are building… | Start with | And read |
| --- | --- | --- |
| A consumer app, food brand, or anything for children | macaron | [macaron in practice](../../2-macaron/04-macaron-in-practice/en.md) |
| A portfolio, gallery, editorial or long-form reading product | morandi | [morandi in practice](../../3-morandi/04-morandi-in-practice/en.md) |
| Documentation, publishing, a data report, or a wayfinding system | swiss neutral | [swiss neutral in practice](../../4-swiss-neutral/04-swiss-neutral-in-practice/en.md) |
| A SaaS product, developer tool, or healthcare interface | nordic | [nordic in practice](../../5-nordic/04-nordic-in-practice/en.md) |
| Craft goods, interiors, food packaging, or a slow-living publication | wabi-sabi | [wabi-sabi in practice](../../6-wabi-sabi/04-wabi-sabi-in-practice/en.md) |
| A youth brand, an event, a launch | memphis | [memphis in practice](../../7-memphis/04-memphis-in-practice/en.md) |
| Nightlife, gaming, music, or a portfolio that needs an edge | neon | [neon in practice](../../8-neon/04-neon-in-practice/en.md) |

When two rows both apply, the comparison articles are the tie-breakers — each family's third
article compares it with the neighbour it is most often confused with.

---

## 4. The gallery — the same interface, seven ways

Each example below is generated from the family's own palette: the same buttons, tags, stat cards,
chart bars and alert, wearing that family's colours and obeying its contrast rules. Numbers in the
stat cards are meaningless; the colours are not.

### Macaron

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

### Morandi

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

### Swiss neutral

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

### Nordic

<!-- demo:nordic:en -->
<div style="border:1px solid #D0D1D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#D9A38F;color:#000000;font-size:13px;font-weight:600">Nordic · Calm, clean, airy</div>
  <div style="padding:16px;background:#F7F9FA">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#D9A38F;color:#000000;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #2E3A40;color:#2E3A40;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#F6FBFE;color:#2E3A40;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#E8EDF0;color:#000000;font-size:12px">Frost</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C9D6DE;color:#000000;font-size:12px">Glacier</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#9FB6C4;color:#000000;font-size:12px">Fjord</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#6B8FA3;color:#000000;font-size:12px">Deep Fjord</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#D9A38F;color:#000000;font-size:12px">Terracotta</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A9BC8F;color:#000000;font-size:12px">Eucalyptus</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F6FBFE"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F5FBFF"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F5FBFF"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #2E3A40;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#E8EDF0"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#C9D6DE"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#9FB6C4"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#6B8FA3"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#D9A38F"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#A9BC8F"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFF9F6;border-left:3px solid #D9A38F;color:#000000;font-size:13px"><strong>Note</strong> · Cool, pale and airy: near-white surfaces, glacial blues, and a few warm accents used sparingly to keep it from going cold.</div>
    <div style="margin-top:10px;font-size:11px;color:#2E3A40">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

### Wabi-sabi

<!-- demo:wabi-sabi:en -->
<div style="border:1px solid #C1B9AF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#8C6D5B;color:#FFFFFF;font-size:13px;font-weight:600">Wabi-sabi · Earthy, honest, weathered</div>
  <div style="padding:16px;background:#E8E0D5">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#8C6D5B;color:#FFFFFF;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #3B342E;color:#3B342E;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFF9F1;color:#3B342E;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C9BBA6;color:#000000;font-size:12px">Sand</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A08C7D;color:#000000;font-size:12px">Clay</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#8C6D5B;color:#FFFFFF;font-size:12px">Bark</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#7D8471;color:#000000;font-size:12px">Moss</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#4A5A45;color:#FFFFFF;font-size:12px">Forest</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF9F1"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#EDD7C7"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#D8B6A2"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #3B342E;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#C9BBA6"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#A08C7D"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#8C6D5B"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#7D8471"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#4A5A45"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#D8B6A2;border-left:3px solid #8C6D5B;color:#000000;font-size:13px"><strong>Note</strong> · Earth-derived colours with visible texture: lime plaster, sand, clay, moss and bark. Low chroma, warm bias, nothing polished.</div>
    <div style="margin-top:10px;font-size:11px;color:#3B342E">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

### Memphis

<!-- demo:memphis:en -->
<div style="border:1px solid #D7D7D7;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#FF4B8B;color:#000000;font-size:13px;font-weight:600">Memphis · Loud, ironic, playful</div>
  <div style="padding:16px;background:#FFFFFF">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FF4B8B;color:#000000;font-size:13px;font-weight:600">Primary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:13px">Secondary</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFFBE6;color:#1A1A1A;font-size:13px">Disabled</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFE14D;color:#000000;font-size:12px">Yellow</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF9F1C;color:#000000;font-size:12px">Orange</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#2EC4B6;color:#000000;font-size:12px">Turquoise</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#3A86FF;color:#000000;font-size:12px">Blue</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF4B8B;color:#000000;font-size:12px">Hot Pink</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#8338EC;color:#FFFFFF;font-size:12px">Violet</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFFBE6"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">Active</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF9F3"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">New</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#E8FFFB"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">Returning</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #1A1A1A;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#FFE14D"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#FF9F1C"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#2EC4B6"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#3A86FF"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#FF4B8B"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#8338EC"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFDBE3;border-left:3px solid #FF4B8B;color:#000000;font-size:13px"><strong>Note</strong> · High-chroma primaries and hot pink on black and white, with squiggles, grids and clashing geometry. Loud on purpose.</div>
    <div style="margin-top:10px;font-size:11px;color:#1A1A1A">The same interface, generated from this palette</div>
  </div>
</div>
<!-- /demo -->

### Neon

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

---

## 5. Choosing from what you already have

Working backwards is often more honest than picking by mood:

- **From a logo or brand mark.** Take its dominant colour, compute where it sits in OKLCH. A mark
  at `C` 0.03–0.06 belongs to morandi or nordic; at `C` 0.12+, memphis or neon. The family gives
  you the surrounding system the mark never specified.
- **From photography.** Lay the photos you will actually use next to the gallery above. Product
  photography on white borrows macaron or nordic; warm, textural, material photography borrows
  wabi-sabi; night photography borrows neon.
- **From an existing interface.** Count the accents and measure the band — the method is in
  [reading a palette](../02-reading-a-palette/en.md). You are not choosing a family so much as
  finding out which one you already half-occupy.

---

## 6. Pitfalls

- **Choosing by favourite colour.** The question is not which family you like but which one your
  content can live in. Dense numbers kill macaron; trust kills memphis.
- **Mixing families on one surface.** A morandi page with a memphis banner is two products. One
  family per surface; borrow an accent only from a neighbour, and only once.
- **Forgetting the ground.** Five of the seven families assume a light ground. If your product is
  dark-first, you are choosing between neon and a dark adaptation of nordic — a different problem
  from inverting a palette.

---

## 7. Where to go next

| | |
| --- | --- |
| [What is a colour family](../01-what-is-a-color-family/en.md) | the four constraints behind the map |
| [Reading a palette](../02-reading-a-palette/en.md) | how to read the tables in each series |
| Any family's series | start from its origin article, linked from the [repo index](https://github.com/x-cmd/color) |
