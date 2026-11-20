---
x-title: 色相锚 —— 同一风格，每种血色
x-desc: red、blue、green、purple 不是风格，是锚点。把方案的结构与它在色环上的位置拆开，一套方案就变成无数套。每个锚点都以真实界面示例渲染。
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

旋转**永远做不到**的是跨结构。把马卡龙转一千度它也不会变成侘寂——这两者差在 `L` 带
和彩度预算上，而那两样恰恰被旋转按定义锁死。跨风格是主题的另一根轴，见
[字体与间距](../05-type-and-spacing/cn.md)。

---

## 二、一套方案，七个锚 —— 穿在身上

这次不是表格，是**穿在身上**。同一套界面、同一张八系列图，磷光纸的每个锚点各穿一次。
每张卡都是算出来的：锁明度、锁彩度、转色环。

<!-- anchor-cards:phosphor:cn -->
<div style="border:1px solid #D3D0D0;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FAF8F7;border-bottom:1px solid #D3D0D0">
    <strong style="color:#2C1F1B;font-size:13px">磷光纸 · 30° 红</strong>
    <code style="color:#726460;font-size:12px">#9D5044</code>
  </div>
  <div style="padding:14px 16px;background:#FAF8F7">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#9D5044;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #2C1F1B;color:#2C1F1B;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #726460;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#9D5044"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#5A7E00"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#8784F1"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#007599"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#008550"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#80651D"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A8436F"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#A0A598"></div></div>
  </div>
</div>
<div style="border:1px solid #D2D1CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FAF8F7;border-bottom:1px solid #D2D1CF">
    <strong style="color:#2A2118;font-size:13px">磷光纸 · 55° 橙</strong>
    <code style="color:#70655D;font-size:12px">#975726</code>
  </div>
  <div style="padding:14px 16px;background:#FAF8F7">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#975726;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #2A2118;color:#2A2118;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #70655D;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#975726"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#008743"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#AE76DE"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#006AC4"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#008173"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#6A6E27"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#AF4448"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#9BA69C"></div></div>
  </div>
</div>
<div style="border:1px solid #D2D1CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F9F8F7;border-bottom:1px solid #D2D1CF">
    <strong style="color:#262317;font-size:13px">磷光纸 · 85° 金</strong>
    <code style="color:#6B675B;font-size:12px">#856406</code>
  </div>
  <div style="padding:14px 16px;background:#F9F8F7">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#856406;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #262317;color:#262317;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6B675B;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#856406"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#008375"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#CF6AB6"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#614FD6"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#007D8F"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#477643"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A94F00"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#96A7A3"></div></div>
  </div>
</div>
<div style="border:1px solid #D0D1D0;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7F9F8;border-bottom:1px solid #D0D1D0">
    <strong style="color:#1A261F;font-size:13px">磷光纸 · 150° 绿</strong>
    <code style="color:#5F6B63;font-size:12px">#367A48</code>
  </div>
  <div style="padding:14px 16px;background:#F7F9F8">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#367A48;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A261F;color:#1A261F;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5F6B63;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#367A48"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#0075BF"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#E16E3C"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#B5217E"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#574BF9"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#007783"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#6A7400"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#99A4AE"></div></div>
  </div>
</div>
<div style="border:1px solid #CFD1D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7F9F9;border-bottom:1px solid #CFD1D2">
    <strong style="color:#172528;font-size:13px">磷光纸 · 200° 青</strong>
    <code style="color:#5B6B6D;font-size:12px">#00787D</code>
  </div>
  <div style="padding:14px 16px;background:#F7F9F9">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#00787D;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #172528;color:#172528;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5B6B6D;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#00787D"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#8246DB"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#B19000"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#B73800"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#B209B6"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#456A9E"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#00805D"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#A3A0AE"></div></div>
  </div>
</div>
<div style="border:1px solid #D0D1D3;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7F9FA;border-bottom:1px solid #D0D1D3">
    <strong style="color:#1E222D;font-size:13px">磷光纸 · 260° 蓝</strong>
    <code style="color:#626772;font-size:12px">#4469A5</code>
  </div>
  <div style="padding:14px 16px;background:#F7F9FA">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#4469A5;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1E222D;color:#1E222D;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #626772;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#4469A5"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#C81272"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#2CAF62"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#7B6A00"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#D10015"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#7F578C"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#007899"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#AD9EA3"></div></div>
  </div>
