---
layout: page
title: MMAP Pipeline
description: GPU-accelerated genomics with Nextflow
img: assets/img/project_mmap.png
importance: 3
category: engineering
related_publications: false
---

## What I built

I designed a **57-process Nextflow DSL2 pipeline** for RNA sequencing, whole-exome sequencing, and multi-omics integration at Mount Sinai.

The work combined workflow orchestration with GPU-accelerated processing using NVIDIA Parabricks and RAPIDS. It produced structured reports for downstream scientific review.

## Engineering result

In the workflow I built, per-patient processing fell from **7 days to 3 hours (56×)**. This is the observed workflow comparison, rather than a hardware-independent benchmark or a claim about clinical outcomes.

## Architecture

The pipeline connects read quality control, alignment, variant analysis, expression analysis, and integration into reproducible workflows with explicit inputs and outputs.

- [View the system architecture](https://pan-theory-37309626.figma.site/)
