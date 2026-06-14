# README I18N Scanner Backlog

## Scanner Features

- [ ] detect localized README files from manifest
- [ ] check required sections
- [ ] check language navigation
- [ ] check broken relative links
- [ ] check stale CLI commands
- [ ] check risk phrases
- [ ] calculate i18n README score
- [ ] render i18n report section
- [ ] generate issue drafts for missing sections

## Suggested Implementation Files

```text
src/scanners/i18nReadmeScanner.ts
src/report/i18nReadmeReport.ts
src/rules/i18nReadmeRules.ts
```

## Suggested Command

```bash
geo-loop scan --i18n-readme
```

## Dependency

Depends on the base README/docs scanner.
