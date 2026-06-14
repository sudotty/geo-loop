import type { ReportSummary } from '../types.js';

export function renderMarkdownReport(summary: ReportSummary): string {
  const lines: string[] = [];

  lines.push('# GeoLoop Growth Report');
  lines.push('');
  lines.push(`Generated at: ${summary.generatedAt}`);
  lines.push(`Project: ${summary.projectName}`);
  lines.push('');
  lines.push('## Opportunities');
  lines.push('');

  if (summary.opportunities.length === 0) {
    lines.push('No opportunities found.');
    lines.push('');
    return lines.join('\n');
  }

  lines.push('| Score | Risk | Channel | Title | Recommended Change |');
  lines.push('|---:|---:|---|---|---|');

  for (const opportunity of summary.opportunities) {
    lines.push(
      `| ${opportunity.score} | ${opportunity.riskScore} | ${opportunity.channel.join(', ')} | ${escapeTable(opportunity.title)} | ${escapeTable(opportunity.recommendedChange)} |`
    );
  }

  lines.push('');
  lines.push('## Details');
  lines.push('');

  for (const opportunity of summary.opportunities) {
    lines.push(`### ${opportunity.title}`);
    lines.push('');
    lines.push(`- ID: ${opportunity.id}`);
    lines.push(`- Score: ${opportunity.score}`);
    lines.push(`- Risk: ${opportunity.riskScore}`);
    lines.push(`- Channel: ${opportunity.channel.join(', ')}`);
    if (opportunity.targetQuery) lines.push(`- Target query: ${opportunity.targetQuery}`);
    if (opportunity.targetPrompt) lines.push(`- Target prompt: ${opportunity.targetPrompt}`);
    if (opportunity.targetUser) lines.push(`- Target user: ${opportunity.targetUser}`);
    lines.push(`- Recommended change: ${opportunity.recommendedChange}`);
    lines.push(`- Status: ${opportunity.status}`);
    lines.push('');

    if (opportunity.evidence.length > 0) {
      lines.push('Evidence:');
      for (const evidence of opportunity.evidence) {
        lines.push(`- ${evidence.source}: ${evidence.title ?? evidence.excerpt ?? 'untitled'} (${evidence.confidence})`);
      }
      lines.push('');
    }

    if (opportunity.allowedFiles.length > 0) {
      lines.push('Allowed files:');
      for (const file of opportunity.allowedFiles) lines.push(`- ${file}`);
      lines.push('');
    }

    if (opportunity.forbiddenClaims.length > 0) {
      lines.push('Forbidden claims:');
      for (const claim of opportunity.forbiddenClaims) lines.push(`- ${claim}`);
      lines.push('');
    }
  }

  lines.push('## Safety Note');
  lines.push('');
  lines.push('This report is a growth hypothesis document. Do not execute risky changes without human review. Do not fabricate claims, rankings, reviews, benchmarks or citations.');
  lines.push('');

  return lines.join('\n');
}

function escapeTable(value: string): string {
  return value.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}
