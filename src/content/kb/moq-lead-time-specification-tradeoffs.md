---
title: "MOQ, Lead Time and Specification Trade-offs"
description: "Low minimum, short lead time, tight specification — you can usually have two. How the three constrain each other, and how to choose a corner deliberately."
pubDate: 2026-11-06
draft: false
pillar: peptide-supplier-evaluation
order: 5
---

# MOQ, Lead Time and Specification Trade-offs

**Direct answer.** In peptide synthesis, minimum order quantity, lead time and specification are not independent. Tightening the specification on a small batch raises the price per gram; shortening the lead time reduces the freedom to re-purify; pushing the MOQ down spreads fixed costs over fewer grams. Buyers who ask for all three at once receive a quote that quietly relaxes one of them.

Part of the [peptide supplier evaluation pillar](/knowledge-base/peptide-supplier-evaluation/).

## Why the three are linked

A synthesis run has fixed costs that do not scale with batch size: resin, reagents, analytical time, cleaning and changeover. Purification is the variable that dominates when the specification is tight — a 95% target may need one pass, a 98% target with a defined impurity profile may need two, and the second pass costs the same whether the batch is 100 mg or 5 g.

| If you insist on… | The supplier will usually | The cost appears as |
|---|---|---|
| Very low MOQ + tight spec | Run at small scale, accept lower yield | High price per gram |
| Very low MOQ + short lead time | Slot you into a shared schedule | Less re-purification freedom |
| Tight spec + short lead time | Commit capacity in advance | Higher price, or a MOQ floor |
| Low MOQ + short lead + tight spec | Quote, then renegotiate | A specification change you did not agree to |

That last row is the one to watch. The quote is accepted, the specification quietly becomes "≥95% typical" in the COA, and the buyer discovers it at delivery.

## Choosing a corner deliberately

**Corner A — cheap and fast, looser spec.** Appropriate for pilot work, screening, method development. You accept 95% with an unstated impurity profile because the experiment tolerates it.

**Corner B — cheap and tight, longer lead.** Appropriate for a validated assay where the material must be consistent, and the timeline has slack. The supplier can schedule re-purification without penalty.

**Corner C — tight and fast, higher MOQ.** Appropriate for a funded project with a deadline: pay for reserved capacity and a larger batch, and accept the inventory.

There is no corner that gives all three cheaply, because the third dimension is real work.

## What MOQ actually buys

MOQ is not a policy; it is an economic threshold. Below a certain quantity, the fixed costs dominate and the supplier either declines or prices defensively.

A practical way to think about it: ask what fraction of the quote is fixed cost. A supplier who says "below 500 mg the price per gram does not fall" is telling you the truth about their process. A supplier who offers any quantity at a smooth price curve is either very efficient or not making the material.

## Lead time: where it actually goes

For a custom sequence, a typical schedule looks like:

| Stage | Typical duration | What delays it |
|---|---|---|
| Sequence review and quotation | 1–3 days | Unusual residues, modifications |
| Synthesis | 1–2 weeks | Resin availability, coupling difficulty |
| Cleavage and crude analysis | 2–4 days | — |
| Purification | 3–10 days | Impurity profile, re-run |
| Lyophilisation | 2–4 days | Queue at the lyophiliser |
| QC and release | 3–7 days | Third-party testing adds transit |

Total: three to six weeks for a custom sequence, longer with third-party testing. A supplier quoting seven days for a custom 30-mer is either quoting from stock or quoting aspirationally.

## Specification: what is worth paying for

Not every specification attribute costs the same:

| Attribute | Cost impact | Worth it when |
|---|---|---|
| Purity 95% → 98% | Moderate to high | Assays sensitive to contaminating sequences |
| Defined impurity profile | Moderate | You need to know what the 2% is |
| Peptide content | Low | You do quantitative work (almost always) |
| Endotoxin testing | Low per batch | Cell-based work |
| Counter-ion specification | Low | Assay compatibility, mass balance |
| Custom salt exchange | Moderate | Specific buffer systems |

The cheapest improvements are content and endotoxin — both low cost, both frequently omitted. The expensive one is purity, and it is the one buyers fixate on.

## Our position

**The triangle is the most useful mental model in peptide procurement, and almost nobody uses it.** Buyers negotiate each dimension separately, which is why they end up with a quote that satisfies the letter of the request and none of the intent.

**Content and endotoxin are the best value specifications available.** For a small increment, they remove the two most common sources of experimental error — wrong weighing and contaminated material. Buyers who push for 99% purity while accepting an unstated content are optimising the expensive variable and ignoring the cheap one.

**A lead time quoted without a schedule breakdown should not be trusted.** A supplier who can say "synthesis two weeks, purification one week, QC three days" knows their process. One who says "about three weeks" is repeating a number.

**If the quote seems to satisfy all three constraints, ask which one was relaxed.** The honest supplier will tell you. The dishonest one will let you find out at delivery, when the COA says "typical".

Next: [supplier qualification documentation](/knowledge-base/supplier-qualification-documentation/) — the business-side documents that should exist before any of this is negotiated.