</div>
<div style="border:1px solid #D1D1D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F9F8FA;border-bottom:1px solid #D1D1D2">
    <strong style="color:#26202A;font-size:13px">磷光纸 · 300° 紫</strong>
    <code style="color:#6A6570;font-size:12px">#735A9D</code>
  </div>
  <div style="padding:14px 16px;background:#F9F8FA">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#735A9D;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #26202A;color:#26202A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6A6570;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#735A9D"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#C33900"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#00AAA7"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#317E00"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#9C5F00"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#935169"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#4567BD"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#AE9F9B"></div></div>
  </div>
</div>
<!-- /anchor-cards -->

每个锚读起来是什么：

| 锚 | 它读起来是 |
| --- | --- |
| 30° 红 | 编辑部警报 —— 财经版的红，天生的紧迫 |
| 55° 橙 | 消费能量 —— 吃的、健身、一切想要胃口的 |
| 85° 金 | 传承的高级 —— 银行、威士忌、律所 |
| 150° 绿 | 终端原版 —— 仪器，x-cmd 自己的血 |
| 200° 青 | 临床的平静 —— 医疗、分析 |
| 260° 蓝 | 公司默认 —— 安全、机构、略无名 |
| 300° 紫 | 产品发布 —— 每场科技首秀都伸手去拿的颜色 |

同样七个锚压成一张紧凑矩阵，方便一眼对比：

<!-- anchors:phosphor:cn -->
<table style="border-collapse:collapse;max-width:600px"><colgroup><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"><col style="width:44px"></colgroup><tr><th style="text-align:left;font-size:12px;color:#6E6A66;font-weight:600">锚(系列一落在)</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">30° 红</th><td style="background:#9D5044;height:26px" title="#9D5044"></td><td style="background:#5A7E00;height:26px" title="#5A7E00"></td><td style="background:#8784F1;height:26px" title="#8784F1"></td><td style="background:#007599;height:26px" title="#007599"></td><td style="background:#008550;height:26px" title="#008550"></td><td style="background:#80651D;height:26px" title="#80651D"></td><td style="background:#A8436F;height:26px" title="#A8436F"></td><td style="background:#A0A598;height:26px" title="#A0A598"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">55° 橙</th><td style="background:#975726;height:26px" title="#975726"></td><td style="background:#008743;height:26px" title="#008743"></td><td style="background:#AE76DE;height:26px" title="#AE76DE"></td><td style="background:#006AC4;height:26px" title="#006AC4"></td><td style="background:#008173;height:26px" title="#008173"></td><td style="background:#6A6E27;height:26px" title="#6A6E27"></td><td style="background:#AF4448;height:26px" title="#AF4448"></td><td style="background:#9BA69C;height:26px" title="#9BA69C"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">85° 金</th><td style="background:#856406;height:26px" title="#856406"></td><td style="background:#008375;height:26px" title="#008375"></td><td style="background:#CF6AB6;height:26px" title="#CF6AB6"></td><td style="background:#614FD6;height:26px" title="#614FD6"></td><td style="background:#007D8F;height:26px" title="#007D8F"></td><td style="background:#477643;height:26px" title="#477643"></td><td style="background:#A94F00;height:26px" title="#A94F00"></td><td style="background:#96A7A3;height:26px" title="#96A7A3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">150° 绿</th><td style="background:#367A48;height:26px" title="#367A48"></td><td style="background:#0075BF;height:26px" title="#0075BF"></td><td style="background:#E16E3C;height:26px" title="#E16E3C"></td><td style="background:#B5217E;height:26px" title="#B5217E"></td><td style="background:#574BF9;height:26px" title="#574BF9"></td><td style="background:#007783;height:26px" title="#007783"></td><td style="background:#6A7400;height:26px" title="#6A7400"></td><td style="background:#99A4AE;height:26px" title="#99A4AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">200° 青</th><td style="background:#00787D;height:26px" title="#00787D"></td><td style="background:#8246DB;height:26px" title="#8246DB"></td><td style="background:#B19000;height:26px" title="#B19000"></td><td style="background:#B73800;height:26px" title="#B73800"></td><td style="background:#B209B6;height:26px" title="#B209B6"></td><td style="background:#456A9E;height:26px" title="#456A9E"></td><td style="background:#00805D;height:26px" title="#00805D"></td><td style="background:#A3A0AE;height:26px" title="#A3A0AE"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">260° 蓝</th><td style="background:#4469A5;height:26px" title="#4469A5"></td><td style="background:#C81272;height:26px" title="#C81272"></td><td style="background:#2CAF62;height:26px" title="#2CAF62"></td><td style="background:#7B6A00;height:26px" title="#7B6A00"></td><td style="background:#D10015;height:26px" title="#D10015"></td><td style="background:#7F578C;height:26px" title="#7F578C"></td><td style="background:#007899;height:26px" title="#007899"></td><td style="background:#AD9EA3;height:26px" title="#AD9EA3"></td></tr><tr><th style="text-align:left;font-weight:500;white-space:nowrap">300° 紫</th><td style="background:#735A9D;height:26px" title="#735A9D"></td><td style="background:#C33900;height:26px" title="#C33900"></td><td style="background:#00AAA7;height:26px" title="#00AAA7"></td><td style="background:#317E00;height:26px" title="#317E00"></td><td style="background:#9C5F00;height:26px" title="#9C5F00"></td><td style="background:#935169;height:26px" title="#935169"></td><td style="background:#4567BD;height:26px" title="#4567BD"></td><td style="background:#AE9F9B;height:26px" title="#AE9F9B"></td></tr></table>
<!-- /anchors -->

