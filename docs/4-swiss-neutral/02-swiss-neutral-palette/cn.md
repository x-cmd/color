---
x-title: 瑞士中立 —— 色板
x-desc: 瑞士中立的七个颜色、灰阶每一级各管什么、决定每种颜色能用在哪里的对比度数值，以及怎样派生新色而不破坏这套系统。
x-sidebar: 瑞士中立色板
x-keywords: 瑞士中立色板, 灰阶, 信号红, 对比度, oklch, 派生色, swiss neutral palette, grey ladder, contrast ratio
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '瑞士中立 —— 色板'
      inLanguage: 'zh-CN'
      about: '瑞士中立色板：灰阶与对比度数值'
---

# 瑞士中立 —— 色板

---

七个颜色。六个是真灰，一个是纯红。这是全书最小的一套色板，值得慢慢读——因为瑞士中立里的
几乎每一个设计决定，都不是"选哪个颜色"，而是"用梯子的哪一级"。

来历在[这套颜色的来历](../01-swiss-neutral-origin/cn.md)；实际怎么用见
[瑞士中立的实际应用](../04-swiss-neutral-in-practice/cn.md)。

---

## 一、颜色

<!-- palette:swiss-neutral:cn -->
| 色块 | 名称 | 色值 | 角色 | HSL | OKLCH | 白字对比度 | 黑字对比度 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 纸 | `#FFFFFF` | 底色 | 0° 0% 100% | 1.00 0.00 90° | 1.00 (fail) | 21.00 (AAA) |
| <span style="background-color:#F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 面板 | `#F5F5F5` | 主色 | 0° 0% 96% | 0.97 0.00 90° | 1.09 (fail) | 19.26 (AAA) |
| <span style="background-color:#E0E0E0">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 分隔线 | `#E0E0E0` | 主色 | 0° 0% 88% | 0.91 0.00 90° | 1.32 (fail) | 15.91 (AAA) |
| <span style="background-color:#9B9B9B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 次级 | `#9B9B9B` | 次要 | 0° 0% 61% | 0.69 0.00 90° | 2.78 (fail) | 7.56 (AAA) |
| <span style="background-color:#333333">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 深灰 | `#333333` | 主色 | 0° 0% 20% | 0.32 0.00 90° | 12.63 (AAA) | 1.66 (fail) |
| <span style="background-color:#FF0000">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 信号红 | `#FF0000` | 强调 | 0° 100% 50% | 0.63 0.26 29° | 4.00 (AA-large) | 5.25 (AA) |
| <span style="background-color:#000000">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 黑 | `#000000` | 文字 | 0° 0% 0% | 0.00 0.00 0° | 21.00 (AAA) | 1.00 (fail) |
<!-- /palette -->

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

那两列对比度要当成"许可"来读，而不是当成描述。

`paper` `#FFFFFF` 让黑字拿到 21.00 的对比度——这是 WCAG 公式能给出的上限——所以它是默认的
页面底。`panel` `#F5F5F5` 就在它下面一级，用来标记安静的区块：表头带、代码块、一个需要看得出
是卡片的卡片。`rule` `#E0E0E0` 只是发丝分隔线，不做别的；它对白底的对比度是 1.32，在结构上是
刻意近乎看不见的。

`secondary` `#9B9B9B` 是这个系列里唯一的中灰，也是最常被滥用的成员。它对黑是 7.56，听起来
挺宽裕，但同一个灰放在白色页面上只有 2.78。所以它只配大号或粗体的字，以及真正处于非激活
状态的占位文字。放在正文尺寸上，它任何一档阈值都过不了。

`deep` `#333333` 对白是 12.63，是个合格的正文色——比纯黑柔和，又不带暖调。`black` `#000000`
留给需要最强对比的地方：标题字、主按钮填充、页面上最硬的一条边。

至于 `signal-red` `#FF0000`，表里显示它对白 4.00、对黑 5.25。这两个数字的意思要说准。

---

## 二、色阶

<!-- ramp:swiss-neutral:cn -->
| 颜色 | 浅 40 | 浅 20 | 本色 | 深 20 | 深 40 |
| --- | --- | --- | --- | --- | --- |
| 面板 `#F5F5F5` | `#A8A8A8` | `#CECECE` | `#F5F5F5` | `#FAFAFA` | `#FAFAFA` |
| 分隔线 `#E0E0E0` | `#949494` | `#B9B9B9` | `#E0E0E0` | `#FAFAFA` | `#FAFAFA` |
| 深灰 `#333333` | `#020202` | `#161616` | `#333333` | `#535353` | `#757575` |
| 信号红 `#FF0000` | `#850000` | `#C00000` | `#FF0000` | `#FF8473` | `#FFC3B9` |
<!-- /ramp -->

