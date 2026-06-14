# GeoLoop Roadmap

GeoLoop is a GitHub-native SEO / GEO / ASO growth automation loop. The objective is to turn growth work into a versioned, reviewable, measurable software workflow.

## North Star

```text
public signals -> scored opportunities -> GitHub Issues -> AI-agent PRs -> validation -> measurement -> next loop
```

Every growth action should become:

- a signal
- a hypothesis
- an issue
- a pull request
- a published asset
- a measured result
- a decision for the next cycle

## Operating Thesis

Traditional SEO and ASO workflows are mostly manual: research keywords, write pages, publish, wait, and check results. In the AI-agent era, GitHub can become the growth workspace:

- GitHub Actions collect and normalize signals.
- GitHub Issues store opportunities and constraints.
- Copilot / Claude Code / Codex / other agents implement safe changes.
- Pull requests make growth work reviewable and reversible.
- GitHub Pages, docs, README and App Store metadata drafts become public assets.
- Measurement data decides whether to expand, revert or localize.

The goal is not to create another content generator. The goal is to build a disciplined growth loop.

---

## Phase 0: Product Specification

### Goal

Make the repository itself clear enough to act as a public landing page, AI-readable entity page and product design document.

### Deliverables

- README positioning
- product workflow
- safety principles
- issue model
- PR model
- scoring model draft
- KoreMemo example
- public roadmap

### Status

In progress.

---

## Phase 1: CLI MVP

### Goal

Build a local command-line tool that scans README and docs, then outputs a useful SEO/GEO readiness report.

### Commands

```bash
geo-loop scan
geo-loop report
geo-loop issue
```

### Scope

- README scanner
- docs scanner
- heading structure check
- first-screen positioning check
- FAQ and comparison table detection
- evidence/source detection
- updated-date detection
- basic SEO metadata check
- Markdown report generation
- issue draft generation

### Success Criteria

- Runs without backend.
- Works on any repository.
- Produces a report in under 60 seconds.
- Finds at least five actionable improvements in a weak README or docs site.

---

## Phase 2: GitHub Action

### Goal

Make GeoLoop run automatically inside GitHub.

### Triggers

```yaml
on:
  workflow_dispatch:
  schedule:
    - cron: "0 1 * * 1"
  pull_request:
  issues:
    types: [opened, edited, labeled]
```

### Deliverables

- `.github/workflows/geo-loop.yml`
- weekly Markdown report
- GitHub Action summary
- optional issue creation
- optional PR comment with findings

### Success Criteria

- A user can install GeoLoop with one YAML file.
- Weekly scans run without manual intervention.
- Findings are useful but not noisy.

---

## Phase 3: Opportunity Scoring

### Goal

Rank opportunities so GeoLoop does not create low-quality or spam-like issues.

### Scoring Dimensions

| Dimension | Meaning |
|---|---|
| Search demand | Is there real or likely search demand? |
| Product fit | Can the product honestly satisfy the intent? |
| Competition weakness | Are existing answers/pages weak, outdated or incomplete? |
| Conversion intent | Is the query close to signup, download or purchase? |
| GEO gap | Do AI engines mention competitors but not this product? |
| ASO value | Can the signal improve App Store title, subtitle, keywords or screenshots? |
| Implementation cost | Can the repository be improved safely? |
| Evidence quality | Is the signal backed by data or observable examples? |
| Risk | Does the task involve false claims, legal risk, medical/financial risk, spam or brand risk? |

### Draft Formula

```text
Opportunity Score = value score - risk penalty - implementation complexity penalty
```

### Success Criteria

Only high-value opportunities become GitHub Issues. Low-value findings remain in reports.

---

## Phase 4: GitHub Issue Generator

### Goal

Convert high-score opportunities into structured, agent-ready GitHub Issues.

### Required Issue Fields

- opportunity summary
- target channel: SEO / GEO / ASO / technical SEO
- target query or prompt
- target user
- evidence
- opportunity score
- risk score
- recommended files
- forbidden claims
- validation checklist
- measurement plan
- agent instructions

### Success Criteria

A generated issue should contain enough context for Copilot, Claude Code, Codex or another agent to create a safe, small PR.

---

## Phase 5: Agent PR Workflow

### Goal

Turn approved growth issues into reviewable pull requests.

### Allowed Change Areas

