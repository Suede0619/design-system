# Audo Copenhagen — Design System Reference
**Source:** audo.com
**Awards:** Webby Award Winner 2025 (Best Design)
**Category:** Scandinavian Luxury / Interior Design / E-Commerce
**Last Referenced:** 2026-03-31

---

## 1. Overview

Audo Copenhagen is a Scandinavian design brand whose web presence operates as a living editorial environment — equal parts gallery, showroom, and architecture journal. The site won the 2025 Webby for Best Design in the retail/e-commerce category, and the award reflects a philosophy: remove everything that isn't essential until what remains is undeniably beautiful.

Key principles:
- **Hygge as UI** — warmth comes from texture (warm whites, brass accents) not from busyness
- **Architectural photography as navigation** — imagery IS the interface; text plays a supporting role
- **Restraint as luxury** — no borders, no shadows, no gradients; negative space signals quality
- **Craft over convention** — typography is editorial, never transactional
- **Slow scroll** — designed for readers who want to inhabit the space, not rush through it

The resulting experience feels closer to a coffee-table book about Scandinavian design than a shopping website. Every product feels like an object worth studying.

---

## 2. Typography

### Font Stack
```
--font-heading: "Freight Display Pro", "Freight Display", Georgia, "Times New Roman", serif;
--font-body:    "Suisse Intl", "Suisse Int'l", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
--font-mono:    "Suisse Intl Mono", "Courier New", monospace;
```

**Freight Display Pro** (Jeremy Tankard / GarageFonts) is used exclusively for editorial headings and display text. Its high contrast stroke, generous x-height, and elegantly tapered serifs communicate luxury without ornamentation.

**Suisse Intl** (Swiss Typefaces) is the functional partner — a geometric grotesque with Swiss precision, ideal for navigation, labels, product names, and body copy.

### Type Scale

| Role              | Font           | Size           | Weight | Line Height | Letter Spacing |
|-------------------|----------------|----------------|--------|-------------|----------------|
| Hero Display      | Freight Display | 88px / 5.5rem | 400    | 1.0         | -0.02em        |
| Section Heading   | Freight Display | 56px / 3.5rem | 400    | 1.08        | -0.015em       |
| Feature Heading   | Freight Display | 40px / 2.5rem | 400    | 1.15        | -0.01em        |
| Quote / Callout   | Freight Display | 32px / 2rem   | 300    | 1.25        | 0em            |
| Body Default      | Suisse Intl     | 16px / 1rem   | 300    | 1.65        | 0.01em         |
| Body Small        | Suisse Intl     | 14px / 0.875rem | 300  | 1.6         | 0.01em         |
| Label / Nav       | Suisse Intl     | 12px / 0.75rem | 400   | 1.4         | 0.08em         |
| Product Name      | Suisse Intl     | 18px / 1.125rem | 300  | 1.35        | 0.02em         |
| Price             | Suisse Intl     | 16px / 1rem   | 300    | 1.3         | 0.02em         |

### Type Behavior
- Freight Display is used in normal weight (400) or light (300) — **never bold**; the typeface's inherent contrast carries visual weight without needing mass
- Labels and navigation use **uppercase with wide tracking** (0.08em–0.12em)
- Line lengths are generous — up to 75 characters — contributing to the editorial feel
- Italic Freight Display appears in editorial pull quotes and story features

---

## 3. Color Palette

### Core Palette

| Name         | Hex       | RGB                    | Usage                                              |
|--------------|-----------|------------------------|----------------------------------------------------|
| Warm White   | `#F5F0EB` | rgb(245, 240, 235)     | Primary page background; slightly warm, never cold |
| Charcoal     | `#2C2C2C` | rgb(44, 44, 44)        | Primary text; softer than pure black               |
| Sand         | `#8B8172` | rgb(139, 129, 114)     | Secondary text, captions, muted labels             |
| Olive        | `#5C6B4F` | rgb(92, 107, 79)       | Accent; selected states, nature-themed CTAs        |
| Brass        | `#C4A882` | rgb(196, 168, 130)     | Highlight color; links, hover states, dividers     |
| Cream        | `#EDE8E1` | rgb(237, 232, 225)     | Section alternates; product card backgrounds       |
| Stone        | `#B8AFA6` | rgb(184, 175, 166)     | Tertiary text, inactive states                     |
| Off-White    | `#FAF8F5` | rgb(250, 248, 245)     | Hero sections, hero text overlay areas             |
| Near-Black   | `#1A1A18` | rgb(26, 26, 24)        | Footer background, high-contrast sections          |

