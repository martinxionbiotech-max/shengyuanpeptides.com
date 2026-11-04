---
title: "How to Read a Peptide Certificate of Analysis"
description: "Field by field: what a peptide COA must state, what each number actually measures, and the six fields whose absence makes the whole document unauditable."
pubDate: 2026-11-05
draft: false
pillar: peptide-quality-documentation
order: 1
---

# How to Read a Peptide Certificate of Analysis

**Direct answer.** Read a peptide COA in the order an auditor would: identity first, then the method behind each number, then batch linkage, and only then the headline purity figure. If the method is missing, every number after it is unfalsifiable — and an unfalsifiable number should carry no weight in a sourcing decision.

Part of the [peptide quality documentation pillar](/knowledge-base/peptide-quality-documentation/).

## The fields that must be present

A COA for a synthetic peptide that can be audited contains at least these elements:

| Field | Why it matters | Common failure |
|---|---|---|
| Product name and sequence | Confirms you received the intended molecule, including terminal modifications | Sequence omitted; N/C-terminal state unstated |
| Batch / lot number | Links the document to the physical material | No batch number; or a number that does not match the label |
| Theoretical and measured mass | Identity evidence, not a description | "Conforms" with no measured value |
| Purity, with method | The number everyone quotes | "≥98% (HPLC)" with no column, gradient or wavelength |
| Peptide content | Determines how much peptide you weigh | Absent, or conflated with purity |
| Appearance | Coarse check on lyophilisation and solubility | Present but uninformative ("white powder") |
| Counter-ion / salt form | Affects mass balance and assay behaviour | Absent — TFA vs acetate changes everything |
| Water content | Part of the mass balance in a lyophilised powder | Absent |
| Test method summary | Makes the result reproducible | "In-house method" with no detail |
| Analyst / approver and date | Accountability and release date | Unsigned, undated |
| Storage and retest | Handling and shelf-life basis | Generic "−20 °C" with no retest interval |

Eleven fields. Most commercial certificates carry five.

## Reading order, and what each step catches

**1. Sequence and modifications.** Compare against what you ordered, not against the product title. A missing C-terminal amide, a swapped residue, or an acetyl group that should be there will not appear in the purity number, because the synthesised molecule is 100% pure *as the wrong molecule*.

**2. Batch number.** Write it down and compare it with the vial label when the shipment arrives. This is the only field that ties paper to material.

**3. Mass.** The measured value should be stated with the ionisation method (ESI or MALDI) and compared with the theoretical mass computed from the sequence. Agreement within instrument accuracy confirms identity; "conforms" alone does not.

**4. Purity.** Now — and only now — read the percentage. Ask: which wavelength, which column, which gradient, what integration threshold, and was the main peak inspected for shoulders?

**5. Content.** This is the field buyers skip and later regret. Content is reported as net peptide weight, usually by amino-acid analysis or UV absorbance against a standard. Without it, a "5 mg vial" is 5 mg of powder of unknown peptide fraction.

**6. Impurities.** A total figure is weaker than a profile. If the certificate lists "total impurities 1.8%", ask which species: deletion sequences, oxidation, diastereomers and residual protecting groups have different consequences.

**7. Signatures and dates.** An unsigned, undated certificate is a draft. A release date that precedes the manufacturing date is a copy-paste error that should make you re-read everything else.

## The six omissions that matter most

Across supplier documents we review, the same gaps recur. Any one of them reduces a certificate from evidence to assertion:

1. **No method for the purity figure** — the most common, and the most consequential.
2. **No peptide content** — makes quantitative work impossible.
3. **No measured mass** — identity asserted, not demonstrated.
4. **No counter-ion** — TFA salts can constitute a substantial share of powder mass, and the percentage varies by process.
5. **No batch number on the label** — breaks the chain between document and material.
6. **No impurity identity** — hides whether the main impurity is benign or assay-interfering.

## A worked comparison

Two certificates, both claiming 98% purity:

| | Supplier A | Supplier B |
|---|---|---|
| Purity | ≥98% (HPLC) | 98.2% area, RP-HPLC, C18 4.6 × 250 mm, 5 µm, 0.1% TFA / ACN gradient 5–45% over 30 min, 214 nm, threshold 0.05% |
| Content | not reported | 81.4% (net peptide, AAA) |
| Mass | conforms | 2847.3 Da measured (ESI), 2847.2 theoretical, Δ 0.04 Da |
| Counter-ion | not stated | acetate |
| Impurities | ≤2% total | 1.1% des-Gly, 0.4% oxidised, 0.3% unspecified |

Supplier A's certificate is not necessarily wrong. Supplier B's is *usable*: it can be reproduced, compared, and challenged. The difference is not the number — it is whether the number can be argued with.

## Our position

**A COA without a method is a datasheet with a batch number typed on it.** The market treats certificates as proof because they look formal, but formality is not evidence. We would rather see a 96% figure with a full method than a 99% figure without one, because the first can be audited and the second can only be trusted.

**The absence of peptide content is a bigger red flag than a low purity number.** A supplier who reports content is telling you they understand what the customer does with the material. A supplier who does not is optimising for a spec sheet, not for an experiment.

**Certificates should be judged as a chain, not a document.** Sequence → batch → mass → purity → content → signature is a chain of custody. Any break makes the rest unverifiable, regardless of how good the numbers look.

## What this does not cover

This page addresses research-grade synthetic peptides. Pharmaceutical release testing adds compendial requirements (for example the general monograph *Substances for pharmaceutical use* in the European Pharmacopoeia), validated methods under [ICH Q2(R2)](https://database.ich.org/sites/default/files/ICH_Q2(R2)_Guideline_2023_1130.pdf), and GMP documentation under ICH Q7 — none of which a research supplier's certificate substitutes for.

Next in this pillar: [HPLC purity vs peptide content](/knowledge-base/hplc-purity-vs-peptide-content/) — the two numbers most often confused, and the arithmetic that follows from confusing them.
