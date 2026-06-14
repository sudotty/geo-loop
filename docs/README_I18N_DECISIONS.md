# README I18N Decisions

## Decision 1: Use Root-Level README Files

Root-level files were chosen for discoverability:

- `README.zh-CN.md`
- `README.ja.md`
- `README.ko.md`
- `README.es.md`

## Decision 2: Keep `README.md` as Source of Truth

The English README remains the canonical version.

## Decision 3: Use Concise Localized Versions First

Localized versions are intentionally concise and focus on stable product logic.

## Decision 4: Add I18N Governance Docs

Supporting docs were added to prevent translation drift and claim inflation.

## Decision 5: Defer More Languages

French, German and Portuguese are useful, but should wait until i18n scanner support exists.
