# Page 10 - Blog & Updates (`pages/blog.js`)

## Purpose

The Blog/Updates page serves two functions:

1. **SEO organic lead generation** - Blog articles on topics like "canal construction process," "nahar lining cost India," "Jal Shakti scheme contractor" can rank on Google and bring in government officers, NGO procurement teams, and contractors actively searching for those terms.

2. **Credibility signalling** - Companies that publish technical content signal expertise. Government evaluators who find 10 relevant articles on your site will trust you more than one with an empty or generic site.

Publishing even 1–2 articles per month consistently will compound over time.

---

## Section Breakdown

### Section 1 - Page Hero

**Headline:** `Insights & Updates`
**Subheadline:** `Technical Articles, Project Updates & Infrastructure News`
**Breadcrumb:** `Home / Blog`

---

### Section 2 - Category Filter Bar

| Category | Description |
|---|---|
| All | All posts |
| Technical Articles | How-to, process, specification articles |
| Project Updates | Progress updates on ongoing projects |
| Industry News | Government scheme news, infrastructure policy |
| Case Studies | Detailed project case studies |
| Company News | Awards, milestones, team updates |

---

### Section 3 - Featured Post (Latest)

Highlight the most recent post as a large card at top:
- Full-width cover image
- Category badge
- Title
- 2-line excerpt
- Author + date
- `Read More →`

---

### Section 4 - Blog Grid

**Layout:** 3-column grid (desktop), 2 (tablet), 1 (mobile).

**Each blog card:**
- Cover image
- Category badge
- Title
- 2-line excerpt
- Author + publish date
- `Read More →`

**Pagination:** 9 posts per page with numbered pagination.

---

### Individual Blog Post Page

**Route:** `/blog/[slug]`

**Structure:**
- Hero image (full width)
- Title (large)
- Meta: Author | Date | Category | Estimated read time
- Table of Contents (for long articles)
- Body content (markdown/rich text from CMS)
- Related posts (3 at bottom)
- CTA: "Need a contractor for your project? Contact us →"
- Share buttons: WhatsApp, Twitter/X, LinkedIn, Copy Link

---

## Recommended Blog Article Topics

These are SEO-targeted topics relevant to Wave Earth Infratech's services and target client base:

### Canal & Irrigation

| Article Title | Target Keyword |
|---|---|
| What is Canal Lining and Why is It Important? | canal lining India |
| Step-by-Step Canal Construction Process in India | canal construction process India |
| Cost of Nahar Lining Work Per Metre in India | nahar lining cost India |
| How Silt Removal Improves Canal Water Delivery | canal desilting India |
| PMKSY Canal Projects: How Contractors Are Selected | PMKSY canal contractor |
| Jal Shakti Abhiyan: Infrastructure Works Explained | Jal Shakti canal work |

### Rural Development & Government Schemes

| Article Title | Target Keyword |
|---|---|
| PMGSY Road Construction: What Contractors Need to Know | PMGSY contractor India |
| How to Apply for Government Civil Contracts in UP | government civil tender UP |
| MGNREGS Infrastructure Works: A Contractor's Guide | MGNREGS civil works |
| What Documents Are Required for a Civil Tender in UP/MP | civil tender documents India |

### Technical How-To

| Article Title | Target Keyword |
|---|---|
| How to Build a Checkdam: Types and Process | checkdam construction India |
| RCC Canal Lining vs. HDPE Membrane: Which is Better? | RCC vs HDPE canal lining |
| Earthwork Measurement in Government Projects | earthwork measurement BIS |
| Concrete Mix Design for Canal Lining Works | canal lining concrete mix |
| How to Calculate Cost of Canal Excavation | canal excavation cost calculator |

### Case Studies (Most Impactful)

| Article Title | Description |
|---|---|
| Case Study: Canal Redevelopment in Chitrakoot | Detailed before/after of a completed project |
| How We Restored Water Flow to [X] Villages | Farm pond / canal restoration impact story |
| Executing a Rural Road Under PMGSY: Our Experience | Real project process walkthrough |

---

## Blogging Guidelines

- Write in simple, clear English (and optionally Hindi)
- Include real photos from projects where possible
- Minimum 600 words per article (800–1200 is ideal for SEO)
- Use numbered headings, bullet points - easy to scan
- Include one CTA at the end of every article
- Avoid copied content - all articles must be original
- Use exact technical terms used in government BOQs and specifications

---

## CMS Setup (Filament Admin)

The blog must be managed through the Filament admin panel:

**Post model fields:**
- Title
- Slug (auto-generated)
- Category
- Cover image
- Excerpt (max 160 characters)
- Body (rich text / markdown)
- Author
- Published date
- Status (Draft / Published / Scheduled)
- SEO title (override)
- SEO description
- Tags

---

## SEO Metadata (Blog Index)

```
Title:    Blog & Updates | Canal Construction, Irrigation & Infrastructure – Wave Earth Infratech
Description: Technical articles, project case studies, and infrastructure industry updates
             from Wave Earth Infratech - specialists in canal construction, nahar lining,
             and rural infrastructure across UP and MP.
Keywords: canal construction blog India, irrigation works articles, infrastructure contractor
          insights, government civil works guide, nahar lining technical articles
```

---

## Content Checklist

- [ ] CMS blog module set up in Filament
- [ ] Minimum 5 articles published at launch
- [ ] Article topics list prioritised (start with high-search, low-competition)
- [ ] Blog article template designed
- [ ] Cover images sourced for first articles (real project photos)
- [ ] Author bio created
- [ ] Category taxonomy finalised
- [ ] Internal linking strategy: blog → services, blog → projects, blog → contact
- [ ] Google Search Console connected for blog page indexing
