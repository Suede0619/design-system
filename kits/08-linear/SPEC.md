# Linear Design System
**Reference:** linear.app | Awwwards Honoree | Ultra-Refined Dark SaaS

---

## 1. Overview

Linear is the gold standard for dark SaaS design. Every pixel earns its place. The system is built on extreme restraint — near-black backgrounds, gossamer glass cards, and gradient-text accents that provide just enough visual interest without cluttering the interface. The design feels engineered rather than decorated.

Linear's visual language communicates: *this product was built by people who care obsessively about craft.* The keyboard-shortcut visual elements (⌘K, J/K navigation) are not just UI — they're identity signals to the power-user audience.

**Design Principles:**
- Maximum signal, minimum noise
- Dark-first: light mode is an afterthought
- Typography as primary visual element
- Glass morphism done with discipline (not excess)
- Keyboard-native interaction patterns made visible

**Primary Use Cases:** SaaS product marketing, feature showcases, pricing pages, changelog

---

## 2. Typography

### Font Families
```
Primary:    Inter (variable font preferred: Inter var)
Fallback:   -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif
Mono:       "Berkeley Mono", "JetBrains Mono", "SF Mono", monospace
```

### Font Weights
```
Regular:    400  — body text, descriptions, secondary labels
Medium:     500  — nav items, card labels, subtle emphasis
SemiBold:   600  — CTAs, feature titles, pricing
Bold:       700  — H1, H2, major headings only
```

### Type Scale
```
Display:    64px / 4rem     — Hero headline (gradient text treatment)
H1:         48px / 3rem     — Page headings
H2:         36px / 2.25rem  — Section headings
H3:         24px / 1.5rem   — Card headings, feature names
H4:         20px / 1.25rem  — Sub-headings, table headers
H5:         16px / 1rem     — Small section labels
Body LG:    18px / 1.125rem — Lead copy
Body:       15px / 0.9375rem— Default body (slightly smaller than 16px)
Body SM:    13px / 0.8125rem— Secondary info, meta
Caption:    11px / 0.6875rem— Labels, timestamps, kbd hints
Mono:       13px / 0.8125rem— Code, keyboard shortcuts
```

### Line Heights
```
Display:    1.05  (very tight — relies on gradient fill for visual comfort)
H1:         1.1
H2:         1.15
H3:         1.25
H4 / H5:    1.35
Body LG:    1.65
Body:       1.6
Body SM:    1.5
Caption:    1.4
Mono:       1.6
```

### Letter Spacing
```
Display:    -0.04em   (maximally tight for gradient headline impact)
H1:         -0.03em
H2:         -0.02em
H3:         -0.01em
Body:       -0.01em   (Linear uses slightly tight body text)
Caption:    0em
Mono:       0em
All-caps labels: 0.08em
```

---

## 3. Color Palette

### Background Scale
```
--color-bg-base:         #0A0A0A   — Primary background (near-black, not pure black)
--color-bg-elevated:     #111111   — Slightly elevated surfaces
--color-bg-overlay:      #161616   — Cards, modals floating over base
--color-bg-subtle:       #1A1A1A   — Table rows, hover states
--color-bg-muted:        #222222   — Borders, dividers materialized as fills
--color-bg-inverse:      #F5F5F5   — For rare light sections
```

### Brand Gradient (Text & Accents)
```
--color-brand-start:     #7C5CFC   — Gradient start (rich purple)
--color-brand-end:       #4EA8DE   — Gradient end (cool blue)
--color-brand-mid:       #5E85FA   — Midpoint for 3-stop gradients
--gradient-brand:        linear-gradient(135deg, #7C5CFC 0%, #5E85FA 50%, #4EA8DE 100%)
--gradient-brand-text:   linear-gradient(90deg, #7C5CFC 0%, #4EA8DE 100%)
```

