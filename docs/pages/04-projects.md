# Page 04 - Projects (`pages/projects.js`)

## Purpose

This is the most important page on the entire website. Government tender evaluation officers, NGO procurement teams, and contractors judge capability almost entirely from this page. Every project listed here must be:

- Real
- Documented with photos, scope, client, and value where possible
- Presented in a professional, structured format

Even small projects documented professionally are more valuable than an empty or vague projects page.

---

## Section Breakdown

### Section 1 - Page Hero

**Headline:** `Our Projects`
**Subheadline:** `Completed & Ongoing Infrastructure Works - Canal, Irrigation, Earthwork & Redevelopment`
**Breadcrumb:** `Home / Projects`

---

### Section 2 - Project Filters Bar

Allow visitors to filter projects by category. Filters:

| Filter | Label |
|---|---|
| All | All Projects |
| canal | Canal & Irrigation |
| earthwork | Earthwork & Excavation |
| road | Road & Drainage |
| concrete | Concrete Structures |
| rural | Rural Redevelopment |
| water | Water Resource |
| ngo | NGO Works |
| maintenance | Maintenance Contracts |

**Also add Status filter:**
- All
- Completed
- Ongoing

---

### Section 3 - Projects Grid

**Layout:** 3-column grid (desktop), 2-column (tablet), 1-column (mobile).

**Each project card must show:**
- Cover photo (drone or site photo - real, not stock)
- Status badge: `Completed` (green) / `Ongoing` (amber)
- Project name (bold)
- Location (icon + text)
- Work type tag/pill
- Client name (if permitted)
- Brief scope (1 line)
- `View Details →` link

---

### Section 4 - Individual Project Detail Page

**Route:** `/projects/[project-slug]`

Each project gets a dedicated detail page with the following structure:

---

#### Project Detail Page Structure

**Hero:**
- Full-width photo or drone video of project site
- Project name as overlay heading
- Status badge

**Project Overview Table:**

| Field | Value |
|---|---|
| Project Name | [Name] |
| Location | [District, State] |
| Client / Department | [e.g., Irrigation Department, UP] |
| Contract Value | ₹ [amount] (optional - include if public info) |
| Work Type | [e.g., Canal Lining, Earthwork] |
| Duration | [Start Month/Year – End Month/Year] |
| Current Status | Completed / Ongoing |
| Scheme / Programme | [e.g., PMKSY, Jal Shakti, own funds] |

**Scope of Work (bullet points):**
Describe exactly what was done. Be specific:
- Total length of canal lined
- Volume of earthwork in cum
- Area of road in sqm
- etc.

**Photo Gallery:**
- Before / During / After photos
- Drone footage embed (YouTube or direct video)
- Minimum 4 photos per project

**Before / After Comparison Slider:**
If before and after photos are available, use a comparison slider (e.g., `react-compare-slider`).

**Machinery Deployed:**
List equipment used on this specific project.

**Challenges & Solutions (optional but powerful):**
1–2 sentences about any notable challenge overcome - floods, remote access, tight timeline - and how it was handled. This section builds enormous credibility with experienced evaluators.

**Related Projects:**
Show 2–3 similar projects at the bottom.

---

## Example Projects to Document

Use this as a template. Replace with real project data.

---

### Example Project 1

| Field | Value |
|---|---|
| Project Name | Canal Redevelopment & Lining – Chitrakoot Section |
| Location | Chitrakoot, Uttar Pradesh |
| Client | Irrigation Department, UP |
| Work Type | Canal Lining (CC M20) |
| Scope | 4.2 km canal lining, bank reinforcement, silt removal |
| Duration | [Month Year] – [Month Year] |
| Status | Completed |

---

### Example Project 2

| Field | Value |
|---|---|
| Project Name | Farm Pond Construction – [Village Name] |
| Location | [District], MP |
| Client | MNREGS / Agriculture Department |
| Work Type | Water Resource / Earthwork |
| Scope | Construction of 12 farm ponds, total capacity [X] lakh litres |
| Duration | [Month Year] – [Month Year] |
| Status | Completed |

---

### Example Project 3

| Field | Value |
|---|---|
| Project Name | Village Internal Road – [Gram Panchayat] |
| Location | [District], UP |
| Client | Gram Panchayat / PMGSY |
| Work Type | Rural Road (CC Road) |
| Scope | 1.8 km CC road, storm water drains |
| Duration | [Month Year] – [Month Year] |
| Status | Completed |

---

## Media Guidelines

- Only use real project photos - this is critical for government credibility
- Photos should show: site activity, machinery, material, progress, handover
- Drone videos of completed works are highly recommended
- Add date metadata to photos where possible
- Organise photos by project in `/public/images/project/[project-slug]/`

---

## Project Impact Summary (bottom of page)

Show aggregate statistics from listed projects:

| Stat | Value |
|---|---|
| Total Canal Length Executed | [X] km |
| Total Projects Listed | [X] |
| States Covered | UP, MP |
| Sectors | Irrigation, Rural, Road, Water |

---

## SEO Metadata

```
Title:    Projects | Canal & Irrigation Infrastructure Works – Wave Earth Infratech
Description: Explore completed and ongoing infrastructure projects by Wave Earth Infratech
             including canal construction, nahar lining, irrigation works, earthwork, and
             rural development projects across Uttar Pradesh and Madhya Pradesh.
Keywords: canal construction projects UP, irrigation projects MP, nahar lining project,
          completed infrastructure projects India, canal redevelopment Chitrakoot
```

---

## Content Checklist

- [ ] All real projects listed (even 5–6 is a strong start)
- [ ] Each project has at least 2 real photos
- [ ] Project name, location, client, scope confirmed
- [ ] Before/after images collected where available
- [ ] Drone footage or video identified for key projects
- [ ] Contract values confirmed (or left blank if sensitive)
- [ ] Project slugs defined for URL structure
- [ ] Filter categories assigned to each project
- [ ] Related projects linked on each detail page
