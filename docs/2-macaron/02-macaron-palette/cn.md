---
x-title: 马卡龙 —— 色板
x-desc: 马卡龙色系的十个颜色、每个角色负责什么、当浅色阶成为主要用色面时色阶怎么用、在彩度上限下怎么派生新色，以及哪些搭配真的能过对比度。
x-sidebar: 马卡龙色板
x-keywords: 马卡龙色值, 马卡龙色板, 粉彩, 色阶, 对比度, macaron colours, macaron palette
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '马卡龙 —— 色板'
      inLanguage: 'zh-CN'
      about: '马卡龙色板：角色、色阶与搭配规则'
---

# 马卡龙 —— 色板

---

这是干活用的一套：十个颜色，一个强调色，一个文字色，外加一大堆"每个颜色允许出现在哪里"的
规矩。[来历篇](../01-macaron-origin/cn.md)讲这个系列为什么存在；这一篇是给那种"现在要挑一个
颜色、而且得挑对"的时刻准备的。

整套系统的浓缩版是：**底色是奶油纸，六个主色是装饰，强调色是唯一表示"可以点"的东西，文字色
是唯一承字的东西。** 这篇后面所有规则都是这四句话的推论。

---

## 一、颜色

<!-- palette:macaron:cn -->
| 色块 | 名称 | 色值 | 角色 | HSL | OKLCH | 白字对比度 | 黑字对比度 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#FFFDFB">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 奶油纸 | `#FFFDFB` | 底色 | 30° 100% 99% | 1.00 0.00 68° | 1.01 (fail) | 20.70 (AAA) |
| <span style="background-color:#F8C8DC">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 草莓牛奶 | `#F8C8DC` | 主色 | 335° 77% 88% | 0.88 0.06 351° | 1.47 (fail) | 14.29 (AAA) |
| <span style="background-color:#A8E6CF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 薄荷 | `#A8E6CF` | 主色 | 158° 55% 78% | 0.88 0.07 170° | 1.41 (fail) | 14.88 (AAA) |
| <span style="background-color:#C3B1E1">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 薰衣草 | `#C3B1E1` | 主色 | 263° 44% 79% | 0.79 0.07 302° | 1.96 (fail) | 10.70 (AAA) |
| <span style="background-color:#FFF1A8">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 柠檬 | `#FFF1A8` | 主色 | 50° 100% 83% | 0.95 0.09 99° | 1.14 (fail) | 18.40 (AAA) |
| <span style="background-color:#FFD3B6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 蜜桃 | `#FFD3B6` | 主色 | 24° 100% 86% | 0.90 0.06 55° | 1.38 (fail) | 15.25 (AAA) |
| <span style="background-color:#AED6F1">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 天空 | `#AED6F1` | 主色 | 204° 71% 81% | 0.86 0.06 238° | 1.53 (fail) | 13.69 (AAA) |
| <span style="background-color:#FFAAA5">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 珊瑚 | `#FFAAA5` | 强调 | 3° 100% 82% | 0.82 0.10 23° | 1.82 (fail) | 11.55 (AAA) |
| <span style="background-color:#4A4045">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 墨梅 | `#4A4045` | 文字 | 330° 7% 27% | 0.38 0.02 346° | 9.95 (AAA) | 2.11 (fail) |
| <span style="background-color:#8C7F84">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 灰玫瑰 | `#8C7F84` | 次要 | 337° 5% 52% | 0.61 0.02 352° | 3.83 (AA-large) | 5.48 (AA) |
<!-- /palette -->

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

十个颜色，只有三个在干界面上的活：奶油纸是页面，墨梅是文字，珊瑚是动作。其余七个是颜料。

这样理解角色，这个系列大半的含混就消失了。主色不是"套一个主题"——它是你花出去的颜色，用在
卡片、标签、图表条、插图。一旦你让主色去承一整段文字，你同时踩到对比度的坑和语气的坑，因为
一页彩色的字不管色相选得多准，读起来都是在一页大喊。

六个主色还保持了冷暖平衡。草莓牛奶 `#F8C8DC`、柠檬 `#FFF1A8`、蜜桃 `#FFD3B6` 是暖的；薄荷
`#A8E6CF`、天空 `#AED6F1`、薰衣草 `#C3B1E1` 是冷的。连着用了三个，就从两边各挑一个，否则那一
块区域会自成一种色温，而不是一组马卡龙。

