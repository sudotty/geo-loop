# Copilot / AI Agent Instructions for GeoLoop

These instructions define how AI coding agents should work inside this repository.

GeoLoop is a GitHub-native SEO / GEO / ASO growth automation loop. It turns public demand signals into structured GitHub Issues, safe pull requests, validation reports and measurable growth experiments.

## Core Rule

Do not optimize for content volume. Optimize for trustworthy, reviewable, measurable improvements.

```text
signal -> hypothesis -> issue -> small PR -> validation -> measurement -> next loop
```

## Allowed Work

AI agents may modify the following areas when an issue explicitly allows them:

- README sections
- docs pages
- FAQ pages
- comparison pages
- use-case pages
- benchmark page templates
- metadata files
- structured data files
- internal links
- sitemap files
- OG image prompt files or drafts
- `llms.txt`
- growth reports
- App Store metadata draft files
- workflow documentation

## High-Risk Areas

Do not modify these areas without explicit human approval in the issue:

- pricing
- legal pages
- privacy policy
- terms of service
- checkout
- authentication
- billing
- App Store submission files
- production secrets
- deployment credentials
- medical, financial or education claims
- homepage hero claims with strong superiority language

## Truth and Evidence Rules

Never fabricate:

- benchmarks
- reviews
- user stories
- customer logos
- traffic numbers
- App Store rankings
- AI search rankings
- citations
- competitor facts
- pricing facts

If evidence is weak, write `needs validation`.

Use this structure for claim-heavy pages:

```text
Claim -> Evidence -> Source -> Comparison -> Procedure -> Update
```

## SEO Rules

When improving SEO, prefer:

- clear title
- clear meta description
- canonical URL
- structured headings
- internal links
- sitemap entries
- robots compatibility
- FAQ sections
- comparison tables
- use-case pages
- error-solving pages
- updated date

Avoid:

- keyword stuffing
- duplicate thin pages
- copied competitor content
- doorway pages
- fake testimonials
- unsupported superiority claims

## GEO Rules

When improving GEO, make pages answer-ready for AI search and LLM-based research.

Strong GEO pages usually include:

- concise definition
- target user
- problem
- solution
- comparison table
- step-by-step usage
- evidence or examples
- FAQ
- update date
- source links

Do not promise guaranteed visibility in ChatGPT, Perplexity, Gemini, Claude or Google AI Overview. GEO is probabilistic.

## ASO Rules

When creating ASO materials, only draft suggestions unless an issue explicitly says otherwise.

Allowed ASO outputs:

- app name candidates
- subtitle candidates
- keyword ideas
- screenshot copy ideas
- release note drafts
- localization ideas
- competitor metadata summaries
- review-language summaries

Do not submit App Store changes automatically.

## Pull Request Rules

Every PR should be small and reviewable.

PR body should include:

- linked issue
- files changed
- opportunity score if available
- risk level
- expected impact
- validation steps
- rollback plan
- measurement plan

Do not auto-merge.

## Validation Rules

Run or recommend relevant checks:

- build
- lint
- type check
- link check
- metadata check
- schema validation
- sitemap validation
- duplicate page check
- thin content check
- Playwright smoke test when relevant

If a check cannot be run, say so in the PR body.

## Preferred Writing Style

Use clear, factual language.

Prefer:

- short definitions
- tables
- examples
- step-by-step procedures
- explicit constraints
- measurable outcomes

Avoid:

- hype
- vague marketing language
- unsupported claims
- AI-sounding filler
- excessive adjectives

## Strategic Principle

```text
Do not defend one homepage.
Attack the whole search surface with truthful, structured, measurable assets.
```

Primary attack surfaces:

- problem keywords
- alternative keywords
- comparison keywords
- tutorial keywords
- benchmark keywords
- error keywords
- App Store review language
- Reddit complaint language
- GitHub issue language
- competitor changelog shifts
- AI answer gaps
