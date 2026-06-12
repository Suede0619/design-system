# Immersive Garden — Design System

## 1. Overview

- **Site:** immersive-g.com
- **Award:** Awwwards Agency of the Year 2025
- **What makes it special:** A dark luxury WebGL portfolio that turns every page into a cinematic 3D scene. Case studies don't just show work — they immerse you in it. The site treats interaction as performance art.
- **Aesthetic:** Dark opulence meets digital craftsmanship. Near-black backgrounds frame refined serif typography and carefully placed content. Gold accents whisper luxury without shouting. WebGL scenes create depth that flat design cannot touch.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Playfair Display" (or equivalent high-contrast didone serif)
- **Weight:** 400 (Regular) — the contrast in the letterforms provides visual weight
- **Size range:** 48px–100px (clamp(3rem, 6vw, 6.25rem))
- **Letter-spacing:** 0em (natural spacing for serif)
- **Text-transform:** none

### Body Font
- **Family:** "Sora" (geometric sans, clean and minimal)
- **Weight:** 300 (Light) for body, 400 (Regular) for emphasis
- **Size:** 16px / 1rem
- **Line-height:** 1.75

### Caption / UI Font
- **Family:** "Sora"
- **Weight:** 400 (Regular)
- **Size:** 11px / 0.6875rem
- **Letter-spacing:** 0.12em
- **Text-transform:** uppercase

### Heading Hierarchy
| Level | Size | Font | Weight | Letter-spacing |
|-------|------|------|--------|----------------|
| h1 | 88px / 5.5rem | Playfair Display | 400 | 0 |
| h2 | 64px / 4rem | Playfair Display | 400 | 0 |
| h3 | 40px / 2.5rem | Playfair Display | 400 | 0 |
| h4 | 24px / 1.5rem | Sora | 500 | 0.02em |
| h5 | 18px / 1.125rem | Sora | 500 | 0.02em |
| h6 | 11px / 0.6875rem | Sora | 400 | 0.12em |

### Special Text Treatments
- **Floating text:** Headlines positioned in 3D space, moving with parallax relative to scroll
- **Gold shimmer:** Display text with subtle animated gradient (`#C5A55A` → `#E8D5A0` → `#C5A55A`) on hover
- **Outline serif:** 1px stroke, no fill, for oversized decorative numerals
- **Italic emphasis:** Playfair Display Italic for quotes and artistic statements

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Void | `#080808` | Primary background |
| Obsidian | `#111111` | Elevated surface |
| Champagne Gold | `#C5A55A` | Accent, highlights, links |
| Alabaster | `#F2EDE8` | Primary text on dark |
| Smoke | `#1C1C1C` | Card backgrounds |

### Background Colors
- **Primary:** `#080808`
- **Elevated:** `#111111`
- **Card:** `#1C1C1C`
- **Overlay (WebGL):** `#000000` at 40% opacity
- **No light mode.** This site exists in controlled darkness.

### Text Colors
- **Primary:** `#F2EDE8` (warm off-white)
- **Secondary:** `#8A8A8A`
- **Muted:** `#555555`
- **Accent:** `#C5A55A`
- **Hover accent:** `#E8D5A0`

### Accent / CTA Colors
- **Primary:** `#C5A55A` (Champagne Gold)
- **Hover:** `#E8D5A0`
- **Active:** `#A8893D`

### Gradients
- **Gold shimmer:** `linear-gradient(90deg, #C5A55A 0%, #E8D5A0 50%, #C5A55A 100%)` — animated background-position
- **Scene overlay:** `radial-gradient(ellipse at center, transparent 40%, rgba(8,8,8,0.9) 100%)`
- **Vignette:** `radial-gradient(ellipse at center, transparent 60%, #080808 100%)`

### Color Usage Rules
- Gold is exclusively for interactive elements, the cursor, and intentional highlights. Never for backgrounds.
- White text is warm (`#F2EDE8`), never pure white — pure white feels cheap against this palette.
- WebGL scenes should have vignette overlays to draw focus to center content.
- Color is scarce. Scarcity creates value.

---

## 4. Layout System

### Container
- **Max-width:** 1400px
- **Padding:** 0 clamp(32px, 6vw, 120px)

