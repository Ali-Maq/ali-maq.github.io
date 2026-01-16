---
layout: page
title: Multi-Omics GNN
description: Graph Neural Network for Patient Stratification (258% High-Risk Detection)
img: assets/img/project_multiomics.png
importance: 4
category: research
related_publications: false
---

## Overview

Applied modified **IntegrAO graph neural network** methodology to the MMRF COMPASS cohort (N=655 samples) for multi-omics patient stratification in multiple myeloma, achieving **258% high-risk detection enhancement**.

## The Problem

Multiple myeloma patients show heterogeneous responses to treatment:
- Standard risk stratification misses important subgroups
- Multi-omics data underutilized for personalized treatment
- Need for actionable therapeutic vulnerability profiles

## Technical Approach

### Data Integration
Integrated four omics layers from MMRF COMPASS cohort (N=655 samples):
- **SNV**: Single nucleotide variants
- **CNV**: Copy number variations
- **TME**: Tumor microenvironment signatures
- **WES**: Whole exome sequencing features

### Graph Neural Network
Modified **IntegrAO** architecture:
- Multi-layer graph construction from patient similarity
- Attention-based message passing across omics layers
- Interpretable node embeddings for clinical actionability

## Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Subgroups Identified | 12 | 18 | **50% improvement** |
| High-Risk Patients | 12 | 43 | **258% enhancement** |
| Actionable Targets | - | 94% of patients | - |
| Vulnerability Profiles | - | 18 distinct | - |

## Clinical Impact

Identified **18 distinct vulnerability profiles** enabling:
- Targeted therapeutic recommendations
- Identification of patients likely to respond to specific agents
- Early intervention for high-risk subgroups
- **94% of patients** now have actionable therapeutic targets

## Technical Stack

```
Framework:      PyTorch Geometric
Architecture:   Modified IntegrAO
Dataset:        MMRF COMPASS (N=655)
Omics Layers:   SNV, CNV, TME, WES
Analysis:       Scanpy, Geneformer
Clustering:     Unsupervised ML
```

## Publication

- **Clinical Lymphoma Myeloma Leukemia 2025** - "Integrating Microenvironment with Tumor Multi-Omic Using Unsupervised Machine Learning" (Contributing Author)
