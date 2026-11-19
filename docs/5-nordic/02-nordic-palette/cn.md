---
x-title: 北欧 —— 色板
x-desc: 北欧色系的九个颜色、各自的职责、色阶怎么走，以及怎样搭配才不会发冷。
x-sidebar: 北欧色板
x-keywords: 北欧色板, 北欧配色, 蓝灰配色, 陶土橘, nordic palette, nordic colours, blue grey palette
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '北欧 —— 色板'
      inLanguage: 'zh-CN'
      about: '北欧色板：角色与色阶'
---

# 北欧 —— 色板

---

九个颜色。一个是底色，四个是冷调主色，三个是暖调强调色，一个是文字色。整个系统就是这些，
而"少"正是重点：一个这么克制的色板，你可以在整个产品里装在脑子里。

这些颜色在[北欧 —— 这套颜色的来历](../01-nordic-origin/cn.md)里介绍过，那里讲的是它们为什么
长这样。这篇是参考手册——每个颜色干什么用、怎么派生、以及怎样搭配才不会让页面发冷。

---

## 一、颜色

<!-- palette:nordic:cn -->
| 色块 | 名称 | 色值 | 角色 | HSL | OKLCH | 白字对比度 | 黑字对比度 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#F7F9FA">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 雪 | `#F7F9FA` | 底色 | 200° 23% 97% | 0.98 0.00 229° | 1.06 (fail) | 19.89 (AAA) |
| <span style="background-color:#E8EDF0">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 霜 | `#E8EDF0` | 主色 | 202° 21% 93% | 0.94 0.01 234° | 1.18 (fail) | 17.80 (AAA) |
| <span style="background-color:#C9D6DE">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 冰川 | `#C9D6DE` | 主色 | 203° 24% 83% | 0.87 0.02 235° | 1.48 (fail) | 14.16 (AAA) |
| <span style="background-color:#9FB6C4">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 峡湾 | `#9FB6C4` | 主色 | 203° 24% 70% | 0.76 0.03 235° | 2.11 (fail) | 9.96 (AAA) |
| <span style="background-color:#6B8FA3">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 深峡湾 | `#6B8FA3` | 主色 | 201° 23% 53% | 0.63 0.05 233° | 3.45 (AA-large) | 6.08 (AA) |
| <span style="background-color:#D9A38F">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 陶土橘 | `#D9A38F` | 强调 | 16° 49% 71% | 0.76 0.07 41° | 2.19 (fail) | 9.59 (AAA) |
| <span style="background-color:#A9BC8F">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 桉木 | `#A9BC8F` | 强调 | 85° 25% 65% | 0.77 0.07 126° | 2.04 (fail) | 10.28 (AAA) |
| <span style="background-color:#E3C46A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 芥末 | `#E3C46A` | 强调 | 45° 68% 65% | 0.83 0.12 91° | 1.70 (fail) | 12.37 (AAA) |
| <span style="background-color:#2E3A40">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 墨 | `#2E3A40` | 文字 | 200° 16% 22% | 0.34 0.02 230° | 11.70 (AAA) | 1.80 (fail) |
<!-- /palette -->

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

先看"角色"这一列，再看色值。这不是一袋颜色，而是一组职责。九条目，四种角色。

---

## 二、色阶

<!-- ramp:nordic:cn -->
| 颜色 | 浅 40 | 浅 20 | 本色 | 深 20 | 深 40 |
| --- | --- | --- | --- | --- | --- |
| 霜 `#E8EDF0` | `#9BA0A3` | `#C1C6C9` | `#E8EDF0` | `#F6FBFE` | `#F6FBFE` |
| 冰川 `#C9D6DE` | `#7F8B92` | `#A3B0B7` | `#C9D6DE` | `#F5FBFF` | `#F5FBFF` |
| 峡湾 `#9FB6C4` | `#586D7A` | `#7B919E` | `#9FB6C4` | `#C5DDEB` | `#F5FBFF` |
| 深峡湾 `#6B8FA3` | `#284A5C` | `#496B7E` | `#6B8FA3` | `#8FB4C9` | `#B5DBF0` |
| 陶土橘 `#D9A38F` | `#8C5B49` | `#B27E6B` | `#D9A38F` | `#FFCAB7` | `#FFF9F6` |
| 桉木 `#A9BC8F` | `#627349` | `#84976B` | `#A9BC8F` | `#CFE3B4` | `#F4FFE6` |
| 芥末 `#E3C46A` | `#977912` | `#BC9E42` | `#E3C46A` | `#FFEDBB` | `#FFFAEC` |
<!-- /ramp -->

色阶是沿着 OKLCH 的明度轴等距走出来的，色相与彩度保持不变。这是一个刻意的选择，而不是通常那种
在 HSL 里做加白加黑的做法——因为沿 OKLCH 的 `L` 走，得到的台阶**看起来**是等距的：不管在色阶的
哪一段，相邻两行的明度差是一样的。

这有两个实际后果。第一，深一档的浅蓝仍然是认得出的同一个蓝，不会滑向灰色——那正是用 HSL 加深
时会发生的。第二，暖强调色的"浅 40"档仍然是暖的；你得到的是一个真正更浅的陶土橘，而不是一个
偏了色的粉。

