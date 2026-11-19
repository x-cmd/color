---
x-title: 孟菲斯 —— 色板
x-desc: 孟菲斯的八个颜色与各自职责。角色划分、色阶、怎样在色域带里派生新色、决定文字能压在哪里的搭配规则，以及会把这一族拆散的常见错误。
x-sidebar: 孟菲斯色板
x-keywords: 孟菲斯色板, 孟菲斯配色, 撞色, 色阶, memphis palette, memphis colours
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '孟菲斯 —— 色板'
      inLanguage: 'zh-CN'
      about: '孟菲斯色板：角色、色阶与搭配规则'
---

# 孟菲斯 —— 色板

---

孟菲斯色板一共八个颜色：一个底、四个主色、两个强调色、一色墨。它看着像是一页里塞了
很多颜色，确实如此——但角色是严格分派的，而这份分派正是页面不至于变成一袋糖果的原因。

---

## 一、颜色

<!-- palette:memphis:cn -->
| 色块 | 名称 | 色值 | 角色 | HSL | OKLCH | 白字对比度 | 黑字对比度 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <span style="background-color:#FFFFFF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 白 | `#FFFFFF` | 底色 | 0° 0% 100% | 1.00 0.00 90° | 1.00 (fail) | 21.00 (AAA) |
| <span style="background-color:#FFE14D">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 黄 | `#FFE14D` | 主色 | 50° 100% 65% | 0.91 0.16 97° | 1.30 (fail) | 16.13 (AAA) |
| <span style="background-color:#FF9F1C">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 橙 | `#FF9F1C` | 主色 | 35° 100% 55% | 0.78 0.17 66° | 2.05 (fail) | 10.23 (AAA) |
| <span style="background-color:#2EC4B6">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 青绿 | `#2EC4B6` | 主色 | 174° 62% 47% | 0.74 0.12 185° | 2.17 (fail) | 9.69 (AAA) |
| <span style="background-color:#3A86FF">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 蓝 | `#3A86FF` | 主色 | 217° 100% 61% | 0.64 0.20 260° | 3.48 (AA-large) | 6.03 (AA) |
| <span style="background-color:#FF4B8B">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 亮粉 | `#FF4B8B` | 强调 | 339° 100% 65% | 0.68 0.22 4° | 3.17 (AA-large) | 6.63 (AA) |
| <span style="background-color:#8338EC">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 紫 | `#8338EC` | 强调 | 265° 83% 57% | 0.55 0.25 296° | 5.61 (AA) | 3.74 (AA-large) |
| <span style="background-color:#1A1A1A">&nbsp;&nbsp;&nbsp;&nbsp;</span> | 黑 | `#1A1A1A` | 文字 | 0° 0% 10% | 0.22 0.00 90° | 17.40 (AAA) | 1.21 (fail) |
<!-- /palette -->

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

---

## 二、色阶

<!-- ramp:memphis:cn -->
| 颜色 | 浅 40 | 浅 20 | 本色 | 深 20 | 深 40 |
| --- | --- | --- | --- | --- | --- |
| 黄 `#FFE14D` | `#AD9400` | `#D7BA01` | `#FFE14D` | `#FFFBE6` | `#FFFBE6` |
| 橙 `#FF9F1C` | `#9E5F00` | `#CE7D00` | `#FF9F1C` | `#FFD7AF` | `#FFF9F3` |
| 青绿 `#2EC4B6` | `#00746B` | `#009C90` | `#2EC4B6` | `#62ECDD` | `#E8FFFB` |
| 蓝 `#3A86FF` | `#00409A` | `#0E60D5` | `#3A86FF` | `#80B1FF` | `#BFD8FF` |
| 亮粉 `#FF4B8B` | `#9B0049` | `#D31368` | `#FF4B8B` | `#FF9EB7` | `#FFDBE3` |
| 紫 `#8338EC` | `#3B0077` | `#6100BB` | `#8338EC` | `#A172FF` | `#C0A9FF` |
<!-- /ramp -->

色阶是孟菲斯和那些安静系列不一样的地方。因为这里彩度守在基色不动、只有明度在走，浅色
一档仍然是鲜艳的：这一族里的"浅黄"还是那种隔着房间都能喊人的黄。而在马卡龙里，基色彩度
只在 0.06–0.09 上下，同样明度的一档浅色早就轻成了一声耳语。

