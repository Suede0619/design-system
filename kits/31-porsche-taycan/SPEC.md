# Porsche Taycan — Design System

## 1. Overview

- **Site:** porsche.com/taycan
- **URL:** https://www.porsche.com/usa/models/taycan/
- **What they do:** Electric sports car microsite and configurator for the Porsche Taycan — Porsche's flagship electric vehicle. The site serves as an immersive product experience, combining editorial storytelling with technical specifications and a build-your-own configurator.
- **Awards:** Porsche Design System (PDS) is a publicly recognized design system; porsche.com is consistently cited for automotive digital excellence; multiple Webby and automotive site awards
- **Aesthetic:** Dark cinematic luxury. Black and deep charcoal dominate; precision typography communicates engineering confidence. Imagery is everything — full-bleed photography and video convey velocity, craft, and status. Minimal UI, maximum drama.

---

## 2. Typography

### Primary Font
- **Family:** "Porsche Next" (proprietary) — geometric sans-serif designed for Porsche's digital system
- **Fallback:** "Arial", system-ui, sans-serif
- **Weights:** Thin (100), Light (300), Regular (400), Semi Bold (600), Bold (700)
- **Character:** Precise, technical, yet refined — engineered legibility at all scales

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Hero | clamp(3rem, 6vw, 6rem) | 300–400 | Light weight, enormous scale |
| H2 | clamp(1.75rem, 3.5vw, 3rem) | 400 | Section headers |
| H3 | 1.5rem | 400–600 | Feature callouts |
| Body | 1rem | 400 | Clean, technical |
| Label | 0.75rem | 400–600 | Uppercase, specs, UI |
| Caption | 0.6875rem | 400 | Fine print, footnotes |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Porsche Black | `#000000` | Primary dark background |
| Graphite Deep | `#0A0A0A` | Hero sections |
| Carbon | `#1C1C1C` | Card surfaces |
| Dark Mid | `#282828` | Elevated elements |
| Steel | `#464646` | Borders, inactive UI |
| Silver | `#B2B2B2` | Secondary text |
| Platinum | `#DCDCDC` | Tertiary text, specs |
| Pure White | `#FFFFFF` | Primary headings, primary text |

### Brand Accent
| Name | Hex | Usage |
|------|-----|-------|
| Porsche Red | `#C00000` | Heritage red, minimal usage |
| Racing Gold | `#D5A030` | Special editions, awards |
| Electric Blue | `#3B78C4` | Taycan-specific accent, EV indicators |
| Speed Green | `#4CAF50` | Range/charging status indicators |

### Gradients
- **Dark hero:** `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)` — image-to-dark fade
- **Vignette:** `radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)`
- **Feature gradient:** `linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 100%)`

---

## 4. Layout System

