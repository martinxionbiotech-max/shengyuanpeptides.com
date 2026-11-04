---
title: "What Should a Peptide Product Specification Include?"
description: "How to build a specification from attributes rather than from habit: identity, purity, content, impurities, counter-ion, water and endotoxin — with acceptance criteria you can defend."
pubDate: 2026-11-05
draft: false
pillar: peptide-quality-documentation
order: 7
---

# What Should a Peptide Product Specification Include?

**Direct answer.** A specification should list every attribute that can change the behaviour of the material in your assay, with an acceptance criterion and a method for each. For a synthetic peptide that means identity, purity, peptide content, impurity profile, counter-ion, water content and, where relevant, endotoxin — not the three lines ("appearance, purity, storage") that pass for a specification in most catalogues.

Part of the [peptide quality documentation pillar](/knowledge-base/peptide-quality-documentation/).

## Start from the attribute, not the template

The logic behind a specification is straightforward: list what the material must be, then set limits that distinguish acceptable from unacceptable. ICH Q6B sets out this reasoning for biotechnological products — specifications should be based on the characteristics of the product and its manufacturing process, not on a generic list ([ICH Q6B](https://database.ich.org/sites/default/files/Q6B%20Guideline.pdf)). The same discipline applies to synthetic peptides at research grade, even though the regulatory framework does not.

The failure mode is a specification written from a template: appearance, purity, storage. It omits everything that varies between batches and everything that affects quantitative work.

## The attributes worth specifying

| Attribute | Acceptance criterion (example) | Method | Why it is in the spec |
|---|---|---|---|
| Identity | Measured mass within 0.1% of theoretical | ESI-MS or MALDI-TOF | Confirms the sequence, including terminal modifications |
| Purity | ≥95.0% area | RP-HPLC, method stated | Comparative measure between lots |
| Peptide content | ≥75% (net peptide) | Amino-acid analysis or UV | Determines the mass to weigh |
| Impurity profile | No single impurity >2.0%; total ≤5.0% | RP-HPLC | Caps the worst-case impurity, not just the total |
| Counter-ion | Stated (TFA or acetate), consistent between lots | Ion chromatography or titration | Affects mass balance and assay compatibility |
| Water content | ≤8.0% | Karl Fischer | Part of the mass balance |
| Appearance | White to off-white lyophilised powder | Visual | Coarse check on process consistency |
| Solubility | Clear solution at stated concentration in stated solvent | Visual | Predicts handling; catches aggregation |
| Endotoxin (where relevant) | ≤ stated EU/mg | LAL | Required for any cell-based work |

Nine attributes. A catalogue specification typically covers three.

## Acceptance criteria: how to set them

Three principles keep criteria defensible:

**Set them from capability, not aspiration.** If the process reliably delivers 96–98% purity, a ≥95% criterion is meaningful and a ≥99% criterion guarantees batch rejections or quiet data manipulation. A specification that the process cannot meet is not a quality standard; it is a marketing number.

**Cap the individual impurity, not only the total.** "Total impurities ≤5%" permits a single 4.9% impurity that could be the one that interferes with your assay. A per-impurity cap forces the supplier to know what the impurities are.

**State the method with the criterion.** "Purity ≥95% (HPLC)" is not a specification, because the criterion depends on the method. Two methods, two different pass/fail outcomes for the same material.

## Per-product, not per-catalogue

A single specification applied to a whole catalogue is a sign that the specification was written for the website. Different sequences have different synthetic difficulty, different counter-ion behaviour and different stability:

- A 10-mer with no hydrophobic stretch resolves cleanly on a short gradient; a 40-mer with a lipophilic tail does not.
- A sequence with many basic residues carries more TFA and therefore lower content at the same purity.
- Tryptophan-containing peptides oxidise; specifications that do not mention oxidation will not detect it until the assay fails.

A credible supplier has a specification per product family, and can explain why the criteria differ.

## What a specification should not contain

**A purity figure with no method.** Covered above, but it bears repeating: it is the most common defect.

**A criterion the supplier does not test every batch.** If the specification says "endotoxin ≤10 EU/mg" but testing is skip-lot, say so. A specification describes what is guaranteed, not what is measured.

**A "typical" value presented as a limit.** Typical values belong in a catalogue, not in a specification. The specification is the line below which material is rejected.

## Our position

**Most peptide specifications are written for the buyer's browser, not for the QC bench.** Three attributes, no methods, criteria that no process could fail. They exist to make a product page look rigorous, and they collapse the moment someone asks what happens when a batch misses.

**A specification without a content criterion cannot support quantitative work, and most lack one.** This is the single highest-value addition a buyer can request. It costs the supplier one measurement per batch and saves the customer a systematic weighing error in every experiment.

**Per-impurity caps are worth more than a tighter total.** A supplier who can name the impurities knows their process. A supplier who reports only "total ≤2%" is reporting an integration output, not a quality position.

**If your application is cell-based, endotoxin belongs in the specification — and it is usually missing.** A specification written for a chemistry customer does not anticipate a biologist's requirements. If you are the biologist, ask for it explicitly; a supplier who cannot test endotoxin cannot support your work.

## Limits

This page describes specifications for research-grade material. Pharmaceutical specifications carry additional requirements — compendial monographs, ICH Q6B in full, and validated methods under ICH Q2(R2) — and a research specification is not a substitute for them, nor evidence that the material would meet them.
