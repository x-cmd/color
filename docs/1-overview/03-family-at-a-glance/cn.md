---
x-title: 七个系列一眼看懂
x-desc: 七个色系放在一页里——地图、对比表、按用途选，以及每个系列用自家颜色渲染的同一套界面实例。
x-sidebar: 七个系列一眼看懂
x-keywords: 色系对比, 马卡龙 vs 莫兰迪, 配色选择, 配色实例, ui 配色示例, colour families compared, palette examples
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '七个系列一眼看懂'
      inLanguage: 'zh-CN'
      about: '七个色系的对比与选择'
---

# 七个系列一眼看懂

---

七个系列，一页讲完。如果你知道要做什么，第三节帮你缩到候选；如果你只知道手上有什么——一个
logo、一张照片、一个现有品牌——第五节从那里倒推。第四节把七个系列渲染成同一套界面，各穿自家
颜色，让你用眼睛而不是数字来判断。

---

## 一、地图

两条轴几乎把七个系列完全分开：**底有多浅**，以及**这个系列花掉多少颜色**（主色的平均彩度）。

```text
                平均彩度 →
                0.03   0.05   0.07   0.19
   浅底  0.87  莫兰迪  北欧   马卡龙
   中底  0.71                瑞士*       孟菲斯
   深底  0.68                                    霓虹

   * 瑞士中立在颜色上几乎零预算是刻意的——
     它那一个信号红是规矩，不是额度。
```

三个系列是浅色系（马卡龙、莫兰迪、北欧），靠彩度和温度区分——马卡龙保住色相的可辨识度，莫兰迪
把每个色相往灰里拽，北欧整体偏冷再用暖色救。两个系列吵（孟菲斯、霓虹），靠站的底区分——白昼
对黑夜。侘寂独自坐在中段：不浅不吵，别的系列冷的地方它暖。

---

## 二、对比表

<!-- families:cn -->
| 系列 | 平均明度 (L) | 平均彩度 (C) | 色相跨度 | 主色数 | 气质 | 适合 | 不适合 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 马卡龙 | 0.87 | 0.07 | 7 | 7 | 甜、软、俏皮 | 消费级应用、餐饮、童品、季节性活动、引导页与空状态 | 金融看板、密集数据表、法律或医疗信息，以及任何要求快速读数的场景 |
| 莫兰迪 | 0.78 | 0.03 | 4 | 7 | 安静、耐看、有质感 | 编辑式排版、作品集与画廊、生活方式品牌、克制的看板、长文阅读 | 需要唯一显性动作的界面，或期待鲜艳活力的受众 |
| 瑞士中立 | 0.71 | 0.06 | 1 | 4 | 精确、克制、理性 | 出版与编辑、文档、建筑与设计事务所、数据报告、票务与导视 | 需要温度或趣味的品牌，以及面向儿童的产品 |
| 北欧 | 0.79 | 0.05 | 4 | 7 | 平静、干净、通透 | SaaS 与开发者工具、医疗、旅行与酒店、作品集、文档站 | 需要温度或紧迫感的品牌，以及浅色会糊掉的密集看板 |
| 侘寂 | 0.61 | 0.04 | 4 | 5 | 质朴、诚实、有岁月感 | 家具与室内、手作与手工品、食品品牌、健康生活、慢生活刊物 | 需要显得崭新、技术或高速的产品 |
| 孟菲斯 | 0.72 | 0.19 | 6 | 6 | 喧闹、反讽、好玩 | 年轻品牌、活动与音乐、想要「刚发布」感的产品、插画与编辑点缀 | 强调可信度的领域：金融、医疗、政务与企业采购 |
| 霓虹 | 0.68 | 0.18 | 6 | 6 | 带电、夜间、人造 | 夜生活、音乐与游戏、要有锋芒的开发者工具、作品集与落地页、终端类产品 | 长文阅读、表单、打印，以及任何需要日光下清晰度的场景 |
<!-- /families -->

先读"气质"列，它筛得最快。再拿"适合"对着你要做的东西，拿"不适合"对着你不能弄坏的东西。

---

## 三、按用途选

