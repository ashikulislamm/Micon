# MICON Design System & UI/UX Redesign Blueprint

> **Canonical Design Specification for Metal Infrastructures and Constructions Ltd (MICON)**  
> *Version: 2.0.0 | Stack: Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, Radix UI*

---

## 1. Executive Vision & Brand Identity

### 1.1 Brand Philosophy: "The Living Industrial Blueprint"
MICON is an institutional-grade engineering and construction contractor in Bangladesh specializing in:
- High-clear-span Pre-Engineered Steel Buildings (PEB)
- Turnkey Reinforced Cement Concrete (RCC) & Civil Superstructures
- Environmental Water & Effluent Treatment Plants (ETP / WTP / ZLD)
- Level 2 BIM (Building Information Modeling) and structural retrofitting

The design system is grounded in **architectural precision, structural transparency, and executive credibility**. It avoids cartoonish "construction" tropes (caution stripes, raw bright yellows, staged hardhat stock photos) in favor of **clean blueprint aesthetics, hairline geometric datum lines, scannable engineering specifications, and verifiable metrics**.

### 1.2 Core Brand Attributes
- **Precise**: Every element is aligned to a modular architectural grid. Metadata and technical codes are rendered in sharp monospace type.
- **Authoritative**: Proof precedes assertion. Numbers (60m clear span, 5,000 MT/month, C40 concrete) lead the narrative.
- **Resilient**: Colors and materials reflect structural steel, graphite slate, poured concrete, and safety amber.
- **Effortless**: Complex technical data is digestible through progressive disclosure, bento grids, and interactive detail modals.

### 1.3 Senior Design Standard: Zero "AI Slop" & Anti-Gimmickry Mandate
The interface must reflect the work of a seasoned design director creating a high-end corporate digital experience, completely free of generic AI-generated tropes:
- **NO Gimmickry or Neon Blobs**: Strictly eliminate pulsating dots (`animate-pulse`), glowing radioactive gradients, arbitrary neon blur spheres, and decorative confetti.
- **NO Pseudo-Code Annotations (`//`)**: Strictly eliminate `//` slashes or programmer code-comment notation anywhere in the user-facing UI (e.g. no `// EST. 2018`, no `// 01`, no `// TRACK RECORD`, no `// DOSSIER`). An industrial construction client expects dignified, authoritative corporate engineering typography, not developer code syntax.
- **NO Artificial Pill Badges on Headers & Kickers**: Never wrap section subtitles, categories, or kickers in rounded bordered pill containers (`rounded-full border bg-primary/10`). Render them as clean, unadorned uppercase typography with generous letter tracking (`text-xs font-semibold tracking-widest text-primary uppercase`) resting directly on the canvas.
- **NO Column Indexing Tags**: Never add artificial numbering tags like `// 01`, `// 02`, `// 03` above footer column headers or content sections.
- **NO Glassmorphism Overkill**: Frosted glass is used sparingly (only on the sticky header bar on scroll). Surfaces are solid, crisp architectural paper, matte graphite slate, or refined steel card stock.
- **NO Bouncy / Toy Physics**: Animations must feel mechanical, weighted, and stable—mimicking structural engineering (clean 150ms-250ms ease-out transitions, subtle datum reveals, zero springy oscillations or floating cards).
- **Restrained & Surgical Accent Use**: Safety Amber (`#F29442`) is used with deliberate intent (primary action trigger, key highlight metric, active state line). It is never applied indiscriminately across entire card backgrounds or loud decorative strokes.
- **Architectural Swiss Typography & Whitespace**: Generous, confident whitespace, strong grid alignment, crisp hairline dividers (1px), and high-contrast structural typography. Let photography of real steel spans and engineered structures convey the power.

---

## 2. Design System Tokens & Foundations

### 2.1 Color Palette & Semantic System

