# GitHub Workflows

This directory contains GitHub Actions workflows for GeoLoop.

## `geo-loop.yml`

Current status: sample workflow.

It runs on:

- manual dispatch
- weekly schedule
- pull requests that touch README, docs, growth files or source code

Current steps:

1. checkout
2. setup Node.js 20
3. install dependencies
4. build TypeScript
5. run sample scan
6. generate sample report
7. upload the report artifact

## Intended Evolution

The workflow should evolve in phases:

```text
sample scan -> real README/docs scan -> issue generation -> PR suggestion -> validation -> measurement report
```

## Safety

The workflow is read-only by default. It does not create issues, open PRs or commit changes yet.

Future write-capable workflows should require explicit permissions and conservative thresholds.
