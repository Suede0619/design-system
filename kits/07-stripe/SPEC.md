# Stripe Design System
**Reference:** stripe.com | Multiple Webby Awards | Developer Fintech

---

## 1. Overview

Stripe's design language is built for developer trust. Everything communicates precision, reliability, and quiet sophistication. The visual system leans on deep navy backgrounds punctuated by gradient purples, creating a premium fintech aesthetic that still feels approachable to engineers. The signature is the animated mesh gradient hero — a shifting, multi-color organic background that feels alive without being distracting.

**Design Principles:**
- Precision over decoration
- Developer-first clarity
- Gradient depth, not flat color
- Generous spacing with tight typographic control
- Code is first-class content

**Primary Use Cases:** Marketing site, developer documentation, product dashboards, pricing pages

---

## 2. Typography

### Font Families
```
Primary:    Inter (Google Fonts / local)
Monospace:  JetBrains Mono, Fira Code, or system monospace
Fallback:   -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
Mono FB:    "Courier New", Courier, monospace
```

### Font Weights
```
Regular:    400  — body text, secondary labels
Medium:     500  — nav items, input labels, secondary CTAs
SemiBold:   600  — headings H3–H5, primary CTAs, pricing numbers
Bold:       700  — H1, H2 display headings, feature stats
```

### Type Scale
```
Display:    72px / 4.5rem   — Hero headlines
H1:         56px / 3.5rem   — Page titles
H2:         40px / 2.5rem   — Section headings
H3:         28px / 1.75rem  — Sub-section headings
H4:         22px / 1.375rem — Card titles, feature names
H5:         18px / 1.125rem — Small headings
Body LG:    18px / 1.125rem — Lead paragraphs
Body:       16px / 1rem     — Default body text
Body SM:    14px / 0.875rem — Secondary text, captions
Caption:    12px / 0.75rem  — Labels, helper text, code annotations
Mono:       14px / 0.875rem — All code blocks
```

### Line Heights
```
Display / H1:   1.1  (tight, impactful)
H2 / H3:        1.2
H4 / H5:        1.3
Body LG:        1.6
Body:           1.6
Body SM:        1.5
Caption:        1.4
Code:           1.7  (readability in code blocks)
```

### Letter Spacing
```
Display:    -0.03em  (tight for large display)
H1:         -0.02em
H2:         -0.01em
H3–H5:      0em
Body:       0em
Caption:    0.01em   (slight open for small sizes)
All Caps:   0.08em   (used in labels/badges)
```

---

## 3. Color Palette

### Primary Brand
```
--color-primary:        #635BFF   — Primary brand purple, main CTAs
--color-primary-dark:   #4B45CC   — Hover state for primary buttons
--color-primary-light:  #8B85FF   — Subtle highlights, focus rings
--color-primary-pale:   #EEF0FF   — Light-mode backgrounds for primary areas
```

### Background Scale
```
--color-bg-dark:        #0A2540   — Main dark background (hero, sections)
--color-bg-darker:      #060F1E   — Deeper dark for contrast sections
--color-bg-navy:        #0D3151   — Card backgrounds on dark
--color-bg-light:       #FFFFFF   — Light sections
--color-bg-subtle:      #F6F9FC   — Off-white for light-mode alternating sections
--color-bg-muted:       #F0F4F8   — Form backgrounds, table rows
```

### Text
```
--color-text-primary:   #0A2540   — Dark text on light backgrounds
--color-text-secondary: #425466   — Secondary/muted text
--color-text-tertiary:  #8898AA   — Captions, timestamps, helper text
--color-text-inverse:   #FFFFFF   — Text on dark backgrounds
--color-text-inverse-2: rgba(255,255,255,0.75)  — Secondary on dark
--color-text-inverse-3: rgba(255,255,255,0.45)  — Tertiary on dark
```

