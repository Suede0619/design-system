# Vercel Design System
**Reference:** vercel.com | Webby Nominee | Stark Monochrome

---

## 1. Overview

Vercel's design system is a study in absolute constraint. Zero color. Pure black and white. No gradients, no accent hues — only contrast ratios and typographic hierarchy doing all the work. The aesthetic communicates infrastructure-grade reliability through visual discipline. If you can't express it in black or white, it doesn't belong on the page.

The recurring triangle motif (from the Vercel logo) appears as a decorative system element — in watermarks, backgrounds, and structural dividers. The terminal/code aesthetic runs throughout, with Geist Mono typeface making every performance stat feel like it came from a CLI.

**Design Principles:**
- Zero color — contrast is the only accent
- Typography as architecture
- Terminal/code aesthetics elevated to marketing
- Performance numbers as decorative elements
- Geometry (triangle) as recurring motif
- Fast → faster → instant

**Primary Use Cases:** Product marketing, developer-facing documentation, pricing, deployment showcases

---

## 2. Typography

### Font Families
```
Primary Display:   Geist Sans (Vercel's own typeface — load from vercel.com/font or npm)
Monospace:         Geist Mono (same family, monospace variant)
Fallback Sans:     -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
Fallback Mono:     "SF Mono", "Fira Code", "Cascadia Code", monospace
```

> **Implementation Note:** Geist is open source. Install via `npm install geist` or load from `https://vercel.com/font`. Both Geist Sans and Geist Mono must be loaded — they are not system fonts.

### Font Weights
```
Regular:    400  — Body text, descriptions
Medium:     500  — Nav, secondary labels, code annotations
SemiBold:   600  — CTA buttons, feature titles, pricing
Bold:       700  — H3–H5 emphasis headings
Black:      900  — H1, Display, hero numerals
```

### Type Scale
```
Display:    72px / 4.5rem   — Hero headlines, performance numbers
H1:         64px / 4rem     — Page headings
H2:         48px / 3rem     — Section headings
H3:         32px / 2rem     — Sub-section headings
H4:         24px / 1.5rem   — Card titles, feature names
H5:         20px / 1.25rem  — Small headings
H6:         16px / 1rem     — Labels, eyebrows
Body LG:    16px / 1rem     — Lead copy (Vercel uses compact body)
Body:       14px / 0.875rem — Default body text
Body SM:    13px / 0.8125rem— Secondary text, captions
Caption:    12px / 0.75rem  — Meta, timestamps, helper
Mono:       14px / 0.875rem — Code, CLI output, build stats
Mono SM:    13px / 0.8125rem— Inline code, terminal hints
```

### Line Heights
```
Display / H1:   1.05  (tight — big numbers and words look best compressed)
H2 / H3:        1.1
H4 / H5:        1.2
Body LG:        1.6
Body:           1.6
Body SM:        1.5
Caption:        1.4
Mono:           1.6
```

### Letter Spacing
```
Display:    -0.04em   (maximal tightening for huge type)
H1:         -0.03em
H2:         -0.02em
H3:         -0.01em
Body:       0em
Caption:    0.01em
Mono:       0em
All-caps:   0.06em
```

---

## 3. Color Palette

Vercel uses precisely two colors. This is not a simplification — it is the entire system.

### Light Mode (Primary)
```
--color-bg:           #FFFFFF   — Page background
--color-bg-secondary: #FAFAFA   — Alternate sections, table rows
--color-bg-muted:     #F2F2F2   — Input backgrounds, code blocks
--color-bg-subtle:    #EDEDED   — Hover states, badges
--color-fg:           #000000   — Primary text, headings
--color-fg-secondary: #666666   — Secondary text, descriptions
--color-fg-tertiary:  #999999   — Muted/disabled text
--color-border:       #EAEAEA   — Default borders
--color-border-strong:#CCCCCC   — Emphasized borders, table lines
```

### Dark Mode
```
--color-bg:           #000000   — Page background (pure black)
--color-bg-secondary: #0A0A0A   — Alternate sections
--color-bg-muted:     #111111   — Input backgrounds, code blocks
--color-bg-subtle:    #1A1A1A   — Hover states, badges
--color-fg:           #FFFFFF   — Primary text
--color-fg-secondary: #888888   — Secondary text
--color-fg-tertiary:  #555555   — Muted/disabled
--color-border:       #333333   — Default borders
--color-border-strong:#444444   — Emphasized borders
```

### Accent (the only exception — used minimally)
```
--color-accent:       #0070F3   — Link color ONLY (blue)
--color-accent-hover: #0060C0   — Link hover
/* This is the ONLY non-monochrome color used — and only for hyperlinks */
```

