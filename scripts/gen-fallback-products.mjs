// Fallback generator: products.json from coa.json (replaced by codex output when ready)
import { readFileSync, writeFileSync } from 'node:fs';

const coa = JSON.parse(readFileSync('/home/openclaw/shengyuanpeptides.com/src/data/coa.json', 'utf8'));

const CAT = {
  'Retatrutide': 'GLP-1 & Metabolic Research',
  'Tirzepatide': 'GLP-1 & Metabolic Research',
  'AOD9604': 'GLP-1 & Metabolic Research',
  'Tesamorelin': 'GH Axis Peptides',
  'Sermorelin Acetate': 'GH Axis Peptides',
  'CJC-1295 with DAC': 'GH Axis Peptides',
  'CJC-1295 NO DAC': 'GH Axis Peptides',
  'CJC-1295 NO DAC + Ipamorelin': 'GH Axis Peptides',
  'Ipamorelin': 'GH Axis Peptides',
  'IGF-1 LR3': 'GH Axis Peptides',
  'BPC157': 'Healing & Recovery',
  'TB-500': 'Healing & Recovery',
  'BPC 157 10mg+GHK-CU 50mg+TB500 10mg': 'Healing & Recovery',
  'BPC 5mg + TB 5mg': 'Healing & Recovery',
  'BBKG80': 'Healing & Recovery',
  'KPV': 'Healing & Recovery',
  'NAD+': 'Longevity & Cellular Health',
  'MOTS-C': 'Longevity & Cellular Health',
  'SS-31 Elamipretide': 'Longevity & Cellular Health',
  'Epithalon': 'Longevity & Cellular Health',
  'GHK-CU': 'Longevity & Cellular Health',
  'Selank': 'Cognitive & Neuro',
  'PT-141': 'Melanocortin Peptides',
  'Melanotan 2 Acetate': 'Melanocortin Peptides',
};

const SEQS = {};
for (const c of coa) if (c.sequence && !c.sequence.includes('|')) SEQS[c.product] = c.sequence;
// blends keep their combined sequence notation
for (const c of coa) if (c.sequence && c.sequence.includes('|') && !SEQS[c.product]) SEQS[c.product] = c.sequence;

const out = coa.map((c) => {
  const slug = c.product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return {
    slug,
    name: c.product,
    cas: c.cas,
    mw: c.mw,
    purity: c.purity,
    category: CAT[c.product] || 'Research Peptides',
    image: c.image || `p-${slug}.webp`,
    summary: `${c.product} is a research-grade peptide supplied with batch-specific Certificate of Analysis data at ${c.purity} HPLC purity.`,
    description:
      `${c.product} is supplied by Shandong Shengyuan Peptide Technology Co., Ltd. for laboratory research use. Each batch is purified by preparative HPLC and released with a complete Certificate of Analysis covering HPLC purity, mass spectrometry identity, peptide content, water content, and endotoxin. Researchers select this product for its consistent analytical profile and the traceability of every batch: the verification code on each label can be authenticated online in the COA lookup section of this site. Standard release purity is ${c.purity} (HPLC / MS), with molecular weight ${c.mw} confirmed by mass spectrometry.`,
    applications: [
      'Biomedical research studies',
      'In vitro and in vivo laboratory models',
      'Assay development and validation',
      'Reference material for analytical method development',
    ],
    sequence: SEQS[c.product] || null,
    storage: c.storage,
    keywords: [slug.replace(/-/g, ' '), 'research peptide', 'custom peptide manufacturer', 'peptide with COA'],
  };
});

writeFileSync('/home/openclaw/shengyuanpeptides.com/src/data/products.json', JSON.stringify(out, null, 1));
console.log('fallback products.json written:', out.length);
