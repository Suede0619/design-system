# Lacoste — Design System Reference
**Source:** lacoste.com
**Awards:** CSSDA Site of the Day, Developer Award, UX Award — #8 Ranked 2025
**Category:** Fashion Luxury / Sports Heritage / E-Commerce
**Last Referenced:** 2026-03-31

---

## 1. Overview

Lacoste's website represents a masterclass in heritage luxury digital design — the rare case where a 90-year-old brand feels genuinely contemporary online without abandoning its identity. The CSSDA recognition came specifically for the way the site balances editorial ambition (cinematic photography, editorial typography, rich animation) with functional commerce (product discovery, membership tiers, conversion flow).

Key principles:
- **Heritage with momentum** — vintage tennis club aesthetic updated for modern digital luxury
- **The green is sacred** — `#004D2C` isn't just a brand color; it's the organizing logic of every screen
- **Editorial photography as premium signal** — full-bleed campaign imagery elevates the brand above sportswear into fashion territory
- **Membership as identity** — the Club tier system is a primary UI pattern; not hidden in account settings
- **Refined restraint** — generous whitespace, slow reveals, gold accents used with the precision of jewelers

The site occupies the territory between Hermès-style luxury and Nike-style sport. The Playfair/Helvetica Now pairing is the typographic equivalent of a polo shirt: classic, versatile, immediately recognizable.

---

## 2. Typography

### Font Stack
```
--font-display: "Playfair Display", "Playfair", Georgia, "Times New Roman", serif;
--font-body:    "Helvetica Now Display", "Helvetica Now Text", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

**Playfair Display** (Claus Eggers Sørensen) is the editorial headline face — high contrast, Didone-influenced serifs that recall the golden age of tennis and luxury editorial. Used exclusively for display sizes; never at body text sizes.

**Helvetica Now** (Monotype) is the premium revision of Helvetica with improved spacing, optical sizing, and contemporary proportions. It grounds the design in Lacoste's sporty-functional heritage while Playfair carries the fashion/luxury signal.

### Type Scale

| Role              | Font             | Size              | Weight | Line Height | Letter Spacing |
|-------------------|------------------|-------------------|--------|-------------|----------------|
| Hero Display      | Playfair Display | 96px / 6rem       | 700    | 1.0         | -0.02em        |
| Section Heading   | Playfair Display | 64px / 4rem       | 700    | 1.05        | -0.015em       |
| Feature Heading   | Playfair Display | 48px / 3rem       | 400    | 1.1         | -0.01em        |
| Subheading        | Playfair Display | 32px / 2rem       | 400    | 1.2         | 0em            |
| Body Large        | Helvetica Now    | 20px / 1.25rem    | 300    | 1.6         | 0.01em         |
| Body Default      | Helvetica Now    | 16px / 1rem       | 300    | 1.65        | 0.01em         |
| Body Small        | Helvetica Now    | 14px / 0.875rem   | 400    | 1.55        | 0.02em         |
| Label / Tag       | Helvetica Now    | 11px / 0.6875rem  | 500    | 1.3         | 0.12em         |
| Nav Item          | Helvetica Now    | 13px / 0.8125rem  | 400    | 1.3         | 0.04em         |
| Product Name      | Helvetica Now    | 16px / 1rem       | 400    | 1.35        | 0.01em         |
| Price             | Helvetica Now    | 16px / 1rem       | 300    | 1.3         | 0.02em         |
| Club Tier Badge   | Helvetica Now    | 10px / 0.625rem   | 700    | 1.2         | 0.15em         |

### Type Behavior
- Playfair Display italic is used for editorial emphasis, seasonal campaign titles, and pull quotes
- Labels and tier badges always uppercase with wide tracking
- Helvetica Now at weight 300 (Light) for body creates refined, airy reading experience
- Product names never use Playfair — always Helvetica Now to maintain scan-ability in grids

---

## 3. Color Palette

### Core Palette

| Name              | Hex       | RGB                    | Usage                                                      |
|-------------------|-----------|------------------------|------------------------------------------------------------|
| Lacoste Green     | `#004D2C` | rgb(0, 77, 44)         | Primary brand color; hero sections, footer, primary CTAs   |
| Cream             | `#F5F1EA` | rgb(245, 241, 234)     | Primary page background; warm, natural                     |
| Charcoal          | `#1D1D1D` | rgb(29, 29, 29)        | Primary text; near-black with warmth                       |
| Gold              | `#C5A661` | rgb(197, 166, 97)      | Luxury accent; Club tier highlights, hover states          |
| White             | `#FFFFFF` | rgb(255, 255, 255)     | Card backgrounds, product sections, overlays               |
| Green Dark        | `#003620` | rgb(0, 54, 32)         | Button hover; deeper green                                 |
| Green Light       | `#1A6B44` | rgb(26, 107, 68)       | Hover states, active menu items                            |
| Gold Dark         | `#A8893E` | rgb(168, 137, 62)      | Gold hover state                                           |
| Gold Tint         | `#F5EDD8` | rgb(245, 237, 216)     | Club section background; warm gold-tinted cream            |
| Sand              | `#D4CABC` | rgb(212, 202, 188)     | Borders, dividers on cream backgrounds                     |
| Mid Gray          | `#7A7A7A` | rgb(122, 122, 122)     | Secondary text, metadata, pricing subtexts                 |
| Light Gray        | `#EEEBE4` | rgb(238, 235, 228)     | Inactive states, skeleton loaders                          |

