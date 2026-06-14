import type { Opportunity } from './types.js';
import { scoreOpportunity } from './scoring/opportunityScore.js';

const readmeScore = scoreOpportunity({
  searchDemand: 76,
  productFit: 90,
  competitionWeakness: 65,
  conversionIntent: 70,
  geoGap: 82,
  asoValue: 35,
  implementationSpeed: 88,
  evidenceQuality: 60,
  risk: 18
});

const asoScore = scoreOpportunity({
  searchDemand: 68,
  productFit: 82,
  competitionWeakness: 60,
  conversionIntent: 78,
  geoGap: 55,
  asoValue: 88,
  implementationSpeed: 72,
  evidenceQuality: 58,
  risk: 22
});

export const sampleOpportunities: Opportunity[] = [
  {
    id: 'geo-readme-001',
    title: 'Improve README answer-readiness for AI search engines',
    channel: ['geo', 'seo'],
    targetQuery: 'GitHub-native GEO automation',
    targetPrompt: 'What tools can automate SEO and GEO through GitHub Actions?',
    targetUser: 'Indie hackers and developers who want growth work to become GitHub Issues and PRs.',
    evidence: [
      {
        source: 'manual',
        title: 'Repository README is the primary public entity page for early-stage developer tools.',
        observedAt: new Date().toISOString(),
        confidence: 'medium'
      }
    ],
    recommendedChange: 'Add concise definition, comparison table, FAQ, use cases and last-updated section.',
    allowedFiles: ['README.md', 'docs/PRODUCT_REQUIREMENTS.md'],
    forbiddenClaims: ['guaranteed AI ranking', 'fake customer proof', 'unsupported traffic numbers'],
    score: readmeScore.finalScore,
    riskScore: 18,
    status: 'candidate'
  },
  {
    id: 'aso-draft-001',
    title: 'Create ASO metadata draft workflow for app products',
    channel: ['aso', 'geo'],
    targetQuery: 'App Store ASO automation with AI agents',
    targetUser: 'App developers who need weekly title, subtitle, keyword and screenshot-copy experiments.',
    evidence: [
      {
        source: 'manual',
        title: 'ASO drafts should be generated but not automatically submitted.',
        observedAt: new Date().toISOString(),
        confidence: 'high'
      }
    ],
    recommendedChange: 'Create metadata draft templates and connect ASO language to docs and README.',
    allowedFiles: ['docs/PRODUCT_REQUIREMENTS.md', 'growth/config.example.yml'],
    forbiddenClaims: ['guaranteed installs', 'fake rankings', 'automatic App Store submission'],
    score: asoScore.finalScore,
    riskScore: 22,
    status: 'candidate'
  }
];
