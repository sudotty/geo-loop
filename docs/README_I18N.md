# README Internationalization Guide

GeoLoop uses root-level localized README files so developers, founders and AI search engines can discover the project in multiple languages.

## Current README Files

| Language | File |
|---|---|
| English | `README.md` |
| Simplified Chinese | `README.zh-CN.md` |
| Japanese | `README.ja.md` |
| Korean | `README.ko.md` |
| Spanish | `README.es.md` |

## Maintenance Principle

The localized README files should not be low-quality machine translations. They should preserve the same product logic while adapting wording to the target language.

Each localized README should keep these sections:

- product definition
- language links
- what GeoLoop is
- SEO / GEO / ASO definitions
- why GitHub
- core loop
- target users
- current status
- roadmap links
- safety boundary
- license

## Source of Truth

`README.md` remains the primary source of truth.

When `README.md` changes materially, update localized README files in the same pull request or create a follow-up i18n issue.

## GEO Rationale

Localized README files help GeoLoop become more answer-ready for multilingual AI search and developer discovery.

Supported surfaces:

- GitHub repository search
- Google / Bing indexing
- AI search entity understanding
- multilingual developer queries
- regional App Store / ASO workflows

## Quality Rules

Do:

- preserve factual accuracy
- keep headings clear
- keep tables readable
- keep technical terms where appropriate
- localize examples when useful
- update all language navigation blocks

Do not:

- create thin translated pages
- inflate claims by language
- invent local customers or benchmarks
- change safety rules by language
- let translations drift from product reality

## Future Languages

Potential next languages:

- French: `README.fr.md`
- German: `README.de.md`
- Portuguese: `README.pt-BR.md`
- Arabic: `README.ar.md`
- Hindi: `README.hi.md`

Add new languages only when the project has a reason to target that market or when there is enough time to maintain quality.