### Grid
- **Columns:** 12
- **Gutter:** 32px
- **Breakpoints:**
  - Mobile: 0–767px
  - Tablet: 768px–1199px
  - Desktop: 1200px+

### Section Spacing
- **Section padding:** 200px 0 (desktop), 120px 0 (tablet), 80px 0 (mobile)
- **Between components:** 120px
- **Spacing scale:** 8, 16, 24, 32, 48, 64, 80, 120, 200

### Content Alignment
- Hero: centered, full-viewport, text over WebGL scene
- Case studies: asymmetric composition, 7-column image + 5-column text
- About sections: centered narrow text (max-width 640px)
- Numbers/stats: scattered/organic placement, not rigid grid

### Responsive Behavior
- WebGL scenes simplify or swap to video on mobile for performance
- Content stacks vertically on tablet/mobile
- Extra-generous spacing preserved on mobile — never cramped
- Typography scales gently (h1: 88px → 36px on mobile)

---

## 5. Navigation

- **Style:** Fixed, minimal — almost invisible. Transparent always, never solid background.
- **Height:** 80px desktop, 64px mobile
- **Font:** "Sora", 11px, 400 weight, uppercase, letter-spacing 0.12em
- **Active state:** `#C5A55A` text
- **Hover:** Opacity 0.5 → 1, color shift to `#C5A55A`, 300ms
- **Mobile:** Full-screen overlay with WebGL background, nav items centered, Playfair Display 48px
- **Logo:** Left-aligned, custom "IG" monogram or logotype, `#F2EDE8`, 24px
- **Cursor:** Custom cursor — small gold circle (12px) that scales up on hover targets

---

## 6. Buttons

### Primary Button
- **Background:** transparent
- **Border:** 1px solid `#C5A55A`
- **Text:** `#C5A55A`, 11px, 400 weight, uppercase, letter-spacing 0.12em
- **Padding:** 16px 40px
- **Border-radius:** 0px
- **Hover:** Background fills `#C5A55A`, text becomes `#080808`, 300ms ease

### Secondary / Outline Button
- **Background:** transparent
- **Border:** 1px solid `#555555`
- **Text:** `#F2EDE8`, same sizing
- **Hover:** Border `#F2EDE8`, text `#F2EDE8`, 300ms

### Ghost Button
- **Background:** transparent
- **Border:** none
- **Text:** `#C5A55A`, 11px, uppercase
- **Arrow icon:** Right-pointing, 12px, animates right 8px on hover
- **Underline:** Slides in from left on hover, 1px `#C5A55A`

### CTA Button
- **Same as primary, slightly larger:** padding 20px 48px, 13px text
- **Used rarely — CTAs are understatement, not shout**

### Icon Button
- **Size:** 48px × 48px
- **Background:** transparent
- **Border:** 1px solid `#333333`
- **Border-radius:** 50%
- **Icon:** 16px, `#F2EDE8`
- **Hover:** Border `#C5A55A`, icon `#C5A55A`, 300ms

---

## 7. Cards & Containers

### Case Study Card
- **Background:** `#1C1C1C`
- **Border:** none
- **Border-radius:** 0px
- **Shadow:** none
- **Aspect ratio:** 16:9
- **Hover:** Image reveals from mask (clip-path wipe), title fades in, scale(1.02) on container
- **Text:** Overlaid on bottom, 200px gradient from transparent → `#1C1C1C`

### Service Card
- **Background:** transparent
- **Border-top:** 1px solid `#333333`
- **Padding:** 40px 0
- **Layout:** Number (gold, 48px) + title + description in row
- **Hover:** Number scales(1.1), border-top transitions to `#C5A55A`

### Team Card
- **Background:** `#111111`
- **Border-radius:** 0px
- **Image:** Grayscale by default, color on hover (filter transition 500ms)
- **Name:** 14px, Sora, 500 weight
- **Role:** 11px, uppercase, `#8A8A8A`

### Metric Card
- **Background:** transparent
- **Number:** Playfair Display, 80px, `#C5A55A`
- **Label:** 11px, uppercase, `#8A8A8A`, letter-spacing 0.12em
- **Layout:** Vertically stacked, centered

---

## 8. Forms & Inputs

### Input Field
- **Background:** transparent
- **Border:** none (bottom border only — 1px solid `#333333`)
- **Padding:** 16px 0
- **Font:** "Sora", 16px, 300 weight, `#F2EDE8`
- **Placeholder:** `#555555`

