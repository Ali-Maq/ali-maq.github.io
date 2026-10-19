---
layout: about
title: about
permalink: /
subtitle: AI Systems Engineer · Agents, Model Post-Training & Evaluation

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

{% if site.draft_preview %}
<div class="alert alert-info" role="status">Local draft for review · These changes have not been published.</div>
{% endif %}

I've always been drawn to building things that matter. After finishing my Computer Science degree in India, I joined **Carcrew** as Technical Lead—a scrappy automotive startup where I learned what it takes to ship products that real people use. I built the product and team from scratch—learning what it takes to ship fast and iterate faster. It was exhilarating, but something kept nagging at me: I wanted to go deeper.

I build AI systems that turn complex data into working tools. My work spans **agents, model post-training, and evaluation**, with an emphasis on making results traceable and testing where systems fail.

I’m a founding engineer at Kinetic Systems and Technologies, where I build healthcare RL environments and agent evaluations. My work includes reconstructing software from workflow videos and designing RL tasks in the Harbor framework that test how agents interact with it.

[Experience and CV](/cv/) · [Research publications](/publications/) · [Email](mailto:quidwaiali@gmail.com)

At **Icahn School of Medicine at Mount Sinai (2023–2026)**, I designed and built **[SHAJAM](/projects/0_shajam/)**, a clinical research platform that answers questions across records, notes, pathology, imaging and genomics, with results traceable to source data and SQL. Its source warehouse covered **12M+ patients**; the deployed myeloma instance covered **11,030 patients**.

I also built agents that extract evidence from papers, models that turn questions into SQL, and GPU pipelines for genomic analysis. Before that, I studied Computer Engineering at **NYU**, worked on AI-generated text detection with IBM Research, and built software in startup teams.

Selected research includes:

- **[OncoCITE](/projects/1_oncocite/):** a multimodal, six-agent system that reads scientific papers and checks extracted evidence against its sources. The [2026 preprint](https://doi.org/10.21203/rs.3.rs-9160944/v1) and [implementation](https://github.com/Ali-Maq/civic-extraction-agent) are public.
- **[OncoDIF](/projects/1c_oncodif/):** domain adaptation and evaluation for natural-language querying. LoRA fine-tuning improved correct SQL from 55% to 83.24% on the study's unseen questions (ASH 2025 conference abstract).
- **[AI-generated text detection](https://aclanthology.org/2023.bea-1.58/):** first-author research with IBM Research, published at the BEA 2023 workshop, with 94% document-level accuracy on the HC3 benchmark.

My work has included a genomics workflow that reduced observed per-patient processing from **seven days to three hours**, mentoring **six Carnegie Mellon graduate students**, and leading **three developers** as a founding-team technical lead at Carcrew.

I also built **[AYA — AI for Small Businesses](/projects/0_aya_small_business/)** at NVIDIA Spark Hack NYC 2026, where I was a hackathon winner. AYA connects 385 NYC Open Data sources to local agent workflows for small-business operations.

I like working across the whole system: framing the problem, building the data and model workflow, evaluating it, and making it usable. Healthcare has been a major application area; the engineering questions I care about extend to other domains.

You can explore my [projects](/projects/), read my [publications](/publications/), or find the code on [GitHub](https://github.com/Ali-Maq). For conversations about AI systems and research engineering, reach me at [quidwaiali@gmail.com](mailto:quidwaiali@gmail.com).