| 如果你在做…… | 从这里开始 | 接着读 |
| --- | --- | --- |
| 消费级应用、餐饮品牌、任何面向儿童的东西 | 马卡龙 | [马卡龙的实际应用](../../2-macaron/04-macaron-in-practice/cn.md) |
| 作品集、画廊、编辑排版或长文阅读产品 | 莫兰迪 | [莫兰迪的实际应用](../../3-morandi/04-morandi-in-practice/cn.md) |
| 文档、出版、数据报告或导视系统 | 瑞士中立 | [瑞士中立的实际应用](../../4-swiss-neutral/04-swiss-neutral-in-practice/cn.md) |
| SaaS 产品、开发者工具、医疗界面 | 北欧 | [北欧的实际应用](../../5-nordic/04-nordic-in-practice/cn.md) |
| 手作商品、室内、食品包装、慢生活刊物 | 侘寂 | [侘寂的实际应用](../../6-wabi-sabi/04-wabi-sabi-in-practice/cn.md) |
| 年轻品牌、活动、一场发布 | 孟菲斯 | [孟菲斯的实际应用](../../7-memphis/04-memphis-in-practice/cn.md) |
| 夜生活、游戏、音乐、要锋芒的作品集 | 霓虹 | [霓虹的实际应用](../../8-neon/04-neon-in-practice/cn.md) |

两行都命中时，对比文章就是裁决——每个系列的第三篇，比较的都是最容易和它混淆的邻居。

---

## 四、实例长廊 —— 同一套界面，七种穿法

下面每个示例都由该系列的色板生成：同样的按钮、标签、统计卡、图表条和提示条，穿那个系列的
颜色、守它的对比度规矩。统计卡里的数字没有意义，颜色有。

### 马卡龙

<!-- demo:macaron:cn -->
<div style="border:1px solid #D7D5D3;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#FFAAA5;color:#000000;font-size:13px;font-weight:600">马卡龙 · 甜、软、俏皮</div>
  <div style="padding:16px;background:#FFFDFB">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFAAA5;color:#000000;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #4A4045;color:#4A4045;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFF8FB;color:#8C7F84;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#F8C8DC;color:#000000;font-size:12px">草莓牛奶</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A8E6CF;color:#000000;font-size:12px">薄荷</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C3B1E1;color:#000000;font-size:12px">薰衣草</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFF1A8;color:#000000;font-size:12px">柠檬</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFD3B6;color:#000000;font-size:12px">蜜桃</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#AED6F1;color:#000000;font-size:12px">天空</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF8FB"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#EDFFF8"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FBF9FF"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #8C7F84;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#F8C8DC"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#A8E6CF"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#C3B1E1"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#FFF1A8"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#FFD3B6"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#AED6F1"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFF8F8;border-left:3px solid #FFAAA5;color:#000000;font-size:13px"><strong>提示</strong> · 粉彩糖果色：明度高、饱和度清亮而不刺眼，色相偏向粉、薄荷与奶油。读起来甜、软、亲近。</div>
    <div style="margin-top:10px;font-size:11px;color:#8C7F84">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

### 莫兰迪

<!-- demo:morandi:cn -->
<div style="border:1px solid #CECBC6;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#8C7A6E;color:#000000;font-size:13px;font-weight:600">莫兰迪 · 安静、耐看、有质感</div>
  <div style="padding:16px;background:#F5F2ED">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#8C7A6E;color:#000000;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #3F3A38;color:#3F3A38;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#F0FFD7;color:#8A817A;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A3B18A;color:#000000;font-size:12px">鼠尾草</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#DAD7CD;color:#000000;font-size:12px">陶土</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#B0B7C6;color:#000000;font-size:12px">雾蓝</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C4AFA1;color:#000000;font-size:12px">灰褐</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C8B6C6;color:#000000;font-size:12px">灰藕荷</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#E3DDD3;color:#000000;font-size:12px">燕麦</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F0FFD7"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FDFAF0"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F8FAFF"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #8A817A;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#A3B18A"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#DAD7CD"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#B0B7C6"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#C4AFA1"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#C8B6C6"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#E3DDD3"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#D8C4B7;border-left:3px solid #8C7A6E;color:#000000;font-size:13px"><strong>提示</strong> · 带灰的克制色：每个色相都被拉向中性，谁也不出声。读起来安静、耐看、有手感。</div>
    <div style="margin-top:10px;font-size:11px;color:#8A817A">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

### 瑞士中立

<!-- demo:swiss-neutral:cn -->
<div style="border:1px solid #D7D7D7;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#FF0000;color:#000000;font-size:13px;font-weight:600">瑞士中立 · 精确、克制、理性</div>
  <div style="padding:16px;background:#FFFFFF">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FF0000;color:#000000;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #000000;color:#000000;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FAFAFA;color:#9B9B9B;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#F5F5F5;color:#000000;font-size:12px">面板</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#E0E0E0;color:#000000;font-size:12px">分隔线</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#333333;color:#FFFFFF;font-size:12px">深灰</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF0000;color:#000000;font-size:12px">信号红</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FAFAFA"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FAFAFA"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#757575"><div style="font-size:20px;font-weight:700;color:#FFFFFF">1,904</div><div style="font-size:12px;color:#FFFFFF;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #9B9B9B;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#F5F5F5"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#E0E0E0"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#333333"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#FF0000"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFC3B9;border-left:3px solid #FF0000;color:#000000;font-size:13px"><strong>提示</strong> · 近乎单色的系统：纸、白黑、一条灰阶，再加恰好一个信号色。做功的是版式，不是颜色。</div>
    <div style="margin-top:10px;font-size:11px;color:#9B9B9B">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

