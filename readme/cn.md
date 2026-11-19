# color

> [English](../README.md) | **简体中文**

一份关于**色系风格**的参考资料——马卡龙、莫兰迪、瑞士中立、北欧、侘寂、孟菲斯、霓虹这些一眼能认出来的配色样貌。

色板不是一串十六进制色值。**一个风格系列是一套系统**：一段明度与彩度的地带、一种组织对比的方式、一组关于"颜色允许出现在哪里"的规矩。懂了这个系统，才知道怎么挑出彼此协调的颜色——更有用的是，能看出一个色板什么时候已经跑偏了。

这个仓库放的是每个系列的文字解释，以及支撑它们的机读色板。

## 里面有什么

| 路径 | 内容 |
| --- | --- |
| [`docs/`](docs/README.md) | 文章——每个系列一组：定义、色板拆解、与相邻系列的对比、实际应用 |
| [`data/palettes.json`](data/palettes.json) | 全部色值收在一个文件里，带名称、角色，以及这个系列所处的色域带 |
| [`scripts/palette.mjs`](scripts/palette.mjs) | 色彩计算（HSL、OKLCH、WCAG 对比度）、文档表格生成、文档自检 |

## 七个系列

| 系列 | 一句话 |
| --- | --- |
| [马卡龙](docs/2-macaron/01-macaron-origin/cn.md) | 粉彩糖果色——明度高，甜而亲近 |
| [莫兰迪](docs/3-morandi/01-morandi-origin/cn.md) | 带灰的克制色——谁也不出声 |
| [瑞士中立](docs/4-swiss-neutral/01-swiss-neutral-origin/cn.md) | 近乎单色，只留一个信号色 |
| [北欧](docs/5-nordic/01-nordic-origin/cn.md) | 冷、浅、通透，用少量暖色救回来 |
| [侘寂](docs/6-wabi-sabi/01-wabi-sabi-origin/cn.md) | 取自泥土、带材质纹理的颜色 |
| [孟菲斯](docs/7-memphis/01-memphis-origin/cn.md) | 高彩度原色加亮粉——就是要吵 |
| [霓虹](docs/8-neon/01-neon-origin/cn.md) | 近黑的底布上点亮荧光 |

第一次接触这个概念，从[什么是色系风格](docs/1-overview/01-what-is-a-color-family/cn.md)开始；想直接挑一个，看[七个系列一眼看懂](docs/1-overview/03-family-at-a-glance/cn.md)。

## 用色板

色板就是普通 JSON，需要什么抄什么：

```json
{
  "id": "strawberry-milk",
  "name": { "en": "Strawberry Milk", "cn": "草莓牛奶" },
  "hex": "#F8C8DC",
  "role": "base"
}
```

查色板背后的数值——明度、彩度、对白底与黑底的对比度：

```sh
node scripts/palette.mjs stats
```

改完 `data/palettes.json` 后，重算文档里嵌的表格：

```sh
node scripts/palette.mjs tables
```

自检文档（缺页面、断链、色值不在色板里、表格过期）：

```sh
node scripts/palette.mjs check
```

## 文档

| 主题 | 英文 | 中文 |
| --- | --- | --- |
| 什么是色系风格 | [en](docs/1-overview/01-what-is-a-color-family/en.md) | [cn](docs/1-overview/01-what-is-a-color-family/cn.md) |
| 怎么读一套色板 | [en](docs/1-overview/02-reading-a-palette/en.md) | [cn](docs/1-overview/02-reading-a-palette/cn.md) |
| 七个系列一眼看懂 | [en](docs/1-overview/03-family-at-a-glance/en.md) | [cn](docs/1-overview/03-family-at-a-glance/cn.md) |

每篇文章都有中英两版，两个版本逐节对应。

## 许可

Apache-2.0，见 [LICENSE](../LICENSE)。
