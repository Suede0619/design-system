# ComPsych Brand Hub — Design System
**Source:** compsych.com | **Award:** CSSDA Site of the Day #9, 2025
**Category:** Corporate Wellness / HR Benefits Platform
**Archetype:** Documentation Sidebar Layout — Warm, Accessible, Illustration-Forward

---

## 1. Overview

ComPsych's Brand Hub is the gold standard for accessible corporate wellness design. The aesthetic is warm, approachable, and deliberately non-clinical — built to reduce anxiety around mental health topics in a workplace context. Every design decision prioritizes accessibility (WCAG 2.1 AA, trending toward AAA), with 4.5:1 minimum contrast ratios enforced across all text/background combinations.

**Design Philosophy:**
- Rounded everything: no sharp corners, no hard edges, nothing that feels institutional
- Illustration-forward: flat vector people in warm, diverse representations replace photography whenever possible
- Documentation-first layout: persistent sidebar navigation, main content column, clean hierarchy
- Color-coded content types using the warm teal/coral/cream palette
- The space should feel like a trusted colleague's office, not a hospital waiting room

**Target User:** HR administrators, benefits coordinators, employees seeking mental health resources. Assumes desktop-first with mobile breakpoints.

**Layout Pattern:** Two-column with fixed sidebar (260px) + fluid main content. Max container 1280px.

---

## 2. Typography

### Font Families
```
Primary: "DM Sans", sans-serif
  — Used for all body text, headings, UI labels, navigation
  — Google Fonts import: https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap

Fallback stack: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif

Monospace (code/data): "DM Mono", monospace
  — Only for inline code snippets, API references, data tables
```

### Font Weights
```
Regular:   400  — Body text, captions, form labels
Medium:    500  — Navigation items, button text, secondary headings
SemiBold:  600  — H3–H5, card titles, sidebar section headers
Bold:      700  — H1–H2, hero headlines, critical CTAs
```

### Type Scale (rem-based, 1rem = 16px)
```
Display XL:  3rem   / 48px  — Hero headlines (weight: 700, line-height: 1.1, letter-spacing: -0.02em)
Display L:   2.5rem / 40px  — Section headlines (weight: 700, line-height: 1.15, letter-spacing: -0.015em)
H1:          2rem   / 32px  — Page titles (weight: 700, line-height: 1.2, letter-spacing: -0.01em)
H2:          1.75rem/ 28px  — Major section headers (weight: 700, line-height: 1.25, letter-spacing: -0.01em)
H3:          1.5rem / 24px  — Subsection headers (weight: 600, line-height: 1.3, letter-spacing: -0.005em)
H4:          1.25rem/ 20px  — Card titles, sidebar headers (weight: 600, line-height: 1.35)
H5:          1.125rem/18px  — Minor headers (weight: 600, line-height: 1.4)
H6:          1rem   / 16px  — Label-style headers (weight: 600, line-height: 1.5, letter-spacing: 0.05em, text-transform: uppercase)
Body L:      1.125rem/18px  — Intro paragraphs, featured text (weight: 400, line-height: 1.7)
Body:        1rem   / 16px  — Standard body text (weight: 400, line-height: 1.6) ← MINIMUM
Body S:      0.9375rem/15px — Captions, helper text (weight: 400, line-height: 1.55) ← DO NOT GO LOWER
Caption:     0.875rem/14px  — Legal text, footnotes only (weight: 400, line-height: 1.5) ← Accessibility limit
```

### Accessibility Rules
- **Never use font-size below 14px (0.875rem)** in any context
- Body text minimum: 16px (1rem) for all primary content
- Line-height minimum: 1.5 for body text, 1.1 for display sizes
- Paragraph max-width: 70ch (approximately 680px) for optimal readability
- Avoid justified text; always use left-aligned for body

---

## 3. Color Palette