### Contextual Color Roles

| Role               | Value     | Notes                                               |
|--------------------|-----------|-----------------------------------------------------|
| Page Background    | `#F5F0EB` | Consistent throughout; not white                    |
| Primary Text       | `#2C2C2C` | Used for all body text and headings                 |
| Secondary Text     | `#8B8172` | Captions, metadata, eyebrow labels                  |
| Accent / CTA Color | `#C4A882` | Brass; used sparingly for emphasis                  |
| Hover State        | `#B8A07A` | Slightly deeper brass on interactive elements       |
| Active State       | `#5C6B4F` | Olive; confirms selection                           |
| Border / Divider   | `#D8D0C6` | Subtle warm gray line                               |
| Footer Background  | `#1A1A18` | Near-black; warm tinted, not cold blue-black        |

---

## 4. Layout System

### Container
```css
--container-max: 1440px;
--container-padding-x: 48px;   /* desktop */
--container-padding-x-md: 32px; /* tablet */
--container-padding-x-sm: 20px; /* mobile */
```

The 1440px container is intentionally wide to accommodate full-bleed editorial photography while keeping text columns legible. Content and photography coexist without hierarchy compression.

### Grid
```css
/* 12-column grid */
--grid-columns: 12;
--grid-gap: 24px;

/* Common column spans */
/* Full bleed:       span 12 */
/* Editorial text:   span 6 (centered: offset 3) */
/* Product grid:     span 4 (3 items per row) */
/* Feature pair:     span 6 each */
/* Text + image:     text span 5, image span 7 */
```

### Spacing Scale
```
--space-4:   4px
--space-8:   8px
--space-16:  16px
--space-24:  24px
--space-32:  32px
--space-40:  40px
--space-48:  48px
--space-56:  56px
--space-64:  64px
--space-80:  80px
--space-96:  96px
--space-120: 120px
--space-160: 160px
```

### Section Spacing
- **Standard section:** 80px top, 80px bottom
- **Editorial/featured section:** 120px top, 120px bottom
- **Hero:** 160px padding-top (below nav), no bottom padding (bleeds into next section)
- **Between product grid items:** 48px vertical gap, 24px horizontal gap
- **Mobile sections:** 48px top/bottom

---

## 5. Navigation

### Structure
Top navigation, minimal, full-width at 1440px max, 72px height.

```
[AUDO]    [Collection] [Designers] [Stories] [About]    [Search] [Cart (0)]
```

### Visual Treatment
- **Default:** Transparent background, charcoal (`#2C2C2C`) text on warm white page
- **On dark/photo sections:** White text (`#FAF8F5`)
- **Scrolled sticky:** `background: rgba(245, 240, 235, 0.92)`, `backdrop-filter: blur(12px)`
- No border or separator beneath nav
- Logo: custom wordmark, 20px height, SVG
- Nav links: 12px, uppercase, letter-spacing 0.08em, weight 400
- Active page: brass (`#C4A882`) color, no underline

### Mobile Navigation
- Hamburger (two lines, minimal) at 1024px breakpoint
- Full-screen overlay in warm white (`#F5F0EB`)
- Links large: 32px Freight Display, left-aligned with generous padding
- Close button (✕) upper right

---

## 6. Buttons

### Primary CTA
```css
.btn-primary {
  background-color: #2C2C2C;
  color: #F5F0EB;
  border: none;
  border-radius: 0px;              /* Square — Scandinavian precision */
  padding: 14px 32px;
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: inline-block;
}

.btn-primary:hover {
  background-color: #C4A882;
  color: #2C2C2C;
}
```

### Secondary / Outlined
```css
.btn-secondary {
  background-color: transparent;
  color: #2C2C2C;
  border: 1px solid #2C2C2C;
  border-radius: 0px;
  padding: 13px 31px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #2C2C2C;
  color: #F5F0EB;
}
```

### Text Link
```css
.btn-text {
  color: #2C2C2C;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid #C4A882;
  padding-bottom: 2px;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.btn-text:hover {
  color: #C4A882;
}
```

---

## 7. Cards & Containers

### Product Card
The Audo product card is defined entirely by **what it lacks**: no border, no shadow, no background color, no radius. The product image and its natural context define the card.