### Focus State
- **Border-bottom:** 1px solid `#C5A55A`
- **Transition:** 300ms ease

### Label
- **Position:** above, left-aligned
- **Font:** 11px, 400 weight, uppercase, `#8A8A8A`, letter-spacing 0.12em
- **Margin-bottom:** 12px

### Error State
- **Border-bottom:** 1px solid `#E05555`
- **Error text:** 11px, `#E05555`, margin-top 8px

### Select / Dropdown
- **Same bottom-border style**
- **Custom chevron:** 10px, `#8A8A8A`
- **Dropdown:** `#111111` background, no radius

### Checkbox / Radio
- **Size:** 16px × 16px
- **Border:** 1px solid `#555555`
- **Checked:** `#C5A55A` fill, no checkmark icon — just the fill
- **Focus:** Gold outline, 2px offset

---

## 9. Images & Media

### Image Treatment
- **Corners:** 0px
- **Shadows:** None
- **Overlays:** Vignette gradient on large images
- **Filters:** Default grayscale, transitions to color on hover/reveal

### Aspect Ratios
- Case study hero: 16:9
- Detail shots: 3:2
- Team portraits: 3:4
- Full-screen: 100vw × 100vh

### Image Hover
- Grayscale → color transition (filter: grayscale(1) → grayscale(0)), 500ms
- Slight scale(1.03), 600ms ease-out

### Video Treatment
- Inline video as case study previews, autoplay muted loop
- Full-screen video as scene backdrops behind WebGL layers
- Custom minimal controls: thin white progress bar, play/pause icon only

### Illustration Style
- N/A — 3D WebGL renders replace illustration. Abstract geometric shapes, particle systems, and custom shaders serve as visual storytelling.

---

## 10. Animation & Motion

### Page Transitions
- **Style:** WebGL shader transition — morph/dissolve between scenes
- **Duration:** 800ms
- **Easing:** custom GLSL easing (approximates cubic-bezier(0.7, 0, 0.3, 1))

### Scroll Animations
- **Fade-up:** Y: 60px → 0, opacity 0 → 1, 800ms
- **Parallax:** Multi-layer depth — text at 1x, images at 0.6x, WebGL at 0.3x
- **Reveal mask:** Clip-path animations reveal images/sections
- **Scale reveal:** Elements start at scale(0.95) and grow to 1, 600ms
- **Stagger:** 120ms between siblings

### Hover Micro-interactions
- **Custom cursor:** Gold circle scales from 12px to 48px on interactive targets, blends with mix-blend-mode: difference
- **Cards:** Mask reveal + title fade-in, 400ms
- **Navigation:** Opacity + color shift, 300ms
- **Text:** Gold shimmer gradient animation, 600ms

### Loading States
- **Page load:** Full-screen WebGL loading scene with progress percentage
- **Progress:** 11px, uppercase, `#8A8A8A` — number counts up (0–100)
- **Transition:** Loading scene morphs into first section

### Timing Functions
- **Smooth:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Dramatic:** cubic-bezier(0.7, 0, 0.3, 1)
- **Bounce subtle:** cubic-bezier(0.34, 1.56, 0.64, 1) — for cursor only

### Performance Notes
- WebGL scenes use LOD (level of detail) — reduce complexity on mobile/low-power
- Use `requestAnimationFrame` for all WebGL, never `setInterval`
- Parallax via CSS `transform: translate3d` for non-WebGL elements
- Mobile fallback: replace WebGL with video loops or static images
- Monitor GPU memory — dispose unused textures/geometries

---

## 11. Icons & Decorative Elements

### Icon Style
- **Style:** Ultra-minimal custom SVG, 1px stroke
- **Size:** 16px default
- **Color:** `#F2EDE8`, `#C5A55A` on hover
- **Icons used:** Arrow (→), play, close, menu (2 lines), social icons only

### Decorative Elements
- **WebGL particles:** Floating gold dust particles in hero scenes
- **Grid lines:** Faint grid overlay (`#1C1C1C`, 1px) visible behind content, architectural reference
- **Cursor trail:** Subtle gold particle trail on cursor movement
- **Section numbers:** Large outlined numerals (Playfair Display, 200px, 4% opacity)

