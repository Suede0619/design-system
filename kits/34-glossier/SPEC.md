# Glossier — Design System

## 1. Overview

- **Site:** glossier.com
- **URL:** https://www.glossier.com
- **What they do:** DTC beauty brand born from a beauty blog (Into The Gloss). Creates makeup and skincare products for "real life" — focused on natural, effortless beauty. Products like Boy Brow, Cloud Paint, and Balm Dotcom have cult followings. Known for building community before product.
- **Awards:** Fast Company Most Innovative Companies; widely cited as the defining DTC brand design of the 2010s–2020s; influential on an entire generation of consumer brand design
- **Aesthetic:** Millennial pink softness with disciplined restraint. The palette is iconic: soft ballet pinks, clean whites, and muted tones that feel like a well-lit vanity. Typography is clean and unfussy. The whole site feels like a product that's already on your skin — effortless and a little luminous.

---

## 2. Typography

### Primary Font
- **Family:** "Graphik" (Commercial Type) or similar clean modern grotesque
- **Fallback:** "Helvetica Neue", system-ui, sans-serif
- **Weights:** 300 Light, 400 Regular, 500 Medium
- **Character:** Clean, neutral, slightly corporate — beauty let the products be loud, the type stays quiet

### Display / Editorial
- **Usage:** Product pages and editorial content sometimes use light-weight type at large scale
- Same Graphik family, just at 1–3 weights lighter than navigation

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Hero | clamp(2.25rem, 4.5vw, 4rem) | 300–400 | Light, airy |
| H2 | clamp(1.5rem, 3vw, 2.25rem) | 400 | Section headers |
| H3 | 1.25rem | 400–500 | Product category |
| Product Name | 1rem | 500 | Bold enough to anchor |
| Body | 0.9375rem | 300–400 | Light, 1.65 leading |
| Price | 0.9375rem | 400 | Clean numerals |
| Label | 0.75rem | 500 | Caps, spaced, badges |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Ballet Pink | `#F5DAD2` | Signature brand pink, hero sections |
| Blush | `#EFC9BF` | Hover states, alt sections |
| Powder | `#FAF0EC` | Page backgrounds |
| Rose White | `#FDF8F6` | Primary background |
| Warm White | `#FFFFFF` | Clean surfaces |
| Petal | `#F0C4BA` | Borders, dividers |

### Neutral
| Name | Hex | Usage |
|------|-----|-------|
| Mid Pink Gray | `#C4A89E` | Secondary text |
| Warm Gray | `#8A7A74` | Body text |
| Mauve Dark | `#4A3830` | Headings, primary text |
| Charcoal | `#1A1414` | Dark text maximum contrast |

### Accent (Rare)
| Name | Hex | Usage |
|------|-----|-------|
| Glossier Black | `#1A1414` | Rare dark sections, footer |
| Cloud Red | `#E85050` | Error states, sale indicators |

### Gradients
- **Signature pink:** `linear-gradient(135deg, #FDF8F6 0%, #F5DAD2 100%)`
- **Hero wash:** `radial-gradient(ellipse at 60% 0%, #F5DAD2 0%, #FDF8F6 60%)`
- **No harsh gradients** — all transitions are pastel and feathered

---

## 4. Layout System

### Container
- **Max-width:** 1280px
- **Padding:** 0 clamp(16px, 3vw, 48px)

### Grid
- **Product grid:** 2-up mobile, 3-up tablet, 4-up desktop
- **Columns:** 12
- **Gutter:** 16–20px
- **Breakpoints:** Mobile 0-640px, Tablet 640-1024px, Desktop 1024px+

### Section Spacing
- **Vertical:** 80px desktop, 56px tablet, 40px mobile
- **Product grid rows:** 40px gap

### Layout Patterns
- Full-bleed pink hero with centered, light-weight type
- 4-column product grid (flagship layout)
- Stacked editorial: large product image + short copy
- Side-by-side product comparisons
- Community photos: masonry grid of user-submitted content
- Review summaries inline on product pages

---

## 5. Navigation

- **Style:** White sticky with minimal pink undertone
- **Height:** 56px
- **Background:** `#FFFFFF` with `border-bottom: 1px solid #F0C4BA`
- **Logo:** Glossier "G" wordmark, simple
- **Links:** 12–13px, 400 weight, `#8A7A74` → `#4A3830`
- **CTA:** Bag icon, search icon — no text CTAs
- **Mobile:** Hamburger → right drawer, with search prominent

---

## 6. Buttons

### Primary (Add to Bag)
- **Background:** `#1A1414`
- **Text:** White, 13px, 500 weight
- **Padding:** 12px 24px
- **Border-radius:** 4px
- **Hover:** `#4A3830`

### Secondary
- **Background:** transparent
- **Border:** `1px solid #C4A89E`
- **Text:** `#4A3830`, 13px, 400
- **Hover:** Background `#FDF8F6`

