---
x-title: 字体与间距 —— 风格的另一半
x-desc: 图表主题有三根正交的轴——结构、锚、皮肤。皮肤是字体、字重、密度、圆角与网格。十三个风格的完整指导，外加同一张图穿七种皮肤。
x-sidebar: 字体与间距
x-keywords: 字体, 间距, 图表字体, 字体配对, 等宽数字, 圆角, 网格, typography guide, spacing, tabular numbers
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '字体与间距 —— 风格的另一半'
      inLanguage: 'zh-CN'
      about: '字体、密度与网格——图表主题的第三根轴'
---

# 字体与间距 —— 风格的另一半

---

颜色抢走了所有注意力，但主题有三根正交的轴，颜色只是第一根：

1. **结构** —— 明度带、彩度预算、系列几何。
2. **锚** —— 方案停在色环的哪里。[可旋转](../04-hue-anchors/cn.md)。
3. **皮肤** —— 字体、字重、字距、密度、圆角、网格。

这就是为什么"用马卡龙、换个 theme 变侘寂"不可能是一个参数。转锚能把磷光绿变成
磷光紫，却永远变不出马卡龙→侘寂，因为那两者差在*结构*上。而且就算两根颜色轴都定了，
主题也没完：给马卡龙配上 Helvetica 和直角，这个家族当场死给你看。后一半，就是这一页。

---

## 一、三根轴

| 轴 | 它定住什么 | 改起来便宜吗 |
| --- | --- | --- |
| 结构 | `L` 带、`C` 带、色相几何、谁是中性 | 不便宜——它就是风格本身 |
| 锚 | 系列一落在色环哪里 | 便宜——一个数字，[可安全旋转](../04-hue-anchors/cn.md) |
| 皮肤 | 字体、字重、字距、密度、圆角、网格 | 便宜——但必须与结构*一致* |

于是 draw 这样的产品，完整的图表主题是 `theme = 结构 × 锚 × 皮肤`——三个参数，而不是
三十个十六进制。

---

## 二、总表

本书全部家族与方案，各一张表。字体都是系统安全栈；有正版 webfont 时可直接替换。

<!-- type-guide:cn -->
### The seven families

| Style | Headings | Body | Numbers | Weight / tracking / density | Radius | Grid |
| --- | --- | --- | --- | --- | --- | --- |
| Macaron | ui-rounded, 'SF Pro Rounded', Quicksand, system-ui | ui-rounded, system-ui, sans-serif | tabular | 600 / 0em / airy | 14 | none |
| Morandi | Georgia, 'Source Serif 4', serif | 'Avenir Next', 'Segoe UI', sans-serif | tabular | 400 / 0.01em / airy | 6 | hairline |
| Swiss Neutral | 'Helvetica Neue', Helvetica, Inter, Arial | 'Helvetica Neue', Helvetica, Inter, Arial | tabular (mandatory) | 700 / -0.01em / normal | 0 | hairline |
| Nordic | Inter, system-ui, sans-serif | Inter, system-ui, sans-serif | tabular | 300 / 0.02em / airy | 8 | hairline |
| Wabi-sabi | 'Iowan Old Style', Palatino, Georgia, serif | 'Iowan Old Style', Palatino, Georgia, serif | old-style (prose) / tabular (data) | 400 / 0em / airy | 2 | none |
| Memphis | 'Archivo Black', 'Arial Black', system-ui | Inter, system-ui, sans-serif | tabular | 900 / 0em / compact | mixed 0 / pill | dotted |
| Neon | 'JetBrains Mono', ui-monospace, monospace | system-ui, sans-serif | tabular mono | 600 / 0em / compact | 6 | none |

### The six schemes

| Style | Headings | Body | Numbers | Weight / tracking / density | Radius | Grid |
| --- | --- | --- | --- | --- | --- | --- |
| Letterpress | 'Playfair Display', Georgia, serif | Georgia, serif | old-style (prose) / tabular (data) | 700 / 0em / normal | 2 | hairline |
| Phosphor Paper | Inter, system-ui, sans-serif | Inter, system-ui, sans-serif | tabular | 650 / -0.01em / normal | 8 | hairline |
| Broadsheet | Georgia, 'Nimbus Roman', serif | 'Helvetica Neue', Arial, sans-serif | tabular | 700 / -0.005em / compact | 0 | dotted |
| Salmon | 'Financier Display', Georgia, serif | 'Metric', 'Segoe UI', sans-serif | tabular | 600 / 0em / normal | 2 | hairline |
| Okabe-Ito | Arial, Helvetica, sans-serif | Arial, Helvetica, sans-serif | tabular | 400 / 0em / normal | 4 | hairline |
| Mono Signal | 'Helvetica Neue', Helvetica, Arial | 'Helvetica Neue', Helvetica, Arial | tabular (mandatory) | 700 / 0em / airy | 0 | hairline |
<!-- /type-guide -->