### Primary Palette
```
Warm Teal:    #0A8A8A  — Primary brand color, CTAs, links, active states
              HSL: 180°, 88%, 29%
              Usage: Primary buttons, sidebar active indicator, icons, links
              Contrast on white: 4.6:1 ✓ WCAG AA

Coral:        #E86C5A  — Secondary accent, highlights, warm CTAs
              HSL: 7°, 75%, 64%
              Usage: Secondary CTAs, alert callouts, illustration accents, tags
              Contrast on white: 3.2:1 ✗ (decorative only, never for text)
              Contrast on dark navy: 5.8:1 ✓

Cream:        #FFF8F0  — Background, warm surface
              HSL: 30°, 100%, 97%
              Usage: Page background, card fills, sidebar background

Deep Navy:    #1A2744  — Text, dark surfaces, footer
              HSL: 222°, 46%, 18%
              Usage: Primary text, dark section backgrounds, headings on light
              Contrast on cream: 13.8:1 ✓ WCAG AAA

Soft Grey:    #F0F0F0  — Dividers, input backgrounds, secondary surfaces
              HSL: 0°, 0%, 94%
              Usage: Table backgrounds, disabled states, borders, dividers
```

### Extended Palette
```
Teal Light:   #E0F4F4  — Teal tints for backgrounds, hover states, info callouts
Teal Dark:    #06615F  — Teal darken for hover on teal buttons (contrast safe)
Coral Light:  #FAE8E5  — Coral tints for warning/alert background fills
Coral Dark:   #C94F3E  — Coral darken for hover on coral elements
Navy Light:   #2E3F6B  — Secondary text, breadcrumbs
Navy Muted:   #6B7A9E  — Tertiary text, placeholders (contrast on cream: 4.8:1 ✓)
White:        #FFFFFF  — Cards on cream background, modal surfaces
Border:       #D8D0C8  — Warm-tinted border color (not pure grey)
Success:      #2D7A4A  — Confirmations, success states (contrast on white: 5.1:1 ✓)
Warning:      #C47C0A  — Alerts, cautionary indicators (contrast on white: 4.6:1 ✓)
Error:        #C0392B  — Form validation errors (contrast on white: 5.5:1 ✓)
```

### Contrast Reference
```
Deep Navy #1A2744 on Cream #FFF8F0:    13.8:1 ✓ AAA
Warm Teal #0A8A8A on White #FFFFFF:     4.6:1 ✓ AA
Warm Teal #0A8A8A on Cream #FFF8F0:    4.5:1 ✓ AA (borderline — use Teal Dark for safety)
Navy Muted #6B7A9E on White #FFFFFF:    4.8:1 ✓ AA
Teal Dark #06615F on White #FFFFFF:     7.2:1 ✓ AAA
```

### Dark Mode
ComPsych does not implement dark mode. The warm palette is intentionally light-only.

---

## 4. Layout System

### Container Widths
```
Max content:      1280px  — Outer bound for all page content
Sidebar:           260px  — Fixed sidebar width (desktop)
Main content:      960px  — Primary content column (fluid within constraint)
Article/doc:       720px  — Long-form document reading column
Narrow/form:       560px  — Form containers, modals
Mobile sidebar:    280px  — Off-canvas sidebar on mobile
```

### Grid System
```
Desktop (1280px+):
  - 12-column grid
  - Column gutter: 24px
  - Page margin: 40px each side

Tablet (768px–1279px):
  - 8-column grid
  - Column gutter: 20px
  - Page margin: 24px each side
  - Sidebar collapses to off-canvas

Mobile (< 768px):
  - 4-column grid
  - Column gutter: 16px
  - Page margin: 16px each side
  - Sidebar hidden (hamburger trigger)

Documentation Layout (primary):
  [sidebar 260px] | [gutter 40px] | [main content fluid max 900px]
  Total: sidebar + gutter + content ≤ 1280px
```

