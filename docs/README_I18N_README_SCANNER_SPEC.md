# I18N README Scanner Spec

## Purpose

Detect and score localized README files.

## Inputs

- `README.md`
- `growth/data/i18n-readme-languages.json`
- `growth/rules/i18n-readme.yml`

## Outputs

- `growth/reports/i18n-readme-report.md`
- optional issue drafts

## Checks

1. File existence
2. Required section coverage
3. Language navigation
4. Broken links
5. Safety boundary
6. Risk phrases
7. Current status accuracy markers

## CLI Flag

```bash
geo-loop scan --i18n-readme
```

## Priority

Medium after base README/docs scanner.
