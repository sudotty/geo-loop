# Multilingual README Strategy

GeoLoop should use multilingual README files as both usability assets and GEO assets.

## Why Multilingual README Files Matter

A multilingual README improves:

- developer understanding across regions
- GitHub repository discovery
- AI search entity understanding
- localized SEO/GEO coverage
- future ASO workflows for international App Store markets

## Initial Languages

The current priority languages are:

| Language | Reason |
|---|---|
| English | default developer and startup language |
| Simplified Chinese | founder/developer use and internal strategy |
| Japanese | Japan market, App Store and developer ecosystem |
| Korean | Korea market, AI/app/product ecosystem |
| Spanish | broad international reach |

## Expansion Logic

Add languages when there is a real distribution reason.

Possible next languages:

| Language | File | Reason |
|---|---|---|
| French | `README.fr.md` | Europe, Canada, Africa |
| German | `README.de.md` | SaaS and developer market |
| Portuguese | `README.pt-BR.md` | Brazil and indie app market |
| Arabic | `README.ar.md` | Middle East growth and app market |
| Hindi | `README.hi.md` | India developer and app market |

## Maintenance Rule

Do not create languages faster than they can be maintained.

The source of truth is:

```text
README.md
```

When the product position changes, update all localized README files or create a follow-up Issue.

## GEO Rule

Localized README files should not be thin translated pages. Each should preserve the same core product structure:

```text
definition -> use case -> SEO/GEO/ASO explanation -> GitHub loop -> target users -> status -> safety
```

## Agent Rule

AI agents may help localize, but a human should review:

- terminology
- market-specific wording
- safety boundaries
- unsupported claims
- links

## Safety

Never add local claims unless they are backed by evidence.

Forbidden examples:

- fake local customers
- fake rankings
- fake App Store results
- fake AI citations
- fake benchmark numbers
- unsupported market leadership claims
