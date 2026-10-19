---
layout: about
title: about
permalink: /
subtitle: AI systems, from research to production

profile:
  align: right
  image: prof_pic.png
  image_circular: false # crops the image to make it circular
  more_info:

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<div class="home-intro" markdown="1">

<p class="home-lead">I design and build AI systems from the data layer to deployment, with a focus on agents, model post-training and evaluation.</p>

<nav class="home-links" aria-label="Profile links">
  <a href="https://scholar.google.com/citations?user=rAAtZi0AAAAJ&amp;hl=en&amp;sortby=pubdate">Google Scholar</a>
  <a href="{{ '/cv/' | relative_url }}">Experience and CV</a>
  <a href="{{ '/publications/' | relative_url }}">Publications</a>
  <a href="mailto:quidwaiali@gmail.com">Email</a>
</nav>

## Current work

I’m a founding engineer at Kinetic Systems and Technologies, where I build healthcare RL environments and agent evaluations. My work includes reconstructing software from workflow videos and designing RL tasks in the Harbor framework that test how agents interact with it.

</div>

<section class="home-section" markdown="1">

## SHAJAM: clinical research in daily use

At **Icahn School of Medicine at Mount Sinai (2023–2026)**, I conceived, designed and built **[SHAJAM](/projects/0_shajam/)**. Seven Tisch Cancer Institute oncologists use the deployed platform daily for IRB-approved research. It turns questions about real patient data into cohorts, statistical analyses and figures, with SQL and source evidence researchers can inspect.

I built the agent, retrieval and data systems and the AWS deployment for a myeloma dataset covering **11,030 patients**. Its analyses have supported research outputs at IMS and ASH (Blood).

**Inventor; patent pending through Mount Sinai Innovation Partners.**

[Architecture and research workflows](/projects/0_shajam/) · [Live platform](https://shajam-mm.com/) (authorized sign-in required)

</section>

<section class="home-section" markdown="1">

## Research and engineering

- **[OncoCITE](/projects/1_oncocite/):** a multimodal, six-agent system that reads scientific papers and checks extracted evidence against its sources. The [2026 preprint](https://doi.org/10.21203/rs.3.rs-9160944/v1) and [implementation](https://github.com/Ali-Maq/civic-extraction-agent) are public.
- **[OncoDIF](/projects/1c_oncodif/):** domain adaptation and evaluation for natural-language querying. LoRA fine-tuning improved correct SQL from 55% to 83.24% on the study's unseen questions (ASH 2025 conference abstract).
- **[AI-generated text detection](https://aclanthology.org/2023.bea-1.58/):** first-author research with IBM Research, published at the BEA 2023 workshop, with 94% document-level accuracy on the HC3 benchmark.

My work has included a genomics workflow that reduced observed per-patient processing from **seven days to three hours**, mentoring **six Carnegie Mellon graduate students**, and leading **three developers** as a founding-team technical lead at Carcrew.

I also built **[AYA: AI for Small Businesses](/projects/0_aya_small_business/)** at NVIDIA Spark Hack NYC 2026, where I was a hackathon winner. AYA connects 385 NYC Open Data sources to local agent workflows for small-business operations.

[Full publication list on Google Scholar](https://scholar.google.com/citations?user=rAAtZi0AAAAJ&hl=en&sortby=pubdate) · [Publication details and abstracts](/publications/)

</section>

<section class="home-section" markdown="1">

## How I got here

I've always been drawn to building things that matter. After finishing my Computer Science degree in India, I joined **Carcrew** as Technical Lead—a scrappy automotive startup where I learned what it takes to ship products that real people use. I built the product and team from scratch—learning what it takes to ship fast and iterate faster. It was exhilarating, but something kept nagging at me: I wanted to go deeper.

I went on to study Computer Engineering at **NYU** and work on AI-generated text detection with IBM Research, before building research software at Icahn School of Medicine at Mount Sinai.

I like working across the whole system: framing the problem, building the data and model workflow, evaluating it, and making it usable. Healthcare has been a major application area; the engineering questions I care about extend to other domains.

You can explore my [projects](/projects/), read my [publications on Google Scholar](https://scholar.google.com/citations?user=rAAtZi0AAAAJ&hl=en&sortby=pubdate), or find the code on [GitHub](https://github.com/Ali-Maq). For conversations about AI systems and research engineering, reach me at [quidwaiali@gmail.com](mailto:quidwaiali@gmail.com).

</section>