### Text Colors
```
--color-text-primary:    #F5F5F5   — Primary text (near-white, not glaring)
--color-text-secondary:  rgba(245,245,245,0.65)  — Secondary/muted text
--color-text-tertiary:   rgba(245,245,245,0.40)  — Timestamps, helper text
--color-text-disabled:   rgba(245,245,245,0.25)  — Disabled states
--color-text-placeholder:rgba(245,245,245,0.30)  — Input placeholders
```

### Accent Colors
```
--color-accent-purple:   #7C5CFC   — Primary accent
--color-accent-blue:     #4EA8DE   — Secondary accent
--color-accent-purple-bg:rgba(124,92,252,0.1)   — Subtle purple fill
--color-accent-blue-bg:  rgba(78,168,222,0.1)   — Subtle blue fill
```

### Status / Semantic
```
--color-success:         #3DD68C   — Green, muted for dark bg
--color-success-bg:      rgba(61,214,140,0.1)
--color-warning:         #F5A524   — Amber
--color-warning-bg:      rgba(245,165,36,0.1)
--color-error:           #F56565   — Red, softened
--color-error-bg:        rgba(245,101,101,0.1)
```

### Border Scale
```
--color-border-subtle:   rgba(255,255,255,0.04)  — Barely-there borders
--color-border-default:  rgba(255,255,255,0.08)  — Default card borders
--color-border-strong:   rgba(255,255,255,0.16)  — Emphasized borders
--color-border-focus:    rgba(124,92,252,0.6)    — Focus rings
```

---

## 4. Layout System

### Container
```
--container-max:         1100px   — Narrower than most; creates density
--container-narrow:      720px    — Article / changelog content
--container-wide:        1300px   — Full-width feature grids
--container-padding:     20px     — Mobile side padding
--container-padding-md:  32px     — Tablet
--container-padding-lg:  48px     — Desktop
```

### Grid
```
Columns:    12-column
Gap:        24px desktop, 16px mobile
Feature:    Typically 2-column (text + visual) at 50/50 or 45/55
Breakpoints:
  --bp-sm:  480px
  --bp-md:  768px
  --bp-lg:  1024px
  --bp-xl:  1100px
```

### Spacing Scale (8px base)
```
--space-1:   4px   (0.25rem)
--space-2:   8px   (0.5rem)
--space-3:   12px  (0.75rem)
--space-4:   16px  (1rem)
--space-5:   20px  (1.25rem)
--space-6:   24px  (1.5rem)
--space-8:   32px  (2rem)
--space-10:  40px  (2.5rem)
--space-12:  48px  (3rem)
--space-16:  64px  (4rem)
--space-20:  80px  (5rem)
--space-24:  96px  (6rem)
```

### Section Rhythm
```
Hero:           100px top, 80px bottom
Feature rows:   72px vertical
Compact:        48px vertical
Inter-card gap: 16px
Intra-card pad: 24px
```

---

## 5. Navigation

### Transparent Sticky Nav
```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 56px;
  background: rgba(10, 10, 10, 0.80);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
}
```

### Nav Specs
```
Height:           56px (slightly shorter than Stripe, more refined)
Logo:             Linear wordmark, white, 100px wide
Nav links:        font-size 14px, weight 500, color rgba(245,245,245,0.65)
Nav link hover:   color rgba(245,245,245,1), transition 150ms ease
CTA:              Ghost button with gradient border effect
Gap between items:28px
Active indicator: Bottom border 1px #7C5CFC (or gradient)
Dropdown:         Glass panel, border rgba(255,255,255,0.08), radius 8px
```

### Gradient Border CTA in Nav
```css
.nav-cta {
  position: relative;
  padding: 7px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #F5F5F5;
  background: transparent;
  border-radius: 6px;
  border: 1px solid rgba(124, 92, 252, 0.5);
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease;
}
.nav-cta:hover {
  background: rgba(124, 92, 252, 0.12);
  border-color: rgba(124, 92, 252, 0.8);
}
```

---

## 6. Buttons

