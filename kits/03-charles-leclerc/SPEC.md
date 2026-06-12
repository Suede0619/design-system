# Charles Leclerc — Design System

## 1. Overview

- **Site:** charlesleclerc.com
- **Award:** CSSDA #3 2025
- **What makes it special:** An editorial athlete biography that treats a racing driver's life like a luxury magazine spread. The site pairs cinematic photography with restrained typography, creating a sense of timeless class that contrasts sharply with the adrenaline of F1.
- **Aesthetic:** Editorial luxury meets motorsport. Deep blacks and warm whites frame cinematic photography, while Ferrari red appears only as a deliberate punctuation. Serif headings lend gravitas; sans-serif body text keeps it modern. Every section reveal feels like turning a page in a coffee-table book.

---

## 2. Typography

### Display / Heading Font
- **Family:** "EB Garamond" (or equivalent old-style serif — high contrast, elegant terminals)
- **Weight:** 400 (Regular) for display — the serif does the work, not the weight
- **Size range:** 56px–120px (clamp(3.5rem, 7vw, 7.5rem))
- **Letter-spacing:** -0.01em
- **Text-transform:** none (title case for headlines)

### Body Font
- **Family:** "Neue Haas Grotesk" (or "Helvetica Neue" as fallback)
- **Weight:** 400 (Regular)
- **Size:** 17px / 1.0625rem
- **Line-height:** 1.7

### Caption / UI Font
- **Family:** "Neue Haas Grotesk"
- **Weight:** 500 (Medium)
- **Size:** 12px / 0.75rem
- **Letter-spacing:** 0.1em
- **Text-transform:** uppercase

### Heading Hierarchy
| Level | Size | Font | Weight | Letter-spacing |
|-------|------|------|--------|----------------|
| h1 | 96px / 6rem | EB Garamond | 400 | -0.01em |
| h2 | 64px / 4rem | EB Garamond | 400 | -0.01em |
| h3 | 40px / 2.5rem | EB Garamond | 400 | 0 |
| h4 | 28px / 1.75rem | Neue Haas Grotesk | 600 | 0 |
| h5 | 22px / 1.375rem | Neue Haas Grotesk | 600 | 0 |
| h6 | 14px / 0.875rem | Neue Haas Grotesk | 500 | 0.08em |

### Special Text Treatments
- **Pull quotes:** EB Garamond italic, 48px, `#C12C2C` color, with oversized quotation mark (200px, 10% opacity)
- **Year markers:** Giant numerals (EB Garamond, 200px+) at 8% opacity as background watermarks
- **Timeline labels:** Sans-serif, uppercase, 12px, wide letter-spacing, `#888888`
- **Name treatment:** "CHARLES LECLERC" in Neue Haas Grotesk, 600 weight, 16px, 0.3em letter-spacing

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Noir | `#0D0D0D` | Primary background |
| Ivory | `#F5F0EB` | Light section backgrounds |
| Ferrari Red | `#C12C2C` | Accent, links, highlights |
| Warm White | `#FAF8F5` | Body background (light sections) |
| Charcoal | `#1A1A1A` | Card backgrounds |

### Background Colors
- **Dark mode (primary):** `#0D0D0D`
- **Light sections:** `#F5F0EB` (warm ivory)
- **Card/elevated dark:** `#1A1A1A`
- **Light card:** `#FFFFFF`

### Text Colors
- **Primary (on dark):** `#F5F0EB`
- **Primary (on light):** `#0D0D0D`
- **Secondary:** `#888888`
- **Muted:** `#555555`
- **Accent:** `#C12C2C`

### Accent / CTA Colors
- **Primary accent:** `#C12C2C` (Ferrari Red)
- **Accent hover:** `#E03333`
- **Warm gold:** `#C5A55A` (secondary accent for awards/trophies)

### Gradients
- **Photo overlay:** `linear-gradient(180deg, transparent 30%, rgba(13,13,13,0.95) 100%)`
- **Ambient glow:** `radial-gradient(circle at 50% 30%, rgba(193,44,44,0.08) 0%, transparent 60%)`
- **Section transition:** `linear-gradient(180deg, #0D0D0D 0%, #F5F0EB 100%)` across 200px

### Color Usage Rules
- Ferrari Red is never a background fill — only text accents, thin rules, and interactive elements
- Dark/light sections alternate to create editorial rhythm
- Ivory (`#F5F0EB`) is always warm — never use pure white `#FFFFFF` for backgrounds
- Photography drives the palette — colors serve the images, not the other way around

