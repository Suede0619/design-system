# Cal.com — Design System

## 1. Overview

- **Site:** cal.com
- **URL:** https://cal.com
- **What they do:** Open-source scheduling infrastructure. Individuals, businesses, and developers building scheduling platforms. SOC 2 Type II, HIPAA, GDPR compliant. The Calendly alternative that's actually open source.
- **Awards:** Product Hunt #1 Product of the Day, GitHub 30K+ stars, widely praised as the most beautifully designed open-source SaaS
- **Aesthetic:** Crisp off-white light mode with deep navy/charcoal type. Compact, precise, and trustworthy. Calendar UI previews are the core visual language — the product demonstrates itself.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Cal Sans" (custom display font designed specifically for Cal.com, commissioned for the brand) + "Inter" for body
- **Cal Sans:** Geometric, slightly condensed, optimized for "Cal" wordmark and hero headlines
- **Weight:** 700 Cal Sans display; 600 Inter headings; 400 Inter body
- **Size:** Hero: clamp(2.75rem, 5.5vw, 4.5rem)
- **Letter-spacing:** -0.02em headings
- **Line-height:** 1.15 headings, 1.55 body

### Body Font
- **Family:** "Inter" Variable
- **Weight:** 400–500
- **Size:** 15–16px
- **Line-height:** 1.55

### Heading Hierarchy
| Level | Size | Weight | Font |
|-------|------|--------|------|
| h1 | clamp(2.75rem, 5.5vw, 4.5rem) | 700 | Cal Sans |
| h2 | clamp(1.75rem, 3vw, 2.75rem) | 600 | Inter |
| h3 | 1.25rem | 600 | Inter |
| h4 | 1.0625rem | 600 | Inter |
| body | 1rem | 400 | Inter |
| caption | 0.875rem | 400–500 | Inter |
| label | 0.75rem | 500 | Inter, uppercase, 0.05em |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Cal White | `#FFFFFF` | Primary background |
| Off White | `#F9FAFB` | Section alt bg |
| Subtle | `#F3F4F6` | Input backgrounds, muted fills |
| Border | `#E5E7EB` | All borders |
| Cal Black | `#111827` | Primary text |
| Cal Mid | `#374151` | Secondary text |
| Cal Muted | `#6B7280` | Muted text, placeholders |
| Cal Blue | `#111827` | CTA, primary interactive |
| Cal Brand | `#0069FF` | Link color, active states |
| Cal Available | `#22C55E` | Available time slots |
| Cal Booked | `#EF4444` | Unavailable/busy indicator |

### Dark Mode (app.cal.com)
- **Background:** `#1C1C1E`
- **Surface:** `#2C2C2E`
- **Border:** `#3A3A3C`
- **Text:** `#FFFFFF` primary, `#AEAEB2` secondary

### Background System
- **Primary:** `#FFFFFF`
- **Alt sections:** `#F9FAFB`
- **Cards:** White with `border: 1px solid #E5E7EB`

### Gradients
- **None used** — entirely flat design philosophy
- **Calendar stripe pattern:** Horizontal lines at very low opacity as subtle section texture

---

## 4. Layout System

### Container
- **Max-width:** 1140px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-640px, Tablet 640-1024px, Desktop 1024-1140px

### Section Spacing
- **Vertical padding:** 96px desktop, 72px tablet, 56px mobile
- **Spacing scale:** 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24 (Tailwind scale ×4)

### Layout Patterns
- Hero: centered with product booking widget mockup below
- Feature sections: numbered 01/02/03 with icon + text + product preview
- Benefits grid: 4-up icon cards
- Testimonials: 3-column card grid with avatar + quote + rating
- Integrations: logo grid with hover state
- Pricing: 2-column starter/team + enterprise contact

---

## 5. Navigation

- **Style:** Sticky white, `border-bottom: 1px solid #E5E7EB`
- **Height:** 56px
- **Logo:** Cal.com geometric logo + "Cal.com" wordmark in Cal Sans
- **Links:** `#374151` → `#111827` on hover
- **CTA:** "Get started" — `#111827` background, white text, 6px radius
- **Font:** 14px, 500 weight (Inter)
- **Mobile:** Sheet overlay with full links

---

## 6. Buttons

### Primary
- **Background:** `#111827`
- **Text:** `#FFFFFF`, 14px, 600 weight
- **Padding:** 10px 20px
- **Border-radius:** 6px
- **Hover:** `#1F2937`

### Outline
- **Background:** transparent
- **Border:** 1px solid `#E5E7EB`
- **Text:** `#374151`
- **Hover:** `background: #F3F4F6`

### Link-style
- **Color:** `#0069FF`
- **Hover:** underline