### Primary Button
```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #7C5CFC 0%, #4EA8DE 100%);
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 200ms ease, transform 150ms ease;
  box-shadow: 0 0 20px rgba(124, 92, 252, 0.3);
}
.btn-primary:hover {
  opacity: 0.88;
  transform: translateY(-1px);
  box-shadow: 0 4px 24px rgba(124, 92, 252, 0.45);
}
.btn-primary:active {
  transform: translateY(0);
  opacity: 0.95;
}
```

### Secondary / Ghost Button
```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: transparent;
  color: rgba(245, 245, 245, 0.8);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  cursor: pointer;
  transition: background 200ms ease, border-color 200ms ease, color 200ms ease;
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.24);
  color: #F5F5F5;
}
```

### Subtle Button (lowest emphasis)
```css
.btn-subtle {
  padding: 8px 14px;
  background: rgba(255,255,255,0.04);
  color: rgba(245,245,245,0.65);
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 150ms ease, color 150ms ease;
}
.btn-subtle:hover {
  background: rgba(255,255,255,0.08);
  color: #F5F5F5;
}
```

### Button Sizes
```
Large:    padding 12px 24px, font-size 15px, border-radius 8px
Default:  padding 10px 20px, font-size 14px, border-radius 6px
Small:    padding 6px 12px,  font-size 12px, border-radius 5px
```

---

## 7. Cards & Containers

### Glass Morphism Card
```css
.card-glass {
  background: rgba(255, 255, 255, 0.04);   /* 4% white — barely visible tint */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 24px;
  transition: background 200ms ease, border-color 200ms ease;
}
.card-glass:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}
```

### Feature Card (with gradient accent border)
```css
.card-feature {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 32px;
  position: relative;
  overflow: hidden;
}
.card-feature::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(124,92,252,0.08) 0%, transparent 60%);
  pointer-events: none;
}
```

### Keyboard Shortcut Chip
```css
.kbd {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom-width: 2px;
  border-radius: 4px;
  font-family: "Berkeley Mono", "JetBrains Mono", monospace;
  font-size: 11px;
  color: rgba(245, 245, 245, 0.65);
  letter-spacing: 0.02em;
}
```

---

## 8. Forms & Inputs

```css
.input {
  width: 100%;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: #F5F5F5;
  outline: none;
  transition: border-color 200ms ease, background 200ms ease, box-shadow 200ms ease;
}
.input::placeholder {
  color: rgba(245, 245, 245, 0.3);
}
.input:focus {
  border-color: rgba(124, 92, 252, 0.6);
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 0 0 3px rgba(124, 92, 252, 0.15);
}
.input:hover:not(:focus) {
  border-color: rgba(255, 255, 255, 0.18);
}

.input-label {
  display: block;
  font-size: 12px;
  font-weight: 500;
  color: rgba(245, 245, 245, 0.55);
  margin-bottom: 6px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
```

### Command Palette (signature UI element)
```css
.command-palette {
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  box-shadow: 0 32px 80px rgba(0,0,0,0.6);
  width: 560px;
  max-height: 400px;
  overflow-y: auto;
}
```

---

## 9. Images & Media

```
Product UI Screenshots:
  - Always shown in dark mode UI
  - Float above gradient backgrounds
  - No border, no round corners on the screenshot itself
  - Shadow: 0 24px 64px rgba(0,0,0,0.5)
  - Often tilted slightly (transform: rotate(-2deg) or perspective transform)

App Window Mockups:
  - macOS window chrome (dark variant)
  - Border: 1px solid rgba(255,255,255,0.1)
  - Border-radius: 10px (matches macOS)
  - Drop shadow: 0 40px 100px rgba(0,0,0,0.7)

Hero Section Visual:
  - Gradient blur circles (orbs) as background elements
  - Animated via keyframes, 8–15s cycle
  - Purple and blue, opacity 0.15–0.25
  - Absolutely positioned, pointer-events: none

Video:
  - Autoplay, muted, loop for product demos
  - Fallback to static screenshot
  - Max-width: 100%, border-radius: 8px
```

---

## 10. Animation & Motion

