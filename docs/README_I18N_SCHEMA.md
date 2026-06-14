# README I18N Schema

A future GeoLoop scanner can normalize README i18n state using this schema.

```ts
export interface LocalizedReadme {
  locale: string;
  language: string;
  path: string;
  status: 'source' | 'active' | 'planned' | 'stale';
  requiredSections: {
    productDefinition: boolean;
    languageLinks: boolean;
    seoGeoAso: boolean;
    whyGithub: boolean;
    coreLoop: boolean;
    targetUsers: boolean;
    currentStatus: boolean;
    roadmap: boolean;
    safetyBoundary: boolean;
    license: boolean;
  };
  riskFlags: string[];
  brokenLinks: string[];
  score: number;
}
```

## Report Shape

```ts
export interface I18nReadmeReport {
  sourceOfTruth: string;
  generatedAt: string;
  readmes: LocalizedReadme[];
  overallScore: number;
  nextActions: string[];
}
```
