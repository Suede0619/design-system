# Locomotive — Design System

## 1. Overview

- **Site:** locomotive.ca
- **URL:** https://locomotive.ca
- **What they do:** Montreal-based digital creative agency specializing in bespoke brand identities, digital experiences, and web design. 15+ years building innovative web experiences for forward-thinking clients. Known for scroll-driven animations and award-winning experimental sites.
- **Awards:** Multiple Awwwards nominations and wins; CSSDA recognition; known in the industry for their open-source scroll library "locomotive-scroll"
- **Aesthetic:** Bold typographic expressionism with restrained color. Big editorial headlines, confident use of negative space, tactile hover states. Feels like a high-end print design studio that learned to code. The site *is* a portfolio of what they can do for you.

---

## 2. Typography

### Display Font
- **Family:** "Monument Extended" or editorial grotesque — ultra-wide, all-caps display
- **Fallback:** "Helvetica Neue", "Arial Black", sans-serif
- **Weight:** 800–900 ultra bold/black
- **Style:** Uppercase, very tight tracking, massive scale

### Secondary / Body Font
- **Family:** "Helvetica Neue" or "Neue Haas Grotesk" — classic Swiss grotesque
- **Fallback:** "Arial", system-ui, sans-serif
- **Weight:** 300 light for body, 500 for nav/UI

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| hero h1 | clamp(4rem, 10vw, 10rem) | 900 | Ultra-wide, all caps, bleeds off screen |
| h2 | clamp(2.5rem, 5vw, 5rem) | 700–800 | Section punch |
| h3 | clamp(1.25rem, 2vw, 1.75rem) | 500 | Project callouts |
| body | 1rem | 300–400 | Light weight, generous leading |
| nav | 0.875rem | 500 | Uppercase, tracked wide |
| label | 0.75rem | 400–500 | All caps, 0.1em spacing |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Pure Black | `#000000` | Primary background |
| Near Black | `#0C0C0C` | Card surfaces |
| Off Black | `#111111` | Secondary surfaces |
| Dark Gray | `#1A1A1A` | Borders |
| Mid Gray | `#888888` | Secondary text, meta |
| Light Gray | `#C0C0C0` | Tertiary text |
| Pure White | `#FFFFFF` | Primary text, large type |
| Off White | `#F5F5F5` | Light section backgrounds |

### Accent (Minimal)
| Name | Hex | Usage |
|------|-----|-------|
| Electric Red | `#FF2800` | Active states, hover accents (rare) |
| Warm Yellow | `#F5C400` | Seasonal / project highlights |

### Gradients
- No gradients — flat color philosophy
- **Exception:** subtle `rgba(255,255,255,0.04)` hover sheen on project cards

---

## 4. Layout System

### Container
- **Max-width:** 1440px (nearly full-bleed)
- **Padding:** 0 clamp(24px, 4vw, 80px)

### Grid
- **Columns:** 12
- **Gutter:** 24–40px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1280px, Desktop 1280px+

### Section Spacing
- **Vertical:** 120–160px desktop, 80px tablet, 60px mobile
- **Negative space:** Intentionally excessive — 200px+ blank space used as design element

### Layout Patterns
- Full-bleed hero: large type fills entire viewport width
- Work grid: masonry or asymmetric 2-column project tiles
- Animated text marquee: scrolling project/service names
- Staggered case study list: text-left, date right, hover reveals image
- Footer: spread across full width with minimal navigation

---

## 5. Navigation

- **Style:** Minimal, fixed, nearly invisible
- **Height:** 56px
- **Background:** `rgba(0,0,0,0)` transparent on scroll
- **Logo:** "Locomotive®" wordmark, uppercase, small, left-aligned
- **Links:** 12px uppercase, 500 weight, widely tracked, far right
- **CTA:** "Contact" or cursor-based navigation
- **Mobile:** Hamburger reveals full-screen dark overlay with large type menu items
- **Cursor:** Custom cursor — circle that transforms on hover over interactive elements

---

## 6. Buttons

### Primary CTA
- No traditional button — instead a large text link with arrow
- **Text:** "Let's talk →" in display size, white
- **Hover:** Arrow moves right 8px, line appears under text
- **No rounded corners, no fills** — pure typographic CTA

### Project Link
- List item with text + horizontal rule
- Hover: image preview appears in custom cursor or floating card

### Form Submit
- Minimal: black border, white text, no radius, full-width

---

## 7. Cards & Components