### Usage Rules
```
NEVER use color for emphasis — use weight, size, or contrast instead
NEVER add gradients, shadows with color, or tints
NEVER add decorative color elements
Vercel blue (#0070F3) appears ONLY on inline text links, never on buttons or backgrounds
Dark mode is default for code-adjacent sections
Light/dark toggle is offered as user preference
```

---

## 4. Layout System

### Container
```
--container-max:        1200px
--container-narrow:     800px    — Blog posts, docs
--container-padding:    20px     — Mobile
--container-padding-md: 48px     — Tablet
--container-padding-lg: 80px     — Desktop
```

### Grid
```
Columns:    12-column
Gap:        24px
Hero:       Single column, centered, max-width 800px for text block
Features:   2 or 3 column grids with equal spacing
Breakpoints:
  --bp-sm:  480px
  --bp-md:  768px
  --bp-lg:  1024px
  --bp-xl:  1200px
```

### Spacing Scale
```
--space-1:    4px   (0.25rem)
--space-2:    8px   (0.5rem)
--space-3:    12px  (0.75rem)
--space-4:    16px  (1rem)
--space-5:    24px  (1.5rem)
--space-6:    32px  (2rem)
--space-7:    40px  (2.5rem)
--space-8:    48px  (3rem)
--space-9:    64px  (4rem)
--space-10:   80px  (5rem)
--space-11:   96px  (6rem)
--space-12:   128px (8rem)
```

### Section Rhythm
```
Hero:             100px top, 80px bottom
Feature sections: 80px vertical
Compact rows:     48px vertical
Card grid gap:    24px
Section dividers: 1px solid --color-border, always
```

---

## 5. Navigation

### Nav Style
```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 64px;
  background: rgba(0, 0, 0, 0.6);   /* dark mode */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid #333333;
  display: flex;
  align-items: center;
}
/* Light mode */
.nav--light {
  background: rgba(255,255,255,0.7);
  border-bottom: 1px solid #EAEAEA;
}
```

### Nav Specs
```
Height:           64px
Logo:             Triangle (▲) in white/black + "Vercel" wordmark
Nav link font:    14px, weight 500, Geist Sans
Nav link color:   #888888 (muted by default)
Nav link hover:   #FFFFFF (dark) / #000000 (light)
Hover transition: 150ms ease
CTA buttons:      See Buttons section (inverted fills)
Separator dots:   2px × 2px circles #333 between nav groups
```

---

## 6. Buttons

Vercel buttons have zero border-radius. Sharp corners. Full stop.

### Primary Button — Dark Mode (black bg)
```css
.btn-primary-dark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  background: #FFFFFF;
  color: #000000;
  font-family: "Geist Sans", sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #FFFFFF;
  border-radius: 0;              /* Sharp corners — never rounded */
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
  white-space: nowrap;
}
.btn-primary-dark:hover {
  background: #CCCCCC;
  border-color: #CCCCCC;
}
```

### Primary Button — Light Mode (white bg)
```css
.btn-primary-light {
  padding: 10px 20px;
  background: #000000;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #000000;
  border-radius: 0;
  cursor: pointer;
  transition: background 150ms ease;
}
.btn-primary-light:hover {
  background: #333333;
  border-color: #333333;
}
```

### Secondary / Ghost Button
```css
.btn-secondary {
  padding: 10px 20px;
  background: transparent;
  color: #FFFFFF;              /* Inverted for dark mode context */
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #333333;
  border-radius: 0;
  cursor: pointer;
  transition: background 150ms ease, border-color 150ms ease;
}
.btn-secondary:hover {
  background: #111111;
  border-color: #555555;
}
/* Light mode variant */
.btn-secondary--light {
  color: #000000;
  border-color: #CCCCCC;
}
.btn-secondary--light:hover {
  background: #F2F2F2;
  border-color: #999999;
}
```

### Button Sizes
```
Large:    padding 12px 24px, font-size 16px
Default:  padding 10px 20px, font-size 14px
Small:    padding 7px 14px,  font-size 13px
All:      border-radius: 0 (zero — always sharp)
```

---

## 7. Cards & Containers

### Default Card
```css
.card {
  background: #0A0A0A;
  border: 1px solid #333333;
  border-radius: 0;          /* No radius anywhere — consistent with button style */
  padding: 24px;
  transition: border-color 150ms ease;
}
.card:hover {
  border-color: #555555;
}
```

### Terminal/CLI Card
```css
.card-terminal {
  background: #000000;
  border: 1px solid #333333;
  padding: 0;
  overflow: hidden;
}
.card-terminal__header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid #333333;
  background: #111111;
}
.card-terminal__dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: #333333;  /* No color — monochrome even here */
}
.card-terminal__title {
  font-family: "Geist Mono", monospace;
  font-size: 12px;
  color: #666666;
}
.card-terminal__body {
  padding: 20px;
  font-family: "Geist Mono", monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #FFFFFF;
}
```

