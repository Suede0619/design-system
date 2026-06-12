# Scout Motors — Design System

## 1. Overview

- **Site:** scoutmotors.com
- **Award:** Awwwards E-commerce of the Year 2025
- **What makes it special:** A heritage American automotive brand reborn digitally. The site marries rugged outdoor authenticity with modern configurator UX, telling a story of American craftsmanship while selling trucks.
- **Aesthetic:** Rugged heritage meets modern precision. Earth tones dominate — military green, sand, rust, and raw materials. Typography is industrial and purposeful. The site feels like it was designed in a workshop, not a design studio. Photography is expansive and outdoors-focused.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Barlow Condensed" (or equivalent industrial condensed sans — narrow, strong, utilitarian)
- **Weight:** 700 (Bold)
- **Size range:** 56px–120px (clamp(3.5rem, 8vw, 7.5rem))
- **Letter-spacing:** 0.02em
- **Text-transform:** uppercase

### Body Font
- **Family:** "Barlow" (regular width)
- **Weight:** 400 (Regular)
- **Size:** 17px / 1.0625rem
- **Line-height:** 1.65

### Caption / UI Font
- **Family:** "Barlow"
- **Weight:** 500 (Medium)
- **Size:** 12px / 0.75rem
- **Letter-spacing:** 0.1em
- **Text-transform:** uppercase

### Heading Hierarchy
| Level | Size | Weight | Letter-spacing | Transform |
|-------|------|--------|----------------|-----------|
| h1 | 96px / 6rem | 700 | 0.02em | uppercase |
| h2 | 64px / 4rem | 700 | 0.02em | uppercase |
| h3 | 40px / 2.5rem | 600 | 0.01em | uppercase |
| h4 | 28px / 1.75rem | 600 | 0 | none |
| h5 | 22px / 1.375rem | 500 | 0 | none |
| h6 | 14px / 0.875rem | 500 | 0.1em | uppercase |

### Special Text Treatments
- **Stamped text:** Headlines that look stamped/embossed — achieved with `text-shadow` in matching hue, offset 1px
- **Badge labels:** Rounded capsule containers for "NEW", "RESERVE NOW" labels
- **Spec numbers:** Tabular numerals, 500 weight, monospace for configurator specs
- **Heritage text:** Slightly weathered effect — `opacity: 0.9` with subtle noise overlay on background

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Scout Green | `#2D3E2F` | Primary brand, hero backgrounds |
| Sand | `#D4C5A9` | Secondary backgrounds, card fills |
| Rust | `#A0522D` | Accent, heritage markers |
| Cream | `#F5F0E6` | Light backgrounds |
| Charcoal | `#1C1C1C` | Text, dark sections |

### Secondary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Clay | `#8B7355` | Muted accent, borders |
| Forest | `#1A2B1C` | Deep background variation |
| Stone | `#9B9589` | Secondary text |
| Bone | `#EDE7D9` | Subtle backgrounds |

### Background Colors
- **Primary light:** `#F5F0E6` (Cream)
- **Primary dark:** `#1C1C1C`
- **Section accent:** `#2D3E2F` (Scout Green)
- **Card background:** `#EDE7D9` (Bone)

### Text Colors
- **Primary (on light):** `#1C1C1C`
- **Primary (on dark):** `#F5F0E6`
- **Secondary:** `#9B9589`
- **Muted:** `#6B6560`
- **Accent:** `#A0522D`

### Accent / CTA Colors
- **Primary CTA:** `#A0522D` (Rust)
- **CTA hover:** `#C0633A`
- **Secondary CTA:** `#2D3E2F` (Scout Green)
- **Secondary hover:** `#3A5140`

### Gradients
- **Hero overlay:** `linear-gradient(180deg, transparent 40%, rgba(28,28,28,0.85) 100%)`
- **Earth gradient:** `linear-gradient(135deg, #2D3E2F 0%, #1A2B1C 100%)`
- **Warm fade:** `linear-gradient(180deg, #F5F0E6 0%, #EDE7D9 100%)`

### Color Usage Rules
- Scout Green is for major brand moments — hero sections, primary buttons on light backgrounds
- Rust is the attention-grabber — CTAs and critical interactive elements only
- Sand and Cream backgrounds alternate to create visual rhythm without harsh contrast
- Never use bright or saturated colors — everything is muted, natural, weathered

---

## 4. Layout System

### Container
- **Max-width:** 1440px
- **Padding:** 0 clamp(24px, 5vw, 80px)

