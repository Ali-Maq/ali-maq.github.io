---
layout: page
title: MMAP Pipeline
description: GPU-Accelerated Genomic Pipeline (56× Speedup, Same-Day Analysis)
img: assets/img/project_mmap.png
importance: 2
category: engineering
---

## Overview

MMAP (Multiple Myeloma Analysis Platform) is a GPU-accelerated genomic processing pipeline with **57 processes** across 3 integrated workflows. Transforms patient analysis from **7 days to 3 hours**, enabling **same-day molecular tumor board readiness**.

**[See the entire system architecture here](https://pan-theory-37309626.figma.site/)**

## The Problem

Traditional genomic pipelines for RNA-seq and whole exome sequencing (WES) required 7+ days of processing time, delaying critical treatment decisions for oncology patients.

| Traditional CPU Pipeline | GPU-Accelerated MMAP |
|--------------------------|----------------------|
| 168 hours (7 days) | **3 hours** |
| 0.14 patients/day | **8 patients/day** |
| RNA-seq: 8-12 hours | RNA-seq: **40 minutes** |
| WES Alignment: 48-72 hours | WES Alignment: **2.5 hours** |
| Integration: 6-8 hours | Integration: **50 minutes** |

## Performance

| Metric | Value |
|--------|-------|
| Performance Gain | **56×** |
| Time Reduction | **95.8%** |
| Throughput | 8 patients/day (274 cluster-wide) |
| Total Processes | 57 |
| Workflows | 3 (RNA, WES, Integration) |
| Clinical Outputs | 10 TSV/CSV files |

## Pipeline Architecture

### Process Categories

| Category | Processes | Description |
|----------|-----------|-------------|
| RNA Primary | 5 | RNA-seq QC, alignment, quantification |
| RNA Secondary | 7 | Expression normalization, scoring, clinical annotation |
| WES Primary | 23 | DNA QC, alignment, variant calling, CNV detection |
| WES Secondary | 17 | Phylogenetics, biomarkers, clinical annotation, cohort analysis |
| Integration | 5 | Merge CNV + Expression, generate clinical recommendations |

### Data Flow

**RNA Pipeline (12 processes)**
- FASTQ → trimmed reads → aligned BAM
- BAM → gene counts → normalized expression
- Expression → risk scores + pathway scores
- Expression → drug sensitivity predictions
- Chimeric reads → fusions → clinical annotations

**WES Pipeline (36 processes)**
- FASTQ → analysis-ready BAM (6 steps)
- BAM → variants (Mutect2, Lancet, Manta)
- Variants → consensus → annotated VCF
- BAM → CNVs + purity/ploidy (FACETS)
- CNVs + variants → phylogenetic trees
- Trees → clonal architecture
- Biomarkers: MSI, HRD, TMB

**Integration (5 processes)**
- Expression + CNV → PSN inputs
- PSN → translocation predictions (Neural Net)
- PSN → molecular subtype (Random Forest)
- All data → myeloma hallmarks check
- predict_engine → 7 clinical reports

## Clinical Outputs

| Output | Description |
|--------|-------------|
| `actionable_variants.tsv` | Tier 1A-3 variants with evidence |
| `drug_recommendations.tsv` | Ranked therapies by evidence level |
| `variant_associations.tsv` | Clinical associations & trials |
| `somatic_mutation.tsv` | All detected mutations |
| `cna.tsv` | Copy number alterations |
| `expression.tsv` | Clinically relevant gene expression |
| `venetoclax.tsv` | Venetoclax sensitivity prediction |
| `predicted_translocations.csv` | IgH translocation predictions (t(4;14), t(11;14), etc.) |
| `predicted_class.csv` | PSN molecular subtype (PR, MS, CD1, CD2) |
| `mm_hallmarks_results.csv` | Trial eligibility & risk category |

## Key Technologies

**GPU-Accelerated:**
- **NVIDIA Parabricks** - GPU-accelerated genomics toolkit (fq2bam, HaplotypeCaller)
- **NVIDIA RAPIDS** - cuDF & cuML for GPU data processing
- **NVIDIA H100 GPUs** - 196 GPUs (80GB each) on Minerva HPC
- **TensorFlow/DeepVariant** - Neural network variant calling on GPU
- **STAR/Salmon** - RNA-seq alignment & quantification (GPU-accelerated)
- **BWA-MEM/GATK** - DNA alignment & variant calling (GPU via Parabricks)

**Pipeline Infrastructure:**
- **Nextflow DSL2** - Workflow orchestration with LSF scheduler
- **FACETS** - CNV calling
- **PhyloWGS** - Tumor evolution
- **VICC/CIViC** - Clinical annotation

## Technical Stack

```
GPUs:           NVIDIA H100 (196 available, 80GB each)
Cluster:        Minerva HPC
Accelerators:   NVIDIA Parabricks, RAPIDS (cuDF, cuML)
Workflow:       Nextflow DSL2
Scheduling:     LSF
Containers:     Singularity
Languages:      Python, Bash, R
```

