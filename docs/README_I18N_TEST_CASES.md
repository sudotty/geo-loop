# README I18N Test Cases

Future `geo-loop scan --i18n-readme` should support these test cases.

## Case 1: Missing Localized README

Input:

```text
README.fr.md missing
```

Expected:

```text
Status: optional missing
Severity: low
Action: create only if French market is targeted
```

## Case 2: Missing Safety Boundary

Input:

```text
README.ja.md has no safety section
```

Expected:

```text
Status: fail
Severity: high
Action: create issue draft
```

## Case 3: Fake Local Claim

Input:

```text
README.ko.md says GeoLoop is the #1 Korean GEO tool without evidence
```

Expected:

```text
Status: fail
Severity: high
Action: remove or support claim
```

## Case 4: Broken Language Link

Input:

```text
README.es.md links to README.cn.md instead of README.zh-CN.md
```

Expected:

```text
Status: fail
Severity: medium
Action: fix link
```

## Case 5: Stale CLI Command

Input:

```text
localized README says geo-loop run but current CLI uses geo-loop scan
```

Expected:

```text
Status: warning
Severity: medium
Action: update command block
```
