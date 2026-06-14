# README I18N Implementation Plan

## Goal

Add automated i18n README checking to GeoLoop.

## Phase 1: File Detection

Implement scanner that detects:

- `README.md`
- `README.zh-CN.md`
- `README.ja.md`
- `README.ko.md`
- `README.es.md`

## Phase 2: Required Section Detection

Detect whether each localized README contains:

- language links
- product definition
- SEO / GEO / ASO section
- GitHub loop section
- target users
- current status
- roadmap links
- safety boundary
- license

## Phase 3: Risk Detection

Flag risky phrases:

- guaranteed ranking
- guaranteed installs
- #1 app
- best in market
- verified by ChatGPT
- official App Store ranking
- benchmark leader

## Phase 4: Report Output

Add i18n section to generated Markdown reports:

```text
I18N README Score
Missing Sections
Broken Links
Risk Flags
Next Actions
```

## Phase 5: Issue Drafts

Generate issue drafts for:

- missing language navigation
- stale localized README
- missing safety boundary
- broken localized README links
- unsupported local claims
