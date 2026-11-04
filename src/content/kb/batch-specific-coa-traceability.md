---
title: "Batch-Specific COA: Why Traceability Matters"
description: "A certificate without a batch number is a datasheet. What a batch identifier has to link to — manufacturing record, release data, retained sample — and how to test whether the link is real."
pubDate: 2026-11-05
draft: false
pillar: peptide-quality-documentation
order: 4
---

# Batch-Specific COA: Why Traceability Matters

**Direct answer.** A batch number is only meaningful if it connects four things: the material in the vial, a manufacturing record, a release decision, and a retained sample someone can re-test. A certificate that carries a batch number but links to none of these is a product datasheet with a serial number — it looks traceable without being traceable.

Part of the [peptide quality documentation pillar](/knowledge-base/peptide-quality-documentation/).

## Product specification versus batch certificate

The distinction is easy to state and routinely blurred:

| | Product specification | Batch certificate |
|---|---|---|
| Scope | Every future batch | One manufactured lot |
| Content | Acceptance criteria ("purity ≥95%") | Measured results for that lot |
| Changes | Revised deliberately, under change control | Fixed at release |
| Use | What you can expect | What you actually received |

A specification is a promise. A certificate is a result. When a supplier sends a specification and calls it a COA, they have told you what they intend to make, not what they shipped.

## What the batch number must link to

In pharmaceutical manufacturing, the batch record is the spine of traceability: it records the materials, the process, the in-process checks and the release decision, and it is retained for a defined period afterwards ([ICH Q7](https://www.ich.org/page/quality-guidelines) sets out the expectation for API manufacture; research-grade suppliers rarely meet it in full, but the principle is the same).

For a research peptide, a credible batch link implies at least:

1. **A manufacturing record** identifying the synthesis date, the resin and reagents, and the purification run.
2. **A release record** showing which tests were performed, by whom, against which specification.
3. **A retained sample** held for a defined period, so a later dispute can be resolved by re-testing rather than by argument.
4. **Label linkage** — the batch number printed on the vial, not only on the email attachment.

Four links. Most suppliers can produce the first, sometimes the second, rarely the third, and the fourth is where counterfeits and mix-ups show up.

## Why this matters more in peptides than in most categories

Three structural features make the peptide market unusually exposed:

**Small batches, frequent re-makes.** Custom sequences are synthesised in runs of grams, not tonnes. A supplier may produce the same product name twenty times a year in twenty batches, each with its own impurity profile. A product-level certificate describes none of them.

**Indistinguishable appearance.** Lyophilised peptides are white powders. There is no visual check, no serial number etched into the material, and no way for a buyer to detect a substitution without analysis.

**Resale and repackaging.** Material is frequently repackaged, relabelled or resold. Each step is an opportunity for the batch link to break — and a certificate that travels by email survives repackaging while the label that carried the batch number does not.

## How to test the link without a laboratory

You do not need analytical chemistry to check traceability. Five questions do most of the work:

1. **Does the COA carry a batch number at all?** If not, stop: it is a datasheet.
2. **Does the number match the label on arrival?** Check the physical vial. This catches repackaging and mix-ups.
3. **Does the manufacturing date precede the test date, and the test date precede the release date?** Inconsistent dates indicate a template being reused.
4. **Does the same batch number appear on the packing list and the invoice?** A batch that exists only on the certificate is a batch that exists only on the certificate.
5. **Will the supplier re-test a retained sample if you dispute a result?** Ask before ordering. The answer separates a supplier who keeps samples from one who keeps PDFs.

## Change control: the invisible half of traceability

Traceability is not only backward-looking. It also requires that a supplier *tells you* when something changes: a new column, a different counter-ion, a subcontracted purification step, a revised specification.

A supplier who silently changes the method between batches produces certificates that are individually valid and collectively incomparable. If your assay was validated against batch A, batch B may behave differently even though both certificates say "≥98%".

Ask what triggers a specification revision, and whether revisions are notified. If the answer is vague, assume notification does not happen.

## Our position

**Batch-specificity is the only anti-counterfeit that works, and it is the one the market neglects.** Codes printed on boxes prove the box came from the seller. A batch number linked to a retained sample proves the material came from a batch that was tested. We removed an online code lookup from this site for exactly that reason: a lookup that only agrees with itself is theatre, not verification.

**Retained samples are the dividing line between a manufacturer and a trader.** A trader cannot re-test what they did not make. When a supplier cannot say how long they keep retention samples, the honest interpretation is that they do not keep them.

**Ask for the batch record, not the certificate.** The certificate is the summary; the batch record is the evidence behind it. A supplier who will not show any part of the record is asking you to trust the summary alone.

## Limits

Research-grade suppliers are not required to operate under GMP, and many do not maintain batch records to ICH Q7 standards. This page describes what a credible link looks like, not a regulatory requirement for research materials — and it is not a substitute for an audit if your application requires one.