---

## 三、色板是怎么搭的

### 3.1 四个蓝其实是一个色相

九个颜色里有四个——霜 `#E8EDF0`、冰川 `#C9D6DE`、峡湾 `#9FB6C4`、深峡湾 `#6B8FA3`——在 OKLCH
里落在 233° 到 235° 之间，彩度从 0.01 到 0.05。它们不是四个颜色，是同一个蓝灰的四个明度台阶，
眼睛之所以把它们读成一家，正是因为这一点。

它们的分工按功能划分，不按装饰：

| 颜色 | 角色 | 用在哪里 |
| --- | --- | --- |
| 霜 `#E8EDF0` | 面板 | 卡片与侧栏填充、表头行、悬停态 |
| 冰川 `#C9D6DE` | 分隔 | 描边、分隔线、图表网格线、禁用态轮廓 |
| 峡湾 `#9FB6C4` | 次级 | 次级文字、次要标签、未选中的页签、图表次要系列 |
| 深峡湾 `#6B8FA3` | 辅助 | 链接、选中页签的下划线、图表主系列、明度带内最深的蓝 |

因为这四个在同一色相上，它们可以随意叠放。一张霜色卡片放在雪色页面上、用冰川色描边隔开，就是
一个完整可读的界面，全程不涉及第三个颜色。

### 3.2 三个暖强调色

陶土橘 `#D9A38F`、桉木 `#A9BC8F`、芥末 `#E3C46A` 是全族里仅有的、彩度真正站得住的成员——分别
是 `C` 0.07、`C` 0.07 和 `C` 0.12。芥末以 `C` 0.12 是整组里最饱和的一个颜色，而它仍然不到
孟菲斯蓝的一半艳。

它们之所以是唯一饱和的颜色，是因为它们在干一件蓝系干不了的事。一整页蓝灰读起来是冷的，甚至有
点像诊所；暖色就是那一笔，把人味补回来。暖色还有一层实际作用：暖色看起来更近、更柔，所以同样
尺寸下，陶土橘的按钮比蓝色的按钮手感更温和。

这三个不能互相替代：

- **陶土橘**是最暖的，也是最明确暖的一个——偏红的陶土。用在想要"有人味、有分量"的状态上。
- **芥末**最亮、也最饱和。它是这一族里唯一的"看这里"，所以必须稀有。
- **桉木**夹在蓝与暖之间，是三者里最通用的。它的 `C` 0.07、色相 126° 让它读起来像一片柔和的
  鼠尾草绿，而不是一个"颜色"。用在需要第二强调色、又不希望它抢戏的地方。

### 3.3 墨色在做什么

墨 `#2E3A40` 不是黑色。它是一个蓝黑：色相 230°、`L` 0.34，也是全族里唯一比 `L` 0.63 更深的
颜色。北欧的文字从来不是中性灰，理由和中性色从来不是中性灰一样——整页只有一个色温。

它对白色是 11.70，所以放在雪、霜、冰川、峡湾这些浅底上都从容有余。

注意北欧**没有**什么：它没有单独的次级文字色，没有莫兰迪里那种 `#8A817A` 式的第二墨色。如果
你需要次级文字，用峡湾 `#9FB6C4`——但在具体表面上线之前，先把对比度算一遍，因为峡湾对白只有
2.11，它是个浅颜色在干文字的活。

---

## 四、派生新色

北欧的色相集合只有四个成员，而且**是故意的**。派生规则由此而来：**新颜色是已有色相的新一档
色阶，不是新色相。**

需要色板上没有的颜色时，别引入新色相，往最接近的那个色相的色阶上走一步。陶土橘的按压态再深一
档、桉木的背景带再浅一档、蓝色的悬停填充再浅一档——这些都是色阶台阶，全都还在明度带里。

真要出带的时候，按这个顺序守住三条：

1. **留在明度带内。** 除文字色外一律 `L` 0.63 到 0.94。一旦比明度带更深，这个家族就开始读起来
   像瑞士中立或莫兰迪。
2. **留在彩度上限之下。** `C` 0.12。如果你落在 `C` 0.16 上还觉得"挺北欧的"，那它不是。
3. **复用已有色相。** 低彩度的新色相读起来像个不小心混进来的中性；高彩度的新色相则完全像另一
   个家族了。

有两个诚实的例外。一是语义色——错误红、成功绿。北欧没有红，调出多少档也调不出红来，所以错误
态要么从家族外面借一个颜色，要么改用别的形式（一个图标、一道更重的边框）。二是暗色模式的底色，
那是另一个问题、另一套规则；本文的明度带是按浅底算的。

---

## 五、搭配规则

### 5.1 谁可以承载文字

答案很干净，而且直接来自对比度数字。上表两列是对纯白和纯黑测的；北欧的底色比纯白略暗一点，
所以"对白"那一列是保守估计。

