# Page 06 - Gallery (`pages/gallery.js`)

## Purpose

The Gallery page serves as a visual portfolio of field work. It reinforces the credibility established on the Projects page with raw, real imagery of work in progress. Government evaluators, NGO officers, and contractors want to see actual site conditions and execution quality.

This page also functions as a social proof engine - good site photography communicates professionalism even without words.

---

## Section Breakdown

### Section 1 - Page Hero

**Headline:** `Gallery`
**Subheadline:** `Real Work - Real Sites - Real Impact`
**Breadcrumb:** `Home / Gallery`

---

### Section 2 - Category Filter Bar

Allow visitors to browse by content type:

| Filter | Description |
|---|---|
| All | All media |
| Canal Works | Canal excavation, lining, cleaning photos |
| Earthwork | Excavation, embankment, bulk earthmoving |
| Concrete Works | RCC pours, lining, structures |
| Road Works | Village roads, drains, culverts |
| Water Structures | Checkdams, farm ponds, tanks |
| Site Progress | Before, during, after comparison shots |
| Team & Workforce | Workers, supervisors, site teams |
| Machinery | Equipment in action |
| Drone / Aerial | Overhead and drone shots |

---

### Section 3 - Media Grid

**Layout:** Masonry grid or uniform grid with lightbox.

**Lightbox behaviour:**
- Click any image → opens full-size in overlay
- Arrow navigation between images
- Caption shown: project name + location + date (if available)

**Video thumbnails:**
- Drone footage videos displayed with play-button overlay
- Opens inline video player on click
- YouTube/Vimeo embed also acceptable

---

## Media Organisation Guidelines

Organise all media into the following folder structure:

```
/public/images/gallery/
  canal-works/
  earthwork/
  concrete-works/
  road-works/
  water-structures/
  site-progress/
  team/
  machinery/
  aerial-drone/
```

---

## Photo Quality Standards

- Minimum resolution: 1200px wide
- Preferred: 2000px+ wide for desktop crisp display
- Format: JPEG (optimised for web, max 300KB per image after compression)
- Use Next.js `<Image>` component with `layout="responsive"` for automatic optimisation
- No watermarks, filters, or stock photo branding

---

## Before / After Comparison Slider

Include a dedicated subsection or standalone section:

**Heading:** `Before & After`

Show 3-5 key project transformations using a side-by-side comparison slider (e.g., `react-compare-slider`).

Examples:
- Silted canal vs. cleaned and lined canal
- Open waste land vs. completed checkdam
- Broken village road vs. completed CC road

---

## Video Section

**Heading:** `Project Videos`

**Layout:** Video grid (3 per row, desktop).

Each video card shows:
- Thumbnail
- Project name
- Duration badge
- Play button

**Recommended video types to collect and upload:**
- Excavation work timelapse
- Canal water flow after restoration
- Concrete lining pour
- Drone flyover of completed canal
- Site progress montage
- Workforce and machinery in action

**Hosting:** YouTube (unlisted is fine) → embed on site. Avoids large file hosting cost.

---

## Photo Naming Convention

For SEO and management, name all photos descriptively:

```
canal-lining-chitrakoot-2024-01.jpg
earthwork-excavation-site-mp-2023-06.jpg
jcb-canal-cleaning-up-2024-03.jpg
```

---

## SEO Metadata

```
Title:    Gallery | Canal Construction & Irrigation Works Photos - Wave Earth Infratech
Description: Browse real project photos and videos from Wave Earth Infratech's canal
             construction, irrigation works, earthwork, and rural infrastructure projects
             across Uttar Pradesh and Madhya Pradesh.
Keywords: canal construction photos India, irrigation project images UP, civil contractor
          gallery, infrastructure company project photos, nahar lining work images
```

---

## Content Checklist

- [ ] Minimum 30 real site photos collected
- [ ] Photos organised into category folders
- [ ] Before/after pairs identified for comparison slider
- [ ] Videos recorded or existing footage identified
- [ ] Videos uploaded to YouTube (even unlisted)
- [ ] Photo captions prepared (project name + location)
- [ ] Images compressed for web (<300KB each)
- [ ] No stock or placeholder images used
