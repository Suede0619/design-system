# Pitch — Design System

## 1. Overview

- **Site:** pitch.com
- **URL:** https://pitch.com
- **What they do:** Collaborative AI presentation platform for fast-moving teams. Used by 3M+ teams for pitch decks, brand guidelines, and investor materials.
- **Awards:** Awwwards Site of the Day, Product Hunt #1 Product of the Day multiple times, widely praised for elevated SaaS design
- **Aesthetic:** Polished dark SaaS with purple-mauve gradients. Dense but breathable. The presentation editor metaphor bleeds into the marketing site — every section feels like a beautifully designed slide deck.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Söhne" (by Klim Type Foundry) — geometric grotesque with warmth
- **Fallback:** "Inter", system-ui, sans-serif
- **Weight:** 600–700 for headlines, 400–500 for body
- **Size range:** Hero: clamp(3rem, 6vw, 5.5rem); Section H2: clamp(2rem, 4vw, 3.5rem)
- **Letter-spacing:** -0.02em on headings, 0 on body
- **Line-height:** 1.1–1.2 on display, 1.6 on body

### Body Font
- **Family:** "Söhne" (or Inter fallback)
- **Weight:** 400 Regular
- **Size:** 16–18px
- **Line-height:** 1.65

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| h1 | clamp(3rem, 6vw, 5.5rem) | 700 | Mixed case, tight tracking |
| h2 | clamp(2rem, 4vw, 3.5rem) | 600 | Section headers |
| h3 | 1.5rem | 600 | Feature callouts |
| h4 | 1.125rem | 600 | Card titles |
| body | 1rem | 400 | 18px line body |
| caption | 0.875rem | 500 | Meta / labels |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Deep Space | `#0F0E17` | Primary background (hero, dark sections) |
| Space Mid | `#161426` | Elevated surface, cards |
| Lavender Slate | `#2D2B4E` | Borders, dividers on dark |
| Electric Violet | `#7B5CF0` | Primary CTA, accent |
| Soft Violet | `#9B7FF5` | Hover state, secondary accent |
| Off White | `#F8F8FC` | Light section backgrounds |
| True White | `#FFFFFF` | Text on dark, light bg fill |

### Background System
- **Dark hero:** `#0F0E17`
- **Feature sections:** Alternates between `#0F0E17` and `#F8F8FC`
- **Cards on dark:** `#161426` with `border: 1px solid #2D2B4E`
- **Cards on light:** `#FFFFFF` with `box-shadow: 0 2px 16px rgba(0,0,0,0.07)`

### Text Colors
- **Primary on dark:** `#FFFFFF`
- **Secondary on dark:** `rgba(255,255,255,0.6)`
- **Primary on light:** `#0F0E17`
- **Secondary on light:** `#6B6B8A`
- **Accent:** `#7B5CF0`

### Gradients
- **Hero gradient:** `linear-gradient(135deg, #0F0E17 0%, #1A1540 50%, #0F0E17 100%)`
- **CTA button gradient:** `linear-gradient(135deg, #7B5CF0 0%, #9B7FF5 100%)`
- **Glow blob:** `radial-gradient(ellipse at 50% 0%, rgba(123, 92, 240, 0.25) 0%, transparent 60%)`
- **Feature card shimmer:** Subtle rainbow gradient border at 0.5px on dark cards

---

## 4. Layout System

