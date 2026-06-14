# GeoLoop Architecture

## 1. Architecture Goal

GeoLoop should start as a lightweight GitHub-native automation system, not a heavy SaaS platform.

The initial architecture should work with:

- local CLI
- GitHub Actions
- repository files
- Markdown reports
- GitHub Issues
- pull requests

A hosted dashboard can come later.

---

## 2. Core Pipeline

```text
Collectors -> Normalizers -> Scorers -> Issue Generator -> Agent Executor -> Validator -> Reporter -> Measurement
```

## 3. Main Components

### 3.1 Collectors

Collectors gather raw signals.

Initial collectors:

- README collector
- docs collector
- sitemap collector
- metadata collector
- competitor page collector
- GitHub search collector
- Reddit collector
- Hacker News collector
- App Store metadata collector
- AI visibility response collector

Collectors should store raw snapshots under:

```text
growth/data/
```

### 3.2 Normalizers

Normalizers turn messy raw data into standard opportunity candidates.

Example normalized opportunity:

```json
{
  "title": "Create AI Anki importer page",
  "channel": ["SEO", "GEO", "ASO"],
  "target_query": "AI Anki importer",
  "evidence": [],
  "recommended_change": "Create use-case page and FAQ",
  "risk": "low"
}
```

### 3.3 Scorers

Scorers rank opportunities.

Inputs:

- demand
- product fit
- competition weakness
- conversion intent
- GEO gap
- ASO value
- implementation cost
- evidence quality
- risk

Output:

```json
{
  "opportunity_score": 88,
  "risk_score": 22,
  "priority": "high"
}
```

### 3.4 Issue Generator

The issue generator turns high-score opportunities into GitHub Issues.

Each issue must include:

- goal
- evidence
- score
- risk
- allowed files
- forbidden claims
- validation checklist
- measurement plan
- agent instructions

### 3.5 Agent Executor

The executor does not need to be fully automated in the MVP.

Possible execution modes:

- manual copy to Copilot
- GitHub Copilot coding agent
- Claude Code
- Codex CLI
- Gemini CLI
- custom repo agent

Default policy:

```text
dry-run -> issue -> human review -> PR -> human merge
```

### 3.6 Validator

Validation checks should be layered.

Basic:

- build
- lint
- type check
- link check

SEO/GEO:

- metadata check
- heading check
- schema check
- sitemap check
- duplicate page check
- thin content check

Safety:

- unsupported claim check
- forbidden file change check
- risky keyword check

### 3.7 Reporter

Reports should be generated in:

- Markdown first
- HTML later
- GitHub Pages dashboard later

Report path:

```text
growth/reports/
```

### 3.8 Measurement

Measurement records the post-merge outcome.

Windows:

- 7 days
- 14 days
- 28 days

Metrics:

- impressions
- clicks
- average position
- CTR
- AI mention rate
- AI citation rate
- competitor share-of-answer
- conversion
- App Store keyword movement

---

## 4. Repository Structure

```text
geo-loop/
  README.md
  ROADMAP.md
  docs/
    PRODUCT_REQUIREMENTS.md
    USER_FLOW.md
    ARCHITECTURE.md
  growth/
    config.example.yml
    data/
    reports/
  .github/
    copilot-instructions.md
    ISSUE_TEMPLATE/
      growth-task.md
    workflows/
      geo-loop.yml
```

---

## 5. MVP Data Model

### Opportunity

```ts
export interface Opportunity {
  id: string;
  title: string;
  channel: Array<'seo' | 'geo' | 'aso' | 'technical-seo'>;
  targetQuery?: string;
  targetPrompt?: string;
  targetUser?: string;
  evidence: Evidence[];
  recommendedChange: string;
  allowedFiles: string[];
  forbiddenClaims: string[];
  opportunityScore: number;
  riskScore: number;
  status: 'candidate' | 'reported' | 'issue-created' | 'pr-created' | 'merged' | 'measured';
}
```

### Evidence

```ts
export interface Evidence {
  source: 'gsc' | 'github' | 'reddit' | 'hn' | 'app-store' | 'competitor' | 'manual';
  url?: string;
  title?: string;
  excerpt?: string;
  observedAt: string;
  confidence: 'low' | 'medium' | 'high';
}
```

### Measurement

```ts
export interface Measurement {
  opportunityId: string;
  windowDays: 7 | 14 | 28;
  impressions?: number;
  clicks?: number;
  averagePosition?: number;
  aiMentionRate?: number;
  aiCitationRate?: number;
  conversion?: number;
  outcome: 'won' | 'neutral' | 'lost' | 'needs-more-data' | 'rollback-needed';
}
```

---

## 6. Safety Model

GeoLoop should be aggressive in discovery but conservative in execution.

Rules:

- Do not auto-merge.
- Do not modify risky files without approval.
- Do not create fake claims.
- Do not create fake benchmarks.
- Do not create fake reviews.
- Do not submit App Store changes automatically.
- Do not spam third-party repositories.
- Do not generate thin programmatic pages.

---

## 7. Deployment Model

### MVP

- CLI
- GitHub Actions
- Markdown reports
- GitHub Issues
- repository files

### Later

- GitHub App
- hosted dashboard
- multi-repo support
- team workspace
- white-label reports
- paid plans

---

## 8. Technical Bias

Prefer:

- simple files over database in MVP
- Markdown reports over dashboards in MVP
- GitHub-native objects over custom backend objects
- small PRs over large rewrites
- dry-run over automatic mutation
- human review over blind automation

The system should feel like growth engineering, not content spam.
