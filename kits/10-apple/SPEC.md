# Apple — Design System Reference
**Source:** apple.com
**Awards:** Multiple Webby Awards (Consumer/Electronics category)
**Category:** Consumer Premium Editorial
**Last Referenced:** 2026-03-31

---

## 1. Overview

Apple's web design language is the gold standard for consumer premium editorial on the internet. It translates the same discipline from hardware design — obsessive restraint, purposeful whitespace, materiality as metaphor — into a digital medium. Every pixel earns its place.

Key principles:
- **Singular focus** — one product, one story per page
- **Photography as hero** — hardware and lifestyle imagery at cinematic scale
- **Motion as revelation** — scroll-driven animations that feel like stage lighting
- **Typography-first hierarchy** — size and weight carry meaning, not decoration
- **Frictionless commerce** — Buy buttons are always visible, never aggressive

The system produces pages that feel like high-end print advertising that happens to be interactive. The visual vocabulary is minimalist but never cold — warmth comes from photography, not from color.

---

## 2. Typography

### Font Stack
```
--font-display: "SF Pro Display", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
--font-text:    "SF Pro Text",    system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
```

SF Pro is a system font on Apple devices; non-Apple users receive system-ui fallback which renders the OS default sans. This is intentional — Apple's system renders exactly as designed for the majority of their customer base.

### Type Scale

| Role             | Font        | Size        | Weight | Line Height | Letter Spacing |
|------------------|-------------|-------------|--------|-------------|----------------|
| Hero Display     | SF Pro Display | 96px / 6rem | 700  | 1.05        | -0.025em       |
| Section Headline | SF Pro Display | 56px / 3.5rem | 600 | 1.1        | -0.02em        |
| Feature Title    | SF Pro Display | 40px / 2.5rem | 600 | 1.15       | -0.015em       |
| Subheading       | SF Pro Display | 28px / 1.75rem | 500 | 1.2       | -0.01em        |
| Body Large       | SF Pro Text | 21px / 1.3125rem | 400 | 1.55     | 0em            |
| Body Default     | SF Pro Text | 17px / 1.0625rem | 400 | 1.6      | 0em            |
| Caption          | SF Pro Text | 14px / 0.875rem | 400 | 1.5       | 0em            |
| Eyebrow / Label  | SF Pro Text | 12px / 0.75rem | 600  | 1.4        | 0.04em         |