### Gradient System
```
--gradient-hero:        linear-gradient(135deg, #635BFF 0%, #0A2540 40%, #00A3FF 100%)
--gradient-brand:       linear-gradient(135deg, #635BFF 0%, #8B45FF 50%, #00BFFF 100%)
--gradient-text:        linear-gradient(90deg, #635BFF, #00BFFF)
--gradient-card:        linear-gradient(135deg, rgba(99,91,255,0.15), rgba(0,163,255,0.05))
--gradient-mesh-1:      radial-gradient(ellipse at 20% 50%, #635BFF33 0%, transparent 60%)
--gradient-mesh-2:      radial-gradient(ellipse at 80% 20%, #00A3FF22 0%, transparent 60%)
--gradient-mesh-3:      radial-gradient(ellipse at 50% 80%, #8B45FF22 0%, transparent 60%)
```

### Status / Semantic
```
--color-success:        #00D924   — Success states
--color-success-bg:     #E8FFF0   — Success backgrounds
--color-warning:        #FF9B00   — Warning states
--color-warning-bg:     #FFF8E7   — Warning backgrounds
--color-error:          #FF3B30   — Error states
--color-error-bg:       #FFF0EF   — Error backgrounds
--color-info:           #0070F3   — Info states
```

### Border
```
--color-border:         #E0E7EF   — Default borders (light mode)
--color-border-dark:    rgba(255,255,255,0.12)  — Borders on dark bg
--color-border-focus:   #635BFF   — Focus ring color
```

---

## 4. Layout System

### Container
```
--container-max:        1200px
--container-narrow:     960px    — For doc content, blog posts
--container-wide:       1400px   — Full-bleed marketing sections
--container-padding:    24px     — Side padding on mobile
--container-padding-md: 40px     — Side padding on tablet
--container-padding-lg: 80px     — Side padding on desktop
```

### Grid
```
Columns:        12-column grid
Gap:            24px (desktop), 16px (mobile)
Breakpoints:
  --bp-sm:      480px
  --bp-md:      768px
  --bp-lg:      1024px
  --bp-xl:      1200px
  --bp-2xl:     1400px
```

### Spacing Scale (8px base, 4-unit grid)
```
--space-1:    4px    (0.25rem)
--space-2:    8px    (0.5rem)
--space-3:    12px   (0.75rem)
--space-4:    16px   (1rem)
--space-5:    20px   (1.25rem)
--space-6:    24px   (1.5rem)
--space-8:    32px   (2rem)
--space-10:   40px   (2.5rem)
--space-12:   48px   (3rem)
--space-16:   64px   (4rem)
--space-20:   80px   (5rem)
--space-24:   96px   (6rem)
--space-32:   128px  (8rem)
```

### Section Padding
```
Hero section:       120px top, 100px bottom
Feature sections:   80px vertical
Compact sections:   48px vertical
Card grid gaps:     32px
```

---

## 5. Navigation

### Sticky Frosted Nav
```css
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  height: 64px;
}
```

### Nav Specs
```
Height:           64px
Logo area:        160px wide
Nav item spacing: 32px gap between items
Nav font:         14px, weight 500, color #425466
Nav hover:        color #0A2540, transition 150ms
CTA button:       Purple primary (see Buttons)
Mobile:           Hamburger at 768px breakpoint
```

### Dark Nav Variant (for hero sections)
```css
.nav--dark {
  background: rgba(10, 37, 64, 0.85);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.nav--dark .nav-item { color: rgba(255,255,255,0.75); }
.nav--dark .nav-item:hover { color: #FFFFFF; }
```

---

## 6. Buttons

### Primary Button
```css
.btn-primary {
  background: #635BFF;
  color: #FFFFFF;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 200ms ease, transform 100ms ease, box-shadow 200ms ease;
  box-shadow: 0 4px 12px rgba(99, 91, 255, 0.35);
}
.btn-primary:hover {
  background: #4B45CC;
  box-shadow: 0 6px 20px rgba(99, 91, 255, 0.45);
  transform: translateY(-1px);
}
.btn-primary:active {
  background: #3D38A8;
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(99, 91, 255, 0.3);
}
```