### Spacing Scale
```
--space-1:   4px   (0.25rem)  — Tight internal spacing, icon padding
--space-2:   8px   (0.5rem)   — Compact elements, badge padding
--space-3:   12px  (0.75rem)  — Small gaps, inline spacing
--space-4:   16px  (1rem)     — Base unit: form field padding, card internal top/bottom
--space-5:   20px  (1.25rem)  — Card padding, nav item padding
--space-6:   24px  (1.5rem)   — Section dividers, card gap
--space-8:   32px  (2rem)     — Section padding (mobile), heading margin-bottom
--space-10:  40px  (2.5rem)   — Sidebar internal padding, hero padding
--space-12:  48px  (3rem)     — Section padding (tablet)
--space-16:  64px  (4rem)     — Section padding (desktop)
--space-20:  80px  (5rem)     — Large section gaps
--space-24:  96px  (6rem)     — Hero vertical padding
```

### Breakpoints
```
xs:   0px    — Base mobile
sm:   480px  — Large phone
md:   768px  — Tablet portrait
lg:   1024px — Tablet landscape / small desktop
xl:   1280px — Desktop
2xl:  1536px — Wide desktop
```

---

## 5. Navigation

### Sidebar Navigation (Primary)
```
Structure:
  - Fixed position left, full viewport height
  - Width: 260px desktop, off-canvas mobile
  - Background: #FFF8F0 (cream) with 1px right border #D8D0C8
  - Logo: top-left, padding: 24px 20px 20px
  - Nav sections: labeled groups with H6-style uppercase labels
  - Scroll: sidebar scrolls independently of content

Section Headers:
  font-size: 0.75rem (12px)
  font-weight: 600
  text-transform: uppercase
  letter-spacing: 0.08em
  color: #6B7A9E
  padding: 20px 20px 8px
  margin-top: 8px

Nav Items:
  font-size: 0.9375rem (15px)
  font-weight: 500
  color: #1A2744
  padding: 8px 16px 8px 20px
  border-radius: 8px (right side, only on active/hover)
  margin: 2px 8px

Active State:
  background: #E0F4F4 (teal light)
  color: #0A8A8A (warm teal)
  border-left: 3px solid #0A8A8A
  font-weight: 600

Hover State:
  background: #F5F5F5
  color: #0A8A8A
  transition: all 150ms ease

Nested Items (sublevel):
  padding-left: 36px
  font-size: 0.875rem (14px)
  font-weight: 400
```

### Top Bar (Mobile / Hamburger)
```
Height: 64px
Background: #FFF8F0
Border-bottom: 1px solid #D8D0C8
Logo: left-aligned, 32px height
Hamburger: right-aligned, 40×40px touch target
```

### Breadcrumbs
```
font-size: 0.875rem (14px)
color: #6B7A9E (muted navy)
separator: "/" with 8px margin each side
Current page: color #1A2744, font-weight 500
Hover: color #0A8A8A
```

---

## 6. Buttons

### Primary Button
```
Background:       #0A8A8A (warm teal)
Text:             #FFFFFF (white)
Font:             DM Sans, 1rem / 16px, weight 600
Padding:          12px 24px
Border-radius:    16px  ← signature rounded
Border:           none
Letter-spacing:   0.01em

Hover:
  Background:     #06615F (teal dark)
  transform:      translateY(-1px)
  box-shadow:     0 4px 12px rgba(10, 138, 138, 0.3)
  transition:     all 200ms ease

Active:
  Background:     #055250
  transform:      translateY(0)
  box-shadow:     none

Focus:
  outline:        3px solid #0A8A8A
  outline-offset: 2px

Disabled:
  Background:     #D8D0C8
  color:          #6B7A9E
  cursor:         not-allowed

Sizes:
  SM: font 0.875rem, padding 8px 16px, radius 12px
  MD: font 1rem, padding 12px 24px, radius 16px  ← default
  LG: font 1.125rem, padding 16px 32px, radius 20px
```

### Secondary Button
```
Background:       transparent
Text:             #0A8A8A (warm teal)
Border:           2px solid #0A8A8A
Font:             DM Sans, 1rem / 16px, weight 600
Padding:          10px 22px (compensate for border)
Border-radius:    16px

Hover:
  Background:     #E0F4F4 (teal light)
  Border-color:   #06615F
  color:          #06615F
  transition:     all 200ms ease

Focus:
  outline:        3px solid #0A8A8A
  outline-offset: 2px
```