#### Light Theme ("Architectural Paper Canvas")
| Token | Hex Value | Semantic Purpose |
| :--- | :--- | :--- |
| `--background` | `#F8F9FA` | Off-white architectural drafting paper |
| `--foreground` | `#14171C` | Heavy structural slate charcoal text |
| `--card` | `#FFFFFF` | Elevated crisp white surfaces |
| `--card-foreground` | `#14171C` | Primary card typography |
| `--primary` | `#F29442` | Safety Amber / Construction Warm Orange (brand signature) |
| `--primary-foreground` | `#FFFFFF` | Text on primary amber backgrounds |
| `--secondary` | `#1E2229` | Deep charcoal slate for structural contrast |
| `--secondary-foreground` | `#F4F5F7` | Text on secondary elements |
| `--accent` | `#C86218` | Burnt copper / terracotta for warm highlights |
| `--accent-foreground` | `#FFFFFF` | Text on accent surfaces |
| `--muted` | `#EEF0F4` | Concrete neutral for subtle surface fills |
| `--muted-foreground` | `#5A6270` | Secondary descriptive text |
| `--border` | `#E2E7ED` | Hairline structural gridlines |
| `--input` | `#E2E7ED` | Form control outlines |
| `--ring` | `#F29442` | Keyboard focus ring (Safety Amber) |

#### Dark Theme ("Midnight Steel")
| Token | Hex Value | Semantic Purpose |
| :--- | :--- | :--- |
| `--background` | `#0F1115` | Deep midnight steel background |
| `--foreground` | `#EAECEF` | Bright aluminum typography |
| `--card` | `#16191F` | Elevated dark graphite slate card surface |
| `--card-foreground` | `#EAECEF` | Text on dark cards |
| `--primary` | `#F29442` | Vibrant Safety Amber accent |
| `--primary-foreground` | `#0D0F12` | High-contrast dark text on amber buttons |
| `--secondary` | `#2A2E37` | Heavy slate structural fill |
| `--secondary-foreground` | `#F4F5F7` | Text on secondary elements |
| `--muted` | `#1F242D` | Dark concrete fill |
| `--muted-foreground` | `#9DA5B4` | Balanced secondary gray |
| `--border` | `#2D333F` | Dark blueprint hairline borders |
| `--input` | `#2D333F` | Form input borders in dark mode |
| `--ring` | `#F29442` | Amber focus ring |

#### Functional & Status Colors
- **Success / Safety Green**: `#16A34A` (Background: `rgba(22, 163, 74, 0.12)`, Border: `rgba(22, 163, 74, 0.3)`)
- **Warning / Inspection Orange**: `#D97706` (Background: `rgba(217, 119, 6, 0.12)`)
- **Destructive / Alert Red**: `#DC2626` (Background: `rgba(220, 38, 38, 0.12)`)
- **Info / Engineering Blue**: `#2563EB` (Background: `rgba(37, 99, 235, 0.12)`)

---

### 2.2 Typography Hierarchy & Strict Font Roles