这在界面上有直接后果：**浅色一档在这里不是降温工具。** 你没法靠把孟菲斯的颜色调浅来让它
安静一点，因为在 OKLCH 里明度和彩度是各自独立走的，色阶会守住它的彩度。要让一个孟菲斯表面
收敛，办法是少用它，或者把黑字压上去。

---

## 三、色板是怎么搭的

### 3.1 角色

| 角色 | 颜色 | 干什么 |
| --- | --- | --- |
| `surface` | 白 `#FFFFFF` | 页面，唯一允许的大面积色块 |
| `base` | 黄 `#FFE14D`、橙 `#FF9F1C`、青绿 `#2EC4B6`、蓝 `#3A86FF` | 块面、形状、填充、图表系列 |
| `accent` | 亮粉 `#FF4B8B`、紫 `#8338EC` | 有资格表示"可以点"的颜色 |
| `ink` | 黑 `#1A1A1A` | 所有文字、所有线条、所有分隔 |

整个结构就是这些。这一族里没有次要色，这很少见——本书里其他每一族都有，正是为了让说明文字和
禁用状态有地方可去。孟菲斯换了个办法解决问题：次要文字就是小一号的黑字，或者黑字压在白卡片
上；禁用状态直接不做。

还要注意 `surface` 是纯白，不是瑞士中立和北欧那种近白。`#FFFFFF` 与黄的对比度是 1.30，
意味着黄色块与页面之间靠的是**色相**分开，而不是靠**明度**。这正是重点。

### 3.2 为什么是两个强调色

本书里大多数家族只允许一个强调色——通行的规矩是一屏一个，让眼睛学会"动作"住在哪。孟菲斯
破了这条规矩，原因和它允许六个主色是同一条：**孟菲斯是把颜色乘出来的，不是把颜色配给出去的。**

马卡龙的纪律在于**限量**：主色只是装饰，唯一那个珊瑚色才是页面上表示"去做这件事"的东西，
所以马卡龙界面即便满是粉也显得安静。孟菲斯不限量。每个主色都跑在高彩度上，上面再叠两个强调色，
而它对"眼睛怎么知道该点哪儿"的回答不是"只有一个"，而是——强调色是这个色板里最深、彩度最高的
成员，而且总是压在硬边上。

两个强调色还有一个结构上的用处：亮粉与紫的色相离得远（4° 对 296°），所以一个页面可以同时放
一个粉色主按钮和一个紫色次级按钮，两者不会抢同一个位置。

### 3.3 不均衡

这里没有主导色。黄与橙是色相邻居（97° 与 66°），而且都是暖色；蓝与紫也是邻居（260° 与
296°），都是冷色；亮粉在 4°，彩度 0.22，是这一族里最饱和的几个之一。

不要指定其中某个去占更大比例来"平衡"这套色板。蓝色占满半页的那套，不是平衡的孟菲斯色板，
而是"一套蓝色配孟菲斯装饰"。**这种分散本身就是身份。**

---

## 四、派生新色

孟菲斯是本书里最好派生、也最容易搞砸的一个系列，因为它的带子给得很宽。两条规矩能保平安。

**留在带子里。** `C` 在 0.12 到 0.25、`L` 在 0.55 到 0.91 之间的颜色都算这一族的成员。这个范围
覆盖了很宽的色相：330° 的品红、140° 的绿、25° 的红，只要彩度和明度对，读起来都是孟菲斯。
不成立的是 `C` 0.30 的颜色——那读起来是霓虹，而霓虹是另一个家族，底都不一样（见
[孟菲斯 vs 霓虹](../03-memphis-vs-neon/cn.md)）。

**把数量控制住。** 这一族有六个有彩色的颜色。再加两个是需要理由的，而那个理由最好是一个
**新角色**——比如确实需要第五个系列的图表色——而不是"某个形状用它更好看"。孟菲斯的失败模式
不是颜色难看，而是颜色没有层级；当八个平等的声音变成十二个，就会这样。

