---
layout: page
title: OncoCITE
description: Multimodal agents for source-grounded scientific evidence extraction
img: assets/img/oncocite_architecture.png
importance: 1
category: research
related_publications: false
---

## What I built

OncoCITE reconstructs structured oncology evidence from scientific literature. I designed and implemented the system, ran the normalization and extraction experiments, and developed the evaluation workflow.

The system uses **six agents and 22 MCP tools**. It reads papers as page images, attaches source quotes and page references to proposed evidence records, resolves ontology identifiers, and uses a critic loop to check the results. Checkpoints support inspection and resuming longer runs.

## Evaluation

The retrospective evaluation covered **10 myeloma papers**. Expert review compared the extracted records, existing CIViC records, and the source publications.

| Result                                 | Scope                                                    |
| -------------------------------------- | -------------------------------------------------------- |
| 21/25 reference items recovered        | Source-verified reference items in the retrospective set |
| 44/45 novel extractions judged correct | Expert-adjudicated novel evidence records                |
| 8/33 curated items had discrepancies   | Comparison with the source publications                  |

The study also included five additional prospective papers. These results describe a small, disease-specific evaluation, rather than performance across all scientific literature. The database normalization experiment used a snapshot of 11,312 CIViC items.

## Paper and implementation

**Research Square preprint, March 2026; under review at Nature Communications.**

- [Read the preprint](https://doi.org/10.21203/rs.3.rs-9160944/v1)
- [Primary implementation and reproduction instructions](https://github.com/Ali-Maq/civic-extraction-agent)
- [LangChain/LangGraph companion implementation](https://github.com/Ali-Maq/oncocite-langchain)

{% cite quidwai2025oncocite %}
