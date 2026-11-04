---
title: "Analytical Method Limitations in Peptide Quality Testing"
description: "Where HPLC and MS are blind: co-elution, non-UV-absorbing impurities, overloaded injections and isobars. What a 98% purity figure can and cannot mean."
pubDate: 2026-11-05
draft: false
pillar: peptide-quality-documentation
order: 6
---

# Analytical Method Limitations in Peptide Quality Testing

**Direct answer.** Every purity figure is produced by a method, and every method has blind spots. RP-HPLC cannot see impurities that co-elute with the main peak, species that do not absorb at the detection wavelength, or anything below its limit of detection; MS cannot separate isomers. A "98% pure" peptide is 98% pure *by that method* — which is why the method is part of the result, not background.

Part of the [peptide quality documentation pillar](/knowledge-base/peptide-quality-documentation/).

## Where RP-HPLC is blind

**Co-elution.** Separation is by hydrophobicity. Two impurities with similar hydrophobicity to the target — a deletion sequence missing a non-polar residue, or an epimer — can elute under the main peak. The area integration then attributes their absorbance to the target, and purity is over-reported. A longer gradient or a different column chemistry resolves them; a shorter gradient hides them.

**Non-absorbing species.** Detection at 214 nm responds to the peptide bond, so peptide-related impurities are visible in principle. But salts, counter-ions, residual solvents and some protecting-group fragments do not absorb meaningfully at 214 nm. They are in the powder and invisible to the method — which is why content and water determination exist as separate tests.

**Injection overload.** A concentrated injection improves signal-to-noise and can compress the main peak, masking shoulders. Integration thresholds compound the effect: a threshold set at 0.1% simply discards impurities below it from the calculation. Two labs with different thresholds can report different purities for the same material without either being wrong.

**Gradient and column artefacts.** Trifluoroacetate ion-pairing changes retention; column age shifts selectivity; temperature control changes resolution. None of these make a result invalid, but all of them make results incomparable across labs unless the method is specified.

## Where MS is blind

**Isobars.** Leucine and isoleucine share a mass. Epimers share a mass. Disulfide-pairing isomers share a mass. If the distinction matters for your assay, mass alone cannot settle it — you need fragmentation (MS/MS), enzymatic digestion, or a chromatographic method that resolves the species.

**Quantitation.** Ionisation efficiency varies between species and is suppressed by matrix. Peak intensity in a bulk injection is not a composition measurement.

**Low-abundance species.** A 0.05% impurity may not produce a detectable ion at all, even when it is present and relevant.

## The validation question

ICH Q2(R2) requires that a method be shown to be *suitable for its purpose* — specificity, linearity, accuracy, precision, range, detection and quantitation limits ([ICH Q2(R2), 2023](https://database.ich.org/sites/default/files/ICH_Q2(R2)_Guideline_2023_1130.pdf)). A supplier's in-house purity method is rarely validated to that standard, and it does not need to be for research use — but the absence of validation is a reason to interpret the number cautiously, not a reason to treat it as false.

The practical question is not "is the method validated", but "was the method capable of detecting the impurities that matter for my application". A method that cannot resolve a deamidated species will report high purity for a sample that behaves poorly in a stability study.

## What 98% can mean

| Scenario | Reported purity | What is actually true |
|---|---|---|
| 30-min gradient, threshold 0.1% | 98.0% | 98% of *detected* peak area; unresolved impurities excluded |
| 60-min gradient, threshold 0.01% | 95.5% | Same material, more impurities resolved and counted |
| Overloaded injection | 99.1% | Peak compression hides shoulders |
| Impurity co-eluting with target | 98.5% | Impurity counted as product |

Four numbers, one material. None of them is a lie; each answers a slightly different question.

## Our position

**Purity is a method-defined number, and quoting it without the method is a category error.** The market treats 98% as an absolute property of the material. It is not: it is the output of a procedure, and a procedure that resolves less reports more. This is not a scandal — it is how analytical chemistry works — but it means comparisons across suppliers are meaningless unless the methods are comparable.

**A short gradient is the most common way purity gets inflated without anyone lying.** It is also the hardest to spot, because the certificate still says "HPLC". The tell is a very high figure combined with no method detail: if the supplier will not describe the gradient, assume it is short.

**For most research applications, the impurity profile is more useful than the purity total.** A 97% peptide whose 3% is water and TFA behaves better than a 99% peptide whose 1% is an agonist deletion sequence. The total hides the distinction; the profile reveals it.

**Where the method cannot answer your question, the answer is a different method — not a better number.** If you need to know about epimers, ask for chiral analysis or MS/MS; if you need to know about disulfide pairing, ask for selective reduction. Asking for a higher purity percentage is asking the wrong instrument.

## Limits

This page describes routine RP-HPLC and ESI/MALDI practice. It does not cover orthogonal methods (CE, IEX, SEC), which resolve different classes of impurity and are sometimes the only way to see aggregation or charge variants. Where a supplier offers only one method, the limitation is not the method — it is the absence of a second one.