---

## 7. Cards & Components

### Booking Widget Preview (Hero)
- White card, `border: 1px solid #E5E7EB`, `border-radius: 12px`
- Left panel: avatar, event type, duration options
- Right panel: calendar grid with available dates highlighted in green, times listed in column
- `box-shadow: 0 8px 32px rgba(0,0,0,0.06)`

### Feature Card
- White bg, `border: 1px solid #E5E7EB`
- `border-radius: 8px`
- Icon: 40px, brand-appropriate color
- `padding: 24px`
- Hover: shadow `0 4px 16px rgba(0,0,0,0.06)`

### Calendar Grid Component
- Day cells: 36×36px, `border-radius: 6px`
- Available: hover `bg: #F9FAFB`, border `#E5E7EB`
- Today: `background: #111827; color: #FFFFFF`
- Selected: `background: #0069FF; color: #FFFFFF`

### Testimonial Card
- White bg, `border-radius: 12px`
- Quote text 15px italic
- Stars: 5× `#FBBF24` (amber)

---

## 8. Motion & Animation

### Signature Motion
- **Calendar page flip:** Date grid slides when month changes (translateX 100% → 0, 300ms)
- **Booking confirmation:** Check mark draws in on confirmation
- **Time slot selection:** Smooth column reveal animation

### Scroll
- Fade-up 20px, 400ms, stagger 60ms between grid items

### Hover
- Buttons: 150ms ease
- Cards: 200ms shadow
- Calendar cells: 100ms background fill

### Easing
- `cubic-bezier(0.25, 0.1, 0.25, 1)` default
- Durations: 100ms ultra-fast (cells), 150ms hover, 300ms transitions

---

## 9. What Makes This Design Distinctive

**The ONE thing:** The actual booking widget is embedded directly in the marketing hero — not a screenshot, not a mockup — a real, functional calendar component that you can interact with. The product IS the hero element.

---

## 10. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-display: "Cal Sans", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;

  --font-size-hero: clamp(2.75rem, 5.5vw, 4.5rem);
  --font-size-h1: clamp(2rem, 4vw, 3.5rem);
  --font-size-h2: clamp(1.75rem, 3vw, 2.75rem);
  --font-size-h3: 1.25rem;
  --font-size-h4: 1.0625rem;
  --font-size-body: 1rem;
  --font-size-sm: 0.9375rem;
  --font-size-xs: 0.875rem;
  --font-size-label: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.15;
  --line-height-normal: 1.55;
  --letter-spacing-tight: -0.02em;
  --letter-spacing-label: 0.05em;

  /* Colors */
  --color-bg: #FFFFFF;
  --color-bg-subtle: #F9FAFB;
  --color-bg-muted: #F3F4F6;

  --color-border: #E5E7EB;
  --color-border-strong: #D1D5DB;

  --color-text-primary: #111827;
  --color-text-secondary: #374151;
  --color-text-muted: #6B7280;

  --color-cta: #111827;
  --color-cta-hover: #1F2937;
  --color-link: #0069FF;

  --color-success: #22C55E;
  --color-success-bg: #F0FDF4;
  --color-error: #EF4444;
  --color-warning-bg: #FEF9C3;

  --color-calendar-available: #22C55E;
  --color-calendar-today: #111827;
  --color-calendar-selected: #0069FF;
  --color-star: #FBBF24;

  /* Dark mode tokens */
  --color-bg-dark: #1C1C1E;
  --color-bg-dark-surface: #2C2C2E;
  --color-border-dark: #3A3A3C;
  --color-text-dark: #FFFFFF;
  --color-text-dark-secondary: #AEAEB2;

  /* Spacing (Tailwind ×4) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-18: 72px;
  --space-24: 96px;

  /* Layout */
  --container-max: 1140px;
  --container-padding: clamp(16px, 4vw, 48px);
  --section-padding: 96px;
  --section-padding-tablet: 72px;
  --section-padding-mobile: 56px;

  /* Calendar */
  --cal-cell-size: 36px;
  --cal-cell-radius: 6px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-widget: 0 8px 32px rgba(0, 0, 0, 0.06);
  --shadow-elevated: 0 16px 48px rgba(0, 0, 0, 0.08);

  /* Nav */
  --nav-height: 56px;
  --nav-bg: #FFFFFF;
  --nav-border: 1px solid #E5E7EB;

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-ultra: 100ms;
  --duration-micro: 150ms;
  --duration-standard: 300ms;
  --duration-reveal: 400ms;
}
```

---

## 11. Category Tags

`light` `clean` `open-source` `scheduling` `SaaS` `product-forward` `calendar-ui` `trustworthy` `white-space`
