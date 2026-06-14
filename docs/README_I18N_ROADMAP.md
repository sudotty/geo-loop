# README I18N Roadmap

## Phase 1: Root README Files

Status: complete.

Added:

- `README.zh-CN.md`
- `README.ja.md`
- `README.ko.md`
- `README.es.md`

## Phase 2: Navigation and Consistency

Next:

- add language navigation block to `README.md`
- add automated link checks
- add required section checks
- add stale translation detection

## Phase 3: CLI Support

Future command:

```bash
geo-loop scan --i18n-readme
```

Expected checks:

- file exists
- links work
- required sections exist
- safety boundary preserved
- localized README does not add unsupported claims

## Phase 4: Additional Languages

Add only when useful for distribution:

- French
- German
- Portuguese Brazil
- Arabic
- Hindi

## Phase 5: GEO / ASO Experiments

Use localized README files as a seed layer for:

- multilingual SEO pages
- multilingual GEO prompt sets
- App Store localization drafts
- regional comparison pages
