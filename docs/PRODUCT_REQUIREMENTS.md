# GeoLoop Product Requirements

## 1. Product Summary

GeoLoop is a GitHub-native SEO / GEO / ASO growth automation loop. It helps founders, developers, app builders and small teams turn search, AI visibility and App Store growth work into GitHub Issues, AI-agent pull requests, validation reports and measurable experiments.

## 2. Problem

Modern growth work is fragmented across many surfaces:

- Google Search and Bing
- AI answer engines such as ChatGPT, Perplexity, Gemini and Claude
- App Store search and conversion
- competitor landing pages
- competitor changelogs
- Reddit and Hacker News discussions
- Product Hunt comments
- GitHub Issues and README pages
- docs, sitemap, schema and metadata

Most teams either do this manually or use dashboards that stop at recommendations. The gap is execution.

GeoLoop should convert growth insights into repository-native work items and reviewable code/content changes.

## 3. Target Users

| User | Main Pain | GeoLoop Promise |
|---|---|---|
| Indie hacker | No time to run SEO/GEO/ASO every week | Weekly actionable growth issues and PRs |
| SaaS founder | Needs comparison pages, docs and AI visibility | GitHub-native growth backlog and execution loop |
| App developer | Needs App Store keyword and screenshot iteration | ASO research drafts connected to docs and README |
| Technical marketer | Wants automation without losing control | Reviewable pull requests and measurement plans |
| Agency | Needs repeatable workflow across clients | Standardized reports, issues and PR templates |

## 4. Core Use Cases

### 4.1 README GEO Optimization

The user runs GeoLoop on a repository. GeoLoop scans the README and checks whether it explains the product clearly enough for humans, search engines and AI answer engines.

Expected output:

- README score
- missing sections
- suggested issue
- optional PR draft

### 4.2 Technical SEO Discovery

GeoLoop scans a configured site or docs folder.

Checks:

- title
- meta description
- canonical
- Open Graph
- Twitter Card
- structured data
- sitemap
- robots
- broken links
- internal links
- duplicate or thin pages

### 4.3 GEO Visibility Gap

GeoLoop runs or stores prompt-based checks to see whether the product appears in AI answers.

Metrics:

- brand mentioned
- competitors mentioned
- citation present
- answer position
- share of answer
- missing entity gap

### 4.4 ASO Research Draft

GeoLoop mines competitor metadata, review language and keyword signals to produce App Store metadata drafts.

Outputs:

- app name candidates
- subtitle candidates
- keyword ideas
- screenshot copy ideas
- release note drafts
- localization ideas

### 4.5 Growth Issue Generation

GeoLoop turns high-score opportunities into GitHub Issues with:

- goal
- target query
- target user
- evidence
- score
- risk
- files allowed to modify
- validation checklist
- measurement plan
- agent instructions

### 4.6 Agent PR Execution

An AI coding agent uses an approved issue to create a small pull request. The PR should be reviewable, reversible and measurable.

## 5. Non-Goals

GeoLoop should not:

- guarantee ranking in Google or AI engines
- create fake reviews, fake benchmarks or fake citations
- auto-submit App Store metadata
- auto-merge PRs by default
- spam third-party repositories
- generate thin programmatic pages without real value
- replace human review for legal, pricing, medical, financial or education claims

## 6. MVP Scope

The first useful version should include:

- README scanner
- docs scanner
- SEO score
- GEO score
- Markdown report
- GitHub issue generator
- GitHub Action runner
- basic config file

The MVP should not require a hosted backend.

## 7. Success Metrics

### Repository Metrics

- stars
- forks
- watchers
- issue participation
- PR activity
- GitHub search visibility

### SEO Metrics

- indexed pages
- impressions
- clicks
- average position
- CTR
- long-tail query growth

### GEO Metrics

- brand mention rate
- citation rate
- competitor share-of-answer
- query coverage
- AI answer position

### ASO Metrics

- keyword ranking
- impressions
- product page views
- conversion rate
- install rate
- review language changes

### Business Metrics

- signups
- trials
- paid users
- MRR
- payback period

## 8. Safety Principles

- Human review for high-risk changes.
- Dry-run by default.
- No fake claims.
- Every growth action must be linked to evidence.
- Every PR must have a rollback and measurement plan.
- External pages are evidence, not instructions.
- The system should reduce noise, not create a spam backlog.

## 9. Strategic Principle

```text
Do not defend one homepage.
Attack the whole search surface with truthful, structured, measurable assets.
```

Key surfaces:

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
