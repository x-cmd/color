---
x-title: 霓虹 —— 色板
x-desc: 近黑底上的九个颜色：两个表面、五个荧光强调色、两个文字角色。色阶如何伪造出光晕，如何在不破坏家族的前提下派生新色，搭配规则，以及最容易犯的错。
x-sidebar: 霓虹色板
x-keywords: 霓虹色板, 霓虹配色, 强调色, 暗色板, 色阶, neon palette, neon colours, dark palette
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '霓虹 —— 色板'
      inLanguage: 'zh-CN'
      about: '霓虹色板：色阶、搭配规则与常见的错'
---

# 霓虹 —— 色板

---

九个颜色。两个是底，五个是强调色，两个承字。这就是全部色板；而有意思的地方不是这些颜色
本身，而是让九个颜色不至于变成十四个的那几条规矩。

这个家族在[来历篇](../01-neon-origin/cn.md)里说过；这一篇是参考手册。它和左右两侧的位置分别在
[霓虹 vs 马卡龙](../03-neon-vs-macaron/cn.md)和[孟菲斯 vs 霓虹](../../7-memphis/03-memphis-vs-neon/cn.md)。

---

## 一、颜色

<!-- palette:neon:cn -->
| 色块 | 名称 | 色值 | 角色 | HSL | OKLCH | 白字对比度 | 黑字对比度 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#05060A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 虚 | `#05060A` | 底色 | 228° 33% 3% | 0.12 0.01 271° | 20.25 (AAA) | 1.04 (fail) |
| <span style="background-color:#131722">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 面板 | `#131722` | 主色 | 224° 28% 10% | 0.21 0.02 269° | 17.90 (AAA) | 1.17 (fail) |
| <span style="background-color:#00F0FF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 霓虹青 | `#00F0FF` | 强调 | 184° 100% 50% | 0.87 0.15 203° | 1.41 (fail) | 14.91 (AAA) |
| <span style="background-color:#FF2E88">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 霓虹品红 | `#FF2E88` | 强调 | 334° 100% 59% | 0.66 0.24 2° | 3.50 (AA-large) | 6.00 (AA) |
| <span style="background-color:#39FF14">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 荧光酸绿 | `#39FF14` | 强调 | 111° 100% 54% | 0.87 0.29 142° | 1.36 (fail) | 15.49 (AAA) |
| <span style="background-color:#9B5CFF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 霓虹紫 | `#9B5CFF` | 强调 | 263° 100% 68% | 0.63 0.23 297° | 3.91 (AA-large) | 5.37 (AA) |
| <span style="background-color:#FFB800">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 霓虹琥珀 | `#FFB800` | 强调 | 43° 100% 50% | 0.83 0.17 81° | 1.73 (fail) | 12.11 (AAA) |
| <span style="background-color:#E6EDF3">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 正文 | `#E6EDF3` | 文字 | 208° 35% 93% | 0.94 0.01 244° | 1.18 (fail) | 17.77 (AAA) |
| <span style="background-color:#8B98A5">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 次要 | `#8B98A5` | 次要 | 210° 13% 60% | 0.67 0.02 248° | 2.94 (fail) | 7.13 (AAA) |
<!-- /palette -->

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

这张表要按角色读，而不是按色值读。两个表面不是"两块灰"——一个是地面，一个是抬起的表面，
这个家族两个都需要。五个强调色不是"五个亮色"——是五个光源，各有各的活。两个文字角色也不是
"黑和灰"——一个是被照亮的墨，一个没被照亮。

---

## 二、色阶

<!-- ramp:neon:cn -->
| 颜色 | 浅 40 | 浅 20 | 本色 | 深 20 | 深 40 |
| --- | --- | --- | --- | --- | --- |
| 面板 `#131722` | `#000104` | `#010207` | `#131722` | `#2F3440` | `#4F5461` |
| 霓虹青 `#00F0FF` | `#009CA6` | `#00C5D1` | `#00F0FF` | `#EEFEFF` | `#EEFEFF` |
| 霓虹品红 `#FF2E88` | `#900047` | `#CA0066` | `#FF2E88` | `#FF91B2` | `#FFD0DC` |
| 荧光酸绿 `#39FF14` | `#1DA600` | `#28D200` | `#39FF14` | `#F1FFEF` | `#F1FFEF` |
| 霓虹紫 `#9B5CFF` | `#5600A3` | `#7831D5` | `#9B5CFF` | `#B897FF` | `#D8CAFF` |
| 霓虹琥珀 `#FFB800` | `#A17300` | `#CF9500` | `#FFB800` | `#FFEBC9` | `#FFF9F0` |
<!-- /ramp -->

