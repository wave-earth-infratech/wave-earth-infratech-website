# Migration & Build Plan

> Status: PLANNING - Read this before making any code changes.

---

## Current State Audit

### Framework & Core

| Item | Current | Target | Action |
|---|---|---|---|
| Next.js | 12.0.7 | 14.x (latest stable) | Upgrade |
| React | 17.0.2 | 18.x | Upgrade |
| Node target | `next export` (static only) | Pages Router + SSG/ISR | Change |
| TypeScript | No | No (keep JS, not a blocker) | Skip |

### Styling

| Item | Current | Target | Action |
|---|---|---|---|
| CSS Framework | Bootstrap 5 (vendor CSS import) | TailwindCSS 3 | Replace |
| Custom SCSS | `styles/scss/` (large legacy system) | Tailwind utility classes | Phase out |
| Plugin CSS | AOS, Swiper, FontAwesome, Unicons, metismenu, hover-revel, timepickers | Subset kept (FontAwesome, Swiper, AOS) | Clean up |
| Class naming | Bootstrap grid `col-lg-*`, `row`, etc. | Tailwind flex/grid | Refactor per component |

### JavaScript / Animations

| Item | Current | Target | Action |
|---|---|---|---|
| jQuery | Loaded via `/public/js/plugins/jquery.min.js` through `Js.js` | **Remove** | Replace with React equivalents |
| AOS | Loaded via jQuery | `aos` npm package (React-compatible) | Replace |
| Swiper | jQuery plugin | `swiper` npm package (already have CSS) | Replace |
| SAL.js | `/public/js/vendor/sal.min.js` | Remove (use AOS or Framer Motion) | Replace |
| CountUp | None | `react-countup` npm | Add |
| GSAP | None | `gsap` npm (hero animation, page transitions) | Add |
| Before/After slider | None | `react-compare-slider` npm | Add |
| Map | None | `leaflet` + `react-leaflet` npm | Add |
| metismenu / slideNav | jQuery menu plugins | Pure CSS/React mobile menu | Replace |

### Forms

| Item | Current | Target | Action |
|---|---|---|---|
| Contact form | `formspree.js` script | `react-hook-form` + `zod` + Next.js API route | Replace |
| Form validation | None | Zod schema validation | Add |
| Submission handler | Formspree (external) | `/pages/api/contact.js` (Next.js API route) + Nodemailer or Resend | Replace |

### Logo & Favicon

| Item | Current | Status |
|---|---|---|
| Logo (light/transparent) | `/images/logo/01.png` (template placeholder) | **Replace** with `/images/logo.png` (new) |
| Logo (dark/inverted) | `/images/logo/02.png` (template placeholder) | **Replace** with `/images/logo.png` or variant |
| Favicon | `/images/fav.png` (template) | **Replace** with `/images/fevicon.png` (new) |

### Pages - Current vs Needed

| Page | Current File | Status |
|---|---|---|
| Home | `pages/index.js` | Exists - full rebuild needed |
| About Us | `pages/about-wave-earth.js` | Exists - rename + rebuild |
| Contact | `pages/contact-us.js` | Exists - rebuild |
| Projects | `pages/our-projects.js` | Exists - rename + rebuild |
| Services | - | **Missing - create** |
| Equipment | - | **Missing - create** |
| Gallery | - | **Missing - create** |
| Tenders | - | **Missing - create** |
| Certifications | - | **Missing - create** |
| CSR & NGO Works | - | **Missing - create** |
| Blog (index) | - | **Missing - create** |
| Blog (detail) | - | **Missing - create** |
| 404 | `pages/404.js` | Exists - minor update |
| Privacy Policy | `pages/privacy-policy.js` | Exists - keep |
| Terms | `pages/terms-and-conditions.js` | Exists - keep |

### Components - Current vs Needed

| Component | Current | Action |
|---|---|---|
| `Header.js` | Template nav, hardcoded absolute URLs | Full rebuild |
| `Footer.js` | Template content, generic links | Full rebuild |
| `Meta.js` | Basic head tags, old favicon path | Update favicon path |
| `Sidebar.js` | jQuery mobile menu sidebar | Full rebuild (pure CSS/React) |
| `Js.js` | Loads all jQuery plugins via `<Script>` | Remove or gut entirely |

### What We Have That Is Useful