### Grid
- **Columns:** 12
- **Gutter:** 24px (desktop), 16px (mobile)
- **Breakpoints:**
  - Mobile: 0–767px
  - Tablet: 768px–1023px
  - Desktop: 1024px–1439px
  - Wide: 1440px+

### Section Spacing
- **Section padding:** 120px 0 (desktop), 80px 0 (tablet), 56px 0 (mobile)
- **Between components:** 64px
- **Spacing scale:** 4, 8, 16, 24, 32, 48, 64, 80, 120

### Content Alignment
- Hero: centered text over full-bleed landscape photography
- Product showcase: left-aligned text with right-aligned vehicle image
- Timeline/history: centered vertical axis with alternating content
- Configurator: full-width with sidebar controls
- Specs: two-column table layout

### Responsive Behavior
- Configurator becomes vertical (vehicle on top, controls below) on mobile
- Full-bleed photography maintained at all breakpoints
- Grid collapses from 12 → 4 columns on mobile
- Typography scales significantly — condensed font maintains impact at smaller sizes

---

## 5. Navigation

- **Style:** Sticky, solid background. `#1C1C1C` on dark pages, `#F5F0E6` on light pages
- **Height:** 72px desktop, 60px mobile
- **Font:** "Barlow", 13px, 500 weight, uppercase, letter-spacing 0.08em
- **Active state:** Underline (2px, `#A0522D`)
- **Hover:** `#A0522D` text, 200ms
- **Mobile:** Full-screen overlay, `#1C1C1C` background, centered links, condensed font 40px
- **Logo:** Left-aligned, Scout Motors logotype, 32px height
- **CTA in nav:** "RESERVE" button, right side, Rust background, always visible

---

## 6. Buttons

### Primary Button
- **Background:** `#A0522D`
- **Text:** `#F5F0E6`, 13px, 600 weight, uppercase, letter-spacing 0.08em
- **Padding:** 16px 40px
- **Border-radius:** 4px
- **Hover:** Background `#C0633A`, 200ms ease
- **Active:** Background `#8A4527`

### Secondary Button
- **Background:** `#2D3E2F`
- **Text:** `#F5F0E6`, same specs
- **Hover:** Background `#3A5140`

### Outline Button
- **Background:** transparent
- **Border:** 2px solid `#1C1C1C`
- **Text:** `#1C1C1C`
- **Hover:** Background `#1C1C1C`, text `#F5F0E6`, 200ms

### Ghost Button
- **Background:** transparent
- **Border:** none
- **Text:** `#A0522D`, 13px, 500 weight, uppercase
- **Arrow:** Right chevron, animates 6px right on hover
- **Underline:** 2px `#A0522D`, slides in from left on hover

### CTA Button (Reserve)
- **Same as primary, larger:** padding 20px 48px, 15px text
- **Optional badge:** "AVAILABLE NOW" capsule above or beside

### Icon Button
- **Size:** 48px × 48px
- **Background:** `#EDE7D9`
- **Border-radius:** 4px
- **Icon:** 20px, `#1C1C1C`
- **Hover:** Background `#D4C5A9`

---

## 7. Cards & Containers

### Product Card (Vehicle)
- **Background:** `#EDE7D9`
- **Border:** none
- **Border-radius:** 8px
- **Shadow:** `0 2px 8px rgba(0,0,0,0.06)`
- **Padding:** 0 (image top, content bottom with 24px padding)
- **Image:** 3:2, covers top portion
- **Hover:** Shadow deepens `0 8px 24px rgba(0,0,0,0.12)`, translateY(-4px), 300ms

### Feature Card
- **Background:** `#F5F0E6`
- **Border:** 1px solid `#D4C5A9`
- **Border-radius:** 8px
- **Padding:** 32px
- **Icon:** 32px, `#2D3E2F`, top-left
- **Title:** 22px, 600 weight
- **Description:** 16px, `#6B6560`

### Timeline Card
- **Background:** `#FFFFFF`
- **Border-left:** 4px solid `#2D3E2F`
- **Border-radius:** 0 8px 8px 0
- **Padding:** 32px
- **Year:** "Barlow Condensed", 48px, 700, `#A0522D`

### Spec Card
- **Background:** transparent
- **Border-bottom:** 1px solid `#D4C5A9`
- **Padding:** 20px 0
- **Label:** 12px, uppercase, `#9B9589`
- **Value:** 20px, 600 weight, `#1C1C1C`

---

## 8. Forms & Inputs

