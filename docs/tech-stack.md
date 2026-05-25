# Tech Stack, Design System & SEO Strategy

## Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| **Next.js 14+** (App Router) | Framework - SSR/SSG for fast load and SEO |
| **TailwindCSS** | Utility-first styling - rapid UI, consistent design system |
| **GSAP** | Advanced animations (hero text reveal, counter animations, page transitions) |
| **AOS / Framer Motion** | Scroll-triggered section animations |
| **Swiper.js** | Project sliders, testimonial carousels |
| **react-compare-slider** | Before/After image comparison |
| **Leaflet.js** | Interactive project location map |
| **CountUp.js** | Animated statistics counters |
| **React Hook Form + Zod** | Form handling and validation |

### Backend

| Technology | Purpose |
|---|---|
| **Laravel 13** | REST API backend - contact forms, tender submissions, blog CMS |
| **MySQL / PostgreSQL** | Database for CMS, projects, tenders, enquiries |
| **Laravel Sanctum** | API authentication for CMS |

### CMS

| Technology | Purpose |
|---|---|
| **Filament Admin** | Admin panel for blog, projects, tenders, gallery management |

### Infrastructure

| Technology | Purpose |
|---|---|
| **Netlify / Vercel** | Next.js frontend hosting (JAMstack deployment) |
| **Cloudinary / Bunny CDN** | Image and video optimisation and delivery |
| **Cloudflare** | DNS, CDN, DDoS protection |
| **GitHub Actions** | CI/CD pipeline |

---

## Design System

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings | **Inter** or **Plus Jakarta Sans** | 700 / 800 |
| Body Text | **Inter** | 400 / 500 |
| Accent / Taglines | Same as headings | 600 Italic (optional) |
| Hindi text | **Noto Sans Devanagari** | 400 / 600 |

**Scale (TailwindCSS):**
- Hero H1: `text-5xl` to `text-7xl` (responsive)
- Section H2: `text-3xl` to `text-4xl`
- Card H3: `text-xl` to `text-2xl`
- Body: `text-base` (16px)
- Small/Meta: `text-sm` (14px)

---

### Color Palette

| Variable | Color | Hex | Usage |
|---|---|---|---|
| `primary` | Deep Blue | `#0B2545` | Headings, navbar, footer |
| `primary-light` | Mid Blue | `#1A3A6B` | Hover states, accents |
| `secondary` | Concrete Gray | `#6B7280` | Body text, meta info |
| `accent` | Earth Green | `#2D6A4F` | CTA buttons, badges, highlights |
| `accent-light` | Light Green | `#52B788` | Hover, icon backgrounds |
| `bg-dark` | Near Black | `#111827` | Dark sections (stats, CTA bands) |
| `bg-light` | Off White | `#F9FAFB` | Light section backgrounds |
| `white` | White | `#FFFFFF` | Cards, text on dark |
| `warning` | Amber | `#F59E0B` | "Ongoing" status badges |
| `success` | Green | `#10B981` | "Completed" status badges |
| `border` | Light Gray | `#E5E7EB` | Card borders, dividers |

---

### Spacing System (TailwindCSS)

Use the default Tailwind spacing scale. Key section spacings:
- Section top/bottom padding: `py-20` (desktop) / `py-12` (mobile)
- Container max-width: `max-w-7xl mx-auto px-4`
- Card internal padding: `p-6` or `p-8`
- Grid gaps: `gap-8` (standard) / `gap-6` (dense)

---

### Component Patterns

#### Buttons

```
Primary:   bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-light
Secondary: border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white
Ghost:     text-accent underline hover:no-underline
```

#### Cards

```
Standard card: bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition
Dark card:     bg-bg-dark text-white rounded-2xl p-6 border border-gray-700
```

#### Section Headings

```html
<div class="text-center mb-12">
  <span class="text-accent font-semibold uppercase tracking-widest text-sm">Label</span>
  <h2 class="text-4xl font-bold text-primary mt-2">Main Heading</h2>
  <p class="text-secondary mt-4 max-w-2xl mx-auto">Supporting description text.</p>
</div>
```

#### Status Badges

```
Completed: bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium
Ongoing:   bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium
```

---

## Animation Guidelines (GSAP + AOS)

| Element | Animation |
|---|---|
| Hero headline | Text reveal (character by character or word by word) |
| Section headings | Fade in + slide up on scroll (AOS: `fade-up`) |
| Cards | Stagger fade in on scroll |
| Statistics counters | Count up from 0 when in viewport |
| Before/after slider | Drag interaction (react-compare-slider) |
| Navigation | Slim top bar + fixed sticky on scroll |
| Page transition | Subtle fade between pages (Framer Motion) |

**Performance rule:** Do not run heavy animations on mobile. Detect `prefers-reduced-motion` and disable non-essential animations.

