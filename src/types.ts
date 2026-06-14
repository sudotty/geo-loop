export type GrowthChannel = 'seo' | 'geo' | 'aso' | 'technical-seo';

export type EvidenceSource =
  | 'manual'
  | 'github'
  | 'gsc'
  | 'reddit'
  | 'hacker-news'
  | 'product-hunt'
  | 'app-store'
  | 'competitor'
  | 'ai-visibility';

export type EvidenceConfidence = 'low' | 'medium' | 'high';

export interface Evidence {
  source: EvidenceSource;
  title?: string;
  url?: string;
  excerpt?: string;
  observedAt: string;
  confidence: EvidenceConfidence;
}

export interface OpportunityScoreInput {
  searchDemand: number;
  productFit: number;
  competitionWeakness: number;
  conversionIntent: number;
  geoGap: number;
  asoValue: number;
  implementationSpeed: number;
  evidenceQuality: number;
  risk: number;
}

export interface Opportunity {
  id: string;
  title: string;
  channel: GrowthChannel[];
  targetQuery?: string;
  targetPrompt?: string;
  targetUser?: string;
  evidence: Evidence[];
  recommendedChange: string;
  allowedFiles: string[];
  forbiddenClaims: string[];
  score: number;
  riskScore: number;
  status: 'candidate' | 'reported' | 'issue-created' | 'pr-created' | 'merged' | 'measured';
}

export interface ReportSummary {
  generatedAt: string;
  projectName: string;
  opportunities: Opportunity[];
}