这道色阶里有两件事值得停下来看。

第一，无彩色的成员生成的色阶，在一个方向上真的有用，另一个方向上完全没用。灰色的暗调——
`secondary` 派生的 `#555555` 和 `#777777`，`deep` 派生的 `#161616` 和 `#020202`——都是货真价实、
可以印刷的台阶，仍然待在这个家族的规矩之内。而浅灰的亮调（`#FAFAFA` 之类）会互相塌陷，因为
真正的白附近灰已经没有去处了：`#FAFAFA` 就是那个方向上的终点。一个带色调的灰倒是有更多台阶，
但那样它就不再是真灰了。

第二，看红色的色阶：`#850000` 和 `#C00000` 往暗走，`#FF8473` 和 `#FFC3B9` 往粉走。亮的那几级
已经不算瑞士中立的——它们是红色的浅色调，带着这个家族并不认可的色彩性格。暗的那几级还守在
规矩之内，因为它们保持同一个色相、同样的色彩意图。

---

## 三、色板是怎么搭的

这七个颜色不是七个个位同等的成员，而是四种角色，角色各自带着规矩。

| 角色 | 颜色 | 能做什么 |
| --- | --- | --- |
| 底色 | `paper` `#FFFFFF` | 页面本身；从不承载另一种颜色的文字 |
| 主色 | `panel` `#F5F5F5`、`rule` `#E0E0E0`、`deep` `#333333` | 结构：面板、分隔线、厚重色块 |
| 次要 | `secondary` `#9B9B9B` | 说明文字、元信息、禁用状态、大号粗体的次要文字 |
| 文字 | `black` `#000000` | 最强设置下的正文、主填充 |
| 强调 | `signal-red` `#FF0000` | 每屏一个含义：可操作、当前、实时、告警 |

组合起来有三条规矩。

**梯子是固定的。** 一共六级灰，每一级都有活干。一个设计觉得"还需要一个灰"的时候，通常真正
需要的是**换一级已有的**——换字重、换分隔线、加大间距——只有这些都用尽了，才值得派生一级新
的。

**强调色每屏只出现一次。** 不是"页脚一个、页首横幅再来一个"——是一屏只一个。同一屏里有两个
东西是红的，红就不再区分它们，而变成装饰了。

**文字是墨色，不是颜色。** 正文是 `black` 或 `deep`。`secondary` 留给真正被降级的文字——时间戳、
辅助说明、占位符——而且要让这样的文字在正常尺寸下可读，它还必须加粗、放大，或两者都做。
14px 常规字重的灰色说明，是一次对比度失败，不是一个设计选择。

---

## 四、派生新色

最稳的扩展是在梯子**内部**加一级。因为这个系列是无彩色的，一个新的灰可以同时检查两件事：
它的 `L` 在不在 0.32 到 0.97 之间，它的彩度是不是恰好 `C` 0.00？两条都成立，它就是自己人。

用色阶机械地派生是最靠得住的做法。取一个基准灰，把它的 OKLCH 明度等量挪动，彩度和色相都
守在零，出来的结果自动属于这个家族。`secondary` 的色阶给出了它下面的 `#555555` 和
`#777777`、上面的 `#C1C1C1` 和 `#E8E8E8`——四级额外的台阶，全部合法，而且都已经算好、查过。

派生新阶的规矩：

- **彩度严格保持为零。** 一个漂到 `C` 0.01 的灰，眼看着仍然是灰，但这正是瑞士中立的实现悄悄
  变成别的东西的最常见路径。
- **不要在 `rule` 与 `panel` 之间、或 `paper` 与 `panel` 之间再造台阶。** 那两处的对比度差只有
  1.09 和 1.32——只看得出质感，看不出是一级。两个几乎贴在一起的面，只会看起来像失误。
- **不要自己造第二个红。** 如果强调色已经在承担"可操作"，那第二个"警告红"需要另一套机制：
  图标、字重、位置。如果系统真的需要错误／警告／成功／信息四种状态，那它需要一套有四个强调
  色的色板，而那不是这个家族。

