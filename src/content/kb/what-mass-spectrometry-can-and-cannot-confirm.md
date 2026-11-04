---
title: "What Mass Spectrometry Can and Cannot Confirm"
description: "MS confirms molecular identity, not purity — and it cannot distinguish isomers, epimers or disulfide pairings. Where the technique is decisive, where it is silent, and how certificates overstate it."
pubDate: 2026-11-05
draft: false
pillar: peptide-quality-documentation
order: 3
---

# What Mass Spectrometry Can and Cannot Confirm

**Direct answer.** Mass spectrometry answers one question extremely well — *is this the molecule it claims to be?* — and a different question not at all: *how much of it is there?* A certificate that presents a mass as evidence of quality is using an identity test as a purity claim. The mass tells you the sequence is probably right; it says nothing about how much impurity is present, and nothing about isomers that share the same mass.

Part of the [peptide quality documentation pillar](/knowledge-base/peptide-quality-documentation/).

## What MS establishes

For a synthetic peptide, electrospray (ESI) or MALDI produces a mass spectrum from which the molecular mass is derived — by deconvoluting the charge-state envelope in ESI, or by reading the predominantly singly charged ions in MALDI. That measured mass is compared with the theoretical mass calculated from the sequence.

Agreement confirms three things:

1. The amino-acid composition is consistent with the intended sequence.
2. Terminal modifications (acetylation, amidation) are present as expected — they change the mass by a fixed amount.
3. Gross synthesis failures — a missing residue, a doubled residue, a wrong building block — are absent, because each would shift the mass by a residue mass.

That is a genuinely strong identity check. It is also the limit of what a single mass value establishes.

## What MS does not establish

**Purity.** Ionisation efficiency varies between species. A sample that is 80% target and 20% deletion sequence produces a spectrum whose target ion may dominate completely. Without chromatographic separation, MS intensity is not composition.

**Isomeric identity.** Leucine and isoleucine are isobaric — same mass, different residues. MS cannot tell them apart; only sequencing (MS/MS fragmentation patterns, or Edman degradation) can. The same applies to epimerised residues: a D-amino acid has the same mass as its L-form and a different biological behaviour.

**Disulfide pairing.** A peptide with two disulfides has three possible pairings, all with identical mass. If the pairing matters for activity — and for many structured peptides it does — mass is blind to it. Selective reduction with mass shift, or enzymatic digestion followed by LC-MS, is needed.

**Counter-ion and water content.** These are the other half of the mass balance, and they do not appear in the peptide mass at all.

## ESI versus MALDI, briefly

| | ESI | MALDI-TOF |
|---|---|---|
| Typical use | LC-MS, accurate mass, large peptides | Rapid identity, crude material, high mass |
| Charge state | Multiply charged, needs deconvolution | Mostly singly charged |
| Salt tolerance | Lower | Higher |
| Coupling to separation | Native (LC-ESI-MS) | Offline; requires spotting |
| Best evidence for | Identity *of a specific peak* | Identity of the bulk sample |

The distinction that matters for documentation: **LC-MS ties the mass to a retention time.** When a certificate reports a single mass from a bulk injection, the mass refers to the dominant ionisable species in the sample, not necessarily to the peak whose area was used to calculate purity. If those are different species, two numbers on the same certificate describe two different things — and the reader has no way to know.

That is why we treat an LC-MS trace, with the UV chromatogram and the extracted mass spectrum aligned, as qualitatively better evidence than a standalone mass value. It is the difference between "the sample contains this mass" and "the 98% peak is this mass".

## How certificates overstate MS

Three patterns recur:

- **"MS: conforms."** No measured value, no method, no comparison to theoretical. This is an assertion with a technique's name attached.
- **"Identity confirmed by MS, purity 98%."** Two numbers presented as one quality statement, when the purity came from a separate HPLC run and the mass from a separate injection — possibly of a different aliquot.
- **"Molecular weight: 2847.2."** Stated without saying whether it is the theoretical or measured value. If it is theoretical, the certificate contains no identity evidence at all — just arithmetic derived from the sequence.

## Our position

**A mass value is the cheapest real evidence on a certificate, and the most often wasted.** It costs a supplier almost nothing to print the measured mass next to the theoretical and the method. Omitting it — or printing only "conforms" — is a choice, and it usually means the measurement either was not made or was not made well.

**"MS confirms purity" is the single most common analytical misconception we see in supplier documents.** It is not a subtle error; it inverts what the technique does. A buyer who accepts it will over-trust a certificate that carries no purity evidence beyond a single HPLC percentage with no method attached.

**Beyond identity, the document you actually want is an LC-MS trace.** It is the only routine artefact that connects the purity number to the molecule, and it is what we would ask for first if we were auditing a supplier rather than being audited.

## What to ask for

If identity matters for your work — and for a receptor-binding study or an immunogen it does — request:

1. Measured mass, method, and the theoretical mass with the calculation basis (average vs monoisotopic).
2. An LC-MS chromatogram with the UV trace and the extracted ion chromatogram overlaid.
3. For disulfide-containing peptides, a statement of the pairing and the method used to confirm it.

If a supplier cannot produce the first, the rest is unlikely to exist. See also [analytical method limitations](/knowledge-base/analytical-method-limitations-peptide-testing/) for the cases where neither HPLC nor MS will settle the question.
