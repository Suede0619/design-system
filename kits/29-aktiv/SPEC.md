# Aktiv Studio — Design System

## 1. Overview

- **Site:** aktiv.studio
- **URL:** https://aktiv.studio
- **What they do:** European digital design studio creating brand identities, digital products, and web experiences. Positions itself at the intersection of graphic design tradition and digital craft.
- **Awards:** Awwwards and CSSDA recognition for experimental, typography-led digital design
- **Aesthetic:** Swiss-influenced minimal design with creative tension. The studio's aesthetic is spare and intelligent — structured grids, confident white space, and Aktiv Grotesk as both a brand and a tool. Understated but with deliberate moments of surprise: an unexpected layout break, a full-bleed texture, an oversized numeral used as a compositional element.

---

## 2. Typography

### Primary Font
- **Family:** "Aktiv Grotesk" (Dalton Maag) — the studio's signature typeface and namesake
- **Fallback:** "Inter", "Helvetica Neue", system-ui, sans-serif
- **Weights in use:** 300 Light, 400 Regular, 500 Medium, 700 Bold
- **Variable axes:** Weight + Width available
- **Letter-spacing:** -0.01em headings, 0 body, +0.08–0.12em for small uppercase labels

### Display Treatment
- Display headlines at extreme scales: 8–12vw on desktop hero
- Mixed-weight headlines: thin + bold juxtaposition
- All-caps for nav and section labels

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Hero | clamp(3.5rem, 8vw, 8rem) | 300–700 | Mixed weight, structural |
| h2 | clamp(2rem, 4vw, 3.5rem) | 500–700 | Section openers |
| h3 | 1.375rem | 600 | Service/feature callouts |
| body | 0.9375rem | 400 | 15px, 1.7 leading |
| label | 0.6875rem | 500 | All caps, wide tracking |
| caption | 0.8125rem | 400 | Meta, project info |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Studio White | `#FAFAF8` | Primary background |
| Off White | `#F0EFEB` | Secondary backgrounds |
| Cream | `#EAE8E1` | Hover states, cards |
| Mid Gray | `#8C8C8A` | Secondary text |
| Dark Gray | `#3A3A38` | Body text |
| Near Black | `#111110` | Headings, dark sections |
| Black | `#000000` | Maximum contrast |

### Accent Colors (Minimal Use)
| Name | Hex | Usage |
|------|-----|-------|
| Graphite | `#4A4A48` | Dark section backgrounds |
| Warm Tan | `#C8B89A` | Project category highlights |
| Deep Forest | `#1A2E1A` | Dark mode alternate sections |

### Gradients
- None — philosophy is flat color and texture over gradients
- **Texture:** Subtle grain overlay on backgrounds `noise(0.65, 0.5, 0)` or CSS equivalent

---

## 4. Layout System

### Container
- **Max-width:** 1280px
- **Padding:** 0 clamp(20px, 4vw, 64px)

### Grid
- **Columns:** 12
- **Gutter:** 24–32px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1200px, Desktop 1200px+

### Section Spacing
- **Vertical:** 120px desktop, 80px tablet, 56px mobile
- **Asymmetric layouts:** 8+4 and 7+5 column splits used for intentional tension
- **Negative space:** 40% of any section is intentionally empty — breathing room is a feature

### Layout Patterns
- Left-heavy hero: large headline flush left, small descriptor text far right
- Numbered project list: 01, 02, 03 as compositional elements
- Full-bleed project image takeovers between text sections
- Fluid 2-column case study layout with offset vertical positioning
- Footer: sparse, two columns, contact info and navigation links

---

## 5. Navigation

- **Style:** Minimal fixed, near-transparent
- **Height:** 52px
- **Background:** `rgba(250,250,248,0.92)` with `backdrop-filter: blur(8px)`
- **Logo:** "aktiv" or "aktiv studio" in Aktiv Grotesk, lowercase, very small (14px)
- **Links:** 11–12px, all caps, 500 weight, `#8C8C8A` → `#111110` hover
- **CTA:** No dedicated button — "Contact" text link, far right
- **Mobile:** Hamburger reveals minimal full-screen menu with large project category links

---

## 6. Buttons

### Primary CTA
- Typographic — no button container
- "Start a project →" with hover underline + arrow translate 4px right
- Text: 15px, 500 weight, dark