### Philosophy
Linear uses animation sparingly. When it appears, it's precise and purposeful. No bounce, no playfulness — everything is controlled deceleration or constant-rate transitions.

### Easing
```css
--ease-out:        cubic-bezier(0, 0, 0.2, 1)      /* Standard — most UI */
--ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1)    /* Modal transitions */
--ease-linear:     linear                            /* Progress bars */
/* NO spring or bounce easing — not in Linear's vocabulary */
```

### Duration
```
--dur-instant:     100ms   — Immediate feedback (clicks)
--dur-fast:        200ms   — All hover states (standard)
--dur-base:        300ms   — Panel opens, tooltips
--dur-slow:        400ms   — Page transitions, modals
```

### Gradient Orb Animation
```css
@keyframes orb-float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
}
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orb-float 12s ease-in-out infinite;
  pointer-events: none;
}
.orb-purple {
  width: 400px; height: 400px;
  background: rgba(124, 92, 252, 0.2);
}
.orb-blue {
  width: 300px; height: 300px;
  background: rgba(78, 168, 222, 0.15);
  animation-delay: -4s;
}
```

### Scroll Reveal
```css
.fade-up {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms var(--ease-out), transform 400ms var(--ease-out);
}
.fade-up.in-view { opacity: 1; transform: translateY(0); }
```

---

## 11. Icons & Decorative Elements

```
Icon Style:    Custom Linear icons — geometric, minimal, 1.5px stroke
               Very few filled icons; almost entirely outline
Icon Sizes:    14px (inline text), 16px (UI), 20px (feature), 24px (section lead)
Icon Color:    rgba(245,245,245,0.6) default; white on hover; purple for active/accent

Keyboard Shortcuts: Visual language throughout — ⌘K, ⌘+, J/K arrows
                    Always in <kbd> styled chips (see Cards section)
                    Used in nav, sidebars, feature callouts, tooltips

Status Dots:   8px circles, colors from status semantic palette
               Used in issue list, project health indicators

Avatar:        32px circle, gradient border 1px rgba(124,92,252,0.5)

Decorative:
  - SVG mesh/grid patterns at very low opacity (0.03) for texture
  - Gradient line dividers (1px, brand gradient, opacity 0.3)
  - Corner accents on cards (thin L-shapes in gradient color)
```

---

## 12. Unique Signature

**Gradient Text Headlines + Keyboard Shortcut Culture**

Linear's singular identity is the combination of gradient-filled headlines and pervasive keyboard shortcut visual language. The `linear-gradient(90deg, #7C5CFC, #4EA8DE)` applied to `background-clip: text` on large headings is the most immediately recognizable element — a purple-to-blue sweep that says "powerful, modern, opinionated."

Equally critical: the `<kbd>` chips scattered throughout the UI (⌘K for command palette, etc.) aren't just documentation — they're a declaration of philosophy. This product is for keyboard-first users who consider mouse-dependence a performance bug.

Together, these two elements create a consistent message: *Linear was engineered for people who optimize everything, including how they use software.*

