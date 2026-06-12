# Rivian — Design System

## 1. Overview

- **Site:** rivian.com
- **URL:** https://rivian.com
- **What they do:** Electric vehicle brand making adventure-oriented EVs — R1T pickup truck and R1S SUV. Targets outdoor adventurers and sustainability-focused consumers who don't want to choose between performance and the planet.
- **Awards:** Multiple IIHS Top Safety Pick+ awards; respected for a digital brand identity that authentically bridges outdoor culture with EV technology
- **Aesthetic:** The natural world rendered in digital. Deep forest greens, sky blues, and earthy tones ground the brand in authentic adventure. Clean sans-serif type communicates modern technology. The tension between rugged landscape photography and precise UI creates a unique brand voice: *capable, purposeful, and alive*.

---

## 2. Typography

### Primary Font
- **Family:** "Rivian" (proprietary) — humanist sans-serif, slightly rounded, accessible
- **Fallback:** "Inter", system-ui, sans-serif
- **Weights:** 300 Light, 400 Regular, 500 Medium, 600 SemiBold, 700 Bold
- **Character:** Clean but not sterile; functional with warmth

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Hero | clamp(2.75rem, 6vw, 5.5rem) | 500–600 | Mixed case, accessible scale |
| H2 | clamp(1.75rem, 3.5vw, 3rem) | 600 | Section anchors |
| H3 | 1.375rem | 600 | Feature/spec callouts |
| Body | 1rem | 400 | 16–17px, 1.65 leading |
| Label | 0.8125rem | 500 | Uppercase, specs |
| Caption | 0.75rem | 400 | Legal, fine print |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Deep Forest | `#1A2E1F` | Primary dark sections |
| Forest Green | `#2C4A30` | Secondary dark sections |
| Rivian Green | `#3D7A4A` | Brand primary accent |
| Muted Sage | `#5C8F65` | Hover states, secondary accent |
| Nature Sky | `#D4E8DC` | Light tint backgrounds |
| Pale Mint | `#EBF4EE` | Subtle section backgrounds |
| Off White | `#F8FAF8` | Primary light background |
| Pure White | `#FFFFFF` | Text on dark, light surfaces |

### Secondary
| Name | Hex | Usage |
|------|-----|-------|
| Slate Blue | `#3A5070` | Navigation, dark UI |
| Sand | `#D4C4A8` | Earthy warm accent |
| Canyon Red | `#8B3A2A` | Warning states, alerts |
| Charcoal | `#1C1C1C` | Text on light backgrounds |
| Mid Gray | `#6B7280` | Secondary text |

### Gradients
- **Forest hero:** `linear-gradient(180deg, rgba(26,46,31,0.4) 0%, rgba(26,46,31,0.85) 100%)` over landscape images
- **Light hero:** `linear-gradient(135deg, #F8FAF8 0%, #EBF4EE 100%)`
- **Green glow:** `radial-gradient(ellipse at 30% 60%, rgba(61,122,74,0.2) 0%, transparent 60%)`

---

## 4. Layout System

