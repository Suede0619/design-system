# Allbirds — Design System

## 1. Overview

- **Site:** allbirds.com
- **URL:** https://www.allbirds.com
- **What they do:** Sustainable footwear and apparel brand using natural materials — merino wool, eucalyptus tree fiber, sugarcane — to create lightweight, comfortable everyday shoes. Known for eliminating petroleum-based synthetics in favor of earth-sourced alternatives.
- **Awards:** Fast Company World's Most Innovative Companies; recognized for best-in-class DTC e-commerce UX and sustainable brand design
- **Aesthetic:** Earthy, warm, and genuinely friendly. Color palette drawn from natural materials: wool tones, tree bark, clay, sky. Typography that's approachable and clear — no pretension. The design communicates: *comfortable, sustainable, honest*. Feels like it was made by someone who likes hiking and good coffee.

---

## 2. Typography

### Primary Font
- **Family:** "Allbirds Sans" (custom) or similar humanist rounded sans-serif
- **Fallback:** "Helvetica Neue", system-ui, sans-serif
- **Weights:** 400 Regular, 500 Medium, 700 Bold
- **Character:** Approachable geometric sans with slight roundness; anti-corporate

### Secondary Font
- **Family:** "Tiempos Headline" (serif, for editorial moments) or similar slab-leaning serif
- **Usage:** Seasonal hero headlines, marketing moments
- **Weight:** 400–600

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Hero | clamp(2.5rem, 5vw, 4.5rem) | 700 | Bold, energetic |
| H2 | clamp(1.75rem, 3.5vw, 2.75rem) | 700 | Section headers |
| H3 | 1.375rem | 700 | Category, collection |
| Body | 0.9375rem | 400 | 15px, 1.6 leading |
| Product name | 1rem | 700 | Bold, clear |
| Price | 0.9375rem | 400 | Right of product name |
| Label | 0.75rem | 500 | All caps, feature badges |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Natural White | `#F5F0E8` | Primary background |
| Oat | `#EDE7D9` | Alt backgrounds, cards |
| Warm Sand | `#D9CEBC` | Borders, hover states |
| Clay | `#B59A80` | Secondary text, icons |
| Bark | `#6B5040` | Body text, dark accents |
| Deep Brown | `#3A2820` | Headings, primary text |
| Forest | `#2D4030` | Sustainability sections |
| Sky | `#7AABCF` | Accent for spring/summer |

### Product Range Colors (Natural)
| Name | Hex | Usage |
|------|-----|-------|
| Wool Gray | `#A8A096` | Neutral product default |
| Trino White | `#E8E4DC` | Light colorway |
| Tuke Black | `#282018` | Dark colorway |
| Mellow Yellow | `#E8C870` | Seasonal accent |
| Rust | `#C05030` | Autumn accent |
| Sage | `#6A8060` | Environmental green |

### Gradients
- **Earth hero:** `linear-gradient(135deg, #F5F0E8 0%, #EDE7D9 100%)`
- **Forest tint:** `linear-gradient(180deg, #F5F0E8 0%, #E8F0E4 100%)`
- None sharp or dramatic — all transitions are gentle

---

## 4. Layout System

### Container
- **Max-width:** 1320px
- **Padding:** 0 clamp(16px, 3vw, 48px)

### Grid
- **Product grid:** 2-up mobile, 3-up tablet, 4-up desktop
- **Columns:** 12 structural, 4 product
- **Gutter:** 16px (tight for product grids)
- **Breakpoints:** Mobile 0-640px, Tablet 640-1024px, Desktop 1024px+

### Section Spacing
- **Vertical:** 80px desktop, 56px tablet, 40px mobile
- **Product grid:** 40px vertical between rows
- **Hero:** 64–80px vertical padding

### Layout Patterns
- Full-bleed product photography hero with centered text
- 4-column product grid (primary commerce layout)
- Sustainability story: alternating image/text, 60/40 split
- Material callout: full-bleed earthy texture background + copy
- Collections: 2–3 column editorial layout

---

## 5. Navigation

- **Style:** White sticky, clean and friendly
- **Height:** 60px
- **Background:** `#FFFFFF` + bottom border `1px solid #EDE7D9` on scroll
- **Logo:** Allbirds bird logo + wordmark in `#3A2820`
- **Links:** 13px, 500 weight, `#6B5040` → `#3A2820`
- **CTA in Nav:** Wishlist, cart icons; minimal CTAs
- **Mobile:** Hamburger → slide-in left drawer

---

## 6. Buttons

### Primary Button (Add to Cart)
- **Background:** `#3A2820`
- **Text:** White, 14px, 700 weight
- **Padding:** 14px 28px
- **Border-radius:** 4px (nearly flat, utilitarian)
- **Hover:** `#282018`
- **Shadow:** none — flat