```css
/* The gradient text treatment — copy this exactly */
.gradient-headline {
  background: linear-gradient(90deg, #7C5CFC 0%, #4EA8DE 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Backgrounds */
  --color-bg-base:           #0A0A0A;
  --color-bg-elevated:       #111111;
  --color-bg-overlay:        #161616;
  --color-bg-subtle:         #1A1A1A;
  --color-bg-muted:          #222222;
  --color-bg-inverse:        #F5F5F5;

  /* Brand */
  --color-brand-start:       #7C5CFC;
  --color-brand-end:         #4EA8DE;
  --color-brand-mid:         #5E85FA;
  --gradient-brand:          linear-gradient(135deg, #7C5CFC 0%, #5E85FA 50%, #4EA8DE 100%);
  --gradient-brand-text:     linear-gradient(90deg, #7C5CFC 0%, #4EA8DE 100%);

  /* Text */
  --color-text-primary:      #F5F5F5;
  --color-text-secondary:    rgba(245,245,245,0.65);
  --color-text-tertiary:     rgba(245,245,245,0.40);
  --color-text-disabled:     rgba(245,245,245,0.25);
  --color-text-placeholder:  rgba(245,245,245,0.30);

  /* Accents */
  --color-accent-purple:     #7C5CFC;
  --color-accent-blue:       #4EA8DE;
  --color-accent-purple-bg:  rgba(124,92,252,0.10);
  --color-accent-blue-bg:    rgba(78,168,222,0.10);

  /* Status */
  --color-success:           #3DD68C;
  --color-success-bg:        rgba(61,214,140,0.10);
  --color-warning:           #F5A524;
  --color-warning-bg:        rgba(245,165,36,0.10);
  --color-error:             #F56565;
  --color-error-bg:          rgba(245,101,101,0.10);

  /* Borders */
  --color-border-subtle:     rgba(255,255,255,0.04);
  --color-border-default:    rgba(255,255,255,0.08);
  --color-border-strong:     rgba(255,255,255,0.16);
  --color-border-focus:      rgba(124,92,252,0.60);

  /* Typography */
  --font-sans:               Inter, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-mono:               "Berkeley Mono", "JetBrains Mono", "SF Mono", monospace;

  --text-display:            4rem;       /* 64px */
  --text-h1:                 3rem;       /* 48px */
  --text-h2:                 2.25rem;    /* 36px */
  --text-h3:                 1.5rem;     /* 24px */
  --text-h4:                 1.25rem;    /* 20px */
  --text-body-lg:            1.125rem;   /* 18px */
  --text-body:               0.9375rem;  /* 15px */
  --text-body-sm:            0.8125rem;  /* 13px */
  --text-caption:            0.6875rem;  /* 11px */
  --text-mono:               0.8125rem;  /* 13px */

  --leading-tight:           1.05;
  --leading-snug:            1.15;
  --leading-normal:          1.6;
  --leading-code:            1.6;

  --tracking-display:        -0.04em;
  --tracking-heading:        -0.02em;
  --tracking-body:           -0.01em;
  --tracking-label:          0.08em;

  /* Spacing */
  --space-1:                 0.25rem;
  --space-2:                 0.5rem;
  --space-3:                 0.75rem;
  --space-4:                 1rem;
  --space-5:                 1.25rem;
  --space-6:                 1.5rem;
  --space-8:                 2rem;
  --space-10:                2.5rem;
  --space-12:                3rem;
  --space-16:                4rem;
  --space-20:                5rem;
  --space-24:                6rem;

  /* Layout */
  --container-max:           1100px;
  --container-narrow:        720px;
  --container-wide:          1300px;
  --container-padding:       1.25rem;

  /* Radii */
  --radius-sm:               4px;
  --radius-md:               6px;
  --radius-lg:               8px;
  --radius-xl:               12px;
  --radius-2xl:              16px;
  --radius-full:             9999px;

  /* Shadows */
  --shadow-sm:               0 1px 4px rgba(0,0,0,0.3);
  --shadow-md:               0 4px 16px rgba(0,0,0,0.4);
  --shadow-lg:               0 12px 40px rgba(0,0,0,0.5);
  --shadow-xl:               0 32px 80px rgba(0,0,0,0.6);
  --shadow-glow-purple:      0 0 20px rgba(124,92,252,0.3);

  /* Animation */
  --ease-out:                cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:             cubic-bezier(0.4, 0, 0.2, 1);
  --ease-linear:             linear;

  --dur-instant:             100ms;
  --dur-fast:                200ms;
  --dur-base:                300ms;
  --dur-slow:                400ms;

  /* Navigation */
  --nav-height:              56px;
  --nav-bg:                  rgba(10,10,10,0.80);
  --nav-blur:                blur(16px) saturate(160%);

  /* Z-Index */
  --z-base:                  0;
  --z-raised:                10;
  --z-overlay:               50;
  --z-nav:                   100;
  --z-modal:                 200;
  --z-toast:                 300;
}
```
