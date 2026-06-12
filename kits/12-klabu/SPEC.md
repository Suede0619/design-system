# KLABU — Design System Reference
**Source:** klabu.org
**Awards:** Webby People's Voice Award 2025 (Activism / Nonprofit)
**Category:** Social Impact / Sports / Humanitarian
**Last Referenced:** 2026-03-31

---

## 1. Overview

KLABU is a nonprofit that builds sport clubs in refugee camps, and their website is one of the most visually arresting examples of design as advocacy on the internet. It won the 2025 Webby People's Voice Award because it doesn't ask for sympathy — it demands attention. The design system is built on urgency: bold colors, maximum contrast, athletic proportions, and impact metrics that force you to reckon with scale.

Key principles:
- **Urgency over elegance** — high contrast, bold type, and signal colors communicate that something real is happening
- **Sport as visual language** — condensed athletic typography, bold geometric shapes, and kinetic energy
- **Data as storytelling** — impact numbers animate and grow; statistics are the emotional core
- **Split thinking** — split-screen layouts mirror the "two worlds" theme (refugee camps / sporting hope)
- **No apology aesthetics** — nothing is soft, rounded, or neutral; this is a call to action

The site successfully applies the visual grammar of sports branding (think Nike or Adidas campaign pages) to humanitarian work — a calculated and powerful choice that commands attention from audiences who would skim a conventional charity site.

---

## 2. Typography

### Font Stack
```
--font-heading: "Barlow Condensed", "Arial Narrow", Impact, sans-serif;
--font-body:    "Barlow", "Barlow Semi Condensed", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
```

**Barlow Condensed** (Jeremy Tribby) is the primary brand voice — a grotesque condensed sans designed for athletic and display contexts. At weight 700 (Bold), it achieves the visual mass of a poster headline while remaining highly legible at large sizes.

**Barlow** (regular, non-condensed) serves as body text and supporting copy.

### Type Scale

| Role             | Font              | Size             | Weight | Line Height | Letter Spacing |
|------------------|-------------------|------------------|--------|-------------|----------------|
| Hero Display     | Barlow Condensed  | 120px / 7.5rem  | 700    | 0.9         | -0.01em        |
| Impact Stat      | Barlow Condensed  | 96px / 6rem     | 800    | 0.85        | -0.015em       |
| Section Heading  | Barlow Condensed  | 64px / 4rem     | 700    | 0.95        | -0.01em        |
| Feature Heading  | Barlow Condensed  | 40px / 2.5rem   | 700    | 1.0         | 0em            |
| Subheading       | Barlow Condensed  | 28px / 1.75rem  | 600    | 1.1         | 0em            |
| Body Default     | Barlow            | 18px / 1.125rem | 400    | 1.6         | 0.01em         |
| Body Small       | Barlow            | 16px / 1rem     | 400    | 1.55        | 0.01em         |
| Label / Tag      | Barlow Condensed  | 13px / 0.8125rem | 700   | 1.3         | 0.1em          |
| Caption          | Barlow            | 14px / 0.875rem | 400    | 1.5         | 0.02em         |
| Counter / Stat   | Barlow Condensed  | 80px / 5rem     | 800    | 1.0         | -0.01em        |

### Type Behavior
- All headings use `text-transform: uppercase` — no exceptions
- Impact stats and counters use tabular numbers (`font-variant-numeric: tabular-nums`)
- Body copy is left-aligned; headlines may be centered in hero contexts
- Wide letter spacing (0.1em) on labels creates visual breathing room within dense layouts
- No italic in the primary brand voice

---

## 3. Color Palette

### Core Palette

| Name            | Hex       | RGB                  | Usage                                                     |
|-----------------|-----------|----------------------|-----------------------------------------------------------|
| Electric Blue   | `#0066FF` | rgb(0, 102, 255)     | Primary brand color; CTAs, accents, highlighted sections  |
| Signal Red      | `#FF3333` | rgb(255, 51, 51)     | Urgency accent; alerts, impact stats, secondary CTAs      |
| White           | `#FFFFFF` | rgb(255, 255, 255)   | Primary text on dark backgrounds; white sections          |
| Near Black      | `#1A1A1A` | rgb(26, 26, 26)      | Primary dark background; text on light sections           |
| Blue Dark       | `#0052CC` | rgb(0, 82, 204)      | Button hover state; pressed blue                          |
| Red Dark        | `#CC2222` | rgb(204, 34, 34)     | Signal red hover / pressed                                |
| Blue Tint       | `#E5EEFF` | rgb(229, 238, 255)   | Light blue section backgrounds; infographic fills         |
| Mid Gray        | `#666666` | rgb(102, 102, 102)   | Secondary text on white sections                          |
| Light Gray      | `#F0F0F0` | rgb(240, 240, 240)   | Dividers, inactive progress bars, background fills        |