### Pink CTA (Hero Moments)
- **Background:** `#F5DAD2`
- **Text:** `#4A3830`, 13px, 500
- **Border-radius:** 4px
- **Hover:** `#EFC9BF`

### "Notify Me" / Coming Soon
- Pale pink, gray text, dashed border

---

## 7. Cards & Components

### Product Card
- White background, clean
- No border at rest
- Image: 1:1, clean white photography
- Hover: very subtle elevation `0 2px 12px rgba(0,0,0,0.05)`
- Product name: 13px, 500
- Price: 13px, 400
- Star rating: pink filled stars
- Shade selector: small round circles below

### Shade Indicator
- Circles, 16×16px
- Active: 2px border in darker shade
- Mini palette strip on product card hover

### Review Block
- Star rating, reviewer name, review text
- Pink left border accent on featured reviews

### "Into The Gloss" Editorial Link
- Card with full-bleed image
- Category label in pink uppercase
- Title in Graphik medium
- "Read more →" link text

---

## 8. Motion & Animation

### Page Load
- Simple opacity fade-in, 400ms
- No dramatic reveals

### Scroll Animations
- Products fade up from Y:12px, staggered 80ms, 300ms each

### Product Page
- Image gallery: smooth crossfade, 200ms
- Shade selection: image changes 150ms
- "View full size" lightbox: scale from center 300ms

### Community Content
- Hover: slight overlay + "Shop this" text fades in

### Cart Drawer
- Slides from right 300ms ease-out

### Micro-interactions
- Add to bag: button briefly dims to confirm, checkmark for 800ms
- Shade picker: circle lifts 2px + border highlight 100ms

### Easing
- All very gentle: `cubic-bezier(0.4, 0, 0.2, 1)`
- Durations: 100ms micro, 200ms hover, 350ms reveal

---

## 9. Layout Strategy

**The product IS the palette.** Navigation, hero, and detail pages all breathe from the same pink-to-white color story. The ecommerce grid is the primary UX — Glossier doesn't overstuff pages with features. Everything exists to surface the products clearly. Community content is woven in to validate and inspire. The site never pressures you; it invites.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The color is a cultural artifact, not just a brand choice. "Millennial pink" entered the design vernacular partly *because* of Glossier's consistent, disciplined deployment of `#F5DAD2` and its relatives. Every pink element on the site is a reinforcement of the brand's core promise: beauty that's soft, effortless, and for you. The design is never aggressive because beauty, for Glossier, is never aggressive.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-primary: "Graphik", "Helvetica Neue", system-ui, sans-serif;

  --font-size-hero: clamp(2.25rem, 4.5vw, 4rem);
  --font-size-h1: clamp(1.75rem, 3.5vw, 3rem);
  --font-size-h2: clamp(1.375rem, 2.5vw, 2rem);
  --font-size-h3: 1.25rem;
  --font-size-body: 0.9375rem;
  --font-size-small: 0.8125rem;
  --font-size-label: 0.75rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  --line-height-tight: 1.2;
  --line-height-normal: 1.65;
  --line-height-relaxed: 1.8;

  --letter-spacing-normal: 0;
  --letter-spacing-label: 0.07em;

  /* Colors — Pink System */
  --color-bg: #FDF8F6;
  --color-bg-powder: #FAF0EC;
  --color-bg-pink: #F5DAD2;
  --color-bg-blush: #EFC9BF;
  --color-bg-white: #FFFFFF;
  --color-border: #F0C4BA;
  --color-border-muted: #E8D8D0;

  --color-text-primary: #4A3830;
  --color-text-body: #8A7A74;
  --color-text-muted: #C4A89E;
  --color-text-inverted: #FFFFFF;
  --color-text-dark: #1A1414;

  --color-accent: #1A1414;
  --color-accent-pink: #F5DAD2;
  --color-accent-error: #E85050;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #FDF8F6 0%, #F5DAD2 100%);
  --gradient-pink-wash: radial-gradient(ellipse at 60% 0%, #F5DAD2 0%, #FDF8F6 60%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-14: 56px;
  --space-20: 80px;

  /* Layout */
  --container-max: 1280px;
  --container-padding: clamp(16px, 3vw, 48px);
  --grid-product-gap: 16px;
  --section-padding: 80px;
  --section-padding-mobile: 40px;

  /* Border Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 100px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-none: none;
  --shadow-hover: 0 2px 12px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 1px 6px rgba(0, 0, 0, 0.04);

  /* Nav */
  --nav-height: 56px;
  --nav-border: #F0C4BA;

  /* Transitions */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 100ms;
  --duration-hover: 200ms;
  --duration-reveal: 350ms;
}
```

---

## 12. Category Tags

`light` `beauty` `e-commerce` `millennial-pink` `DTC` `soft-palette` `community` `pastel` `commerce` `minimalist-ecomm`
