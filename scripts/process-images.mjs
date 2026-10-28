// Image processing: rename, dedupe, resize, compress to webp, add bottom watermark
// Watermark: "Shandong Shengyuan Peptide" — light, bottom strip
import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { readFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';

const SRC = '/home/openclaw/shengyuanpeptides.com/images/src';
const OUT = '/home/openclaw/shengyuanpeptides.com/images/processed';
mkdirSync(OUT, { recursive: true });

const WM_TEXT = 'Shandong Shengyuan Peptide';

// name mapping: src filename -> output name
const MAP = {
  '9745705108bb9b7890107e691f1c4109.jpg': 'hero-bg.jpg',        // 3D helix graphic
  '193e2a80b82c0df8e9098d4ffe4c8c5f.jpg': 'oem-facility.jpg',   // filling line
  '85839a45ea7f36886e2dcb4e80b6e243.jpg': 'svc-synthesis.jpg',  // lab apparatus
  '6348dbd2c74635218951b2a2bd059496.jpg': 'svc-drug-dev.jpg',
  'f16474ad95d95b05ecec5122d6f1d204.jpg': 'coa-document.jpg',
  'svc-HPLC.jpg': 'svc-bioactivity.jpg',
  'svc-GMP.jpg': 'svc-gmp.jpg',
  'svc-chemical.jpg': 'svc-raw-materials.jpg',
  'svc-collab.jpg': 'svc-partnership.jpg',
  // products
  'Gemini_Generated_Image_kex3pkex3pkex3pk.webp': 'p-retatrutide.webp',
  'tr5.webp': 'p-tirzepatide.webp',
  'TSM2.webp': 'p-tesamorelin.webp',
  'bt5.webp': 'p-tb500.webp',
  '2S10.webp': 'p-ss31.webp',
  'SMO2.webp': 'p-sermorelin.webp',
  'KS10.webp': 'p-selank.webp',
  'P41.webp': 'p-pt141.webp',
  'NJ1000.webp': 'p-nad.webp',
  'MT2.webp': 'p-melanotan2.webp',
  'MS10.webp': 'p-mots-c.webp',
  'IP10.webp': 'p-ipamorelin.webp',
  'KP10.webp': 'p-kpv.webp',
  'IGF-1.webp': 'p-igf1-lr3.webp',
  'CU50.webp': 'p-ghk-cu.webp',
  'ET10.webp': 'p-epithalon.webp',
  'CD2.webp': 'p-cjc-dac.webp',
  'CND2.webp': 'p-cjc-nodac.webp',
  'CP10.webp': 'p-cjc-ipa.webp',
  'bc5.webp': 'p-bpc157.webp',
  'BBKG80.webp': 'p-bbkg80.webp',
  'BBG70.webp': 'p-bpc-ghk-tb.webp',
  'BB10.webp': 'p-bpc-tb.webp',
  'AD5.webp': 'p-aod9604.webp',
};

const hashes = new Map(); // hash -> filename
const report = [];

for (const [src, dst] of Object.entries(MAP)) {
  const sp = path.join(SRC, src);
  if (!existsSync(sp)) { report.push(`MISSING src: ${src}`); continue; }
  const buf = readFileSync(sp);
  const hash = createHash('md5').update(buf).digest('hex');
  const existing = hashes.get(hash);
  if (existing) { report.push(`DUP: ${src} same as ${existing} — skipped`); continue; }
  hashes.set(hash, src);

  const img = sharp(buf).rotate(); // auto-orient from EXIF
  const meta = await img.metadata();
  const isProduct = dst.startsWith('p-');

  // compute exact target dimensions
  let w = meta.width, h = meta.height;
  const maxW = isProduct ? 800 : 1400;
  if (w > maxW) {
    const scale = maxW / w;
    w = maxW; h = Math.round(h * scale);
  }
  if (isProduct) {
    // square crop to 800x800, centered
    const side = Math.min(meta.width, meta.height);
    w = 800; h = 800;
  }

  const resized = await img
    .resize(
      isProduct
        ? { width: 800, height: 800, fit: 'cover' }
        : { width: w, height: h, fit: 'inside', withoutEnlargement: true }
    )
    .toBuffer();

  const finalMeta = await sharp(resized).metadata();
  const fw = finalMeta.width, fh = finalMeta.height;
  const fontSize = isProduct ? Math.round(fw * 0.045) : Math.round(fw * 0.028);
  const padY = Math.round(fontSize * 0.8);

  const wm = Buffer.from(
    `<svg width="${fw}" height="${fh}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="${fh - padY * 2.2}" width="${fw}" height="${padY * 2.2}" fill="rgba(0,0,0,0.28)"/>
      <text x="${fw / 2}" y="${fh - padY * 0.75}" font-family="Arial, Helvetica, sans-serif"
        font-size="${fontSize}" fill="rgba(255,255,255,0.55)"
        text-anchor="middle" letter-spacing="1">${WM_TEXT}</text>
    </svg>`
  );

  const outName = dst.replace(/\.(jpg|webp)$/i, '') + '.webp';
  const op = path.join(OUT, outName);

  await sharp(resized)
    .composite([{ input: wm }])
    .webp({ quality: 82 })
    .toFile(op);

  const size = (await sharp(op).metadata()).size;
  report.push(`${src} -> ${outName} (${fw}x${fh}, ${size} bytes)`);
  console.log(`OK ${outName} ${fw}x${fh}`);
}

// copy any file in src that is referenced but not in MAP? list leftovers
const mappedSrc = new Set(Object.keys(MAP));
for (const f of readdirSync(SRC)) {
  if (!mappedSrc.has(f)) report.push(`UNMAPPED: ${f}`);
}

import('node:fs').then(({ writeFileSync }) => {
  writeFileSync('/home/openclaw/shengyuanpeptides.com/raw/image-report.txt', report.join('\n'));
  console.log('--- report ---');
  console.log(report.join('\n'));
});