### Contextual Color Roles

| Role                    | Value     | Notes                                                   |
|-------------------------|-----------|----------------------------------------------------------|
| Page Background         | `#F5F1EA` | Warm cream; never clinical white                         |
| Section Dark (hero)     | `#004D2C` | Lacoste green; full-bleed header and footer sections     |
| Primary Text            | `#1D1D1D` | On cream/white backgrounds                              |
| Text on Green           | `#FFFFFF` | On brand green sections                                  |
| Text on Gold            | `#1D1D1D` | Charcoal on gold accents                                 |
| Accent / Luxury Signal  | `#C5A661` | Gold; used for tier badges, special features, hover      |
| Border Default          | `#D4CABC` | Sand-toned; warm dividers                                |
| Nav Background          | `#FFFFFF` with `rgba` | Transparent on hero; white-frosted on scroll |

---

## 4. Layout System

### Container
```css
--container-max: 1440px;
--container-padding-x: 56px;
--container-padding-x-md: 32px;
--container-padding-x-sm: 20px;
```

### Grid
```css
/* 12-column grid */
--grid-columns: 12;
--grid-gap: 24px;

/* Common spans */
/* Full bleed:              span 12 */
/* Editorial split:         span 6 + span 6 */
/* Asymmetric editorial:    span 7 + span 5 */
/* Product grid (4-up):     span 3 each */
/* Product grid (3-up):     span 4 each */
/* Club tier cards (3):     span 4 each */
/* Feature highlight (2):   span 6 each */
```

### Spacing Scale
```
--space-4:   4px
--space-8:   8px
--space-12:  12px
--space-16:  16px
--space-20:  20px
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

### Section Padding
- **Standard section:** 96px top/bottom
- **Hero section:** 160px padding-top, image fills to bottom edge
- **Club/Membership section:** 120px top/bottom with gold-tinted background
- **Product grid:** 64px top/bottom
- **Mobile:** 48px–64px section padding

---

## 5. Navigation

### Structure
Sticky top navigation, full-width, 64px height.

```
[Lacoste Crocodile Logo + LACOSTE]
[Men] [Women] [Kids] [Sport] [Lifestyle] [Collaboration] [Club]
                                                          [Search] [Account] [Wishlist] [Cart]
```

### Visual Treatment
- **Default (hero):** Transparent background, white text on green hero
- **Scrolled sticky:** `background: rgba(255,255,255,0.95)`, `backdrop-filter: blur(10px)`, `border-bottom: 1px solid #D4CABC`
- Height: **64px** desktop; **56px** mobile
- Logo: Iconic crocodile + LACOSTE wordmark in Helvetica Now; green crocodile on light, white on dark
- Nav links: 13px, Helvetica Now regular, charcoal on white, white on green
- Hover: color `#1A6B44` with 0.2s ease
- **Club nav item:** Gold-accented `#C5A661`, slightly bolder

### Mega Menu
- Full-width white panel, appears on hover
- 4-column grid within container
- Featured product image (campaign) in rightmost column
- Bottom row: sale/promotion highlights
- `box-shadow: 0 8px 32px rgba(0,0,0,0.1)` beneath menu

### Mobile Navigation
- Hamburger at 1024px breakpoint
- Slide-in drawer from left, 320px width
- White background, green (`#004D2C`) header
- Categories with expand/collapse arrows
- Account + cart icons pinned to bottom of drawer

