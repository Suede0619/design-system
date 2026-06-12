# Aesop — Design System

## 1. Overview

- **Site:** aesop.com
- **URL:** https://www.aesop.com
- **What they do:** Australian luxury skincare brand founded in 1987. Known for meticulous formulations, architect-collaborated retail stores, and a literary, philosophy-informed brand voice. Products are sold in distinctive amber glass bottles with minimal serif labels.
- **Awards:** Multiple Cannes Lions; recognized as one of the most coherent and prestigious luxury digital experiences; Work & Co redesign widely cited in design industry
- **Aesthetic:** Literary luxury. The primary aesthetic vocabulary is drawn from libraries, apothecaries, and rare bookshops: warm stone tones, precise serif typography, dark amber, and architectural grid structures. The copy is as important as the visuals — Aesop is one of the few brands that writes like a novelist, and the design supports this at every scale.

---

## 2. Typography

### Primary Font
- **Family:** "Vendetta" or "Canela" (luxury serif with ink contrast) — alternatively a precision antiquarian-style serif
- **Fallback:** "Georgia", "Times New Roman", serif
- **Weights:** 300–400 for headings (light serif carries luxury), 400 for body
- **Character:** High contrast strokes, elegant descenders, classical proportions

### Secondary / UI Font  
- **Family:** "Futura PT" or similar geometric sans for navigation and small UI
- **Fallback:** "Helvetica Neue", system-ui, sans-serif
- **Weight:** 300–400, sparse
- **Usage:** Navigation, captions, UI labels only

### Heading Hierarchy
| Level | Size | Weight | Font | Notes |
|-------|------|--------|------|-------|
| Hero | clamp(2.5rem, 5vw, 5rem) | 300–400 | Serif | Lowercase, wide leading |
| H2 | clamp(1.75rem, 3.5vw, 3rem) | 300–400 | Serif | Section titles, elegant |
| H3 | 1.375–1.625rem | 400 | Serif | Product callouts |
| Body | 1rem | 400 | Serif | 18px, 1.8 leading — literary |
| Nav | 0.75rem | 300–400 | Sans | Uppercase, very spaced |
| Label | 0.6875rem | 400 | Sans | All caps, 0.15em spacing |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Parchment | `#F4EFE6` | Primary background |
| Warm Ivory | `#EEE8DC` | Alt backgrounds |
| Stone | `#D8CEBC` | Borders, dividers |
| Limestone | `#B8AD98` | Secondary text |
| Bark | `#7A6A52` | Body text |
| Umber | `#3A2E20` | Headings, primary text |
| Black Earth | `#1A1410` | Maximum dark |

### Amber (Signature)
| Name | Hex | Usage |
|------|-----|-------|
| Amber Bottle | `#8B5E3C` | Brand icon color, accent elements |
| Deep Amber | `#6B4428` | Hover states, active elements |
| Amber Light | `#C89060` | Warm tints, highlights |
| Amber Wash | `rgba(139,94,60,0.08)` | Subtle background tints |

### Dark Mode (Footer / Special)
| Name | Hex | Usage |
|------|-----|-------|
| Dark Earth | `#1E1810` | Dark sections |
| Dark Stone | `#2E2418` | Dark card surfaces |

### Gradients
- **Warm hero:** `linear-gradient(135deg, #F4EFE6 0%, #EEE8DC 100%)`
- **Amber veil:** `linear-gradient(180deg, rgba(244,239,230,0) 0%, rgba(244,239,230,1) 80%)` — text-over-image fade
- No sharp gradients — all color transitions are pigment-like, natural

---

## 4. Layout System

### Container
- **Max-width:** 1280px
- **Padding:** 0 clamp(24px, 5vw, 80px)

### Grid
- **Columns:** 12
- **Gutter:** 32px (generous)
- **Product grid:** 3-up desktop, 2-up tablet, 1-up mobile
- **Breakpoints:** Mobile 0-768px, Tablet 768-1200px, Desktop 1200px+

### Section Spacing
- **Vertical:** 100–140px desktop, 72px tablet, 56px mobile
- **Literary sections:** 120–160px vertical — generous, respectful of the text

### Layout Patterns
- Single-image full-bleed hero with minimal headline overlay
- 3-column product grid with generous gutters
- 2-column literary feature: image left (5), text right (7)
- Full-width pull-quote in display serif
- Athenaeum (editorial): modular grid of article cards
- Store finder: map + list dual view

---

## 5. Navigation

- **Style:** Transparent → parchment on scroll, extremely minimal
- **Height:** 56px
- **Background:** `rgba(244,239,230,0.95)` with `backdrop-filter: blur(8px)` on scroll
- **Logo:** Aesop wordmark in `#3A2E20`, Futura-style tracking
- **Links:** 11px, uppercase, 300–400 weight, `#7A6A52` → `#1A1410`
- **Letter-spacing:** 0.12em on nav links
- **CTA:** No button — "Shop" text link, bag icon
- **Mobile:** Full-screen dark overlay with Futura uppercase menu items

---

## 6. Buttons

### Primary CTA (Add to Cart)
- **Background:** `#1A1410`
- **Text:** Parchment `#F4EFE6`, 12px, uppercase, tracked
- **Padding:** 14px 32px
- **Border-radius:** 0px — no radius
- **Hover:** `#3A2E20`

