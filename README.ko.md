# GeoLoop

**GitHub 네이티브 SEO / GEO / ASO 성장 자동화 루프.**

GeoLoop는 웹사이트, AI 제품, SaaS 랜딩 페이지, 문서 사이트, App Store 제품을 위한 GitHub 네이티브 성장 자동화 시스템입니다. SEO, GEO, ASO 기회를 지속적으로 발견하고, 이를 GitHub Issues로 전환한 뒤 Copilot / Claude Code / Codex / 기타 AI Agent가 Pull Request를 만들고, 변경 사항을 검증하며, 성과를 측정합니다.

> **GeoLoop는 GitHub 저장소를 스스로 개선되는 성장 시스템으로 바꾼다.**

---

## Languages

- [English](README.md)
- [简体中文](README.zh-CN.md)
- [日本語](README.ja.md)
- [한국어](README.ko.md)
- [Español](README.es.md)

---

## What is GeoLoop?

Traditional SEO / ASO work is usually manual:

```text
keyword research -> write content -> publish -> wait -> check results -> update manually
```

GeoLoop turns this into an engineering loop:

```text
discover -> score -> create issue -> agent fix -> pull request -> validate -> merge -> measure -> repeat
```

Core belief:

> **Growth work should be versioned, reviewed, tested, merged, rolled back and measured like software.**

---

## SEO, GEO and ASO

### SEO: Search Engine Optimization

For traditional search engines such as Google and Bing.

GeoLoop can inspect:

- page titles
- meta descriptions
- canonical URLs
- sitemap
- robots.txt
- Open Graph tags
- structured data
- internal links
- FAQ pages
- comparison pages
- tutorial pages
- error-solving pages

### GEO: Generative Engine Optimization

For AI answer engines and AI search products such as ChatGPT, Perplexity, Gemini, Claude and Google AI Overview.

GEO needs:

- clear definitions
- target users
- comparison tables
- FAQ blocks
- evidence and sources
- citation-ready facts
- updated dates
- competitor differences
- answer-ready content

GeoLoop does not promise guaranteed ranking in any AI engine. GEO is probabilistic and should be tracked through structured experiments.

### ASO: App Store Optimization

For App Store / Google Play search and conversion.

GeoLoop can generate drafts for:

- app name candidates
- subtitle candidates
- keyword ideas
- screenshot copy
- release notes
- localization
- competitor metadata analysis
- review language extraction

GeoLoop should not automatically submit App Store changes by default. It produces drafts for human review.

---

## Why GitHub?

GitHub is not only code hosting. It can also become a trusted public growth workspace.

| GitHub Asset | Growth Value |
|---|---|
| README | product positioning, installation, AI-readable entity page |
| Issues | pain points, keywords, roadmap and growth tasks |
| Pull Requests | reviewable and reversible growth changes |
| Releases | freshness and product evolution evidence |
| GitHub Actions | automation and validation engine |
| GitHub Pages | SEO/GEO documentation and landing pages |
| Copilot / AI Agent | implementation from structured issues |

GeoLoop is not just an AI writing tool. It turns growth into a GitHub-native workflow.

---

## Core Loop

```text
[External Signals]
Reddit / HN / GitHub Search / App Store Reviews / Google Trends / Competitor Docs
        ↓
[GitHub Actions]
Scheduled collection, cleanup, clustering and scoring
        ↓
[Growth Issues]
Each keyword, competitor gap, ASO signal or GEO gap becomes a structured issue
        ↓
[AI Agent]
Copilot / Claude Code / Codex / Gemini CLI updates README, docs, Pages or metadata
        ↓
[Pull Request]
Small, reviewable, reversible PR
        ↓
[Publish]
README / Docs / GitHub Pages / website / App Store metadata drafts
        ↓
[Measure]
GSC clicks, impressions, AI mention rate, ASO keyword rank, conversion
        ↓
[Next Loop]
Keep, expand, revert, localize or stop
```

---

## Target Users

| User | Pain | GeoLoop Promise |
|---|---|---|
| Indie hacker | No time for SEO/GEO/ASO | Weekly actionable issues and PRs |
| SaaS founder | Needs landing pages, comparison pages and AI visibility | GitHub-native growth backlog |
| App developer | Needs App Store keyword and screenshot iteration | ASO research and metadata drafts |
| Technical marketer | Wants automation without losing control | PR review and rollback workflow |
| Agency | Needs repeatable client delivery | Standardized reports, issues and PR templates |

---

## Current Status

This project is currently an **executable scaffold**, not a complete production crawler.

Already included:

- product positioning
- roadmap
- product requirements
- user flow
- architecture
- Copilot / AI Agent instructions
- growth task issue template
- TypeScript package scaffold
- initial scoring model
- initial Markdown report generator
- sample CLI
- sample GitHub Actions workflow

Current CLI:

```bash
npm install
npm run build
npm run scan
npm run report
```

Next priority:

```text
README/docs scanner -> real score output -> issue draft generation -> GitHub Action weekly report
```

---

## Roadmap

See:

- [ROADMAP.md](ROADMAP.md)
- [Product Requirements](docs/PRODUCT_REQUIREMENTS.md)
- [User Flow](docs/USER_FLOW.md)
- [Architecture](docs/ARCHITECTURE.md)

---

## Safety Boundary

GeoLoop should be aggressive in discovery but conservative in execution.

Allowed:

- competitor changelog monitoring
- public keyword research
- Reddit / HN / GitHub Search demand mining
- App Store review language extraction
- truthful comparison pages
- real benchmark pages
- structured GitHub Issues
- small AI-agent PRs
- human review before merge

Forbidden:

- fake reviews
- fake benchmarks
- fake customer stories
- fake AI citation screenshots
- bought stars or forks
- copied competitor content
- keyword stuffing
- spam in third-party repositories
- automatic App Store submission
- unreviewed changes to pricing, privacy, checkout or legal pages

Principle:

```text
Attack the information gap, not the trust system.
```

---

## License

MIT