### Ghost Button
```
Background:       transparent
Text:             #1A2744 (deep navy)
Border:           none
Font:             DM Sans, 1rem / 16px, weight 500
Padding:          12px 20px
Border-radius:    16px

Hover:
  Background:     rgba(26, 39, 68, 0.06)
  transition:     background 150ms ease

Usage: Secondary actions, "cancel" buttons, nav-adjacent actions
```

### Coral / Alert Button
```
Background:       #E86C5A
Text:             #FFFFFF
Font:             DM Sans, 1rem / 16px, weight 600
Padding:          12px 24px
Border-radius:    16px

Hover:
  Background:     #C94F3E
  transition:     all 200ms ease

Usage: High-urgency CTAs, crisis resource links
```

### Icon Button
```
Width/Height:     40px × 40px
Border-radius:    12px
Background:       transparent
Icon color:       #1A2744
Hover background: #F0F0F0
```

---

## 7. Cards & Containers

### Standard Card
```
Background:       #FFFFFF (white)
Border-radius:    24px  ← signature
Border:           none (shadow instead)
Box-shadow:       0 2px 12px rgba(26, 39, 68, 0.08)
Padding:          32px
Overflow:         hidden

Hover (interactive cards):
  box-shadow:     0 8px 32px rgba(26, 39, 68, 0.12)
  transform:      translateY(-2px)
  transition:     all 250ms ease

Header area:
  Illustration zone: top 160px, background tinted with teal-light or coral-light
  Padding:          24px 24px 0 24px
```

### Info/Feature Card
```
Background:       #E0F4F4 (teal light)
Border-radius:    24px
Padding:          28px
border-left:      4px solid #0A8A8A

Title:            H4, DM Sans 600, #1A2744
Body:             body, DM Sans 400, #2E3F6B
```

### Callout / Alert Card
```
Warning:
  Background:     #FAE8E5 (coral light)
  Border-left:    4px solid #E86C5A
  Border-radius:  16px
  Padding:        20px 24px

Info:
  Background:     #E0F4F4
  Border-left:    4px solid #0A8A8A
  Border-radius:  16px
  Padding:        20px 24px

Success:
  Background:     #E8F5EE
  Border-left:    4px solid #2D7A4A
  Border-radius:  16px
  Padding:        20px 24px
```

### Sidebar Content Panel
```
Background:       #FFF8F0 (cream)
Border:           1px solid #D8D0C8
Border-radius:    16px
Padding:          24px
margin-bottom:    24px
```

### Modal / Dialog
```
Background:       #FFFFFF
Border-radius:    24px
Box-shadow:       0 20px 60px rgba(26, 39, 68, 0.2)
Padding:          40px
Max-width:        560px
Overlay:          rgba(26, 39, 68, 0.5) backdrop

Header:
  H3, DM Sans 600
  Close button: top-right, 40×40px, border-radius 12px
```

---

## 8. Forms & Inputs

### Text Input
```
Background:       #FFFFFF
Border:           2px solid #D8D0C8
Border-radius:    12px
Padding:          12px 16px
Font:             DM Sans, 1rem, weight 400
Color:            #1A2744
Line-height:      1.5
Height:           48px

Placeholder:
  Color:          #6B7A9E
  font-style:     normal (never italic)

Focus:
  Border-color:   #0A8A8A
  outline:        none
  box-shadow:     0 0 0 3px rgba(10, 138, 138, 0.2)
  transition:     all 150ms ease

Error:
  Border-color:   #C0392B
  box-shadow:     0 0 0 3px rgba(192, 57, 43, 0.15)

Success:
  Border-color:   #2D7A4A

Disabled:
  Background:     #F0F0F0
  color:          #6B7A9E
  cursor:         not-allowed
```

### Label
```
Font:             DM Sans, 0.9375rem (15px), weight 600
Color:            #1A2744
Margin-bottom:    6px
Display:          block
```

