#!/usr/bin/env node
'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');
const { createRequire } = require('node:module');

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 4 || args[2] !== '--width' || !/^\d+$/.test(args[3])) {
    throw new Error('Usage: node optimize-image.cjs INPUT OUTPUT.webp --width PIXELS (optional quality: set WEBP_QUALITY=1..100)');
  }
  const [input, output, , widthArg] = args;
  const width = Number(widthArg);
  const quality = Number(process.env.WEBP_QUALITY || 80);
  if (!Number.isSafeInteger(width) || width < 1 || !Number.isInteger(quality) || quality < 1 || quality > 100) throw new Error('Width must be a positive integer; WEBP_QUALITY must be an integer from 1 to 100.');
  if (path.extname(output).toLowerCase() !== '.webp') throw new Error('Output must have a .webp extension.');
  if (!['.png', '.jpg', '.jpeg', '.webp', '.tif', '.tiff'].includes(path.extname(input).toLowerCase())) throw new Error('Unsupported input format; SVG and animated assets are not supported.');
  const sharp = (() => { try { return createRequire(path.join(process.cwd(), 'package.json'))('sharp'); } catch (e) { if (e.code === 'MODULE_NOT_FOUND' && /sharp/.test(e.message)) throw new Error('Install sharp in the working project: npm install --save-dev sharp'); throw e; } })();
  const original = await fs.stat(input);
  const image = sharp(input, { animated: true, failOn: 'error' });
  const metadata = await image.metadata();
  if ((metadata.pages || 1) > 1) throw new Error('Animated or multipage images are not supported.');
  const result = await image.rotate().resize({ width, withoutEnlargement: true }).webp({ quality, alphaQuality: 100 }).toBuffer({ resolveWithObject: true });
  await fs.writeFile(output, result.data, { flag: 'wx' });
  console.log(`${input}: ${original.size} bytes → ${output}: ${result.info.size} bytes (${result.info.width}×${result.info.height})`);
}
main().catch(error => { console.error(`Error: ${error.message}`); process.exitCode = 1; });