### 北欧

<!-- demo:nordic:cn -->
<div style="border:1px solid #D0D1D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#D9A38F;color:#000000;font-size:13px;font-weight:600">北欧 · 平静、干净、通透</div>
  <div style="padding:16px;background:#F7F9FA">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#D9A38F;color:#000000;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #2E3A40;color:#2E3A40;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#F6FBFE;color:#2E3A40;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#E8EDF0;color:#000000;font-size:12px">霜</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C9D6DE;color:#000000;font-size:12px">冰川</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#9FB6C4;color:#000000;font-size:12px">峡湾</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#6B8FA3;color:#000000;font-size:12px">深峡湾</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#D9A38F;color:#000000;font-size:12px">陶土橘</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A9BC8F;color:#000000;font-size:12px">桉木</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F6FBFE"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F5FBFF"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#F5FBFF"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #2E3A40;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#E8EDF0"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#C9D6DE"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#9FB6C4"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#6B8FA3"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#D9A38F"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#A9BC8F"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFF9F6;border-left:3px solid #D9A38F;color:#000000;font-size:13px"><strong>提示</strong> · 冷、浅、通透：近白的底、冰川般的蓝，再点缀少量暖色，免得发冷。</div>
    <div style="margin-top:10px;font-size:11px;color:#2E3A40">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

### 侘寂

<!-- demo:wabi-sabi:cn -->
<div style="border:1px solid #C1B9AF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#8C6D5B;color:#FFFFFF;font-size:13px;font-weight:600">侘寂 · 质朴、诚实、有岁月感</div>
  <div style="padding:16px;background:#E8E0D5">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#8C6D5B;color:#FFFFFF;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #3B342E;color:#3B342E;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFF9F1;color:#3B342E;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#C9BBA6;color:#000000;font-size:12px">沙</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#A08C7D;color:#000000;font-size:12px">陶土</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#8C6D5B;color:#FFFFFF;font-size:12px">树皮</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#7D8471;color:#000000;font-size:12px">苔</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#4A5A45;color:#FFFFFF;font-size:12px">林</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF9F1"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#EDD7C7"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#D8B6A2"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #3B342E;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#C9BBA6"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#A08C7D"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#8C6D5B"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#7D8471"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#4A5A45"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#D8B6A2;border-left:3px solid #8C6D5B;color:#000000;font-size:13px"><strong>提示</strong> · 取自泥土的颜色，带着材质的纹理：石灰墙、沙、陶土、苔与树皮。低彩度、偏暖、不抛光。</div>
    <div style="margin-top:10px;font-size:11px;color:#3B342E">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

### 孟菲斯

<!-- demo:memphis:cn -->
<div style="border:1px solid #D7D7D7;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#FF4B8B;color:#000000;font-size:13px;font-weight:600">孟菲斯 · 喧闹、反讽、好玩</div>
  <div style="padding:16px;background:#FFFFFF">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FF4B8B;color:#000000;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#FFFBE6;color:#1A1A1A;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFE14D;color:#000000;font-size:12px">黄</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF9F1C;color:#000000;font-size:12px">橙</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#2EC4B6;color:#000000;font-size:12px">青绿</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#3A86FF;color:#000000;font-size:12px">蓝</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF4B8B;color:#000000;font-size:12px">亮粉</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#8338EC;color:#FFFFFF;font-size:12px">紫</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFFBE6"><div style="font-size:20px;font-weight:700;color:#000000">12.4k</div><div style="font-size:12px;color:#000000;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FFF9F3"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#E8FFFB"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #1A1A1A;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#FFE14D"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#FF9F1C"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#2EC4B6"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#3A86FF"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#FF4B8B"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#8338EC"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#FFDBE3;border-left:3px solid #FF4B8B;color:#000000;font-size:13px"><strong>提示</strong> · 高彩度的原色与亮粉，压在黑白之上，再加波浪线、网格和撞色几何。就是要吵。</div>
    <div style="margin-top:10px;font-size:11px;color:#1A1A1A">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

### 霓虹