### Helper Text / Error Message
```
Font:             DM Sans, 0.875rem (14px), weight 400
Line-height:      1.5
Margin-top:       6px
Error color:      #C0392B
Helper color:     #6B7A9E
```

### Textarea
```
Same as text input
Min-height:       120px
Resize:           vertical
Padding:          12px 16px
```

### Checkbox & Radio
```
Custom rendered (not browser default)
Size:             20px × 20px
Border-radius:    6px (checkbox), 50% (radio)
Border:           2px solid #D8D0C8
Background:       #FFFFFF

Checked:
  Background:     #0A8A8A
  Border-color:   #0A8A8A
  Checkmark:      white SVG icon

Focus:
  box-shadow:     0 0 0 3px rgba(10, 138, 138, 0.25)

Label spacing:    8px gap from control
Font:             DM Sans, 1rem, weight 400
```

### Select / Dropdown
```
Same styling as text input
Appearance:       none
Background-image: custom chevron SVG (#1A2744)
Background-position: right 16px center
Padding-right:    48px
```

### Form Group Spacing
```
Margin-bottom between fields: 24px
Section gap: 40px
Submit button: margin-top 32px
```

---

## 9. Images & Media

### Illustration Style (Primary)
```
Style:          Simple flat vector (SVG preferred)
Characters:     Diverse human representations, warm skin tones
Color palette:  Warm teal, coral, cream — illustration-native
Line weight:    None (filled shapes only, no outlines)
Complexity:     Low — 2–4 color fills per illustration
Size contexts:
  - Hero: 400–600px wide, centered or right-aligned
  - Card header: 100% width, 140–180px tall, contained
  - Icon-scale: 48–64px (pictograms)
  - Inline: 24–32px (spot illustrations)
```

### Photography (Secondary)
```
When used:      Only for real employee testimonials, event documentation
Treatment:      Warm color grade (slight yellow/cream push)
Border-radius:  24px (large), 16px (card-size), 12px (thumbnails)
Object-fit:     cover
Aspect ratios:
  Hero:         16:9 or 3:2
  Card:         4:3
  Thumbnail:    1:1 (square)
  Portrait:     3:4
```

### Video/Media Embeds
```
Container:      border-radius 24px, overflow hidden
Aspect ratio:   16:9 maintained via aspect-ratio: 16/9
Box-shadow:     0 8px 32px rgba(26, 39, 68, 0.15)
Captions:       Always included for accessibility
Controls:       Custom styled in brand colors
```

### Icon Illustrations
```
Size:           48px × 48px
Container:      56px × 56px, border-radius 14px
Background:     Teal light (#E0F4F4) or Coral light (#FAE8E5)
Icon color:     Teal (#0A8A8A) or Coral (#E86C5A)
```

---

## 10. Animation & Motion

### Principles
- Purposeful: every animation communicates state change
- Accessible: respect prefers-reduced-motion
- Warm: slightly bouncy eases (not mechanical)
- Duration: 150ms for micro, 250ms for elements, 400ms for page transitions

### Easing Functions
```
--ease-default:   cubic-bezier(0.4, 0, 0.2, 1)   — Standard ease in-out
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1) — Slight overshoot (cards, modals)
--ease-out:       cubic-bezier(0, 0, 0.2, 1)      — Exits and slide-outs
--ease-in:        cubic-bezier(0.4, 0, 1, 1)      — Entrances
```

### Duration Tokens
```
--duration-fast:    100ms  — Hover state color changes
--duration-default: 200ms  — Button hovers, link colors, icon transforms
--duration-slow:    300ms  — Card hover lifts, panel slides
--duration-slower:  400ms  — Modal open/close, page transitions
--duration-scene:   600ms  — Hero section entrance animations
```