---

## 4. Layout System

### Container
- **Max-width:** 1280px
- **Padding:** 0 clamp(24px, 5vw, 100px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:**
  - Mobile: 0–767px
  - Tablet: 768px–1023px
  - Desktop: 1024px–1279px
  - Wide: 1280px+

### Section Spacing
- **Section padding:** 140px 0 (desktop), 100px 0 (tablet), 64px 0 (mobile)
- **Between components:** 80px
- **Spacing scale:** 8, 16, 24, 32, 48, 64, 80, 100, 140

### Content Alignment
- Hero: centered, full-viewport with image
- Editorial content: asymmetric — text in 5 columns, image in 7 columns
- Timeline: centered vertical line, content alternates left/right
- Stats: centered, 3 or 4 column grid
- Pull quotes: centered, max-width 800px

### Responsive Behavior
- Timeline collapses to single-column on mobile (content all left-aligned)
- Asymmetric layouts stack vertically — image first, then text
- Full-bleed images remain full-bleed on all breakpoints
- Serif display sizes scale from 96px → 40px on mobile

---

## 5. Navigation

- **Style:** Fixed, transparent over hero, transitions to solid `#0D0D0D` on scroll
- **Height:** 72px desktop, 60px mobile
- **Font:** "Neue Haas Grotesk", 13px, 500 weight, uppercase, letter-spacing 0.1em
- **Active state:** `#C12C2C` text color
- **Hover:** Opacity 1 → `#C12C2C`, 200ms ease
- **Mobile:** Full-screen overlay, `#0D0D0D` background, centered navigation links in serif (EB Garamond, 40px)
- **Logo:** Left-aligned, "CL" monogram or full name in sans-serif, 500 weight, 0.2em spacing
- **Language toggle:** Right side, 12px, ghost style

---

## 6. Buttons

### Primary Button
- **Background:** `#C12C2C`
- **Text:** `#FFFFFF`, 13px, 500 weight, uppercase, letter-spacing 0.08em
- **Padding:** 14px 36px
- **Border-radius:** 0px
- **Hover:** Background `#E03333`, 200ms ease
- **Active:** Background `#A02424`

### Secondary / Outline Button
- **Background:** transparent
- **Border:** 1px solid `#F5F0EB`
- **Text:** `#F5F0EB`, same specs
- **Padding:** 13px 34px
- **Hover:** Background `#F5F0EB`, text `#0D0D0D`, 200ms

### Ghost Button
- **Background:** transparent
- **Border:** none
- **Text:** `#C12C2C`, 13px, 500 weight, uppercase
- **Hover:** Underline slides in from left (2px, full width, `#C12C2C`), 300ms

### CTA Button
- **Same as primary, larger:** padding 18px 48px, 15px text
- **Right arrow icon:** 14px, animates right 6px on hover

### Icon Button
- **Size:** 44px × 44px
- **Background:** transparent
- **Border:** 1px solid `#333333`
- **Border-radius:** 50%
- **Icon:** 18px, `#F5F0EB`
- **Hover:** Border `#C12C2C`, icon `#C12C2C`

---

## 7. Cards & Containers

### Timeline Card
- **Background:** `#1A1A1A`
- **Border:** none
- **Border-radius:** 0px
- **Shadow:** none
- **Padding:** 40px
- **Connection:** 1px vertical line to central timeline axis, color `#333333`

### Media Card (Photo)
- **Background:** full-bleed image
- **Overlay:** Gradient from bottom, `rgba(13,13,13,0.7)`
- **Border-radius:** 0px
- **Aspect ratio:** 3:2 or 16:9
- **Hover:** Image scale(1.03), overlay lightens, 500ms ease-out
- **Caption overlay:** bottom-left, 13px uppercase sans-serif

### Stat Card
- **Background:** transparent
- **Border-bottom:** 1px solid `#333333`
- **Padding:** 32px 0
- **Number:** EB Garamond, 64px, 400 weight, `#C12C2C`
- **Label:** 12px, uppercase, sans-serif, `#888888`

### Content Card (Light)
- **Background:** `#FFFFFF`
- **Border:** 1px solid `#E8E3DD`
- **Border-radius:** 0px
- **Padding:** 40px
- **Hover:** Subtle shadow `0 4px 20px rgba(0,0,0,0.06)`

---

## 8. Forms & Inputs

### Input Field
- **Background:** transparent
- **Border:** none (bottom border only — 1px solid `#555555`)
- **Padding:** 12px 0
- **Font:** 16px, 400 weight, `#F5F0EB`
- **Placeholder:** `#555555`

### Focus State
- **Border-bottom:** 1px solid `#C12C2C`
- **Transition:** 200ms ease

### Label
- **Position:** above input, left-aligned
- **Font:** 12px, 500 weight, uppercase, `#888888`, letter-spacing 0.08em
- **Margin-bottom:** 8px

### Error State
- **Border-bottom:** 1px solid `#FF4444`
- **Error text:** 12px, 400 weight, `#FF4444`, margin-top 6px

### Select / Dropdown
- **Same bottom-border style as inputs**
- **Chevron:** 12px, `#888888`
- **Dropdown panel:** `#1A1A1A`, no border-radius

### Checkbox / Radio
- **Size:** 18px × 18px
- **Border:** 1px solid `#555555`
- **Border-radius:** 0px (checkbox), 50% (radio)
- **Checked:** `#C12C2C` fill, white checkmark
- **Focus:** `#C12C2C` outline offset 2px

---

## 9. Images & Media

### Image Treatment
- **Corners:** 0px (sharp edges maintain editorial feel)
- **Shadows:** None on images
- **Overlays:** Gradient overlays on hero and background images
- **Filters:** Slight desaturation (filter: saturate(0.9)) for cohesive mood

### Aspect Ratios
- Hero: Full-viewport (100vh)
- Editorial: 3:2 landscape
- Portrait: 2:3
- Timeline: 16:9
- Detail: 1:1

### Image Hover
- Scale(1.03) over 500ms ease-out, contained within parent overflow:hidden

### Video Treatment
- Full-viewport background video for hero section
- Inline video with custom controls — minimal, white on dark
- Autoplay/muted/loop for ambient sequences
- Always overlaid with gradient for text readability

### Illustration Style
- N/A — photography only. No illustrations, icons tell the functional story.

---

## 10. Animation & Motion

### Page Transitions
- **Style:** Fade with wipe (horizontal reveal from left)
- **Duration:** 600ms
- **Easing:** cubic-bezier(0.65, 0, 0.35, 1)

### Scroll Animations
- **Fade-up:** Y: 40px → 0, opacity 0 → 1, 700ms, staggered 100ms
- **Parallax:** Images move at 0.7x scroll speed, text at 1x
- **Timeline reveal:** Cards slide in from alternating sides (left/right), 600ms
- **Image reveals:** Mask-based — a dark overlay slides away to reveal the photo beneath
- **Year counter:** Numbers increment as you scroll through the timeline

### Hover Micro-interactions
- **Buttons:** Color shift + underline slide, 200ms
- **Cards:** Image scale, 500ms
- **Navigation:** Color transition, 200ms
- **Timeline dots:** Scale 1 → 1.5 + color change to `#C12C2C`

### Loading States
- **Page load:** Dark screen, "CL" monogram fades in, then content reveals
- **Image lazy-load:** Blurred placeholder → sharp image, 400ms
- **Skeleton:** Dark grey blocks with subtle opacity pulse

### Timing Functions
- **Default:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Dramatic:** cubic-bezier(0.65, 0, 0.35, 1) — for page transitions
- **Image reveal:** cubic-bezier(0.77, 0, 0.175, 1) — accelerates then decelerates

### Performance Notes
- Image mask reveals use clip-path for GPU acceleration
- Parallax via transform: translate3d for composited layer
- Timeline animations use IntersectionObserver, not scroll events
- Respect prefers-reduced-motion — fallback to simple fade

---

## 11. Icons & Decorative Elements

### Icon Style
- **Style:** Ultra-thin custom line icons, 1px stroke
- **Size:** 20px default
- **Color:** `#F5F0EB` on dark, `#0D0D0D` on light
- **Usage:** Minimal — social icons, navigation arrows, play button only

### Decorative Elements
- **Timeline axis:** Central vertical line, 1px solid `#333333`, with small circles (8px) at each event
- **Year watermarks:** EB Garamond, 200px+, 6-8% opacity, positioned behind content
- **Oversized quotation marks:** EB Garamond, 200px, `#C12C2C` at 10% opacity
- **Red accent line:** 40px × 2px `#C12C2C`, used as a section intro marker

### Dividers
- **Horizontal rule:** 1px solid `#333333`
- **Section transition:** Color gradient (dark → light), 200px height
- **Content separator:** 40px red line centered

### Background Textures
- **Subtle film grain:** PNG noise overlay at 2% opacity on dark sections
- **No patterns.** Clean surfaces honor the photography.

---

## 12. Unique Signature

**The ONE thing:** The cinematic scroll-triggered image reveal — photographs are masked behind dark overlays that slide away as you scroll, creating a film-strip reveal effect. Combined with serif typography and the timeline structure, the site reads like an autobiographical documentary.

**How to replicate:**
1. Wrap each image in a container with `overflow: hidden; position: relative`
2. Place a `::after` pseudo-element with `background: #0D0D0D; position: absolute; inset: 0`
3. On scroll trigger (IntersectionObserver at 30% threshold), animate the pseudo-element's `transform: scaleX(0)` with `transform-origin: right`
4. Use `cubic-bezier(0.77, 0, 0.175, 1)` timing over 800ms
5. Stagger multiple images by 150ms each
6. Add slight parallax (transform: translateY) on the underlying image at 0.7x rate
7. Timeline: use a fixed central `::before` line with scroll-driven dot animations

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "EB Garamond", "Georgia", "Times New Roman", serif;
  --font-body: "Neue Haas Grotesk", "Helvetica Neue", Arial, sans-serif;
  --font-ui: "Neue Haas Grotesk", "Helvetica Neue", Arial, sans-serif;

  --font-size-h1: clamp(2.5rem, 6vw, 6rem);
  --font-size-h2: clamp(2rem, 4vw, 4rem);
  --font-size-h3: clamp(1.5rem, 2.5vw, 2.5rem);
  --font-size-h4: 1.75rem;
  --font-size-h5: 1.375rem;
  --font-size-h6: 0.875rem;
  --font-size-body: 1.0625rem;
  --font-size-caption: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  --line-height-tight: 1.05;
  --line-height-heading: 1.15;
  --line-height-normal: 1.7;

  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.08em;
  --letter-spacing-wider: 0.1em;
  --letter-spacing-ultra: 0.3em;

  /* Colors — Core */
  --color-noir: #0D0D0D;
  --color-ivory: #F5F0EB;
  --color-warm-white: #FAF8F5;
  --color-charcoal: #1A1A1A;
  --color-ferrari-red: #C12C2C;
  --color-ferrari-red-hover: #E03333;
  --color-warm-gold: #C5A55A;

  /* Colors — Background */
  --color-bg-dark: #0D0D0D;
  --color-bg-light: #F5F0EB;
  --color-bg-card-dark: #1A1A1A;
  --color-bg-card-light: #FFFFFF;

  /* Colors — Text */
  --color-text-on-dark: #F5F0EB;
  --color-text-on-light: #0D0D0D;
  --color-text-secondary: #888888;
  --color-text-muted: #555555;
  --color-text-accent: #C12C2C;

  /* Colors — Border */
  --color-border-dark: #333333;
  --color-border-light: #E8E3DD;

  /* Colors — Semantic */
  --color-error: #FF4444;

  /* Gradients */
  --gradient-photo-overlay: linear-gradient(180deg, transparent 30%, rgba(13, 13, 13, 0.95) 100%);
  --gradient-ambient-red: radial-gradient(circle at 50% 30%, rgba(193, 44, 44, 0.08) 0%, transparent 60%);
  --gradient-section-transition: linear-gradient(180deg, #0D0D0D 0%, #F5F0EB 100%);

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 100px;
  --space-5xl: 140px;

  /* Layout */
  --container-max: 1280px;
  --container-padding: clamp(24px, 5vw, 100px);
  --grid-columns: 12;
  --grid-gutter: 24px;

  /* Section */
  --section-padding-desktop: 140px;
  --section-padding-tablet: 100px;
  --section-padding-mobile: 64px;

  /* Nav */
  --nav-height: 72px;
  --nav-height-mobile: 60px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-full: 50%;

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-dramatic: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-reveal: cubic-bezier(0.77, 0, 0.175, 1);

  --duration-fast: 200ms;
  --duration-normal: 400ms;
  --duration-slow: 600ms;
  --duration-reveal: 700ms;
  --duration-image-reveal: 800ms;
}
```
