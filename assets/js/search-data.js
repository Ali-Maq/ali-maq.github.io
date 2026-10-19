// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Agents, model adaptation, evaluation, and research software.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Papers, preprints, and conference abstracts, with primary-source and Google Scholar links.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Public implementations, experiments, and documentation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching and mentorship in algorithms, machine learning, and research evaluation.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Experience, research publications, and technical leadership in AI systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-why-i-m-finally-building-in-public",
        
          title: "Why I'm Finally Building in Public",
        
        description: "After years of keeping tools locked in production, I'm committing to open source.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome/";
          
        },
      },{id: "post-medgemma-1-5-google-s-open-medical-ai-just-got-serious",
        
          title: "MedGemma 1.5: Google's Open Medical AI Just Got Serious",
        
        description: "A deep dive into Google's MedGemma 1.5 4B - architecture, capabilities, benchmarks, and what it means for clinical AI development.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/medgemma-deep-dive/";
          
        },
      },{id: "news-our-rag-chatbot-for-precision-medicine-of-multiple-myeloma-preprint-is-available-on-medrxiv",
          title: "Our RAG Chatbot for Precision Medicine of Multiple Myeloma preprint is available on...",
          description: "",
          section: "News",},{id: "news-our-oncodif-and-prime-conference-abstracts-appeared-in-the-ash-2025-supplement-of-blood-oncodif-prime",
          title: "Our OncoDIF and PRIME conference abstracts appeared in the ASH 2025 supplement of...",
          description: "",
          section: "News",},{id: "news-the-oncocite-preprint-is-available-on-research-square-with-public-code-and-source-grounded-evaluation-read-the-paper",
          title: "The OncoCITE preprint is available on Research Square, with public code and source-grounded...",
          description: "",
          section: "News",},{id: "news-built-aya-ai-for-small-businesses-at-nvidia-spark-hack-nyc-and-won-a-hackathon-award-the-prototype-connects-385-nyc-open-data-sources-to-local-agent-workflows",
          title: "Built AYA — AI for Small Businesses at NVIDIA Spark Hack NYC and...",
          description: "",
          section: "News",},{id: "news-our-study-of-wearables-and-cytokine-profiling-after-car-t-therapy-was-published-in-jci-insight-read-the-article",
          title: "Our study of wearables and cytokine profiling after CAR-T therapy was published in...",
          description: "",
          section: "News",},{id: "projects-aya-agent-evaluation-prototype",
          title: "AYA — Agent Evaluation Prototype",
          description: "2026 prototype · controller and evaluation layer for software agents",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_aya_agents/";
            },},{id: "projects-aya-ai-for-small-businesses",
          title: "AYA — AI for Small Businesses",
          description: "NVIDIA Spark Hack NYC 2026 · Local agents grounded in 385 NYC Open Data sources",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_aya_small_business/";
            },},{id: "projects-shajam",
          title: "SHAJAM",
          description: "A deployed platform for physicians to analyze real patient data and conduct myeloma research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/0_shajam/";
            },},{id: "projects-oncocite",
          title: "OncoCITE",
          description: "Multimodal agents for source-grounded scientific evidence extraction",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_oncocite/";
            },},{id: "projects-prime-model",
          title: "PRIME Model",
          description: "Collaborative relapse-risk modeling research; ASH 2025 abstract",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1b_prime/";
            },},{id: "projects-oncodif",
          title: "OncoDIF",
          description: "Model adaptation and evaluation for genomic curation and natural-language SQL",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1c_oncodif/";
            },},{id: "projects-mmap-pipeline",
          title: "MMAP Pipeline",
          description: "A 57-process Nextflow genomics pipeline; observed per-patient processing from 7 days to 3 hours (56×).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_mmap/";
            },},{id: "projects-clinical-rag-system",
          title: "Clinical RAG System",
          description: "Retrieval, source attribution, and evaluation for oncology research",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_rag_clinical/";
            },},{id: "projects-multi-omics-single-cell-research",
          title: "Multi-Omics \u0026 Single-Cell Research",
          description: "Collaborative research on myeloma heterogeneity and immune signatures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_multiomics/";
            },},{id: "projects-car-t-wearables-ml",
          title: "CAR-T Wearables \u0026 ML",
          description: "Data analysis for a published pilot study of cytokine release syndrome",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_cart/";
            },},{id: "projects-voice-asr-prototype",
          title: "Voice ASR Prototype",
          description: "Domain adaptation for myeloma terminology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6a_voice_agent/";
            },},{id: "projects-aya-education-venture-2023",
          title: "AYA — Education Venture (2023)",
          description: "Academic-video learning tools developed during NYU Summer Sprint",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_aya/";
            },},{id: "projects-carcrew",
          title: "Carcrew",
          description: "Automotive repair marketplace · founding-team technical leadership",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_carcrew/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=rAAtZi0AAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Ali-Maq", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mujahid-ali-q", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%75%69%64%77%61%69%61%6C%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