### Type Behavior
- All hero and section headlines are **center-aligned**
- Body copy on detail/specs pages is left-aligned, max-width 680px
- Eyebrow labels appear above section headlines in muted color (#6E6E73)
- No italic usage in marketing contexts; italic reserved for legal/footnote copy
- Letter-spacing tightens as size increases (optically corrected)

---

## 3. Color Palette

### Core Palette

| Name         | Hex       | RGB                | Usage                                          |
|--------------|-----------|--------------------|------------------------------------------------|
| Dark Text    | `#1D1D1F` | rgb(29, 29, 31)    | Primary text, headings                         |
| Background   | `#F5F5F7` | rgb(245, 245, 247) | Default page background                        |
| White        | `#FFFFFF` | rgb(255, 255, 255) | Card backgrounds, nav on scroll                |
| Mid Gray     | `#6E6E73` | rgb(110, 110, 115) | Secondary text, captions, eyebrows            |
| Light Gray   | `#D2D2D7` | rgb(210, 210, 215) | Dividers, borders, input strokes               |
| Apple Blue   | `#0071E3` | rgb(0, 113, 227)   | Primary CTA buttons, links                     |
| Blue Hover   | `#0077ED` | rgb(0, 119, 237)   | Button hover state                             |
| Blue Active  | `#006EDB` | rgb(0, 110, 219)   | Button pressed state                           |
| Black        | `#000000` | rgb(0, 0, 0)       | Dark section backgrounds (iPhone hero)         |

### Contextual Color Roles

| Role               | Value     | Notes                                              |
|--------------------|-----------|----------------------------------------------------|
| Page Background    | `#F5F5F7` | Most marketing pages; not pure white               |
| Section Dark       | `#000000` | Alternating sections for drama; full black         |
| Section White      | `#FFFFFF` | Specs, features, lighter contrast sections         |
| Nav Background     | `rgba(255,255,255,0.72)` | Frosted glass; requires backdrop-filter  |
| Text Primary       | `#1D1D1F` | On light backgrounds                               |
| Text on Dark       | `#F5F5F7` | On black sections; never pure white                |
| Text Secondary     | `#6E6E73` | Supporting text, labels                            |
| Link Default       | `#0071E3` | Inline links and ghost button labels               |

---

## 4. Layout System

### Container
```css
--content-width: 980px;
--content-width-wide: 1200px;
--content-padding: 0 22px;
```
The canonical 980px content width is a deliberate legacy constraint that predates modern widescreen — it remains intentionally narrow to enforce line-length discipline and center content on large displays.

### Grid
No traditional CSS Grid framework. Apple uses purpose-built layout for each section type:

- **Hero sections:** Full viewport width, media fills 100vw, text overlaid or below
- **Feature grid:** 2-col or 3-col at 980px max-width, equal columns with 20px gap
- **Specs grid:** 2-col at 980px, label/value pairs
- **Gallery:** 4-col image grid with 4px gaps at full bleed

### Spacing Scale
```
--space-4:   4px
--space-8:   8px
--space-12:  12px
--space-16:  16px
--space-20:  20px
--space-24:  24px
--space-32:  32px
--space-48:  48px
--space-64:  64px
--space-80:  80px
--space-100: 100px
--space-120: 120px
--space-160: 160px
--space-200: 200px
```

### Section Padding
- **Standard section:** 100px top, 100px bottom
- **Hero section:** 120px–200px top padding (accounts for sticky nav height)
- **Compact section:** 64px top/bottom (nested features within a section)
- **Mobile:** Halved — 48px–80px section padding

---

## 5. Navigation

### Structure
Sticky top navigation, full-width, 44px height (Apple's canonical touch target height).

```
[Apple Logo] [Mac] [iPad] [iPhone] [Watch] [Vision] [AirPods] [TV & Home] [Entertainment] [Accessories] [Support]
                                                                                          [Search] [Bag]
```

### Visual Treatment
- **Default (top of page):** Transparent background, dark or light text depending on hero
- **Scrolled state:** `backdrop-filter: blur(20px) saturate(180%)`, `background: rgba(255,255,255,0.72)`
- **Dark hero variant:** `background: rgba(0,0,0,0.72)` with white text
- Height: **44px**; font-size: **12px**; font-weight: **400**; letter-spacing: **-0.01em**
- Nav links color: `#1D1D1F` (light) / `#F5F5F7` (dark)
- Active link: no underline; color shift only
- Mega-menu appears on hover with white card, full-width, 16px padding

### Mobile Navigation
- Hamburger menu at 768px breakpoint
- Full-screen overlay, white background
- Large tap targets, 52px height per item

---

## 6. Buttons

### Primary CTA
```css
.btn-primary {
  background-color: #0071E3;
  color: #FFFFFF;
  border-radius: 980px;          /* pill shape */
  padding: 12px 22px;
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: inline-block;
  text-decoration: none;
}

.btn-primary:hover  { background-color: #0077ED; }
.btn-primary:active { background-color: #006EDB; }
```

### Ghost / Outline CTA
```css
.btn-ghost {
  background-color: transparent;
  color: #0071E3;
  border: 1.5px solid #0071E3;
  border-radius: 980px;
  padding: 12px 22px;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.022em;
  transition: all 0.2s ease;
}

.btn-ghost:hover {
  background-color: #0071E3;
  color: #FFFFFF;
}
```

### Text Link CTA
```css
.btn-link {
  color: #0071E3;
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  border-bottom: none;
}

.btn-link::after {
  content: " ›";
  font-size: 18px;
}

.btn-link:hover { text-decoration: underline; }
```

### Button Sizing
- **Standard:** padding 12px 22px, height ~42px
- **Small:** padding 8px 16px, font-size 14px
- Button groups stack vertically on mobile (gap: 12px)

---

## 7. Cards & Containers

### Product Card
- Background: `#FFFFFF` or `#F5F5F7`
- Border-radius: **18px** (consistent with Apple hardware radius language)
- Padding: 48px all sides on desktop; 32px on mobile
- No box-shadow in default marketing context; subtle `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` in commerce/grid contexts
- Overflow: hidden (image fills to edge on some cards)

### Feature Tile (within grid)
```css
.feature-tile {
  background: #FFFFFF;
  border-radius: 18px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
```

### Sticky Buy Bar (commerce)
- Fixed bottom bar on product pages
- Height: 52px
- Background: `rgba(255,255,255,0.9)` with blur
- Contains: product name (left), price + CTA buttons (right)

---

## 8. Forms & Inputs

### Text Input
```css
.input-field {
  background: #FFFFFF;
  border: 1px solid #D2D2D7;
  border-radius: 12px;
  padding: 12px 16px;
  font-family: var(--font-text);
  font-size: 17px;
  color: #1D1D1F;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
}

.input-field:focus {
  border-color: #0071E3;
  box-shadow: 0 0 0 3px rgba(0,113,227,0.25);
}

.input-field::placeholder { color: #6E6E73; }
```

### Select / Dropdown
- Custom-styled to match input aesthetic
- Chevron icon replaces native arrow
- Same border, border-radius, and height as text input

### Form Labels
- Font-size: 14px; font-weight: 400; color: #1D1D1F
- Positioned above input, 6px margin-bottom

### Checkout / Commerce Forms
- Multi-step wizard pattern
- Progress indicator at top (thin blue line, 2px)
- Generous spacing between fields: 20px gap

---

## 9. Images & Media

### Hero Photography
- Full viewport width (`100vw`) imagery
- Aspect ratios: 16:9 for landscape hero, custom crop for portrait
- Images load at **2x resolution** for retina displays
- `object-fit: cover` with strategic `object-position` for key subject placement
- Alt text required; Apple's media is decorative but remains accessible

### Product Photography
- Shot on seamless white or black background
- Floating/isolated product renders at large scale
- Drop shadow when needed: `filter: drop-shadow(0 40px 80px rgba(0,0,0,0.4))`

### Video Backgrounds
- Autoplay, muted, loop, playsinline
- `<video>` element; no canvas fallback
- Poster frame matches first video frame to eliminate flash
- Fallback still image for reduced-motion users
```html
<video autoplay muted loop playsinline poster="hero-poster.jpg">
  <source src="hero.mp4" type="video/mp4">
</video>
```

### Lazy Loading
- `loading="lazy"` on below-fold images
- `fetchpriority="high"` on hero/LCP images
- WebP with JPEG fallback

### Gallery
- 4-up grid on desktop; 2-up on tablet; 1-up on mobile
- 4px gap between images
- Lightbox on click: dark overlay, centered image, close (✕) button

---

## 10. Animation & Motion

### Core Easing
```css
--ease-spring:   cubic-bezier(0.4, 0, 0.2, 1);       /* Material-inspired spring */
--ease-reveal:   cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Ease out for reveals */
--ease-in-out:   cubic-bezier(0.42, 0, 0.58, 1);
```

### Scroll-Triggered Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s var(--ease-reveal), transform 0.6s var(--ease-reveal);
}

.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}
```
Stagger delay per child: `animation-delay: calc(var(--index) * 0.08s)`

### Product Parallax / Pinned Scroll
- Hero sections use `position: sticky` + scroll progress
- Product imagery scales up as user scrolls: `transform: scale(1.0 → 1.12)`
- Text fades and moves upward while image persists

### Navigation Transition
- Blur/frosted glass effect transitions in over 0.3s when scrolling past 44px
- Easing: `ease-in-out`

### Hover States
- Button color: 0.2s ease
- Nav item: no animation, instant color shift
- Image zoom on hover (gallery): `transform: scale(1.02)`, 0.4s ease-out

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  video[autoplay] { display: none; }
}
```

