import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = path.dirname(currentFilePath);
const assetsDirPath = path.resolve(currentDirPath, '../src/assets');
const outputFilePath = path.join(assetsDirPath, 'app-config.js');
const apiBaseUrl = (process.env.CLIENT_API_BASE_URL || '').trim().replace(/\/+$/, '');

mkdirSync(assetsDirPath, { recursive: true });

writeFileSync(
  outputFilePath,
  `window.__APP_CONFIG__ = ${JSON.stringify({ apiBaseUrl })};\n`,
  'utf8'
);

console.log(`Wrote client runtime config to ${outputFilePath}`);