---

## 三、它可推广

同样的变换压在宽版上——暖调、印刷安全、`C` 0.08–0.13——它照样活着，因为它的纪律
在彩度，不在色相：

<!-- anchor-cards:broadsheet:cn -->
<div style="border:1px solid #D4D1CD;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FBF9F4;border-bottom:1px solid #D4D1CD">
    <strong style="color:#1A1A1A;font-size:13px">宽版 · 30° 红</strong>
    <code style="color:#6F675C;font-size:12px">#B54334</code>
  </div>
  <div style="padding:14px 16px;background:#FBF9F4">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#B54334;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6F675C;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#B54334"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#0B5F8A"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#419C88"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#CD9931"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#685C96"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#52794B"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A65D52"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#8D8578"></div></div>
  </div>
</div>
<div style="border:1px solid #D2D2CD;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F9FAF4;border-bottom:1px solid #D2D2CD">
    <strong style="color:#1A1A1A;font-size:13px">宽版 · 55° 橙</strong>
    <code style="color:#6A695C;font-size:12px">#A75500</code>
  </div>
  <div style="padding:14px 16px;background:#F9FAF4">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#A75500;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6A695C;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#A75500"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#3C5791"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#349AA1"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#AFA737"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#7C5589"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#367D62"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#A16439"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#888779"></div></div>
  </div>
</div>
<div style="border:1px solid #CFD3CF;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F7FAF6;border-bottom:1px solid #CFD3CF">
    <strong style="color:#1A1A1A;font-size:13px">宽版 · 85° 金</strong>
    <code style="color:#646A5F;font-size:12px">#8B6800</code>
  </div>
  <div style="padding:14px 16px;background:#F7FAF6">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#8B6800;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #646A5F;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#8B6800"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#5D4C8B"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#4994B8"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#7DB55F"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#8C5071"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#1D7C7D"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#8F7026"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#81897C"></div></div>
  </div>
</div>
<div style="border:1px solid #CDD3D4;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F4FBFB;border-bottom:1px solid #CDD3D4">
    <strong style="color:#1A1A1A;font-size:13px">宽版 · 150° 绿</strong>
    <code style="color:#5C6C6B;font-size:12px">#00853B</code>
  </div>
  <div style="padding:14px 16px;background:#F4FBFB">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#00853B;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5C6C6B;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#00853B"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#843E57"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#8F7EBB"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#00B9C1"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#8F5632"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#516D9E"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#478555"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#788A8B"></div></div>
  </div>
