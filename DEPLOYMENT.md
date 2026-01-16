# Deployment & Maintenance Guide

**Site:** https://ali-maq.github.io
**Theme:** al-folio (Jekyll)
**Owner:** Mujahid Ali Quidwai (Ali)
**Google Scholar:** rAAtZi0AAAAJ

---

## Quick Deploy

```bash
cd /Users/ali/Downloads/resume/ali-maq.github.io
git add -A
git commit -m "Your commit message"
git push origin main
```

Site auto-deploys via GitHub Actions in ~2-3 minutes.

---

## Complete File Paths

### Root Configuration
| File | Full Path | Purpose |
|------|-----------|---------|
| Site Config | `/Users/ali/Downloads/resume/ali-maq.github.io/_config.yml` | Main site settings |
| Gemfile | `/Users/ali/Downloads/resume/ali-maq.github.io/Gemfile` | Ruby dependencies |

### Data Files (YAML)
| File | Full Path | Purpose |
|------|-----------|---------|
| CV | `/Users/ali/Downloads/resume/ali-maq.github.io/_data/cv.yml` | All CV content |
| Socials | `/Users/ali/Downloads/resume/ali-maq.github.io/_data/socials.yml` | Social media links |
| Repositories | `/Users/ali/Downloads/resume/ali-maq.github.io/_data/repositories.yml` | GitHub repos |
| Coauthors | `/Users/ali/Downloads/resume/ali-maq.github.io/_data/coauthors.yml` | Co-author links |
| Citations | `/Users/ali/Downloads/resume/ali-maq.github.io/_data/citations.yml` | Citation overrides |

### Pages (Markdown)
| Page | Full Path | URL |
|------|-----------|-----|
| About/Home | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/about.md` | `/` |
| Projects | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/projects.md` | `/projects/` |
| Publications | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/publications.md` | `/publications/` |
| Blog | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/blog.md` | `/blog/` |
| Repositories | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/repositories.md` | `/repositories/` |
| Teaching | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/teaching.md` | `/teaching/` |
| CV | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/cv.md` | `/cv/` |
| 404 | `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/404.md` | Error page |

### Bibliography
| File | Full Path | Purpose |
|------|-----------|---------|
| Papers | `/Users/ali/Downloads/resume/ali-maq.github.io/_bibliography/papers.bib` | All publications (BibTeX) |

### Projects
| Project | Full Path |
|---------|-----------|
| OncoCITE | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/1_oncocite.md` |
| PRIME | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/1b_prime.md` |
| MMAP | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/2_mmap.md` |
| Clinical RAG | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/3_rag_clinical.md` |
| Multi-Omics | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/4_multiomics.md` |
| CAR-T CRS | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/5_cart.md` |
| Voice Agent | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/6a_voice_agent.md` |
| AYA | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/7_aya.md` |
| Carcrew | `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/8_carcrew.md` |

### News
| File | Full Path |
|------|-----------|
| ASH 2025 | `/Users/ali/Downloads/resume/ali-maq.github.io/_news/announcement_1.md` |
| Nature Cancer | `/Users/ali/Downloads/resume/ali-maq.github.io/_news/announcement_2.md` |
| Site Launch | `/Users/ali/Downloads/resume/ali-maq.github.io/_news/announcement_3.md` |

### Assets
| Type | Full Path |
|------|-----------|
| All Images | `/Users/ali/Downloads/resume/ali-maq.github.io/assets/img/` |
| Profile Photo | `/Users/ali/Downloads/resume/ali-maq.github.io/assets/img/prof_pic.png` |
| Favicon | `/Users/ali/Downloads/resume/ali-maq.github.io/assets/img/fire.gif` |
| Publication Previews | `/Users/ali/Downloads/resume/ali-maq.github.io/assets/img/publication_preview/` |
| PDF Files | `/Users/ali/Downloads/resume/ali-maq.github.io/assets/pdf/` |
| CV PDF | `/Users/ali/Downloads/resume/ali-maq.github.io/assets/pdf/Mujahid_Ali_Quidwai_Resume.docx.pdf` |

---

## TAB 1: ABOUT PAGE (Homepage)

**File:** `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/about.md`
**URL:** `https://ali-maq.github.io/`

### Front Matter Fields

