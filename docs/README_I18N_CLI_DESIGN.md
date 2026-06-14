# README I18N CLI Design

## Command

```bash
geo-loop scan --i18n-readme
```

## Purpose

Scan multilingual README files and report whether they are useful, safe and consistent.

## Input

- `README.md`
- localized README files from `growth/data/i18n-readme-languages.json`
- optional rules from `growth/rules/i18n-readme.yml`

## Output

- console summary
- `growth/reports/i18n-readme-report.md`
- optional issue drafts

## Console Example

```text
GeoLoop I18N README Scan

README.md: source
README.zh-CN.md: 92 / 100
README.ja.md: 88 / 100
README.ko.md: 88 / 100
README.es.md: 88 / 100

Overall: 89 / 100
Risk: low
Next: add language navigation to README.md
```

## Detection Heuristics

- heading-based section detection
- language-link detection
- keyword-based SEO/GEO/ASO section detection
- safety-boundary phrase detection
- forbidden claim detection
- broken relative link detection

## Non-Goals

The CLI should not judge translation beauty in MVP. It should check structure, consistency and risk first.
