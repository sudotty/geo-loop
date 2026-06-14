import type { OpportunityScoreInput } from '../types.js';

const clamp = (value: number): number => Math.max(0, Math.min(100, value));

export interface OpportunityScoreResult {
  valueScore: number;
  riskPenalty: number;
  finalScore: number;
  priority: 'low' | 'medium' | 'high';
}

export function scoreOpportunity(input: OpportunityScoreInput): OpportunityScoreResult {
  const valueScore =
    input.searchDemand * 0.16 +
    input.productFit * 0.18 +
    input.competitionWeakness * 0.12 +
    input.conversionIntent * 0.16 +
    input.geoGap * 0.12 +
    input.asoValue * 0.08 +
    input.implementationSpeed * 0.08 +
    input.evidenceQuality * 0.10;

  const riskPenalty = input.risk * 0.45;
  const finalScore = clamp(Math.round(valueScore - riskPenalty));

  return {
    valueScore: Math.round(valueScore),
    riskPenalty: Math.round(riskPenalty),
    finalScore,
    priority: finalScore >= 75 ? 'high' : finalScore >= 50 ? 'medium' : 'low'
  };
}

export function explainScore(input: OpportunityScoreInput): string[] {
  const result = scoreOpportunity(input);

  return [
    `Value score: ${result.valueScore}`,
    `Risk penalty: ${result.riskPenalty}`,
    `Final score: ${result.finalScore}`,
    `Priority: ${result.priority}`,
    'Scoring is directional, not deterministic. Human review is required before execution.'
  ];
}