按列读，不要按行读：**数字**一列没有值得一提的例外——数据数字要么等宽要么对不齐；
**圆角**一列是截图里最快的皮肤信号（14px 永远不说"瑞士"，0px 永远不说"马卡龙"）。

---

## 三、穿上 —— 同一张图的七种皮肤

同一张迷你图，各穿一个家族的皮肤、铺自家的色板。同样的数据、同样的版式——变的只有
字体、字重、间距、圆角和网格：

<!-- skins:cn -->
<div style="border:1px solid #8C7F8433;border-radius:14px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#FFFDFB">
    <div style="font-family:ui-rounded, 'SF Pro Rounded', Quicksand, system-ui;font-weight:600;letter-spacing:0em;color:#4A4045;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:ui-rounded, system-ui, sans-serif;color:#8C7F84;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#F8C8DC;border-radius:14px 14px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#A8E6CF;border-radius:14px 14px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#C3B1E1;border-radius:14px 14px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#FFF1A8;border-radius:14px 14px 0 0"></div></div>
    <div style="margin-top:8px;font-family:ui-rounded, system-ui, sans-serif;font-size:10.5px;color:#8C7F84;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#8C7F84">Macaron — Rounded everything; generous padding; no gridlines — softness is the message</div>
  </div>
</div>
<div style="border:1px solid #8A817A33;border-radius:6px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#F5F2ED">
    <div style="font-family:Georgia, 'Source Serif 4', serif;font-weight:400;letter-spacing:0.01em;color:#3F3A38;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:'Avenir Next', 'Segoe UI', sans-serif;color:#8A817A;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:1px solid #8A817A;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#A3B18A;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#DAD7CD;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#B0B7C6;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#C4AFA1;border-radius:6px 6px 0 0"></div></div>
    <div style="margin-top:8px;font-family:'Avenir Next', 'Segoe UI', sans-serif;font-size:10.5px;color:#8A817A;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#8A817A">Morandi — Serif titles over quiet sans body; hairline rules only</div>
  </div>
</div>
<div style="border:1px solid #9B9B9B33;border-radius:0px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:14px 18px;background:#FFFFFF">
    <div style="font-family:'Helvetica Neue', Helvetica, Inter, Arial;font-weight:700;letter-spacing:-0.01em;color:#000000;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:'Helvetica Neue', Helvetica, Inter, Arial;color:#9B9B9B;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:1px solid #9B9B9B;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#F5F5F5;border-radius:0"></div><div style="flex:1;max-width:46px;height:36px;background:#E0E0E0;border-radius:0"></div><div style="flex:1;max-width:46px;height:47px;background:#333333;border-radius:0"></div><div style="flex:1;max-width:46px;height:28px;background:#FF0000;border-radius:0"></div></div>
    <div style="margin-top:8px;font-family:'Helvetica Neue', Helvetica, Inter, Arial;font-size:10.5px;color:#9B9B9B;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#9B9B9B">Swiss Neutral — One family, one weight jump, 8pt grid, square corners; tabular figures everywhere</div>
  </div>
</div>
<div style="border:1px solid #2E3A4033;border-radius:8px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#F7F9FA">
    <div style="font-family:Inter, system-ui, sans-serif;font-weight:300;letter-spacing:0.02em;color:#2E3A40;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:Inter, system-ui, sans-serif;color:#2E3A40;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:1px solid #2E3A40;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#E8EDF0;border-radius:8px 8px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#C9D6DE;border-radius:8px 8px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#9FB6C4;border-radius:8px 8px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#6B8FA3;border-radius:8px 8px 0 0"></div></div>
    <div style="margin-top:8px;font-family:Inter, system-ui, sans-serif;font-size:10.5px;color:#2E3A40;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#2E3A40">Nordic — Light weights, wide leading, more whitespace than content</div>
  </div>
</div>
<div style="border:1px solid #3B342E33;border-radius:2px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:20px 24px;background:#E8E0D5">
    <div style="font-family:'Iowan Old Style', Palatino, Georgia, serif;font-weight:400;letter-spacing:0em;color:#3B342E;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:'Iowan Old Style', Palatino, Georgia, serif;color:#3B342E;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#C9BBA6;border-radius:2px 2px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#A08C7D;border-radius:2px 2px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#8C6D5B;border-radius:2px 2px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#7D8471;border-radius:2px 2px 0 0"></div></div>
    <div style="margin-top:8px;font-family:'Iowan Old Style', Palatino, Georgia, serif;font-size:10.5px;color:#3B342E;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#3B342E">Wabi-sabi — Serif throughout, hand-cut corners, no mechanical grid</div>
  </div>