### Performance Counter Card
```css
.card-stat {
  padding: 32px 24px;
  background: #000000;
  border: 1px solid #333333;
  text-align: center;
}
.card-stat__number {
  font-family: "Geist Sans", sans-serif;
  font-size: 72px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #FFFFFF;
}
.card-stat__label {
  font-family: "Geist Mono", monospace;
  font-size: 13px;
  color: #666666;
  margin-top: 8px;
}
```

---

## 8. Forms & Inputs

```css
.input {
  width: 100%;
  padding: 10px 14px;
  background: #111111;
  border: 1px solid #333333;
  border-radius: 0;           /* Sharp — consistent with button/card */
  font-family: "Geist Sans", sans-serif;
  font-size: 14px;
  color: #FFFFFF;
  outline: none;
  transition: border-color 150ms ease;
}
.input::placeholder { color: #555555; }
.input:focus {
  border-color: #FFFFFF;
}
.input:hover:not(:focus) {
  border-color: #555555;
}

/* Light mode */
.input--light {
  background: #FAFAFA;
  border-color: #CCCCCC;
  color: #000000;
}
.input--light::placeholder { color: #999999; }
.input--light:focus { border-color: #000000; }

.input-label {
  display: block;
  font-family: "Geist Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #888888;
  margin-bottom: 6px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

---

## 9. Images & Media

```
Deployment screenshots:
  - Dark terminal windows
  - Geist Mono text rendering
  - No decorative borders
  - Flat placement (no shadows — this is a flat design system)
  - Or: very subtle shadow 0 0 0 1px #333333

Build logs:
  - Black background, monospace green text rarely used
  - More often: white text on black
  - Syntax: minimal — no rainbow syntax highlighting

Triangle motif usage:
  - Background texture: repeating triangles at opacity 0.04
  - Section watermarks: large ▲ at opacity 0.03
  - Decorative rule: ▲▲▲ row as section separator

Hero section:
  - Pure type on black background
  - No photography in hero
  - Performance numbers in huge type ARE the visual

Video:
  - Build time demos, deployment animations
  - No color overlays — black and white only
  - Autoplay, muted, loop
```

---

## 10. Animation & Motion

### Philosophy
Vercel animations are functional, not expressive. They communicate state change (deploying, building, streaming) rather than delight. The exception is the logo triangle, which has subtle pulse animations.

### Easing
```css
--ease-default:   cubic-bezier(0.4, 0, 0.2, 1)
--ease-in:        cubic-bezier(0.4, 0, 1, 1)
--ease-out:       cubic-bezier(0, 0, 0.2, 1)
--ease-linear:    linear   /* Build progress bars */
```

### Duration
```
--dur-instant:   100ms
--dur-fast:      150ms   — ALL hover transitions (Vercel is fast)
--dur-base:      250ms
--dur-slow:      400ms
```

### Build Progress Animation
```css
@keyframes deploy-progress {
  from { width: 0%; }
  to   { width: 100%; }
}
.progress-bar {
  height: 2px;
  background: #FFFFFF;
  animation: deploy-progress 3s ease-in-out;
}
```

### Triangle Pulse (logo/decorative)
```css
@keyframes tri-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}
.logo-triangle {
  animation: tri-pulse 2s ease-in-out infinite;
}
```

### Text Typing / Streaming
```css
@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.cursor {
  display: inline-block;
  width: 2px; height: 1em;
  background: #FFFFFF;
  margin-left: 2px;
  animation: cursor-blink 1s step-end infinite;
}
```

---

## 11. Icons & Decorative Elements

```
Icon Style:   Vercel uses minimal, crisp icons — geometric, thin stroke (1px)
              All white on dark, all black on light
Icon Sizes:   12px (tiny inline), 16px (UI), 20px (feature), 24px (section)
No color:     Icons are strictly monochrome

Triangle System:
  ▲ — Used as logo, decorative watermark, bullet point, separator
  Size range: 10px (list bullets) → 400px (section watermarks)
  Opacity rules:
    Watermarks: 0.03 (barely visible)
    Decorative: 0.08
    UI elements: 0.5–1.0

Performance Numbers:
  - Build time comparisons: "0.7s" in Geist Mono, white, huge
  - Uptime stats: "99.99%" in giant type
  - Request counts: animated counters using CSS counter or JS
  These ARE the decorative design elements

Separator style:
  ▲ ─────────────────── ▲
  Center triangle with horizontal rules extending from both sides
