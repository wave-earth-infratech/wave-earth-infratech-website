# Page 01 - Home (`pages/index.js`)

## Purpose

The homepage is the first impression for government officers, tender evaluators, NGO coordinators, and contractors. It must immediately communicate:

- What exact work Wave Earth Infratech does
- Scale and credibility of completed projects
- Machinery/team capability
- Government/NGO experience

Within the first 5 seconds a visitor must know: **"This is a serious infrastructure company."**

---

## Section Breakdown

### Section 1 - Hero (Full Screen)

**Layout:** Full-viewport, video or image background with dark overlay.

**Background media priority:**
1. Drone footage of active canal/irrigation site (autoplay, muted, loop)
2. Timelapse of excavation or concrete works
3. High-quality photo of canal restoration if no video available

**Headline (large, bold):**
```
Building Sustainable Infrastructure for Rural India
```

**Subheadline:**
```
Canal Development • Irrigation Works • Redevelopment Projects • Government & NGO Contracts
```

**CTA Buttons:**
| Button | Action |
|---|---|
| View Projects | Scrolls to Projects section or links to `/projects` |
| Request Quotation | Opens contact form or links to `/contact-us` |
| Download Company Profile | Downloads PDF company profile |

**Floating elements:**
- WhatsApp icon (bottom-right, fixed)
- Direct Call icon (bottom-right, above WhatsApp, fixed)

**Animation:** Text fades in on load (GSAP or AOS). Buttons slide up.

---

### Section 2 - Live Impact Statistics (Counter Section)

Background: Dark (`#111827`) or deep blue.

**Counters to display:**

| Stat | Example Value | Unit |
|---|---|---|
| Canal Redeveloped | 120+ | KM |
| Villages Impacted | 80+ | Villages |
| Projects Completed | 45+ | Projects |
| Water Capacity Improved | 30% | Average |
| Workforce Strength | 200+ | Skilled Workers |

**Note:** Replace example values with real figures. Even conservative real numbers are better than inflated ones - government evaluators verify these.

**Implementation:** Use `CountUp.js` or equivalent. Numbers animate when section enters viewport.

---

### Section 3 - Services Overview

**Heading:** `What We Build`

**Layout:** Grid of 3 columns (desktop), 2 columns (tablet), 1 column (mobile).

**Services to display (with icon and 1-line description):**

| Service | Icon Suggestion | 1-line Description |
|---|---|---|
| Canal Construction & Repair | Water channel icon | New canal construction and lining works for irrigation systems |
| Nahar Lining Works | Layer/coating icon | Cement and concrete lining to prevent water seepage |
| Irrigation Infrastructure | Irrigation pipe icon | End-to-end irrigation network for agricultural zones |
| Rural Redevelopment | Village/building icon | Infrastructure uplift for rural and semi-urban areas |
| Water Resource Projects | Dam/reservoir icon | Storage tanks, checkdams, and water distribution works |
| Earthwork & Excavation | Excavator icon | Large-scale earthmoving, grading, and site preparation |
| Concrete Structures | Pillar icon | RCC works, retaining walls, slabs, and structural concrete |
| Road & Drainage Works | Road icon | Village access roads, drains, culverts, and causeways |
| NGO Development Projects | Handshake icon | Field execution for development sector & CSR projects |
| Civil Maintenance Contracts | Wrench icon | Long-term O&M contracts for government assets |

**CTA at end of section:** `View All Services →` links to `/services`

---

### Section 4 - Featured Projects

**Heading:** `Recent Projects`
**Subheading:** `Executed across Chitrakoot, UP, and MP`

**Layout:** Horizontal scroll cards or a 3-column grid showing 3-4 featured projects.

**Each project card shows:**
- Cover photo (before/after or drone shot)
- Project name
- Location
- Client (e.g., "Irrigation Department, UP")
- Work type tag (Canal / Road / Earthwork etc.)

**CTA:** `View All Projects →` links to `/projects`

---

### Section 5 - Why Choose Us

**Heading:** `Why Government Departments Trust Us`

**Layout:** 6-card icon grid.

| Card Title | Description |
|---|---|
| Government Project Expertise | Years of executing department-funded works across UP and MP |
| Experienced Rural Infrastructure Team | Trained workforce with deep field knowledge |
| On-Time Execution | Consistent track record of meeting project deadlines |
| Modern Equipment | Own fleet: JCBs, Excavators, Mixers, Trucks |
| Transparent Reporting | Progress reports, billing, and documentation on schedule |
| Sustainable Development Approach | Focus on water conservation and long-term rural impact |

---

### Section 6 - Certifications Strip

**Heading:** `Registered & Compliant`

**Layout:** Horizontal logo/badge strip.

Show:
- MSME Registration badge
- GST Registration badge
- PAN badge
- Contractor License badge
- ISO badge (if applicable)
- Safety Compliance badge

**CTA:** `View All Certifications →` links to `/certifications`

---

### Section 7 - Testimonials / Client References

**Heading:** `What Our Clients Say`

If actual testimonials are not yet available, this section can be replaced temporarily with:

**Client Logos Strip** showing logos of:
- Government departments worked with
- NGOs partnered with
- Main contractors sub-contracted to

**Note:** Always use real references. Fabricated testimonials damage government credibility.

---

### Section 8 - Location Presence

**Heading:** `Our Work Across India`

**Layout:** Embedded map (Google Maps iframe or Leaflet.js) showing pin markers for each project location.

Locations to mark:
- Chitrakoot, UP
- Any MP project sites
- Head office location

**Subtext under map:**
```
Actively executing projects in Uttar Pradesh and Madhya Pradesh with the capacity to mobilise across Central India.
```

---

### Section 9 - CTA Band

**Background:** Deep blue or earth green full-width band.

**Text:**
```
Looking for a reliable infrastructure contractor?
Let's discuss your project requirements.
```

**Buttons:**
- `Request Quotation`
- `Download Company Profile`

---

### Section 10 - Footer

See [11-contact.md](11-contact.md) for footer spec. The footer appears on all pages.

---

## SEO Metadata (for `<Head>`)

```
Title:    Wave Earth Infratech | Canal & Irrigation Infrastructure Contractor - UP, MP
Description: Wave Earth Infratech executes canal construction, nahar lining, irrigation works,
             and rural redevelopment projects for government departments and NGOs across
             Uttar Pradesh and Madhya Pradesh.
Keywords: canal construction contractor UP, irrigation contractor MP, nahar lining contractor,
          rural infrastructure company India, government civil contractor Chitrakoot
```

---

## Mobile Requirements

- Hero video replaced with static image on mobile (performance)
- Fixed WhatsApp + Call buttons always visible
- Counter section stacks to 2x3 grid
- Services grid collapses to single column
- Project cards become vertical scroll
- All CTAs finger-tap sized (minimum 44px height)
- Page must load under 3 seconds on 4G

---

## Content Checklist

- [ ] Hero drone video / site photo
- [ ] Real counter/statistic values confirmed
- [ ] 3-4 featured project photos
- [ ] Services icons sourced
- [ ] Certification badge images
- [ ] Map embed with real office + project pins
- [ ] Company profile PDF ready for download link
- [ ] WhatsApp number configured in floating button
- [ ] Direct call number configured in floating button
