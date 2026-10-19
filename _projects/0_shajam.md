---
layout: page
title: SHAJAM
description: A deployed platform for physicians to analyze real patient data and conduct myeloma research
og_image: /assets/img/prof_pic.png
importance: 0
category: engineering
related_publications: false
---

**Inventor; patent pending through Mount Sinai Innovation Partners.**

[Open the live platform](https://shajam-mm.com/) · Authorized sign-in required

## Built for physicians doing research

I conceived, designed and built **SHAJAM** end to end at **Icahn School of Medicine at Mount Sinai**. Seven Tisch Cancer Institute oncologists use the deployed platform daily for IRB-approved scientific research. They can define patient cohorts, examine treatment histories and run statistical analyses through natural-language questions.

SHAJAM executes SQL and Python against **real patient data**, retrieves supporting clinical notes, and produces figures, tables and cohort exports. Its analyses have supported research outputs at the **International Myeloma Society and ASH (Blood)**.

## From a research question to an inspectable analysis

1. **Clarify the study.** A preflight filter checks the question against a generated map of available data. It runs the question, probes the dataset or asks the physician to resolve a study-design choice.
2. **Build the cohort.** Clinical terms are resolved to OMOP concepts and their descendants. The agent reconciles structured records with notes, pathology, radiology and molecular data, counting distinct patients rather than search hits.
3. **Run the analysis.** Five MCP servers connect SQL and concept resolution, hybrid clinical-note retrieval, biomedical resources and a Python analysis runtime. The runtime computes statistics on the selected cohort and renders figures in the chat.
4. **Check the result.** A separate evaluator is instructed to re-derive quantitative claims. Results retain SQL and source-note provenance so researchers can inspect the evidence and investigate discrepancies.
5. **Use the output.** Researchers receive tables, plots and cohort exports for further analysis and manuscript preparation.

## Data engineering and scale

The original AIR·MS source warehouse used **SAP HANA and OMOP CDM v5.4**, spanning **52 tables, 12M+ patients and 14B+ rows**. I built a swappable query relay and deployed a curated myeloma dataset on AWS using **DuckDB over S3 Parquet**, with a connected molecular catalog.

The deployed dataset snapshot covered **11,030 patients, approximately 93M rows and 4.67M clinical notes**, indexed into **9.21M passages**. It combined clinical records, pathology, radiology, sequencing from four vendors and clonoSEQ MRD data. These are dataset snapshot sizes, not active-user counts or a live feed of the full hospital warehouse.

## Agent and retrieval architecture

- **Hermes Agent and Open WebUI:** a physician-facing interface with tool use, delegated analysis, clarification and streamed results. Model routing supports Azure and Amazon Bedrock.
- **Five MCP servers:** a compact interface to cohort SQL, clinical-note retrieval, statistical analysis, external biomedical knowledge and bioinformatics functions.
- **Hybrid retrieval:** Qdrant combines dense and lexical retrieval with rank fusion, Qwen3 embeddings and GPU reranking. Retrieved passages retain their source context.
- **Real statistical computation:** pandas, lifelines and matplotlib operate on queried cohort rows in a separate analysis process. Workflows include survival analysis, treatment-episode reconstruction and cohort comparisons.
- **Verification and provenance:** concept resolution, explicit data-quality checks, independent re-checking and source-linked outputs make the analysis inspectable.

## Deployment and operations

I built the AWS deployment with **Terraform, EC2, S3, an Application Load Balancer and WAF**, including GPU inference and retrieval services. The delivery workflow uses immutable build bundles, development-to-production promotion, deployment health checks, drift detection and rollback support.

I also implemented column-level PHI filtering, controlled cohort exports, and a **48-event audit taxonomy** for tracing the system's work. The public link opens the sign-in page; patient data and source code remain private.

## Research enabled

The platform has supported a **378-patient extramedullary-disease cohort**, a **345-patient BCMA CAR-T/bispecific cohort**, and **immune-recovery analyses for 75 CAR-T patients**. It brings cohort definition, evidence review and statistical analysis into one workflow, reducing the repeated handoff between a physician's question and an analyst's SQL or notebook.

That research use is central to the project: physicians use SHAJAM to generate analyses from patient data, and those analyses feed scientific work and publications. My [publications page](/publications/) lists my research outputs; the platform's source and patient-level analyses are private.