</div>
<div style="border:1px solid #CFD2D6;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#F6F9FE;border-bottom:1px solid #CFD2D6">
    <strong style="color:#1A1A1A;font-size:13px">宽版 · 200° 青</strong>
    <code style="color:#5F6973;font-size:12px">#007E83</code>
  </div>
  <div style="padding:14px 16px;background:#F6F9FE">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#007E83;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #5F6973;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#007E83"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#85451F"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#B27395"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#5FA8F1"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#716820"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#7D5F91"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#00858A"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#7D8792"></div></div>
  </div>
</div>
<div style="border:1px solid #D3D0D5;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FBF8FC;border-bottom:1px solid #D3D0D5">
    <strong style="color:#1A1A1A;font-size:13px">宽版 · 260° 蓝</strong>
    <code style="color:#6B6571;font-size:12px">#356BC5</code>
  </div>
  <div style="padding:14px 16px;background:#FBF8FC">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#356BC5;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #6B6571;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#356BC5"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#5E5D00"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#B87859"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#BD8ADF"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#2B7756"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#975862"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#5275AE"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#8A8390"></div></div>
  </div>
</div>
<div style="border:1px solid #D6D0D2;border-radius:12px;overflow:hidden;max-width:640px;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:14px 0;box-shadow:0 1px 3px rgb(0 0 0 / 6%)">
  <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 16px;background:#FDF7F9;border-bottom:1px solid #D6D0D2">
    <strong style="color:#1A1A1A;font-size:13px">宽版 · 300° 紫</strong>
    <code style="color:#71646A;font-size:12px">#7D55B8</code>
  </div>
  <div style="padding:14px 16px;background:#FDF7F9">
    <div style="display:flex;gap:8px;margin-bottom:12px">
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;background:#7D55B8;color:#FFFFFF;font-size:12.5px;font-weight:600">主要操作</span>
      <span style="display:inline-block;padding:6px 14px;border-radius:8px;border:1px solid #1A1A1A;color:#1A1A1A;font-size:12.5px">次要操作</span>
    </div>
    <div style="display:flex;gap:8px;align-items:flex-end;border-bottom:1px solid #71646A;padding:4px 2px 0;height:68px"><div style="flex:1;max-width:46px;height:64px;border-radius:4px 4px 0 0;background:#7D55B8"></div><div style="flex:1;max-width:46px;height:40px;border-radius:4px 4px 0 0;background:#286838"></div><div style="flex:1;max-width:46px;height:54px;border-radius:4px 4px 0 0;background:#A28644"></div><div style="flex:1;max-width:46px;height:32px;border-radius:4px 4px 0 0;background:#DF7FAD"></div><div style="flex:1;max-width:46px;height:48px;border-radius:4px 4px 0 0;background:#00757C"></div><div style="flex:1;max-width:46px;height:26px;border-radius:4px 4px 0 0;background:#945F3F"></div><div style="flex:1;max-width:46px;height:44px;border-radius:4px 4px 0 0;background:#7D67A6"></div><div style="flex:1;max-width:46px;height:58px;border-radius:4px 4px 0 0;background:#908188"></div></div>
  </div>
</div>
<!-- /anchor-cards -->

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
| 3 · **参数化** | 结构 × 锚 × 皮肤 —— 生成器，不是清单 | 本页 + [字体与间距](../05-type-and-spacing/cn.md) |
| 4 · 选择 | agent 读数据与场景，替你选参数 | draw 的 SKILL |

每一层都让下一层更便宜：参数化之后，"配客户的 logo"是一个数字，不是一个设计项目。

---

## 六、接着读

| | |
| --- | --- |
| [字体与间距](../05-type-and-spacing/cn.md) | 第三根轴 —— 字体、密度、圆角、网格 |
| [图表风格方案](../03-chart-schemes/cn.md) | 被这里旋转的那四套系列色 |
| [磷光纸](../02-scheme-phosphor/cn.md) | 示例里用的方案 |
