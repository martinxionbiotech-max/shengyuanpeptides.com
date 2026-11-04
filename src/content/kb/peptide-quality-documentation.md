---
title: "Peptide Quality Documentation and Batch Verification"
description: "Identity, purity, content, method and batch traceability: how to read the peptide document set, what it proves, and where certificates routinely fail."
pubDate: 2026-11-05
draft: false
pillar: peptide-quality-documentation
order: 0
---

# Peptide Quality Documentation and Batch Verification

**Direct answer.** A peptide certificate of analysis (COA) is a *claim*, not evidence. The evidence is the method behind each number, the raw data that produced it, the batch that it belongs to, and the laboratory that signed it. Most supplier documentation fails not because the numbers are wrong, but because three of those four are missing — and a number without a method cannot be audited, only believed.

This pillar is the reference for judging a peptide supplier's documentation as a quality system rather than as a PDF. It is written for the person who has to defend a sourcing decision to a lab head, a QA reviewer or an auditor — not for someone shopping on price.

## Why documentation is the weak point in this market

Synthetic peptides are sold into a market with an unusual structure: the material is often made to order, batches are small, the buyer frequently cannot test what arrives, and the seller's website is often the only interface. That combination pushes the entire burden of proof onto documents.

The result is a genre of document that looks authoritative and carries almost no information. A typical page might say:

- "Purity: ≥98% (HPLC)"
- "Appearance: white powder"
- "Storage: −20 °C"

None of those statements is false. None of them is auditable either. Which column, which gradient, which wavelength, which integration parameters? Area-percent at 214 nm and area-percent at 280 nm are different measurements. A ≥98% figure derived from a 20-minute gradient is not the same claim as one derived from a 60-minute gradient, because the shorter run co-elutes impurities the longer one resolves.

That is the fragmentation problem this pillar addresses: the useful information exists, but it is scattered across the certificate, the specification sheet, the batch record, the method summary and the third-party report — and suppliers rarely put it in one place, because putting it in one place makes it checkable.

## The four documents, and what each one is for

| Document | What it is | What it can prove | What it cannot |
|---|---|---|---|
| **Certificate of analysis (COA)** | Batch-specific result sheet | What was measured on this batch, if the method is stated | That the method was valid, or that the sample was from the batch |
| **Specification sheet** | Product-level acceptance criteria | What the supplier promises to meet | That any particular batch met it |
| **Batch record / manufacturing summary** | Production and QC trace | How the batch was made and released | Independent verification of the result |
| **Third-party laboratory report** | Analysis by an outside lab | An independent measurement of the sample submitted | That the sample submitted was representative |

Read in that order, the four documents answer four different questions: *what was claimed, what was promised, how it was made, and who checked*. A supplier who supplies only the first has given you a datasheet with a batch number on it.

## The analysis path

This is the sequence we use when a buyer sends us another supplier's documentation to review. It is ordered by how quickly each step exposes a gap.

**1. Is there a batch number, and does it appear on every document?**
If the COA has no batch identifier, it is a product datasheet. If the batch number on the COA does not match the label, the documents describe a different lot than the one shipped. This single check eliminates a large share of what circulates in this market.

