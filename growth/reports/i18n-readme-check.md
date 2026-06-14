# I18N README Check

## Summary

GeoLoop now has root-level multilingual README files.

## Active Files

- `README.md`
- `README.zh-CN.md`
- `README.ja.md`
- `README.ko.md`
- `README.es.md`

## Required Sections Check

| Section | Status |
|---|---|
| Product definition | present |
| Language links | present |
| What is GeoLoop | present |
| SEO / GEO / ASO | present |
| Why GitHub | present |
| Core loop | present |
| Target users | present |
| Current status | present |
| Roadmap links | present |
| Safety boundary | present |
| License | present |

## Known Limitations

- The localized README files are concise versions, not full line-by-line translations of `README.md`.
- The main `README.md` may still need a top-level language navigation block if it is not already present.
- No automated i18n drift checker exists yet.

## Recommended Next Issue

Create an i18n scanner that compares localized README files against the source README and reports missing required sections.