### Container
- **Max-width:** 1360px
- **Padding:** 0 clamp(20px, 4vw, 64px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1200px, Desktop 1200px+

### Section Spacing
- **Vertical:** 96–120px desktop, 64px tablet, 48px mobile
- **Spec rows:** Dense 4-column horizontal layout

### Layout Patterns
- Full-bleed hero: landscape nature photography, R1 vehicle in environment
- Alternating story blocks: image + copy, 6+6 columns, alternating sides
- Stats row: 4 large numbers across full width
- Feature cards: 3-column with large icons/imagery
- Compare table: horizontal scrollable specs

---

## 5. Navigation

- **Style:** Transparent on hero, white with shadow on scroll
- **Height:** 64px
- **Background scroll:** `#FFFFFF` + `box-shadow: 0 1px 8px rgba(0,0,0,0.08)`
- **Logo:** Rivian wordmark in dark green / white depending on context
- **Links:** 14px, 500 weight, `#1C1C1C` on white, white on transparent
- **CTA in Nav:** "Order" filled green button
- **Mobile:** Hamburger → full overlay with large green nav items

---

## 6. Buttons

### Primary Button
- **Background:** `#3D7A4A`
- **Text:** White, 14px, 600 weight
- **Padding:** 12px 28px
- **Border-radius:** 100px (full pill)
- **Hover:** `#2C4A30`, slight scale 1.01
- **Shadow:** `0 2px 12px rgba(61,122,74,0.3)`

### Secondary Button
- **Background:** transparent
- **Border:** `2px solid #3D7A4A`
- **Text:** `#3D7A4A`, 14px, 600
- **Hover:** Background fills `#EBF4EE`

### Dark Button (on dark sections)
- **Background:** `rgba(255,255,255,0.12)`
- **Border:** `1px solid rgba(255,255,255,0.3)`
- **Text:** white, 14px, 500
- **Hover:** `rgba(255,255,255,0.2)`

---

## 7. Cards & Components

### Feature Card
- Background: `#F8FAF8`
- Border-radius: 16px
- Shadow: `0 4px 24px rgba(0,0,0,0.06)`
- Image top (16:10 aspect, full-bleed to card edge)
- Body: 24px padding, heading + 2-3 sentence description

### Spec Card (Adventure-forward)
- Dark background `#1A2E1F`
- Large numeral: 4rem, white
- Spec unit + label
- Green icon at top

### Vehicle Comparison Table
- Horizontal scroll on mobile
- Column headers: vehicle name + price
- Row headers: specs
- Checkmarks in green

### Color Swatch Selector
- Circular swatches, 40×40px, border `#E2E8F0`
- Selected: `border: 2px solid #3D7A4A` + shadow
- Tooltip on hover with color name

---

## 8. Motion & Animation

### Hero
- Full-bleed video (landscape driving, nature)
- Parallax on scroll: vehicle moves at 0.4x speed

### Scroll Animations
- Feature blocks: fade up from Y:24px, staggered 100ms
- Stats: counter animation on viewport entry, 1.5s ease-out

### Micro-interactions
- Button hover: 200ms, color + slight scale
- Swatch selection: 150ms with ripple
- Feature card hover: shadow deepen + 4px Y translate

### Vehicle Images
- 360° spin: drag or auto-rotate on hero
- Smooth camera transitions in configurator

### Easing
- Signature: `cubic-bezier(0.3, 0, 0, 1)` — smooth, nature-like deceleration
- Durations: 150ms micro, 300ms hover, 500ms reveal, 1000ms hero

---

## 9. Layout Strategy

**Nature meets precision.** Full-bleed landscape photography is the emotional anchor; clean UI is the rational layer. Green connects both worlds — it's forest AND brand. Layouts are generous and breathable, mirroring wide-open outdoor spaces. Specs are given the same visual weight as adventure stories — the car's capability IS the emotional appeal.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The green is earned. Most brands pick a green for "sustainability" signaling — Rivian's green *is* the color of the environments their vehicles are designed to explore. Every time that `#3D7A4A` appears — as a button, a stat, a border — it recalls forest trails, river banks, and mountain passes. The design doesn't just show you an EV; it shows you where that EV will take you.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-primary: "Rivian", "Inter", system-ui, sans-serif;

  --font-size-hero: clamp(2.75rem, 6vw, 5.5rem);
  --font-size-h1: clamp(2rem, 4.5vw, 4rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.5rem);
  --font-size-h3: 1.375rem;
  --font-size-body: 1rem;
  --font-size-body-lg: 1.0625rem;
  --font-size-small: 0.8125rem;
  --font-size-label: 0.75rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.15;
  --line-height-normal: 1.65;
  --line-height-relaxed: 1.75;

  --letter-spacing-tight: -0.01em;
  --letter-spacing-label: 0.08em;

  /* Colors */
  --color-bg: #F8FAF8;
  --color-bg-mint: #EBF4EE;
  --color-bg-sky: #D4E8DC;

  --color-dark-primary: #1A2E1F;
  --color-dark-forest: #2C4A30;
  --color-accent: #3D7A4A;
  --color-accent-muted: #5C8F65;
  --color-accent-light: #EBF4EE;
  --color-accent-glow: rgba(61, 122, 74, 0.2);

  --color-text-primary: #1C1C1C;
  --color-text-body: #374151;
  --color-text-muted: #6B7280;
  --color-text-inverted: #FFFFFF;

  --color-border: #E2E8F0;
  --color-slate: #3A5070;
  --color-sand: #D4C4A8;

  /* Gradients */
  --gradient-forest-overlay: linear-gradient(180deg, rgba(26,46,31,0.4) 0%, rgba(26,46,31,0.85) 100%);
  --gradient-hero-light: linear-gradient(135deg, #F8FAF8 0%, #EBF4EE 100%);
  --gradient-green-glow: radial-gradient(ellipse at 30% 60%, rgba(61,122,74,0.2) 0%, transparent 60%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;

  /* Layout */
  --container-max: 1360px;
  --container-padding: clamp(20px, 4vw, 64px);
  --section-padding: 120px;
  --section-padding-tablet: 64px;
  --section-padding-mobile: 48px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 100px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 12px 40px rgba(0, 0, 0, 0.1);
  --shadow-button: 0 2px 12px rgba(61, 122, 74, 0.3);

  /* Nav */
  --nav-height: 64px;
  --nav-bg-scrolled: #FFFFFF;
  --nav-shadow: 0 1px 8px rgba(0, 0, 0, 0.08);

  /* Transitions */
  --ease-nature: cubic-bezier(0.3, 0, 0, 1);
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 150ms;
  --duration-hover: 300ms;
  --duration-reveal: 500ms;
  --duration-hero: 1000ms;
}
```

---

## 12. Category Tags

`dark-light-hybrid` `automotive` `EV` `adventure` `green-accent` `nature` `outdoor` `pill-buttons` `product-forward` `sustainable`