### Container
- **Max-width:** 1440px (or full-bleed for video/hero)
- **Content max-width:** 1200px for text sections
- **Padding:** 0 clamp(24px, 4vw, 80px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1200px, Desktop 1200px+

### Section Spacing
- **Vertical:** 100–140px desktop, 72px tablet, 48px mobile
- **Full-bleed sections:** No padding, edge-to-edge
- **Spec grids:** Dense 2–4 column layouts with small numbers

### Layout Patterns
- Full-bleed video hero with overlaid headline and CTA
- Alternating image/text: cinematic image left/right with spec text
- 3-4 column spec grid with large numbers (top speed, range, 0-60)
- Horizontal sticky configurator with persistent summary panel
- Video chapter sections: auto-play landscape video with title overlay

---

## 5. Navigation

- **Style:** Fixed dark, minimal, very thin
- **Height:** 52px
- **Background:** `rgba(0,0,0,0.9)` with `backdrop-filter: blur(8px)`
- **Logo:** Porsche crest + "PORSCHE" wordmark in white, precise
- **Links:** 12px, uppercase, tracked, `rgba(255,255,255,0.7)` → white
- **CTA in Nav:** "Configure" button in white fill
- **Mobile:** Clean hamburger → full overlay

---

## 6. Buttons

### Primary Button (Configure)
- **Background:** `#FFFFFF`
- **Text:** `#000000`, 13px, 600 weight, uppercase, tracked
- **Padding:** 12px 28px
- **Border-radius:** 0px — sharp corners, precision aesthetic
- **Hover:** `rgba(255,255,255,0.9)`, slight 0.5px shadow
- **Dark variant:** `#000000` background, white text, `border: 1px solid #464646`

### Secondary Button
- **Background:** transparent
- **Border:** `1px solid rgba(255,255,255,0.4)`
- **Text:** white, 13px, uppercase
- **Hover:** border white

### Ghost Button (on light sections)
- Black border, black text, radius 0, precision style

---

## 7. Cards & Components

### Model Card
- Full-bleed image (16:10), no border-radius
- Dark gradient overlay bottom 30%
- Model name in white at bottom
- Price below in smaller weight

### Spec Block
- Large number: 5–6rem, thin weight, white
- Unit below: 14px, silver
- Label above: 11px uppercase, steel
- 3-4 items in horizontal row

### Configurator Panel
- Left: large product render, `#0A0A0A` background
- Right: scrolling options panel, `#1C1C1C`
- Option tiles: border `#282828`, selected state `border: 2px solid #FFFFFF`

### Feature Section (Inline)
- Full-bleed cinematic image
- Floating text card (dark, right-aligned): heading + 2 sentences + CTA link

---

## 8. Motion & Animation

### Hero Video
- Full-screen auto-play loop, muted, 24fps cinematic

### Page Scroll
- Header content: fade in from slight Y offset, 600ms
- Spec numbers: count up when in viewport, 1.2s ease-out
- Images: slight parallax at 0.3x scroll speed

### Configurator
- Color swatches: smooth model recolor transition 400ms
- Wheel/option changes: rapid rerender with 200ms crossfade

### Micro-interactions
- Button hover: 150ms precise, no scale
- Nav link: 120ms, white color shift
- Feature hover: image zoom 1.0 → 1.02, 600ms

### Easing
- Signature: `cubic-bezier(0.25, 0, 0, 1)` — Porsche precision easing
- Durations: 150ms micro, 400ms standard, 600ms reveal, 1200ms cinematic

---

## 9. Layout Strategy

**Cinema for one product.** Every section is designed to evoke the feeling of being at a Porsche launch event — theatrical lighting, precise type, dramatic pauses. Information is revealed in chapters like a film. Technical specifications are presented with the same reverence as artistic statements. The configurator is its own product experience.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The sharp-corner, zero-radius design language. In a world of rounded corners, every Porsche button, card, and container has razor-sharp 0px border-radius. This single decision communicates: *precision engineering, no softening, no compromise*. Combined with thin-weight typography at dramatic scale, it produces a visual vocabulary that feels genuinely built for a car that corners at 0.1g.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-primary: "Porsche Next", "Arial", system-ui, sans-serif;

  --font-size-hero: clamp(3rem, 6vw, 6rem);
  --font-size-h1: clamp(2.5rem, 5vw, 5rem);
  --font-size-h2: clamp(1.75rem, 3.5vw, 3rem);
  --font-size-h3: 1.5rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-label: 0.75rem;
  --font-size-caption: 0.6875rem;

  --font-weight-thin: 100;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.05;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.7;

  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.08em;
  --letter-spacing-label: 0.12em;

  /* Colors */
  --color-bg: #000000;
  --color-bg-graphite: #0A0A0A;
  --color-surface: #1C1C1C;
  --color-surface-elevated: #282828;
  --color-border: #464646;
  --color-border-muted: #323232;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: #DCDCDC;
  --color-text-muted: #B2B2B2;
  --color-text-steel: #787878;

  --color-accent-red: #C00000;
  --color-accent-gold: #D5A030;
  --color-accent-blue: #3B78C4;
  --color-accent-green: #4CAF50;

  /* Gradients */
  --gradient-image-dark: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%);
  --gradient-vignette: radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%);
  --gradient-card: linear-gradient(135deg, #0A0A0A 0%, #1C1C1C 100%);

  /* Spacing */
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-18: 72px;
  --space-25: 100px;
  --space-35: 140px;

  /* Layout */
  --container-max: 1200px;
  --container-max-wide: 1440px;
  --container-padding: clamp(24px, 4vw, 80px);
  --section-padding: 140px;
  --section-padding-tablet: 72px;
  --section-padding-mobile: 48px;

  /* Border Radius — INTENTIONALLY ZERO */
  --radius-none: 0px;
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  --radius-pill: 2px; /* even pills are nearly sharp */

  /* Shadows */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.6);
  --shadow-configurator: 0 0 60px rgba(0, 0, 0, 0.8);

  /* Nav */
  --nav-height: 52px;
  --nav-bg: rgba(0, 0, 0, 0.9);
  --nav-blur: 8px;

  /* Transitions */
  --ease-precision: cubic-bezier(0.25, 0, 0, 1);
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 150ms;
  --duration-standard: 400ms;
  --duration-reveal: 600ms;
  --duration-cinematic: 1200ms;
}
```

---

## 12. Category Tags

`dark` `automotive` `luxury` `zero-radius` `video-hero` `cinematic` `dark-bg` `EV` `product-configurator` `full-bleed`
