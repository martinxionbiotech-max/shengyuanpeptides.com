# Shengyuan Peptides — Weekly Content Plan

Status: active  
Cadence: one Pillar + one Cluster per week, Monday night (03:00–07:30 Asia/Shanghai)  
Checkpoint: `docs/weekly-progress.md`

## 1. Rules

- One pillar page and one supporting cluster per run.
- Pillar: 2,000–3,500 words, 8–12 H2, 2–4 tables, 6–10 FAQ, internal links.
- Cluster: 1,200–1,800 words, 8–10 H2, 1–3 tables, 5–8 FAQ, links back to pillar.
- No human dosing, therapeutic or diagnostic claims. Research-use-only.
- No invented certifications, client names, statistics or reviewer credentials.
- `GMP` only as “quality-managed / aligned with GMP principles” unless a certificate scope is provided.
- `99%` must be tied to HPLC method, batch and specification.
- Build, check metadata/H1/links, commit and push.
- Update `docs/weekly-progress.md` after each run.

## 2. Queue

| Week | Pillar | Cluster | Status |
|---|---|---|---|
| 2026-11-09 | Custom Peptide Synthesis (upgraded) | Custom Peptide Modifications | ✅ e3dd083 |
| 2026-11-16 | Peptide Quality, COA & Batch Traceability | Batch-Specific COA: Fields Buyers Should Check | next |
| 2026-11-23 | OEM & Private Label Peptide Manufacturing | OEM Packaging, Labels and Responsibility Split | pending |
| 2026-11-30 | Sourcing Peptides from China: Supplier Due Diligence | Supplier Audit Checklist | pending |
| 2026-12-07 | GH Axis Peptides category hub | Product selection / specification guide | pending |
| 2026-12-14 | Healing & Recovery category hub | Product selection / specification guide | pending |
| 2026-12-21 | Longevity & Cellular Health category hub | Product selection / specification guide | pending |
| 2026-12-28 | GLP-1 & Metabolic Research category hub | Product selection / specification guide | pending |
| 2027-01-04 | Melanocortin Peptides category hub | Product selection / specification guide | pending |
| 2027-01-11 | Cognitive & Neuro category hub | Product selection / specification guide | pending |

## 3. Pillar 2 brief (next)

**Working title:** Peptide Quality, COA and Batch Traceability: What Buyers Can Verify

Required sections:

1. What a batch-specific COA should contain
2. Identity, purity and peptide content are different measurements
3. HPLC method details that change the number
4. Mass spectrometry: what it confirms and what it does not
5. Water content, counterions and net peptide content
6. Endotoxin and other release tests
7. Batch records and traceability
8. Independent testing vs supplier testing
9. How to review a COA before accepting a batch
10. Documentation checklist and red flags

Cluster: **Batch-Specific COA: Fields Buyers Should Check**

## 4. Acceptance checklist

- `npm run build` passes.
- All new pages have one H1, title ≤60, description ≤160.
- Internal links resolve.
- No forbidden claims.
- `git status` clean after commit.
- Progress file updated with commit and next item.
