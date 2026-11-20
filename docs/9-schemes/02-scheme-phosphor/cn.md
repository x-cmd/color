---
x-title: 磷光纸 —— 为 draw 提出的方案
x-desc: 印刷装帧的反提案——冷雪纸、青墨、终端信号绿做唯一强调，外加一套按 OKLCH 校准的八色图表系列。是仪器，不是印刷机。
x-sidebar: 磷光纸
x-keywords: 磷光纸, 信号绿, 图表配色, draw 主题, 终端绿, phosphor paper, chart series
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '磷光纸 —— 为 draw 提出的方案'
      inLanguage: 'zh-CN'
      about: '为 x-cmd/draw 提出的 UI 与图表方案'
---

# 磷光纸 —— 为 draw 提出的方案

---

[印刷装帧](../01-scheme-letterpress/cn.md)是印刷机，这个是**仪器**。它是为 x-cmd/draw 设计的
身份：一个活在 URL 和终端里的图表工具，开源、快。克制程度与编辑式方案相同；血统完全
不同——它暖纸的地方我们冷纸，它用中性黑的地方我们用青墨，它花两个点睛色的地方我们
只花一个。

---

## 一、这套方案

冷雪纸、青墨、终端信号绿做唯一强调、琥珀做次级印记。

<!-- palette:phosphor:cn -->
| 色块 | 名称 | 色值 | 角色 | HSL | OKLCH | 白字对比度 | 黑字对比度 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#F7F9F8">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 雪纸 | `#F7F9F8` | 底色 | 150° 14% 97% | 0.98 0.00 165° | 1.06 (fail) | 19.86 (AAA) |
| <span style="background-color:#EDF1EF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 嵌底 | `#EDF1EF` | 主色 | 150° 12% 94% | 0.95 0.01 165° | 1.14 (fail) | 18.43 (AAA) |
| <span style="background-color:#0E7C5B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 信号绿 | `#0E7C5B` | 强调 | 162° 80% 27% | 0.52 0.10 166° | 5.18 (AA) | 4.05 (AA-large) |
| <span style="background-color:#B45309">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 琥珀 | `#B45309` | 强调 | 26° 90% 37% | 0.56 0.15 49° | 5.02 (AA) | 4.18 (AA-large) |
| <span style="background-color:#0A5C44">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 深信号 | `#0A5C44` | 辅助 | 162° 80% 20% | 0.42 0.08 167° | 7.99 (AAA) | 2.63 (fail) |
| <span style="background-color:#182622">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 青墨 | `#182622` | 文字 | 163° 23% 12% | 0.25 0.02 175° | 15.68 (AAA) | 1.34 (fail) |
| <span style="background-color:#5D6B66">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 雾 | `#5D6B66` | 次要 | 159° 7% 39% | 0.51 0.02 172° | 5.58 (AA) | 3.76 (AA-large) |
<!-- /palette -->

<!-- demo:phosphor:cn -->
<div style="border:1px solid #D0D1D0;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#0E7C5B;color:#FFFFFF;font-size:13px;font-weight:600">磷光纸 · 仪器、终端、精确</div>
  <div style="padding:16px;background:#F7F9F8">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#0E7C5B;color:#FFFFFF;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #182622;color:#182622;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#F7FBF9;color:#5D6B66;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#EDF1EF;color:#000000;font-size:12px">嵌底</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#0E7C5B;color:#FFFFFF;font-size:12px">信号绿</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#B45309;color:#FFFFFF;font-size:12px">琥珀</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F7FBF9"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#6AC7A2"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFA26F"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #5D6B66;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#EDF1EF"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#0E7C5B"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#B45309"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#6AC7A2;border-left:3px solid #0E7C5B;color:#000000;font-size:13px"><strong>提示</strong> · 为 x-cmd/draw 提出的 UI 方案：冷雪纸、青墨、终端信号绿做唯一强调——是仪器,不是装帧。</div>
    <div style="margin-top:10px;font-size:11px;color:#5D6B66">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

