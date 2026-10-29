---
title: "Understanding Peptide Purity: HPLC, Mass Spectrometry and How to Read a COA"
description: "A researcher's guide to how peptide purity is measured by reverse-phase HPLC and mass spectrometry, why purity differs from peptide content, and how to interpret every field of a certificate of analysis."
pubDate: 2026-10-20
draft: false
---

Purity is the headline number on nearly every peptide datasheet, and one of the most misunderstood. Two peptides can both be described as "95% pure" and still behave very differently in an assay, because the result depends on how the number was measured, which impurities remain, and how much actual peptide is in the vial. This guide explains the analytical methods behind peptide purity and walks through a certificate of analysis (COA) field by field. Throughout, peptides are laboratory research materials only — not for human or veterinary use, and nothing here is medical or dosing advice.

## Why Purity Matters in Peptide Research

In cell-based assays, binding studies, and immunology experiments, impurities act as uncontrolled variables. A deletion sequence that binds a receptor with reduced affinity can still compete with the full-length peptide and distort apparent potency; an oxidized species can aggregate or trigger nonspecific effects; and a trace impurity far more active than the target can shift dose-response curves. Purity also matters for reproducibility: journals and reviewers expect a stated purity with supporting analytical data, and batch-to-batch variation is a common reason experiments cannot be repeated. Knowing what the figure measures is the first step toward interpreting results with confidence.

## Reverse-Phase HPLC: The Workhorse of Purity Analysis

Reverse-phase high-performance liquid chromatography (RP-HPLC) is the standard method for quantifying peptide purity. The sample is loaded onto C18-bonded silica and eluted with a water/acetonitrile gradient, typically with 0.1% trifluoroacetic acid (TFA) as an ion-pairing modifier. Separation depends on hydrophobicity, so sequence-related impurities with slightly different hydrophobic character usually elute as separate peaks.

Detection is by ultraviolet absorbance. The peptide bond absorbs strongly near 214 nm, and many labs record at 214 or 220 nm; 280 nm, which detects tryptophan and tyrosine, sometimes serves as a confirmatory wavelength. Purity is calculated by integrating the area of the main peak and dividing by the total integrated area of all peptide-related peaks, expressed as area-percent.

Two caveats deserve attention. Area-percent assumes all peptide species absorb equally at the detection wavelength — approximately true at 214 nm, not exact — so HPLC purity is a comparative measure, not an absolute one. And because results depend on the method, a professional COA states the column, gradient, wavelength, and integration parameters. A main peak with a visible shoulder should reduce reported purity, not be ignored.

## Mass Spectrometry for Identity Confirmation

If HPLC answers "how pure," mass spectrometry (MS) answers "is it the right molecule?"

Electrospray ionization MS (ESI-MS) is the most common confirmatory method. Soft ionization produces multiply charged [M+nH]n+ ions, and software deconvolutes the charge-state envelope to a molecular mass compared with the theoretical mass calculated from the sequence. Agreement within roughly 1 Da — often much closer on modern instruments — confirms identity. MALDI-TOF MS generates predominantly singly charged species and is fast and salt-tolerant, which suits crude screening and larger peptides. MS does not directly measure purity, because ionization efficiency varies between species; when identity must be tied to a specific peak, laboratories use LC-MS so the UV trace and mass data refer to the same eluting species.

## Peptide Content vs Purity

A common error is to treat the purity figure as if it described the amount of peptide in the vial. It does not. A lyophilized powder contains the peptide backbone plus residual water — usually a few percent, more for hygroscopic sequences — and HPLC counter-ions, most often TFA or acetate, which can account for 10-25% of the powder's mass.

Purity, as area-percent, describes what fraction of the peptide species present is the target; peptide content describes what fraction of the powder is peptide, determined by amino acid analysis or a related quantitative method and reported as net peptide weight. A peptide that is 98% pure with 82% content contains 0.82 g of peptide backbone per gram of powder. For quantitative solution preparation, divide the intended amount by the peptide content, or ask for content-corrected net peptide weight. Some suppliers multiply the two figures into a "net peptide purity"; knowing which number you are looking at avoids systematic weighing errors.