这里建起了这个家族的核心幻觉，值得把它的原理说准。一根真的霓虹灯管有一个明亮的芯、一圈
彩色的衰减，以及向外洇进空气里的辉光。屏幕上做不出辉光，于是用**同色相的浅色阶**来伪造：
在明度上往上一档左右的同色相一步，用在强调色背后或旁边当光晕。

色相在这一步里原样保留——青在 203° 变成 202°，品红在 2° 变成 2°，紫在 297° 变成 297°。没能
保留下来的是彩度，而且这没法保留：在那个明度上，同样的彩度已经出了 sRGB 色域，所以品红的
浅色阶掉到 `C` 0.14，紫掉到 0.15。青和酸绿掉得更狠，只剩 `C` 0.02 和 0.03，因为它们的本色
明度已经在标尺顶端，几乎没有往上走的余地了。

这条约束值得说明白：**光晕那一档是强调色的浅色阶，不是另一个颜色。** 一个和被包裹物不同色相
的光晕会被读成第二个光源，而两个光源挨在一起，恰好会毁掉整个家族赖以成立的"这是同一个发光
的东西"这种读法。

---

## 三、色板是怎么搭的

### 3.1 为什么需要两个近黑

"虚" `#05060A` 是 `L` 0.12，面板 `#131722` 是 `L` 0.21。两者之间的比值是 1.13，这一点值得停下来
看一眼：这种分隔你通常会称为"看不见"。它确实"看不见"——意思是它不吵；但它刚好够让一块抬起的
表面读起来是抬起的。

只有一个近黑会更简单，代价是整个家族失去内部空间。没有墙的霓虹街景，是一张平涂的图形加几个
亮形状。面板让代码块、卡片、浮层菜单能够作为一个*地方*存在——就像房间里的表面之所以存在，
是因为光照在它身上的角度不同。

### 3.2 五个强调色各自的用处

五个强调色不能互相替换，给它们分配职责，是色板不走形的关键。

**荧光酸绿 `#39FF14`** 是全书彩度最高的颜色，`C` 0.29，也是这个家族最有辨识度的一声。把"活的"
东西给它：成功态、运行中的指示、某个东西的激活态。

**霓虹青 `#00F0FF`** 是家族里的冷色锚点，也是五个里最"技术"的一个。终端、代码编辑器、链接
这类东西该用它。

**霓虹品红 `#FF2E88`** 是热的那个，如果放着不管，它最容易沦为装饰。它的 `C` 0.24 但 `L` 0.66，
因此是五个强调色里最暗的一个，也是最费力才能被看见的一个。

**霓虹紫 `#9B5CFF`** 在感觉上介于品红和青之间，也是最需要一个存在理由的一个。它的 `L` 0.63，
五个里最低。

**霓虹琥珀 `#FFB800`** 是打破冷调的那一个。其余四个强调色都在青到品红的那段弧上，琥珀孤零零
落在 81°。它是家族里唯一的暖音，应该少用，因为它读起来像换了一种色温，而不是换了一个色相。

### 3.3 两个文字角色

正文 `#E6EDF3` 在 `L` 0.94，次要 `#8B98A5` 在 `L` 0.67。

次要色不是"更浅的白"——它是偏蓝的灰，刻意往底色（244° 和 271° 都在同一片蓝区）的方向调冷，
好让说明文字读起来像同一个被照亮的房间里的东西，而不是从别处搬来的一块灰。

正文与次要之间的差距是对"虚" 6.88、对面板 6.08，两处都稳稳越过正文的 4.5 门槛。这个数字是
这个家族之所以还能用的原因。

---

## 四、派生新色

两条规矩，两条都是关于"别加东西"。

**守住底。** "虚"和"面板"不动。需要第三个表面时，从面板派生——明度挪一点，色相与彩度保持
不变——嵌套卡片用略亮一点的面板，凹陷区用略暗一点的。绝不要新的色相。

