---
x-title: 图表风格方案
x-desc: 四套图表系列配色——宽版、粉报、色盲安全、单色信号——以及每个图表方案必须回答的五个问题。为 x-cmd/draw 的风格上限而写。
x-sidebar: 图表方案
x-keywords: 图表配色, 系列色, 分类色板, 色盲安全, 财经图表, okabe-ito, chart palette, categorical palette
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '图表风格方案'
      inLanguage: 'zh-CN'
      about: '用于图表渲染的分类系列配色'
---

# 图表风格方案

---

UI 方案由落地页评判，**图表方案**由它渲染的第一百万张图评判。这个差别改变了要紧的
东西：画布退后，*系列色*上前，问题变成工程问题——多系列可辨性、色盲安全、印刷、
深底。本页收四套方案，各自给出不同回答，外加上一页[磷光纸](../02-scheme-phosphor/cn.md)
的系列色。

---

## 一、图表方案要决定什么

1. **画布**——浅纸、带色纸、还是深底。其余一切相对它评判。
2. **系列数**——几个颜色还分得开。六个是诚实，八个是雄心，十二个是图例在撒谎。
3. **彩度纪律**——一条带（如磷光纸的 `C` 0.09–0.25）让任何图出厂即协调；混带的
   色板让每张图都是一次新事故。
4. **色盲安全**——约 8% 的男性分不开红绿。要么色板按 CVD 排序（okabe-ito），要么
   承认损失并写明。
5. **印刷**——浅黄浅青在办公打印机上会死。印刷安全的系列把 `L` 压在 0.75 以下，
   且每个系列描得出足够深的边。

---

## 二、宽版 —— 严肃大报

暖新闻纸底，砖红与深蓝讲故事。新闻的权威感，彩度全程印刷安全——所有系列都落在
`C` 0.08–0.13 之间，这也是它新闻纸和激光碳粉都活得下来的原因。

<!-- series:broadsheet:cn -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#B5442C"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#175E8C"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#3E9C8C"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#C99B2F"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#6B5B95"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#4E7A4E"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#A65E4E"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#8C8578"></div></div>

| 色块 | 色值 | HSL | OKLCH | 对黑字 | 对白字 |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#B5442C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#B5442C` | 11° 61% 44% | 0.54 0.15 34° | 3.83 (AA-large) | 5.49 (AA) |
| <span style="background-color:#175E8C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#175E8C` | 204° 72% 32% | 0.46 0.10 243° | 3.02 (AA-large) | 6.96 (AA) |
| <span style="background-color:#3E9C8C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#3E9C8C` | 170° 43% 43% | 0.63 0.09 180° | 6.34 (AA) | 3.31 (AA-large) |
| <span style="background-color:#C99B2F">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#C99B2F` | 42° 62% 49% | 0.71 0.13 84° | 8.21 (AAA) | 2.56 (fail) |
| <span style="background-color:#6B5B95">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#6B5B95` | 257° 24% 47% | 0.51 0.09 296° | 3.56 (AA-large) | 5.91 (AA) |
| <span style="background-color:#4E7A4E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#4E7A4E` | 120° 22% 39% | 0.54 0.08 144° | 4.22 (AA-large) | 4.98 (AA) |
| <span style="background-color:#A65E4E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#A65E4E` | 11° 36% 48% | 0.56 0.10 33° | 4.33 (AA-large) | 4.85 (AA) |
| <span style="background-color:#8C8578">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#8C8578` | 39° 8% 51% | 0.62 0.02 83° | 5.74 (AA) | 3.66 (AA-large) |
<!-- /series -->

用在：报告、编辑数据版面、图表是*证据*而非装饰的一切场合。

---

## 三、粉报 —— 财经版面

粉报纸媒：鲑粉底上的酒红与牛津蓝。纸本身就是数据叙事的一部分——鲑粉上的财经图
读起来是*机构*，同样的图放在纯白上读起来是创业公司。

<!-- series:salmon:cn -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#8F1D3E"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#0F6E75"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#0E93C9"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#F07F2E"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#2E8A7A"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#80855C"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#5A648B"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#B48A9E"></div></div>

| 色块 | 色值 | HSL | OKLCH | 对黑字 | 对白字 |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#8F1D3E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#8F1D3E` | 343° 66% 34% | 0.43 0.15 10° | 2.41 (fail) | 8.70 (AAA) |
| <span style="background-color:#0F6E75">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0F6E75` | 184° 77% 26% | 0.49 0.08 203° | 3.51 (AA-large) | 5.99 (AA) |
| <span style="background-color:#0E93C9">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0E93C9` | 197° 87% 42% | 0.63 0.13 234° | 6.04 (AA) | 3.48 (AA-large) |
| <span style="background-color:#F07F2E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#F07F2E` | 25° 87% 56% | 0.71 0.16 52° | 7.78 (AAA) | 2.70 (fail) |
| <span style="background-color:#2E8A7A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#2E8A7A` | 170° 50% 36% | 0.58 0.09 179° | 5.03 (AA) | 4.17 (AA-large) |
| <span style="background-color:#80855C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#80855C` | 67° 18% 44% | 0.60 0.06 114° | 5.43 (AA) | 3.87 (AA-large) |
| <span style="background-color:#5A648B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#5A648B` | 228° 21% 45% | 0.51 0.06 273° | 3.63 (AA-large) | 5.78 (AA) |
| <span style="background-color:#B48A9E">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#B48A9E` | 331° 22% 62% | 0.68 0.06 349° | 7.07 (AAA) | 2.97 (fail) |
<!-- /series -->

