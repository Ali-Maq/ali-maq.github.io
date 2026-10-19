---
layout: page
title: OncoDIF
description: Model adaptation and evaluation for genomic curation and natural-language SQL
img: assets/img/publication_preview/oncodif.png
importance: 2
category: engineering
related_publications: false
---

## What I built

OncoDIF combines genomic evidence curation with natural-language clinical querying. I worked on adapting language models to the task and evaluating their outputs against defined baselines.

## Post-training and evaluation

A Llama-3 model was fine-tuned with **LoRA on 21,000 synthetic question–SQL pairs**. On unseen questions, the study reported **83.24% correct SQL**, compared with **55% for the untuned baseline**.

The framework also evaluated terminology variation in simulated scenarios and flagged low-confidence outputs for review. These are task-specific results reported in a conference abstract; they do not establish clinical outcome improvements.

## Publication

**ASH 2025 conference abstract**, published in _Blood_, volume 146, Supplement 1, abstract 2646.

- [Read the abstract](https://doi.org/10.1182/blood-2025-2646)

{% cite quidwai2025oncodif %}