### Project Button
- Bordered pill: `1px solid #3A3A38`, 8px radius, `padding: 8px 16px`
- Text: 12px uppercase, 500 weight
- Hover: background fills to `#111110`, text inverts white

### Form Submit
- Full-width rectangular, `#111110` background, white text, no radius

---

## 7. Cards & Components

### Project Card
- **Image:** Full bleed, no border-radius, sharp corners
- **Caption:** Project name + category in 12px uppercase below
- **Hover:** Image scale 1.0 → 1.03 at 500ms, caption slides up 4px
- **Category filter:** Active filter indicated by underline on label

### Service Block
- Large left number (01, 02...) in `#EAE8E1`
- Service name right-aligned or offset
- Horizontal rule separating items
- Hover: background shifts to `#F0EFEB`

### About / Process Step
- Typographic with thin rule above
- Step number in small caps, description below

---

## 8. Motion & Animation

### Page Load
- Content slides up from Y:20px, opacity 0→1, staggered 80ms
- Hero headline: word-by-word fade with slight scale from 0.95→1

### Scroll Animations
- Elements appear on intersection with 30px Y offset
- Image parallax: subtle 0.15–0.3x scroll speed
- Numbers count up when in viewport

### Micro-interactions
- Cursor: custom cursor dot that scales on hover
- Link hover: smooth underline slide-in
- Project image hover: grain overlay adds subtle texture effect

### Page Transitions
- GSAP-powered: current page fades/slides out, new page slides in
- 400ms total transition

### Easing
- Primary: `cubic-bezier(0.6, 0.01, 0, 0.95)` — Swiss precision
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Durations: 200ms micro, 400ms hover, 600ms reveal, 1000ms dramatic

---

## 9. Layout Strategy

**Grid as language.** The 12-column grid is followed rigorously but broken intentionally at key moments — a headline that overflows its column, an image that bleeds to the viewport edge. The tension between the grid and its violations creates visual interest without decoration. Asymmetry is architectural, not accidental.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The namesake typeface *is* the design system. Aktiv Grotesk at every scale — from 8vw hero to 11px nav labels — creates a coherent, unified voice where size and weight become the only variables. It's a studio that uses their typographic tools to prove they understand type, not just display it. Clean without being empty. Structured without being rigid.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-primary: "Aktiv Grotesk", "Inter", "Helvetica Neue", system-ui, sans-serif;

  --font-size-hero: clamp(3.5rem, 8vw, 8rem);
  --font-size-h1: clamp(2.5rem, 5vw, 5rem);
  --font-size-h2: clamp(1.75rem, 3.5vw, 3rem);
  --font-size-h3: 1.375rem;
  --font-size-body: 0.9375rem;
  --font-size-small: 0.8125rem;
  --font-size-nav: 0.75rem;
  --font-size-label: 0.6875rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-hero: 0.93;
  --line-height-tight: 1.1;
  --line-height-normal: 1.7;

  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.08em;
  --letter-spacing-label: 0.12em;

  /* Colors */
  --color-bg: #FAFAF8;
  --color-bg-alt: #F0EFEB;
  --color-bg-warm: #EAE8E1;
  --color-bg-dark: #111110;
  --color-bg-graphite: #4A4A48;

  --color-text-primary: #111110;
  --color-text-body: #3A3A38;
  --color-text-muted: #8C8C8A;
  --color-text-inverted: #FAFAF8;

  --color-border: #DCDCD8;
  --color-border-dark: #3A3A38;
  --color-accent: #C8B89A;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-14: 56px;
  --space-20: 80px;
  --space-30: 120px;

  /* Layout */
  --container-max: 1280px;
  --container-padding: clamp(20px, 4vw, 64px);
  --section-padding: 120px;
  --section-padding-tablet: 80px;
  --section-padding-mobile: 56px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-pill: 100px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);
  --shadow-image: 0 16px 48px rgba(0, 0, 0, 0.1);

  /* Nav */
  --nav-height: 52px;
  --nav-blur: 8px;

  /* Transitions */
  --ease-swiss: cubic-bezier(0.6, 0.01, 0, 0.95);
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 200ms;
  --duration-standard: 400ms;
  --duration-reveal: 600ms;
  --duration-dramatic: 1000ms;
}
```

---

## 12. Category Tags

`light` `minimal` `Swiss-design` `studio-portfolio` `Aktiv-Grotesk` `typography-led` `cream-palette` `European` `editorial`