MICON employs a calibrated **triple-font system**. Each typeface has a dedicated, non-overlapping role:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        FONT SYSTEM ROLE MATRIX                         │
├─────────────────────┬───────────────────┬──────────────────────────────┤
│ Typeface            │ Variable Token    │ Mandatory Usage Scope        │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ JetBrains Mono      │ --font-heading    │ • Engineering metadata & KPIs│
│ (Monospace)         │                   │ • Technical spec tables & BOQ│
│                     │                   │ • Project codes, badges & IDs│
│                     │                   │ • Button action text (upper) │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Sora                │ --font-body       │ • Primary section headlines  │
│ (Geometric Sans)    │                   │ • Body paragraphs & editorial│
│                     │                   │ • Navigation links & labels  │
│                     │                   │ • Form inputs & controls     │
├─────────────────────┼───────────────────┼──────────────────────────────┤
│ Fraunces            │ --font-accent     │ • Editorial italic highlights│
│ (Refined Serif)     │                   │ • Executive quotes & vision  │
│                     │                   │ • Hero secondary emphasis    │
└─────────────────────┴───────────────────┴──────────────────────────────┘
```

#### Type Scale & Styling Specifications
| Level | Font Family | Size | Weight | Tracking | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | Sora | 48px – 72px | 800 (Extrabold) | `-0.03em` | 1.05 | Homepage main title |
| **Hero Accent** | Fraunces (italic) | 48px – 72px | 700 (Bold) | `-0.01em` | 1.05 | Emphasized word in Hero |
| **H1 (Page Title)** | Sora | 36px – 52px | 700 (Bold) | `-0.025em` | 1.15 | Page titles (`PageHero`) |
| **H2 (Section)** | Sora | 28px – 40px | 700 (Bold) | `-0.02em` | 1.2 | Main section headers |
| **H3 (Sub-section)**| Sora | 20px – 26px | 600 (Semibold) | `-0.01em` | 1.3 | Card titles, group heads |
| **H4 (Item/Spec)** | JetBrains Mono | 14px – 18px | 600 (Semibold) | `0em` | 1.4 | Technical parameters |
| **Body Large** | Sora | 16px – 18px | 400 (Regular) | `0em` | 1.6 | Hero & section introductions |
| **Body Standard** | Sora | 14px – 15px | 400 (Regular) | `0em` | 1.55 | Default paragraphs & descriptions |
| **Body Small** | Sora | 12px – 13px | 400 / 500 | `0em` | 1.5 | Secondary notes, timestamps |
| **Technical Label**| JetBrains Mono | 11px – 12px | 600 (Semibold) | `0.06em` | 1.0 | Uppercase tags, specs, coords |
| **Section Kicker** | Sora | 12px | 600 (Semibold) | `0.1em` (`tracking-widest`) | 1.0 | `ENGINEERING DISCIPLINES` (plain uppercase, amber, no `//`, no pill) |

---

### 2.3 Spacing, Grid & Spatial Harmony

#### Grid & Alignment Rules
1. **Container Max Width**: `max-w-7xl` (`1280px`) with fluid side padding:
   - Mobile (`< 640px`): `px-4` (`16px`)
   - Tablet (`640px - 1024px`): `px-6` (`24px`)
   - Desktop (`> 1024px`): `px-8` (`32px`)
2. **Reading Column Width**: Editorial paragraphs are constrained to `max-w-2xl` to `max-w-3xl` (`60ch` – `75ch`) for optimal legibility.
3. **Section Vertical Rhythm**:
   - Large Sections: `py-16 lg:py-24`
   - Compact Sections / Marquees: `py-12 lg:py-16`
   - Section Title Bottom Spacing: `mb-12 lg:mb-16`

#### Border Radius Standards (Unified System)
To resolve prior inconsistencies (`rounded-md` vs `rounded-full` mixing), the following rules are strictly enforced:
- **Base Cards & Modules**: `rounded-2xl` (`16px`) for primary cards, feature boxes, and modals.
- **Nested Containers / Sub-cards**: `rounded-xl` (`12px`) for interior items, spec panels, and input fields.
- **Badges, Pills & Status Tags**: `rounded-full` (capsule format).
- **Interactive Action Buttons**: `rounded-none` (square geometry for primary, hero, secondary, utility, icon, and form buttons).
- **Homepage Surfaces (incl. Navbar, Footer & SectionTitle)**: Every homepage section, card, module, badge, control, and decorative surface — plus the global Navbar, Footer, and the SectionTitle accent rule — is square and borderless. Use spacing, tonal backgrounds, and typography for hierarchy instead of borders or corner radii.
- **Form Inputs & Textareas**: `rounded-xl` (`12px`).