| Asset | Path | Keep? |
|---|---|---|
| New logo | `/public/images/logo.png` | Yes |
| New favicon | `/public/images/fevicon.png` | Yes |
| AOS CSS | `/styles/css/plugins/aos.css` | Yes (use npm version instead) |
| Swiper CSS | `/styles/css/plugins/swiper.css` | Yes (use npm version instead) |
| FontAwesome CSS | `/styles/css/plugins/fontawesome-5.css` | Yes (or switch to Heroicons) |
| `jsconfig.json` | `@components/*` and `@styles/*` aliases | Yes - keep |
| `netlify.toml` | Netlify deploy config | Yes - update for Next.js 14 |

---

## Migration Phases

### Phase 0 - Dependency Upgrade (Foundation)
*Do this first. Everything else depends on this.*

**Changes:**
1. Upgrade `next` from `^12.0.7` → `^14.2.x`
2. Upgrade `react` + `react-dom` from `^17` → `^18`
3. Add TailwindCSS: `tailwindcss`, `postcss`, `autoprefixer`
4. Add animation: `gsap`, `aos`
5. Add UI: `swiper`, `react-compare-slider`, `react-countup`
6. Add maps: `leaflet`, `react-leaflet`
7. Add forms: `react-hook-form`, `zod`
8. Add email: `nodemailer` or `resend` (for API route form handler)
9. Add SEO: `next-sitemap`
10. Update `next.config.js` - remove `trailingSlash`, add image domains, remove static export
11. Update `netlify.toml` for Next.js 14 runtime
12. Remove `@netlify/plugin-nextjs` v4 → update to v5 (required for Next.js 14)

**Files changed:** `package.json`, `next.config.js`, `netlify.toml`, new `tailwind.config.js`, new `postcss.config.js`

---

### Phase 1 - Design System Bootstrap → Tailwind
*Remove Bootstrap dependency, set up Tailwind with project color/font tokens.*

**Changes:**
1. Create `tailwind.config.js` with custom tokens:
   - Colors: primary, accent, bg-dark, etc. (from `docs/tech-stack.md`)
   - Font: Inter (Google Fonts via `next/font`)
2. Create `styles/globals.css` - Tailwind base/components/utilities directives
3. Update `pages/_app.js` - import `globals.css` only (remove all Bootstrap + plugin CSS imports)
4. Remove `styles/css/vendor/bootstrap.min.css` import
5. Remove jQuery plugin CSS imports (aos, swiper - will come from npm packages)
6. Keep FontAwesome CSS import temporarily until icons migrated to Heroicons

**Files changed:** `pages/_app.js`, new `tailwind.config.js`, new `postcss.config.js`, new `styles/globals.css`

---

### Phase 2 - Core Layout Components
*Rebuild Header, Footer, Meta - these appear on every page.*

**Changes:**

**`Meta.js`:**
- Update favicon path to `/images/fevicon.png`
- Add Open Graph base tags
- Add default structured data (Organization schema)

**`Header.js` - full rebuild:**
- Use new logo `/images/logo.png`
- Navigation items: Home, About, Services, Projects, Equipment, Gallery, Tenders, Certifications, CSR & NGO, Blog, Contact
- Sticky header on scroll (pure CSS + `useEffect` scroll listener)
- Mobile hamburger menu (pure React state - no jQuery)
- "Get Quotation" CTA button (links to `/contact-us`)

**`Footer.js` - full rebuild:**
- 4-column layout (Tailwind grid)
- Column 1: Logo + tagline + social links
- Column 2: Quick links
- Column 3: Services links
- Column 4: Contact details (real address, phone, email)
- Bottom bar: Copyright + Privacy Policy + Terms + GSTIN
- WhatsApp floating button (global, fixed position)
- Call floating button (global, fixed position)

**`Sidebar.js` / Mobile menu:**
- Rewrite as slide-in drawer using React state (no jQuery dependency)
- Or fold into Header.js as a single component

**`Js.js`:**
- Remove jQuery plugin loader entirely
- AOS init moved into `_app.js` or layout component using `useEffect`

**Files changed:** `components/Meta.js`, `components/Header.js`, `components/Footer.js`, `components/Sidebar.js`, `components/Js.js`, `pages/_app.js`

---

### Phase 3 - Home Page Rebuild
*The homepage is the highest-priority page visually.*

