# GeoLoop

**GitHub-native SEO, GEO and ASO growth automation loop.**

GeoLoop is a GitHub-native growth automation system for websites, AI products, SaaS landing pages, documentation sites and App Store products. It is designed to continuously discover SEO, GEO and ASO opportunities, convert them into GitHub Issues, let AI coding agents create pull requests, validate the changes, and measure the impact over time.

> **GeoLoop turns a GitHub repository into a self-improving growth system.**

中文说明：GeoLoop 不是普通 SEO 报告工具，也不是单纯 AI 写文章工具。它的目标是把 GitHub 仓库变成一个自动增长闭环：自动发现热词、竞品缺口、GEO 可见性问题、ASO 关键词机会，然后自动创建 Issue，调用 Copilot / Claude Code / Codex / 其他 Agent 改代码和内容，自动开 PR，自动验证，最后持续复盘搜索曝光、AI 引用、下载转化和页面表现。

---

## Keywords

GitHub SEO automation, GitHub Actions SEO, GitHub Copilot SEO, Generative Engine Optimization, GEO automation, AI search visibility, ASO automation, App Store Optimization, autonomous growth agent, AI PR automation, SEO pull request bot, SEO issue automation, growth engineering, search engine optimization as code, RankOps, GrowthOps, LLM visibility tracking, ChatGPT visibility, Perplexity visibility, Claude visibility, Gemini visibility.

---

## Why GeoLoop exists

Modern growth work is becoming more technical and more fragmented.

A founder or small team needs to monitor Google Search, AI search answers, App Store metadata, competitor pages, Reddit / Hacker News / Product Hunt discussions, landing page quality, internal links, schema markup, sitemap health, Open Graph images, `llms.txt`, and conversion signals.

Most tools stop at dashboards and recommendations. GeoLoop should go one step further:

```text
Discover -> Score -> Create Issue -> Agent Fix -> Pull Request -> Validate -> Merge -> Measure -> Repeat
```

The core belief is simple:

**Growth work should be versioned, reviewed, tested, merged and measured like software.**

---

## Product position

GeoLoop is not only a keyword tool.

GeoLoop is not only a reporting tool.

GeoLoop is not only an AI content generator.

GeoLoop is a **GitHub-native growth loop** for products that want automatic, auditable, measurable SEO/GEO/ASO improvement.

### Target users

| User | Pain | GeoLoop promise |
|---|---|---|
| Indie hacker | Has a product but no time for SEO/GEO/ASO work | Weekly growth PRs instead of manual research |
| SaaS founder | Needs landing pages, comparison pages, and AI search visibility | Issues and PRs that improve the repo directly |
| App developer | Needs App Store keyword and screenshot iteration | ASO research and metadata drafts |
| Technical marketer | Wants automation without losing review control | GitHub-based workflow, PR review, measurable feedback |
| Agency | Needs repeatable SEO/GEO delivery for many clients | White-label reports and repeatable repo workflows |

---

## Core loop

| Layer | Purpose | Example output |
|---|---|---|
| Discovery | Find SEO, GEO and ASO opportunities | Keywords, competitor gaps, AI visibility gaps, App Store keyword ideas |
| Scoring | Rank opportunities by expected value and risk | Opportunity score, risk score, priority |
| Issue generation | Convert opportunities into GitHub Issues | `[SEO] Create Anki AI flashcard page` |
| Agent execution | Let an AI coding agent implement safe changes | New landing page, schema, internal link, OG image, sitemap update |
| Validation | Check that changes are technically safe | Build, lint, SEO check, link check, Lighthouse, Playwright |
| Pull request | Make growth work reviewable | Branch, PR, diff, checklist |
| Measurement | Track whether the change worked | GSC clicks, impressions, ranking, AI mentions, ASO keyword movement, signups |
| Feedback | Improve future scoring and rules | Keep, revert, expand, localize, stop |

---

## Core use case: KoreMemo example

Assume the product is **KoreMemo**, an AI flashcard and Anki assistant product.

A user defines a product configuration:

```yaml
project:
  name: KoreMemo
  domain: https://korememo.com
  category:
    - AI flashcards
    - Anki assistant
    - spaced repetition
    - language learning
  target_markets:
    - us
    - jp
    - kr
    - cn
  target_languages:
    - en
    - ja
    - ko
    - zh

competitors:
  - ankiweb.net
  - quizlet.com
  - remnote.com
  - mochi.cards
  - brainscape.com
  - knowt.com
  - gizmo.ai

seo:
  seed_keywords:
    - ai flashcard app
    - anki alternative
    - anki ai generator
    - spaced repetition app
    - best flashcard app for medical students
    - japanese vocabulary flashcards
    - korean flashcard app

geo:
  prompts:
    - "What is the best AI flashcard app for Anki users?"
    - "Best tools to convert notes into flashcards"
    - "What are alternatives to Quizlet with AI?"
    - "Best spaced repetition apps for language learners"

aso:
  locales:
    - en-US
    - ja-JP
    - ko-KR
    - zh-Hans
```

GeoLoop should then run the loop:

1. Crawl the existing KoreMemo site.
2. Pull Google Search Console performance data.
3. Research keywords and competitor pages.
4. Test AI search visibility through a fixed GEO prompt set.
5. Research App Store and competitor metadata when an app exists.
6. Score all opportunities.
7. Create GitHub Issues for the highest-value opportunities.
8. Trigger an AI coding agent to implement safe changes.
9. Create pull requests.
10. Validate the PR.
11. After merge, measure impact over 7, 14 and 28 days.

---

## User workflow

### 1. Install GeoLoop

Planned modes:

```bash
npx geo-loop init
```

or:

```bash
pnpm dlx geo-loop init
```

or through a GitHub App installation.

The setup should create:

```text
.github/workflows/
  geo-loop-discover.yml
  geo-loop-issues.yml
  geo-loop-agent.yml
  geo-loop-validate.yml
  geo-loop-report.yml

growth/
  config.yml
  competitors.yml
  prompts/
  data/
  reports/
```

### 2. Define product rules

The user does not manually run SEO tasks. The user defines rules:

- Product name
- Domain
- Target countries
- Target languages
- Competitors
- Seed keywords
- GEO prompts
- ASO locales
- Risk constraints
- Auto-PR boundaries
- Human review requirements

### 3. Run discovery

GeoLoop automatically collects:

- Existing site pages
- Metadata and schema
- Sitemap and robots.txt
- Internal links
- Google Search Console queries
- Competitor landing pages
- SERP snippets
- Reddit / Hacker News / Product Hunt signals
- AI search answers
- App Store competitor metadata
- App Store reviews and keyword signals

### 4. Score opportunities

Each opportunity gets a score.

| Factor | Meaning |
|---|---|
| Search demand | Is there existing or potential search demand? |
| Product fit | Can the product honestly satisfy the intent? |
| Competition weakness | Are ranking pages weak, outdated or incomplete? |
| Conversion intent | Is the keyword close to signup, download or purchase? |
| GEO gap | Do AI engines mention competitors but not the product? |
| ASO value | Can the opportunity improve App Store title, subtitle, keywords or screenshots? |
| Implementation cost | Can the repo be safely improved? |
| Risk | Does the task involve false claims, legal risk, medical risk, spam, or brand risk? |

### 5. Create GitHub Issues

A high-score opportunity becomes a GitHub Issue.

Example:

```md
[SEO][KoreMemo] Create landing page for "Anki AI flashcard generator"

Opportunity score: 88
Risk score: 22
Intent: Convert notes into Anki-compatible AI flashcards
Competitors: Anki, Quizlet, RemNote, Knowt
Recommended change:
- Add landing page
- Add FAQ schema
- Add internal links
- Add OG image
- Update sitemap
Validation:
- npm run build
- npm run lint
- npm run seo:check
```

### 6. Trigger AI coding agent

The issue can trigger:

- GitHub Copilot coding agent
- Claude Code
- Codex CLI
- Gemini CLI
- A custom repo agent

The agent should only make changes allowed by the rules.

Safe default areas:

- Content pages
- Blog pages
- Docs pages
- Metadata
- Structured data
- Internal links
- Sitemap
- OG images
- `llms.txt`
- App Store metadata draft files

High-risk areas require human review:

- Pricing
- Legal pages
- Privacy policy
- Checkout
- Authentication
- App Store submission
- Homepage hero copy
- Medical, financial, education claims

### 7. Open pull request

GeoLoop should open a PR that includes:

- What was changed
- Why it was changed
- Which opportunity triggered it
- Expected impact
- Validation results
- Rollback plan
- Measurement plan

### 8. Validate

Validation should include:

- Build check
- Type check
- Lint
- Link check
- SEO metadata check
- Schema validation
- Sitemap validation
- Lighthouse check
- Playwright smoke test
- Duplicate page check
- Thin content check

### 9. Measure impact

After merge, GeoLoop should track:

- Google Search Console clicks
- Impressions
- Average position
- CTR
- Indexed pages
- AI engine mention rate
- AI citation rate
- Competitor share-of-answer
- Signup or trial conversion
- App Store keyword rank
- Product page conversion rate

### 10. Learn and repeat

Each merged PR becomes a growth experiment.

GeoLoop should label outcomes:

- `won`
- `neutral`
- `lost`
- `needs-more-data`
- `rollback-needed`

Future scoring should learn from previous outcomes.

---

## SEO, GEO and ASO definitions

### SEO: Search Engine Optimization

GeoLoop should improve discoverability in traditional search engines by optimizing:

- Technical SEO
- Page titles
- Meta descriptions
- Canonical URLs
- Structured data
- Internal links
- Sitemap
- Robots.txt
- Page speed
- Topic coverage
- Comparison pages
- Use-case landing pages
- FAQ pages

### GEO: Generative Engine Optimization

GeoLoop should improve visibility in AI answer engines and LLM-based search by optimizing:

- Entity clarity
- Answer-ready content
- Comparison tables
- Concise factual summaries
- FAQ blocks
- Citation-friendly pages
- `llms.txt`
- Third-party mention opportunities
- AI prompt set tracking
- Competitor share-of-answer monitoring