### Secondary Button
```css
.btn-secondary {
  background: #FFFFFF;
  color: #0A2540;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  border: 1.5px solid #E0E7EF;
  cursor: pointer;
  transition: border-color 200ms, background 200ms, box-shadow 200ms;
}
.btn-secondary:hover {
  border-color: #635BFF;
  color: #635BFF;
  box-shadow: 0 2px 8px rgba(99, 91, 255, 0.15);
}
```

### Ghost Button (dark bg)
```css
.btn-ghost {
  background: transparent;
  color: rgba(255,255,255,0.85);
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  border: 1.5px solid rgba(255,255,255,0.25);
  cursor: pointer;
  transition: background 200ms, border-color 200ms, color 200ms;
}
.btn-ghost:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.5);
  color: #FFFFFF;
}
```

### Button Sizes
```
Large:   padding 14px 28px, font-size 16px
Default: padding 12px 20px, font-size 15px
Small:   padding 8px 16px, font-size 13px, border-radius 6px
```

---

## 7. Cards & Containers

### Glass Card (dark backgrounds)
```css
.card-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 32px;
  transition: background 300ms, border-color 300ms, transform 300ms;
}
.card-glass:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 91, 255, 0.4);
  transform: translateY(-2px);
}
```

### Feature Card (light backgrounds)
```css
.card-feature {
  background: #FFFFFF;
  border: 1px solid #E0E7EF;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(10, 37, 64, 0.06);
  transition: box-shadow 300ms, transform 300ms;
}
.card-feature:hover {
  box-shadow: 0 8px 32px rgba(10, 37, 64, 0.12);
  transform: translateY(-2px);
}
```

### Code Block Container
```css
.code-block {
  background: #0D1117;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 24px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 13px;
  line-height: 1.7;
  overflow-x: auto;
  position: relative;
}
.code-block::before {
  content: '';
  display: block;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: #FF5F56;
  box-shadow: 20px 0 0 #FFBD2E, 40px 0 0 #27C93F;
  margin-bottom: 16px;
}
```

### Two-Column Feature Layout
```css
.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
@media (max-width: 768px) {
  .feature-grid { grid-template-columns: 1fr; gap: 48px; }
}
```

---

## 8. Forms & Inputs

```css
.input {
  background: #FFFFFF;
  border: 1.5px solid #E0E7EF;
  border-radius: 8px;
  padding: 11px 16px;
  font-size: 15px;
  font-family: Inter, sans-serif;
  color: #0A2540;
  width: 100%;
  transition: border-color 200ms, box-shadow 200ms;
  outline: none;
}
.input::placeholder { color: #8898AA; }
.input:focus {
  border-color: #635BFF;
  box-shadow: 0 0 0 3px rgba(99, 91, 255, 0.2);
}
.input:invalid { border-color: #FF3B30; }

.input-label {
  font-size: 13px;
  font-weight: 500;
  color: #425466;
  margin-bottom: 6px;
  display: block;
  letter-spacing: 0.01em;
}
.input-helper {
  font-size: 12px;
  color: #8898AA;
  margin-top: 4px;
}
```

### Select
```css
.select {
  appearance: none;
  background: #FFFFFF url("data:image/svg+xml,...") no-repeat right 12px center;
  background-size: 12px;
  padding-right: 36px;
  /* same base styles as .input */
}
```

---

## 9. Images & Media

```
Product screenshots:   Drop shadow: 0 32px 80px rgba(10,37,64,0.18)
                       Border-radius: 12px
                       Border: 1px solid rgba(10,37,64,0.08)
                       Scale: Full container width in feature sections

Hero graphics:         Animated mesh gradient background (see Animation)
                       SVG illustrations with purple/blue palette
                       PNG/WebP with transparency over gradient backgrounds

Code screenshots:      Dark terminal aesthetic, macOS chrome optional
                       Same shadow treatment as product screenshots
                       Max-width: 680px centered

Logos/Integrations:    Grayscale by default, color on hover
                       Grid of 4–6 per row, 40px height, auto width
                       Filter: grayscale(100%); opacity: 0.6;
                       Hover: filter: none; opacity: 1;
```

