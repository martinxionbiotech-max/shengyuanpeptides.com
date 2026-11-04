---
title: "HPLC Purity vs Peptide Content: What Is the Difference?"
description: "Area-percent purity and net peptide content measure different things; confusing them causes weighing errors. Definitions, arithmetic and how to use each."
pubDate: 2026-11-05
draft: false
pillar: peptide-quality-documentation
order: 2
---

# HPLC Purity vs Peptide Content

**Direct answer.** HPLC purity asks: *of the peptide material in this sample, what fraction is the target sequence?* Peptide content asks: *of this powder, what fraction is peptide at all?* The first is a ratio between peptide species; the second is a ratio between peptide and everything else — water, counter-ions, residual solvents. A vial can be 98% pure and 78% peptide, and the 22% difference is what turns a calculated concentration into a wrong one.

Part of the [peptide quality documentation pillar](/knowledge-base/peptide-quality-documentation/).

## The two measurements

**Purity (area-percent by RP-HPLC).** The sample is separated on a reverse-phase column; the area under the main peak is divided by the total area of all peptide-related peaks and expressed as a percentage. It is a *relative* measure — relative to the impurities that the method can see, at that wavelength, under that gradient.

**Peptide content (net peptide weight).** The absolute amount of peptide in the powder, usually determined by amino-acid analysis after hydrolysis, or by UV absorbance using a sequence-derived extinction coefficient. Reported as a percentage of the weighed powder.

| | Purity | Content |
|---|---|---|
| Question answered | How much of the peptide is the right peptide? | How much of the powder is peptide? |
| Typical method | RP-HPLC, UV 214/220 nm | Amino-acid analysis, UV, nitrogen |
| Depends on | Gradient, column, wavelength | Hydrolysis completeness, standard, counter-ion |
| Typical value | 95–99% | 70–90% |
| Used for | Comparing lots, impurity control | Calculating how much to weigh |

## The arithmetic that catches people

A 5 mg vial, 98% pure, 80% content:

```
peptide mass = 5 mg × 0.80 = 4.0 mg
```

If you assumed 5 mg of peptide and prepared a 1 mg/mL solution in 5 mL, your actual concentration is 0.8 mg/mL — a 20% error, applied consistently across every experiment that uses that stock.

For a 90% content peptide the error is 10%; for a heavily TFA-salted, hygroscopic sequence it can exceed 25%. None of these errors announce themselves. They appear as a shift in dose-response, a failed replication, or an unexplained discrepancy between two labs using "the same" material.

## Why content is low even when purity is high

The powder is not pure peptide. It contains:

- **Counter-ions.** Trifluoroacetate is the usual one after RP-HPLC purification; acetate appears when the peptide is exchanged. Counter-ion mass can be a substantial fraction of the total, and the fraction depends on the number of basic residues — which is why content varies between sequences even at identical purity.
- **Water.** Lyophilised powders are hygroscopic. Karl Fischer values of 3–8% are routine; higher for sequences with many polar residues.
- **Residual solvents and salts** from synthesis and work-up, usually small but not zero.

Purity, by construction, cannot see any of this: water and TFA do not elute as peptide peaks at 214 nm. That is not a flaw in the method — it is a different question.

## The trap of "net peptide purity"

Some suppliers multiply purity by content and report a single "net peptide purity" figure. The number is not meaningless, but it hides two independent variables behind one percentage, and it removes the information a buyer needs for either purpose.

If a certificate offers only a combined figure, ask for the two components. A supplier who cannot separate them either does not measure content or does not want to report it.

## How to use each number

**Use purity to compare lots of the same product.** A drop from 98% to 94% is a signal about the synthesis or purification, and the impurity profile tells you whether it matters for your assay. Compare like with like: a different gradient changes the number without changing the material.

**Use content to calculate mass.** Always. If the certificate does not state content, ask for it — or, failing that, treat the nominal vial weight as an upper bound and state the assumption in your methods section.

**Use both when you compare suppliers.** A supplier quoting 99% purity with no content figure is not comparable with one quoting 97% and 85%. The first number is bigger and the second is more informative.

## Our position

**Content is the more useful number, and it is the one the market ignores.** Purity is easy to print and easy to inflate by shortening a gradient; content requires an additional measurement and a standard, and it constrains what a supplier can claim. A certificate that reports content is a certificate written by someone who knows what the customer does with the product.

**Purity percentages should never be compared across methods.** Two labs running different gradients on the same material can legitimately report 96% and 99%. When a buyer says "supplier X claims 99% and you claim 97%", the honest answer is usually that the two figures were produced by different methods — and the dishonest answer is to shorten the gradient until the numbers match.

**A "net peptide purity" figure without its components should be rejected.** It is the analytical equivalent of quoting a price without saying what is included.

## Limits

Amino-acid analysis assumes complete hydrolysis; sequences containing bulky or unusual residues can hydrolyse incompletely and under-report content. UV-based content depends on the accuracy of the extinction coefficient, which is calculated from the sequence and assumes no conformational effects. Neither method is exact, and a content figure is properly read as ±3–5 percentage points rather than as a precise value.

Continue: [What mass spectrometry can and cannot confirm](/knowledge-base/what-mass-spectrometry-can-and-cannot-confirm/) — the third number on the certificate, and the one most often overstated.