```

---

## 12. Unique Signature

**Absolute Monochrome + Performance Numbers as Design**

Vercel's singular fingerprint is using raw performance data as the primary visual element. Where other sites use photography, illustrations, or gradient graphics, Vercel puts "0.7s" in 72px Geist Sans Bold, white on black, and lets that be the hero.

The zero-color constraint is so absolute and so consistently maintained that it functions as a brand statement: *we don't need decoration because the work speaks for itself.* The recurring triangle (▲) is the only shape in the entire system, used at wildly different scales from 12px bullets to 300px watermarks.

This is a design system that says: *performance is the aesthetic.*

```css
/* The performance number treatment */
.perf-number {
  font-family: "Geist Sans", sans-serif;
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: #FFFFFF;
}
.perf-label {
  font-family: "Geist Mono", monospace;
  font-size: 13px;
  color: #666666;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 8px;
}
```

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Light Mode Backgrounds */
  --color-bg:                #FFFFFF;
  --color-bg-secondary:      #FAFAFA;
  --color-bg-muted:          #F2F2F2;
  --color-bg-subtle:         #EDEDED;

  /* Light Mode Text */
  --color-fg:                #000000;
  --color-fg-secondary:      #666666;
  --color-fg-tertiary:       #999999;

  /* Light Mode Borders */
  --color-border:            #EAEAEA;
  --color-border-strong:     #CCCCCC;

  /* Dark Mode Backgrounds */
  --color-bg-dark:           #000000;
  --color-bg-dark-secondary: #0A0A0A;
  --color-bg-dark-muted:     #111111;
  --color-bg-dark-subtle:    #1A1A1A;

  /* Dark Mode Text */
  --color-fg-dark:           #FFFFFF;
  --color-fg-dark-secondary: #888888;
  --color-fg-dark-tertiary:  #555555;

  /* Dark Mode Borders */
  --color-border-dark:       #333333;
  --color-border-dark-strong:#444444;

  /* The only accent color */
  --color-accent:            #0070F3;
  --color-accent-hover:      #0060C0;

  /* Typography */
  --font-sans:               "Geist Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono:               "Geist Mono", "SF Mono", "Fira Code", monospace;

  --text-display:            4.5rem;   /* 72px */
  --text-h1:                 4rem;     /* 64px */
  --text-h2:                 3rem;     /* 48px */
  --text-h3:                 2rem;     /* 32px */
  --text-h4:                 1.5rem;   /* 24px */
  --text-h5:                 1.25rem;  /* 20px */
  --text-body-lg:            1rem;     /* 16px */
  --text-body:               0.875rem; /* 14px */
  --text-body-sm:            0.8125rem;/* 13px */
  --text-caption:            0.75rem;  /* 12px */
  --text-mono:               0.875rem; /* 14px */

  --leading-tight:           1.05;
  --leading-snug:            1.1;
  --leading-normal:          1.6;

  --tracking-display:        -0.04em;
  --tracking-heading:        -0.02em;
  --tracking-body:           0em;
  --tracking-label:          0.06em;

  /* Spacing */
  --space-1:                 0.25rem;  /* 4px */
  --space-2:                 0.5rem;   /* 8px */
  --space-3:                 0.75rem;  /* 12px */
  --space-4:                 1rem;     /* 16px */
  --space-5:                 1.5rem;   /* 24px */
  --space-6:                 2rem;     /* 32px */
  --space-7:                 2.5rem;   /* 40px */
  --space-8:                 3rem;     /* 48px */
  --space-9:                 4rem;     /* 64px */
  --space-10:                5rem;     /* 80px */
  --space-11:                6rem;     /* 96px */
  --space-12:                8rem;     /* 128px */

  /* Layout */
  --container-max:           1200px;
  --container-narrow:        800px;
  --container-padding:       1.25rem;

  /* Borders — NO radius anywhere */
  --radius:                  0;

  /* Shadows — kept minimal, no color */
  --shadow-subtle:           0 0 0 1px #333333;
  --shadow-sm:               0 1px 4px rgba(0,0,0,0.3);
  --shadow-md:               0 4px 16px rgba(0,0,0,0.4);

  /* Animation */
  --ease-default:            cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:                cubic-bezier(0, 0, 0.2, 1);
  --ease-linear:             linear;

  --dur-instant:             100ms;
  --dur-fast:                150ms;
  --dur-base:                250ms;
  --dur-slow:                400ms;

  /* Navigation */
  --nav-height:              64px;
  --nav-bg-dark:             rgba(0,0,0,0.60);
  --nav-bg-light:            rgba(255,255,255,0.70);
  --nav-blur:                blur(8px);

  /* Z-Index */
  --z-raised:                10;
  --z-overlay:               50;
  --z-nav:                   100;
  --z-modal:                 200;
  --z-toast:                 300;
}

/* Dark mode media query */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:              var(--color-bg-dark);
    --color-fg:              var(--color-fg-dark);
    --color-border:          var(--color-border-dark);
  }
}
```