## How to Read a Certificate of Analysis Field by Field

A well-prepared COA for a synthetic peptide typically contains the following fields:

- Batch or lot number: ties the vial to its production and QC records. Quote it in publications and quality inquiries.
- Peptide name and sequence: verify against your order, including the N- and C-terminal states.
- Theoretical and measured molecular weight: should agree within instrument accuracy (average mass for MALDI-TOF, monoisotopic for ESI).
- Purity: the HPLC area-percent, with detection wavelength and method stated.
- Peptide content: the net peptide percentage, so solutions can be prepared from true peptide weight.
- Counter-ion and residual water: TFA or acetate content and Karl Fischer water, explaining the difference between gross and net weight.
- Appearance and solubility note: physical form, suggested solvents, and storage.
- Date of analysis, analyst, and QC release: evidence that a named person approved the batch.
- Attached HPLC chromatogram and mass spectrum: check the main peak's retention time and observed m/z yourself; they are part of the certificate, not decoration.

Retain the COA with your laboratory records; it is the document that substantiates the quality claim in publications and audits.

## Common Impurity Classes in Synthetic Peptides

The most common impurity classes, and what they mean for an experiment:

- Deletion sequences: species missing one or more residues because a coupling did not go to completion.
- Truncated (failure) sequences: shorter peptides from chains that were capped and never extended further.
- Epimerization: racemization at a single residue — historically most pronounced at histidine and cysteine — yielding D-amino-acid diastereomers that may co-elute and change activity or immunogenicity.
- Oxidation products: methionine sulfoxide, cysteine dimers, and oxidized tryptophan.
- Rearrangements such as aspartimide formation at Asp-Gly sequences.
- Residual protecting groups or scavenger-derived adducts from cleavage.

Closely related impurities can co-elute on HPLC, so MS and additional separations provide confirming evidence; manufacturers suppress these impurities upstream through double coupling, capping, and careful cleavage.

## How Shandong Shengyuan Reports Purity on Every Batch

Shandong Shengyuan Peptide Technology Co., Ltd. is a peptide manufacturer based in Shandong, China. Every research peptide batch it ships is accompanied by a batch-specific COA together with the HPLC chromatogram and mass spectrum used for release. Purity is reported as area-percent at a stated wavelength, with peptide content, counter-ion, and residual water also reported so researchers can work from net peptide weight. QC data is retained for batch traceability. These products remain research materials for laboratory use only.

## Purity in the Supplier Evaluation Context

Purity is one evidence stream among several. A 98% area-percent figure supports a claim about
chromatographic purity — it does not establish identity, quantity, sterility, or suitability for a
regulated application. When you assess a supplier's documentation, read the purity figure against
the method that produced it, the batch it describes, and the other attributes your application
requires. The full decision framework is in [how to evaluate a peptide supplier](/knowledge-base/how-to-evaluate-a-peptide-supplier/),
the certificate categories in [quality systems vs. certifications](/knowledge-base/peptide-quality-systems-vs-certifications/),
and the laboratory-report checks in [how to verify independent peptide testing records](/knowledge-base/how-to-verify-independent-peptide-testing-records/).

On this site, release data is batch-specific: the [COA lookup](/coa/) returns purity, peptide
content, and identity for the verification code on the label — the same fields this guide explains,
reported separately for products such as [Tirzepatide](/products/tirzepatide/).

## References

- [ICH Quality Guidelines](https://www.ich.org/page/quality-guidelines) — International Council for Harmonisation, analytical validation framework (Q2) referenced for chromatographic method qualification.
- [US Pharmacopeia: Chromatography](https://www.usp.org/chemical-medicines/chromatography) — general chapter resources on HPLC system suitability and purity assessment.
- [PubMed](https://pubmed.ncbi.nlm.nih.gov/) — primary literature for peptide analysis; search "RP-HPLC peptide purity" for method-level studies.