### Component Animations
```
Button hover:
  transition: background-color 200ms ease, transform 200ms ease, box-shadow 200ms ease
  transform: translateY(-1px)

Card hover:
  transition: transform 250ms ease-spring, box-shadow 250ms ease
  transform: translateY(-2px)

Sidebar nav active:
  transition: background 150ms ease, color 150ms ease

Modal open:
  animation: slideUp 300ms ease-out
  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
  }

Accordion/toggle:
  transition: height 250ms ease, opacity 200ms ease

Skeleton loading:
  background: linear-gradient(90deg, #F0F0F0 25%, #E8E8E8 50%, #F0F0F0 75%)
  background-size: 200% 100%
  animation: shimmer 1.5s infinite
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Icons & Decorative Elements

### Icon System
```
Library:        Phosphor Icons (recommended) or Lucide
Style:          Regular weight (not bold, not thin)
Sizes:
  XS: 16px  — Inline text icons, table icons
  SM: 20px  — Button icons, nav icons
  MD: 24px  — Feature icons (standard)
  LG: 32px  — Section header icons
  XL: 48px  — Feature highlight icons
  2XL: 64px — Empty state icons

Colors:
  Primary:    Inherit from parent or #0A8A8A
  Secondary:  #6B7A9E (muted navy)
  On dark:    #FFFFFF
  Destructive: #C0392B
```

### Decorative Shapes
```
Blob shapes:    SVG organic shapes in teal-light, coral-light
               Used as illustration backgrounds
               opacity: 0.4–0.6
               No borders, pure fills

Dot patterns:  3×3 or 4×4 dot grids
               Color: #D8D0C8 (warm border)
               opacity: 0.6
               Used as background texture in hero areas

Corner accents: Rounded teal or coral quarter-circles
               Size: 40–80px
               Positioned absolutely at card/section corners
