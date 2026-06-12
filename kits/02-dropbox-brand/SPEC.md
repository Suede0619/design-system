# Dropbox Brand — Design System

## 1. Overview

- **Site:** brand.dropbox.com
- **Award:** CSSDA Website of the Year 2025
- **What makes it special:** A brand guidelines hub that practices what it preaches — every pixel demonstrates the design rules it documents. It's a design system about a design system, executed with Swiss precision.
- **Aesthetic:** Ultra-clean Swiss minimalism. Vast white space, a rigid grid that breathes, and typography so precise it could cut glass. Color is deployed surgically — navy blue anchors, and rainbow accents appear only in illustrations and swatches.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Sharp Grotesk" (geometric grotesque with distinctive 'a' and 'g')
- **Weight:** 700 (Bold) for display, 600 (SemiBold) for section heads
- **Size range:** 48px–96px (clamp(3rem, 5vw, 6rem))
- **Letter-spacing:** -0.02em
- **Text-transform:** none (sentence case throughout)

### Body Font
- **Family:** "Sharp Grotesk"
- **Weight:** 400 (Regular) for body, 500 (Medium) for emphasis
- **Size:** 18px / 1.125rem
- **Line-height:** 1.7

### Caption / UI Font
- **Family:** "Sharp Grotesk"
- **Weight:** 500 (Medium)
- **Size:** 13px / 0.8125rem
- **Letter-spacing:** 0.04em
- **Text-transform:** uppercase for labels, sentence case for captions

### Heading Hierarchy
| Level | Size | Weight | Letter-spacing | Line-height |
|-------|------|--------|----------------|-------------|
| h1 | 80px / 5rem | 700 | -0.02em | 1.05 |
| h2 | 56px / 3.5rem | 700 | -0.02em | 1.1 |
| h3 | 40px / 2.5rem | 600 | -0.01em | 1.2 |
| h4 | 28px / 1.75rem | 600 | 0 | 1.3 |
| h5 | 22px / 1.375rem | 600 | 0 | 1.4 |
| h6 | 16px / 1rem | 500 | 0.04em | 1.5 |

### Special Text Treatments
- **Code snippets:** Monospace (`"IBM Plex Mono"`, 14px, 400 weight) in inline `<code>` blocks with `#F7F7F8` background
- **Pull quotes:** 40px, 400 weight italic, `#0061FF` color, left-aligned with 4px blue left border
- **Section labels:** All-caps, 13px, 500 weight, `#6B6B6B`, 0.08em letter-spacing

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Dropbox Blue | `#0061FF` | Primary brand, CTAs, links |
| Dropbox Navy | `#1E1919` | Primary text, headings |
| Cloud White | `#FFFFFF` | Primary background |
| Fog | `#F7F7F8` | Subtle backgrounds, code blocks |
| Slate | `#6B6B6B` | Secondary text, captions |

### Illustration Accent Colors (Rainbow System)
| Name | Hex | Usage |
|------|-----|-------|
| Coral | `#FF6242` | Illustration accent |
| Saffron | `#FFD830` | Illustration accent |
| Jade | `#00D97E` | Illustration accent, success |
| Violet | `#7B68EE` | Illustration accent |
| Blush | `#FF8FD8` | Illustration accent |

### Background Colors
- **Primary:** `#FFFFFF`
- **Subtle:** `#F7F7F8`
- **Dark sections:** `#1E1919`
- **No true dark mode** — the site is about the brand, which lives in white

### Text Colors
- **Primary:** `#1E1919`
- **Secondary:** `#6B6B6B`
- **Muted:** `#9B9B9B`
- **Link/accent:** `#0061FF`
- **Inverse (on dark):** `#FFFFFF`

### Accent / CTA Colors
- **Primary CTA:** `#0061FF`
- **CTA hover:** `#004FCC`
- **Focus ring:** `rgba(0, 97, 255, 0.3)`

### Gradients
- **Minimal use.** Gradients appear only in illustration contexts:
  - `linear-gradient(135deg, #0061FF 0%, #7B68EE 100%)` — rare hero accent
- **No gradients on UI elements.** Flat is the doctrine.

