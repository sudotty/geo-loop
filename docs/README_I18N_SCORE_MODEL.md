# README I18N Score Model

Future GeoLoop scanners can score multilingual README readiness.

## Score Dimensions

| Dimension | Weight |
|---|---:|
| Language file exists | 10 |
| Language navigation exists | 10 |
| Product definition preserved | 15 |
| SEO / GEO / ASO explanation preserved | 15 |
| Core loop preserved | 10 |
| Target users preserved | 10 |
| Current status accurate | 10 |
| Roadmap links valid | 5 |
| Safety boundary preserved | 10 |
| No unsupported local claims | 5 |

## Formula

```text
I18N README Score = section coverage + link quality + claim safety + freshness
```

## Risk Penalty

Subtract points for:

- fake local customer claim
- fake local ranking claim
- fake AI citation
- fake benchmark
- broken roadmap link
- weakened safety boundary
- stale CLI command

## Output Example

```text
README.zh-CN.md: 92 / 100
README.ja.md: 88 / 100
README.ko.md: 88 / 100
README.es.md: 88 / 100
Overall: 89 / 100
Risk: low
Next: add language navigation to README.md
```