### Contextual Color Roles

| Role                | Value       | Notes                                                 |
|---------------------|-------------|-------------------------------------------------------|
| Primary Background  | `#1A1A1A`   | Dark sections; most of the site lives dark            |
| Light Section Bg    | `#FFFFFF`   | Stats sections, partner logos, newsletter             |
| Brand Accent        | `#0066FF`   | Primary CTA, highlighted numbers, hover states        |
| Urgency Accent      | `#FF3333`   | Secondary CTA, alerts, "critical" statistics          |
| Primary Text (dark) | `#FFFFFF`   | On `#1A1A1A` or `#0066FF` backgrounds                |
| Primary Text (light)| `#1A1A1A`   | On white sections                                     |
| Progress Bar Fill   | `#0066FF`   | Active progress; background is `#F0F0F0`              |
| Card Border         | `#0066FF` / `#FF3333` | 3–4px solid border on feature cards       |

---

## 4. Layout System

### Container
```css
--container-max: 1280px;
--container-padding-x: 40px;
--container-padding-x-md: 24px;
--container-padding-x-sm: 16px;
```

### Grid
```css
/* 12-column grid */
--grid-columns: 12;
--grid-gap: 24px;

/* Split screen (signature layout) */
/* Each half: 6 columns, 0 gap between halves */

/* 2-up cards: each span 6 */
/* 3-up cards: each span 4 */
/* Stat blocks: 4 per row (span 3 each) */
/* Hero full: span 12 */
```

### Split-Screen Layout
The defining structural element of KLABU's design:
```css
.split-screen {
  display: grid;
  grid-template-columns: 1fr 1fr;   /* 50/50 */
  min-height: 100vh;
  gap: 0;                            /* No gap — panels touch */
}

.split-screen__panel--left {
  background: #1A1A1A;
  padding: 80px 64px;
}

.split-screen__panel--right {
  background: #0066FF;
  padding: 80px 64px;
}
```

### Spacing Scale
```
--space-4:   4px
--space-8:   8px
--space-12:  12px
--space-16:  16px
--space-24:  24px
--space-32:  32px
--space-48:  48px
--space-64:  64px
--space-80:  80px
--space-96:  96px
--space-120: 120px
```

### Section Padding
- **Standard:** 80px top/bottom
- **Hero/split:** full viewport height (100vh)
- **Stat sections:** 96px top/bottom
- **Mobile:** 48px top/bottom

---

## 5. Navigation

### Structure
Fixed top navigation, full-width, 64px height.

```
[KLABU]   [About] [Impact] [The Clubs] [Join]   [Donate →]
```

### Visual Treatment
- **Background:** `#1A1A1A` — always dark, no transparency variant
- **Logo:** All-caps wordmark, white, bold
- **Nav links:** Barlow Condensed, 14px, uppercase, weight 600, white, letter-spacing 0.08em
- **Active state:** Electric blue (`#0066FF`) text
- **Donate CTA:** Blue button (`#0066FF`), no border-radius (4px), padding 10px 20px; same as primary button
- No hover underlines — color shift to `#0066FF`

### Mobile Navigation
- Hamburger at 768px breakpoint — two thick bars (3px stroke), white
- Full-screen overlay, `#1A1A1A` background
- Large tap targets, 60px height per item
- Links: 36px Barlow Condensed, uppercase, white
- Donate button at bottom of overlay, full-width, `#0066FF`

---

## 6. Buttons

### Primary CTA — Blue Filled
```css
.btn-primary {
  background-color: #0066FF;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 16px 32px;
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;
  display: inline-block;
}

.btn-primary:hover  { background-color: #0052CC; }
.btn-primary:active { transform: scale(0.98); background-color: #003D99; }
```

### Secondary CTA — Red Filled
```css
.btn-secondary {
  background-color: #FF3333;
  color: #FFFFFF;
  border: none;
  border-radius: 4px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background-color 0.15s ease;
}

.btn-secondary:hover { background-color: #CC2222; }
```

### Ghost Button
```css
.btn-ghost {
  background-color: transparent;
  color: #FFFFFF;
  border: 2px solid #FFFFFF;
  border-radius: 4px;
  padding: 14px 30px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: all 0.15s ease;
}

.btn-ghost:hover {
  background-color: #FFFFFF;
  color: #1A1A1A;
}
```

### Donate Button (special)
- Same as primary but with `→` arrow suffix
- `padding: 16px 40px` (extra right padding for arrow)
- Arrow is part of the text content, not a pseudo-element