---

## 6. Buttons

### Primary CTA — Green Filled
```css
.btn-primary {
  background-color: #004D2C;
  color: #FFFFFF;
  border: none;
  border-radius: 24px;
  padding: 16px 40px;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.15s ease;
  display: inline-block;
}

.btn-primary:hover  { background-color: #003620; }
.btn-primary:active { transform: scale(0.98); }
```

### Secondary / Outlined
```css
.btn-secondary {
  background-color: transparent;
  color: #004D2C;
  border: 1.5px solid #004D2C;
  border-radius: 24px;
  padding: 14.5px 38.5px;  /* Compensates for border */
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

.btn-secondary:hover {
  background-color: #004D2C;
  color: #FFFFFF;
}
```

### Ghost / White Outlined
```css
.btn-ghost {
  background-color: transparent;
  color: #FFFFFF;
  border: 1.5px solid rgba(255,255,255,0.7);
  border-radius: 24px;
  padding: 14.5px 38.5px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: all 0.25s ease;
}

.btn-ghost:hover {
  border-color: #FFFFFF;
  background-color: rgba(255,255,255,0.1);
}
```

### Gold CTA (Club / Premium)
```css
.btn-gold {
  background-color: #C5A661;
  color: #1D1D1D;
  border: none;
  border-radius: 24px;
  padding: 16px 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background-color 0.25s ease;
}

.btn-gold:hover { background-color: #A8893E; }
```

---

## 7. Cards & Containers

### Product Card
```css
.product-card {
  background: #FFFFFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.product-card__image {
  aspect-ratio: 4 / 5;
  width: 100%;
  object-fit: cover;
  object-position: center top;
  background: #F5F1EA;
}

.product-card__body {
  padding: 16px 20px 20px;
}

.product-card__name {
  font-size: 15px;
  font-weight: 400;
  color: #1D1D1D;
  margin-bottom: 4px;
  letter-spacing: 0.01em;
}

.product-card__price {
  font-size: 14px;
  font-weight: 300;
  color: #7A7A7A;
}

.product-card__price--sale {
  color: #B5291C;
}
```

### Club Membership Tier Card
```css
.tier-card {
  background: #FFFFFF;
  border-radius: 12px;
  padding: 48px 40px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

.tier-card--featured {
  background: #004D2C;
  color: #FFFFFF;
}

.tier-card--gold {
  background: linear-gradient(135deg, #1D1D1D 0%, #2C2820 100%);
  color: #FFFFFF;
}

.tier-card__badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #C5A661;
  margin-bottom: 16px;
}

.tier-card__name {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 24px;
}

.tier-card__price-line {
  font-size: 48px;
  font-family: var(--font-display);
  font-weight: 700;
}
```

### Editorial Container
```css
.editorial-panel {
  background: #F5F1EA;
  padding: 64px 56px;
  border-radius: 12px;
}

.editorial-panel--dark {
  background: #004D2C;
  color: #FFFFFF;
}

.editorial-panel--gold {
  background: #F5EDD8;
}
```

---

## 8. Forms & Inputs

### Text Input
```css
.input-field {
  background: #FFFFFF;
  border: 1.5px solid #D4CABC;
  border-radius: 8px;
  padding: 14px 18px;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 300;
  color: #1D1D1D;
  width: 100%;
  outline: none;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.input-field:focus {
  border-color: #004D2C;
  box-shadow: 0 0 0 3px rgba(0, 77, 44, 0.12);
}

.input-field::placeholder {
  color: #B0A898;
}
```

### Form Label
```css
.form-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #7A7A7A;
  display: block;
  margin-bottom: 8px;
}
```

### Size Selector (clothing)
```css
.size-btn {
  background: #FFFFFF;
  border: 1.5px solid #D4CABC;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 400;
  color: #1D1D1D;
  cursor: pointer;
  transition: all 0.2s ease;
}

.size-btn:hover,
.size-btn.selected {
  border-color: #004D2C;
  background: #004D2C;
  color: #FFFFFF;
}

.size-btn.unavailable {
  opacity: 0.3;
  cursor: not-allowed;
  text-decoration: line-through;
}
```

### Color Swatch
- 20px × 20px circle
- Selected state: 2px white inner ring + 2px green outer ring
- `box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #004D2C`

---

