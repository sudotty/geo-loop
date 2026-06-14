# README I18N Agent Rules

AI agents may help maintain multilingual README files, but they must follow strict rules.

## Allowed

- translate existing product logic
- improve local readability
- preserve technical terms
- update links
- add language navigation
- mark uncertain phrases for human review

## Forbidden

- invent local customers
- invent local rankings
- invent App Store performance
- invent AI citation results
- invent benchmark numbers
- add unsupported market leadership claims
- weaken safety boundaries
- change product roadmap by language

## Required PR Notes

When an agent updates localized README files, the PR body should include:

- source README version or commit
- files updated
- sections changed
- known translation uncertainties
- safety check result
- link check result

## Human Review

Human review is required when:

- a new language is added
- market-specific claims are introduced
- pricing or hosted plan language changes
- legal or privacy language is translated
- App Store or ASO claims are included
