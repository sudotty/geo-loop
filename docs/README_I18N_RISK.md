# README I18N Risk Guide

Localized README files create SEO/GEO value, but they also create claim-control risk.

## Main Risks

| Risk | Description | Control |
|---|---|---|
| Claim inflation | Translation adds stronger claims than source | compare against README.md |
| Fake local proof | Translation invents local customers or rankings | forbid unsupported local claims |
| Stale commands | CLI commands differ from current implementation | scan command blocks |
| Broken links | localized README links break | link checker |
| Safety drift | localized version weakens safety rules | required safety section |
| Thin translation | translation is too shallow to be useful | required section coverage |

## High-Risk Phrases

Flag phrases such as:

- guaranteed ranking
- official ranking
- #1 tool
- best tool
- verified by ChatGPT
- proven by App Store
- thousands of users
- benchmark leader
- market leader

These phrases require evidence or removal.

## Safe Default

Use conservative product language:

```text
GeoLoop helps discover, structure, execute and measure SEO/GEO/ASO growth experiments.
```

Avoid deterministic claims:

```text
GeoLoop guarantees AI search ranking.
```
