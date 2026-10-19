---
layout: page
title: SHAJAM
description: Clinical research agents with source and SQL traceability
importance: 0
category: engineering
related_publications: false
---

## What I built

I designed and built **SHAJAM** at **Icahn School of Medicine at Mount Sinai**, a clinical research agent platform for asking questions across clinical records, notes, pathology, imaging and genomics.

The system connects natural-language questions to research data and analysis. Answers are traceable to their source data and SQL, so researchers can inspect how a result was produced.

## Data scope

SHAJAM connected to a source warehouse covering **12 million-plus patients**. The deployed myeloma instance covered **11,030 patients**. These describe the warehouse and research instance respectively; they are not counts of platform users.

## Engineering focus

- Connect different clinical and research data types through a common question-and-analysis workflow.
- Clarify research questions against available data before running an analysis.
- Preserve source and SQL traceability so results can be checked and reproduced.