#### Hairlines, Shadows & Elevation
- **Homepage, Navbar & Footer**: Borderless. Separation is created with tonal background shifts (`bg-background` ↔ `bg-card` ↔ `bg-muted`), spacing, and typography — never with 1px lines.
- **Inner Pages (until redesigned)**: `1px` hairline borders using `border-border/80` (light) and `border-border/50` (dark) are permitted.
- **No Glows**: No radial amber glows, blur spheres, or `blur-[100px]` decorative layers anywhere.
- **Elevation Steps**:
  - `shadow-xs`: Static interactive elements and the scrolled sticky header.
  - `shadow-sm`: Default resting state where elevation is genuinely needed.
  - `shadow-xl`: Active modals.
  - `shadow-2xl`: Mobile navigation drawer and overlays.

---

## 3. Component Architecture & UI Guidelines

### 3.1 Global Header (`Navbar`)
- **Behavior**:
  - At page top: Transparent background over dark hero banners with white typography. No border.
  - On scroll (`scrollY > 20`): Transitions to `bg-background/95 backdrop-blur-md` with `shadow-xs`. Borderless — no hairline under the header.
- **Logo Transition**: Dynamically swaps between `Logo_White.png` (over dark heroes) and `Logo_Black.png` (on scrolled light canvas or mobile open menu).
- **Active Route Indicator**: Square `h-0.5` amber underline beneath the active link; inactive links reveal the same underline on hover via `scale-x` (no rounded caps, no spring physics).
- **Navigation Links**: Home, About, Services, Projects, News. "Contact" is not a nav link — it is the CTA.
- **Call-to-Action**: Square (`rounded-none`) primary **"Contact"** button linking to `/contact`. No phone number in the header.
- **Mobile Drawer**: Square, borderless slide-over panel; separation via `bg-card` and a tonal `bg-muted` footer strip.

### 3.2 Standard Page Hero (`PageHero`)
- **Visual Composition**:
  - Background image with high-contrast gradient scrim and subtle blueprint grid overlay.
  - No radial glows or spotlight blobs.
  - **Dynamic Breadcrumbs**: Explicitly rendered at top (`Home / Services / PEB Steel`) with `BreadcrumbList` JSON-LD.
  - **Kicker**: Plain uppercase amber text (e.g. `WHO WE ARE`) — no brackets, no `//`, no pill wrapper.
  - Display Title with dual-font highlight: Primary headline in Sora, key phrase in Fraunces italic amber.
  - Dual square action CTAs with responsive stacking.

### 3.3 Section Title (`SectionTitle`)
- **Structure** (kicker → title → square accent rule; no description paragraph):
  ```tsx
  <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 lg:mb-14">
    <span className="text-xs font-semibold tracking-widest text-primary uppercase mb-2.5">
      ENGINEERING DISCIPLINES
    </span>
    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
      Turnkey Engineering & <span className="font-accent italic font-normal text-primary">Industrial Capabilities</span>
    </h2>
    <div className="flex items-center gap-2 mt-3.5" aria-hidden="true">
      <div className="w-8 h-0.5 bg-primary" />
      <div className="w-1.5 h-1.5 bg-primary/40" />
    </div>
  </div>
  ```

### 3.4 Service Cards & Detail Pages (`ServiceCard`, `app/services/[slug]`)
- **Card Anatomy** (square, borderless, tonal `bg-card` + `shadow-xs`; the whole card is one link):
  - Image banner with a bottom gradient and a monospace index (`01`-`07`) in the corner. No pill badge.
  - Mono uppercase category tag (`text-primary`), title, one short description.
  - Text action `VIEW SERVICE` with `group-hover:translate-x-1` arrow glide (never `hover:gap-*`).
  - No icon box and no feature bullets: one image, one title, one sentence.
- **Detail Page Anatomy**: `PageHero` (breadcrumbs `Home / Services / {tag}`) -> Overview + verifiable specification matrix -> numbered Key Advantages -> Executed Projects table -> Other Services -> CTA.
- **Content Rule**: Service copy must come from `COMPANY.md`. No invented warranties, timelines, speeds, capacities or certifications (e.g. OHSAS 18001 is not held). Each service lists only projects actually named in `COMPANY.md`.

