# I18N README Plan

Generated manually as part of the initial GeoLoop multilingual README setup.

## Added Languages

| Language | File | Status |
|---|---|---|
| English | `README.md` | existing source of truth |
| Simplified Chinese | `README.zh-CN.md` | added |
| Japanese | `README.ja.md` | added |
| Korean | `README.ko.md` | added |
| Spanish | `README.es.md` | added |

## Supporting Files

- `docs/README_I18N.md`
- `docs/LANGUAGE_STRATEGY.md`
- `docs/I18N.md`
- `docs/README_NAVIGATION.md`
- `growth/prompts/i18n-readme-checklist.md`
- `growth/rules/i18n-readme.yml`

## Next Work

1. Add language navigation to the top of `README.md` if not already present.
2. Add a future scanner rule to check whether localized README files are stale.
3. Add optional French, German and Portuguese READMEs only when there is a real distribution reason.
4. Add i18n consistency checks to `geo-loop scan`.

## Safety

Localized README files must not introduce unsupported local claims, fake customers, fake rankings, fake AI citations or fake benchmark data.
