---
layout: page
title: CAR-T CRS Prediction
description: Early CRS Detection Using Wearables + ML (84.62% Accuracy, 7-Hour Lead Time)
img: assets/img/project_cart.png
importance: 5
category: research
related_publications: false
---

## Overview

Machine learning system for early prediction of **Cytokine Release Syndrome (CRS)** in CAR-T therapy patients, developed as part of an investigator-initiated trial at **Mount Sinai Hospital**. Achieved **84.62% accuracy** within a 6-hour prediction window with **7-hour median lead time** before standard nursing detection.

**My Role**: Built the machine learning models for CRS prediction (data analysis).

## The Problem

CAR-T therapies (ide-cel, cilta-cel) have revolutionized treatment for relapsed/refractory multiple myeloma, but CRS remains a common and potentially severe complication:

- **CRS**: Life-threatening inflammatory response requiring inpatient monitoring
- **Current approach**: Reactive monitoring every 4 hours by nursing staff
- **Clinical need**: Early warning system to enable outpatient CAR-T delivery

## Study Design

**Prospective, single-center observational pilot study** (2023-2024):

| Parameter | Value |
|-----------|-------|
| Patients Enrolled | 30 |
| Final Analysis | 25 (sufficient monitoring data) |
| CRS Events | 20/25 patients (80%) |
| Products | Idecabtagene vicleucel (ide-cel), Ciltacabtagene autoleucel (cilta-cel) |
| Median Length of Stay | 13 days (IQR 12-14) |

## Data Sources

### Wearable Device
**Current Health Gen 2** (FDA-approved) + **Feverscout axillary patch** (VivaLnk):
- Pulse rate, oxygen saturation, respiratory rate
- Skin temperature (upper arm) + axillary temperature
- Motion data
- Continuous transmission to cloud

### Cytokine Profiling
**Olink proximity extension assay (PEA)** platform:
- 92 immune- and oncology-related proteins
- Normalized Protein Expression (NPX) values on log2 scale
- Samples collected pre-infusion and at predetermined intervals post-infusion

## Machine Learning Approach

### Feature Engineering
- Time-lagged features from rolling windows (6-14 hours)
- Biomarker fold-changes from baseline
- Linear, spline, and polynomial interpolation to align cytokine with wearable data

### Model Evaluation
**5 classifiers** evaluated via StratifiedKFold CV (5 splits):
- Random Forest
- Gradient Boosting
- Support Vector Machine
- Logistic Regression
- k-Nearest Neighbors

**SHAP** analysis for feature importance and interpretability.

## Results

### Wearable-Based CRS Detection
| Metric | Value |
|--------|-------|
| CRS Episodes Detected | 18/20 |
| Median Lead Time | **7:01 hours** before nursing detection |
| Device Adherence | 71% (IQR 55-84%) during high-risk periods |

### Combined Model (Temperature + Cytokines)

| Product | Best Classifier | Accuracy | Prediction Window |
|---------|-----------------|----------|-------------------|
| Ide-cel | Random Forest | **84.62%** | 6 hours |
| Cilta-cel | Gradient Boosting | **80.62%** | 6 hours |

### IFN-γ as Predictive Biomarker

| Metric | Cilta-cel | Ide-cel |
|--------|-----------|---------|
| Precision | **90%** | 86% |
| Sensitivity | 75% | 75% |
| Accuracy | 73% | 67% |
| Mean Lead Time | **40 hours** (median 22, range 7-120) | - |

### Key Biomarkers by Product
- **Ide-cel**: IL5, IFN-γ, NOS3, CD4, TNFRSF9
- **Cilta-cel**: IL10, CCL4, MCP-2, MCP-3, IFN-γ
- **IFN-γ**: Cross-product predictor present in both models

## Mentorship Component

Mentored **6 Carnegie Mellon University graduate students** (Sep-Dec 2024) on this project as part of their capstone:
- Guided experiment design, baselining, and reporting
- Coordinated with clinical team on project scope and deliverables
- Students contributed to model development and validation

## Clinical Impact

Wearable devices demonstrated feasibility for early CRS detection, offering:
- **Actionable lead times** for intervention
- **Support for outpatient CAR-T models** reducing hospital stays
- **Integration with cytokine data** enhances predictive accuracy

## Technical Stack

```
ML:             Scikit-learn (Random Forest, Gradient Boosting, SVM, LR, k-NN)
Interpretability: SHAP
Cytokines:      Olink PEA (92 proteins)
Wearables:      Current Health Gen 2, Feverscout
Validation:     StratifiedKFold CV (5 splits)
Statistics:     Linear mixed-effects (DREAM framework)
Patients:       N=30 enrolled, N=25 analyzed
```

## Links

- [Preprint (SSRN)](https://ssrn.com/abstract=5217949)
- [Data & Code (GitHub)](https://github.com/Lagana-Lab/MM_CRS)

## Publication

- **SSRN Preprint** - "Early Detection of Cytokine Release Syndrome Using Wearable Devices and Cytokine Profiling Following CAR-T Therapy for Myeloma" (Contributing Author)
