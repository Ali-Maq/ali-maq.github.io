---
layout: page
title: AYA — AI for Small Businesses
description: NVIDIA Spark Hack NYC 2026 · Local agents grounded in 385 NYC Open Data sources
importance: 0
category: engineering
related_publications: false
---

## From city data to business operations

I built AYA at **NVIDIA Spark Hack NYC**, held April 10–12, 2026 at Antler. AYA turns public city records into a business-specific brief and connects that brief to an agent workflow for Manhattan small businesses.

**Recognition:** Winner, NVIDIA Spark Hack NYC 2026. NVIDIA also invited me to present the project at its [developer community winners livestream on May 21](https://www.linkedin.com/events/7462280238631403520/).

## What I built

- A data layer joining **385 NYC Open Data sources**, including inspections, business licenses, 311 complaints, and film permits.
- A React interface and Python bridge that create business-specific briefs with source references.
- OpenClaw workspaces for each business, with skills and scheduled workflows.
- Parallel local-model analysis of operational risk, foot traffic, and competition, using the event's NVIDIA GB10-based infrastructure.

The public repository contains the implementation, setup instructions, and screenshots captured during the event. It is a hackathon prototype; dataset counts describe the implementation rather than customer adoption or production reliability.

## Code and event coverage

- [AYA implementation and demo walkthrough](https://github.com/Ali-Maq/aya-ai-for-small-businesses)
- [NVIDIA's official Spark Hack NYC event](https://luma.com/spark-hack-nyc)
- [Acer's April 9 news release about the NVIDIA event and hardware](https://news.acer.com/acer-veriton-gn100-to-power-the-spark-hack-series-new-york-with-new-capabilities)
- [NVIDIA AI's winners livestream announcement on LinkedIn](https://www.linkedin.com/posts/nvidia-ai_join-us-to-meet-the-winners-of-spark-hack-activity-7462280243345600512--gnh)

This project is distinct from my [2023 NYU education venture](/projects/7_aya/) and my [later agent-evaluation prototype](/projects/0_aya_agents/).
