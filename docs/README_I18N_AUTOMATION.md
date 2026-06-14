# README I18N Automation Design

## Goal

Add automated checks for multilingual README quality.

## MVP Inputs

- `README.md`
- `growth/data/i18n-readme-languages.json`
- `growth/rules/i18n-readme.yml`

## MVP Outputs

- `growth/reports/i18n-readme-report.md`
- optional issue draft section

## Checks

1. File exists
2. Required sections exist
3. Language navigation exists
4. Roadmap links exist
5. Safety boundary exists
6. Risk phrases are absent
7. CLI commands are not stale

## CLI

```bash
geo-loop scan --i18n-readme
```

## GitHub Action

Add i18n README scan to the existing weekly workflow after the real scanner is implemented.

## Permission Model

Read-only by default.

Future write mode should only create issue drafts or issues after explicit configuration.
