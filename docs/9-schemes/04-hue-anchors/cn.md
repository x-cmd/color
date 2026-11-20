---
x-title: 色相锚 —— 同一风格，每种血色
x-desc: red、blue、green、purple 不是风格，是锚点。把方案的结构（明度纪律、彩度预算、色相几何）与它在色环上的位置拆开，一套方案就变成无数套。这是层级图上的参数化一级。
x-sidebar: 色相锚
x-keywords: 色相锚, oklch 色相旋转, 参数化主题, 主题变体, 配色生成器, hue anchor, parametric theme
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '色相锚 —— 同一风格，每种血色'
      inLanguage: 'zh-CN'
      about: '把方案的结构与色相位置拆开'
---

# 色相锚 —— 同一风格，每种血色

---

红不是风格，蓝也不是风格。它们是**位置**。让方案成为方案的，是它的*结构*——明度纪律、
彩度预算、系列之间的几何——而结构可以坐到色环的任何地方。把磷光纸的锚从绿挪到红，
你会得到一个换了衣服的另一个产品，衣服里还是同一副骨头。

这一步把主题库从一张清单变成一个**生成器**：一份定义，`风格 × 锚`，客户的品牌色从此
只是一个入口，不再是一个分支。

---

## 一、结构与锚

一套方案拆成两个彼此独立的决定：

| | 它定住什么 | 例（磷光纸） |
| --- | --- | --- |
| **结构** | `L` 带、`C` 带、系列间色相距离、谁是中性 | `L` 0.52–0.67，`C` 0.09–0.25，色环等步走，保留一个灰 |
| **锚** | 系列一落在色环哪里 | 信号绿，OKLCH 色相 166° |

旋转在 OKLCH 里因此是平凡的：锁住每个色的 `L` 与 `C`，把所有 `H` 平移同一个角度。
纪律在转动中完好无损，因为纪律从来不依赖色相。

---

## 二、一套方案，七个锚

同一个磷光纸系列，锚在每个位置。每个格子都是算出来的——锁明度、锁彩度、转色环：

<!-- anchors:phosphor:cn -->
<table style="border-collapse:collapse;max-width:600px"><colgroup><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"></colgroup><tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">锚(系列一落在)</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">30° 红</th><td style="background:#9D5044;height:26px" title="#9D5044"></td><td style="background:#5A7E00;height:26px" title="#5A7E00"></td><td style="background:#8784F1;height:26px" title="#8784F1"></td><td style="background:#007599;height:26px" title="#007599"></td><td style="background:#008550;height:26px" title="#008550"></td><td style="background:#80651D;height:26px" title="#80651D"></td><td style="background:#A8436F;height:26px" title="#A8436F"></td><td style="background:#A0A598;height:26px" title="#A0A598"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">55° 橙</th><td style="background:#975726;height:26px" title="#975726"></td><td style="background:#008743;height:26px" title="#008743"></td><td style="background:#AE76DE;height:26px" title="#AE76DE"></td><td style="background:#006AC4;height:26px" title="#006AC4"></td><td style="background:#008173;height:26px" title="#008173"></td><td style="background:#6A6E27;height:26px" title="#6A6E27"></td><td style="background:#AF4448;height:26px" title="#AF4448"></td><td style="background:#9BA69C;height:26px" title="#9BA69C"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">85° 金</th><td style="background:#856406;height:26px" title="#856406"></td><td style="background:#008375;height:26px" title="#008375"></td><td style="background:#CF6AB6;height:26px" title="#CF6AB6"></td><td style="background:#614FD6;height:26px" title="#614FD6"></td><td style="background:#007D8F;height:26px" title="#007D8F"></td><td style="background:#477643;height:26px" title="#477643"></td><td style="background:#A94F00;height:26px" title="#A94F00"></td><td style="background:#96A7A3;height:26px" title="#96A7A3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">150° 绿</th><td style="background:#367A48;height:26px" title="#367A48"></td><td style="background:#0075BF;height:26px" title="#0075BF"></td><td style="background:#E16E3C;height:26px" title="#E16E3C"></td><td style="background:#B5217E;height:26px" title="#B5217E"></td><td style="background:#574BF9;height:26px" title="#574BF9"></td><td style="background:#007783;height:26px" title="#007783"></td><td style="background:#6A7400;height:26px" title="#6A7400"></td><td style="background:#99A4AE;height:26px" title="#99A4AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">200° 青</th><td style="background:#00787D;height:26px" title="#00787D"></td><td style="background:#8246DB;height:26px" title="#8246DB"></td><td style="background:#B19000;height:26px" title="#B19000"></td><td style="background:#B73800;height:26px" title="#B73800"></td><td style="background:#B209B6;height:26px" title="#B209B6"></td><td style="background:#456A9E;height:26px" title="#456A9E"></td><td style="background:#00805D;height:26px" title="#00805D"></td><td style="background:#A3A0AE;height:26px" title="#A3A0AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">260° 蓝</th><td style="background:#4469A5;height:26px" title="#4469A5"></td><td style="background:#C81272;height:26px" title="#C81272"></td><td style="background:#2CAF62;height:26px" title="#2CAF62"></td><td style="background:#7B6A00;height:26px" title="#7B6A00"></td><td style="background:#D10015;height:26px" title="#D10015"></td><td style="background:#7F578C;height:26px" title="#7F578C"></td><td style="background:#007899;height:26px" title="#007899"></td><td style="background:#AD9EA3;height:26px" title="#AD9EA3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">300° 紫</th><td style="background:#735A9D;height:26px" title="#735A9D"></td><td style="background:#C33900;height:26px" title="#C33900"></td><td style="background:#00AAA7;height:26px" title="#00AAA7"></td><td style="background:#317E00;height:26px" title="#317E00"></td><td style="background:#9C5F00;height:26px" title="#9C5F00"></td><td style="background:#935169;height:26px" title="#935169"></td><td style="background:#4567BD;height:26px" title="#4567BD"></td><td style="background:#AE9F9B;height:26px" title="#AE9F9B"></td></tr></table>
<!-- /anchors -->

