# Angular 22.2 `strictUnclaimedEventNames` demo

This minimal compiler-only project proves both sides of Angular's opt-in
`strictUnclaimedEventNames` check:

- `valid/` binds to the directive output `saveClick` and must compile.
- `invalid/` contains the typo `saveClik` and must fail with `NG8030`.

Article: https://dotnetcoder.com/angular-22-strict-unclaimed-event-names/

## Prerequisites

- Node.js 24 or a current supported Node.js release
- npm 11 or a compatible npm release

## Run

```bash
npm ci
npm run check
```

Expected final output:

```text
PASS: the invalid fixture failed with NG8030 for saveClik.
```

The invalid compilation is an expected test result. The verification script
fails unless the diagnostic contains both `NG8030` and `saveClik`.

## Scope

The check is opt-in and remains heuristic. Native DOM events, dash-separated
custom events, targeted events, and some schema cases are intentionally exempt.

Source: [Angular compiler implementation](https://github.com/angular/angular/commit/312e1d808902116fb8cd4e02d936260113453999).