**2. Does the purity figure name its method?**
"≥98% (HPLC)" is incomplete without column chemistry, gradient, wavelength, flow rate and integration threshold. ICH Q2(R2) treats these as part of the procedure being validated, not as optional context ([ICH Q2(R2), 2023](https://database.ich.org/sites/default/files/ICH_Q2(R2)_Guideline_2023_1130.pdf)).

**3. Is peptide content reported separately from purity?**
Area-percent purity and net peptide content are different quantities, and a vial can be 98% pure and 78% peptide. If only one number is given, you cannot calculate how much peptide you are weighing. More on this in [HPLC purity vs peptide content](/knowledge-base/hplc-purity-vs-peptide-content/).

**4. Is identity confirmed by mass, and is the mass stated?**
A sequence on the certificate is a description, not a measurement. The measured mass — with the ionisation method and the agreement to theoretical — is the evidence. See [what mass spectrometry can and cannot confirm](/knowledge-base/what-mass-spectrometry-can-and-cannot-confirm/).

**5. Are impurities characterised, or only totalled?**
"Total impurities ≤2%" says nothing about *which* impurities. For a deletion sequence, an oxidised species or a diastereomer, the identity matters more than the total, because each has a different effect on an assay.

**6. Is the laboratory named, and is it accredited for the method?**
ISO/IEC 17025 accreditation covers specific methods in a specific scope ([ISO/IEC 17025:2017](https://www.iso.org/standard/66912.html)). A laboratory can be accredited for pH and not for peptide purity by RP-HPLC. "Tested by an ISO 17025 lab" without the scope is a claim about the building, not the test.

**7. Does the supplier control change, and keep retained samples?**
A specification that quietly changes between batches — a new column, a different counter-ion, a new subcontractor — invalidates historical comparability. Ask what triggers a specification revision and how long retention samples are kept.

**8. Can you choose the third-party laboratory?**
If the supplier nominates the lab, the test is independent of the supplier's *staff* but not of the supplier's *interests*. Being able to nominate the laboratory yourself is the difference between verification and reassurance.

## What documentation cannot tell you

Three limits are worth stating plainly, because suppliers rarely do.

**Documents do not prove the vial is the batch.** A COA travels by email; the vial travels in a box. Only batch-linked labelling and, ideally, a retained sample at the supplier close that gap.

**Purity is not potency.** A 99% pure peptide can be biologically inactive if the sequence is wrong, the disulfide is mispaired, or the counter-ion interferes with the assay. Purity measures the proportion of the target species among peptide species; it says nothing about activity.

**A quality system is not an analytical result.** ISO 9001 certifies a management system; it says nothing about whether the HPLC method is suitable. ISO/IEC 17025 addresses testing competence, and even then only within the accredited scope. Conflating the two is one of the most common errors in supplier questionnaires.

## Our position

This is where we stop describing and start judging, because a documentation standard without a position is just a checklist.

**First: a number without a method should be treated as marketing.** We would rather publish a lower purity figure with the method attached than a higher one that cannot be audited. A buyer who cannot reconstruct how a number was produced has no way to compare two suppliers, and the market's reliance on round figures rewards the wrong behaviour.

**Second: batch-specificity is the only anti-counterfeit that works.** Verification codes printed on a box prove that the box came from the seller. A batch number that links to a retained sample, a release record and a manufacturing date proves that the material came from a batch. We removed an on-site code lookup for exactly this reason — a lookup that only agrees with itself is theatre.

**Third: third-party testing should be buyer-directed.** "Independent testing available" means little if the supplier picks the laboratory and forwards the PDF. The credible offer is: nominate the lab, we ship the sample, the lab reports to you.

**Fourth: content, not purity, is the number that affects your experiment.** If you weigh 1 mg of a 78%-content peptide, you have 0.78 mg of peptide. Most reproducibility problems that get blamed on "bad peptide" are arithmetic problems caused by ignoring this.

**Fifth: documentation quality is a leading indicator of manufacturing quality.** A supplier who cannot state the gradient on their own certificate is unlikely to control the gradient in production. The document set is a proxy for process discipline, and it is available *before* you buy — which makes it the cheapest audit you will ever run.

## The cluster

Eight pages, each taking one part of the path above and going deeper:

1. [How to Read a Peptide Certificate of Analysis](/knowledge-base/how-to-read-a-peptide-coa/) — field by field, including the fields that are usually missing.
2. [HPLC Purity vs Peptide Content](/knowledge-base/hplc-purity-vs-peptide-content/) — the difference, the arithmetic, and why it changes your weighing.
3. [What Mass Spectrometry Can and Cannot Confirm](/knowledge-base/what-mass-spectrometry-can-and-cannot-confirm/) — identity yes, purity no, and the isomers mass cannot separate.
4. [Batch-Specific COA: Why Traceability Matters](/knowledge-base/batch-specific-coa-traceability/) — what a batch number has to link to before it means anything.
5. [How to Evaluate a Peptide Supplier's Quality Documents](/knowledge-base/evaluating-peptide-supplier-quality-documents/) — a scored audit you can run in an afternoon.
6. [Analytical Method Limitations in Peptide Quality Testing](/knowledge-base/analytical-method-limitations-peptide-testing/) — where HPLC and MS are blind.
7. [What Should a Peptide Product Specification Include?](/knowledge-base/peptide-product-specification/) — building a specification from ICH Q6B rather than from habit.
8. [A Supplier Quality Documentation Checklist](/knowledge-base/supplier-quality-documentation-checklist/) — the printable version of this pillar.

## Limits

This pillar describes documentation practice for research-grade synthetic peptides. It is not a regulatory submission guide, and it does not address pharmaceutical GMP manufacture, which carries additional requirements under ICH Q7 and the relevant pharmacopoeial monographs. Where this page cites a standard, the standard governs; where it cites our judgement, it is labelled as such.

Peptides discussed on this site are research materials — not for human or veterinary use, and not for diagnostic or therapeutic applications.