---

## 11. Icons & Decorative Elements

### Icon System
- **SF Symbols** (Apple's proprietary icon library) used throughout
- Rendered as SVG or as font glyphs on Apple platforms
- Size: 16px, 20px, 24px — follow text size for inline use
- Color inherits from surrounding text (`currentColor`)
- Stroke weight: 1.5–2px equivalent in the SF Symbols regular weight

### Decorative Lines / Dividers
- `<hr>` style: `border-top: 1px solid #D2D2D7`; no margin decoration
- Section transitions: full-bleed background color change (no visible lines)

### Badges / Chips
```css
.badge {
  display: inline-block;
  background: #E8E8ED;
  color: #1D1D1F;
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

### No Decorative Flourishes
- Zero use of gradient backgrounds in marketing (exception: product chip color panels)
- No drop shadows on text
- No background patterns or textures
- Restraint is the signature

---

## 12. Unique Signature

Apple's web design is recognizable by a specific constellation of choices that no other brand combines in the same way:

1. **The 980px centered island** — everything lives in a narrow centered column surrounded by vast gray space; feels like a framed exhibit
2. **The pinned scroll reveal** — products appear to "assemble" or "emerge" as you scroll through a sticky section; technically achieved via `position: sticky` + scroll-progress tracking
3. **The color alternate** — pages flip between `#F5F5F7`, `#FFFFFF`, and `#000000` sections; the rhythm is always dark → light → dark or vice versa at key product moments
4. **SF Pro's tracking at scale** — negative letter-spacing at large sizes is distinctly Apple; no other brand pushes `-0.025em` at 96px
5. **No illustration, no icon packs** — photography or nothing; SF Symbols for UI only; zero Lottie animations or branded illustrations
6. **The frosted nav** — `backdrop-filter: blur(20px) saturate(180%)` at exactly 44px height; anyone who's been on apple.com knows this pattern immediately

These five choices together = immediately recognizable Apple without seeing the logo.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "SF Pro Display", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-text: "SF Pro Text", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;

  --text-hero: 6rem;          /* 96px */
  --text-section: 3.5rem;     /* 56px */
  --text-feature: 2.5rem;     /* 40px */
  --text-subheading: 1.75rem; /* 28px */
  --text-body-lg: 1.3125rem;  /* 21px */
  --text-body: 1.0625rem;     /* 17px */
  --text-caption: 0.875rem;   /* 14px */
  --text-label: 0.75rem;      /* 12px */

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;

  --leading-tight: 1.05;
  --leading-snug: 1.2;
  --leading-normal: 1.55;
  --leading-relaxed: 1.6;

  --tracking-tight: -0.025em;
  --tracking-normal: 0em;
  --tracking-wide: 0.04em;

  /* Colors */
  --color-text-primary: #1D1D1F;
  --color-text-secondary: #6E6E73;
  --color-text-on-dark: #F5F5F7;
  --color-bg-default: #F5F5F7;
  --color-bg-white: #FFFFFF;
  --color-bg-dark: #000000;
  --color-border: #D2D2D7;
  --color-blue: #0071E3;
  --color-blue-hover: #0077ED;
  --color-blue-active: #006EDB;
  --color-nav-bg: rgba(255, 255, 255, 0.72);
  --color-nav-bg-dark: rgba(0, 0, 0, 0.72);

  /* Layout */
  --content-width: 980px;
  --content-width-wide: 1200px;
  --content-padding-x: 22px;
  --nav-height: 44px;

  /* Spacing */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 80px;
  --space-100: 100px;
  --space-120: 120px;
  --space-160: 160px;
  --space-200: 200px;

  /* Section Padding */
  --section-padding: 100px;
  --section-padding-compact: 64px;
  --section-padding-hero: 160px;

  /* Borders & Radius */
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-pill: 980px;

  /* Buttons */
  --btn-padding: 12px 22px;
  --btn-font-size: 1.0625rem; /* 17px */
  --btn-border-radius: var(--radius-pill);
  --btn-primary-bg: #0071E3;
  --btn-primary-bg-hover: #0077ED;
  --btn-primary-color: #FFFFFF;

  /* Animation */
  --ease-spring: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-reveal: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --duration-fast: 0.2s;
  --duration-normal: 0.4s;
  --duration-slow: 0.6s;

  /* Navigation */
  --nav-backdrop: blur(20px) saturate(180%);
  --nav-bg-scrolled: rgba(255, 255, 255, 0.72);
  --nav-font-size: 0.75rem;   /* 12px */
  --nav-font-weight: 400;
}
```
