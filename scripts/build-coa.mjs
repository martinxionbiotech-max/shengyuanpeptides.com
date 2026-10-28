// Transform scraped COA data -> site data with new brand verification codes
import { readFileSync, writeFileSync } from 'node:fs';

const blob = JSON.parse(readFileSync('/home/openclaw/shengyuanpeptides.com/raw/blob-1.json', 'utf8'));

const NEW_PREFIX = 'SY-VFY-';
// deterministic new codes, keep suffix style
const codes = [
  'SY-VFY-8K2M-PLQ9','SY-VFY-3N7R-WSK2','SY-VFY-2K8M-LPT4','SY-VFY-7R2L-VTK1',
  'SY-VFY-1H8G-WCN6','SY-VFY-4K9M-WQP2','SY-VFY-5L3N-QXP7','SY-VFY-6M2P-RZT8',
  'SY-VFY-7N3Q-SYU9','SY-VFY-8P4R-TZV0','SY-VFY-9Q5S-UXA1','SY-VFY-1A2B-CD34',
  'SY-VFY-2B3C-DE45','SY-VFY-3C4D-EF56','SY-VFY-4D7E-GHI5','SY-VFY-5E8F-IJK6',
  'SY-VFY-6F9G-KLM7','SY-VFY-7G0H-NOP8','SY-VFY-8H1I-PQR9','SY-VFY-9J2K-STU0',
  'SY-VFY-0K1L-UVW2','SY-VFY-1L2M-VWX3','SY-VFY-2M3N-YZA4','SY-VFY-3N4O-ZAB5',
];

const IMG_MAP = {
  'Gemini_Generated_Image_kex3pkex3pkex3pk': 'p-retatrutide.webp',
  'tr5': 'p-tirzepatide.webp','TSM2': 'p-tesamorelin.webp','bt5': 'p-tb500.webp',
  '2S10': 'p-ss31.webp','SMO2': 'p-sermorelin.webp','KS10': 'p-selank.webp',
  'P41': 'p-pt141.webp','NJ1000': 'p-nad.webp','MT2': 'p-melanotan2.webp',
  'MS10': 'p-mots-c.webp','IP10': 'p-ipamorelin.webp','KP10': 'p-kpv.webp',
  'IGF-1': 'p-igf1-lr3.webp','CU50': 'p-ghk-cu.webp','ET10': 'p-epithalon.webp',
  'CD2': 'p-cjc-dac.webp','CND2': 'p-cjc-nodac.webp','CP10': 'p-cjc-ipa.webp',
  'bc5': 'p-bpc157.webp','BBKG80': 'p-bbkg80.webp','BBG70': 'p-bpc-ghk-tb.webp',
  'BB10': 'p-bpc-tb.webp','AD5': 'p-aod9604.webp',
};

const out = blob.map((x, i) => {
  const imgKey = (x.productImage || '').match(/compressed_([^.]+)\.webp/)?.[1];
  return {
    id: `COA-2026-${String(i + 1).padStart(3, '0')}`,
    product: x.product,
    cas: x.cas,
    batch: x.batch,
    purity: x.purity,
    mw: x.mw,
    method: x.method,
    testDate: x.testDate,
    verifyCode: codes[i],
    image: imgKey ? IMG_MAP[imgKey] : null,
    peptideContent: x.peptideContent,
    pH: x.pH,
    waterContent: x.waterContent,
    assay: x.assay,
    endotoxin: x.endotoxin,
    sequence: x.sequence,
    mfgDate: x.mfgDate,
    retestDate: x.retestDate,
    storage: x.storage,
    quantity: x.quantity,
  };
});

writeFileSync('/home/openclaw/shengyuanpeptides.com/src/data/coa.json', JSON.stringify(out, null, 1));
console.log('coa.json written:', out.length, 'entries');
console.log(out[0]);
