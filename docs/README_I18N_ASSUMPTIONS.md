# README I18N Assumptions

## Assumptions

1. `README.md` is the source of truth.
2. Localized README files are useful for SEO/GEO/ASO discovery.
3. Root-level localized README files are better for GitHub visibility than burying them in `docs/`.
4. Initial localized README files can be concise as long as they preserve the core product logic.
5. Translation quality must not override claim safety.
6. More languages are not always better if maintenance capacity is weak.

## Current Decision

Use five root-level README files:

- English
- Simplified Chinese
- Japanese
- Korean
- Spanish

## Revisit Later

Revisit language expansion after:

- scanner exists
- first public feedback arrives
- product positioning stabilizes
- hosted product direction is clearer
