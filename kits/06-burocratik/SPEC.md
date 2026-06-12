# Bürocratik — Design System

## 1. Overview

- **Site:** burocratik.com
- **Award:** CSSDA Best Agency + EDAwards #1 Europe 2021–2025
- **What makes it special:** A bold editorial portfolio that treats the agency itself as a publication. Every section reads like a manifesto — numbered, declarative, and unapologetically confident. The work is secondary to the conviction behind it.
- **Aesthetic:** Editorial maximalism in monochrome. Oversized typography dominates every viewport. Black and white create absolute contrast, punctuated by rare, deliberate color accents that hit like exclamation marks. The layout breaks conventions — text overlaps, numbers anchor sections, and whitespace is weaponized.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Neue Montreal" (or equivalent neo-grotesque with personality — wider than Helvetica, sharper than Grotesk)
- **Weight:** 700 (Bold) for display, 900 (Black) for impact moments
- **Size range:** 80px–200px (clamp(5rem, 12vw, 12.5rem))
- **Letter-spacing:** -0.04em (extremely tight for oversized display)
- **Text-transform:** uppercase for manifesto headers, mixed for content

### Body Font
- **Family:** "Neue Montreal"
- **Weight:** 400 (Regular)
- **Size:** 18px / 1.125rem
- **Line-height:** 1.65

### Caption / UI Font
- **Family:** "Neue Montreal"
- **Weight:** 500 (Medium)
- **Size:** 12px / 0.75rem
- **Letter-spacing:** 0.1em
- **Text-transform:** uppercase

### Heading Hierarchy
| Level | Size | Weight | Letter-spacing | Transform |
|-------|------|--------|----------------|-----------|
| h1 | 160px / 10rem | 900 | -0.04em | uppercase |
| h2 | 96px / 6rem | 700 | -0.03em | uppercase |
| h3 | 56px / 3.5rem | 700 | -0.02em | none |
| h4 | 32px / 2rem | 600 | -0.01em | none |
| h5 | 24px / 1.5rem | 500 | 0 | none |
| h6 | 14px / 0.875rem | 500 | 0.1em | uppercase |

### Special Text Treatments
- **Outlined text:** -webkit-text-stroke 2px, no fill — used for massive background words
- **Split-line headers:** Each word on its own line, stacked left-aligned, creating vertical rhythm
- **Numbered sections:** Oversized number (200px+, outlined) paired with section title
- **Marquee text:** Infinitely scrolling horizontal text strip at 48px, dividing sections

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Black | `#000000` | Primary background, text |
| White | `#FFFFFF` | Primary background alt, text on dark |
| Accent Red | `#FF3D3D` | Rare accent, hover states, highlights |
| Dark Grey | `#1A1A1A` | Elevated dark surfaces |
| Mid Grey | `#888888` | Secondary text, muted content |

### Background Colors
- **Primary dark:** `#000000`
- **Primary light:** `#FFFFFF`
- **Sections alternate between pure black and pure white** — no grey backgrounds
- **Rare accent section:** `#FF3D3D` (red background with white text — used once per page max)

### Text Colors
- **On white:** `#000000`
- **On black:** `#FFFFFF`
- **Secondary:** `#888888`
- **Muted:** `#555555`
- **Accent:** `#FF3D3D`

### Accent / CTA Colors
- **Primary accent:** `#FF3D3D`
- **Hover:** `#FF5555`
- **Used with extreme restraint** — never more than one red element visible at a time

### Gradients
- **None.** Flat color only. Gradients would undermine the brutalist editorial approach.

### Color Usage Rules
- The palette is binary: black or white. Period.
- Red appears ONLY for: one CTA per page, hover state highlights, and the occasional accent section
- Grey is for secondary information — never for backgrounds or major elements
- If you're considering adding a color, don't. Remove something instead.

---

## 4. Layout System