用在：商业与财经图表、年报式导出。酒红兼任发散图里的负向色，牛津蓝兼任正向。

---

## 四、色盲安全 —— 无障碍标准

**原样收录**，因为它的价值就在校准本身。Okabe & Ito 的八色组合是科研出版事实上的
色盲安全分类色标准：在绿色盲、红色盲、蓝色盲下任何两色仍可分。

<!-- series:okabe-ito:cn -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#E69F00"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#56B4E9"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#009E73"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#F0E442"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#0072B2"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#D55E00"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#CC79A7"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#000000"></div></div>

| 色块 | 色值 | HSL | OKLCH | 对黑字 | 对白字 |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#E69F00">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#E69F00` | 41° 100% 45% | 0.75 0.16 77° | 9.32 (AAA) | 2.25 (fail) |
| <span style="background-color:#56B4E9">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#56B4E9` | 202° 77% 63% | 0.73 0.12 236° | 9.10 (AAA) | 2.31 (fail) |
| <span style="background-color:#009E73">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#009E73` | 164° 100% 31% | 0.62 0.13 165° | 6.14 (AA) | 3.42 (AA-large) |
| <span style="background-color:#F0E442">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#F0E442` | 56° 85% 60% | 0.90 0.17 105° | 15.88 (AAA) | 1.32 (fail) |
| <span style="background-color:#0072B2">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#0072B2` | 202° 100% 35% | 0.53 0.13 244° | 4.05 (AA-large) | 5.19 (AA) |
| <span style="background-color:#D55E00">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#D55E00` | 26° 100% 42% | 0.62 0.17 48° | 5.43 (AA) | 3.87 (AA-large) |
| <span style="background-color:#CC79A7">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#CC79A7` | 327° 45% 64% | 0.68 0.12 346° | 6.86 (AA) | 3.06 (AA-large) |
| <span style="background-color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#000000` | 0° 0% 0% | 0.00 0.00 0° | 1.00 (fail) | 21.00 (AAA) |
<!-- /series -->

用在：公共数据、科研、无障碍要紧的一切。两个诚实的警告——黄 `#F0E442` 扛不动文字
和细线（对黑仅 1.07），黑色成员是系列色不是墨。

---

## 五、单色信号 —— 一个故事，直说

七个灰加一个信号红。瑞士纪律用于数据：当图只有一句话要说，颜色就是那个感叹号，
其余全是背景。多系列场合它是错的工具——这是设计使然。

<!-- series:mono-signal:cn -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#101010"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#333333"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#555555"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#777777"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#999999"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#BBBBBB"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#DDDDDD"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#C0182B"></div></div>

| 色块 | 色值 | HSL | OKLCH | 对黑字 | 对白字 |
| --- | --- | --- | --- | --- | --- |
| <span style="background-color:#101010">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#101010` | 0° 0% 6% | 0.17 0.00 90° | 1.10 (fail) | 19.03 (AAA) |
| <span style="background-color:#333333">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#333333` | 0° 0% 20% | 0.32 0.00 90° | 1.66 (fail) | 12.63 (AAA) |
| <span style="background-color:#555555">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#555555` | 0° 0% 33% | 0.45 0.00 90° | 2.82 (fail) | 7.46 (AAA) |
| <span style="background-color:#777777">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#777777` | 0° 0% 47% | 0.57 0.00 90° | 4.69 (AA) | 4.48 (AA-large) |
| <span style="background-color:#999999">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#999999` | 0° 0% 60% | 0.68 0.00 90° | 7.37 (AAA) | 2.85 (fail) |
| <span style="background-color:#BBBBBB">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#BBBBBB` | 0° 0% 73% | 0.79 0.00 90° | 10.94 (AAA) | 1.92 (fail) |
| <span style="background-color:#DDDDDD">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#DDDDDD` | 0° 0% 87% | 0.90 0.00 90° | 15.46 (AAA) | 1.36 (fail) |
| <span style="background-color:#C0182B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | `#C0182B` | 353° 78% 42% | 0.52 0.20 23° | 3.41 (AA-large) | 6.16 (AA) |
<!-- /series -->

用在：高管摘要、单系列叙事图、印刷。信号红 `#C0182B` 对白 5.93，标注和注释都安全。

---

## 六、能做到什么程度

图表产品的上限不在更多色板——而在**方案成为一等公民**：画布+系列+字体+坐标轴
处理是一个可整体切换的定义，并像 draw 校验数据一样被校验。这里已有五套（含磷光纸
的系列）；这个模式可以推广到任何你说得出名字的血统——每套新方案就是一个下午的
OKLCH 工作，加上这本书要教的那点判断力。

色板之上的下一步是选择：一个读得懂数据形态与场景、替你选方案的 agent——这恰恰是
draw 的 SKILL 该做的事。

---

## 七、接着读

| | |
| --- | --- |
| [磷光纸](../02-scheme-phosphor/cn.md) | 为 draw 提出的方案，含它的系列色 |
| [印刷装帧](../01-scheme-letterpress/cn.md) | 编辑血统的出处 |
| [色相锚](../04-hue-anchors/cn.md) | 一套风格停在色环任何位置 —— 参数化一级 |
| [怎么读一套色板](../../1-overview/02-reading-a-palette/cn.md) | 五步审计任何系列色板 |
