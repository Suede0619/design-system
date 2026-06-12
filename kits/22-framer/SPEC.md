# Framer — Design System

## 1. Overview

- **Site:** framer.com
- **URL:** https://www.framer.com
- **What they do:** No-code website builder loved by designers. Build, CMS, analytics, A/B testing, and deployment in one visual editor. Used by Perplexity, Miro, and Fortune 500 teams.
- **Awards:** Multiple Awwwards Site of the Day nominations; recognized as industry-standard design-forward SaaS site
- **Aesthetic:** Clean white canvas with surgical typography, electric blue accents, and interactive product previews that feel alive. The site is built in Framer itself, making it a living product demo.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Inter" (Variable) — precise, neutral, geometric
- **Weight:** 700 (Bold) hero, 600 section headers
- **Size:** Hero: clamp(3.5rem, 7vw, 6rem); H2: clamp(2rem, 4vw, 3.5rem)
- **Letter-spacing:** -0.025em (headings), 0 (body)
- **Line-height:** 1.1 headings, 1.6 body

### Body Font
- **Family:** "Inter"
- **Weight:** 400–500
- **Size:** 16px default, 18px in hero lead
- **Line-height:** 1.6

### Heading Hierarchy
| Level | Size | Weight | Letter-spacing |
|-------|------|--------|----------------|
| h1 | clamp(3.5rem, 7vw, 6rem) | 700 | -0.025em |
| h2 | clamp(2rem, 4vw, 3.5rem) | 600–700 | -0.02em |
| h3 | 1.75rem | 600 | -0.01em |
| h4 | 1.25rem | 600 | 0 |
| body | 1rem | 400 | 0 |
| small | 0.875rem | 500 | 0.02em |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Pure White | `#FFFFFF` | Primary background |
| Framer Blue | `#0099FF` | Primary CTA, accent, links |
| Deep Blue | `#0066DD` | CTA hover, strong accent |
| Off-White | `#F5F5F7` | Section alt background |
| Ink Black | `#0A0A0A` | Primary text |
| Ink Medium | `#444444` | Secondary text |
| Ink Light | `#888888` | Muted/placeholder |
| Border Gray | `#E5E5E5` | Card borders, dividers |
| Dark Surface | `#111111` | Dark section backgrounds |

### Background System
- **Primary:** `#FFFFFF`
- **Subtle alt:** `#F5F5F7`
- **Dark sections (footer, hero variants):** `#111111` or `#0A0A0A`
- **Card background:** `#FFFFFF` with `border: 1px solid #E5E5E5`

### Text Colors
- **Primary:** `#0A0A0A`
- **Secondary:** `#444444`
- **Muted:** `#888888`
- **Link / Accent:** `#0099FF`
- **On dark:** `#FFFFFF`

### Gradients
- **Subtle hero gradient:** `linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)` — barely perceptible
- **Blue shimmer (used on product UI):** `linear-gradient(135deg, #0099FF 0%, #00C6FF 100%)`
- **Mesh gradient blobs:** Soft blue/purple blobs at very low opacity as section accents

---

## 4. Layout System

### Container
- **Max-width:** 1200px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1024px, Desktop 1024-1200px, Wide 1200px+

### Section Spacing
- **Vertical padding:** 120px (desktop), 80px (tablet), 60px (mobile)
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 120

### Layout Patterns
- Full-width minimal hero, centered
- Bento grid feature layouts: varying cell sizes (1×1, 2×1, 1×2, 2×2)
- Testimonial logo strip (grayscale logos)
- Pricing: 3-column comparison with highlighted center column
- Feature spotlight: large interactive demo component with label callouts

---

## 5. Navigation

- **Style:** Fixed white, `border-bottom: 1px solid #E5E5E5`, no blur (crisp)
- **Height:** 56px
- **Font:** 14px, 500 weight
- **Links:** `#444444` → `#0A0A0A` on hover
- **Logo:** "Framer" wordmark in `#0A0A0A`
- **CTA:** "Start for free" — `#0099FF` button, 8px border-radius
- **Dropdowns:** Clean white panels with 12px border-radius and `box-shadow: 0 8px 32px rgba(0,0,0,0.08)`

---

## 6. Buttons

### Primary Button
- **Background:** `#0099FF`
- **Text:** White, 14px, 600 weight
- **Padding:** 10px 20px
- **Border-radius:** 8px
- **Hover:** `#0088EE`, slight glow `0 2px 12px rgba(0, 153, 255, 0.35)`
- **Active:** `#0077CC`

### Secondary Button
- **Background:** `#F5F5F7`
- **Border:** none
- **Text:** `#0A0A0A`, 14px, 500 weight
- **Hover:** `#EBEBED`
- **Border-radius:** 8px