---

## 10. Animation & Motion

### Principles
- Motion serves communication, not decoration
- Fast micro-interactions (100–200ms)
- Slow reveals for marketing sections (400–600ms)
- Never block content with animation

### Easing Functions
```css
--ease-standard:    cubic-bezier(0.4, 0, 0.2, 1)   /* Material standard */
--ease-enter:       cubic-bezier(0, 0, 0.2, 1)      /* Elements entering */
--ease-exit:        cubic-bezier(0.4, 0, 1, 1)      /* Elements leaving */
--ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1) /* Springy, for cards */
```

### Duration Scale
```
--dur-fast:         100ms   — Click feedback, button states
--dur-base:         200ms   — Hover transitions
--dur-slow:         350ms   — Panel opens, card reveals
--dur-page:         500ms   — Page transitions, hero reveals
```

### Animated Mesh Gradient Hero
```css
@keyframes mesh-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.hero-mesh {
  background: 
    radial-gradient(ellipse at 20% 50%, #635BFF33 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, #00A3FF22 0%, transparent 60%),
    radial-gradient(ellipse at 50% 80%, #8B45FF22 0%, transparent 60%),
    #0A2540;
  background-size: 400% 400%;
  animation: mesh-shift 12s ease infinite;
}
```

### Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 500ms ease, transform 500ms ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Stagger children with --delay CSS var */
```

---

## 11. Icons & Decorative Elements

```
Icon Library:     Custom SVG set or Heroicons (outline style)
Icon Sizes:       16px (inline), 20px (UI), 24px (feature), 32px (section)
Icon Color:       Inherits text color; accent icons use #635BFF
Stroke Width:     1.5px for outline icons

Decorative:
  - Gradient orbs behind hero sections (blurred radial gradients)
  - Dot grid patterns at section transitions (SVG background-image)
  - Subtle noise texture on dark sections (SVG feTurbulence, opacity 0.03)
  - Purple gradient line separators (1px, linear-gradient)
  - Abstract geometric shapes in feature section backgrounds
```

### Badge / Pill
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.badge-primary { background: #EEF0FF; color: #635BFF; }
.badge-dark { background: rgba(99,91,255,0.2); color: #8B85FF; }
```

---

## 12. Unique Signature

**The Animated Mesh Gradient Hero**

Stripe's singular visual fingerprint is its hero section: a dark navy canvas (#0A2540) layered with multiple animated radial gradients in purple and cyan. The gradients shift slowly (12s cycle), creating an organic, almost biological sense of depth. It reads as "alive" without being distracting. This effect is achieved through CSS keyframe animation on background-position with multiple gradient layers — no JavaScript required for the basic version.

The accompanying visual language of glass-effect cards floating above this gradient, combined with pixel-perfect code blocks, sends a single message: *this is what premium developer infrastructure looks like.*