---

## 7. Cards & Containers

### Impact Card (with thick border)
```css
.impact-card {
  background: #1A1A1A;
  border: 4px solid #0066FF;      /* Thick blue border — signature element */
  border-radius: 0;               /* Square corners */
  padding: 40px 32px;
  position: relative;
}

.impact-card--red {
  border-color: #FF3333;
}

.impact-card__stat {
  font-family: var(--font-heading);
  font-size: 64px;
  font-weight: 800;
  color: #0066FF;
  line-height: 1;
  margin-bottom: 8px;
}

.impact-card__label {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FFFFFF;
}
```

### Story / Club Card
```css
.club-card {
  background: #1A1A1A;
  border: 3px solid #0066FF;
  overflow: hidden;
  border-radius: 0;
}

.club-card__image {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
  filter: grayscale(30%);
  transition: filter 0.3s ease;
}

.club-card:hover .club-card__image {
  filter: grayscale(0%);
}

.club-card__body {
  padding: 24px;
}
```

### Progress Bar Container
```css
.progress-bar {
  background: #F0F0F0;
  border-radius: 2px;
  height: 8px;
  width: 100%;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background: #0066FF;
  border-radius: 2px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.progress-bar__fill.in-view {
  transform: scaleX(var(--progress));  /* CSS var set inline, e.g. 0.73 */
}
```

---

## 8. Forms & Inputs

### Text Input
```css
.input-field {
  background: #2A2A2A;
  border: 2px solid #444444;
  border-radius: 4px;
  padding: 14px 16px;
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
}

.input-field:focus {
  border-color: #0066FF;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.2);
}

.input-field::placeholder {
  color: #666666;
}
```

### Form Label
```css
.form-label {
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #FFFFFF;
  display: block;
  margin-bottom: 8px;
}
```

### Donation Amount Select (custom pill group)
```css
.amount-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.amount-btn {
  border: 2px solid #444444;
  border-radius: 4px;
  background: transparent;
  color: #FFFFFF;
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 700;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.15s ease;
}

.amount-btn.selected,
.amount-btn:hover {
  border-color: #0066FF;
  background: #0066FF;
}
```

---

## 9. Images & Media

### Photography Style
KLABU uses documentary and sports photography — authentic, high-contrast, kinetic. Images feel grabbed-from-real-life rather than art-directed. This creates emotional immediacy.

### Image Treatment
```css
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.85) contrast(1.1);  /* Slightly punched-up contrast */
}
```

### Duotone Overlay (signature graphic treatment)
```css
.image-duotone {
  position: relative;
  overflow: hidden;
}

.image-duotone::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 102, 255, 0.3) 0%,
    rgba(0, 0, 0, 0) 60%
  );
  mix-blend-mode: color;
  pointer-events: none;
}
```

### Video
- Autoplay background video on hero sections
- Muted, looped, with strong overlaid text
- Video tinted dark: `filter: brightness(0.5)` before overlay
- Fallback poster image required

### Split-Screen Media
- Left panel: photography or video
- Right panel: blue (`#0066FF`) with white text and CTA
- On mobile: stacks vertically, image first

---

## 10. Animation & Motion

### Core Easing
```css
--ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
--ease-energetic: cubic-bezier(0.34, 1.56, 0.64, 1);  /* slight overshoot */
```

### Counter Animation (impact numbers)
```js
// Animated number counters — count from 0 to target value when in viewport
function animateCounter(el, target, duration = 2000) {
  const start = performance.now();
  const update = (time) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}
```

### Scroll Reveal
```css
.reveal-left {
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.reveal-right {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

.reveal-left.visible,
.reveal-right.visible {
  opacity: 1;
  transform: translateX(0);
}
```

### Hover Interactions
- Cards: `transform: translateY(-4px)`, `box-shadow: 0 8px 24px rgba(0,102,255,0.3)`; 0.2s
- Buttons: scale(0.98) on active, no hover lift
- Images: subtle brightness increase on hover

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .reveal-left, .reveal-right {
    opacity: 1;
    transform: none;
    transition: none;
  }
  /* Counter: show final value immediately */
}
```

---

## 11. Icons & Decorative Elements

### Icon System
- Custom SVG icon set, 24px base grid
- Bold stroke: 2–2.5px (heavier than typical; matches brand energy)
- Color: `#FFFFFF` on dark backgrounds, `#1A1A1A` on white
- Active/highlighted: `#0066FF`

### Sport Icons
- Custom set including: football, basketball, running figure, trophy, handshake
- Used at 40–64px in feature sections
- White on blue background, or blue on dark background

