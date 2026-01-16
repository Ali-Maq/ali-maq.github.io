# Deployment & Maintenance Guide

**Site:** https://ali-maq.github.io
**Theme:** al-folio (Jekyll)
**Owner:** Mujahid Ali Quidwai (Ali)

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

## Project Structure

```
ali-maq.github.io/
├── _config.yml              # Site configuration (name, social links, etc.)
├── _data/
│   ├── cv.yml               # CV content (experience, skills, education)
│   ├── socials.yml          # Social media links (GitHub, LinkedIn, Scholar)
│   ├── repositories.yml     # GitHub repos to display
│   └── coauthors.yml        # Co-author links for publications
├── _bibliography/
│   └── papers.bib           # Publications (BibTeX format)
├── _pages/
│   ├── about.md             # Homepage/landing page
│   ├── cv.md                # CV page settings
│   ├── projects.md          # Projects listing page
│   ├── publications.md      # Publications page
│   ├── teaching.md          # Teaching & mentorship
│   ├── repositories.md      # GitHub repos page
│   └── blog.md              # Blog listing
├── _projects/               # Individual project pages
│   ├── 1_oncocite.md
│   ├── 1b_prime.md
│   ├── 2_mmap.md
│   └── ...
├── _news/                   # News announcements
│   ├── announcement_1.md
│   └── ...
├── _posts/                  # Blog posts (empty for now)
├── assets/
│   ├── img/                 # All images
│   │   ├── prof_pic.png     # Profile photo
│   │   ├── fire.gif         # Favicon
│   │   └── publication_preview/  # Publication thumbnails
│   └── pdf/                 # PDF files (CV, papers)
└── .github/workflows/       # GitHub Actions
    ├── deploy.yml           # Main deploy workflow
    └── daily-rebuild.yml    # Daily rebuild (for future Substack)
```

---

## Common Tasks

### Update About/Bio

Edit: `_pages/about.md`

The bio content starts after the `---` front matter block.

### Add/Edit Publications

Edit: `_bibliography/papers.bib`

**BibTeX template:**
```bibtex
@article{key2025title,
  abbr={VENUE},
  bibtex_show={true},
  title={Full Paper Title},
  author={LastName, FirstName and LastName2, FirstName2},
  abstract={Abstract text here.},
  journal={Journal Name},
  volume={146},
  pages={1234},
  year={2025},
  doi={10.1234/doi-here},
  html={https://link-to-paper},
  note={Additional notes},
  selected={true},           # Shows on homepage
  preview={filename.png}     # Image in assets/img/publication_preview/
}
```

**Important fields:**
- `selected={true}` — appears on homepage "Selected Publications"
- `preview={image.png}` — thumbnail (must exist in `assets/img/publication_preview/`)
- `html={url}` — clickable link to paper
- `doi={...}` — DOI link

### Add/Edit Projects

Create/edit files in `_projects/` folder.

**Template:**
```markdown
---
layout: page
title: Project Name
description: Short description for cards
img: assets/img/project_image.png
importance: 1              # Lower = higher priority
category: research         # research, engineering, or startup
related_publications: true # Set false if not first-author
---

Project content in markdown here...
```

**Categories:** `research`, `engineering`, `startup`

### Add News Announcement

Create file in `_news/` folder: `announcement_X.md`

```markdown
---
layout: post
title: Your announcement title
date: 2025-01-15
inline: true
related_posts: false
---

Your announcement text here.
```

### Update CV

Edit: `_data/cv.yml`

Sections use these types:
- `type: map` — key-value pairs
- `type: time_table` — timeline entries (jobs, education)
- `type: nested_list` — skills with sub-items
- `type: list` — simple list

### Change Profile Photo

Replace: `assets/img/prof_pic.png`

Referenced in `_pages/about.md` under `profile: image:`

### Change Favicon

Replace: `assets/img/fire.gif`

Set in `_config.yml` under `icon:`

### Update Social Links

Edit: `_data/socials.yml`

```yaml
scholar_userid: rAAtZi0AAAAJ
github_username: Ali-Maq
linkedin_username: mujahid-ali-q
email: quidwaiali@gmail.com
rss_icon: false  # Enable when blog posts exist
```

### Add GitHub Repositories

Edit: `_data/repositories.yml`

```yaml
github_users:
  - Ali-Maq

github_repos:
  - Ali-Maq/repo-name
  - Ali-Maq/another-repo
```

---

## Navigation Order

Controlled by `nav_order` in each page's front matter:

| Page | nav_order | File |
|------|-----------|------|
| about | (home) | `_pages/about.md` |
| projects | 2 | `_pages/projects.md` |
| publications | 3 | `_pages/publications.md` |
| blog | 4 | `_pages/blog.md` |
| repositories | 5 | `_pages/repositories.md` |
| teaching | 6 | `_pages/teaching.md` |
| cv | 7 | `_pages/cv.md` |

---

## Images

**Project images:** `assets/img/`
- Format: `project_name.png` or descriptive name
- Referenced in project markdown: `img: assets/img/filename.png`

**Publication previews:** `assets/img/publication_preview/`
- Must match `preview={filename.png}` in papers.bib
- Recommended size: 300-500px wide

**Current publication images:**
- `oncocite.png`, `oncodif.png`, `rag.png`, `acl.png`
- `cart.png`, `prime.png`, `IMS.png`, `multiomics.png`

---

## Publication Links

| Paper | Type | Link |
|-------|------|------|
| OncoCITE | Under review | No link yet |
| OncoDIF | ASH 2025 | https://www.sciencedirect.com/science/article/pii/S0006497125053935 |
| RAG | medRxiv | https://doi.org/10.1101/2024.03.14.24304293 |
| ACL | ACL 2023 | https://aclanthology.org/2023.bea-1.58/ |
| PRIME | ASH 2025 | https://doi.org/10.1182/blood-2025-3996 |
| CAR-T CRS | Preprint | https://ssrn.com/abstract=5217949 |

---

## Local Development

```bash
# Using Docker (recommended)
docker compose up

# Access at http://localhost:8080
```

---

## Troubleshooting

### Push fails with HTTP 400
Large files. Check for videos or files >50MB:
```bash
find . -type f -size +10M
```
Remove and retry.

### Site shows 404
1. Check GitHub Pages settings: Settings > Pages > Source = `gh-pages` branch
2. Wait 2-3 minutes for deploy
3. Check Actions tab for build errors

### Images not showing
1. Verify file exists in `assets/img/`
2. Check case sensitivity (Linux is case-sensitive)
3. Ensure path in markdown matches exactly

### Publication not appearing
1. Check BibTeX syntax in `papers.bib`
2. Ensure closing braces `}` are correct
3. Preview image must exist if `preview={}` is set

---

## Key Files Summary

| What | Where |
|------|-------|
| Site config | `_config.yml` |
| Bio/About | `_pages/about.md` |
| Publications | `_bibliography/papers.bib` |
| CV content | `_data/cv.yml` |
| Social links | `_data/socials.yml` |
| Projects | `_projects/*.md` |
| News | `_news/*.md` |
| Images | `assets/img/` |
| PDF files | `assets/pdf/` |

---

## Contact

- **Email:** quidwaiali@gmail.com
- **GitHub:** https://github.com/Ali-Maq
- **LinkedIn:** https://linkedin.com/in/mujahid-ali-q
- **Site:** https://ali-maq.github.io