信号红是最容易派生错的一处。红色在所有色相里知觉空间最大，所以设计师总是忍不住伸手去拿——
给次要按钮配一个"柔和一点的红"，给悬停态配一个"深一点的红"。深的那几级没问题，而且就在色阶
上。亮的那几级不行：`#FFC3B9` 已经是粉色了，一个带粉色按钮的页面不属于这个家族。

---

## 五、搭配规则

**纸上的文字。** `black` 压 `paper` 是 21.00，`deep` 压 `paper` 是 12.63，`secondary` 压
`paper` 是 2.78。前两个对任何文字都安全。第三个只对大号粗体安全，而且即便如此也已经贴着边
界。

**面板上的文字。** `paper` 压 `panel` 是 1.09——那不叫搭配，那叫同一种颜色。压在 `panel` 上的
文字必须是 `black` 或 `deep`；面板是底色变化，不是文字颜色。

**强调色在两个方向上的表现。** `signal-red` 压 `paper` 是 4.00，既过了非文本元素需要的 3:1，
也过了大字号文字需要的 4.5:1，但没过正文需要的 4.5:1。`paper` 压 `signal-red` 因为是同一套
算术，也是 4.00。`black` 压 `signal-red` 是 5.25，过正文 AA。

这就给出一条精确的规矩。这正是实现时最常出错的地方，所以值得明说：

- **白底红字**：只允许大号或粗体。在正文尺寸下不合格。
- **红底白字**：同样只允许大号或粗体。视觉上它更常用，因为红通常作为按钮的填充色出现。
- **红底黑字**：任何尺寸都可以。它读起来比红底白字少一点"警告"的味道，这是审美偏好，不是
  无障碍问题。
- **红作为标记**：一根条、一个点、一道边框、一条下划线、一个小实心形——都可以，因为这时适用
  的是 3:1 的非文本阈值。

**分隔线。** `rule` `#E0E0E0` 是默认。`secondary` `#9B9B9B` 用于那种"要看得见、但不该被当成
内容"的线——当前页签的下划线、聚焦指示的边界。

**两种面同时出现。** `paper` 和 `panel` 并置是这个家族里最常见、也最安全的组合。`panel` 和
`rule` 并置也可以。而 `deep` 挨着浅色面出现是一个有意为之的强表达——一屏用一次。

---

## 六、常见的错

- **该用一级层级的地方用了灰。** 这个家族最常见的失败。页面上某个东西需要显得更重要，于是伸手
  去拿一个更浅的灰。但这里的灰是结构性的，不是表现性的：它们标记的是**种类**（面板还是分隔
  线），不是**等级**。等级来自字号、字重和间距。如果一行说明需要弱化，把它改小、换成
  `secondary`——不要在 `secondary` 和 `rule` 之间自造一个中间灰。
- **加了第二个强调色。** 第二个饱和色会毁掉这个家族仅有的那个机制。一个红之所以响，是因为它
  孤单。两个红就只是颜色，读者不再知道哪一个表示"这个要看"。
- **把强调色当装饰用。** 如果红同时出现在 logo 锁定区、引言、项目符号、图表和按钮里，读者就
  分不清哪一个可以点。留着它。
- **拿 `secondary` 当正文色。** 它对白是 2.78。它是粗体或大号的说明文字色，是占位符色，它不是
  段落色。
- **拿红写正文。** 对白 4.00，正文尺寸下不过 AA；而一段本来就打算报警的红色长文，读起来无论
  如何都像出了错。
- **让梯子漂移。** 每个版本多一个灰，每一个看起来都像合理的 `#B1B1B1`，然后这个家族就从
  "系统"退化成"一堆浅灰"。全部的意义就在于 `panel` 在产品里的每一处都指同一件事。
- **从别的家族借一个色调。** 从北欧色板拿来的冷灰，或从莫兰迪拿来的暖灰，都会破坏无彩性。
  瑞士的灰是真灰。

---

## 七、接着读

| | |
| --- | --- |
| [这套颜色的来历](../01-swiss-neutral-origin/cn.md) | 瑞士风格、网格，以及四条规矩 |
| [瑞士中立 vs 北欧](../03-swiss-neutral-vs-nordic/cn.md) | 无彩理性 vs 带色氛围 |
| [瑞士中立的实际应用](../04-swiss-neutral-in-practice/cn.md) | 组件、图表，以及这些规矩禁止了什么 |
| [马卡龙色板](../../2-macaron/02-macaron-palette/cn.md) | 一个有七个色相的家族，拿来对照 |