```yaml
---
layout: about                    # Must be "about"
title: about                     # Tab title (lowercase)
permalink: /                     # URL path (/ = homepage)
subtitle: AI Systems Engineer @ <a href='URL'>Mount Sinai</a>  # Shows under name

profile:
  align: right                   # Image alignment: left, right
  image: prof_pic.png            # Filename in assets/img/
  image_circular: false          # true = circular crop
  more_info:                     # Text below image (currently empty)

selected_papers: true            # Show selected publications section
social: true                     # Show social icons

announcements:
  enabled: true                  # Show news section
  scrollable: true               # Scroll if >3 items
  limit: 5                       # Max items shown

latest_posts:
  enabled: true                  # Show blog posts section
  scrollable: true
  limit: 3
---
```

### Content Section

After the `---`, write bio in Markdown. Use `**bold**` for emphasis.

---

## TAB 2: PROJECTS

**Listing Page:** `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/projects.md`
**Individual Projects:** `/Users/ali/Downloads/resume/ali-maq.github.io/_projects/*.md`
**URL:** `https://ali-maq.github.io/projects/`

### Projects Page Front Matter

```yaml
---
layout: page
title: projects
permalink: /projects/
description: Your description here
nav: true
nav_order: 2                          # Position in navbar
display_categories: [research, engineering, startup]  # Categories to show
horizontal: false                     # Card layout
---
```

### Individual Project Front Matter

```yaml
---
layout: page
title: Project Name                   # Display title
description: Short description        # Shows on card
img: assets/img/project_image.png     # Card thumbnail
importance: 1                         # Sort order (lower = first)
category: research                    # Must match display_categories
related_publications: true            # Enable {% cite %} tags
---
```

### Project Fields Explained

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `layout` | string | Yes | Always `page` |
| `title` | string | Yes | Project name |
| `description` | string | Yes | Card description (1-2 sentences) |
| `img` | path | Yes | Image path from root |
| `importance` | integer | Yes | Sort priority (1 = highest) |
| `category` | string | Yes | `research`, `engineering`, or `startup` |
| `related_publications` | boolean | No | Set `true` only for first-author papers |
| `redirect` | URL | No | External link instead of page |
| `github` | string | No | GitHub repo (user/repo format) |

### Current Projects

| # | Title | Category | Importance | File |
|---|-------|----------|------------|------|
| 1 | OncoCITE | research | 1 | `1_oncocite.md` |
| 2 | PRIME Model | research | 2 | `1b_prime.md` |
| 3 | MMAP Pipeline | engineering | 2 | `2_mmap.md` |
| 4 | Clinical RAG | research | 3 | `3_rag_clinical.md` |
| 5 | Multi-Omics GNN | research | 4 | `4_multiomics.md` |
| 6 | CAR-T CRS | research | 5 | `5_cart.md` |
| 7 | Voice Agent | engineering | 6 | `6a_voice_agent.md` |
| 8 | AYA | startup | 7 | `7_aya.md` |
| 9 | Carcrew | startup | 8 | `8_carcrew.md` |

### Citing Publications in Projects

Only use `{% cite key %}` in projects where you are **first author**:
```markdown
{% cite quidwai2025oncocite %}
```

For contributing author projects, set `related_publications: false` and mention paper in text without cite tag.

---

## TAB 3: PUBLICATIONS

**Page:** `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/publications.md`
**Data:** `/Users/ali/Downloads/resume/ali-maq.github.io/_bibliography/papers.bib`
**URL:** `https://ali-maq.github.io/publications/`

### BibTeX Entry Template

```bibtex
@article{uniquekey2025,
  abbr={VENUE},                    # Badge text (Nature, ASH, ACL, etc.)
  bibtex_show={true},              # Show BibTeX button
  title={Full Paper Title Here},
  author={LastName, FirstName and LastName2, FirstName2 and LastName3, FirstName3},
  abstract={Abstract text goes here. Can be multiple sentences.},
  journal={Journal Name},
  volume={146},
  number={Supplement 1},           # Optional
  pages={1234-1235},
  year={2025},
  doi={10.1234/example-doi},       # Optional - creates DOI link
  html={https://link-to-paper},    # Optional - creates link button
  pdf={filename.pdf},              # Optional - PDF in assets/pdf/
  code={https://github.com/...},   # Optional - code link
  website={https://...},           # Optional - project website
  google_scholar_id={XXXXXX},      # Optional - for citation count
  note={Additional notes},         # Shows as annotation
  selected={true},                 # true = shows on homepage
  preview={image.png}              # Image in publication_preview/
}
```

### BibTeX Fields Reference