GeoLoop should not promise guaranteed ChatGPT, Perplexity, Gemini or Claude rankings. GEO measurement is probabilistic and noisy. GeoLoop should track trends, not fake certainty.

### ASO: App Store Optimization

GeoLoop should improve App Store discoverability and conversion through:

- Keyword research
- Competitor title and subtitle analysis
- Review mining
- Screenshot message testing
- Locale-specific metadata drafts
- Product page experiment ideas
- Release note suggestions
- App Store Connect metadata drafts

GeoLoop should not automatically submit App Store changes by default. ASO changes should be reviewed before submission.

---

## Expected outputs

| Output | Description |
|---|---|
| Growth Issues | Actionable GitHub Issues with evidence, score and instructions |
| Growth PRs | Safe code/content PRs created by an AI agent |
| Weekly Report | SEO/GEO/ASO summary in Markdown or HTML |
| Data Snapshots | JSON or SQLite snapshots of keywords, competitors and visibility tests |
| OG Images | Social sharing images for generated pages |
| App Metadata Drafts | Draft App Store title, subtitle, keywords and screenshot copy |
| Measurement Logs | 7/14/28-day impact tracking |

---

## Planned repository structure

```text
geo-loop/
  README.md
  docs/
    PRODUCT_REQUIREMENTS.md
    USER_FLOW.md
    ARCHITECTURE.md
    ROADMAP.md
  growth/
    config.example.yml
    prompts/
    rules/
    data/
    reports/
  .github/
    copilot-instructions.md
    ISSUE_TEMPLATE/
      growth-opportunity.yml
    workflows/
      README.md
```

---

## Design principles

1. **Automate the loop, not just the report.**
2. **Every growth action should be reviewable as a pull request.**
3. **Do not generate thin, fake, or spam pages.**
4. **External content is evidence, not instruction.**
5. **Human review is required for brand, legal, pricing and App Store submission.**
6. **Prefer small, safe, measurable improvements.**
7. **Measure after merge; do not trust generated output by default.**
8. **SEO/GEO/ASO work should have version history and rollback.**
9. **GEO is probabilistic. Track trends, not false certainty.**
10. **The repo should become smarter after every experiment.**

---

## Current status

This repository is at the **requirements and product design stage**.

The first goal is not to ship a full crawler or AI agent immediately. The first goal is to define:

- What GeoLoop should do
- Who it serves
- How the user uses it
- What the automation loop looks like
- What files and workflows are needed
- What should be automated
- What must remain under human review
- How success and failure are measured

---

## MVP roadmap

### MVP 0: Product specification

- [x] Define product positioning
- [x] Define user workflow
- [x] Define SEO/GEO/ASO loop
- [x] Define repo structure
- [x] Define issue and PR model
- [x] Define safety constraints

### MVP 1: SEO discovery and issue generation

- [ ] Add site crawler
- [ ] Add sitemap parser
- [ ] Add metadata analyzer
- [ ] Add keyword config
- [ ] Add opportunity scoring
- [ ] Create GitHub Issues from high-score opportunities

### MVP 2: Agent PR generation

- [ ] Add agent instructions
- [ ] Add allowed file policy
- [ ] Generate content/schema/internal-link PRs
- [ ] Run build/lint/SEO checks
- [ ] Require human review for risky changes

### MVP 3: GEO visibility tracking

- [ ] Define prompt sets
- [ ] Run AI visibility checks
- [ ] Track brand mention and competitor mention
- [ ] Generate GEO gap issues
- [ ] Add `llms.txt` and answer-ready content suggestions

### MVP 4: ASO research and metadata drafts

- [ ] Add App Store competitor research
- [ ] Mine review language
- [ ] Generate metadata drafts
- [ ] Generate screenshot copy ideas
- [ ] Add ASO experiment tracking

### MVP 5: Weekly growth report

- [ ] Generate Markdown report
- [ ] Generate HTML report
- [ ] Generate social image cards
- [ ] Track 7/14/28-day outcomes
- [ ] Label experiments as won, neutral or lost

---

## Example result

A good GeoLoop cycle should produce something like this:

```text
Opportunity found:
  Keyword: "anki ai flashcard generator"
  GEO gap: AI engines mention Anki, Quizlet and RemNote, but not KoreMemo
  Product fit: high
  Competition weakness: medium
  Score: 88

Issue created:
  [SEO][GEO] Create Anki AI flashcard generator landing page

Agent PR created:
  - Adds /anki-ai-flashcard-generator
  - Adds FAQ schema
  - Adds comparison table
  - Adds internal links
  - Adds OG image
  - Updates sitemap

Validation:
  Build passed
  SEO check passed
  Link check passed

Measurement:
  14 days after merge:
    + impressions
    + AI mention rate
    neutral signup impact

Decision:
  Keep page, add Japanese localization next
```

---

## License

To be decided.

---

## Short description

**GeoLoop: GitHub-native SEO/GEO/ASO automation loop that discovers ranking opportunities, creates issues, lets AI agents open pull requests, validates changes, and measures growth impact.**