### Input Field
- **Background:** `#FFFFFF`
- **Border:** 2px solid `#D4C5A9`
- **Border-radius:** 4px
- **Padding:** 14px 16px
- **Font:** 16px, 400 weight, `#1C1C1C`
- **Placeholder:** `#9B9589`

### Focus State
- **Border:** 2px solid `#2D3E2F`
- **Box-shadow:** 0 0 0 3px rgba(45, 62, 47, 0.15)
- **Transition:** 200ms ease

### Label
- **Position:** above input, left-aligned
- **Font:** 13px, 500 weight, uppercase, `#6B6560`, letter-spacing 0.06em
- **Margin-bottom:** 8px

### Error State
- **Border:** 2px solid `#C04030`
- **Error text:** 13px, `#C04030`

### Select / Dropdown
- **Same as input field**
- **Chevron:** 14px, `#6B6560`
- **Dropdown:** White bg, 8px radius, `0 4px 16px rgba(0,0,0,0.1)` shadow

### Checkbox / Radio
- **Size:** 20px × 20px
- **Border:** 2px solid `#D4C5A9`
- **Border-radius:** 4px (checkbox), 50% (radio)
- **Checked:** `#2D3E2F` fill, white checkmark
- **Focus:** Green outline ring

---

## 9. Images & Media

### Image Treatment
- **Corners:** 8px on cards, 0px on full-bleed
- **Shadows:** Subtle on product images (`0 4px 16px rgba(0,0,0,0.08)`)
- **Overlays:** Gradient on hero landscapes
- **Color treatment:** Warm color temperature — slight warm filter on all photography

### Aspect Ratios
- Hero landscape: 21:9 or full-viewport
- Vehicle showcase: 16:9
- Detail shots: 1:1
- Lifestyle: 3:2
- Vertical storytelling: 9:16

### Image Hover
- Scale(1.03) on cards, 400ms ease-out
- No filter changes

### Video Treatment
- Full-screen background video for hero (outdoor driving footage)
- Inline video with rugged minimal controls
- Earth-tone play button: 64px circle, `#2D3E2F` background, white triangle

### Illustration Style
- Technical line drawings of vehicle features (cutaway views)
- Single color (`#2D3E2F`) on transparent or cream background
- 2px stroke weight, precise angles
- Used for spec/feature explanation sections

---

## 10. Animation & Motion

### Page Transitions
- **Style:** Fade with slight scale (0.98 → 1)
- **Duration:** 400ms
- **Easing:** ease-out

### Scroll Animations
- **Fade-up:** Y: 32px → 0, opacity 0 → 1, 600ms
- **Stagger:** 80ms between siblings
- **Parallax:** Landscape images at 0.6x scroll speed
- **Vehicle reveal:** Car slides in from side on scroll trigger, 800ms
- **Counter animation:** Spec numbers count up when visible (engine HP, range, etc.)

### Hover Micro-interactions
- **Buttons:** Background shift + slight scale, 200ms
- **Cards:** Shadow + translate, 300ms
- **Nav links:** Color shift + underline, 200ms
- **Configurator options:** Border highlight + checkmark animation, 150ms

### Loading States
- **Skeleton:** Bone (`#EDE7D9`) blocks with subtle pulse
- **Spinner:** Scout Green ring, 24px
- **Configurator loading:** Vehicle outline wireframe pulses while 3D loads

### Timing Functions
- **Default:** ease-out
- **Reveal:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Spring (configurator):** cubic-bezier(0.34, 1.2, 0.64, 1)

### Performance Notes
- 3D configurator lazy-loaded — show static image first
- Heavy landscape images use `loading="lazy"` + blur-up placeholders
- Respect prefers-reduced-motion — no parallax, simple fades only
- Optimize video: compress to <5MB, use `poster` attribute

---

## 11. Icons & Decorative Elements

### Icon Style
- **Style:** Custom line icons, 2px stroke, rounded caps
- **Size:** 24px default, 20px inline
- **Color:** `#2D3E2F` on light, `#F5F0E6` on dark
- **Category icons:** Vehicle features (4WD, electric, towing, terrain)

### Decorative Elements
- **Topographic lines:** Subtle topo map patterns at 3% opacity as section backgrounds
- **Compass rose:** Small decorative element used as section markers
- **Heritage badge:** Circular badge treatment for "EST. 1960" and similar marks
- **Trail markers:** Small dots/dashes connecting timeline elements

### Dividers
- **Default:** 1px solid `#D4C5A9`
- **Section:** No visible line — earth-tone color block changes create natural division
- **Accent:** 48px × 3px `#A0522D`

