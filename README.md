# color

> **English** | [简体中文](readme/cn.md)

A reference for **colour style families** — the recognisable looks of a palette, such as macaron,
morandi, swiss neutral, nordic, wabi-sabi, memphis and neon.

A palette is not a list of hex codes. A *style family* is a system: a band of lightness and
chroma, a way of organising contrast, and a set of rules about where colour is allowed to appear.
Learning the family is what lets you pick colours that belong together — and, more usefully, to
recognise when a palette has drifted away from it.

This repository holds the written explanation of each family and the machine-readable palettes
behind it.

## What is here

| Path | What it holds |
| --- | --- |
| [`docs/`](docs/README.md) | The articles — one series per family, each with a definition, a palette walk-through, a comparison and a set of applications |
| [`data/palettes.json`](data/palettes.json) | Every colour value in one file, with its name, role and the band the family lives in |
| [`scripts/palette.mjs`](scripts/palette.mjs) | Colour maths (HSL, OKLCH, WCAG contrast), table generation for the docs, and a documentation linter |

## The families

| Family | One line |
| --- | --- |
| [Macaron](docs/2-macaron/01-macaron-origin/en.md) | Pastel candy colours — high lightness, sweet and approachable |
| [Morandi](docs/3-morandi/01-morandi-origin/en.md) | Grey-toned muted colours — nothing shouts |
| [Swiss neutral](docs/4-swiss-neutral/01-swiss-neutral-origin/en.md) | Near-monochrome with exactly one signal colour |
| [Nordic](docs/5-nordic/01-nordic-origin/en.md) | Cool, pale and airy, warmed by a few accents |
| [Wabi-sabi](docs/6-wabi-sabi/01-wabi-sabi-origin/en.md) | Earth-derived colours with visible texture |
| [Memphis](docs/7-memphis/01-memphis-origin/en.md) | High-chroma primaries and hot pink — loud on purpose |
| [Neon](docs/8-neon/01-neon-origin/en.md) | A near-black canvas lit by fluorescent accents |

Start with [What is a colour family](docs/1-overview/01-what-is-a-color-family/en.md) if you are
new to the idea, or [Family at a glance](docs/1-overview/03-family-at-a-glance/en.md) if you want to
choose one.

## Using the palettes

The palettes are plain JSON — copy what you need:

```json
{
  "id": "strawberry-milk",
  "name": { "en": "Strawberry Milk", "cn": "草莓牛奶" },
  "hex": "#F8C8DC",
  "role": "base"
}
```

To check the numbers behind a palette — lightness, chroma, contrast against white and black:

```sh
node scripts/palette.mjs stats
```

To regenerate the tables embedded in the docs after editing `data/palettes.json`:

```sh
node scripts/palette.mjs tables
```

To lint the documentation (missing pages, broken links, colours that do not exist in the palette,
out-of-date tables):

```sh
node scripts/palette.mjs check
```

## Documentation

| Topic | English | 中文 |
| --- | --- | --- |
| What is a colour family | [en](docs/1-overview/01-what-is-a-color-family/en.md) | [cn](docs/1-overview/01-what-is-a-color-family/cn.md) |
| Reading a palette | [en](docs/1-overview/02-reading-a-palette/en.md) | [cn](docs/1-overview/02-reading-a-palette/cn.md) |
| Family at a glance | [en](docs/1-overview/03-family-at-a-glance/en.md) | [cn](docs/1-overview/03-family-at-a-glance/cn.md) |

Every article exists in English and Chinese; the two versions mirror each other section for
section.

## Licence

Apache-2.0 — see [LICENSE](LICENSE).