```css
.product-card {
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
}

.product-card__image {
  aspect-ratio: 3 / 4;   /* Portrait — most furniture is vertical */
  width: 100%;
  object-fit: cover;
  display: block;
  margin-bottom: 16px;
}

.product-card__name {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.04em;
  color: #2C2C2C;
  margin-bottom: 4px;
}

.product-card__designer,
.product-card__price {
  font-size: 12px;
  color: #8B8172;
  letter-spacing: 0.04em;
}
```

### Editorial Feature Card
```css
.feature-card {
  background: #EDE8E1;  /* Cream — distinguishes from page bg */
  padding: 48px;
  border-radius: 0;
}
```

### Story / Blog Card
- Full-bleed image (aspect ratio 16:9 or 4:3)
- Category label above in brass (#C4A882), uppercase, 11px
- Heading in Freight Display, 28px
- No card background — text overlays or sits below image

---

## 8. Forms & Inputs

### Text Input
```css
.input-field {
  background: transparent;
  border: none;
  border-bottom: 1px solid #D8D0C6;
  border-radius: 0;
  padding: 12px 0;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 300;
  color: #2C2C2C;
  width: 100%;
  outline: none;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-bottom-color: #C4A882;
}

.input-field::placeholder {
  color: #B8AFA6;
  letter-spacing: 0.04em;
}
```

### Form Label
- Uppercase, 11px, letter-spacing 0.08em, color `#8B8172`
- Appears above input; 8px margin-bottom
- Never floats or animates (static, Scandinavian)

### Search Input
- Full-width underline-only input
- Search icon left-aligned in brass
- Results appear as minimal dropdown: product image + name

### Newsletter Signup
- Single email field + submit
- Submit: arrow icon `→` or simple "Subscribe" text, no button box
- Success state: field replaced with "Thank you" message, no modal

---

## 9. Images & Media

### Photography Philosophy
Audo's photography is its most important design element. It is architectural, calm, and spatially aware. Products are shown in context (homes, studios, open spaces with light) as often as on seamless backgrounds.

### Full-Bleed Sections
```css
.image-full-bleed {
  width: 100vw;
  margin-left: calc(-1 * var(--container-padding-x));
  height: 80vh;
  object-fit: cover;
  object-position: center;
  display: block;
}
```

### Aspect Ratios in Use
- **Hero / Editorial:** 16:9 or custom cinematic (21:9)
- **Product photography:** 3:4 (portrait) — consistent across all product cards
- **Square editorial:** 1:1 for Instagram-style storytelling sections
- **Landscape feature:** 4:3 for story cards

### Image Loading
- `loading="lazy"` on all below-fold images
- LQIP (low-quality image placeholder) — blurred thumbnail shown while loading
- Fade-in transition on load: `opacity: 0 → 1`, 0.4s ease

### Image + Text Layout
- Most editorial sections use a 60/40 or 50/50 image-to-text split
- Text floats at vertical center of image column
- On mobile, image stacks above text

---

## 10. Animation & Motion

### Core Easing
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-quad: cubic-bezier(0.45, 0, 0.55, 1);
```

### Reveal Animation
Elements fade and translate upward as they enter the viewport:
```css
.fade-up {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s var(--ease-out-expo),
              transform 0.8s var(--ease-out-expo);
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```
Stagger between elements: 0.1s delay per item.

### Image Pan / Parallax
Subtle vertical parallax on hero images — image moves at 0.6x scroll speed.
```css
.parallax-image {
  transform: translateY(calc(var(--scroll-y) * -0.1));
  will-change: transform;
}
```

### Page Transitions
- Soft fade between pages (if using SPA routing): 0.3s ease
- No slide or scale page transitions — they would feel too energetic

### Hover: Product Images
```css
.product-card:hover .product-card__image {
  transform: scale(1.03);
  transition: transform 0.6s var(--ease-out-expo);
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .fade-up { opacity: 1; transform: none; transition: none; }
  .parallax-image { transform: none; }
}
```

---

## 11. Icons & Decorative Elements

### Icon System
- Custom SVG icons, drawn at 24px grid
- Stroke-based, 1.5px stroke weight
- Color: `currentColor` — inherits from surrounding text
- Set includes: cart, search, menu, close, arrow (→ ↗), chevron, plus

### Decorative Elements
- **Thin horizontal rule:** `border-top: 1px solid #D8D0C6`; used sparingly between editorial sections
- **Brass accent line:** `border-top: 2px solid #C4A882`; above featured section headings
- No icons used decoratively (no checkmarks, bullets replaced by em dash `—`)

### Bullet / List Style
```css
li {
  list-style: none;
  padding-left: 1.5em;
  position: relative;
}
li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: #C4A882;
  font-weight: 300;
}
```

### No Gratuitous Elements
- No loading spinners (skeleton states instead)
- No notification badges beyond cart count
- No emoji in UI (editorial context)
- Social icons: minimal SVG, monochrome charcoal

---

## 12. Unique Signature

Audo Copenhagen's design identity is built around a specific set of choices that communicate Scandinavian luxury with maximum restraint:

1. **The warm white foundation** — `#F5F0EB` is not neutral; it has warmth, like natural linen. It immediately differentiates from the cold white-gray backgrounds of generic luxury sites
2. **Freight Display at light weight** — using a high-contrast serif at weight 300–400 (never bold) is unusual and precise; it communicates editorial confidence that doesn't need to shout
3. **Square buttons** — `border-radius: 0` on buttons is a deliberate counter-signal against the pill/rounded-rectangle default; it's Bauhaus, not tech
4. **No card borders, no shadows** — product cards that are defined by their images alone signal that the products are strong enough to sell themselves; borders are training wheels
5. **Brass as the only accent** — `#C4A882` is used as the sole accent color and it does all the heavy lifting: hover states, link underlines, section dividers, list markers
6. **Uppercase labels everywhere** — navigation, buttons, labels, captions all use uppercase with wide tracking; it's a typographic texture that unifies disparate elements

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-heading: "Freight Display Pro", "Freight Display", Georgia, "Times New Roman", serif;
  --font-body: "Suisse Intl", "Suisse Int'l", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "Suisse Intl Mono", "Courier New", monospace;

  --text-hero: 5.5rem;      /* 88px */
  --text-section: 3.5rem;   /* 56px */
  --text-feature: 2.5rem;   /* 40px */
  --text-quote: 2rem;       /* 32px */
  --text-body: 1rem;        /* 16px */
  --text-body-sm: 0.875rem; /* 14px */
  --text-label: 0.75rem;    /* 12px */
  --text-product: 1.125rem; /* 18px */

  --weight-light: 300;
  --weight-regular: 400;

  --leading-tight: 1.0;
  --leading-heading: 1.08;
  --leading-body: 1.65;

  --tracking-heading: -0.02em;
  --tracking-label: 0.08em;
  --tracking-uppercase: 0.1em;

  /* Colors */
  --color-warm-white: #F5F0EB;
  --color-charcoal: #2C2C2C;
  --color-sand: #8B8172;
  --color-olive: #5C6B4F;
  --color-brass: #C4A882;
  --color-brass-dark: #B8A07A;
  --color-cream: #EDE8E1;
  --color-stone: #B8AFA6;
  --color-off-white: #FAF8F5;
  --color-near-black: #1A1A18;
  --color-border: #D8D0C6;

  /* Semantic Roles */
  --color-bg: var(--color-warm-white);
  --color-text-primary: var(--color-charcoal);
  --color-text-secondary: var(--color-sand);
  --color-accent: var(--color-brass);
  --color-footer-bg: var(--color-near-black);

  /* Layout */
  --container-max: 1440px;
  --container-padding-x: 48px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --nav-height: 72px;

  /* Spacing */
  --space-4: 4px;
  --space-8: 8px;
  --space-16: 16px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;
  --space-64: 64px;
  --space-80: 80px;
  --space-96: 96px;
  --space-120: 120px;
  --space-160: 160px;

  /* Section Spacing */
  --section-padding: 80px;
  --section-padding-editorial: 120px;
  --section-padding-hero: 160px;

  /* Borders */
  --border-default: 1px solid #D8D0C6;
  --border-accent: 2px solid #C4A882;
  --radius: 0px;  /* Square — intentional */

  /* Buttons */
  --btn-padding: 14px 32px;
  --btn-font-size: 0.75rem;
  --btn-letter-spacing: 0.1em;
  --btn-primary-bg: #2C2C2C;
  --btn-primary-color: #F5F0EB;
  --btn-primary-bg-hover: #C4A882;

  /* Animation */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.4s;
  --duration-slow: 0.8s;

  /* Navigation */
  --nav-bg-scrolled: rgba(245, 240, 235, 0.92);
  --nav-backdrop: blur(12px);
}
```
