# 40 — Teenage Engineering

**Category:** Product / Industrial Design
**Award:** D&AD Yellow Pencil (2024), iF Design Award (2024), Webby Award Best Visual Design (2023)
**URL:** teenage.engineering

---

## Design Philosophy

Teenage Engineering makes the internet feel like a product manual from the future. The site is aggressively minimal — raw, utilitarian, and weirdly beautiful because of it. It treats every product page like a technical specification sheet that happens to be gorgeous. The aesthetic says: "We make tools. Here are the tools. Buy them or don't."

**Core Thesis:** Utility IS beauty. The most beautiful thing is the thing that works.

---

## Color System

```
:root {
  /* Core (just two) */
  --black:           #000000;
  --white:           #FFFFFF;

  /* Product Accent Colors (one per product line) */
  --op-1-orange:     #FF6600;
  --ep-133-yellow:   #FFD100;
  --tx-6-green:      #00CC66;
  --ob-4-red:        #FF3333;
  --cm-15-blue:      #0099FF;
  --tp-7-gray:       #999999;

  /* UI Grays */
  --gray-border:     #E0E0E0;
  --gray-text:       #666666;
  --gray-subtle:     #F5F5F5;
  --gray-hover:      #FAFAFA;
}
```

### Palette Rules
- The ENTIRE site is black text on white background. Period.
- Product accent colors appear ONLY on product images and buy buttons
- No gradients, no tints, no colored backgrounds on any page
- Links are black with underline, not blue
- Borders are #E0E0E0 — one shade of gray for all lines
- The contrast is maximum: pure #000 on pure #FFF

---

## Typography

```
:root {
  --font-primary:   'TE Neue', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-mono:      'TE Mono', 'SF Mono', Menlo, Consolas, monospace;
  --font-weight-reg:   400;
  --font-weight-bold:  700;
}
```

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|----------------|-----|
| Hero | 72px | 700 | 1.05 | -0.04em | Product name on hero |
| H1 | 32px | 700 | 1.15 | -0.03em | Page titles |
| H2 | 18px | 700 | 1.3 | 0 | Section headers |
| Spec Label | 12px | 700 | 1.2 | 0.1em | Specification labels (uppercase) |
| Body | 14px | 400 | 1.6 | 0 | Descriptions |
| Price | 14px | 700 | 1 | 0 | Product price |
| Mono | 12px | 400 | 1.5 | 0.05em | Technical specs values |
| Nav | 12px | 700 | 1 | 0.08em | Navigation items (uppercase) |

### Typography Rules
- Custom typeface (TE Neue) — geometric, Helvetica-derived but sharper
- Only two weights: 400 and 700. Nothing in between.
- Navigation is ALL CAPS, 12px, with wide letter-spacing (0.08em)
- Spec labels are ALL CAPS, 12px, with modest letter-spacing (0.1em)
- Body text is small (14px) — information-dense, no fluff
- Hero product names are massive (72px) — the product IS the brand

---

## Spacing & Layout

```
:root {
  --space-xs:    4px;
  --space-sm:    8px;
  --space-md:    16px;
  --space-lg:    24px;
  --space-xl:    32px;
  --space-2xl:   48px;
  --space-3xl:   64px;
  --space-4xl:   96px;

  --page-max:       1200px;
  --content-max:    960px;
  --spec-col-width: 200px;
  --nav-height:     48px;
  --border-width:   1px;
  --radius:         0px;
}
```

### Layout Pattern
- **Zero border-radius** — everything is rectangular. No rounded corners anywhere.
- Grid-based product layouts: 2-4 column spec tables
- Product pages: full-bleed hero image → specs table → buy section
- Listing pages: strict grid, equal-sized product cards, no variation
- Spacing is generous between sections (64-96px) but tight within components (8-16px)
- No decorative spacing — every gap serves information hierarchy

---

## Component Specifications

### Navigation
```
- Height: 48px
- Background: #FFF (opaque, not transparent)
- Border-bottom: 1px solid #E0E0E0
- Logo: "teenage engineering" wordmark, 12px, uppercase, bold, left-aligned
- Links: 12px/700, uppercase, #000, letter-spacing 0.08em
- Hover: underline only (no color change)
- Cart: item count in parentheses, same style as nav links
- Mobile: hamburger icon, full-screen menu overlay
```

### Product Card (Grid)
```
- Aspect ratio: 1:1 (square)
- Background: #F5F5F5
- Border: none
- Border-radius: 0px
- Image: product centered, 80% of card area, no shadow
- Name: 12px/700, uppercase, centered below image
- Price: 14px/700, black, below name
- Hover: background shifts to #FAFAFA, 0.2s
- No "Add to cart" button visible — click entire card
```

### Specification Table
```
- Two columns: label (left) + value (right)
- Label: 12px/700, uppercase, #666, letter-spacing 0.1em
- Value: 12px/400, monospace, #000
- Row height: 36px
- Separator: 1px solid #E0E0E0 between rows
- No alternating row colors
- Max width: 480px per spec block (two blocks side by side on desktop)
```

### Buy Section
```
- Product name: 32px/700, left-aligned
- Price: 14px/700, immediately below name
- Color selector: small circles (24px), 1px border, no label
- Add to Cart button: full-width, 48px height, #000 background, #FFF text
  - 12px/700, uppercase, letter-spacing 0.08em
  - Hover: opacity 0.85
  - No border-radius, no shadow
- "Notify me" variant: same style, border instead of fill
```

### Hero (Product Page)
```
- Full-viewport image, product centered on white/light background
- Product name overlaid: 72px/700, bottom-left, absolute position
- Minimal padding (32px from edges)
- No CTA button on hero — scroll reveals content
- Image quality: extremely high-res, sharp, studio photography
```

---

## Motion & Animation

```
:root {
  --ease-default:    ease;
  --duration-hover:  200ms;
  --duration-page:   0ms;
}
```

### Animation Principles
- **Almost zero animation**
- Hover states: 200ms opacity or background-color change
- No scroll-triggered animations
- No page transitions
- No parallax
- No loading animations (pages load fast enough)
- Product images: very subtle zoom on hover (scale 1.02, 300ms) — the only "luxury" motion
- The brutalism IS the aesthetic

---

## Photography & Product Imagery

### Style
- Studio photography on white or light gray backgrounds
- Products are always the hero — no lifestyle shots, no hands, no context
- Angles: 3/4 view preferred, straight-on for detail shots
- Lighting: flat, even, no dramatic shadows
- Resolution: absurdly high — images are meant to be zoomed into

### Image Grid
- Product gallery: 2×2 or 3×3 grid, no gaps between images
- Each image: 1:1 square crop
- Hover: subtle zoom (1.02x) reveals image extends beyond frame

---

## Key Takeaways

1. **Zero radius, zero compromise** — rectangular everything creates an industrial, tool-like identity that NO competitor copies
2. **Monochrome as ideology** — restricting to black/white forces the products (not the website) to provide all the color
3. **Spec sheets are beautiful** — when the typography is perfect, a data table becomes a design object
4. **Small type, big confidence** — 12-14px body text says "we trust you to lean in"
5. **Product photography does the selling** — the design stays invisible so the product image can be the entire experience
