---
layout: page
title: MMAP Pipeline
description: A 57-process Nextflow genomics pipeline; observed per-patient processing from 7 days to 3 hours (56×).
og_image: https://ali-maq.github.io/assets/img/mmap_overview.png
importance: 3
category: engineering
related_publications: false
---

## What I built

I designed a **57-process Nextflow DSL2 pipeline** for RNA sequencing, whole-exome sequencing, and multi-omics integration at Mount Sinai.

The work combined workflow orchestration with GPU-accelerated processing using NVIDIA Parabricks and RAPIDS. It produced structured reports for downstream scientific review. I defined quality-control and instrument requirements with the sequencing team, connecting laboratory inputs to reproducible computational workflows.

## Engineering result

In the workflow I built, per-patient processing fell from **7 days to 3 hours (56×)**. This is the observed workflow comparison, rather than a hardware-independent benchmark or a claim about clinical outcomes.

## Workflow components

The pipeline connects read quality control, alignment, variant analysis, expression analysis, and integration into reproducible workflows with explicit inputs and outputs.

- **Read quality control and alignment:** prepare sequencing inputs for downstream analysis.
- **Variant and expression analysis:** support whole-exome and RNA-sequencing workflows.
- **Multi-omics integration and reporting:** combine outputs for scientific review.

Nextflow DSL2 coordinates the processes; NVIDIA Parabricks and RAPIDS provide GPU-accelerated processing. Quality-control requirements and instrument specifications were defined with the sequencing team.
