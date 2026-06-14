#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { renderMarkdownReport } from './report/markdownReport.js';
import { sampleOpportunities } from './sample.js';

const command = process.argv[2] ?? 'help';

async function main(): Promise<void> {
  switch (command) {
    case 'scan':
      await runScan();
      return;
    case 'report':
      await runReport();
      return;
    case 'help':
    default:
      printHelp();
      return;
  }
}

async function runScan(): Promise<void> {
  console.log('GeoLoop scan');
  console.log('');
  console.log('MVP status: sample opportunity scan only.');
  console.log('Next step: implement README/docs/site collectors.');
  console.log('');

  for (const opportunity of sampleOpportunities) {
    console.log(`- [${opportunity.score}] ${opportunity.title}`);
  }
}

async function runReport(): Promise<void> {
  const report = renderMarkdownReport({
    generatedAt: new Date().toISOString(),
    projectName: 'GeoLoop',
    opportunities: sampleOpportunities
  });

  const reportsDir = join(process.cwd(), 'growth', 'reports');
  await mkdir(reportsDir, { recursive: true });

  const reportPath = join(reportsDir, 'sample-growth-report.md');
  await writeFile(reportPath, report, 'utf8');

  console.log(`Report written: ${reportPath}`);
}

function printHelp(): void {
  console.log(`GeoLoop\n\nUsage:\n  geo-loop scan    Run an initial sample scan\n  geo-loop report  Generate a sample Markdown growth report\n\nMVP note:\n  This CLI currently contains the first executable scaffold.\n  README/docs/site collectors will be implemented in the next iteration.`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