### Color Usage Rules
- Blue is reserved for interactive elements and the logo. Never use it for decorative fills.
- The rainbow palette is ONLY for illustrations. Never apply to buttons, cards, or text.
- Grey text (`#6B6B6B`) must meet 4.5:1 contrast on white — check everything.
- Dark section backgrounds (`#1E1919`) are used sparingly — one per page maximum.

---

## 4. Layout System

### Container
- **Max-width:** 1200px
- **Padding:** 0 clamp(24px, 5vw, 120px)

### Grid
- **Columns:** 12-column grid
- **Gutter:** 32px
- **Breakpoints:**
  - Mobile: 0–599px (4 columns)
  - Tablet: 600px–959px (8 columns)
  - Desktop: 960px–1199px (12 columns)
  - Wide: 1200px+

### Section Spacing
- **Section padding:** 160px 0 (desktop), 100px 0 (tablet), 64px 0 (mobile)
- **Between components:** 80px
- **Inner spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 80, 120, 160

### Content Alignment
- Centered text blocks for hero/intro sections (max-width 720px)
- Left-aligned body content in 8-column span (offset 2 columns)
- Color/typography swatches in strict grid — 3 or 4 columns

### Responsive Behavior
- Content-first reflow — images scale, text reflows, grid collapses gracefully
- No horizontal scroll tricks — purely vertical
- Typography scales moderately (h1: 80px → 40px on mobile)
- Generous whitespace maintained on all breakpoints — never cramped

---

## 5. Navigation

- **Style:** Sticky top bar, white background, thin 1px `#E8E8E8` bottom border
- **Height:** 72px desktop, 60px mobile
- **Font:** "Sharp Grotesk", 15px, 500 weight, sentence case
- **Active state:** `#0061FF` text, 2px bottom border `#0061FF`
- **Hover:** `#0061FF` text, 150ms ease
- **Mobile:** Slide-down panel from top, white background, full-width links
- **Logo:** Left-aligned, Dropbox wordmark in `#1E1919`, 28px height
- **Utility links:** Right side — search icon, download button

---

## 6. Buttons

### Primary Button
- **Background:** `#0061FF`
- **Text:** `#FFFFFF`, 15px, 600 weight
- **Padding:** 14px 32px
- **Border-radius:** 8px
- **Hover:** Background `#004FCC`, 150ms ease
- **Active:** Background `#003DA6`
- **Focus:** 3px offset ring `rgba(0, 97, 255, 0.3)`

### Secondary / Outline Button
- **Background:** transparent
- **Border:** 2px solid `#1E1919`
- **Text:** `#1E1919`, 15px, 600 weight
- **Padding:** 12px 30px
- **Border-radius:** 8px
- **Hover:** Background `#1E1919`, text `#FFFFFF`, 150ms ease

### Ghost Button
- **Background:** transparent
- **Border:** none
- **Text:** `#0061FF`, 15px, 500 weight
- **Hover:** Underline appears, 150ms ease
- **Icon:** Optional right arrow, 14px

### CTA Button
- **Same as primary, larger:** padding 18px 40px, font-size 17px
- **Used in hero sections and sign-up flows**

### Icon Button
- **Size:** 40px × 40px
- **Background:** `#F7F7F8`
- **Border-radius:** 8px
- **Icon:** 18px, `#1E1919`
- **Hover:** Background `#E8E8E8`

---

## 7. Cards & Containers

### Content Card (Guidelines Card)
- **Background:** `#FFFFFF`
- **Border:** 1px solid `#E8E8E8`
- **Border-radius:** 12px
- **Shadow:** none (borders define boundaries, not shadows)
- **Padding:** 40px
- **Hover:** Border color transitions to `#0061FF`, 200ms ease

### Color Swatch Card
- **Background:** dynamic (the color being displayed)
- **Border-radius:** 12px
- **Padding:** 24px
- **Text overlay:** White or dark depending on contrast
- **Hex value:** Bottom-left, 13px monospace

### Media Card
- **Background:** `#F7F7F8`
- **Border-radius:** 12px
- **Padding:** 0 (image fills the card)
- **Aspect ratio:** 4:3
- **Caption:** Below card, 13px, `#6B6B6B`, 8px margin-top

