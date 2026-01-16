---
layout: page
title: PRIME Model
description: Predictive Relapse Indicators for Myeloma T-Cell Engagers (Blood 2025, ASH 2025)
img: assets/img/blood.png
importance: 2
category: research
related_publications: false
---

## Overview

PRIME (Predictive Relapse Indicators for Myeloma T-Cell Engagers) is a multivariable Cox model that predicts **progression-free survival (PFS)** in relapsed/refractory multiple myeloma patients receiving **BCMA- and GPRC5D-targeting T-cell engagers**. Published in **Blood 2025** and presented at **ASH 2025**.

**My Role**: Contributing author on model development and validation.

## The Problem

T-cell engagers (TCEs) targeting BCMA and GPRC5D have transformed RRMM treatment with unprecedented response rates. However:

- Many patients relapse early or show only transient responses
- No reliable predictors of treatment outcomes at TCE initiation
- Need for personalized risk assessment to tailor treatment strategies

## Study Design

**Retrospective cohort study** at Mount Sinai Health System:

| Parameter | Value |
|-----------|-------|
| Patients Identified | 325 |
| Patients Analyzed | 231 (minimal missing data) |
| PFS Events | 125 |
| Median PFS | **17.6 months** (95% CI: 12.4-24.3) |
| Median Follow-up | 23.8 months (95% CI: 21.2-27.6) |

### Cohort Characteristics
- Median age: 67.6 years
- High-risk cytogenetics: 42.4%
- Extramedullary disease (EMD): 22.1%
- Prior CAR-T: ~20%
- ≥5 prior lines of therapy: ~60%
- Triple-class refractory: 85.3%
- Penta-drug refractory: 39.8%
- BCMA-targeting TCE: ~55%

## Statistical Methodology

### Model Development
- **Multivariable Cox model** for PFS prediction
- **13 pre-specified clinical/laboratory predictors** (21 degrees of freedom)
- **Restricted cubic splines** for continuous predictors (flexible modeling)
- **Riley's shrinkage methodology** to mitigate overfitting

### Validation
- **Internal validation** with optimism adjustment
- **C-index: 0.659** (95% CI: 0.629-0.749)

### Output
- **Nomogram** for individualized PFS estimates
- Predictions at **6, 12, 24, and 48 months**
- **Online calculator** for clinical use (planned)

## Key Predictors

Five predictors showed meaningful associations with PFS:

| Predictor | Comparison | Hazard Ratio | p-value | Interpretation |
|-----------|------------|--------------|---------|----------------|
| **ALC** | ≥0.9 vs <0.9 ×10³/µL | 0.62 (0.43-0.90) | 0.011 | 38% lower risk |
| **High-risk cytogenetics** | Present vs absent | 1.59 (1.10-2.30) | 0.015 | 59% higher risk |
| **EMD** | Present vs absent | 1.54 (1.02-2.33) | 0.041 | 54% increased hazard |
| **LDH** | 600 vs 200 U/L | 1.39 (1.06-1.81) | 0.015 | Continuous effect |
| **Ferritin** | 1000 vs 100 ng/mL | 1.54 (1.01-2.34) | 0.045 | 54% increased hazard |

## Clinical Impact

PRIME enables personalized risk assessment for patients on TCE therapy:

- **BCMA-targeting agents**: Teclistamab, elranatamab
- **GPRC5D-targeting agents**: Talquetamab
- **Risk stratification** at treatment initiation
- **Monitoring strategy optimization** based on predicted risk
- **External validation** planned with cohorts from other centers

## Technical Stack

```
Statistics:     Multivariable Cox regression
Splines:        Restricted cubic splines
Shrinkage:      Riley's methodology
Validation:     Internal (optimism-adjusted)
Output:         Nomogram, Online calculator
Patients:       N=231 (from 325 identified)
```

## Publication

- **Blood 2025** - "Development of Predictive Relapse Indicators for Myeloma T Cell Engagers (PRIME) Model" (Contributing Author)
- **ASH 2025** - Conference presentation

## Links

- [Blood Abstract](https://doi.org/10.1182/blood-2025-3996)

## Collaborators

- Tarek Mouhieddine (Lead Author)
- Mount Sinai Myeloma Program
