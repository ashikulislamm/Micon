# MICON Redesign — Living Memory & Project State

> **Central Context, Architecture Decisions & Progress Registry**  
> *Last Updated: October 3, 2026 | Project: Metal Infrastructures and Constructions Ltd (MICON)*  
> *Primary Reference Documents: [`DESIGN.md`](file:///f:/Web%20Development/Micon/DESIGN.md) & [`ROADMAP.md`](file:///f:/Web%20Development/Micon/ROADMAP.md)*

---

## 1. Project Profile & Architecture Overview

| Attribute | Specification |
| :--- | :--- |
| **Project Name** | MICON (Metal Infrastructures and Constructions Ltd) |
| **Domain & Scope** | Industrial Construction, PEB Steel Buildings, Turnkey RCC Civil Works, ETP/WTP Facilities, BIM Level 2 |
| **Framework** | **Next.js 16.1.6** (App Router, React Server Components + Client Islands) |
| **Core Libraries** | **React 19.2.3**, **Tailwind CSS v4** (`@tailwindcss/postcss`), **Framer Motion 12.33.0**, **Radix UI** |
| **Language** | **TypeScript 5** (Strict mode) |
| **Telemetry** | `@vercel/analytics`, `@vercel/speed-insights`, Google Analytics (`gtag.js`) |
| **Design Concept** | *"The Living Industrial Blueprint"* — Architectural precision, monospace telemetry, modular bento grids |

---

## 2. Canonical Data Registry (Single Source of Truth)

All modules, components, and pages must strictly adhere to these canonical values:

* **Official Entity**: Metal Infrastructures and Constructions Ltd (MICON)
* **Founding Year**: **2018** (Eliminated all contradictory references to 2017)
* **Delivered Metric**: **100+ Turnkey Projects** delivered across Bangladesh
* **Corporate Office**: `Ka-6/A, 3rd Floor, Jagannathpur, Vatara, Gulshan, Dhaka 1229, Bangladesh` (source: `COMPANY.md`)
* **Official Phone**: `01844509800` → displayed `+880 1844 509 800` (the only official number; hotline/office/mobile/emergency all resolve to it)
* **Email**: `noman@miconbd.com`
* **Website / Canonical Domain**: `https://www.miconbd.com` (replaced legacy `micon.com.bd` in metadata, sitemap, robots, JSON-LD, breadcrumbs)
* **Managing Director**: **Engr. Md. Noman Or Rashid** — M.Sc. in Civil Engineering (BUET), **15+ years** experience (per `COMPANY.md` Key Resources table)
* **Forbidden legacy values**: `+880 1812 345 678`, `+880 1712 345 678`, `+880 2 8956 234`, `info@micon.com.bd`, `micon.com.bd`
* **Official Social Links**:
  - LinkedIn: `https://www.linkedin.com/company/miconbuild/`
  - Facebook: `https://www.facebook.com/miconbuild`
  - YouTube: `https://www.youtube.com/@miconengineering`

---

## 3. Design System Summary & Rules

### 3.1 Color Palette & Theme Tokens
* **Primary Signature**: Construction Safety Amber (`#F29442`, `--primary`)
* **Accent**: Burnt Terracotta / Warm Copper (`#C86218`, `--accent`)
* **Light Theme Canvas**: Architectural Drafting Paper (`#F8F9FA`, `--background`), Crisp White Cards (`#FFFFFF`, `--card`)
* **Dark Theme Canvas**: Midnight Steel (`#0F1115`, `--background`), Elevated Dark Slate (`#16191F`, `--card`)
* **Structural Borders**: Hairline Blueprint Lines (`#E2E7ED` light / `#2D333F` dark)

### 3.2 Typography Roles
* **`JetBrains Mono` (`--font-heading`)**: Strictly for engineering metadata, technical specs, coordinates, KPI counters, badges, and uppercase action buttons.
* **`Sora` (`--font-body`)**: Readable geometric sans-serif for main titles, body text, form controls, and navigation links.
* **`Fraunces` (`--font-accent`)**: Refined editorial serif for executive vision statements, quotes, and italicized highlights.

### 3.3 Strict Design Rules
1. **Zero Hardcoded Colors**: No `bg-white`, `text-black`, or `from-white`—all styling must use semantic CSS tokens.
2. **Standardized Radii**:
   - Primary Cards / Modals: `rounded-2xl` (`16px`)
   - Sub-containers & Form Controls: `rounded-xl` (`12px`)
   - Badges, Pills & Status Tags: `rounded-full` (capsule)
   - All interactive buttons: `rounded-none` (square geometry)
   - Homepage surfaces (incl. Navbar, Footer, SectionTitle): square and borderless throughout; use spacing, tonal backgrounds, and typography instead of rounded corners or borders.
3. **Verified Media**: All image paths verified in `public/`. No 404 references allowed.
4. **Accessible Inputs**: Form controls must have persistent amber focus rings (`focus-visible:ring-primary`).
5. **Senior Craft & Zero "AI Slop"**: Eliminate all blinking dots (`animate-pulse`), radioactive blur blobs, generic neon gradient meshes, and toy bouncy physics. Emphasize Swiss architectural grid alignment, generous confident whitespace, matte surfaces, and subtle mechanical micro-interactions.
6. **Zero `//` Pseudo-Code Annotations**: Absolutely no `//` code comment prefixes or slashes in any user-facing label, kicker, category, or header across the UI (e.g. no `// EST. 2018`, no `// 01`, no `// TRACK RECORD`).
7. **No Artificial Pill Badges on Section Headers**: Section kickers and categories must be rendered as clean uppercase typography (`text-xs font-semibold tracking-widest text-primary uppercase`) without pill badge wrappers or borders.

---

## 4. Master Roadmap Phasing & Current Status

```
[Phase 0: Data & Asset Sanitization] -> COMPLETED (Oct 3, 2026)
        │
        ▼
[Phase 1: Token Engine & Primitives] -> COMPLETED (Oct 3, 2026)
        │
        ▼
[Phase 2: Global Shell & Nav]        -> COMPLETED (Oct 3, 2026)
        │
        ▼
[Phase 3: Homepage Overhaul]         -> COMPLETED (Oct 3, 2026)
        │
        ▼
[Phase 4: Inner Core Applications]   -> CURRENT
        │
        ▼
[Phase 5: Final QA & Hardening]      -> PENDING
```

| Phase | Description | Status | Completion Date |
| :--- | :--- | :--- | :--- |
| **Phase 0** | Asset Audit, Media Integrity & Data Sanitization | **DONE** | Oct 3, 2026 |
| **Phase 1** | Token Engine, CSS Architecture & UI Primitives | **DONE** | Oct 3, 2026 |
| **Phase 2** | Global Shell & Layout Architecture (Navbar, Footer, PageHero, SectionTitle) | **DONE** | Oct 3, 2026 |
| **Phase 3** | Homepage Overhaul (All 9 Sections) | **DONE** | Oct 3, 2026 |
| **Phase 4** | Inner Core Applications (About, Services, Projects, Quote, Contact, News) | **CURRENT** | In Progress |
| **Phase 5** | Verification, Quality Assurance & Hardening | **PENDING** | — |

---

## 5. Changelog & Execution Record

### Phase 3 Completion (October 3, 2026)
- [x] **Task 3.1: Re-engineered [`sections/home/Hero.tsx`](file:///f:/Web%20Development/Micon/sections/home/Hero.tsx)**: Dual-font architectural headline (Sora + Fraunces italic), live telemetry dock (`60M+ CLEAR SPAN` • `5,000 MT/MO` • `100+ TURNKEY` • `ISO 9001`), removed dead Swiper CSS and unused imports, senior CTA buttons.
- [x] **Task 3.2: Re-engineered [`sections/home/Certifications.tsx`](file:///f:/Web%20Development/Micon/sections/home/Certifications.tsx)**: Standardized with `SectionTitle`, monospace registration tags (`CLASS-A`, `ISO-9001`, `BEPZA`, `BNBC-2020`), hairline border cards, edge fade masks, and pause-on-hover infinite track.
- [x] **Task 3.3: Re-engineered [`sections/home/Expertise.tsx`](file:///f:/Web%20Development/Micon/sections/home/Expertise.tsx)**: Replaced basic 3-card row with a high-density **Modular Bento Grid** featuring PEB steel buildings (60m+ clear spans), turnkey RCC hybrid structures, environmental ETP/WTP plants, BIM Level 2 Tekla digital twins, and structural retrofitting.
- [x] **Task 3.4: Re-engineered [`sections/home/Stats.tsx`](file:///f:/Web%20Development/Micon/sections/home/Stats.tsx)**: 4-pillar industrial statistics (`100+ Turnkey Projects`, `5,000 MT Output`, `30+ Engineers`, `7+ Years Established`) with monospace category tags and blueprint hairline vertical dividers.
- [x] **Task 3.5: Re-engineered [`sections/home/DesignBuildProcess.tsx`](file:///f:/Web%20Development/Micon/sections/home/DesignBuildProcess.tsx)**: Interactive 5-phase execution flow (`01 BIM Design` -> `02 Fabrication` -> `03 Civil Foundation` -> `04 Site Erection` -> `05 Turnkey Handover`) with technical deliverables blueprint card and zero bouncy animations.
- [x] **Task 3.6: Modernized [`sections/home/MachineryFleet.tsx`](file:///f:/Web%20Development/Micon/sections/home/MachineryFleet.tsx)**: High-contrast capital equipment cards with monthly output capacities and tolerance ratings (`5,000 MT/Mo CNC`, `50-100 Ton Cranes`, `60 m³/hr Concrete`, `±1mm Laser Total Station`).
- [x] **Task 3.7: Re-engineered [`sections/home/FeaturedProjects.tsx`](file:///f:/Web%20Development/Micon/sections/home/FeaturedProjects.tsx)**: Architectural split-screen inspector pairing full-bleed photography with deep technical dossiers (Client, Code AISC/BNBC, Year, Built Area, Status) and interactive engineering review modal.
- [x] **Task 3.8: Re-engineered [`sections/home/Partners.tsx`](file:///f:/Web%20Development/Micon/sections/home/Partners.tsx)**: Fixed critical dark mode bug (eliminated hardcoded `bg-white` & `from-white`), removed `hover:scale-105`, integrated Next.js `<Image>`, and standardized with `SectionTitle`.
- [x] **Task 3.9: Re-engineered [`sections/home/CTA.tsx`](file:///f:/Web%20Development/Micon/sections/home/CTA.tsx) & [`components/CTASection.tsx`](file:///f:/Web%20Development/Micon/components/CTASection.tsx)**: Transformed into an authoritative industrial dock on midnight steel (`#0D0F12`), blueprint grid overlay, monospace telemetry badge, direct 24/7 hotline dock, and senior CTAs (eradicating blinding orange gradient meshes).
- [x] **Task 3.10: Build Verification**: Full Next.js production build (`npm run build`) passed with 0 errors across all 19 static and SSG routes in 18.5s.
- [x] **Task 3.11: Senior Design Refinement (Hero & Section Headings & Button Hovers)**:
  - **Removed Hero Description**: Purged wordy description paragraph from [`sections/home/Hero.tsx`](file:///f:/Web%20Development/Micon/sections/home/Hero.tsx); adjusted headline vertical rhythm directly into primary CTAs.
  - **Removed Section Heading Descriptions**: Stripped descriptive subtitles from [`components/SectionTitle.tsx`](file:///f:/Web%20Development/Micon/components/SectionTitle.tsx) and across all homepage sections (`Expertise.tsx`, `FeaturedProjects.tsx`, `DesignBuildProcess.tsx`, `MachineryFleet.tsx`).
  - **Fixed Button Hovers**: Eliminated conflicting color classes and layout jitter in `Expertise.tsx` and `MachineryFleet.tsx`. In [`components/ui/button.tsx`](file:///f:/Web%20Development/Micon/components/ui/button.tsx), removed bouncy `hover:scale-[1.02] active:scale-[0.98]` and calibrated `variant="outline"` to cleanly invert into crisp high-contrast solid primary state on hover (`hover:bg-primary hover:text-primary-foreground hover:border-primary`) with zero color clashing. Smooth hardware-accelerated icon glides (`group-hover:translate-x-1`) replaced layout-shifting `hover:gap-*`.
- [x] **Task 3.12: Project Portfolio Redesign (Option A: Flagship Dossier Bento)**:
  - Replaced the single-project slider with an asymmetric **12-column Flagship Dossier Bento Grid** in [`sections/home/FeaturedProjects.tsx`](file:///f:/Web%20Development/Micon/sections/home/FeaturedProjects.tsx):
    - **Dominant Hero Showcase (Col 7)**: National Transit Infrastructure flagship — **CREC China Railway Padma Railway Link Stations** (5 rail passenger stations, heavy civil foundations, structural steel framing, BNBC 2020 / AREMA codes, zero-LTI safety protocol).
    - **Secondary Stacked Cards (Col 5)**: Two diverse discipline pillars:
      1. **TVS Autos Bangladesh**: 180,000 Sq.Ft Assembly & Logistics Hub (60m clear span PEB steel building at Beribadh, Mirpur).
      2. **Flaxen Dress Maker Ltd**: 154,987 Sq.Ft 5-Storied USGBC LEED Certified Green Factory (high-strength C35 RCC).
    - **Bottom Authority Telemetry Strip**: Verified nationwide footprint counter (*"100+ Turnkey Projects Delivered Across 24 Districts"*) + PWD Class-A / MES cleared accreditations + CTA button to full archive.
    - **Deep Technical Modal Inspector**: Architectural inspection drawer with complete engineering scope, highlights, specs, and direct proposal RFP link (`/quote`).
  - **Canonical Project Data**: Synchronized [`lib/data/projects.ts`](file:///f:/Web%20Development/Micon/lib/data/projects.ts) with verified landmark projects from [`COMPANY.md`](file:///f:/Web%20Development/Micon/COMPANY.md) (CREC, TVS Autos, Flaxen Dress Maker, PGCB GIS Substation).
  - *Note: homepage sections were subsequently made square and borderless (user change); the rounded/bordered card styling originally described here no longer applies.*
- [x] **Task 3.13: Shell Square/Borderless Pass, Canonical Contacts & Doc Sync**:
  - **Navbar**: Removed header borders in all states (separation via tonal `bg-background/95` + `shadow-xs`), square active/hover underline, borderless tonal mobile toggle, borderless square drawer + drawer links.
  - **Footer**: Removed top border, column-heading hairlines and social icon borders (tonal `bg-muted` tiles); copyright moved to a separate tonal `bg-muted/50` strip instead of a `border-t`.
  - **SectionTitle**: Round accent dot → square tick.
  - **Contacts**: [`lib/data/company.ts`](file:///f:/Web%20Development/Micon/lib/data/company.ts) now uses `COMPANY.md` values (phone `+880 1844 509 800`, `noman@miconbd.com`, Vatara, Gulshan address, `website` field added to `ContactInfo`). Contact page cards show Phone / Email / Web instead of three duplicate numbers. Contact meta description updated. Domain `micon.com.bd` → `miconbd.com` across metadata, sitemap, robots, JSON-LD and breadcrumbs.
  - **Docs**: `DESIGN.md` (section kicker spec, SectionTitle example, glow rule, Navbar/PageHero/ServiceCard/ProjectCard specs, data rules) and `ROADMAP.md` stale references synced.

### Phase 2 Completion (October 3, 2026)
- [x] **Upgraded [`components/Navbar.tsx`](file:///f:/Web%20Development/Micon/components/Navbar.tsx)**: Frosted glassmorphism on scroll, dynamic logo switching (`Logo_White.png` vs `Logo_Black.png`), primary action button set to "Contact" (`/contact`), removed redundant "Contact" navlink and removed phone number from Navbar header for a cleaner senior aesthetic.
- [x] **Upgraded [`components/Footer.tsx`](file:///f:/Web%20Development/Micon/components/Footer.tsx)**: Eradicated all 404 dead links (`/safety`, `/privacy`, `/terms`, `/compliance` -> canonical services and corporate routes), wired verified social URLs from `COMPANY_CONTACT.social`, added pre-footer architectural consultation dock with direct hotline, dual light/dark logo rendering, and ISO 9001:2015 / BNBC 2020 accreditations.
- [x] **Upgraded [`components/PageHero.tsx`](file:///f:/Web%20Development/Micon/components/PageHero.tsx)**: Implemented functional breadcrumbs with Chevron separators and Schema.org `BreadcrumbList` JSON-LD microdata, `.blueprint-grid` subtle overlay, dual-font editorial typography (Sora + Fraunces italic), plain uppercase kicker (no `//`, no pill), and removed banned bouncy `hover:scale-105` animations.
- [x] **Upgraded [`components/SectionTitle.tsx`](file:///f:/Web%20Development/Micon/components/SectionTitle.tsx)**: Plain uppercase amber kicker (no `//`, no pill), dual-font heading pairing, clean alignment (`left` / `center` / `right`), square accent rule (bar + square tick). Description paragraph removed (Task 3.11).
- [x] **Synchronized [`app/layout.tsx`](file:///f:/Web%20Development/Micon/app/layout.tsx)**: Unified canonical project count to "100+ turnkey projects delivered across Bangladesh".
- [x] Type check validated: `npx tsc --noEmit` passed with 0 errors.

### Phase 1 Completion (October 3, 2026)
- [x] **Calibrated `@theme inline` in [`app/globals.css`](file:///f:/Web%20Development/Micon/app/globals.css)**: Set `--radius: 0.75rem` (`rounded-xl`), standardized `--radius-lg: 1rem` (`rounded-2xl`), `--radius-md: 0.75rem`, `--radius-sm: 0.5rem`.
- [x] **Added Blueprint Utility Tokens**: Added `.blueprint-grid`, `.blueprint-hairline`, `.blueprint-tag` utility classes supporting both light and dark themes.
- [x] **Standardized [`components/ui/button.tsx`](file:///f:/Web%20Development/Micon/components/ui/button.tsx)**: Standardized every button size and variant to square `rounded-none` geometry, removed hardcoded text colors, and retained the persistent focus ring (`focus-visible:ring-primary`).
- [x] **Standardized [`components/ui/card.tsx`](file:///f:/Web%20Development/Micon/components/ui/card.tsx)**: Standardized to `rounded-2xl`, hairline borders (`border-border/80`), `p-6 md:p-8` padding scale, card hover border glow.
- [x] **Standardized [`components/ui/badge.tsx`](file:///f:/Web%20Development/Micon/components/ui/badge.tsx)**: Added semantic tokens (`primary-foreground`, `blueprint` monospace tag variant).
- [x] **Standardized [`components/ui/input.tsx`](file:///f:/Web%20Development/Micon/components/ui/input.tsx) & [`components/ui/textarea.tsx`](file:///f:/Web%20Development/Micon/components/ui/textarea.tsx)**: Updated to `rounded-xl`, dark mode surfaces (`dark:bg-card/40`), persistent amber focus rings.
- [x] **Updated [`components/ServiceCard.tsx`](file:///f:/Web%20Development/Micon/components/ServiceCard.tsx)**: Updated container to `rounded-2xl border-border/80`.
- [x] Type check validated: `npx tsc --noEmit` passed with 0 errors.

### Phase 0 Completion (October 3, 2026)
- [x] Created [`public/RCC/RCC_2.jpg`](file:///f:/Web%20Development/Micon/public/RCC/RCC_2.jpg) to resolve 404 errors on Project 4 and the Retrofitting service.
- [x] Created [`public/twitter-image.jpg`](file:///f:/Web%20Development/Micon/public/twitter-image.jpg) for social preview cards.
- [x] Pruned non-existent favicon shortcuts in [`app/layout.tsx`](file:///f:/Web%20Development/Micon/app/layout.tsx), keeping canonical `favicon.ico`.
- [x] Synchronized founding year to **2018** in [`components/JsonLd.tsx`](file:///f:/Web%20Development/Micon/components/JsonLd.tsx) and [`app/about/page.tsx`](file:///f:/Web%20Development/Micon/app/about/page.tsx).
- [x] Refactored [`sections/quote/ContactSidebar.tsx`](file:///f:/Web%20Development/Micon/sections/quote/ContactSidebar.tsx) with canonical Vatara head office, official phone numbers, and full dark theme compatibility.
- [x] Fixed formwork equipment typos in [`sections/about/Machinaries.tsx`](file:///f:/Web%20Development/Micon/sections/about/Machinaries.tsx) (`"Poops"` -> `"Formwork Props"`, `"Roof Woost"` -> `"Roof Hoist"`).
- [x] Type check validated: `npx tsc --noEmit` passed with 0 errors.

---

### Phase 4A: About Us & Corporate Profile Completion (October 3, 2026; Refined October 14, 2026)
- [x] **Section Heading Standardization ([`components/SectionTitle.tsx`](file:///f:/Web%20Development/Micon/components/SectionTitle.tsx))**: Updated `SectionTitle` to render its `description` prop cleanly below the heading & decorative underline. Standardized all sections in `sections/about/` (`Leader.tsx`, `MissionVision.tsx`, `Machinaries.tsx`, `TechnicalCapacity.tsx`, `CoreValues.tsx`, `Sustainability.tsx`) to use the unified `SectionTitle` component rather than bespoke custom heading blocks.
- [x] **Plain, Professional Copy Refactoring**: Removed overly complex, dramatic, or robotic jargon (e.g., "Rigor", "Pilgrimage philosophy", "Micrometric precision", "turnkey EPC rigor", "CPM controls") across all sections in favor of clear, accessible, and grounded professional language.
- [x] **Hero Section ([`sections/about/Hero.tsx`](file:///f:/Web%20Development/Micon/sections/about/Hero.tsx))**: Connected `PageHero` with functional breadcrumbs, clean kicker `CORPORATE PROFILE`, dual-font title (`Engineering Beyond Foundations`), executive description from `COMPANY.md`, and square buttons (`Our Services` -> `/services`, `Contact Us` -> `/contact`).
- [x] **Executive Leadership ([`sections/about/Leader.tsx`](file:///f:/Web%20Development/Micon/sections/about/Leader.tsx))**: High-impact editorial profile of Managing Director **Engr. Md. Noman Or Rashid** (M.Sc. Civil Engineering, BUET; 15+ years experience per `COMPANY.md`) with architectural portrait frame, founder's vision statement, and 4 verified credentials tiles.
- [x] **Mission & Vision ([`sections/about/MissionVision.tsx`](file:///f:/Web%20Development/Micon/sections/about/MissionVision.tsx))**: Dual blueprint cards incorporating corporate motto `"BUILDING BEYOND"`, single-source design-build accountability, BIM 3D precision, and LEED/EDGE sustainability horizons with square feature banner.
- [x] **Machinery Inventory ([`sections/about/Machinaries.tsx`](file:///f:/Web%20Development/Micon/sections/about/Machinaries.tsx))**: Simplified maintenance strip to "Regular Maintenance & Safety Inspections"; categorized inventory with interactive search modal.
- [x] **Technical Capacity ([`sections/about/TechnicalCapacity.tsx`](file:///f:/Web%20Development/Micon/sections/about/TechnicalCapacity.tsx))**: 4 authentic disciplines linked to actual service routes, plus 30+ certified industry expert breakdown matrix from `COMPANY.md`.
- [x] **Core Values ([`sections/about/CoreValues.tsx`](file:///f:/Web%20Development/Micon/sections/about/CoreValues.tsx))**: 5 clear corporate pillars (Precision, On-Time Delivery, Safety & Quality, Respect for People, Environmental Responsibility) with `01`-`05` mono indices.
- [x] **Sustainability & ESG ([`sections/about/Sustainability.tsx`](file:///f:/Web%20Development/Micon/sections/about/Sustainability.tsx))**: 6 green practices directly aligned with `COMPANY.md` with square telemetry tiles and zero emojis.
- [x] **Corporate CTA ([`sections/about/CTA.tsx`](file:///f:/Web%20Development/Micon/sections/about/CTA.tsx))**: Simplified copy with direct buttons to `/contact` and `/quote`.
- [x] Verification: `npx tsc --noEmit` passed with 0 errors.

### Phase 4B: Services Engine & Detail Pages Completion (October 7, 2026)
- [x] **Catalogue ([`app/services/page.tsx`](file:///f:/Web%20Development/Micon/app/services/page.tsx))**: Hero (garbled description fixed), `ServicesList` (7 square `ServiceCard`s with mono index, no badges or icon boxes), `Standards` (credentials grid from `COMPANY.md`), `ProcessFlow` (Design, Procurement, Construction, Handover), CTA.
- [x] **Detail ([`app/services/[slug]/page.tsx`](file:///f:/Web%20Development/Micon/app/services/%5Bslug%5D/page.tsx))**: `PageHero` + breadcrumbs, overview, spec matrix, numbered advantages, executed-projects table, other services, CTA. SSG for all 7 slugs.
- [x] **Data integrity**: [`lib/data/services.ts`](file:///f:/Web%20Development/Micon/lib/data/services.ts) rewritten from `COMPANY.md`; `timeline`, `warranty`, `badge` removed from [`types/service.ts`](file:///f:/Web%20Development/Micon/types/service.ts); `references` added. Removed fabricated OHSAS 18001, 25/30-year warranties, 60m spans, 150 m/day, 98% clash reduction.
- [x] **Fixed broken link** in About > Technical Capacity (`/services/etp-wtp-stp` -> `/services/treatment-plants`).
- [x] **Lesson**: server components (e.g. `app/services/[slug]/page.tsx`) must not pass icon components as props to client components like `PageHero`; omit `icon` (PageHero defaults to `ArrowRight`).
- [x] **DESIGN.md** section 3.4 updated (ServiceCard + detail page anatomy, content rule).
- [x] Verification: `npx tsc --noEmit` 0 errors; `npm run build` clean.
- [ ] **Open item**: `sections/quote/QuoteForm.tsx` still has its own service/timeline options; review in 4D against the new catalogue.

---

### Phase 4C: Projects Portfolio & Interactive Gallery Completion (October 7, 2026)
- [x] **Canonical Portfolio Data ([`lib/data/projects.ts`](file:///f:/Web%20Development/Micon/lib/data/projects.ts), [`types/project.ts`](file:///f:/Web%20Development/Micon/types/project.ts))**: Overhauled all 12 projects to match `COMPANY.md` contracted clients (CREC, TVS Autos, Flaxen Dress Maker, Energypac/PGCB, Eurotex Spinning Mills, SM Knitwear, Focus Auto Bricks, Bay Tannery, SM Accessories, Oscar Bangla, Lax Lingerie, Saiham Knit Composite); eliminated placeholder clients; added `retrofitting` category.
- [x] **Search & Category Engine ([`sections/projects/ProjectsClient.tsx`](file:///f:/Web%20Development/Micon/sections/projects/ProjectsClient.tsx))**: Live query search across title, client, location, tags, description, and deliverables; sticky square category selector bar with dynamic count badges; URL hash support for deep linking directly to project blueprint modals.
- [x] **Project Card Modernization ([`components/ProjectCard.tsx`](file:///f:/Web%20Development/Micon/components/ProjectCard.tsx))**: Crisp square geometry (`rounded-none`), tonal surface (`bg-card`), smooth hover scale, monospace telemetry metadata strip (Location, Area, Year), status stamp (`COMPLETED`), and interactive "Inspect Blueprint" action that triggers the technical dossier modal.
- [x] **Architectural Blueprint Detail Modal**: Technical blueprint dialog displaying hero image with location & area overlay, engineering scope narrative, key technical deliverables grid, technical tags, and direct CTA to request proposal. Zero emojis (removed legacy `📍` and fixed typos).
- [x] **Server Component Page Shell ([`app/projects/page.tsx`](file:///f:/Web%20Development/Micon/app/projects/page.tsx))**: Converted page to Server Component exporting complete SEO `Metadata`, canonical tags, and OpenGraph descriptors.
- [x] Verification: `npx tsc --noEmit` passed with 0 errors; `npm run build` compiled all 19 static/SSG routes cleanly.

### Phase 4E: Contact HQ & Engineering Directory Completion (October 7, 2026)
- [x] **Directory Cards ([`sections/contact/ContactClient.tsx`](file:///f:/Web%20Development/Micon/sections/contact/ContactClient.tsx))**: Tonal square cards detailing Corporate Headquarters (Vatara, Gulshan), Communications Matrix (official phone `+880 1844 509 800`, email `noman@miconbd.com`, website `miconbd.com`), and Operating Schedule (Sunday - Thursday 9AM - 7PM).
- [x] **Side-by-Side Inquiry Form & Interactive Google Map Row**: Placed the 5-field Direct Inquiry Form (`lg:col-span-6`, square inputs `rounded-none`, phone callback collection, toast feedback) and the Interactive Google Map (`lg:col-span-6`, Vatara office coordinates, architectural header bar, direct external navigation link) side-by-side in a single equal-height row (`lg:grid-cols-12 items-stretch`). Removed redundant Executive Leadership, Licensed Enterprise Credentials, and Corporate Networks cards per user request.
- [x] **FAQ Accordion & UI Modernization ([`components/ui/accordion.tsx`](file:///f:/Web%20Development/Micon/components/ui/accordion.tsx))**: Modernized to square geometry (`rounded-none`), answering key questions on PEB timelines, LEED green factories, turnkey RCC, and safety protocols.
- [x] **Server Component Page Shell ([`app/contact/page.tsx`](file:///f:/Web%20Development/Micon/app/contact/page.tsx))**: Exporting complete SEO `Metadata`, canonical URL, and OpenGraph tags.
- [x] Verification: `npx tsc --noEmit` passed with 0 errors; `npm run build` compiled all 19 static/SSG routes cleanly.

---

## 6. Immediate Next Steps

- [ ] **4F: Industry News & Insights (`app/news/page.tsx`)**:
  - Editorial layout with category filter tabs and engineering articles
- [ ] **4D: Engineering Proposal & RFP (`app/quote/page.tsx`)** *(Deferred by user, to be done later)*:
  - Interactive multi-step BOQ / RFP engineering consultation form
  - Sync project typologies with the 7 canonical services from `COMPANY.md`
  - Update canonical contacts and Vatara head office address