### Documentation Card
- **Background:** `#F7F7F8`
- **Border-radius:** 12px
- **Padding:** 32px
- **Code content:** Monospace, syntax-highlighted
- **No hover effect** — these are reference, not interactive

---

## 8. Forms & Inputs

### Input Field
- **Background:** `#FFFFFF`
- **Border:** 2px solid `#E8E8E8`
- **Border-radius:** 8px
- **Padding:** 14px 16px
- **Font:** 16px, 400 weight, `#1E1919`
- **Placeholder:** `#9B9B9B`

### Focus State
- **Border:** 2px solid `#0061FF`
- **Box-shadow:** 0 0 0 3px rgba(0, 97, 255, 0.15)
- **Transition:** 150ms ease

### Label
- **Position:** above input, left-aligned
- **Font:** 14px, 500 weight, `#1E1919`
- **Margin-bottom:** 6px

### Error State
- **Border:** 2px solid `#FF6242`
- **Error text:** 13px, 400 weight, `#FF6242`, margin-top 4px
- **Error icon:** 14px, inline before text

### Select / Dropdown
- **Same style as input**
- **Custom chevron:** 12px, `#6B6B6B`
- **Dropdown:** White background, 12px border-radius, subtle shadow `0 4px 16px rgba(0,0,0,0.08)`

### Checkbox / Radio
- **Size:** 18px × 18px
- **Border:** 2px solid `#6B6B6B`
- **Border-radius:** 4px (checkbox), 50% (radio)
- **Checked:** `#0061FF` fill, white checkmark
- **Focus:** Same ring as inputs

---

## 9. Images & Media

### Image Treatment
- **Corners:** 12px border-radius consistently
- **Shadows:** None
- **Overlays:** None — images are presented cleanly
- **Container:** Often on `#F7F7F8` background with padding

### Aspect Ratios
- Hero: 16:9
- Documentation examples: 4:3
- Square swatches: 1:1
- Logo usage examples: flexible

### Image Hover
- **No hover effects on images.** Content is reference material, not a gallery.

### Video Treatment
- Inline video players with custom minimal controls
- Rounded corners (12px) matching card system
- Play button: centered, 64px circle, white bg, `#1E1919` triangle

### Illustration Style
- Geometric, bold, flat illustrations
- Use the rainbow accent palette (Coral, Saffron, Jade, Violet, Blush)
- Simple shapes — circles, rectangles, triangles
- No gradients within illustrations
- Consistent 4px stroke weight on outlined elements

---

## 10. Animation & Motion

### Page Transitions
- **Style:** Simple crossfade
- **Duration:** 300ms
- **Easing:** ease-in-out

### Scroll Animations
- **Fade-up:** Elements translate from Y: 24px, opacity 0 → Y: 0, opacity 1
- **Duration:** 500ms
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Stagger:** 80ms between siblings
- **No parallax.** Everything moves at the same speed. Swiss precision.

### Hover Micro-interactions
- **Buttons:** Color transitions, 150ms
- **Cards:** Border color change, 200ms
- **Links:** Underline appears, 150ms
- **Navigation:** Color shift only, no movement

### Loading States
- **Skeleton:** `#F7F7F8` blocks with subtle pulse animation
- **Spinner:** Blue ring, 20px, 800ms rotation
- **Progress bar:** Blue fill on `#E8E8E8` track, 4px height

### Timing Functions
- **Default:** ease-in-out (150ms for micro, 300ms for transitions)
- **Reveal:** cubic-bezier(0.25, 0.1, 0.25, 1) for scroll animations
- **Spring:** Not used. This is Swiss, not playful.

### Performance Notes
- Minimal animation footprint — transitions only, no persistent animations
- No WebGL, no canvas, no heavy JS animations
- Everything is CSS-driven
- Images lazy-loaded with native `loading="lazy"`

---

## 11. Icons & Decorative Elements

### Icon Style
- **Style:** Custom outline icons, 1.5px stroke
- **Size:** 24px default, 20px inline, 16px in buttons
- **Color:** `#1E1919` default, `#0061FF` on hover/active
- **Library approach:** Custom SVG set, not a third-party library