```

### Dividers
```
Standard:       1px solid #D8D0C8
With spacing:   margin: 32px 0
Decorative:     gradient from teal to transparent, 2px height
None (preferred): use spacing instead when possible
```

### Status Indicators
```
Online/Active:  8px circle, background #2D7A4A
Warning:        8px circle, background #C47C0A
Error:          8px circle, background #C0392B
Inactive:       8px circle, background #D8D0C8
```

---

## 12. Unique Signature — The ONE Thing

**Rounded Warmth Architecture**

ComPsych's signature is the deliberate use of **maximum roundness paired with illustration-native characters** to psychologically de-medicalize corporate wellness. Every sharp edge in the UI would subconsciously signal "clinical" or "institutional." The 24px card radius and 16px button radius are non-negotiable brand pillars.

The signature pattern:
1. **Illustration pods**: tinted (#E0F4F4 or #FAE8E5) rounded containers (24px radius) that frame flat vector illustrations — people in warm environments, never clinical contexts
2. **Layered depth without shadows**: cards on cream (#FFFFFF on #FFF8F0) with only the faintest shadow (0 2px 12px rgba with very low opacity) — the warmth comes from the background color relationship, not dramatic shadow
3. **Section color rhythm**: alternating cream / white / teal-light background sections to guide without harsh dividers

When implementing: the illustrations ARE the hero content. Never replace with photography when an illustration exists. The flat vector characters carry the brand identity more than any color or type choice.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* ============================================
     COLOR TOKENS — COMPSYCH BRAND HUB
  ============================================ */

  /* Primary Brand Colors */
  --color-teal:          #0A8A8A;
  --color-teal-dark:     #06615F;
  --color-teal-light:    #E0F4F4;
  --color-coral:         #E86C5A;
  --color-coral-dark:    #C94F3E;
  --color-coral-light:   #FAE8E5;
  --color-cream:         #FFF8F0;
  --color-navy:          #1A2744;
  --color-navy-light:    #2E3F6B;
  --color-navy-muted:    #6B7A9E;
  --color-grey:          #F0F0F0;
  --color-white:         #FFFFFF;
  --color-border:        #D8D0C8;

  /* Semantic Colors */
  --color-bg:            var(--color-cream);
  --color-bg-surface:    var(--color-white);
  --color-text:          var(--color-navy);
  --color-text-muted:    var(--color-navy-muted);
  --color-link:          var(--color-teal);
  --color-link-hover:    var(--color-teal-dark);
  --color-divider:       var(--color-border);

  /* Status Colors */
  --color-success:       #2D7A4A;
  --color-success-bg:    #E8F5EE;
  --color-warning:       #C47C0A;
  --color-warning-bg:    #FEF5E0;
  --color-error:         #C0392B;
  --color-error-bg:      #FDEEEC;
  --color-info:          var(--color-teal);
  --color-info-bg:       var(--color-teal-light);

  /* ============================================
     TYPOGRAPHY TOKENS
  ============================================ */

  --font-primary:        "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  --font-mono:           "DM Mono", "Courier New", monospace;

  --font-size-xs:        0.75rem;    /* 12px */
  --font-size-sm:        0.875rem;   /* 14px */
  --font-size-base:      1rem;       /* 16px */
  --font-size-md:        1.125rem;   /* 18px */
  --font-size-lg:        1.25rem;    /* 20px */
  --font-size-xl:        1.5rem;     /* 24px */
  --font-size-2xl:       1.75rem;    /* 28px */
  --font-size-3xl:       2rem;       /* 32px */
  --font-size-4xl:       2.5rem;     /* 40px */
  --font-size-5xl:       3rem;       /* 48px */

  --font-weight-regular: 400;
  --font-weight-medium:  500;
  --font-weight-semibold: 600;
  --font-weight-bold:    700;

  --line-height-tight:   1.1;
  --line-height-snug:    1.25;
  --line-height-normal:  1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose:   1.7;

  --letter-spacing-tight:  -0.02em;
  --letter-spacing-snug:   -0.01em;
  --letter-spacing-normal:  0em;
  --letter-spacing-wide:    0.05em;
  --letter-spacing-wider:   0.08em;

  /* ============================================
     SPACING TOKENS
  ============================================ */

  --space-1:   0.25rem;   /* 4px */
  --space-2:   0.5rem;    /* 8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */

  /* ============================================
     BORDER RADIUS TOKENS
  ============================================ */

  --radius-sm:     8px;
  --radius-md:     12px;
  --radius-lg:     16px;   /* Buttons */
  --radius-xl:     20px;
  --radius-2xl:    24px;   /* Cards — signature */
  --radius-3xl:    32px;
  --radius-full:   9999px; /* Pill badges */

  /* ============================================
     SHADOW TOKENS
  ============================================ */

  --shadow-xs:     0 1px 3px rgba(26, 39, 68, 0.05);
  --shadow-sm:     0 2px 8px rgba(26, 39, 68, 0.07);
  --shadow-md:     0 4px 16px rgba(26, 39, 68, 0.09);
  --shadow-lg:     0 8px 32px rgba(26, 39, 68, 0.12);
  --shadow-xl:     0 16px 48px rgba(26, 39, 68, 0.16);
  --shadow-card:   var(--shadow-md);
  --shadow-modal:  0 20px 60px rgba(26, 39, 68, 0.20);
  --shadow-teal:   0 4px 12px rgba(10, 138, 138, 0.30);

  /* ============================================
     LAYOUT TOKENS
  ============================================ */

  --container-max:     1280px;
  --container-content: 960px;
  --container-article: 720px;
  --container-narrow:  560px;
  --sidebar-width:     260px;
  --topbar-height:     64px;

  /* ============================================
     ANIMATION TOKENS
  ============================================ */

  --ease-default:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out:       cubic-bezier(0, 0, 0.2, 1);
  --ease-in:        cubic-bezier(0.4, 0, 1, 1);

  --duration-fast:    100ms;
  --duration-default: 200ms;
  --duration-slow:    300ms;
  --duration-slower:  400ms;
  --duration-scene:   600ms;

  /* ============================================
     Z-INDEX SCALE
  ============================================ */

  --z-base:      1;
  --z-dropdown:  100;
  --z-sticky:    200;
  --z-overlay:   300;
  --z-modal:     400;
  --z-toast:     500;
  --z-tooltip:   600;
}
```