### Container
- **Max-width:** 1280px
- **Padding:** 0 clamp(20px, 4vw, 64px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1024px, Desktop 1024-1280px, Wide 1280px+

### Section Spacing
- **Vertical padding:** 96px (desktop), 64px (tablet), 48px (mobile)
- **Component gaps:** 48–80px between feature blocks
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

### Layout Patterns
- Full-width hero, centered text, product screenshot below
- 2-column feature splits: text left, product demo right (alternating)
- 3-column feature card grid
- Scrolling testimonial marquee strip
- Pricing: 3-column on desktop, stacked mobile

---

## 5. Navigation

- **Style:** Transparent over hero, transitions to `#0F0E17` with `backdrop-filter: blur(16px)` on scroll
- **Height:** 64px desktop, 56px mobile
- **Font:** 14px, 500 weight, normal case
- **Logo:** "Pitch" wordmark in white
- **Links:** `rgba(255,255,255,0.7)` default, white on hover
- **CTA in Nav:** Filled violet button, right-aligned
- **Mobile:** Sheet-style overlay, full-screen with stacked nav items

---

## 6. Buttons

### Primary Button
- **Background:** `#7B5CF0`
- **Text:** White, 14px, 600 weight
- **Padding:** 12px 24px
- **Border-radius:** 8px
- **Hover:** Slightly lighter `#8B6CF5`, subtle scale(1.01)
- **Shadow:** `0 4px 16px rgba(123, 92, 240, 0.4)`

### Secondary Button
- **Background:** transparent
- **Border:** 1px solid `rgba(255,255,255,0.2)`
- **Text:** White, 14px, 500 weight
- **Hover:** Border becomes `rgba(255,255,255,0.5)`, bg `rgba(255,255,255,0.05)`

### Ghost / Text Button
- **Background:** transparent, no border
- **Text:** `rgba(255,255,255,0.7)` → White on hover
- **Arrow icon** animates right 4px on hover

---

## 7. Cards & Components

### Feature Card (Dark)
- **Background:** `#161426`
- **Border:** 1px solid `#2D2B4E`
- **Border-radius:** 16px
- **Padding:** 32px
- **Hover:** Border brightens to `rgba(123,92,240,0.4)`, subtle glow

### Product Screenshot Card
- **Border-radius:** 12px
- **Shadow:** `0 24px 64px rgba(0,0,0,0.6)`
- **Border:** 1px solid `rgba(255,255,255,0.08)`
- **Slight 3D tilt** on hero: `transform: perspective(1200px) rotateX(4deg) rotateY(-2deg)`

### Integration Badge / Logo Cloud
- **Background:** `#1E1C38`
- **Border-radius:** 10px
- **Padding:** 12px 16px
- **Logo:** 24px tall, grayscale with opacity 0.6

---

## 8. Motion & Animation

### Page Load
- Hero content fades up from Y:20px, 0.5s, staggered 80ms between elements

### Scroll Animations
- Feature sections: fade-in + translateY from 30px
- Product demo screenshots: parallax at 0.3x scroll speed
- Stats counter: number counts up when in viewport

### Micro-interactions
- Button hover: 150ms ease-out, color + slight scale
- Card hover: border glow 250ms, box-shadow expand
- Nav: smooth color transition 300ms on scroll

### Signature Animation
- **Marquee testimonials:** Infinite horizontal scroll at ~40px/s, pauses on hover
- **Template gallery:** Horizontal scroll with momentum, keyboard navigable

### Easing
- Default: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Snappy: `cubic-bezier(0.16, 1, 0.3, 1)`
- Durations: 150ms (micro), 250ms (hover), 400ms (reveal), 600ms (page)

---

## 9. Layout Strategy

- **Approach:** Dark hero, light feature alternation, sticky product demo
- **Product screenshot mock:** Floating at ~8-degree tilt with shadow drop
- **Testimonial strip:** Marquee belt at bottom of each major section
- **CTA footers:** Full-width dark gradient with centered copy and double CTA

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The product itself is the hero — every section of the marketing site looks like one of Pitch's own beautiful slide templates. The dark-violet aesthetic communicates "this is what your deck will feel like," making the marketing site serve as implicit product demonstration.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-display: "Söhne", "Inter", system-ui, sans-serif;
  --font-body: "Söhne", "Inter", system-ui, sans-serif;

  --font-size-hero: clamp(3rem, 6vw, 5.5rem);
  --font-size-h1: clamp(2.5rem, 5vw, 4.5rem);
  --font-size-h2: clamp(1.75rem, 3.5vw, 3rem);
  --font-size-h3: 1.5rem;
  --font-size-h4: 1.125rem;
  --font-size-body: 1rem;
  --font-size-body-lg: 1.125rem;
  --font-size-caption: 0.875rem;
  --font-size-label: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.15;
  --line-height-snug: 1.35;
  --line-height-normal: 1.65;

  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.04em;

  /* Colors — Dark */
  --color-bg-primary: #0F0E17;
  --color-bg-elevated: #161426;
  --color-bg-border: #2D2B4E;
  --color-bg-light: #F8F8FC;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.6);
  --color-text-muted: rgba(255, 255, 255, 0.35);
  --color-text-dark: #0F0E17;
  --color-text-dark-secondary: #6B6B8A;

  --color-accent: #7B5CF0;
  --color-accent-hover: #8B6CF5;
  --color-accent-soft: #9B7FF5;
  --color-accent-glow: rgba(123, 92, 240, 0.25);
  --color-accent-border: rgba(123, 92, 240, 0.4);

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #0F0E17 0%, #1A1540 50%, #0F0E17 100%);
  --gradient-cta: linear-gradient(135deg, #7B5CF0 0%, #9B7FF5 100%);
  --gradient-glow: radial-gradient(ellipse at 50% 0%, rgba(123, 92, 240, 0.25) 0%, transparent 60%);
  --gradient-shimmer: linear-gradient(135deg, rgba(123,92,240,0.15) 0%, rgba(155,127,245,0.05) 100%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* Layout */
  --container-max: 1280px;
  --container-padding: clamp(20px, 4vw, 64px);
  --section-padding: 96px;
  --section-padding-tablet: 64px;
  --section-padding-mobile: 48px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 2px 16px rgba(0, 0, 0, 0.07);
  --shadow-card-dark: 0 24px 64px rgba(0, 0, 0, 0.6);
  --shadow-cta: 0 4px 16px rgba(123, 92, 240, 0.4);
  --shadow-glow: 0 0 40px rgba(123, 92, 240, 0.2);

  /* Nav */
  --nav-height: 64px;
  --nav-bg-scrolled: rgba(15, 14, 23, 0.92);
  --nav-blur: 16px;

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-micro: 150ms;
  --duration-hover: 250ms;
  --duration-reveal: 400ms;
  --duration-slow: 600ms;
}
```

---

## 12. Category Tags

`dark` `purple` `SaaS` `product-forward` `gradient-dark` `presentation-tool` `minimal-dense` `collaborative`