</div>
<div style="border:1px solid #1A1A1A33;border-radius:0px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:10px 14px;background:#FFFFFF">
    <div style="font-family:'Archivo Black', 'Arial Black', system-ui;font-weight:900;letter-spacing:0em;color:#1A1A1A;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:Inter, system-ui, sans-serif;color:#1A1A1A;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;border-bottom:2px dotted #1A1A1A;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#FFE14D;border-radius:999px 999px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#FF9F1C;border-radius:999px 999px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#2EC4B6;border-radius:999px 999px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#3A86FF;border-radius:999px 999px 0 0"></div></div>
    <div style="margin-top:8px;font-family:Inter, system-ui, sans-serif;font-size:10.5px;color:#1A1A1A;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#1A1A1A">Memphis — Display weight up front, blocks tight, dot grids welcome</div>
  </div>
</div>
<div style="border:1px solid #8B98A533;border-radius:6px;overflow:hidden;max-width:620px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 5%)">
  <div style="padding:10px 14px;background:#05060A">
    <div style="font-family:'JetBrains Mono', ui-monospace, monospace;font-weight:600;letter-spacing:0em;color:#E6EDF3;font-size:16px;margin-bottom:2px">Quarterly growth by area</div>
    <div style="font-family:system-ui, sans-serif;color:#8B98A5;font-size:11.5px;font-variant-numeric:tabular-nums;margin-bottom:14px">YoY %, rounded</div>
    <div style="display:flex;gap:10px;align-items:flex-end;height:60px;padding:4px 2px 0"><div style="flex:1;max-width:46px;height:58px;background:#131722;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:36px;background:#00F0FF;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:47px;background:#FF2E88;border-radius:6px 6px 0 0"></div><div style="flex:1;max-width:46px;height:28px;background:#39FF14;border-radius:6px 6px 0 0"></div></div>
    <div style="margin-top:8px;font-family:system-ui, sans-serif;font-size:10.5px;color:#8B98A5;display:flex;justify-content:space-between"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
    <div style="margin-top:10px;font-size:10.5px;color:#8B98A5">Neon — Mono for anything technical; glow replaces lines</div>
  </div>
</div>
<!-- /skins -->

眯起眼睛看：把颜色全部去掉，家族仍然分得开。这就是皮肤的及格线——它必须扛得住灰度，
因为世界上一半的图就是这样被印出来的。

---

## 四、通用的规矩

- **数据一律等宽数字。** `font-variant-numeric: tabular-nums`。旧式数字在文章里漂亮，
  在坐标轴上是陷阱——1 和 7 在基线上下跳舞。侘寂和印刷装帧可以在正文用，图表里永远
  不行。
- **密度跟着彩度预算走。** 安静的色板挣到空气（北欧、侘寂、莫兰迪是 *airy*）；吵的
  色板收紧（孟菲斯、霓虹是 *compact*）。又吵又空读起来像没做完；又静又挤读起来像
  道歉。
- **一次字重跳跃，不是两次。** 从瑞士到孟菲斯，上面每个家族都只用正文之上恰好一档
  的粗字重。第二跳是第二个声音，图表养不起对话。
- **圆角是方言。** 0–2px 说印刷和仪器；6–8px 说产品；14px 以上说消费级的软；胶囊说
  玩。一张画布混方言要有理由——这里只有孟菲斯有。
- **网格线永远比数据安静。** 发丝线给结构，点线给引导，无线给自信。网格比系列还重，
  是图在承认自己无话可说。

---

## 五、主题至此完整

第三根轴有了名字，draw 的主题系统就闭合了：

```text
theme = 结构(十三选一) × 锚(0–360°) × 皮肤(绑定结构)
```

一组三个 URL 参数，产物全部校验，组合天生协调。这是主题*库*和主题*系统*的差别——
也是 [选择 SKILL](../03-chart-schemes/cn.md) 将来替 agent 做选择时，菜单上的全部内容。

---

## 六、接着读

| | |
| --- | --- |
| [色相锚](../04-hue-anchors/cn.md) | 第二根轴，带穿上身的例子 |
| [图表风格方案](../03-chart-schemes/cn.md) | 本表打扮的那些结构 |
| [怎么读一套色板](../../1-overview/02-reading-a-palette/cn.md) | 颜色那根轴，从头讲起 |
