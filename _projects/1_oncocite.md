---
layout: page
title: OncoCITE
description: Multi-Agent Genomic Evidence Extraction System (Submitted to Nature Cancer)
img: assets/img/oncocite_architecture.png
importance: 1
category: research
related_publications: true
---

## Overview

OncoCITE is a multi-agent AI system for automated genomic evidence extraction from scientific literature, currently submitted to **Nature Cancer**.

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; text-align: center; margin: 20px 0;">
  <h3 style="color: white; margin: 0 0 10px 0;">Try OncoCITE Live</h3>
  <p style="color: rgba(255,255,255,0.9); margin: 0 0 15px 0;">Interactive genomic evidence extraction for Multiple Myeloma</p>
  <a href="http://13.217.205.13/" target="_blank" rel="noopener" style="display: inline-block; background: white; color: #667eea; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">Launch Demo →</a>
</div>

## The Problem

Through systematic exploratory data analysis on the CIViC database (11,312 evidence items, 3,083 publications), I quantified **12 structural bottlenecks**:

- **Curation latency**: Median 31 days, P90 >21 months
- **Pareto inefficiency**: Top 100 sources = only 29% coverage
- **Emerging target gaps**: GPRC5D has 0 items despite FDA approval

## Technical Architecture

### 6-Agent Collaborative System
Built using **Claude Agent SDK** with sophisticated orchestration:

- **22 custom MCP tools** for genomic data extraction
- **State serialization** enabling pause-resume for long-running extractions
- **Vision-based PDF extraction** (300 DPI) replacing traditional OCR
- **Hierarchical multi-tier architecture** with supervisor-worker pattern

### Novel Validation Framework
Developed a **three-way validation methodology** treating source publications as ground truth—identified **24.2% curation errors** in expert-curated databases.

## Results

| Metric | Value |
|--------|-------|
| Ground Truth Recovery | 84% |
| Novel Discovery Precision | 97.8% |
| Critical Errors | 0% (n=108) |
| Ontology Resolution | 83.12% across 20 Tier-2 fields |

Validated on 15-paper corpus and deployed normalizer to enrich all 11,312 CIViC items.

## Key Innovations

- **State Serialization**: Enables deterministic replay and debugging of multi-agent workflows
- **Cross-field Validation**: Automated consistency checking across extracted fields
- **Hallucination Prevention**: Input/output guardrails with reasoning chain validation

## Related Publications

This project resulted in the following publications:

- {% cite quidwai2025oncocite %} - Full paper submitted to Nature Cancer
- {% cite quidwai2025oncodif %} - Conference abstract presented at ASH 2025

## Technical Stack

```
Agent Framework:    Claude Agent SDK
Tools:              22 custom MCP tools
PDF Processing:     Vision-based extraction (300 DPI)
Orchestration:      State graphs, pause-resume workflows
Validation:         Three-way ground truth framework
Database:           CIViC (11,312 items)
Ontologies:         DOID, EFO, NCIt, HPO via EMBL-EBI OLS
```
