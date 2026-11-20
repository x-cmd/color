---
x-title: 印刷装帧 —— 一种编辑式 UI 方案
x-desc: 从 szum.io 的公开 CSS token 蒸馏出的 UI 方案——暖纸底、黑做强调、金与锈红两个点睛色。它为什么成立，以及如何借结构而不抄 token。
x-sidebar: 印刷装帧
x-keywords: szum, 印刷装帧, 编辑风格, 金色, 锈红, 纸底, letterpress, editorial ui
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '印刷装帧 —— 一种编辑式 UI 方案'
      inLanguage: 'zh-CN'
      about: '从 szum.io 蒸馏出的编辑式 UI 方案'
---

# 印刷装帧 —— 一种编辑式 UI 方案

---

这个方案是一份**用色值写成的竞品分析**。szum.io 是与 x-cmd/draw 同场的图表设计系统，
它的视觉识别是同领域里执行得较好的编辑式方案之一。下面所有数值都来自它公开的 CSS
自定义属性——是事实，不是秘密——然后再还原成让它成立的那套结构。

值得学的是结构。token 本身不该整套抄到竞品上：不是因为色值清单有版权（没有），而是
穿着竞争者的脸，等于替对方做一个"混淆"的论据，任何工具都不需要这个。

---

## 一、这套方案

暖纸底、中性黑做强调、恰好两个矿物点睛色。

<!-- palette:letterpress:cn -->
| 色块 | 名称 | 色值 | 角色 | HSL | OKLCH | 白字对比度 | 黑字对比度 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#F8F8F6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 纸 | `#F8F8F6` | 底色 | 60° 12% 97% | 0.98 0.00 106° | 1.06 (fail) | 19.75 (AAA) |
| <span style="background-color:#F0EFED">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 嵌底 | `#F0EFED` | 主色 | 40° 9% 94% | 0.95 0.00 85° | 1.15 (fail) | 18.27 (AAA) |
| <span style="background-color:#D4A853">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 金 | `#D4A853` | 强调 | 40° 60% 58% | 0.76 0.12 82° | 2.20 (fail) | 9.53 (AAA) |
| <span style="background-color:#B84233">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 锈红 | `#B84233` | 强调 | 7° 57% 46% | 0.54 0.16 30° | 5.43 (AA) | 3.87 (AA-large) |
| <span style="background-color:#171717">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 墨 | `#171717` | 文字 | 0° 0% 9% | 0.20 0.00 90° | 17.93 (AAA) | 1.17 (fail) |
| <span style="background-color:#6B6B6B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 灰 | `#6B6B6B` | 次要 | 0° 0% 42% | 0.53 0.00 90° | 5.33 (AA) | 3.94 (AA-large) |
<!-- /palette -->

<!-- demo:letterpress:cn -->
<div style="border:1px solid #D0D0CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#D4A853;color:#000000;font-size:13px;font-weight:600">印刷装帧 · 编辑、装帧、克制</div>
  <div style="padding:16px;background:#F8F8F6">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#D4A853;color:#000000;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #171717;color:#171717;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FBFAF8;color:#6B6B6B;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#F0EFED;color:#000000;font-size:12px">嵌底</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#D4A853;color:#000000;font-size:12px">金</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#B84233;color:#FFFFFF;font-size:12px">锈红</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FBFAF8"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF9F0"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FF9786"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #6B6B6B;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#F0EFED"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#D4A853"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#B84233"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFF9F0;border-left:3px solid #D4A853;color:#000000;font-size:13px"><strong>提示</strong> · 从 szum.io 公开 CSS token 蒸馏出的编辑式 UI 方案：暖纸底、中性黑做强调、金与锈红恰好两个矿物点睛色。</div>
    <div style="margin-top:10px;font-size:11px;color:#6B6B6B">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

读法：**瑞士中立的骨架**（无彩底、墨色做强调）加上**侘寂的温度**（纸的暖、两个点睛
色）。这是装帧的传统——奶油纸上的黑墨、书脊上的烫金、锈红的章节标记。

---

## 二、它为什么成立

- **黑做强调是一步狠棋。** 竞品都伸手去拿品牌蓝。让墨色本身当按钮色，等于宣告这个
  产品信任自己的排版；金和锈红于是被读成"策展"，而不是"品牌"。
- **纸是暖的，不是白。** `#F8F8F6`，OKLCH `0.979 0.003 106`——几乎没有色相，但这点暖
  让黑看上去像油墨而不是屏幕。纯白会被读成"应用"；这个会被读成"出版物"。
- **两个点睛色，配给制。** 金 `#D4A853` 表示价值（"Creator"、高亮），锈红 `#B84233`
  表示叙事（数据、强调）。对白分别是 2.20 和 5.43，谁都扛不动正文——它们是印记，不是
  墨，而这正是该站对它们的用法。

<!-- band:letterpress:cn -->
| 维度 | 口径 | 取值 |
| --- | --- | --- |
| 明度 | OKLCH L | 0.54 – 0.95 |
| 彩度 | OKLCH C | 0.00 – 0.16 |
| 色相跨度 | 独立色相数（每 30° 一档） | 2 |
| 平均明度 | OKLCH L 均值 | 0.75 |
| 平均彩度 | OKLCH C 均值 | 0.09 |
| 参考：HSL 饱和度均值 | HSL 口径，粉彩上会明显高估 | 42% |
<!-- /band -->

---

## 三、用结构，别抄 token

先说法律位置，因为这问题总会被问：**一组十六进制色值不构成版权。** 版权保护表达，
不保护事实与方法；一小串色值在任何主要法系都达不到独创性门槛。颜色*商标*存在
（Tiffany 蓝），但需要注册与显著性，"黑+金+锈红"永远够不上。

实操位置更窄：**商业外观与反不正当竞争**。把版式、字体、token 整套克隆到竞品上，
就等于邀请对方主张混淆。借*结构*——暖底、墨强调、两个配给点睛色——则无人能诉，
因为那结构是五个世纪印刷业的公共财产。

证明就是[磷光纸](../02-scheme-phosphor/cn.md)：同等的纪律，完全不同的血统。

---

## 四、接着读

| | |
| --- | --- |
| [磷光纸](../02-scheme-phosphor/cn.md) | 反提案——同样的克制，终端血统 |
| [图表风格方案](../03-chart-schemes/cn.md) | 图表本身的系列配色 |
| [瑞士中立](../../4-swiss-neutral/01-swiss-neutral-origin/cn.md) | 这套方案穿的骨架 |
| [侘寂](../../6-wabi-sabi/01-wabi-sabi-origin/cn.md) | 温度的来源 |