## 9. Images & Media

### Photography Style
Lacoste uses fashion editorial photography at the highest production value — cinematic lighting, model-forward imagery, outdoor/sport contexts. Think Vogue meets Roland Garros. Color palette in photography echoes brand: white, green, clay court orange.

### Full-Bleed Hero
```css
.hero-media {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  display: block;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
}
```

### Product Photography
- Pure white background (`#FFFFFF`) for product grid items
- Models shown from waist-up or full-body
- Consistent crop: 4:5 ratio for all product cards
- Hover: reveal second colorway image with crossfade

### Editorial Photography
- Landscape: 16:9 or 3:2
- Full-bleed within editorial panels
- `border-radius: 12px` when inside a container card
- Always accompanied by campaign text overlay

### Video
- Brand campaign videos autoplay in hero sections
- Muted, loop, no controls
- Fallback: high-quality still poster
- `object-fit: cover`, fills container

### Lazy Loading
- `loading="lazy"` below fold
- `fetchpriority="high"` on hero image
- Image format: AVIF > WebP > JPEG

---

## 10. Animation & Motion

### Core Easing
```css
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
```

### Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--ease-out-quart),
              transform 0.7s var(--ease-out-quart);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```
Stagger per item: 0.1s delay; max 5 items in a stagger sequence.

### Product Image Crossfade (hover)
```css
.product-card__image-wrap {
  position: relative;
  overflow: hidden;
}

.product-card__image--alt {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.product-card:hover .product-card__image--alt {
  opacity: 1;
}
```

### Parallax on Editorial Images
- Y-axis parallax at 0.15× scroll speed
- `will-change: transform` for GPU compositing

### Club Tier Card Entrance
```css
.tier-card {
  opacity: 0;
  transform: scale(0.96) translateY(16px);
  transition: opacity 0.5s var(--ease-out-expo),
              transform 0.5s var(--ease-out-expo);
}

.tier-card.visible {
  opacity: 1;
  transform: scale(1) translateY(0);
}
/* Stagger: 0s, 0.1s, 0.2s for three cards */
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, .tier-card {
    opacity: 1;
    transform: none;
    transition: none;
  }
  .product-card__image--alt { display: none; }
}
```

---

## 11. Icons & Decorative Elements

### Icon System
- Custom SVG icon set, 20px and 24px grids
- Thin stroke: 1.5px (refined, consistent with luxury aesthetic)
- Colors: `#1D1D1D` default, `#004D2C` active, `#C5A661` for premium/Club contexts
- Crocodile motif: appears as watermark/stamp in Club section

### Icons in Use
- Cart (bag silhouette, Lacoste-specific), Search (standard), User (account), Wishlist (heart)
- Navigation arrows, dropdown chevrons, close (✕)
- Social: Instagram, Facebook, TikTok, Pinterest — thin SVG, 16px

### Decorative Crocodile
```css
.croc-watermark {
  position: absolute;
  opacity: 0.04;
  width: 400px;
  pointer-events: none;
  user-select: none;
  color: #004D2C;
  right: -80px;
  bottom: -40px;
  transform: rotate(-15deg);
}
```

### Gold Accent Line
```css
.section-accent-line {
  width: 48px;
  height: 2px;
  background: #C5A661;
  margin-bottom: 24px;
}
```

### Club Tier Badge
```css
.tier-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #F5EDD8;
  border: 1px solid #C5A661;
  border-radius: 4px;
  padding: 4px 10px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #A8893E;
}

.tier-badge--gold {
  background: #C5A661;
  color: #1D1D1D;
  border-color: #C5A661;
}

.tier-badge--platinum {
  background: #1D1D1D;
  color: #C5A661;
  border-color: #C5A661;
}
```

---

## 12. Unique Signature

Lacoste's design identity is recognizable by a precise combination of heritage and modernism:

1. **Playfair at 64–96px, italic** — the use of Playfair Display italic for seasonal and campaign headlines is pure fashion editorial; it's the visual equivalent of the polo shirt's open collar — relaxed but elevated
2. **`#004D2C` as a structural material** — the Lacoste green isn't just a brand color here; it's used as an architectural element (full-bleed sections, nav backgrounds, footers) in a way that feels immersive rather than just branded
3. **24px border-radius on buttons** — in contrast to square (Audo) or pill (Apple), Lacoste's 24px radius is a specific middle ground; it's contemporary but not frictionless-tech
4. **The Club tier UI** — most fashion sites bury loyalty/membership in account settings; Lacoste surfaces it as a primary section with dramatic card layout and gold-tinted pricing display; it's the VIP room visible through the glass
5. **Gold as the secondary brand color** — `#C5A661` is deployed with jeweler's precision; it appears only on highest-status elements (tier badges, CTA on dark sections, accent lines) and never in body text
6. **Cream background (#F5F1EA)** — like Audo's warm white, Lacoste never uses clinical pure white as a page background; the cream creates a warmth that connects to the sport's clay court origins

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "Playfair Display", "Playfair", Georgia, "Times New Roman", serif;
  --font-body: "Helvetica Now Display", "Helvetica Now Text", "Helvetica Neue", Helvetica, Arial, sans-serif;

  --text-hero: 6rem;          /* 96px */
  --text-section: 4rem;       /* 64px */
  --text-feature: 3rem;       /* 48px */
  --text-subheading: 2rem;    /* 32px */
  --text-body-lg: 1.25rem;    /* 20px */
  --text-body: 1rem;          /* 16px */
  --text-body-sm: 0.875rem;   /* 14px */
  --text-label: 0.6875rem;    /* 11px */
  --text-nav: 0.8125rem;      /* 13px */
  --text-product: 1rem;       /* 16px */
  --text-tier-price: 3rem;    /* 48px */

  --weight-light: 300;
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;

  --leading-tight: 1.0;
  --leading-heading: 1.05;
  --leading-body: 1.65;

  --tracking-heading: -0.02em;
  --tracking-label: 0.12em;
  --tracking-uppercase: 0.08em;
  --tracking-badge: 0.15em;

  /* Colors */
  --color-green: #004D2C;
  --color-green-dark: #003620;
  --color-green-light: #1A6B44;
  --color-cream: #F5F1EA;
  --color-cream-gold: #F5EDD8;
  --color-charcoal: #1D1D1D;
  --color-gold: #C5A661;
  --color-gold-dark: #A8893E;
  --color-white: #FFFFFF;
  --color-sand: #D4CABC;
  --color-gray-mid: #7A7A7A;
  --color-gray-light: #EEEBE4;
  --color-placeholder: #B0A898;
  --color-sale: #B5291C;

  /* Semantic Roles */
  --color-bg: #F5F1EA;
  --color-bg-section-dark: #004D2C;
  --color-bg-white: #FFFFFF;
  --color-text-primary: #1D1D1D;
  --color-text-on-dark: #FFFFFF;
  --color-text-secondary: #7A7A7A;
  --color-accent: #C5A661;
  --color-border: #D4CABC;

  /* Layout */
  --container-max: 1440px;
  --container-padding-x: 56px;
  --grid-columns: 12;
  --grid-gap: 24px;
  --nav-height: 64px;

  /* Spacing */
  --space-4: 4px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --space-32: 32px;
  --space-40: 40px;
  --space-48: 48px;
  --space-56: 56px;
  --space-64: 64px;
  --space-80: 80px;
  --space-96: 96px;
  --space-120: 120px;
  --space-160: 160px;

  /* Section Padding */
  --section-padding: 96px;
  --section-padding-club: 120px;
  --section-padding-hero: 160px;

  /* Borders & Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-btn: 24px;
  --border-default: 1.5px solid #D4CABC;
  --border-accent: 1px solid #C5A661;

  /* Shadows */
  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.12);
  --shadow-mega-menu: 0 8px 32px rgba(0, 0, 0, 0.10);

  /* Buttons */
  --btn-padding: 16px 40px;
  --btn-font-size: 0.875rem;
  --btn-font-weight: 500;
  --btn-letter-spacing: 0.08em;
  --btn-radius: 24px;
  --btn-primary-bg: #004D2C;
  --btn-primary-bg-hover: #003620;
  --btn-primary-color: #FFFFFF;
  --btn-gold-bg: #C5A661;
  --btn-gold-bg-hover: #A8893E;
  --btn-gold-color: #1D1D1D;

  /* Animation */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-fast: 0.2s;
  --duration-normal: 0.4s;
  --duration-slow: 0.7s;

  /* Navigation */
  --nav-bg-scrolled: rgba(255, 255, 255, 0.95);
  --nav-backdrop: blur(10px);
  --nav-border-scrolled: 1px solid #D4CABC;
}
```