底色和墨色根本不可派生。`#FFFFFF` 和 `#1A1A1A` 就是地基。`#F5F5F5` 这种"柔一点的白"当
面板没问题，但如果页面背景变成灰的，这一族就失去了让颜色看起来像日光的那个硬边。

---

## 五、搭配规则

色板表里的对比度数字决定了一切。把它们一起读，一条简单的规则就浮出来了：

| 填充 | 白字 | 黑字 |
| --- | --- | --- |
| 紫 `#8338EC` | 5.61 —— 通过 | 3.74 —— 正文不够 |
| 蓝 `#3A86FF` | 3.48 —— 正文不够 | 6.03 —— 通过 |
| 亮粉 `#FF4B8B` | 3.17 —— 不够 | 6.63 —— 通过 |
| 青绿 `#2EC4B6` | 2.17 —— 不够 | 9.69 —— 通过 |
| 橙 `#FF9F1C` | 2.05 —— 不够 | 10.23 —— 通过 |
| 黄 `#FFE14D` | 1.30 —— 差得离谱 | 16.13 —— 轻松通过 |
| 黑 `#1A1A1A` | 17.40 —— 通过 | 1.21 —— 不够 |

所以实用规则是这三条：

- **黑字在这一族的每个颜色上都比白字强。** 最低的是压在紫上的 3.74，达不到 4.5 的正文门槛，
  但够大字（19px 粗体或 24px 常规）和非文字元素用；另外五个则直接通过。
- **白字只有压在紫和黑上才安全。** 紫的 5.61 过了 4.5 的正文门槛；其余都不行，多数差得远。
- **黄色永远不要压白字。** 1.30 几乎等于看不见，加粗也救不回来。

这跟马卡龙正好相反——马卡龙那些浅粉彩压白字不合格，墨色是唯一选项。孟菲斯的余地大得多：
黑字几乎到处都能用，还有一个颜色可以翻过来。

两个实际推论。第一，孟菲斯的按钮通常是黄底黑字或紫底白字，而不是蓝底白字——蓝的 3.48 当
大字够，落在 16px 的标签上就不够。第二，正因为黑字到处可用，墨色在孟菲斯里干的活比在浅色
家族里少；这一族可以放心地在黑字下面放很大块的彩色面，而这正是孟菲斯海报的样子。

---

## 六、常见的错

- **加第三个强调色。** 亮粉和紫已经把色相圈分开了。第三个强调色意味着三样东西都有资格表示
  "可以点"，孟菲斯界面就是这样变成海报的。
- **拿吵闹的颜色写正文。** 亮粉压白字是 3.17，青绿是 2.17，都不合格。正文用黑。把颜色留给
  色块，让墨色负责阅读。
- **让底色变灰。** 页面用 `#F5F5F5`，孟菲斯颜色就失去了把它和霓虹区分开的那个日光感。想要
  面板，就让面板落在白底上，而不是反过来。
- **一屏只挑一个颜色。** "给每屏一个招牌色"的直觉来自围绕单一强调色建起来的家族。孟菲斯的
  做法正相反：一屏只有一种孟菲斯颜色，看起来像一块色卡，而不像一个构图。
- **以为有主色和次色。** 见上面的 *3.3 不均衡*。这一族里色相没有层级，造出层级
  就破坏了它。
- **把它调冷。** 把冲突换成一组和谐的四色，会得到一套好配色，但不是孟菲斯。想看"限量式"
  的配色长什么样，见[马卡龙 —— 这套颜色的来历](../../2-macaron/01-macaron-origin/cn.md)。

---

## 七、接着读

| | |
| --- | --- |
| [孟菲斯 —— 这套颜色的来历](../01-memphis-origin/cn.md) | 历史、四条规矩，以及孟菲斯不是什么 |
| [孟菲斯 vs 霓虹](../03-memphis-vs-neon/cn.md) | 同样的吵闹，压在相反的底上 |
| [孟菲斯的实际应用](../04-memphis-in-practice/cn.md) | 海报、卡片网格、图表，以及它在哪儿会坏 |
| [侘寂 vs 孟菲斯](../../6-wabi-sabi/03-wabi-sabi-vs-memphis/cn.md) | 这一对比较的另一侧 |