- README
- docs
- FAQ pages
- comparison pages
- use-case pages
- metadata
- structured data
- internal links
- sitemap
- OG image drafts
- `llms.txt`
- App Store metadata drafts

### High-Risk Areas Requiring Explicit Human Review

- pricing
- legal pages
- privacy policy
- checkout
- authentication
- App Store submission
- homepage hero copy
- medical, financial or education claims

### PR Requirements

Every PR should include:

- linked issue
- opportunity score
- risk level
- files changed
- expected impact
- validation results
- rollback plan
- measurement plan

### Success Criteria

PRs are small, reviewable and reversible. No auto-merge by default.

---

## Phase 6: External Signal Radar

### Goal

Collect public demand signals and turn them into growth hypotheses.

### Initial Sources

- GitHub Search
- GitHub Trending
- Reddit
- Hacker News
- Product Hunt
- App Store reviews
- competitor docs
- competitor changelogs
- competitor pricing pages
- Google Search Console, when configured

### Pipeline

```text
collect -> clean -> cluster -> score -> issue
```

### Success Criteria

GeoLoop can detect at least 10 useful opportunities per week for a real product without creating a spam backlog.

---

## Phase 7: GEO Visibility Tracking

### Goal

Track whether the product appears in AI search and LLM answer engines.

### Prompt Types

- brand query
- category query
- comparison query
- alternative query
- tutorial query
- best-tools query
- error-solving query

### Metrics

- brand mentioned
- competitor mentioned
- citation present
- answer position
- share of answer
- sentiment
- missing entity gap

### Constraint

GeoLoop must not promise guaranteed ranking in AI engines. GEO is noisy and probabilistic. The system tracks trends, gaps and experiments.

---

## Phase 8: ASO Research Loop

### Goal

Connect App Store optimization to the same GitHub-native workflow.

### Deliverables

- competitor metadata monitor
- review language extractor
- app name candidates
- subtitle candidates
- keyword field ideas
- screenshot copy ideas
- release note drafts
- localization drafts
- ASO experiment tracker

### Safety Rule

GeoLoop should produce ASO drafts only. It should not automatically submit App Store changes by default.

---

## Phase 9: Weekly Growth Report

### Goal

Summarize what changed, what worked and what should happen next.

### Report Sections

- new opportunities
- open issues
- completed issues
- pull requests
- validation results
- SEO results
- GEO results
- ASO draft results
- 7 / 14 / 28-day outcomes
- next recommended actions

### Output Formats

- Markdown
- HTML
- GitHub Pages dashboard later

---

## Phase 10: Hosted Product

### Goal

Turn GeoLoop into a product for indie hackers, app developers, SaaS builders and agencies.

### Possible Plans

| Plan | Price | Target User |
|---|---:|---|
| Open Source | $0 | developers |
| Indie | $9/month | indie hackers |
| Pro | $29/month | app and SaaS builders |
| Team | $99/month | small teams |
| Agency | $299/month | consultants and agencies |

### Hosted Features

- multi-repo dashboard
- multi-language monitoring
- competitor watch
- AI visibility history
- scheduled reports
- white-label exports
- payment integration

---

## First 30 Days

### Week 1

- finalize README
- finalize ROADMAP
- create issue template
- create Copilot instructions
- define scoring model
- create sample config

### Week 2

- build README scanner
- build Markdown report generator
- build basic GEO score
- build basic SEO score

### Week 3

- build GitHub Action
- generate weekly report
- generate issue drafts
- test on 3 repositories

### Week 4

- publish first case study
- add GitHub Pages docs
- submit carefully to Product Hunt / Reddit / Hacker News
- collect feedback
- decide whether to build hosted Pro

---

## First Case Study

Recommended case study:

```text
Use GeoLoop to improve an AI flashcard / Anki alternative project such as KoreMemo.
```

Target queries:

- AI flashcard app
- Anki AI alternative
- AI Anki importer
- Quizlet alternative
- spaced repetition AI
- language learning flashcards

Expected outputs:

- improved README
- comparison page
- FAQ page
- App Store metadata drafts
- GitHub Pages documentation
- weekly growth report
- visible Issues and PRs

---

## Final Principle

```text
Do not build another SEO tool.
Build a GitHub-native growth loop.
```

The wedge is:

```text
public signals -> structured growth hypotheses -> GitHub Issues -> AI-agent PRs -> public evidence -> measurable feedback
```