关于色相集合还有一句：这七个是**有名字**的色相，不是同一渐变上的七块色卡。草莓牛奶是粉，薄荷
是绿，薰衣草是紫，柠檬是黄，蜜桃是橙，天空是蓝，珊瑚是红橙。你不用犹豫就能说出一个是什么。
这种可辨认性是这个系列最核心的资产，也正是"十二个粉"那套配色丢掉的东西。

---

## 二、色阶

<!-- ramp:macaron:cn -->
| 颜色 | 浅 40 | 浅 20 | 本色 | 深 20 | 深 40 |
| --- | --- | --- | --- | --- | --- |
| 草莓牛奶 `#F8C8DC` | `#A97E90` | `#D0A2B5` | `#F8C8DC` | `#FFF8FB` | `#FFF8FB` |
| 薄荷 `#A8E6CF` | `#5D9984` | `#82BFA9` | `#A8E6CF` | `#EDFFF8` | `#EDFFF8` |
| 薰衣草 `#C3B1E1` | `#796894` | `#9D8CBA` | `#C3B1E1` | `#E8DAFF` | `#FBF9FF` |
| 柠檬 `#FFF1A8` | `#B1A35D` | `#D7CA82` | `#FFF1A8` | `#FFFBE4` | `#FFFBE4` |
| 蜜桃 `#FFD3B6` | `#B0886C` | `#D7AD90` | `#FFD3B6` | `#FFF9F5` | `#FFF9F5` |
| 天空 `#AED6F1` | `#658AA3` | `#89B0CA` | `#AED6F1` | `#F0F9FF` | `#F5FBFF` |
| 珊瑚 `#FFAAA5` | `#AE615D` | `#D68580` | `#FFAAA5` | `#FFE4E1` | `#FFF8F8` |
<!-- /ramp -->

色阶是同一个颜色的五级：两级浅、两级深。每级只改 `L`，色相和彩度保持不变，所以几级之间只差
明暗。

在大多数配色里，色阶是一个工具——用来让一个颜色在边框、悬停态、禁用态、阴影等不同场合都能用。
在马卡龙里色阶的用法不一样。

**在这个系列里，浅色阶才是颜色真正被用掉的地方。** 主色本身已经是这条明度梯的最亮端了；在
`L` 0.79 到 0.95 之间，它们都太浅，大面积并排会把页面变成儿童房。所以真实的马卡龙配色是拿
浅色阶当工作面用的：卡片后面一层淡粉，表单后面一层几乎看不见的薄荷，提示块后面一层薰衣草
浅色——主色只在很小的地方以实心出现：一个小标签、一个图标、一条进度条、卡片边缘四像素宽的
色条。

这个倒过来用，正是色阶重要的原因。一个把主色铺成大色块的设计，会以一种很难说清的方式显得
不对——太甜、太软、太像幼儿园；而同样的设计，如果拿浅色阶做填充、拿主色做小面积的点睛，读起来
就是一个有讲究的粉彩系统。

由此有两个推论。**浅色阶同样是装饰，不承字**：浅色背景上写的是墨色文字，绝不会是主色文字，
因为薰衣草最深一级色阶对奶油底只有 1.30。**"新颜色"最诚实的来源就是色阶**，因为它不花掉新色相，
也不花掉新彩度。

唯一用到深色阶的地方，是紧挨着文字的结构件：一根细边框、一条分隔线、一层淡淡的阴影。保持很细
就好。

---

## 三、色板是怎么搭的

整块色板是围绕一个不对称搭起来的，而这个不对称支配着所有事：**明度很便宜，彩度很贵。**

明度带 `L` 0.79 到 0.95 跨了大约十六个点；彩度带 `C` 0.06 到 0.10 只跨四个点。设计师可以自由
地把一个马卡龙颜色调亮调暗而仍留在系列里；几乎任何让它"更有颜色"的尝试都会立刻离开这个系列。

这不是审美偏好，是测量结果——上面的表已经把它显示出来了。