每个值在需要的地方都过 AA：信号绿对白 5.18——按钮和正文级链接都能用；青墨 15.68。
强调色不需要吵才被看见，它需要**独一份**。

<!-- band:phosphor:cn -->
| 维度 | 口径 | 取值 |
| --- | --- | --- |
| 明度 | OKLCH L | 0.52 – 0.95 |
| 彩度 | OKLCH C | 0.01 – 0.15 |
| 色相跨度 | 独立色相数（每 30° 一档） | 2 |
| 平均明度 | OKLCH L 均值 | 0.68 |
| 平均彩度 | OKLCH C 均值 | 0.09 |
| 参考：HSL 饱和度均值 | HSL 口径，粉彩上会明显高估 | 61% |
<!-- /band -->

---

## 二、图表系列色

图表工具先被系列色板评判，然后才轮到落地页。这八个色校准在同一条带里——OKLCH
`L` 0.52–0.67、彩度 0.09–0.25——从中取色组图，**出厂即协调**，不挑深浅底。

<!-- series:phosphor:cn -->
<div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #8A8A8A;padding:6px 2px 0;height:84px;max-width:560px"><div style="flex:1;max-width:52px;height:72px;border-radius:4px 4px 0 0;background:#0E7C5B"></div><div style="flex:1;max-width:52px;height:44px;border-radius:4px 4px 0 0;background:#2563EB"></div><div style="flex:1;max-width:52px;height:58px;border-radius:4px 4px 0 0;background:#D97706"></div><div style="flex:1;max-width:52px;height:32px;border-radius:4px 4px 0 0;background:#BE185D"></div><div style="flex:1;max-width:52px;height:50px;border-radius:4px 4px 0 0;background:#7C3AED"></div><div style="flex:1;max-width:52px;height:26px;border-radius:4px 4px 0 0;background:#0E7490"></div><div style="flex:1;max-width:52px;height:40px;border-radius:4px 4px 0 0;background:#4D7C0F"></div><div style="flex:1;max-width:52px;height:62px;border-radius:4px 4px 0 0;background:#9CA3AF"></div></div>

| 色块 | 色值 | HSL | OKLCH | 对黑字 | 对白字 |
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

把这张表读成规格而不是色卡：每个色对黑字都达到 AA 以上（最浅的灰是保留给
"其他/未知"系列的），色相圆周等步走，相邻系列到第六层仍然分得开。

---

## 三、为什么是这个，而不是编辑式

诚实的回答：draw 不该穿竞争者的衣服，哪怕衣服免费。实操的回答：

- **血统本来就在。** x-cmd 是终端项目；磷光终端就是把绿打在黑上。把品牌色定为信号绿
  不是装饰决定，是*出身*决定。
- **冷底让两个产品一眼分开。** 两张落地页并排放，没人会问"这是哪家"——这就是颜色
  身份的全部意义。
- **一个强调色，仪器级。** 仪器只有一个指示灯表示"操作"；印刷机才有两个印记分别表示
  "价值"和"故事"。图表是仪器。

---

## 四、它该落在哪

三层，按回报排序：

1. **站点**——落地页、文档、编辑器外框。上面的值直接落进 CSS 自定义属性。
2. **渲染图表的默认浅色方案**——雪底、青墨文字、八系列。"图表到手即协调"本身就是
   产品功能。
3. **作为命名主题**（`t=phosphor`）与现有风格并列，`scheme=dark` 映射到同一组色相的
   反向明度——系列带就是这么选的，翻到深底仍然成立。

---

## 五、接着读

| | |
| --- | --- |
| [图表风格方案](../03-chart-schemes/cn.md) | 另外四套系列色，以及图表方案要决定什么 |
| [印刷装帧](../01-scheme-letterpress/cn.md) | 编辑式的对照项 |
| [怎么读一套色板](../../1-overview/02-reading-a-palette/cn.md) | 怎么审计任何系列色板 |