### Decorative Elements
- **Thick border accent:** 4px solid `#0066FF` on left edge of quote blocks
- **Section divider:** full-bleed `#0066FF` background strip, 8px height between sections
- **Dots/counters:** Numbered circles, 32px diameter, filled `#0066FF`, white text
- **Flag/country markers:** Small rectangle flags for camp locations in the map section

### Typography as Decoration
Large background text (opacity 0.05–0.08) in Barlow Condensed used behind sections:
```css
.bg-text {
  position: absolute;
  font-family: var(--font-heading);
  font-size: 200px;
  font-weight: 800;
  text-transform: uppercase;
  color: #FFFFFF;
  opacity: 0.05;
  pointer-events: none;
  user-select: none;
  white-space: nowrap;
}
```

---

## 12. Unique Signature

KLABU's design is instantly recognizable and unlike any other nonprofit site:

1. **Athletic typography at scale** — Barlow Condensed 700–800 at 80–120px is the voice of stadium scoreboards and sports posters, deployed for humanitarian numbers; the cognitive dissonance is intentional and effective
2. **The 50/50 split screen** — no other major nonprofit uses this as a primary layout device; it creates a sense of two parallel realities, which mirrors KLABU's mission perfectly
3. **Thick border cards** — 3–4px solid borders in `#0066FF` or `#FF3333` with no radius; it's structural and graphic, like scoreboard panels
4. **Animated counters** — numbers that count up from zero when entering viewport; in a sector full of static statistics, this creates genuine dramatic tension
5. **No apology color palette** — most charity sites use safe colors (green, warm orange); KLABU's electric blue and signal red are sports brand colors repurposed for social impact
6. **Progress bars as visual storytelling** — the scale of work shown as filling bars creates immediate visual comprehension of scope

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-heading: "Barlow Condensed", "Arial Narrow", Impact, sans-serif;
  --font-body: "Barlow", "Barlow Semi Condensed", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;

  --text-hero: 7.5rem;       /* 120px */
  --text-stat: 6rem;         /* 96px */
  --text-section: 4rem;      /* 64px */
  --text-feature: 2.5rem;    /* 40px */
  --text-subheading: 1.75rem; /* 28px */
  --text-body: 1.125rem;     /* 18px */
  --text-body-sm: 1rem;      /* 16px */
  --text-label: 0.8125rem;   /* 13px */
  --text-counter: 5rem;      /* 80px */

  --weight-regular: 400;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;

  --leading-display: 0.9;
  --leading-heading: 0.95;
  --leading-body: 1.6;

  --tracking-heading: -0.01em;
  --tracking-label: 0.1em;
  --tracking-btn: 0.06em;

  /* Colors */
  --color-blue: #0066FF;
  --color-blue-dark: #0052CC;
  --color-blue-darker: #003D99;
  --color-blue-tint: #E5EEFF;
  --color-red: #FF3333;
  --color-red-dark: #CC2222;
  --color-white: #FFFFFF;
  --color-black: #1A1A1A;
  --color-bg-dark: #2A2A2A;
  --color-gray-mid: #666666;
  --color-gray-light: #F0F0F0;
  --color-border-dark: #444444;

  /* Semantic Roles */
  --color-bg: #1A1A1A;
  --color-bg-light: #FFFFFF;
  --color-text-primary: #FFFFFF;
  --color-text-on-light: #1A1A1A;
  --color-accent: #0066FF;
  --color-urgency: #FF3333;

  /* Layout */
  --container-max: 1280px;
  --container-padding-x: 40px;
  --nav-height: 64px;
  --grid-columns: 12;
  --grid-gap: 24px;

  /* Spacing */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 80px;
  --space-96: 96px;
  --space-120: 120px;

  /* Section Padding */
  --section-padding: 80px;
  --section-padding-hero: 100vh;

  /* Borders */
  --border-card: 4px solid #0066FF;
  --border-card-red: 4px solid #FF3333;
  --radius: 4px;
  --radius-none: 0px;

  /* Buttons */
  --btn-padding: 16px 32px;
  --btn-font-size: 1rem;
  --btn-font-weight: 700;
  --btn-letter-spacing: 0.06em;
  --btn-radius: 4px;
  --btn-primary-bg: #0066FF;
  --btn-primary-bg-hover: #0052CC;
  --btn-secondary-bg: #FF3333;
  --btn-secondary-bg-hover: #CC2222;

  /* Animation */
  --ease-out: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-energetic: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 0.15s;
  --duration-normal: 0.3s;
  --duration-slow: 0.6s;
  --duration-counter: 2000ms;

  /* Navigation */
  --nav-bg: #1A1A1A;
  --nav-font-size: 0.875rem;
  --nav-font-weight: 600;
}
```