### Project Tile
- **Aspect:** 16:10 image fill
- **Overlay:** None at rest; dark overlay 0→0.6 on hover
- **Text reveal:** Project name + category slides up from bottom on hover
- **No border-radius** — razor-sharp corners
- **No drop shadows** — flat image presentation

### Service List Item
- Horizontal rule above
- Service name in 1.5–2rem, 400 weight
- Hover: subtle background `rgba(255,255,255,0.03)` + text shift right 4px

### Testimonial / Quote
- Large pull-quote format, 2–3rem
- Author below in small caps
- No card treatment — just typography on background

---

## 8. Motion & Animation

### Locomotive Scroll
- Their own library: smooth physics-based scroll with parallax
- Elements translate at 0.2–0.8x scroll speed based on `data-scroll-speed`
- Horizontal scroll sections triggered by vertical scroll

### Page Load
- Site intro: logo letterforms draw in or fade up
- Below-fold: elements stagger reveal with Y transform

### Hero Type
- Large words mask-reveal: text clips into view as if wiped in
- Letter-by-letter or word-by-word stagger: 40ms per item

### Project Hover
- Image scale: 1.0 → 1.04 at 600ms ease
- Float image: appears near cursor, follows cursor with slight lag

### Marquee
- Horizontal scrolling text strip, 20s loop, reverses on hover

### Easing
- Signature: `cubic-bezier(0.76, 0, 0.24, 1)` — fast in, slow out (decelerating)
- Durations: 300ms micro, 600ms standard, 1200ms dramatic reveals

---

## 9. Layout Strategy

**The site is a live case study.** Every scroll interaction, every hover state, every typographic treatment is demonstrating what Locomotive builds. The work grid is the dominant element — everything else frames it. Negative space is generous to the point of discomfort, then a massive headline fills it. The tension between emptiness and type saturation is the visual rhythm.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** Typography at architectural scale. Headlines are so large they become abstract forms — letters cropped by the viewport, running off-screen, stacked like infrastructure. The size differential between the 10vw hero type and the 0.75rem nav labels creates a tension that feels cinematic. Locomotive treats the type grid itself as the layout, not just text inside a layout.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-display: "Monument Extended", "Helvetica Neue", "Arial Black", sans-serif;
  --font-body: "Neue Haas Grotesk", "Helvetica Neue", "Arial", system-ui, sans-serif;

  --font-size-hero: clamp(4rem, 10vw, 10rem);
  --font-size-h1: clamp(3rem, 7vw, 7rem);
  --font-size-h2: clamp(2rem, 4vw, 4.5rem);
  --font-size-h3: clamp(1.25rem, 2vw, 1.75rem);
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-nav: 0.75rem;
  --font-size-label: 0.6875rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  --line-height-hero: 0.92;
  --line-height-tight: 1.0;
  --line-height-normal: 1.65;

  --letter-spacing-hero: -0.02em;
  --letter-spacing-nav: 0.1em;
  --letter-spacing-label: 0.08em;

  /* Colors */
  --color-bg: #000000;
  --color-surface: #0C0C0C;
  --color-surface-mid: #111111;
  --color-border: #1A1A1A;
  --color-border-mid: #2A2A2A;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: #C0C0C0;
  --color-text-muted: #888888;
  --color-text-dark: #000000;

  --color-bg-light: #F5F5F5;

  --color-accent-red: #FF2800;
  --color-accent-yellow: #F5C400;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-30: 120px;
  --space-40: 160px;

  /* Layout */
  --container-max: 1440px;
  --container-padding: clamp(24px, 4vw, 80px);
  --section-padding: 160px;
  --section-padding-tablet: 80px;
  --section-padding-mobile: 60px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-none: none;
  --shadow-hover: 0 24px 64px rgba(0, 0, 0, 0.6);

  /* Nav */
  --nav-height: 56px;
  --nav-bg: transparent;

  /* Transitions — Locomotive style */
  --ease-locomotive: cubic-bezier(0.76, 0, 0.24, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-micro: 200ms;
  --duration-standard: 600ms;
  --duration-dramatic: 1200ms;

  /* Scroll */
  --scroll-speed-slow: 0.2;
  --scroll-speed-mid: 0.5;
  --scroll-speed-fast: 0.8;
}
```

---

## 12. Category Tags

`dark` `creative-agency` `Montreal` `experimental` `editorial-type` `scroll-animation` `black-bg` `portfolio` `architectural-type`
