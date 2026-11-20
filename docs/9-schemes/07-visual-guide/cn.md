---
x-title: 图解正反例 —— 用眼睛读理论
x-desc: 本书的每条规矩都画成一对卡片——常见错误挨着正确做法，数字写在卡下。这些 widget 是由色板数据生成的自足 HTML，按可抽取为 x-cmd/draw SVG 模板的形态设计。
x-sidebar: 图解正反例
x-keywords: 正反例, 配色错误, 对比度示例, 图解, 图表错误, do don't examples, visual guide
x-json-ld:
  '@context': https://schema.org
  '@graph':
    - '@type': TechArticle
      headline: '图解正反例 —— 用眼睛读理论'
      inLanguage: 'zh-CN'
      about: '每条颜色规矩的可视化正反例'
---

# 图解正反例 —— 用眼睛读理论

---

理论页写起来便宜，读起来昂贵。这一页是纠偏：本书的每条规矩画成**一对图**——错误挨着
正确，数字写在卡下。先看卡；文字只在你想抬杠的时候存在。

下面每个 widget 都由 [`data/palettes.json`](https://github.com/x-cmd/color/blob/main/data/palettes.json)
经 [`scripts/widgets.mjs`](https://github.com/x-cmd/color/blob/main/scripts/widgets.mjs) 生成——
这意味着每个都是自足单元，形态上就是为将来抽成 SVG 模板、挂上 x-cmd/draw
（`/draw?type=widget&name=…`）准备的。

---

## 一、文字压填充

<!-- widget:text-on-pastel:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="background:#FFF1A8;border-radius:8px;padding:14px;color:#4A4045;font-size:15px;font-weight:600">季度营收 1,203 万</div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">墨梅对柠檬 8.72 —— 正文级可读</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="background:#FFF1A8;border-radius:8px;padding:14px;color:#FFFFFF;font-size:15px;font-weight:600">季度营收 1,203 万</div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">白字对柠檬 1.14 —— 糊成一团</div>
  </div>
</div>
<!-- /widget -->

规矩：对比度哪边大，填充上就压哪种文字——见
[怎么读一套色板](../../1-overview/02-reading-a-palette/cn.md) 第一节。

---

## 二、家族属于它的底

<!-- widget:family-on-dark:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="background:#FFFDFB;border-radius:8px;padding:12px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#F8C8DC;border-radius:4px"></div><div style="flex:1;height:26px;background:#A8E6CF;border-radius:4px"></div><div style="flex:1;height:26px;background:#C3B1E1;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFF1A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFD3B6;border-radius:4px"></div><div style="flex:1;height:26px;background:#AED6F1;border-radius:4px"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">明度带按浅底校准:粉彩在奶油纸上恰好"低语"</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="background:#05060A;border-radius:8px;padding:12px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#F8C8DC;border-radius:4px"></div><div style="flex:1;height:26px;background:#A8E6CF;border-radius:4px"></div><div style="flex:1;height:26px;background:#C3B1E1;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFF1A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#FFD3B6;border-radius:4px"></div><div style="flex:1;height:26px;background:#AED6F1;border-radius:4px"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">同一色板压近黑底:全部发光,读成霓虹而不是马卡龙</div>
  </div>
</div>
<!-- /widget -->

七个家族里五个按浅底校准。搬走色板搬不走校准——见
[什么是色系风格](../../1-overview/01-what-is-a-color-family/cn.md) 第六节。

---

## 三、HSL 陷阱

<!-- widget:hsl-trap:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="width:56px;height:40px;background:#FFF1A8;border:1px solid #DDD;border-radius:6px"></div><div style="font-size:12px;color:#444">HSL 饱和度 <b>100%</b><br>实际彩度 OKLCH <b>0.09</b></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">按工具显示的"饱和度"理解粉彩,会高估 2 倍以上</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="width:56px;height:40px;background:#F43F5E;border-radius:6px"></div><div style="font-size:12px;color:#444">HSL 饱和度 <b>89%</b><br>实际彩度 OKLCH <b>0.22</b></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">两者"饱和度"几乎相同,实际色彩量差 2.4 倍——彩度要在 OKLCH 里读</div>
  </div>
</div>
<!-- /widget -->

HSL 的饱和度按最亮通道算，不按感知算。明度在 OKLCH 里动，HSL 饱和度整个忽略。

---

## 四、数值内标

<!-- widget:inside-label:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #8A8A8A;padding:4px 2px 0"><div style="position:relative;flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">12</div><div style="position:relative;flex:1;max-width:52px;height:40px;background:#1A7F37;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">19</div><div style="position:relative;flex:1;max-width:52px;height:52px;background:#BC4C00;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">26</div><div style="position:relative;flex:1;max-width:52px;height:30px;background:#8250DF;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">33</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">中段色(L 0.52–0.57)白字 4.9–5.4,内标成立</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #8A8A8A;padding:4px 2px 0"><div style="position:relative;flex:1;max-width:52px;height:64px;background:#F8C8DC;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">12</div><div style="position:relative;flex:1;max-width:52px;height:40px;background:#A8E6CF;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">19</div><div style="position:relative;flex:1;max-width:52px;height:52px;background:#AED6F1;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">26</div><div style="position:relative;flex:1;max-width:52px;height:30px;background:#FFD3B6;border-radius:4px 4px 0 0;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-size:10.5px;font-weight:600">33</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">粉彩白字仅 1.41 上下——数字要移到柱外或换墨色</div>
  </div>
</div>
<!-- /widget -->

中段填充白字内标成立；粉彩永远不成立。这正是
[draw 马卡龙变体设计](https://github.com/x-cmd-hub/draw/issues/133)绕开的那个缺口。

---

## 五、一个强调色

<!-- widget:one-accent:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="display:flex;gap:8px"><span style="padding:7px 16px;border-radius:8px;background:#FFAAA5;color:#000;font-size:12.5px;font-weight:700">立即开始</span><span style="padding:7px 16px;border-radius:8px;border:1px solid #4A4045;color:#4A4045;font-size:12.5px">文档</span><span style="padding:7px 16px;border-radius:8px;border:1px solid #4A4045;color:#4A4045;font-size:12.5px">示例</span></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">一眼一个动作:珊瑚独占"可以点"</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="display:flex;gap:8px"><span style="padding:7px 16px;border-radius:8px;background:#FFAAA5;color:#000;font-size:12.5px;font-weight:700">立即开始</span><span style="padding:7px 16px;border-radius:8px;background:#A8E6CF;color:#000;font-size:12.5px;font-weight:700">文档</span><span style="padding:7px 16px;border-radius:8px;background:#AED6F1;color:#000;font-size:12.5px;font-weight:700">示例</span></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">三个"按钮"打架,眼睛来回扫——强调是配给制</div>
  </div>
</div>
<!-- /widget -->

强调色不需要吵才被看见——它需要**独一份**。

---

## 六、密度跟彩度走

<!-- widget:density:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="padding:8px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #1A1A1A;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#FFE14D;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#FF9F1C;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#2EC4B6;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#3A86FF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">吵的颜色收紧排,能量才像设计而不像事故</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="padding:26px 30px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #1A1A1A;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#FFE14D;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#FF9F1C;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#2EC4B6;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#3A86FF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">高彩度 + 大留白 = 未完成感;留白是安静家族挣的</div>
  </div>
</div>
<!-- /widget -->

吵的色板挣到紧凑，安静的色板挣到空气。交叉了就读起来像没做完。

---

## 七、网格是服务生，不是演员

<!-- widget:grid-weight:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="position:relative"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#1A7F37;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#BC4C00;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#8250DF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">发丝网格:结构在,注意力在数据</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="background:repeating-linear-gradient(0deg,#9A9A9A 0,#9A9A9A 2px,transparent 2px,transparent 16px);border-radius:6px;padding-top:2px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:3px solid #555;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:40px;background:#1A7F37;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:52px;background:#BC4C00;border-radius:4px 4px 0 0"></div><div style="flex:1;max-width:52px;height:30px;background:#8250DF;border-radius:4px 4px 0 0"></div></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">网格比系列还响 = 图在承认无话可说</div>
  </div>
</div>
<!-- /widget -->

---

## 八、溢出必须同族同血

<!-- widget:overflow:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#72CEDC;border-radius:4px"></div><div style="flex:1;height:26px;background:#F3C898;border-radius:4px"></div><div style="flex:1;height:26px;background:#7698D6;border-radius:4px"></div><div style="flex:1;height:26px;background:#D281A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#82BA95;border-radius:4px"></div><div style="flex:1;height:26px;background:#5AAFC4;border-radius:4px"></div><div style="flex:1;height:26px;background:#D9AF7E;border-radius:4px"></div><div style="flex:1;height:26px;background:#5F82BE;border-radius:4px"></div><div style="flex:1;height:26px;background:#B76E96;border-radius:4px"></div><div style="flex:1;height:26px;background:#6BA37E;border-radius:4px"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">同族延伸:软色板超编时按同气质加深,第 10 色仍是 OpenData</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="display:flex;gap:4px"><div style="flex:1;height:26px;background:#72CEDC;border-radius:4px"></div><div style="flex:1;height:26px;background:#F3C898;border-radius:4px"></div><div style="flex:1;height:26px;background:#7698D6;border-radius:4px"></div><div style="flex:1;height:26px;background:#D281A8;border-radius:4px"></div><div style="flex:1;height:26px;background:#82BA95;border-radius:4px"></div><div style="flex:1;height:26px;background:#F59E0B;border-radius:4px"></div><div style="flex:1;height:26px;background:#0EA5E9;border-radius:4px"></div><div style="flex:1;height:26px;background:#8B5CF6;border-radius:4px"></div><div style="flex:1;height:26px;background:#EC4899;border-radius:4px"></div><div style="flex:1;height:26px;background:#6366F1;border-radius:4px"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">全局 Tailwind 溢出:第 6 色起突然鲜艳 —— 今天的 padSeries 行为(实测)</div>
  </div>
</div>
<!-- /widget -->

数据超过色板长度时，延伸档必须保持家族气质——今天的全局溢出表在线上就破坏这一点，
实测见 [draw 审计](https://github.com/x-cmd-hub/draw/issues/133)。

---

## 九、渐变是一种方言

<!-- widget:gradient-vs-solid:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:#0969DA;border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:44px;background:#0969DA;border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:56px;background:#0969DA;border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:34px;background:#0969DA;border-radius:3px 3px 0 0"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">Primer 单色:GitHub 图表不做渐变</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="display:flex;gap:8px;align-items:flex-end;height:66px;border-bottom:1px solid #D0D7DE;padding:4px 2px 0"><div style="flex:1;max-width:52px;height:64px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:44px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:56px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div><div style="flex:1;max-width:52px;height:34px;background:linear-gradient(90deg,#0969DA,#1A7F37);border-radius:3px 3px 0 0"></div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">蓝→绿渐变:每根柱两种语义色,平台气质全失</div>
  </div>
</div>
<!-- /widget -->

---

## 十、永远别赌红对绿

<!-- widget:cvd:cn -->
<div style="display:flex;gap:14px;flex-wrap:wrap;font-family:ui-sans-serif,system-ui,-apple-system,'PingFang SC','Segoe UI',sans-serif;margin:16px 0">

  <div style="flex:1;min-width:250px;border:1px solid #9ACD9A;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#1A6B3C;background:#EFF8F0">✅ 对</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="display:flex;gap:4px"><div style="width:40px;height:26px;background:#CBD130;border-radius:4px"></div><div style="width:40px;height:26px;background:#2B229F;border-radius:4px"></div></div><div style="font-size:11.5px;color:#666">红绿色盲视角:橙 vs 蓝 仍然分开</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">Okabe-Ito:用明度+蓝橙轴,不赌红绿</div>
  </div>

  <div style="flex:1;min-width:250px;border:1px solid #E0A0A0;border-radius:10px;overflow:hidden;background:#FFFFFF">
    <div style="display:flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:700;color:#A02020;background:#FBF0F0">❌ 错</div>
    <div style="padding:14px"><div style="display:flex;gap:10px;align-items:center"><div style="display:flex;gap:4px"><div style="width:40px;height:26px;background:#8E9B2A;border-radius:4px"></div><div style="width:40px;height:26px;background:#40384D;border-radius:4px"></div></div><div style="font-size:11.5px;color:#666">红绿色盲视角:红绿几近同色</div></div></div>
    <div style="padding:8px 12px;font-size:11.5px;color:#666;border-top:1px solid #EEE;background:#FAFAFA">约 8% 男性分不开这对 —— "红涨绿跌"要配形状/位置双编码</div>
  </div>
</div>
<!-- /widget -->

---

## 十一、从 widget 到 SVG 模板

这十张卡是一个 draw 功能的种子：`scripts/widgets.mjs` 里的每个 `WIDGETS` 条目收一个
名字和一种语言，只读色板注册表，输出自足 HTML、内联样式——无脚本、无外部 CSS。抽到
`/draw?type=widget` 是移植而不是重设计：同名（`text-on-pastel`、`cvd`…）、同注册表、
SVG 换 HTML。教学页从此可以像嵌图表一样嵌正反例卡。

---

## 十二、接着读

| | |
| --- | --- |
| [怎么读一套色板](../../1-overview/02-reading-a-palette/cn.md) | 这些卡片引用的数字 |
| [图表风格方案](../03-chart-schemes/cn.md) | 这些卡片穿的色板 |
| [GitHub 场景的图表配色](../06-github-charts/cn.md) | 其中几条规矩的出处 |
