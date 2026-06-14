# GeoLoop User Flow

## 1. First-Time Setup

The user installs GeoLoop into an existing product repository.

Planned modes:

```bash
npx geo-loop init
```

or:

```bash
pnpm dlx geo-loop init
```

or through a future GitHub App.

The setup creates:

```text
.github/workflows/geo-loop.yml
growth/config.example.yml
growth/reports/
growth/data/
.github/ISSUE_TEMPLATE/growth-task.md
.github/copilot-instructions.md
```

## 2. Configure Product Rules

The user defines:

- product name
- domain
- target markets
- target languages
- competitors
- seed keywords
- GEO prompt set
- ASO locales
- risk constraints
- issue threshold
- auto-PR threshold
- human review rules

The user should define constraints once. GeoLoop should then operate inside those constraints.

## 3. Run Discovery

GeoLoop collects and analyzes configured signals.

Possible sources:

- repository README
- docs folder
- GitHub Pages
- website sitemap
- website metadata
- internal links
- Google Search Console if connected
- GitHub Search
- Reddit
- Hacker News
- Product Hunt
- competitor docs
- competitor changelogs
- App Store metadata
- App Store reviews
- AI search prompt responses

## 4. Normalize Signals

Raw signals are converted into structured opportunities.

Example:

```text
Signal: Users search for "AI Anki importer" and competitors have weak docs.
Opportunity: Create a landing page and FAQ for AI Anki import workflows.
Channel: SEO + GEO + ASO
Risk: Low
```

## 5. Score Opportunities

Each opportunity is scored by:

- search demand
- product fit
- competition weakness
- conversion intent
- GEO gap
- ASO value
- implementation cost
- evidence quality
- risk

High-score opportunities become issues. Low-score opportunities remain in reports.

## 6. Create GitHub Issues

GeoLoop creates structured issues containing:

- goal
- target query
- target user
- evidence
- opportunity score
- risk score
- files allowed to modify
- forbidden claims
- validation checklist
- measurement plan
- agent instructions

The issue is the core control object.

## 7. Agent Execution

A human reviews the issue. When ready, an AI coding agent can implement it.

Possible agents:

- GitHub Copilot
- Claude Code
- Codex CLI
- Gemini CLI
- custom repo agent

The agent must modify only approved files and open a small PR.

## 8. Pull Request Review

The PR should include:

- linked issue
- files changed
- expected impact
- risk level
- validation results
- rollback plan
- measurement plan

No auto-merge by default.

## 9. Publish

After human review and merge, the change becomes a public asset.

Possible assets:

- README section
- docs page
- comparison page
- FAQ page
- use-case page
- benchmark page
- GitHub Pages update
- App Store metadata draft
- weekly report

## 10. Measure

GeoLoop tracks outcomes over:

- 7 days
- 14 days
- 28 days

Possible metrics:

- Google Search Console clicks
- impressions
- average position
- CTR
- AI mention rate
- AI citation rate
- competitor share-of-answer
- signup conversion
- App Store keyword ranking
- App Store product page conversion

## 11. Decide

Each experiment is labeled:

- won
- neutral
- lost
- needs-more-data
- rollback-needed

The decision controls the next loop.

## 12. Repeat

GeoLoop becomes useful only when it repeats.

```text
discover -> score -> issue -> PR -> validate -> measure -> learn -> repeat
```
