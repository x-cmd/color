---
x-title: GitHub 场景的图表配色 —— 现状与建议
x-desc: 审计 x-cmd/draw 现行色板（shadcn 蓝阶 + Tailwind 500 —— 就是那套"科技蓝"），列出 github.com 作为画布的四条硬约束，并给出建议：GitHub 原生 Primer 方案，宽版与单色信号作备选。
x-sidebar: GitHub 图表配色
x-keywords: GitHub 配色, README 图表, primer colors, github 暗色模式, 图表配色建议, 科技蓝, github charts
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: 'GitHub 场景的图表配色 —— 现状与建议'
      inLanguage: 'zh-CN'
      about: '对 x-cmd/draw 在 github.com 嵌入场景下的色板审计'
---

# GitHub 场景的图表配色 —— 现状与建议

---

draw 的图大多活在用户所在的地方：README、issue、PR——github.com。这页画布比看上去苛刻，
而现行默认色板虽然称职，却是平台上每个开发者工具都在穿的那套西装。本页审计现状、
摆明约束、给出该发什么。

---

## 一、场景 —— 四条约束

1. **两种底，一张图。** GitHub 把同一张 `<img>` 渲染在 `#FFFFFF`（浅色）和 `#0D1117`
   （深色）上。透明画布的图必须两处都活；在深底上好看的浅色系列，到浅底上就消失。
2. **平台有房色。** 链接、合并、issue、review——github.com 本来就被 Primer 的功能色涂满。
   协调的图读起来是*内容*，冲突的图读起来是*广告*。
3. **截图会流浪。** README 里的图一周之内就会出现在 Slack、演讲和博客里——落在你从没
   选过的底上。中段明度是唯一的保险。
4. **变通办法存在，但要付语法。** GitHub 支持 `<picture>` 配 `prefers-color-scheme`，
   双变体可行——代价是九行嵌入语法。多数用户只会贴一行的 `<img>`，所以默认色板必须
   单图可用。

---

## 二、现状 —— 科技蓝人群

x-cmd/draw 今天发的东西，从样式源头（`src/styles/common.ts`）蒸馏：shadcn 蓝阶
（`#8EC6FF…#0E3994`）、Tailwind 500 档的绿/琥珀/紫做多系列（`#10B981`、`#F59E0B`、
`#8B5CF6`）、再加暗底卡片用的青/紫发光组：

<!-- series:tech-blue:cn -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#3B82F6"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#10B981"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#F59E0B"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#8B5CF6"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#22D3EE"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#A78BFA"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#F43F5E"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#579DFF"></div></div>

| 色块 | 色值 | HSL | OKLCH | 对黑字 | 对白字 |
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

审计，三行说完：

- **中段成员没问题。** 500 档的蓝/绿/紫扛得住文字、也扛得住两种底——图表在深色
  hero 卡上好看就是这个原因。
- **发光组成员只在暗色可用。** 青与浅紫对白底只有约 2:1——在浅色 README 上糊掉，
  而 README 多数是浅色的。
- **这个样子就是人群。** Tailwind 500 加 shadcn 阶，正是隔壁开发者工具发的东西。没
  有什么错，也没有什么被记住。用户给它的词——乏味——诊断准确：那是所有人的默认
  西装。

---

## 三、建议 —— 穿平台的衣服

GitHub 上最强的一步棋不是更好的通用色板，而是 **GitHub 自己的**。用 Primer 的功能
强调色搭成——链接蓝、成功绿、注意橙、完成紫、危险红、赞助粉、青、注意黄——图的
骨架（墨、边线、次要色）也用 Primer 自己的 token：

<!-- series:primer:cn -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#0969DA"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#1A7F37"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#BC4C00"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#8250DF"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#CF222E"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#BF3989"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#1B7C83"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#9A6700"></div></div>

| 色块 | 色值 | HSL | OKLCH | 对黑字 | 对白字 |
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

为什么在这个平台它赢：

- **原生，而不是新奇。** 这些就是 GitHub 用来表示"已合并""issue""review"的颜色。
   穿它的图读起来是页面的一部分——反冲突论证的反面。
- **构造上双底通吃。** 每个成员都在中段明度带（OKLCH `L` 0.45–0.6），因为 Primer
   本来就是为"两种底上的文字"设计它们的。一行 `<img>` 在两个主题里都直接能用。
- **不再是另一份蓝。** 八个成员里只有一个是 GitHub 蓝。看腻的科技蓝没了，换成
   平台自己的语义光谱。
- **诚实的代价，写明。** 在 GitHub 之外，你穿的是别人家的房色——本方案的
   [字体与间距](../05-type-and-spacing/cn.md)条目就是这么写的，并把备选钉在旁边。

---

## 四、备选

- **[宽版](../03-chart-schemes/cn.md)** —— 目标是*被记住*而不是原生时用：暖新闻纸系列、
  印刷安全，和任何 README 图都明显不同。编辑式的对照项。
- **[单色信号](../03-chart-schemes/cn.md)** —— README 里最常见的图：一个数带一段历史。
  灰阶加一个信号红，高亮即故事。
- **磷光纸锚到 GitHub 蓝** —— 品牌选项：把 draw 自家方案[旋转](../04-hue-anchors/cn.md)
  到客户的色相，骨头还是 x-cmd 的。

---

## 五、暗色策略，按成本排序

1. **默认发中段明度**（上面的 Primer）——一张图、两种底、零语法。这应该是 README
   默认。
2. **卡片模式** —— draw 的白卡画布在暗色模式里自带底。hero 图合适；一排五张就重了。
3. **双变体 `<picture>`** —— 门面图表专用，生成 `scheme=light|dark` 两个 URL，让
   README 自己切：

   ```html
   <picture>
     <source media="(prefers-color-scheme: dark)"
             srcset="https://x-cmd.com/draw?type=hbar&scheme=dark&…">
     <img src="https://x-cmd.com/draw?type=hbar&…">
   </picture>
   ```

---

## 六、接着读

| | |
| --- | --- |
| [图表风格方案](../03-chart-schemes/cn.md) | 建议所出自的完整方案库 |
| [字体与间距](../05-type-and-spacing/cn.md) | 让 GitHub 图保持原生的皮肤 |
| [色相锚](../04-hue-anchors/cn.md) | 把任何方案重锚到品牌色相 |