<!-- demo:neon:cn -->
<div style="border:1px solid #3C3E44;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif">
  <div style="padding:10px 16px;background:#00F0FF;color:#000000;font-size:13px;font-weight:600">霓虹 · 带电、夜间、人造</div>
  <div style="padding:16px;background:#05060A">
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#00F0FF;color:#000000;font-size:13px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #E6EDF3;color:#E6EDF3;font-size:13px">次要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#000104;color:#8B98A5;font-size:13px">已禁用</span>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#131722;color:#FFFFFF;font-size:12px">面板</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#00F0FF;color:#000000;font-size:12px">霓虹青</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FF2E88;color:#000000;font-size:12px">霓虹品红</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#39FF14;color:#000000;font-size:12px">荧光酸绿</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#9B5CFF;color:#000000;font-size:12px">霓虹紫</span><span style="display:inline-block;padding:4px 12px;border-radius:999px;background:#FFB800;color:#000000;font-size:12px">霓虹琥珀</span></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px"><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#2F3440"><div style="font-size:20px;font-weight:700;color:#FFFFFF">12.4k</div><div style="font-size:12px;color:#FFFFFF;opacity:.75">活跃</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#EEFEFF"><div style="font-size:20px;font-weight:700;color:#000000">+8.2%</div><div style="font-size:12px;color:#000000;opacity:.75">新增</div></div><div style="flex:1;min-width:110px;padding:12px 14px;border-radius:10px;background:#FF91B2"><div style="font-size:20px;font-weight:700;color:#000000">1,904</div><div style="font-size:12px;color:#000000;opacity:.75">回访</div></div></div>
    <div style="display:flex;gap:10px;align-items:flex-end;border-bottom:1px solid #8B98A5;padding:4px 2px 0;margin-bottom:12px;height:80px"><div style="width:26px;height:72px;border-radius:4px 4px 0 0;background:#131722"></div><div style="width:26px;height:44px;border-radius:4px 4px 0 0;background:#00F0FF"></div><div style="width:26px;height:58px;border-radius:4px 4px 0 0;background:#FF2E88"></div><div style="width:26px;height:32px;border-radius:4px 4px 0 0;background:#39FF14"></div><div style="width:26px;height:50px;border-radius:4px 4px 0 0;background:#9B5CFF"></div><div style="width:26px;height:26px;border-radius:4px 4px 0 0;background:#FFB800"></div></div>
    <div style="padding:10px 14px;border-radius:8px;background:#131722;border-left:3px solid #00F0FF;color:#FFFFFF;font-size:13px"><strong>提示</strong> · 近黑的底布上点亮荧光强调色：青、品红、荧光酸绿。之所以发光，是因为四周够黑。</div>
    <div style="margin-top:10px;font-size:11px;color:#8B98A5">同一套界面,穿这个系列的颜色 —— 由色板生成</div>
  </div>
</div>
<!-- /demo -->

---

## 五、从手上已有的东西倒推

倒推往往比凭感觉选更诚实：

- **从 logo 或品牌标识。** 取它的主色，算它落在 OKLCH 的哪里。`C` 0.03–0.06 的标识属于莫兰迪
  或北欧；`C` 0.12 以上，孟菲斯或霓虹。系列补上的，是标识从没说明的那整套外围系统。
- **从照片。** 把你真正会用的照片铺在上面那个长廊旁边。白底产品摄影借马卡龙或北欧；暖调、有
  材质、有手感的摄影借侘寂；夜景摄影借霓虹。
- **从现有界面。** 数强调色、量色域带——方法在[怎么读一套色板](../02-reading-a-palette/cn.md)。
  与其说你在选一个系列，不如说你在查明你已经半个身子在哪个系列里。

---

## 六、几个坑

- **凭喜欢的颜色选。** 问题不是你喜欢哪个系列，而是你的内容住得进哪个系列。密集数字杀死
  马卡龙；可信度杀死孟菲斯。
- **一个表面上混系列。** 莫兰迪页面配孟菲斯横幅，那是两个产品。一个表面一个系列；借强调色
  只向邻居借，而且只借一次。
- **忘了底。** 七个里五个按浅底设计。如果你的产品以暗色为主，你是在霓虹和"北欧暗色改造"之间
  选——那是另一个问题，不是把色板反色一下。

---

## 七、接着读

| | |
| --- | --- |
| [什么是色系风格](../01-what-is-a-color-family/cn.md) | 地图背后的四条约束 |
| [怎么读一套色板](../02-reading-a-palette/cn.md) | 每个系列里那些表怎么读 |
| 任意系列的完整文章 | 从它的来历篇开始，入口见[仓库索引](https://github.com/x-cmd/color) |