### Container
- **Max-width:** 1600px (wider than typical to accommodate oversized type)
- **Padding:** 0 clamp(24px, 4vw, 64px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:**
  - Mobile: 0–767px
  - Tablet: 768px–1199px
  - Desktop: 1200px+

### Section Spacing
- **Section padding:** 160px 0 (desktop), 100px 0 (tablet), 64px 0 (mobile)
- **Between components:** 80px
- **Spacing scale:** 8, 16, 24, 32, 48, 64, 80, 120, 160

### Content Alignment
- Hero: left-aligned, oversized type fills the viewport
- Manifesto sections: numbered, left-aligned, with generous right margin
- Work/portfolio: full-width image grid, asymmetric layout
- Testimonials: centered, large quote with source below
- Services: numbered list, full-width rows

### Responsive Behavior
- Typography scales dramatically — h1 drops from 160px to 48px
- The editorial impact is maintained at all sizes by keeping headlines full-width
- Layouts simplify to single-column stacks on mobile
- Marquee strips remain at all breakpoints

---

## 5. Navigation

- **Style:** Fixed minimal bar, transparent over content
- **Height:** 72px desktop, 56px mobile
- **Font:** "Neue Montreal", 13px, 500 weight, uppercase, letter-spacing 0.08em
- **Active state:** `#FF3D3D` dot (6px circle) next to active link
- **Hover:** Text color transition to `#FF3D3D`, 200ms
- **Mobile:** Full-screen overlay, black bg, centered links at 48px, staggered reveal
- **Logo:** Left-aligned, "BÜROCRATIK" wordmark, 700 weight, 16px, uppercase, 0.1em spacing
- **Menu trigger:** "MENU" text label (not hamburger icon), right-aligned, uppercase, 13px

---

## 6. Buttons

### Primary Button
- **Background:** `#000000` (on white sections) / `#FFFFFF` (on black sections)
- **Text:** Inverse of background, 13px, 600 weight, uppercase, letter-spacing 0.08em
- **Padding:** 16px 40px
- **Border-radius:** 0px
- **Hover:** Background `#FF3D3D`, text `#FFFFFF`, 200ms

### Outline Button
- **Background:** transparent
- **Border:** 2px solid currentColor
- **Text:** currentColor, same specs
- **Hover:** Background fills currentColor, text inverts, 200ms

### Ghost Button
- **Background:** transparent
- **Border:** none
- **Text:** currentColor, 13px, 500 weight, uppercase
- **Hover:** `#FF3D3D` text, optional underline
- **Arrow:** Right arrow, animates 8px right on hover

### CTA Button
- **Background:** `#FF3D3D`
- **Text:** `#FFFFFF`, 15px, 600 weight, uppercase
- **Padding:** 20px 56px
- **Hover:** Background `#FF5555`, 200ms

### Icon Button
- **Size:** 48px × 48px
- **Background:** transparent
- **Border:** 2px solid currentColor
- **Border-radius:** 50%
- **Icon:** 18px
- **Hover:** Background fills, icon inverts, 200ms

---

## 7. Cards & Containers

### Project Card
- **Background:** none — full-bleed image
- **Border-radius:** 0px
- **Aspect ratio:** 16:9 or 4:3
- **Overlay:** Black at 0% opacity, transitions to 60% on hover
- **Hover:** Overlay appears, project title and category fade in (centered, white text), image scale(1.02), 400ms
- **Title font:** 32px, 700 weight
- **Category:** 12px, uppercase, `#888888`

### Service Card (Row)
- **Background:** transparent
- **Border-top:** 1px solid `#333333` (on dark) / `#CCCCCC` (on light)
- **Padding:** 40px 0
- **Layout:** Number (left, 48px outlined) + Service name (center, 32px, 600) + Arrow (right)
- **Hover:** Number fills with `#FF3D3D`, service name slides right 8px, arrow animates

### Testimonial Card
- **Background:** transparent
- **Quote:** 40px, 400 weight, centered, max-width 800px
- **Source:** 14px, 500 weight, uppercase, `#888888`, centered below
- **Decorative:** Oversized quotation mark, 120px, `#333333`, centered above

### Stats Card
- **Number:** 120px, 900 weight, `#000000` / `#FFFFFF`
- **Label:** 12px, uppercase, `#888888`, 0.1em spacing
- **Layout:** Vertical stack, centered
- **Divider:** 1px line between stats in a row

---

## 8. Forms & Inputs

### Input Field
- **Background:** transparent
- **Border:** none (bottom only — 2px solid currentColor)
- **Padding:** 16px 0
- **Font:** 18px, 400 weight
- **Placeholder:** `#888888`

### Focus State
- **Border-bottom:** 2px solid `#FF3D3D`
- **Transition:** 200ms

### Label
- **Position:** above input
- **Font:** 12px, 500 weight, uppercase, `#888888`, letter-spacing 0.1em
- **Margin-bottom:** 8px

### Error State
- **Border-bottom:** 2px solid `#FF3D3D`
- **Error text:** 12px, `#FF3D3D`

### Select / Dropdown
- **Same bottom-border style**
- **Custom chevron:** 14px
- **Dropdown panel:** Solid background (matches section), no radius

### Checkbox / Radio
- **Size:** 20px × 20px
- **Border:** 2px solid currentColor
- **Border-radius:** 0px (checkbox), 50% (radio)
- **Checked:** `#FF3D3D` fill, white checkmark

---

## 9. Images & Media

### Image Treatment
- **Corners:** 0px always — brutalist aesthetic
- **Shadows:** None
- **Overlays:** Black overlay on hover for portfolio items
- **Filters:** None — full color photography

### Aspect Ratios
- Portfolio: 16:9 or 4:3 (mixed for visual interest)
- Team: 1:1
- Full-bleed: edge-to-edge, 60vh height
- Detail: 3:2

### Image Hover
- Overlay + title reveal, 400ms ease
- Slight scale(1.02), contained in overflow:hidden

### Video Treatment
- Inline video for case studies, autoplay muted loop
- Full-width, no rounded corners
- Minimal custom controls on click

### Illustration Style
- N/A — photography and bold type are the visual language. No illustrations.

---

## 10. Animation & Motion

### Page Transitions
- **Style:** Wipe transition — black screen slides across from left to right, then reveals new page
- **Duration:** 600ms total (300ms in, 300ms out)
- **Easing:** cubic-bezier(0.7, 0, 0.3, 1)

### Scroll Animations
- **Fade-up:** Y: 48px → 0, opacity 0 → 1, 600ms
- **Stagger:** 100ms between siblings
- **Text reveal:** Lines animate in one by one from bottom, 400ms each, staggered
- **Parallax:** Minimal — images at 0.9x scroll speed for subtle depth
- **Marquee:** Continuous horizontal scroll, 40px/second, infinite loop
- **Number counter:** Stats count up when scrolled into view

### Hover Micro-interactions
- **Portfolio cards:** Overlay + text appear, 400ms
- **Service rows:** Content shifts right, number fills, 300ms
- **Buttons:** Background swap + color invert, 200ms
- **Navigation:** Color transition, 200ms

### Loading States
- **Page load:** Black screen, "BÜROCRATIK" wordmark animates in letter-by-letter (50ms each)
- **Content skeleton:** Not used — content reveals via scroll animation
- **Progress:** Thin 2px line at top of viewport, `#FF3D3D`

### Timing Functions
- **Default:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Dramatic:** cubic-bezier(0.7, 0, 0.3, 1)
- **Text reveal:** cubic-bezier(0.16, 1, 0.3, 1)

### Performance Notes
- Marquee uses CSS `animation` with `translateX`, not JS
- Text reveals use `clip-path` for GPU acceleration
- IntersectionObserver for scroll triggers, not scroll events
- Reduce motion: disable marquee, wipe transitions → simple fade

---

## 11. Icons & Decorative Elements

### Icon Style
- **Style:** Custom minimal — arrows (→ ↗), close (×), menu (three lines or "MENU" text)
- **Size:** 18px
- **Color:** currentColor
- **Minimal set:** This site barely uses icons — typography IS the decoration

### Decorative Elements
- **Section numbers:** Massive outlined numerals (01, 02, 03...), 200px+, positioned as background anchors
- **Marquee strip:** Horizontal scrolling text divider between sections
- **Oversized quotation marks:** 120px, low opacity, decorative only
- **Dot accents:** 6px filled circles used as bullet points and active indicators

### Dividers
- **Horizontal rule:** 1px solid `#333333` (dark) / `#CCCCCC` (light)
- **Marquee divider:** Full-width text strip, replaces traditional hr
- **Section break:** Color swap (black → white or white → black)

### Background Textures
- **None.** Pure flat surfaces. The contrast between black and white IS the texture.

---

## 12. Unique Signature

**The ONE thing:** The numbered manifesto structure — every section opens with an oversized outlined number (01, 02, 03...) that anchors the content like chapter markers in a bold publication. Combined with max-width typography that fills the viewport, the site reads like a design agency's declaration of principles, not a portfolio.

**How to replicate:**
1. Each section starts with a `::before` pseudo-element containing the section number
2. Number: `-webkit-text-stroke: 2px currentColor; color: transparent` at 200px+
3. Position: `absolute`, slightly overlapping the section title
4. Section title: Full-width, uppercase, 700+ weight, max font-size
5. Black/white sections alternate: use `nth-child(odd/even)` with inverted color schemes
6. Add a `<div class="marquee">` between major sections: `overflow: hidden`, child moves via `animation: marquee 20s linear infinite`
7. Keep body copy narrow (max-width: 640px) next to oversized headings for contrast

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  --font-ui: "Neue Montreal", "Helvetica Neue", Arial, sans-serif;

  --font-size-hero: clamp(3rem, 10vw, 10rem);
  --font-size-h1: clamp(2.5rem, 8vw, 10rem);
  --font-size-h2: clamp(2rem, 5vw, 6rem);
  --font-size-h3: clamp(1.5rem, 3vw, 3.5rem);
  --font-size-h4: 2rem;
  --font-size-h5: 1.5rem;
  --font-size-h6: 0.875rem;
  --font-size-body: 1.125rem;
  --font-size-caption: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-black: 900;

  --line-height-tight: 0.95;
  --line-height-heading: 1.05;
  --line-height-normal: 1.65;

  --letter-spacing-ultra-tight: -0.04em;
  --letter-spacing-tight: -0.03em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.08em;
  --letter-spacing-wider: 0.1em;

  /* Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-accent: #FF3D3D;
  --color-accent-hover: #FF5555;
  --color-dark-grey: #1A1A1A;
  --color-mid-grey: #888888;
  --color-light-grey: #CCCCCC;
  --color-muted: #555555;

  /* Colors — Contextual (swap based on section) */
  --color-bg: #FFFFFF;
  --color-fg: #000000;
  --color-border: #CCCCCC;

  /* Dark section overrides */
  /* .section--dark {
    --color-bg: #000000;
    --color-fg: #FFFFFF;
    --color-border: #333333;
  } */

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 120px;
  --space-5xl: 160px;

  /* Layout */
  --container-max: 1600px;
  --container-padding: clamp(24px, 4vw, 64px);
  --grid-columns: 12;
  --grid-gutter: 24px;
  --content-narrow: 640px;

  /* Section */
  --section-padding-desktop: 160px;
  --section-padding-tablet: 100px;
  --section-padding-mobile: 64px;

  /* Nav */
  --nav-height: 72px;
  --nav-height-mobile: 56px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-full: 50%;

  /* Decorative */
  --number-size: 200px;
  --dot-size: 6px;
  --marquee-speed: 20s;

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-dramatic: cubic-bezier(0.7, 0, 0.3, 1);
  --ease-text-reveal: cubic-bezier(0.16, 1, 0.3, 1);

  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
  --duration-wipe: 600ms;
}
```
