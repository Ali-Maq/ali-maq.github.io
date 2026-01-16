---
layout: page
title: Clinical RAG System
description: Production RAG for Multiple Myeloma (medRxiv, 36 citations)
img: assets/img/project_rag.png
importance: 3
category: research
related_publications: true
---

## Overview

A production Retrieval-Augmented Generation (RAG) system for clinical decision support in multiple myeloma.

## The Problem

Clinicians needed rapid access to the latest multiple myeloma research across thousands of documents while ensuring accuracy and traceability for clinical decision-making.

## Technical Architecture

### RAG Pipeline
Built using **LangGraph** for sophisticated orchestration:

- **Embeddings**: BAAI/bge-large-en-v1.5 (state-of-the-art dense retrieval)
- **Generation**: Mistral-7B (optimized for clinical text)
- **Vector Store**: Amazon OpenSearch with hybrid search
- **Reranking**: Cohere reranker for precision

### Document Processing
- Processed **5,000+ clinical documents**
- Multi-format support (PDFs, clinical notes, research papers)
- Chunk optimization for clinical context preservation

## Results

| Metric | Value |
|--------|-------|
| Clinical Effectiveness | **88%** |
| Documents Processed | 5,000+ |
| Active Clinical Users | 2-3 oncologists |
| Citations | **36** (medRxiv) |

## Key Features

- **Source Attribution**: Every response linked to source documents
- **Clinical Guardrails**: Input/output guardrails prevent hallucination
- **Query Understanding**: Handles complex clinical terminology
- **Hybrid Search**: Combines semantic and keyword matching

## Related Publications

This project resulted in the following publications:

- {% cite quidwai2024rag %} - Preprint with 36 citations
- {% cite quidwai2024decision %} - Conference abstract at IMS 2024

## Impact

First prototype of an AI-powered clinical decision support system deployed in active clinical use at a major cancer center, demonstrating the feasibility of production RAG systems in healthcare.

## Technical Stack

```
Orchestration:  LangGraph
Embeddings:     BAAI/bge-large-en-v1.5
Generation:     Mistral-7B
Vector Store:   Amazon OpenSearch
Reranking:      Cohere
Deployment:     AWS (Bedrock, EC2)
Monitoring:     MLflow
```

## Links

- [medRxiv Paper](https://doi.org/10.1101/2024.03.14.24304293)