### 3.5 Project Cards & Showcase (`ProjectCard`)
- **Card Anatomy**:
  - Fixed aspect ratio image with a restrained `scale-[1.02]` zoom on hover (500ms ease-out).
  - Status tag (`COMPLETED` in Safety Green, `ONGOING` in Safety Amber).
  - Category label in bottom corner.
  - Metadata strip displaying:
    - `Location` (District / SEZ)
    - `Year` of handover
    - `Area` (Square footage in monospace)
  - Detail Inspection modal trigger.
  - On the homepage: square and borderless.

### 3.6 Multi-Step Quote Wizard (`QuoteForm`)
- **Step 1: Project Typology & Scale**:
  - Bento card selectors for project type: *PEB Steel*, *Turnkey RCC*, *ETP/WTP Facilities*, *Green Factory*.
  - Estimated square footage with formatted unit indicator (`sq. ft`).
  - Site district / location picker.
- **Step 2: Financial & Delivery Parameters**:
  - Budget bracket selector customized for BDT enterprise scales.
  - Expected completion window (e.g., 3-6 months, 6-12 months).
  - Regulatory requirements checklist (LEED Gold, DoE Clearance, Accord/Alliance audit).
- **Confirmation State**:
  - Generates a branded reference tracking token (e.g., `MICON-RFP-8924`).
  - Direct contact prompt with senior engineering director hotline.

---

## 4. Design Rules & Coding Standards

### Rule 1: Zero Hardcoded Colors
```diff
- <div className="bg-white text-black p-6">
+ <div className="bg-card text-card-foreground p-6">
```
*Never* hardcode `bg-white`, `text-black`, `from-white`, or `text-slate-900`. Always utilize semantic Tailwind theme variables (`bg-background`, `bg-card`, `bg-muted`, `text-foreground`, `text-muted-foreground`). This guarantees complete compatibility across light and dark themes.

### Rule 2: Single Source of Truth for Data & Content
All corporate facts must be imported directly from `@/lib/data/company.ts`, which mirrors the Corporate Office block of [`COMPANY.md`](file:///f:/Web%20Development/Micon/COMPANY.md):
- **Founding Date**: `2018` (Consistent across all copy, metadata, and JSON-LD).
- **Delivered Projects**: `100+ Turnkey Projects` across marketing sections; `500+` reserved specifically for cumulative structural fabrications.
- **Corporate Office**: `Ka-6/A, 3rd Floor, Jagannathpur, Vatara, Gulshan, Dhaka 1229, Bangladesh`.
- **Phone**: `01844509800` (displayed as `+880 1844 509 800`). This is the only official number — hotline, office, mobile and emergency fields all resolve to it.
- **Email**: `noman@miconbd.com`
- **Website / Canonical Domain**: `https://www.miconbd.com`
- **Forbidden legacy values**: `+880 1812 345 678`, `+880 1712 345 678`, `+880 2 8956 234`, `+880 1234-567890`, `info@micon.com.bd`, `micon.com.bd`, Bashundhara address.

### Rule 3: Zero Broken Links & Zero Dead Controls
- Every button must either have an `href` (via `Link`), an `onClick` handler, or a `type="submit"`.
- Footer links must only point to actual, implemented pages (`/services`, `/projects`, `/about`, `/contact`, `/quote`, `/news`).
- External social links must point to verified company profiles or be hidden if unavailable.

### Rule 4: Zero Broken Media References
- All image paths must be verified against actual files present in `public/`.
- No references to missing files (e.g. `/RCC/RCC_2.jpg`).
- Next.js `<Image>` must include responsive `sizes`, explicit `alt` text describing structural details, and fallback placeholders.

### Rule 5: Accessibility (WCAG 2.1 AA Compliance)
- Minimum contrast ratio of **4.5:1** for all normal body text and **3:1** for large titles.
- Focus rings must be visible on all interactive elements via `focus-visible:ring-2 focus-visible:ring-primary`.
- Touch target sizes must be at least `44px × 44px` on mobile screens.
- All SVG icons without accompanying text must have an `aria-label` or `aria-hidden="true"`.