### Ghost Button
- **Background:** transparent
- **Border:** 1px solid `#E5E5E5`
- **Text:** `#0A0A0A`
- **Hover:** Background `#F5F5F7`

---

## 7. Cards & Components

### Bento Feature Card
- **Background:** `#FFFFFF`
- **Border:** 1px solid `#E5E5E5`
- **Border-radius:** 16px
- **Padding:** 32px
- **Overflow:** hidden (for product preview fills)
- **Hover:** box-shadow `0 8px 32px rgba(0,0,0,0.08)`, transform translateY(-2px)

### Product Demo Embed
- Framer canvas previews embedded inline — actual interactive product components in the marketing page
- **Border-radius:** 12px
- **Shadow:** `0 4px 24px rgba(0,0,0,0.12)`
- **Border:** 1px solid `#E5E5E5`

### Logo Cloud
- Grayscale logos at 50% opacity, full-color on hover
- Infinite marquee scroll at 30px/s

### Stat / Metric Display
- **Number:** 3rem, 700 weight, `#0A0A0A`
- **Label:** 0.875rem, muted `#888888`
- **Separator:** 1px `#E5E5E5` top border

---

## 8. Motion & Animation

### Signature Motion
- **Interactive canvas preview:** Real Framer components that react to hover/scroll within the marketing page — product is the demo
- **Bento card reveals:** Cards animate in with staggered fade-up, 400ms each, 60ms delay

### Scroll Animations
- Fade-up: Y: 20px → 0, opacity 0→1, 500ms
- Stagger: 60ms between grid items

### Hover Micro-interactions
- Button: 150ms ease-out color + shadow
- Card: 200ms translateY(-2px) + shadow expand
- Logo: 200ms grayscale lift

### Page Load
- Minimal — content appears cleanly, no dramatic reveal
- Hero product demo boots with subtle "drawing in" animation at 800ms

### Easing
- Default: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Bounce-out: `cubic-bezier(0.16, 1, 0.3, 1)`

---

## 9. What Makes This Design Distinctive

**The ONE thing:** The marketing site is built in Framer and runs live interactive product demos directly inside the page — scroll-driven canvas components, real editors, real A/B test UIs — so the product sells itself through direct experience rather than screenshots.

---

## 10. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-display: "Inter", system-ui, -apple-system, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;

  --font-size-hero: clamp(3.5rem, 7vw, 6rem);
  --font-size-h1: clamp(2.5rem, 5vw, 4.5rem);
  --font-size-h2: clamp(2rem, 4vw, 3.5rem);
  --font-size-h3: 1.75rem;
  --font-size-h4: 1.25rem;
  --font-size-body: 1rem;
  --font-size-body-lg: 1.125rem;
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.1;
  --line-height-snug: 1.35;
  --line-height-normal: 1.6;

  --letter-spacing-tight: -0.025em;
  --letter-spacing-snug: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.02em;

  /* Colors */
  --color-bg: #FFFFFF;
  --color-bg-subtle: #F5F5F7;
  --color-bg-dark: #0A0A0A;
  --color-bg-dark-elevated: #111111;

  --color-text-primary: #0A0A0A;
  --color-text-secondary: #444444;
  --color-text-muted: #888888;
  --color-text-on-dark: #FFFFFF;

  --color-accent: #0099FF;
  --color-accent-hover: #0088EE;
  --color-accent-active: #0077CC;
  --color-accent-glow: rgba(0, 153, 255, 0.2);

  --color-border: #E5E5E5;
  --color-border-strong: #CCCCCC;
  --color-border-subtle: #F0F0F0;

  /* Gradients */
  --gradient-hero: linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%);
  --gradient-blue: linear-gradient(135deg, #0099FF 0%, #00C6FF 100%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;

  /* Layout */
  --container-max: 1200px;
  --container-padding: clamp(16px, 4vw, 48px);
  --section-padding: 120px;
  --section-padding-tablet: 80px;
  --section-padding-mobile: 60px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 4px rgba(0, 0, 0, 0.06);
  --shadow-card: 0 2px 16px rgba(0, 0, 0, 0.06);
  --shadow-elevated: 0 8px 32px rgba(0, 0, 0, 0.08);
  --shadow-modal: 0 16px 48px rgba(0, 0, 0, 0.12);
  --shadow-blue: 0 2px 12px rgba(0, 153, 255, 0.35);

  /* Nav */
  --nav-height: 56px;
  --nav-border: 1px solid #E5E5E5;

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-micro: 150ms;
  --duration-hover: 200ms;
  --duration-reveal: 400ms;
  --duration-slow: 500ms;
}
```

---

## 11. Category Tags

`light` `clean` `minimal` `product-demo` `SaaS` `design-tool` `bento-grid` `interactive` `blue-accent`