| Field | Required | Description |
|-------|----------|-------------|
| `abbr` | Yes | Badge label (VENUE name) |
| `bibtex_show` | Yes | Always `{true}` |
| `title` | Yes | Full paper title |
| `author` | Yes | Authors in BibTeX format |
| `year` | Yes | Publication year |
| `journal` | Yes | Journal/venue name |
| `abstract` | No | Paper abstract |
| `volume` | No | Journal volume |
| `pages` | No | Page numbers |
| `doi` | No | DOI (without https://doi.org/) |
| `html` | No | Direct link to paper |
| `pdf` | No | PDF filename in assets/pdf/ |
| `code` | No | GitHub/code link |
| `selected` | No | `{true}` for homepage display |
| `preview` | No | Image filename in publication_preview/ |
| `google_scholar_id` | No | For citation tracking |
| `note` | No | Extra info (citations, status) |

### Current Publications

| Key | Title | Venue | Year | Selected | First Author |
|-----|-------|-------|------|----------|--------------|
| `quidwai2025oncocite` | OncoCITE | Nature Cancer | 2025 | Yes | Yes |
| `quidwai2025oncodif` | OncoDIF | Blood (ASH) | 2025 | No | Yes |
| `quidwai2024rag` | RAG Chatbot | medRxiv | 2024 | Yes | Yes |
| `quidwai2024decision` | P-145 RAG | CLML (IMS) | 2024 | No | Yes |
| `quidwai2023plagiarism` | Plagiarism Detection | ACL BEA | 2023 | Yes | Yes |
| `mouhieddine2025prime` | PRIME Model | Blood (ASH) | 2025 | Yes | No |
| `rajeeve2024crs` | CAR-T CRS | MDPI | 2024 | No | No |
| `hamidi2025multiomics` | Multi-Omics | CLML (IMS) | 2025 | No | No |

### Publication Preview Images

Location: `/Users/ali/Downloads/resume/ali-maq.github.io/assets/img/publication_preview/`

| Image | Used By |
|-------|---------|
| `oncocite.png` | quidwai2025oncocite |
| `oncodif.png` | quidwai2025oncodif |
| `rag.png` | quidwai2024rag |
| `IMS.png` | quidwai2024decision |
| `acl.png` | quidwai2023plagiarism |
| `prime.png` | mouhieddine2025prime |
| `cart.png` | rajeeve2024crs |
| `multiomics.png` | hamidi2025multiomics |

---

## TAB 4: BLOG

**Page:** `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/blog.md`
**Posts:** `/Users/ali/Downloads/resume/ali-maq.github.io/_posts/` (currently empty)
**URL:** `https://ali-maq.github.io/blog/`

### Blog Page Front Matter

```yaml
---
layout: default
permalink: /blog/
title: blog
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
---
```

### Creating a Blog Post

Create file in `_posts/` with naming: `YYYY-MM-DD-title-slug.md`

Example: `2025-01-15-building-oncocite.md`

```yaml
---
layout: post
title: Your Post Title
date: 2025-01-15 10:00:00
description: Short description for preview
tags: tag1 tag2 tag3
categories: category1
thumbnail: assets/img/post_image.png    # Optional
giscus_comments: false
related_posts: true
---

Your post content in Markdown here...
```

---

## TAB 5: REPOSITORIES

**Page:** `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/repositories.md`
**Data:** `/Users/ali/Downloads/resume/ali-maq.github.io/_data/repositories.yml`
**URL:** `https://ali-maq.github.io/repositories/`

### Repositories YAML Format

```yaml
github_users:
  - Ali-Maq                    # GitHub username(s) to show profile card

repo_description_lines_max: 2  # Max lines for repo description

github_repos:                  # Specific repos to feature
  - Ali-Maq/repo-name
  - Ali-Maq/another-repo
  # Add repos as: username/repository-name
```

### Current Configuration

```yaml
github_users:
  - Ali-Maq

repo_description_lines_max: 2

github_repos:
  # Add repos later
```

---

## TAB 6: TEACHING

**File:** `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/teaching.md`
**URL:** `https://ali-maq.github.io/teaching/`

### Front Matter

```yaml
---
layout: page
permalink: /teaching/
title: teaching
description: Teaching experience and graduate student mentorship...
nav: true
nav_order: 6
---
```

### Current Sections

1. **Graduate Research Mentorship**
   - CMU Capstone Project (CAR-T, Sep-Dec 2024)
   - AI/ML Integration Mentorship (Oct 2023 - Present)

2. **Teaching Experience**
   - Data Structures & Algorithms for Bioinformatics (NYU, 3 semesters)

3. **Conference Presentations & Engagement**
   - ACL 2023 (Toronto)
   - IMS 2024 (Rio de Janeiro)
   - ASH 2025 (San Diego)

4. **Speaking & Collaboration**
   - Contact: quidwaiali@gmail.com

---

## TAB 7: CV

**Page:** `/Users/ali/Downloads/resume/ali-maq.github.io/_pages/cv.md`
**Data:** `/Users/ali/Downloads/resume/ali-maq.github.io/_data/cv.yml`
**URL:** `https://ali-maq.github.io/cv/`

### CV Page Front Matter

```yaml
---
layout: cv
permalink: /cv/
title: cv
nav: true
nav_order: 7
cv_pdf: Mujahid_Ali_Quidwai_Resume.docx.pdf  # PDF in assets/pdf/
description: Your description here
toc:
  sidebar: left                              # Table of contents position
---
```

### CV YAML Structure

The CV uses different section types:

#### Type: map (key-value pairs)

```yaml
- title: General Information
  type: map
  contents:
    - name: Full Name
      value: Mujahid Ali Quidwai
    - name: Email
      value: quidwaiali@gmail.com
```

#### Type: time_table (timeline entries)

```yaml
- title: Experience
  type: time_table
  contents:
    - title: Job Title
      institution: Company Name, Location
      year: Start - End
      description:
        - Bullet point 1
        - Bullet point 2
        - title: Nested Section
          contents:
            - Nested bullet 1
            - Nested bullet 2
```

#### Type: nested_list (skills with categories)

```yaml
- title: Technical Skills
  type: nested_list
  contents:
    - title: Category Name
      items:
        - Skill 1
        - Skill 2
        - Skill 3
```

#### Type: list (simple list)

```yaml
- title: Professional Affiliations
  type: list
  contents:
    - Association for Computational Linguistics (ACL)
    - American Society of Hematology (ASH)
```

### Current CV Sections

1. General Information (map)
2. Professional Summary (map)
3. Education (time_table)
4. Experience (time_table)
5. Publications (time_table)
6. Technical Skills (nested_list)
7. Honors and Awards (time_table)
8. Professional Affiliations (list)

---

## SOCIAL LINKS

**File:** `/Users/ali/Downloads/resume/ali-maq.github.io/_data/socials.yml`

### All Available Fields

```yaml
# Academic
scholar_userid: rAAtZi0AAAAJ      # Google Scholar ID
orcid_id: 0000-0000-0000-0000     # ORCID (optional)
semanticscholar_id: XXXXX          # Semantic Scholar (optional)
research_gate_profile: username    # ResearchGate (optional)

# Professional
github_username: Ali-Maq
linkedin_username: mujahid-ali-q
email: quidwaiali@gmail.com

# Social
twitter_username: username         # X/Twitter (optional)
mastodon_username: username        # Mastodon (optional)
medium_username: username          # Medium (optional)

# Other
rss_icon: false                    # RSS feed icon (enable when blog has posts)
```

### Current Configuration

```yaml
scholar_userid: rAAtZi0AAAAJ
github_username: Ali-Maq
linkedin_username: mujahid-ali-q
email: quidwaiali@gmail.com
rss_icon: false
```

---

## _config.yml Key Settings

**File:** `/Users/ali/Downloads/resume/ali-maq.github.io/_config.yml`

### Personal Info (Lines 1-25)

```yaml
title: Ali Quidwai
first_name: Mujahid Ali
last_name: Quidwai
email: quidwaiali@gmail.com

description: >
  AI Systems Engineer at Mount Sinai | Precision Oncology...

footer_text: >
  Powered by Jekyll with al-folio theme...

keywords: computational-biology, precision-oncology, machine-learning...
lang: en
icon: fire.gif                    # Favicon in assets/img/

url: https://ali-maq.github.io
baseurl:                          # Leave empty for root domain
```

### Important Settings

| Setting | Line | Purpose |
|---------|------|---------|
| `title` | ~1 | Site title |
| `first_name` / `last_name` | ~2-3 | Your name |
| `email` | ~4 | Contact email |
| `description` | ~11-12 | Site meta description |
| `footer_text` | ~13-15 | Footer content |
| `icon` | ~19 | Favicon filename |
| `url` | ~21 | Site URL |

---

## Navigation Order

| Position | Page | nav_order | File |
|----------|------|-----------|------|
| 1 | about | (home) | `_pages/about.md` |
| 2 | projects | 2 | `_pages/projects.md` |
| 3 | publications | 3 | `_pages/publications.md` |
| 4 | blog | 4 | `_pages/blog.md` |
| 5 | repositories | 5 | `_pages/repositories.md` |
| 6 | teaching | 6 | `_pages/teaching.md` |
| 7 | cv | 7 | `_pages/cv.md` |

To change order, edit `nav_order` in each page's front matter.

To hide from navbar, set `nav: false`.

---

## Images Reference

### Profile & Favicon
| Image | Path | Used In |
|-------|------|---------|
| Profile Photo | `assets/img/prof_pic.png` | about.md |
| Favicon | `assets/img/fire.gif` | _config.yml |

### Project Images
| Image | Path | Project |
|-------|------|---------|
| oncocite_architecture.png | `assets/img/` | OncoCITE |
| blood.png | `assets/img/` | PRIME |
| project_mmap.png | `assets/img/` | MMAP |
| project_rag.png | `assets/img/` | Clinical RAG |
| project_multiomics.png | `assets/img/` | Multi-Omics |
| project_cart.png | `assets/img/` | CAR-T CRS |
| project_voice.png | `assets/img/` | Voice Agent |
| AYA.png | `assets/img/` | AYA |
| project_carcrew.png | `assets/img/` | Carcrew |

### Publication Previews
| Image | Path | Paper |
|-------|------|-------|
| oncocite.png | `assets/img/publication_preview/` | OncoCITE |
| oncodif.png | `assets/img/publication_preview/` | OncoDIF |
| rag.png | `assets/img/publication_preview/` | RAG medRxiv |
| IMS.png | `assets/img/publication_preview/` | P-145 IMS |
| acl.png | `assets/img/publication_preview/` | ACL 2023 |
| prime.png | `assets/img/publication_preview/` | PRIME |
| cart.png | `assets/img/publication_preview/` | CAR-T CRS |
| multiomics.png | `assets/img/publication_preview/` | Multi-Omics |

---

## Publication Links Reference

| Paper | Key | Link |
|-------|-----|------|
| OncoCITE | `quidwai2025oncocite` | Under review (no link) |
| OncoDIF | `quidwai2025oncodif` | https://www.sciencedirect.com/science/article/pii/S0006497125053935 |
| RAG medRxiv | `quidwai2024rag` | https://doi.org/10.1101/2024.03.14.24304293 |
| P-145 IMS | `quidwai2024decision` | IMS 2024 abstract |
| ACL 2023 | `quidwai2023plagiarism` | https://aclanthology.org/2023.bea-1.58/ |
| PRIME | `mouhieddine2025prime` | https://doi.org/10.1182/blood-2025-3996 |
| CAR-T CRS | `rajeeve2024crs` | https://ssrn.com/abstract=5217949 |
| Multi-Omics | `hamidi2025multiomics` | IMS 2025 abstract |

---

## Common Tasks Checklist

### Adding a New Publication
1. Edit `_bibliography/papers.bib`
2. Add BibTeX entry with unique key
3. Add preview image to `assets/img/publication_preview/`
4. Set `selected={true}` if should appear on homepage
5. Commit and push

### Adding a New Project
1. Create file in `_projects/` (e.g., `9_newproject.md`)
2. Add front matter with title, description, img, importance, category
3. Add project image to `assets/img/`
4. Write content in Markdown
5. Commit and push

### Updating the About Page
1. Edit `_pages/about.md`
2. Modify bio content after `---` block
3. Commit and push

### Updating CV
1. Edit `_data/cv.yml`
2. Follow YAML structure (map, time_table, nested_list, list)
3. Commit and push

### Adding News
1. Create file in `_news/` (e.g., `announcement_4.md`)
2. Add front matter with layout, title, date
3. Write announcement content
4. Commit and push

---

## Troubleshooting

### Push fails with HTTP 400
```bash
# Check for large files
find . -type f -size +10M

# Increase buffer if needed
git config http.postBuffer 524288000
```

### Site shows 404
1. Go to repo Settings > Pages
2. Ensure Source = `gh-pages` branch, folder = `/ (root)`
3. Wait 2-3 minutes
4. Check Actions tab for errors

### Images not showing
1. Verify file exists (case-sensitive!)
2. Check path matches exactly
3. Ensure no typos in filename

### Publication not appearing
1. Check BibTeX syntax (matching braces)
2. Verify `preview` image exists
3. Check for YAML/BibTeX errors in build log

### Blog posts not showing
1. Filename must be `YYYY-MM-DD-title.md`
2. Front matter must include `layout: post` and `date`
3. File must be in `_posts/` directory

---

## Local Development

```bash
# Using Docker
cd /Users/ali/Downloads/resume/ali-maq.github.io
docker compose up

# Access at http://localhost:8080
```

---

## Contact

- **Email:** quidwaiali@gmail.com
- **GitHub:** https://github.com/Ali-Maq
- **LinkedIn:** https://linkedin.com/in/mujahid-ali-q
- **Google Scholar:** https://scholar.google.com/citations?user=rAAtZi0AAAAJ
- **Site:** https://ali-maq.github.io