**Sections to build (per `docs/pages/01-home.md`):**
1. Hero - full-screen, video/image bg, headline, 3 CTAs
2. Stats counter strip - `react-countup`
3. Services overview grid - 10 cards
4. Featured projects - 3–4 project cards
5. Why Choose Us - 6 cards
6. Certifications strip
7. Location map - `react-leaflet`
8. CTA band

**Files changed:** `pages/index.js`, new section components under `components/home/`

---

### Phase 4 - Rebuild Existing Pages

In this order (priority):

| # | Page | File | Notes |
|---|---|---|---|
| 1 | About Us | `pages/about-wave-earth.js` → rename to `pages/about-us.js` | Rebuild per doc |
| 2 | Services | new `pages/services.js` | Create from scratch |
| 3 | Projects | `pages/our-projects.js` → rename to `pages/projects.js` | Rebuild per doc |
| 4 | Contact | `pages/contact-us.js` | Rebuild with real form + API route |
| 5 | Equipment | new `pages/equipment.js` | Create from scratch |
| 6 | Gallery | new `pages/gallery.js` | Create from scratch |
| 7 | Tenders | new `pages/tenders.js` | Create from scratch |
| 8 | Certifications | new `pages/certifications.js` | Create from scratch |
| 9 | CSR & NGO Works | new `pages/csr-ngo-works.js` | Create from scratch |
| 10 | Blog index | new `pages/blog/index.js` | Create from scratch |
| 11 | Blog detail | new `pages/blog/[slug].js` | Create from scratch |

---

### Phase 5 - SEO & Technical Setup

1. `next-sitemap` config → auto-generate `sitemap.xml` + `robots.txt` on build
2. Per-page `<Head>` SEO metadata (title, description, OG tags) per spec in each page doc
3. Google Fonts via `next/font/google` (Inter + Noto Sans Devanagari)
4. `_document.js` - add lang attribute, preconnect hints
5. Schema.org structured data: `Organization`, `LocalBusiness`, `WebSite` on homepage
6. Google Analytics 4 via `next/script`

---

### Phase 6 - Performance & Quality

1. All images migrated to Next.js `<Image>` component
2. Hero video: `<video>` with `poster` attribute, hidden on mobile (CSS), deferred load
3. Run Lighthouse audit - target 90+ mobile score
4. Check Core Web Vitals: LCP, CLS, FID
5. `npm audit` - fix any known vulnerabilities

---

## File Rename Map

| Old File | New File | Reason |
|---|---|---|
| `pages/about-wave-earth.js` | `pages/about-us.js` | Cleaner URL `/about-us` |
| `pages/our-projects.js` | `pages/projects.js` | Cleaner URL `/projects` |
| `pages/sample.js` | **Delete** | Unused template page |

---

## What We Are NOT Changing (Yet)

| Item | Reason |
|---|---|
| Backend / CMS (Laravel + Filament) | Not yet set up - separate project, separate phase |
| SCSS files in `styles/scss/` | Will be deprecated gradually as Tailwind is adopted. Don't delete yet - some legacy styles may still be needed during transition. |
| `pages/privacy-policy.js` | Keep - just update styling |
| `pages/terms-and-conditions.js` | Keep - just update styling |
| `renovate.json` | Keep as-is (dependency auto-update config) |

---

## Recommended Execution Order

```
Phase 0 → Phase 1 → Phase 2 → Phase 3 → Phase 4 (pages in priority order) → Phase 5 → Phase 6
```

Each phase should be independently testable (run `npm run dev` and verify nothing is broken) before moving to the next.

---

## Open Questions (Answer Before Starting)

| # | Question | Why It Matters |
|---|---|---|
| 1 | Real phone number for WhatsApp + Call buttons? | Needed in Phase 2 (Header/Footer/floating buttons) |
| 2 | Real email address for contact form? | Needed in Phase 2 (Footer) and Phase 4 (Contact page API route) |
| 3 | Logo: is `logo.png` the final version? Light/dark variant needed? | Needed in Phase 2 (Header) |
| 4 | Office address confirmed? | Current footer shows Ghaziabad - is this correct? |
| 5 | Keep `trailingSlash: true` in next.config.js? | Netlify deployment may depend on this |
| 6 | Any project photos ready to add for Phase 3 (home featured projects)? | Hero and project cards need real images |