### Dividers
- **Horizontal rule:** 1px solid `#333333`
- **No visible dividers between most sections** — spacing alone
- **Gold accent rule:** 32px × 1px `#C5A55A`, used sparingly for emphasis

### Background Textures
- **Noise grain:** PNG overlay at 1.5% opacity, adds film texture to flat dark surfaces
- **WebGL scenes:** The 3D environment IS the background texture

---

## 12. Unique Signature

**The ONE thing:** The custom cursor — a gold circle that breathes and transforms based on context. Over text, it shrinks. Over images, it expands with a "View" label. Over the background, it's a gentle gold dot. Combined with WebGL transitions between pages, the entire experience feels like navigating a gallery, not a website.

**How to replicate:**
1. Hide default cursor (`cursor: none` on body)
2. Create a `<div>` positioned absolutely, following mouse with `transform: translate()` via `requestAnimationFrame`
3. Base state: 12px circle, `border: 1px solid #C5A55A`, `border-radius: 50%`
4. Hover state (interactive): Scale to 48px, add text label ("View", "Open"), `mix-blend-mode: difference`
5. Transition: `width/height` with `cubic-bezier(0.34, 1.56, 0.64, 1)` for subtle bounce
6. Add trailing particles: spawn small gold dots that fade and shrink over 600ms
7. Disable custom cursor on touch devices — check `matchMedia('(pointer: coarse)')`

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "Playfair Display", "Georgia", serif;
  --font-body: "Sora", "Helvetica Neue", sans-serif;
  --font-ui: "Sora", "Helvetica Neue", sans-serif;

  --font-size-h1: clamp(2.25rem, 5.5vw, 5.5rem);
  --font-size-h2: clamp(1.75rem, 4vw, 4rem);
  --font-size-h3: clamp(1.5rem, 2.5vw, 2.5rem);
  --font-size-h4: 1.5rem;
  --font-size-h5: 1.125rem;
  --font-size-h6: 0.6875rem;
  --font-size-body: 1rem;
  --font-size-caption: 0.6875rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  --line-height-tight: 1.1;
  --line-height-heading: 1.15;
  --line-height-normal: 1.75;

  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;
  --letter-spacing-wider: 0.12em;

  /* Colors */
  --color-void: #080808;
  --color-obsidian: #111111;
  --color-smoke: #1C1C1C;
  --color-gold: #C5A55A;
  --color-gold-hover: #E8D5A0;
  --color-gold-active: #A8893D;
  --color-alabaster: #F2EDE8;

  --color-bg-primary: #080808;
  --color-bg-elevated: #111111;
  --color-bg-card: #1C1C1C;

  --color-text-primary: #F2EDE8;
  --color-text-secondary: #8A8A8A;
  --color-text-muted: #555555;
  --color-text-accent: #C5A55A;

  --color-border: #333333;
  --color-border-subtle: #1C1C1C;

  --color-error: #E05555;

  /* Gradients */
  --gradient-gold-shimmer: linear-gradient(90deg, #C5A55A 0%, #E8D5A0 50%, #C5A55A 100%);
  --gradient-vignette: radial-gradient(ellipse at center, transparent 60%, #080808 100%);
  --gradient-scene-overlay: radial-gradient(ellipse at center, transparent 40%, rgba(8, 8, 8, 0.9) 100%);

  /* Spacing */
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 120px;
  --space-5xl: 200px;

  /* Layout */
  --container-max: 1400px;
  --container-padding: clamp(32px, 6vw, 120px);
  --grid-columns: 12;
  --grid-gutter: 32px;
  --content-narrow: 640px;

  /* Section */
  --section-padding-desktop: 200px;
  --section-padding-tablet: 120px;
  --section-padding-mobile: 80px;

  /* Nav */
  --nav-height: 80px;
  --nav-height-mobile: 64px;

  /* Cursor */
  --cursor-size-default: 12px;
  --cursor-size-hover: 48px;
  --cursor-color: #C5A55A;

  /* Border Radius */
  --radius-none: 0px;
  --radius-full: 50%;

  /* Transitions */
  --ease-smooth: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-dramatic: cubic-bezier(0.7, 0, 0.3, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-fast: 300ms;
  --duration-normal: 500ms;
  --duration-slow: 800ms;
  --duration-reveal: 800ms;
}
```