### Background Textures
- **Topographic pattern:** SVG lines at 3% opacity, muted earth tone
- **Paper grain:** Subtle warm noise overlay at 2% opacity on cream sections
- **No harsh patterns.** Everything feels organic and natural.

---

## 12. Unique Signature

**The ONE thing:** The full-screen vehicle configurator combined with heritage storytelling — the site seamlessly transitions from a "once upon a time" brand narrative (timeline, heritage photos, values) directly into a "build yours" configurator. The emotional story justifies the purchase decision without ever feeling like a sales pitch.

**How to replicate:**
1. Open with a full-viewport hero: landscape drone footage of rugged terrain, condensed uppercase title overlay
2. Scroll into timeline sections that alternate dark (heritage story) and light (modern features) backgrounds
3. Use `#2D3E2F` background sections for brand narrative, `#F5F0E6` for product features
4. Configurator section: full-width, `position: sticky` vehicle image with scrollable options panel
5. Color swatches are actual vehicle colors (earth tones) with tactile hover effects
6. Spec cards use tabular numerals and counter animations
7. Final CTA: "RESERVE YOURS" with `#A0522D` background, full-width, 80px padding

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-body: "Barlow", "Helvetica Neue", sans-serif;
  --font-ui: "Barlow", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --font-size-h1: clamp(2.5rem, 6vw, 6rem);
  --font-size-h2: clamp(2rem, 4vw, 4rem);
  --font-size-h3: clamp(1.5rem, 2.5vw, 2.5rem);
  --font-size-h4: 1.75rem;
  --font-size-h5: 1.375rem;
  --font-size-h6: 0.875rem;
  --font-size-body: 1.0625rem;
  --font-size-caption: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.1;
  --line-height-heading: 1.2;
  --line-height-normal: 1.65;

  --letter-spacing-tight: 0;
  --letter-spacing-normal: 0.01em;
  --letter-spacing-wide: 0.08em;
  --letter-spacing-wider: 0.1em;

  /* Colors — Brand */
  --color-scout-green: #2D3E2F;
  --color-scout-green-hover: #3A5140;
  --color-forest: #1A2B1C;
  --color-rust: #A0522D;
  --color-rust-hover: #C0633A;
  --color-rust-active: #8A4527;

  /* Colors — Earth */
  --color-sand: #D4C5A9;
  --color-cream: #F5F0E6;
  --color-bone: #EDE7D9;
  --color-clay: #8B7355;
  --color-stone: #9B9589;

  /* Colors — Background */
  --color-bg-light: #F5F0E6;
  --color-bg-subtle: #EDE7D9;
  --color-bg-dark: #1C1C1C;
  --color-bg-brand: #2D3E2F;

  /* Colors — Text */
  --color-text-primary: #1C1C1C;
  --color-text-on-dark: #F5F0E6;
  --color-text-secondary: #9B9589;
  --color-text-muted: #6B6560;
  --color-text-accent: #A0522D;

  /* Colors — Border */
  --color-border: #D4C5A9;
  --color-border-dark: #333333;

  /* Colors — Semantic */
  --color-error: #C04030;
  --color-success: #2D6B3F;
  --color-warning: #C09030;

  /* Gradients */
  --gradient-hero: linear-gradient(180deg, transparent 40%, rgba(28, 28, 28, 0.85) 100%);
  --gradient-earth: linear-gradient(135deg, #2D3E2F 0%, #1A2B1C 100%);
  --gradient-warm: linear-gradient(180deg, #F5F0E6 0%, #EDE7D9 100%);

  /* Spacing */
  --space-2xs: 4px;
  --space-xs: 8px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  --space-2xl: 64px;
  --space-3xl: 80px;
  --space-4xl: 120px;

  /* Layout */
  --container-max: 1440px;
  --container-padding: clamp(24px, 5vw, 80px);
  --grid-columns: 12;
  --grid-gutter: 24px;

  /* Section */
  --section-padding-desktop: 120px;
  --section-padding-tablet: 80px;
  --section-padding-mobile: 56px;

  /* Nav */
  --nav-height: 72px;
  --nav-height-mobile: 60px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-dropdown: 0 4px 16px rgba(0, 0, 0, 0.1);

  /* Transitions */
  --ease-default: ease-out;
  --ease-reveal: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-spring: cubic-bezier(0.34, 1.2, 0.64, 1);

  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 600ms;
  --duration-vehicle: 800ms;
}
```