读任意一行都能感觉到：*绿*行是终端仪器的原版；*蓝*行读起来是公司；*红*行读起来是
编辑部警报；*紫*行读起来是产品发布。同一副骨头，不同的血。

---

## 三、它可推广

同样的变换压在宽版上——暖调、印刷安全、`C` 0.08–0.13——它照样活着，因为它的纪律
在彩度，不在色相：

<!-- anchors:broadsheet:cn -->
<table style="border-collapse:collapse;max-width:600px"><colgroup><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"></colgroup><tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">锚(系列一落在)</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">30° 红</th><td style="background:#B54334;height:26px" title="#B54334"></td><td style="background:#0B5F8A;height:26px" title="#0B5F8A"></td><td style="background:#419C88;height:26px" title="#419C88"></td><td style="background:#CD9931;height:26px" title="#CD9931"></td><td style="background:#685C96;height:26px" title="#685C96"></td><td style="background:#52794B;height:26px" title="#52794B"></td><td style="background:#A65D52;height:26px" title="#A65D52"></td><td style="background:#8D8578;height:26px" title="#8D8578"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">55° 橙</th><td style="background:#A75500;height:26px" title="#A75500"></td><td style="background:#3C5791;height:26px" title="#3C5791"></td><td style="background:#349AA1;height:26px" title="#349AA1"></td><td style="background:#AFA737;height:26px" title="#AFA737"></td><td style="background:#7C5589;height:26px" title="#7C5589"></td><td style="background:#367D62;height:26px" title="#367D62"></td><td style="background:#A16439;height:26px" title="#A16439"></td><td style="background:#888779;height:26px" title="#888779"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">85° 金</th><td style="background:#8B6800;height:26px" title="#8B6800"></td><td style="background:#5D4C8B;height:26px" title="#5D4C8B"></td><td style="background:#4994B8;height:26px" title="#4994B8"></td><td style="background:#7DB55F;height:26px" title="#7DB55F"></td><td style="background:#8C5071;height:26px" title="#8C5071"></td><td style="background:#1D7C7D;height:26px" title="#1D7C7D"></td><td style="background:#8F7026;height:26px" title="#8F7026"></td><td style="background:#81897C;height:26px" title="#81897C"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">150° 绿</th><td style="background:#00853B;height:26px" title="#00853B"></td><td style="background:#843E57;height:26px" title="#843E57"></td><td style="background:#8F7EBB;height:26px" title="#8F7EBB"></td><td style="background:#00B9C1;height:26px" title="#00B9C1"></td><td style="background:#8F5632;height:26px" title="#8F5632"></td><td style="background:#516D9E;height:26px" title="#516D9E"></td><td style="background:#478555;height:26px" title="#478555"></td><td style="background:#788A8B;height:26px" title="#788A8B"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">200° 青</th><td style="background:#007E83;height:26px" title="#007E83"></td><td style="background:#85451F;height:26px" title="#85451F"></td><td style="background:#B27395;height:26px" title="#B27395"></td><td style="background:#5FA8F1;height:26px" title="#5FA8F1"></td><td style="background:#716820;height:26px" title="#716820"></td><td style="background:#7D5F91;height:26px" title="#7D5F91"></td><td style="background:#00858A;height:26px" title="#00858A"></td><td style="background:#7D8792;height:26px" title="#7D8792"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">260° 蓝</th><td style="background:#356BC5;height:26px" title="#356BC5"></td><td style="background:#5E5D00;height:26px" title="#5E5D00"></td><td style="background:#B87859;height:26px" title="#B87859"></td><td style="background:#BD8ADF;height:26px" title="#BD8ADF"></td><td style="background:#2B7756;height:26px" title="#2B7756"></td><td style="background:#975862;height:26px" title="#975862"></td><td style="background:#5275AE;height:26px" title="#5275AE"></td><td style="background:#8A8390;height:26px" title="#8A8390"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">300° 紫</th><td style="background:#7D55B8;height:26px" title="#7D55B8"></td><td style="background:#286838;height:26px" title="#286838"></td><td style="background:#A28644;height:26px" title="#A28644"></td><td style="background:#DF7FAD;height:26px" title="#DF7FAD"></td><td style="background:#00757C;height:26px" title="#00757C"></td><td style="background:#945F3F;height:26px" title="#945F3F"></td><td style="background:#7D67A6;height:26px" title="#7D67A6"></td><td style="background:#908188;height:26px" title="#908188"></td></tr></table>
<!-- /anchors -->