### Secondary Button
- **Background:** `#F5F0E8`
- **Border:** `1px solid #3A2820`
- **Text:** `#3A2820`, 14px, 700
- **Hover:** `#EDE7D9`

### Sustainability CTA
- Forest green `#2D4030` fill, white text
- Same flat radius treatment

### Size Selector
- Small rounded square buttons (40×40px)
- Selected: `#3A2820` fill, white text
- Unavailable: strikethrough, `#D9CEBC`

---

## 7. Cards & Components

### Product Card
- White background
- No border, no shadow at rest
- Image: 1:1 or 4:5 ratio, sharp corners
- Hover: subtle elevation `0 4px 16px rgba(0,0,0,0.06)`
- Product name: 14px, 700, dark
- Price: 14px, 400
- Quick-add: appears on hover, small CTA button

### Material Badge
- Rounded pill: `#EDE7D9` background
- "Made with Merino Wool" style labels
- Small leaf/wool icon + text, 11px, 500 weight

### Sustainability Card
- Earthy texture background (wool or tree bark photograph)
- Overlaid white text
- Carbon footprint stat in large numerals

### Color Swatch
- Small circles, 20×20px
- Border: `2px solid transparent`, active: `2px solid #3A2820`
- No labels — tooltip only

---

## 8. Motion & Animation

### Page Load
- Clean fade-in, no dramatic transitions
- Product images load with blur-up progressive reveal

### Scroll Animations
- Elements fade up from Y:16px, 400ms
- Sustainability story sections: parallax image at 0.2x speed

### Product Hover
- Alternate colorway image swap (if available), 200ms crossfade
- Quick-add slides up from bottom 150ms

### Cart
- Slide-in from right, 300ms ease-out
- Items animate in from bottom

### Micro-interactions
- Size selection: 120ms color fill
- Swatch: 100ms border highlight
- Button: 150ms background darken, no scale

### Easing
- Signature: `cubic-bezier(0.4, 0, 0.2, 1)` — smooth, unhurried
- Durations: 120ms micro, 200ms hover, 400ms reveal

---

## 9. Layout Strategy

**Commerce without pressure.** Unlike most e-commerce sites that use urgency tactics (countdown timers, bold CTAs), Allbirds designs for calm browsing. The muted earthy palette creates a psychological comfort that says "take your time." Product photography is always clean, on-model in natural settings. The grid is generous. Sustainability messaging is woven throughout, not siloed to one page.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The color palette is literally the product. Every shade in the system — oat, bark, clay, wool gray — is a direct reference to the natural materials Allbirds uses. The design achieves the rare feat of making the color palette feel *ideologically consistent* with the brand's sustainability mission, not just decoratively matching. You feel the ethics in the UX.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-primary: "Allbirds Sans", "Helvetica Neue", system-ui, sans-serif;
  --font-serif: "Tiempos Headline", "Georgia", serif;

  --font-size-hero: clamp(2.5rem, 5vw, 4.5rem);
  --font-size-h1: clamp(2rem, 4vw, 3.5rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.5rem);
  --font-size-h3: 1.375rem;
  --font-size-body: 0.9375rem;
  --font-size-product: 0.9375rem;
  --font-size-small: 0.8125rem;
  --font-size-label: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  --line-height-tight: 1.15;
  --line-height-normal: 1.6;
  --line-height-relaxed: 1.75;

  --letter-spacing-normal: 0;
  --letter-spacing-label: 0.06em;

  /* Colors — Natural */
  --color-bg: #F5F0E8;
  --color-bg-oat: #EDE7D9;
  --color-bg-white: #FFFFFF;
  --color-border: #D9CEBC;

  --color-text-primary: #3A2820;
  --color-text-body: #6B5040;
  --color-text-muted: #B59A80;
  --color-text-inverted: #FFFFFF;

  --color-accent: #3A2820;
  --color-accent-forest: #2D4030;
  --color-accent-sky: #7AABCF;
  --color-accent-sage: #6A8060;

  /* Product Colors */
  --color-wool-gray: #A8A096;
  --color-trino-white: #E8E4DC;
  --color-tuke-black: #282018;
  --color-rust: #C05030;
  --color-mellow-yellow: #E8C870;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #F5F0E8 0%, #EDE7D9 100%);
  --gradient-forest: linear-gradient(180deg, #F5F0E8 0%, #E8F0E4 100%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-14: 56px;
  --space-20: 80px;

  /* Layout */
  --container-max: 1320px;
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
  --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.06);
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.04);

  /* Nav */
  --nav-height: 60px;
  --nav-border: #EDE7D9;

  /* Transitions */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 120ms;
  --duration-hover: 200ms;
  --duration-reveal: 400ms;
}
```

---

## 12. Category Tags

`light` `e-commerce` `sustainable` `earthy` `DTC` `footwear` `natural-palette` `warm-tones` `friendly` `commerce`