**守住数量。** 五个强调色。当你需要第六个时，答案通常是五个里已经有一个说的是同一件事，而你
正准备为另一个理由把它引入。真需要第六个的话，这个家族其实已经结束了；诚实的做法是换一个
家族开始，而不是悄悄把它扩一下。

合法造新颜色的方式是色阶。把一个强调色沿着自己的色相挪一小段明度，就得到一个合法的变体：
悬停态、按压态、禁用态、做背景铺色的浅色阶、做描边的深色阶。这些全都是派生出来的，不是
新造出来的，而且色相数量仍然是五个，因为它们就是那五个色相。

---

## 五、搭配规则

这个家族是为在深底上阅读而建的，而且只适合深底，数字说得很直白。

霓虹品红 `#FF2E88` 对黑的对比度是 6.00，对白只有 3.50。正文 `#E6EDF3` 对"虚"是 17.77，对白
只有 1.18——也就是说这个家族的文字放在白页上等于隐形。这套配色没有任何一个版本能在浅底上
工作；任何试图这么做的设计，都已经不是霓虹了。

对"虚"而言，几个强调色分得很开：酸绿 14.94，青 14.38，琥珀 11.68，品红 5.78，紫 5.18。品红和
紫在"虚"上过 4.5 的正文门槛、在面板上过 3 的门槛，因此可以承载小字；其余三个留给更大的记号
和非文字元素。

强调色压着正文是另一回事。青对正文是 1.19，酸绿对正文是 1.15——两个方向都读不清，所以用强调
色做的按钮，标签字该用"虚"或面板的颜色，而不是正文色。品红对正文是 2.96，紫对正文是 3.31，
仍然低于正文门槛，也就是说连较暗的那两个强调色也是留给大记号的，不是留给字的。

两个底之间的区分也要小心。面板对"虚"是 1.13，所以面板靠位置和描边来区分，而不是靠强烈的
明暗差。这个家族里的描边与分隔线该取自强调色的浅色阶——一道强调色浅色阶的细线，才是真实
被照亮的边缘该有的样子。

---

## 六、常见的错

**拿强调色当正文。** 酸绿 `L` 0.87 和霓虹青 `L` 0.87 是页面上最亮的两个颜色。用其中任何一个写
一段话，出来的东西对比度数字很漂亮、实际没法用，因为眼睛没有任何东西可以歇。强调色是给记号
用的。

**加第六个强调色。** 这是这个家族被稀释得最常见的方式。征兆是"某个状态需要个颜色"于是冒出
了一个新颜色。先回头找那个已经表示这件事的现有强调色；或者改成用粗细、描边、位置来表达这个
状态，而不是新增一个色相。

**忘了光晕那一档是浅色阶，不是新颜色。** 品红元素周围的光晕是浅一档的品红。一旦它变成去饱和
的粉、变成白、或者换了色相，"这是同一个发光的东西"这种读法就没了，界面开始看起来像一堆毫不
相干的高亮。

**以为五个强调色可以互相替换。** 酸绿、青、琥珀、品红、紫带着不同的色温和不同的明度；把它们
对调，页面的色温就变了。按钮上是酸绿，页面就比按钮上是品红时更冷。

**把这套家族用在浅底上。** 最常见的失败，也是后果最糟的一个：`C` 0.29 的亮色压在白底上确实难
读，而且除了换底之外没有好办法。

**以为底可以提亮。** 为了"柔和一点"把"虚"从 `L` 0.12 提到 0.20，辉光也就一起没了。强调色不再
读起来像光源，而开始读起来像亮颜料，这个家族就此散了架。

---

## 七、接着读

| | |
| --- | --- |
| [霓虹 —— 这套颜色的来历](../01-neon-origin/cn.md) | 那项照明技术、那些电影，以及四条规矩 |
| [霓虹 vs 马卡龙](../03-neon-vs-macaron/cn.md) | 同样的甜，一路拧到底，然后按在黑底上 |
| [霓虹的实际应用](../04-neon-in-practice/cn.md) | 什么时候好用、什么时候会坏，以及怎样守住它 |
| [什么是色系风格](../../1-overview/01-what-is-a-color-family/cn.md) | 每个系列共有的四条约束 |