珊瑚在 `C` 0.10、柠檬在 `C` 0.09，都已经顶到上限。珊瑚之上没有任何余量。任何一个"更艳"的粉、
更绿的薄荷、更黄的柠檬——也就是设计师觉得屏幕上有点寡淡时想伸手去调的那个版本——都会落在
`C` 0.14 或 0.16 上，到那一步它就是另一个系列了。

色板真正有空间的是明度，而有用的变化都住在那儿。柠檬在 `L` 0.95，薰衣草在 `L` 0.79，相距十
六个点，却仍然是同一个系列——而且它们读起来是完全不同的颜色，因为在这个明度上色相仍然压得住。
这正是这个系列能装下七个色相而不吵的原因：它不需要靠彩度变化来保持有意思。

---

## 四、派生新色

需要列表以外的颜色时，按这个顺序来。

**第一，改明度。** 找到最接近的主色，在 `L` 上上下移，色相和彩度都不动。悬停态要深一点的粉，
背景要淡一点的黄——两件事都是免费的。作为系列内部的填充色，明度保持在 `L` 0.79 以上；彩度保持
在 `C` 0.10 以下。

**第二，找已有主色的浅色阶。** 如果需求是"一个柔和的背景"，你多半根本不需要新颜色，你需要的是某个
已有颜色的浅色阶那一级。这是马卡龙工作中最常见的扩展方式，而且不花任何代价。

**第三，把新色相当成一个真决定。** 如果你需要的颜色确实是一个新色相——一个青绿、一个奶黄、一个
淡蓝紫——那你就是在改这个系列的色相集合，而色相集合正是防止系列漂移的东西。要加一个站得住的
新色相：

- 一眼就能叫出名字，像现有六个主色那样。"青绿"行，"那个偏蓝绿的"不行。
- 落在带内：`L` 0.79–0.95，`C` 0.06–0.10。如果它得靠 `C` 0.12 才成立，它属于别的系列。
- 维持冷暖平衡。第七个冷色相需要一个暖的来配，否则页面上会长出一块发冷的地方。
- 由一个现有七个颜色填不上的角色来支撑。"需求方说要青绿"不是角色。

实践中，多数需要一个"第八个马卡龙色相"的项目，最后要么加一个第二强调色，要么干脆换成莫兰迪——
莫兰迪更宽的明度范围和更灰的中性色，能吸收马卡龙吸收不了的东西。这不是失败，是一个你有意识
做出的决定，而不是三个版本之后才发现的事。

**不能派生的东西**：深色的结构性颜色。马卡龙除了文字色和那个次要灰之外没有深色中性色，自己
造一个（深色按钮、深色页眉带）是让马卡龙界面不再是马卡龙最常见的办法。如果版面需要一块深色，
那你面对的是莫兰迪，不是一个新的马卡龙颜色。

---

## 五、搭配规则

这个色板的几何关系让规则出奇地机械，这是一份礼物。照着做，一个对比度都不用自己查。

**规则一——文字要么是墨色，要么什么都不是。** 墨梅 `#4A4045` 对白字是 9.95，对奶油底是 9.81，
稳稳高于正文 4.5 的门槛。没有任何主色能做到，主色也永远做不到。

**规则二——白字压在马卡龙色块上永远不成立。** 所有主色和强调色对白的对比度都落在 1.14 到 1.96
之间：柠檬最低 1.14，薰衣草最好 1.96。同样的颜色对纯黑是 10.70 到 18.40。这两列之间的差就是
规则本身——马卡龙色块是**深字**的面，永远不是浅字的面。这个系列里的按钮是珊瑚底配墨色字，不是
珊瑚底配白字。

**规则三——主色上压墨色可以。** 墨色对六个主色的对比度从 5.07（薰衣草）到 8.72（柠檬），处处过了
4.5，所以实心标签上压深色小字在任何字号下都没问题。但对薰衣草和珊瑚没有到 7（AAA），所以如果
你想在小字上标 AAA，就把标签留在柠檬、蜜桃、薄荷或草莓牛奶上。