### Secondary
- **Background:** transparent
- **Border:** `1px solid #7A6A52`
- **Text:** `#3A2E20`, 12px uppercase
- **Hover:** background `#EEE8DC`

### Text Link (Primary navigation action)
- Underline on hover, 200ms
- Arrow `→` appears on hover with 4px shift

---

## 7. Cards & Components

### Product Card
- Clean white/parchment background
- Image: 3:4 ratio, square amber bottle photography on neutral ground
- No border at rest
- Hover: very subtle elevation `0 4px 20px rgba(58,46,32,0.08)`
- Product name: 13px, sans, uppercase, tracked
- Price: 13px, sans, regular

### Editorial Card (Athenaeum)
- Mixed aspect ratios
- Image (full-bleed top), category label, title in serif
- Long-form excerpt copy below

### Pull Quote
- Center-aligned, 2.5–4rem serif
- `#8B5E3C` amber for the quotation mark
- Attribution in small sans caps below

### Ingredient Feature
- Dark amber background `#1A1410`
- Amber bottle image
- Ingredient name in serif display
- Description in body serif

---

## 8. Motion & Animation

### Page Load
- Extremely restrained: content fades in 600ms, no Y offset
- Images load with progressive reveal (blur-to-sharp)

### Scroll Animations
- Opacity-only reveals, no translate (matches literary stillness)
- Image parallax: subtle 0.1x speed difference

### Product Photography
- On hover: alternate product angle crossfades at 400ms
- Color/variant change: 200ms crossfade

### Micro-interactions
- Button hover: 200ms background darken, no scale
- Nav hover: 150ms color deepen
- Cart: side drawer, 350ms ease

### Signature Behavior
- Reading time estimates on Athenaeum articles
- No auto-play video — respects reader pace
- Cursor: standard (not custom — respects literary convention)

### Easing
- All deliberate: `cubic-bezier(0.6, 0.05, 0, 0.95)` — slow out, unhurried
- Durations: 200ms micro, 400ms standard, 600ms reveal

---

## 9. Layout Strategy

**The page as page.** Aesop's site architecture borrows from book design: margins are generous, type columns are narrow for readability, imagery breathes. Sections have the rhythm of chapters. The product is important but never desperate — it sits within a world of literature, architecture, and philosophy. Buying is incidental to the experience of inhabiting the brand's world.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** Copy at the center. Aesop is one of the only luxury brands whose website design assumes the visitor can and wants to read. The body text is 18px, 1.8 line-height, in a serif that was designed for book setting. The navigation, layout, and whitespace are all arranged in service of words. In a world of image-first luxury, Aesop's literary design ethic is radically differentiated.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-display: "Vendetta", "Canela", "Georgia", "Times New Roman", serif;
  --font-ui: "Futura PT", "Helvetica Neue", system-ui, sans-serif;

  --font-size-hero: clamp(2.5rem, 5vw, 5rem);
  --font-size-h1: clamp(2rem, 4vw, 4rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.75rem);
  --font-size-h3: 1.5rem;
  --font-size-body: 1.125rem; /* 18px literary */
  --font-size-small: 0.875rem;
  --font-size-nav: 0.6875rem;
  --font-size-label: 0.6875rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  --line-height-hero: 1.1;
  --line-height-tight: 1.2;
  --line-height-normal: 1.8; /* literary */
  --line-height-body: 1.8;

  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-nav: 0.12em;
  --letter-spacing-label: 0.15em;

  /* Colors */
  --color-bg: #F4EFE6;
  --color-bg-ivory: #EEE8DC;
  --color-bg-dark: #1E1810;

  --color-text-primary: #1A1410;
  --color-text-heading: #3A2E20;
  --color-text-body: #7A6A52;
  --color-text-muted: #B8AD98;
  --color-text-inverted: #F4EFE6;

  --color-border: #D8CEBC;
  --color-border-mid: #B8AD98;

  --color-amber: #8B5E3C;
  --color-amber-deep: #6B4428;
  --color-amber-light: #C89060;
  --color-amber-wash: rgba(139, 94, 60, 0.08);

  /* Gradients */
  --gradient-warm: linear-gradient(135deg, #F4EFE6 0%, #EEE8DC 100%);
  --gradient-text-veil: linear-gradient(180deg, rgba(244,239,230,0) 0%, rgba(244,239,230,1) 80%);

  /* Spacing */
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-14: 56px;
  --space-18: 72px;
  --space-25: 100px;
  --space-35: 140px;

  /* Layout */
  --container-max: 1280px;
  --container-padding: clamp(24px, 5vw, 80px);
  --section-padding: 140px;
  --section-padding-tablet: 72px;
  --section-padding-mobile: 56px;

  /* Border Radius — Zero philosophy */
  --radius-none: 0px;
  --radius-sm: 0px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-minimal: 0 2px 12px rgba(58, 46, 32, 0.06);
  --shadow-card: 0 4px 20px rgba(58, 46, 32, 0.08);

  /* Nav */
  --nav-height: 56px;
  --nav-blur: 8px;

  /* Transitions */
  --ease-literary: cubic-bezier(0.6, 0.05, 0, 0.95);
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 200ms;
  --duration-standard: 400ms;
  --duration-reveal: 600ms;
}
```

---

## 12. Category Tags

`light` `luxury-skincare` `literary` `serif-dominant` `amber-palette` `editorial` `zero-radius` `parchment` `typography-first` `e-commerce`