No other fintech site does this with the same precision. When you see a slowly-breathing purple-navy gradient with Inter type, you know it's Stripe.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Brand Colors */
  --color-primary:           #635BFF;
  --color-primary-dark:      #4B45CC;
  --color-primary-light:     #8B85FF;
  --color-primary-pale:      #EEF0FF;

  /* Backgrounds */
  --color-bg-dark:           #0A2540;
  --color-bg-darker:         #060F1E;
  --color-bg-navy:           #0D3151;
  --color-bg-light:          #FFFFFF;
  --color-bg-subtle:         #F6F9FC;
  --color-bg-muted:          #F0F4F8;

  /* Text */
  --color-text-primary:      #0A2540;
  --color-text-secondary:    #425466;
  --color-text-tertiary:     #8898AA;
  --color-text-inverse:      #FFFFFF;
  --color-text-inverse-2:    rgba(255,255,255,0.75);
  --color-text-inverse-3:    rgba(255,255,255,0.45);

  /* Borders */
  --color-border:            #E0E7EF;
  --color-border-dark:       rgba(255,255,255,0.12);
  --color-border-focus:      #635BFF;

  /* Status */
  --color-success:           #00D924;
  --color-success-bg:        #E8FFF0;
  --color-warning:           #FF9B00;
  --color-warning-bg:        #FFF8E7;
  --color-error:             #FF3B30;
  --color-error-bg:          #FFF0EF;

  /* Typography */
  --font-sans:               Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono:               "JetBrains Mono", "Fira Code", "Courier New", monospace;

  --text-display:            4.5rem;    /* 72px */
  --text-h1:                 3.5rem;    /* 56px */
  --text-h2:                 2.5rem;    /* 40px */
  --text-h3:                 1.75rem;   /* 28px */
  --text-h4:                 1.375rem;  /* 22px */
  --text-h5:                 1.125rem;  /* 18px */
  --text-body-lg:            1.125rem;  /* 18px */
  --text-body:               1rem;      /* 16px */
  --text-body-sm:            0.875rem;  /* 14px */
  --text-caption:            0.75rem;   /* 12px */
  --text-mono:               0.875rem;  /* 14px */

  --leading-tight:           1.1;
  --leading-snug:            1.2;
  --leading-normal:          1.6;
  --leading-relaxed:         1.7;

  --tracking-tight:          -0.03em;
  --tracking-snug:           -0.02em;
  --tracking-normal:         0em;
  --tracking-wide:           0.04em;
  --tracking-wider:          0.08em;

  /* Spacing */
  --space-1:                 0.25rem;   /* 4px */
  --space-2:                 0.5rem;    /* 8px */
  --space-3:                 0.75rem;   /* 12px */
  --space-4:                 1rem;      /* 16px */
  --space-5:                 1.25rem;   /* 20px */
  --space-6:                 1.5rem;    /* 24px */
  --space-8:                 2rem;      /* 32px */
  --space-10:                2.5rem;    /* 40px */
  --space-12:                3rem;      /* 48px */
  --space-16:                4rem;      /* 64px */
  --space-20:                5rem;      /* 80px */
  --space-24:                6rem;      /* 96px */
  --space-32:                8rem;      /* 128px */

  /* Layout */
  --container-max:           1200px;
  --container-narrow:        960px;
  --container-wide:          1400px;
  --container-padding:       1.5rem;

  /* Borders */
  --radius-sm:               4px;
  --radius-md:               8px;
  --radius-lg:               12px;
  --radius-xl:               16px;
  --radius-full:             9999px;

  /* Shadows */
  --shadow-sm:               0 1px 4px rgba(10,37,64,0.06);
  --shadow-md:               0 2px 12px rgba(10,37,64,0.08);
  --shadow-lg:               0 8px 32px rgba(10,37,64,0.12);
  --shadow-xl:               0 32px 80px rgba(10,37,64,0.18);
  --shadow-primary:          0 4px 12px rgba(99,91,255,0.35);

  /* Animation */
  --ease-standard:           cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter:              cubic-bezier(0, 0, 0.2, 1);
  --ease-exit:               cubic-bezier(0.4, 0, 1, 1);
  --ease-spring:             cubic-bezier(0.34, 1.56, 0.64, 1);

  --dur-fast:                100ms;
  --dur-base:                200ms;
  --dur-slow:                350ms;
  --dur-page:                500ms;

  /* Navigation */
  --nav-height:              64px;
  --nav-bg:                  rgba(255,255,255,0.85);
  --nav-bg-dark:             rgba(10,37,64,0.85);
  --nav-blur:                blur(20px) saturate(180%);

  /* Gradients */
  --gradient-hero:           linear-gradient(135deg, #635BFF 0%, #0A2540 40%, #00A3FF 100%);
  --gradient-brand:          linear-gradient(135deg, #635BFF 0%, #8B45FF 50%, #00BFFF 100%);
  --gradient-text:           linear-gradient(90deg, #635BFF, #00BFFF);

  /* Z-Index Scale */
  --z-below:                 -1;
  --z-base:                  0;
  --z-raised:                10;
  --z-overlay:               50;
  --z-nav:                   100;
  --z-modal:                 200;
  --z-toast:                 300;
}
```