### Decorative Elements
- **Grid dots:** Subtle dot pattern (4px dots, 32px apart, `#E8E8E8`) used as section backgrounds
- **Divider line:** 1px solid `#E8E8E8`
- **Brand mark:** Dropbox open-box icon used as decorative element at large scale, `#0061FF`

### Dividers
- **Default:** 1px solid `#E8E8E8`, full container width
- **Section break:** No visible divider — whitespace alone (160px gap)
- **Content separator:** 48px wide, 2px solid `#0061FF`, centered

### Background Textures
- **None.** Backgrounds are flat solid colors only.

---

## 12. Unique Signature

**The ONE thing:** The relentless restraint — a brand guidelines site that uses its own rules so precisely that the medium IS the message. Color swatches live inside the same grid that defines them. Typography samples use the exact specs they're documenting.

**How to replicate:**
1. Set a 12-column grid with 32px gutters on a max-width of 1200px
2. Use ONE typeface (Sharp Grotesk or substitute with Inter) for everything
3. Limit color to `#0061FF` for interactive elements and `#1E1919` for text — nothing else on UI
4. Enforce 160px section spacing — let the whitespace do the talking
5. Every component gets a 12px border-radius and 1px `#E8E8E8` border
6. Documentation cards use `#F7F7F8` backgrounds for visual grouping
7. Zero decorative gradients, shadows, or visual noise

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "Sharp Grotesk", "Inter", "Helvetica Neue", sans-serif;
  --font-body: "Sharp Grotesk", "Inter", "Helvetica Neue", sans-serif;
  --font-ui: "Sharp Grotesk", "Inter", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", "Fira Code", monospace;

  --font-size-h1: clamp(2.5rem, 5vw, 5rem);
  --font-size-h2: clamp(2rem, 3.5vw, 3.5rem);
  --font-size-h3: clamp(1.5rem, 2.5vw, 2.5rem);
  --font-size-h4: 1.75rem;
  --font-size-h5: 1.375rem;
  --font-size-h6: 1rem;
  --font-size-body: 1.125rem;
  --font-size-caption: 0.8125rem;
  --font-size-code: 0.875rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.05;
  --line-height-heading: 1.2;
  --line-height-normal: 1.7;

  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.04em;
  --letter-spacing-wider: 0.08em;

  /* Colors — Brand */
  --color-blue: #0061FF;
  --color-blue-hover: #004FCC;
  --color-blue-active: #003DA6;
  --color-blue-light: rgba(0, 97, 255, 0.15);
  --color-navy: #1E1919;

  /* Colors — Neutral */
  --color-bg-primary: #FFFFFF;
  --color-bg-subtle: #F7F7F8;
  --color-bg-dark: #1E1919;
  --color-border: #E8E8E8;

  --color-text-primary: #1E1919;
  --color-text-secondary: #6B6B6B;
  --color-text-muted: #9B9B9B;
  --color-text-inverse: #FFFFFF;
  --color-text-link: #0061FF;

  /* Colors — Illustration Accents */
  --color-coral: #FF6242;
  --color-saffron: #FFD830;
  --color-jade: #00D97E;
  --color-violet: #7B68EE;
  --color-blush: #FF8FD8;

  /* Colors — Semantic */
  --color-error: #FF6242;
  --color-success: #00D97E;
  --color-warning: #FFD830;

  /* Spacing */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;
  --space-5xl: 120px;
  --space-6xl: 160px;

  /* Layout */
  --container-max: 1200px;
  --container-padding: clamp(24px, 5vw, 120px);
  --grid-columns: 12;
  --grid-gutter: 32px;
  --content-width: 720px;

  /* Section */
  --section-padding-desktop: 160px;
  --section-padding-tablet: 100px;
  --section-padding-mobile: 64px;

  /* Nav */
  --nav-height: 72px;
  --nav-height-mobile: 60px;
  --nav-border: 1px solid #E8E8E8;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-dropdown: 0 4px 16px rgba(0, 0, 0, 0.08);

  /* Transitions */
  --ease-default: ease-in-out;
  --ease-reveal: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-micro: 150ms;
  --duration-normal: 300ms;
  --duration-reveal: 500ms;
}
```
