# README Localization Checks

GeoLoop should eventually automate these checks in `geo-loop scan`.

## File Existence

- [ ] `README.md`
- [ ] `README.zh-CN.md`
- [ ] `README.ja.md`
- [ ] `README.ko.md`
- [ ] `README.es.md`

## Link Checks

- [ ] each localized README links to all other README files
- [ ] roadmap links work
- [ ] docs links work
- [ ] license link or license section exists

## Required Content Checks

- [ ] product definition
- [ ] SEO explanation
- [ ] GEO explanation
- [ ] ASO explanation
- [ ] GitHub-native loop
- [ ] target users
- [ ] current status
- [ ] roadmap
- [ ] safety boundary

## Risk Checks

- [ ] no fake local claims
- [ ] no fake customers
- [ ] no fake benchmarks
- [ ] no fake rankings
- [ ] no fake AI citations
- [ ] no weakened safety boundary

## Suggested CLI Command

Future command:

```bash
geo-loop scan --i18n-readme
```

Expected output:

```text
I18N README Score: 86 / 100
Missing: README.fr.md optional
Risk: low
Next: add language navigation to README.md
```
