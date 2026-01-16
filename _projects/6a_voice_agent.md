---
layout: page
title: Voice ASR Prototype
description: Clinical Terminology Recognition for Multiple Myeloma
img: assets/img/project_voice.png
importance: 6
category: engineering
---

## Overview

A voice ASR prototype fine-tuned for clinical terminology recognition, specifically targeting multiple myeloma medical vocabulary that standard ASR models frequently misrecognize.

## The Problem

Standard ASR systems struggle with:
- **Medical terminology**: Drug names, biomarkers, and clinical terms
- **Domain-specific vocabulary**: Multiple myeloma terminology (BCMA, daratumumab, etc.)
- **Clinical workflow integration**: On-device deployment requirements

## Technical Approach

### ASR Fine-tuning
- Fine-tuned **OpenAI Whisper Small** for on-device deployment
- Trained on recorded patient voice dataset
- Focused on reducing word error rate for myeloma-specific terminology

### Domain Vocabulary
- Multiple myeloma drug names (daratumumab, carfilzomib, lenalidomide)
- Biomarker terminology (BCMA, GPRC5D, CD38)
- Clinical assessment terms (VGPR, sCR, MRD negativity)

## Results

| Metric | Value |
|--------|-------|
| Model | Whisper Small |
| Deployment | On-device |
| Focus | Word error rate reduction |
| Domain | Multiple myeloma terminology |

## Key Features

- **On-device deployment**: Optimized for local inference
- **Domain-specific training**: Patient voice recordings
- **Clinical vocabulary**: Improved recognition of medical terms
- **Standard ASR comparison**: Outperforms generic models on clinical terms

## Technical Stack

```
ASR:            Fine-tuned Whisper Small
Training Data:  Patient voice recordings
Focus:          Medical terminology WER
Deployment:     On-device
Languages:      Python
```

## Applications

- Clinical voice notes
- Medical terminology transcription
- Accessible interfaces for clinical data entry