**规则四——强调色必须独一份。** 珊瑚是唯一被允许表示"可以点"的颜色，而它靠稀缺挣到这个位置。
一块屏幕上一个主动作。如果一个珊瑚按钮旁边还坐着一个珊瑚徽章和一个珊瑚选中标签，三个都不会再被
读成主动作了。强调色对着另外六个粉彩要完成任务，靠的只有自己是这一页上唯一饱和的东西。

**规则五——次要灰是给元数据用的，不是给正文用的。** 灰玫瑰 `#8C7F84` 对白是 3.83，对奶油底是
3.77。它过了大字和非文本元素（图标、图表标记）要的 3:1 门槛，但没过正文要的 4.5。用它写说明、
时间戳、占位文案和禁用态标签——绝不用它写用户必须读到的句子。

**规则六——底色不承任何东西。** 奶油纸 `#FFFDFB` 对白是 1.01。它是页面，不是卡片。当卡片需要从
页面上浮出来时，卡片是白色或某个浅色阶，分离靠边框或阴影，不靠背景色块。

能配在一起的东西，可以这样看：

| 填充 | 压墨色 | 压白字 | 用途 |
| --- | --- | --- | --- |
| 奶油纸 `#FFFDFB` | 9.81 | 1.01 | 页面本身，仅此而已 |
| 任一主色的浅色阶 | 4.5 – 9.6 | 1.0 – 3.3 | 卡片、面板、提示块背景 |
| 主色 | 5.07 – 8.72 | 1.14 – 1.96 | 标签、徽章、色条、插图 |
| 珊瑚 `#FFAAA5` | 5.47 | 1.82 | 那一个动作 |
| 灰玫瑰 `#8C7F84` | 2.60 | 3.83 | 元数据、禁用态、仅大字 |

---

## 六、常见的错

**六个粉，而不是七个色相。** 最常见的失败，也正是这个系列的名字最容易招来的失败。六个明度上
不同的粉不叫马卡龙色板——那是一套被起了甜点名字的单色方案。检验方法很简单：盖住标签，让人说出
颜色。如果答案连着六次都是"粉"，色相集合就已经塌了。反方向的失败也要防：一个马卡龙色板里每个
元素都是不同色相，读起来像个玩具盒。

**强调色不独一份。** 见规则四。常见的应对是想办法把珊瑚做得更艳——这不但没解决问题，还破坏了
彩度上限。正确的修法是拿掉颜色，不是加颜色。

**用主色写正文。** 一段薰衣草 `#C3B1E1` 的字压在奶油底上，对比度是 1.93。它不是"对比度低但
挺甜的"；它是读不清的，而且读不清到让整页看起来是坏的。文字用墨色，颜色给别的东西。

**深色按钮。** 这是人们找对比度解法时的标准动作，也是丢掉这个系列的标准动作。奶油底上配粉彩小
标签、再加一个近黑的主动作按钮——这是一页瑞士中立，只是上面摆了些马卡龙装饰。马卡龙的按钮是珊
瑚底配墨色字，而且它之所以成立，正因为珊瑚对白只有 1.82 是**应该**这么低——填充只是装饰，真正被
读的是压在上面的墨色。

**拿主色当页面背景。** 一个版面里六块大面积的全彩度粉彩色块，"太甜"就是这么来的。让浅色阶去
填充，主色保持小面积。

**拿 HSL 饱和度当规矩。** 工具会告诉你柠檬是 100% 饱和。这在任何有意义的意义上都不是 100% 饱
和——它的 OKLCH 彩度只有 0.09。绝大多数"太饱和"的判断都是从 HSL 取色器里做出来的，因此是错的，
而且会把人引向错误的修法。改在 OKLCH 里做，那里才看得见这个系列真正的边界。

---

## 七、接着读

| | |
| --- | --- |
| [这套颜色的来历](../01-macaron-origin/cn.md) | 这个系列是什么、从哪来、它的四条规矩 |
| [马卡龙 vs 莫兰迪](../03-macaron-vs-morandi/cn.md) | 隔壁那个系列，以及怎么把两者分开 |
| [马卡龙的实际应用](../04-macaron-in-practice/cn.md) | 组件、照片、印刷，以及这个系列什么时候会坏 |
| [什么是色系风格](../../1-overview/01-what-is-a-color-family/cn.md) | 每个系列共有的四条约束 |