| 颜色 | 对白 | 对黑 | 可以承载正文吗 |
| --- | --- | --- | --- |
| 墨 `#2E3A40` | 11.70 | 1.80 | 可以——正文色，处处可用 |
| 深峡湾 `#6B8FA3` | 3.45 | 6.08 | 浅底上可以——唯一能当文字用的蓝 |
| 峡湾 `#9FB6C4` | 2.11 | 9.96 | 浅底上不能当正文 |
| 陶土橘 `#D9A38F` | 2.19 | 9.59 | 只能压深色文字 |
| 桉木 `#A9BC8F` | 2.04 | 10.28 | 只能压深色文字 |
| 芥末 `#E3C46A` | 1.70 | 12.37 | 只能压深色文字 |

正文用墨，而且一直是墨。深峡湾 `#6B8FA3` 对黑是 6.08，是唯一能在浅底上当文字用的主色，通常
用作链接，以及导航里选中项的文字——那里需要"像文字"，但不该像正文那么重。它对白的 3.45 也过了
焦点环、图表标记这类非文本元素 3:1 的门槛，这就是为什么链接色是深峡湾而不是峡湾。

另外四个是色块。文字压在陶土橘、桉木或芥末上时，压的是墨，不是白：白字压芥末的对比度只有
1.70，任何字号下都读不清。三个强调色对黑都过了 9.59，所以墨压在它们上面都很宽裕。

### 5.2 表面对比的三条

当色块和文字色相邻时，非文本元素——描边、图表柱、焦点环——的标准是 3:1。家族里有两对颜色正好
在这条线附近，值得记牢：

- **冰川 `#C9D6DE` 作雪 `#F7F9FA` 上的分隔线**——它是描边不是底，它的职责是被看见而不是被阅读。
  只要页面上没有别的东西需要承载文字，它就没问题。
- **深峡湾 `#6B8FA3` 对雪**，3.45，过得了链接、下划线或图表系列这一档的门槛，这也是这一族的链接
  色用深峡湾而不用峡湾的原因。

由此得到的实用规则是：**结构由蓝色阶承担，强调由一个暖色承担，而任何时候只有两种颜色叠在
一起。** 一页里芥末小标签上压着陶土橘的文字，这一页就把这个家族读错了。

### 5.3 几条经验

- **一屏一个强调色。** 不是"一种强调色"，是"一处强调色"。霜与冰川之间孤零零一个芥末按钮，
  是这个家族的招牌；同一屏两个芥末按钮，整页就变成活泼了。
- **强调色要一致。** 如果陶土橘是你的强调色，链接色就是陶土橘，选中态也是陶土橘，不要再加上
  深峡湾。
- **蓝色阶负责结构。** 如果一页需要同时用四种蓝，说明元素需要变少。
- **绝不用纯灰。** 家族里每一个中性色都是蓝或绿的染色。真的需要中性色，就用冰川或峡湾。

---

## 六、常见的错

**蓝太多。** 这是最常见的失误，而且不容易发现，因为结果看上去依然很平静。多加第二个蓝——一个
青、一个钢蓝、一个突破明度带的藏青——就变成五个蓝，而家族本来打算的是同一个色的四个台阶。页面
不再是系统，而是一堆颜色。修法是检查一下：这个新蓝能不能表达成某个已有色的色阶台阶。

**暖强调色用过头。** 陶土橘和芥末是全族仅有的饱和色，所以每多一处都是实打实的代价。失效的样子
是看得见的：芥末既在标签上，又在按钮上，又在链接上，又在图表高亮上。这一页本来是想让人平静的，
现在变得活泼——那是另一个家族，另一套规则。一屏选一个强调色，选定之后就别再变。

**浅色在密集版面里糊掉。** 这是北欧真正会失手的地方，而且失手方式很有规律。一张表用霜色表头、
冰川色行分隔线、峡湾色次级文字，在几百像素的范围内让三个浅值干三件不同的事。好的显示器上这样
没问题；投影仪、廉价的笔记本屏，或者灰度印刷里，行结构就消失了。补救办法是**不要用明度去制造
结构**——改用字重、用一道线、用间距节奏，并且把最浅的几档留给真正的大面积区域，而不是用来做
发丝级的分隔。

**把暖强调色也调冷。** 陶土橘 `C` 0.07、芥末 `C` 0.12 本来就已经克制。为了"更统一"再降彩度，
最后只剩一族全是冷色——而那正是这些强调色存在要避免的结果。

**拿墨色当色块。** 墨在 `L` 0.34，远低于明度带。一大块墨读起来是瑞士中立——一个硬邦邦的深色
面板配浅色文字——那是完全另一套设计语言。

---

## 七、接着读

| | |
| --- | --- |
| [北欧 —— 这套颜色的来历](../01-nordic-origin/cn.md) | 这个家族是什么、从哪来、它的四条规矩 |
| [北欧 vs 侘寂](../03-nordic-vs-wabi-sabi/cn.md) | 同样的低彩度纪律，暖的那一侧 |
| [北欧的实际应用](../04-nordic-in-practice/cn.md) | 什么时候好用、什么时候会坏，以及怎样守住它 |
| [怎么看懂一块色板](../../1-overview/02-reading-a-palette/cn.md) | 怎么读一份色值清单里的数字 |
