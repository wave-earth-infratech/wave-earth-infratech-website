# Wave Earth Infratech - Website Redesign Documentation

This folder contains per-page design and content specifications for the complete redesign of the Wave Earth Infratech website.

The goal is to transform the current generic template into a professional EPC/infrastructure company website that builds trust with government departments, NGOs, irrigation boards, and large contractors.

## Target Audience

- Government tender evaluation officers
- Irrigation & PWD departments (UP/MP)
- NGO project coordinators
- Large main contractors seeking sub-contractors
- CSR partners

## Design Philosophy

The website must feel **Technical, Reliable, Strong, Ground-level, and Execution-focused**.
It should NOT look like a real estate or luxury home builder site.

## Recommended Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | Next.js + TailwindCSS   |
| Animation | GSAP                    |
| Backend   | Laravel 13              |
| CMS       | Filament Admin          |

## Recommended Color Palette

| Role            | Color              |
|-----------------|--------------------|
| Primary         | Deep Blue `#0B2545` |
| Secondary       | Concrete Gray `#6B7280` |
| Accent          | Earth Green `#2D6A4F` |
| Background      | White `#FFFFFF`    |
| Dark sections   | `#111827`          |

## Website Page Structure

| #  | Page File (Next.js route) | Doc File |
|----|---------------------------|----------|
| 1  | `pages/index.js`          | [01-home.md](pages/01-home.md) |
| 2  | `pages/about-us.js`       | [02-about-us.md](pages/02-about-us.md) |
| 3  | `pages/services.js`       | [03-services.md](pages/03-services.md) |
| 4  | `pages/projects.js`       | [04-projects.md](pages/04-projects.md) |
| 5  | `pages/equipment.js`      | [05-equipment.md](pages/05-equipment.md) |
| 6  | `pages/gallery.js`        | [06-gallery.md](pages/06-gallery.md) |
| 7  | `pages/tenders.js`        | [07-tenders.md](pages/07-tenders.md) |
| 8  | `pages/certifications.js` | [08-certifications.md](pages/08-certifications.md) |
| 9  | `pages/csr-ngo-works.js`  | [09-csr-ngo-works.md](pages/09-csr-ngo-works.md) |
| 10 | `pages/blog.js`           | [10-blogs-updates.md](pages/10-blogs-updates.md) |
| 11 | `pages/contact-us.js`     | [11-contact.md](pages/11-contact.md) |

## Additional Reference Docs

- [tech-stack.md](tech-stack.md) - Full tech stack, SEO strategy, and organic lead generation
- [design-system.md](design-system.md) - Typography, spacing, component guidelines

## Competitors to Study

- [ASC Infratech](https://www.ascinfraco.com)
- [Wave Infratech Group](https://www.waveinfratechgroup.com)

## Critical Reminders

- Use **real project photos/videos only** - never random stock images
- All pages must be **mobile-first** - government field officers use mobile on slow internet
- Add **WhatsApp click button** and **direct call button** on every page
- Support **Hindi + English** (multi-language)
- Every project page must be indexable for SEO tender-related keywords