一个例外证明规则：**okabe-ito 不能转。** 它的价值在为色盲可分性做的校准；转色相保住了
*混淆结构*却作废了测试。功能色板是一次测量，不是一种情绪。

---

## 四、会碰坏什么

- **色域裁剪。** 高彩度在黄（约 90–110°）附近、`L` 0.7 时不存在——转换器会把彩度拉回
  色域，所以那些格子比邻居略安静。盯着金行看能看出来。这是物理，不是 bug。
- **语义相撞。** 财经方案锚在绿，"涨"和"跌"就要跟品牌打架。任何东西锚在红，都是借了
  你未必挣得到的紧迫感。锚是一个含义，要按含义来选。
- **灰还是灰。** 保留的中性系列不参与旋转——它是让转动可读的那个不动点。

---

## 五、层级图

这一页在方案宇宙里的位置，自下而上：

| 层级 | 它是什么 | 谁在这里 |
| --- | --- | --- |
| 1 · 平面色板 | 策展好的十六进制清单 | szum 的六主题；多数产品 |
| 2 · 方案即对象 | 画布+系列+字体+坐标轴，可整体切换、被校验 | [本书的方案](../03-chart-schemes/cn.md) |
| 3 · **参数化** | 结构 × 锚 × 底 —— 生成器，不是清单 | 本页 |
| 4 · 选择 | agent 读数据与场景，替你选参数 | draw 的 SKILL |

每一层都让下一层更便宜：参数化之后，"配客户的 logo"是一个数字，不是一个设计项目。

---

## 六、接着读

| | |
| --- | --- |
| [图表风格方案](../03-chart-schemes/cn.md) | 被这里旋转的那四套系列色 |
| [磷光纸](../02-scheme-phosphor/cn.md) | 示例里用的方案 |
| [怎么读一套色板](../../1-overview/02-reading-a-palette/cn.md) | 审计旋转保住了什么 |
