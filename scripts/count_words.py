#!/usr/bin/env python3
"""Count words (English) / hanzi (Chinese) in the book articles, and verify
headings match between the en/cn pair and hex codes exist in data/palettes.json.
"""
import json
import re
import sys

ROOT = __file__.rsplit('/scripts/', 1)[0]

FILES = [
    'docs/2-macaron/02-macaron-palette/en.md',
    'docs/2-macaron/02-macaron-palette/cn.md',
    'docs/2-macaron/03-macaron-vs-morandi/en.md',
    'docs/2-macaron/03-macaron-vs-morandi/cn.md',
    'docs/2-macaron/04-macaron-in-practice/en.md',
    'docs/2-macaron/04-macaron-in-practice/cn.md',
]

FRONT = re.compile(r'^---\n.*?\n---\n', re.S)
BLOCK = re.compile(r'<!--.*?-->', re.S)
LINK_TARGET = re.compile(r'\]\([^)]*\)')
CJK = re.compile(r'[一-鿿]')


def strip(text):
    text = FRONT.sub('', text)
    text = BLOCK.sub('', text)
    lines = [ln for ln in text.split('\n') if not ln.lstrip().startswith('|')]
    text = '\n'.join(lines)
    return LINK_TARGET.sub(']', text)


def count_en(text):
    return len([t for t in strip(text).split() if re.search(r'[A-Za-z0-9]', t)])


def count_cn(text):
    return len(CJK.findall(strip(text)))


def headings(text):
    return [(len(m.group(1)), m.group(2).strip())
            for m in re.finditer(r'^(#{1,6})\s+(.*)$', text, re.M)]


def hexes(text):
    return set(re.findall(r'#[0-9A-Fa-f]{6}', text))


def main():
    with open(ROOT + '/data/palettes.json') as f:
        data = json.load(f)
    known = set(re.findall(r'#[0-9A-Fa-f]{6}', json.dumps(data)))

    ok = True
    for path in FILES:
        with open(ROOT + '/' + path) as f:
            text = f.read()
        is_cn = path.endswith('cn.md')
        n = count_cn(text) if is_cn else count_en(text)
        bad = hexes(text) - known
        print(f'{path:48s} {n:5d}')
        if bad:
            ok = False
            print('   UNKNOWN HEX:', sorted(bad))

    for base in ['02-macaron-palette', '03-macaron-vs-morandi',
                 '04-macaron-in-practice']:
        he = headings(open(f'{ROOT}/docs/2-macaron/{base}/en.md').read())
        hc = headings(open(f'{ROOT}/docs/2-macaron/{base}/cn.md').read())
        if [l for l, _ in he] != [l for l, _ in hc]:
            ok = False
            print(f'  HEADING LEVEL MISMATCH in {base}')
            print('   en:', [l for l, _ in he])
            print('   cn:', [l for l, _ in hc])
        else:
            print(f'  heading levels match: {base} ({len(he)} headings)')
        if len(he) != len(hc):
            ok = False
            print(f'  HEADING COUNT MISMATCH in {base}')

    print('OK' if ok else 'PROBLEMS FOUND')
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