---

## Image Optimisation Rules

- Always use Next.js `<Image>` component (automatic WebP conversion, lazy loading)
- Specify `width` and `height` on all images to prevent layout shift (CLS)
- Priority load only the hero image (`priority` prop)
- Use `placeholder="blur"` with `blurDataURL` for smoother loading
- Target: all images below 200KB after compression
- Drone/hero videos: max 5MB, autoplay, muted, loop, poster image shown until video loads

---

## SEO Strategy

### On-Page SEO Rules (Every Page)

- Unique `<title>` (max 60 characters)
- Unique meta `description` (max 155 characters)
- One `<h1>` per page
- Heading hierarchy: H1 → H2 → H3 (no skipping)
- Image `alt` text on every image (descriptive, include keyword naturally)
- Canonical URL set
- Open Graph tags for social sharing
- Structured data (Schema.org) - see below

### Schema.org Structured Data

| Page | Schema Type |
|---|---|
| All pages | `Organization` |
| Home | `WebSite`, `LocalBusiness` |
| Projects | `ItemList` + individual `Service` |
| Blog posts | `Article`, `BlogPosting` |
| Contact | `ContactPage`, `PostalAddress` |
| Services | `Service` |

### Target Keyword Categories

#### Primary (Highest Priority)

| Keyword | Monthly Volume (est.) | Target Page |
|---|---|---|
| canal construction contractor UP | Medium | Home, Services |
| nahar lining contractor | Medium | Services/Nahar Lining |
| irrigation contractor MP | Medium | Home, Services |
| canal repair contractor India | Medium | Services |
| rural development contractor UP | Low-Medium | About, CSR |

#### Secondary

| Keyword | Target Page |
|---|---|
| earthwork contractor Chitrakoot | Services |
| government civil contractor UP | About, Certifications |
| checkdam construction contractor India | Services |
| NGO civil works contractor India | CSR & NGO Works |
| PMKSY canal contractor | Blog |
| canal redevelopment Chitrakoot | Projects |
| infrastructure company UP MP | Home, About |

#### Long-Tail Blog SEO

| Keyword | Blog Article |
|---|---|
| cost of canal lining per metre India | Blog article |
| how to bid for government irrigation tender | Blog article |
| Jal Shakti scheme canal contractor | Blog article |
| nahar lining vs earthen canal | Blog article |
| PMGSY road contractor documents required | Blog article |

---

### Local SEO

- Register on Google Business Profile: "Wave Earth Infratech" - Category: Civil Engineering Contractor
- Add office address, phone, website, service areas
- Encourage clients to leave Google reviews (even 5–10 reviews massively helps local ranking)
- Ensure NAP (Name, Address, Phone) is identical on website and Google Business

---

### Technical SEO Checklist

- [ ] `sitemap.xml` generated (Next.js `next-sitemap` package)
- [ ] `robots.txt` configured
- [ ] Google Search Console connected
- [ ] Google Analytics 4 installed
- [ ] Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] HTTPS enforced
- [ ] Canonical URLs set on all pages
- [ ] No broken links (check with Screaming Frog or Ahrefs)
- [ ] Image alt text on all images
- [ ] Structured data validated (Google Rich Results Test)
- [ ] Mobile-friendly test passed (Google)
- [ ] Page speed target: 90+ on PageSpeed Insights (mobile)

---

## Multi-Language (Hindi + English)

**Implementation:** Next.js `i18n` routing (`next-i18next` package)

| Route Pattern | Language |
|---|---|
| `waveearth.com/en/...` | English (default) |
| `waveearth.com/hi/...` | Hindi |

**Priority pages to translate first:**
1. Home
2. Services
3. Contact
4. About

**Note:** Hindi content is especially valuable for:
- Government officers (many prefer Hindi)
- Field-level NGO staff
- UP/MP tender evaluation boards

---

## Performance Budget

| Metric | Target |
|---|---|
| First Contentful Paint | < 1.8s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Page Weight (Home) | < 1.5MB |
| Images per page | Lazy loaded, compressed to WebP |
| Hero video | Deferred on mobile, autoplay on desktop |

---

## Security Checklist

- [ ] All form inputs sanitised and validated server-side (Laravel)
- [ ] File uploads restricted by MIME type + size (PDF only, max 10MB)
- [ ] CSRF protection on all POST forms
- [ ] Rate limiting on contact/tender enquiry endpoints
- [ ] No sensitive data (PAN full, bank) in public-accessible URLs
- [ ] Admin panel (`/admin`) behind authentication (Filament)
- [ ] HTTPS + HSTS headers
- [ ] Content Security Policy headers configured
- [ ] SQL injection protection (Eloquent ORM parameterised queries)
- [ ] Dependency audit: `npm audit` and `composer audit` before deploy
