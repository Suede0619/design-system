# Lando Norris — Design System

## 1. Overview

- **Site:** landonorris.com
- **Award:** Awwwards Site of the Year 2025
- **What makes it special:** A cinematic, motorsport-infused personal brand site that treats a racing driver's story like a blockbuster film. Every scroll feels like accelerating through a tunnel — dark, fast, visceral.
- **Aesthetic:** High-contrast dark cinema. The site lives in near-black with explosive moments of papaya orange and pure white. Typography is enormous and unapologetic. Video is the primary medium, not decoration.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Aeonik Pro" (or equivalent geometric grotesque — sharp terminals, wide aperture)
- **Weight:** 700 (Bold) for hero headlines, 800 (ExtraBold) for impact moments
- **Size range:** 72px–180px (clamp(4.5rem, 10vw, 11.25rem))
- **Letter-spacing:** -0.03em (tight, compressed energy)
- **Text-transform:** uppercase on hero headlines, mixed case on section titles

### Body Font
- **Family:** "Aeonik Pro"
- **Weight:** 400 (Regular)
- **Size:** 16px / 1rem
- **Line-height:** 1.6

### Caption / UI Font
- **Family:** "Aeonik Pro"
- **Weight:** 500 (Medium)
- **Size:** 12px / 0.75rem
- **Letter-spacing:** 0.08em
- **Text-transform:** uppercase

### Heading Hierarchy
| Level | Size | Weight | Letter-spacing | Transform |
|-------|------|--------|----------------|-----------|
| h1 | 120px / 7.5rem | 800 | -0.03em | uppercase |
| h2 | 72px / 4.5rem | 700 | -0.02em | uppercase |
| h3 | 48px / 3rem | 700 | -0.02em | none |
| h4 | 32px / 2rem | 600 | -0.01em | none |
| h5 | 24px / 1.5rem | 600 | 0 | none |
| h6 | 18px / 1.125rem | 500 | 0.02em | uppercase |

### Special Text Treatments
- **Outlined text:** 2px stroke, no fill, used for giant background numerals (race numbers)
- **Gradient text:** Linear gradient from #FF8000 → #FFFFFF on highlight stats, applied via `background-clip: text`
- **Split reveal:** Headlines split-animate from center outward on scroll trigger

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Jet Black | `#0A0A0A` | Primary background |
| Carbon | `#141414` | Card backgrounds, elevated surfaces |
| Papaya Orange | `#FF8000` | McLaren accent, CTAs, highlights |
| Pure White | `#FFFFFF` | Primary text on dark |
| Smoke | `#1A1A1A` | Section dividers, subtle elevation |

### Background Colors
- **Dark mode (default):** `#0A0A0A`
- **Elevated surface:** `#141414`
- **Deep black (video overlay):** `#000000` at 60% opacity
- **No light mode.** This site does not acknowledge daylight.

### Text Colors
- **Primary:** `#FFFFFF`
- **Secondary:** `#A0A0A0`
- **Muted:** `#666666`
- **Accent text:** `#FF8000`

### Accent / CTA Colors
- **Primary CTA:** `#FF8000` (Papaya Orange)
- **CTA hover:** `#FF9933`
- **Danger/alert:** `#FF3333`
- **Success:** `#00CC66`

### Gradients
- **Hero overlay:** `linear-gradient(180deg, transparent 0%, #0A0A0A 100%)`
- **Accent gradient:** `linear-gradient(135deg, #FF8000 0%, #FFB366 100%)`
- **Text glow:** `radial-gradient(ellipse, rgba(255,128,0,0.15) 0%, transparent 70%)`

### Color Usage Rules
- Orange is ONLY for interactive elements, stats, and intentional highlights. Never for large background fills.
- White text on black is the backbone. Grey is for secondary information only.
- Video overlays always use the hero gradient to ensure text readability.

---

## 4. Layout System

### Container
- **Max-width:** 1440px
- **Padding:** 0 clamp(24px, 4vw, 80px)

### Grid
- **Columns:** 12-column grid
- **Gutter:** 24px
- **Breakpoints:**
  - Mobile: 0–767px
  - Tablet: 768px–1023px
  - Desktop: 1024px–1439px
  - Wide: 1440px+

### Section Spacing
- **Section padding:** 120px 0 (desktop), 80px 0 (tablet), 60px 0 (mobile)
- **Component gap:** 80px between major components
- **Inner spacing scale:** 8, 16, 24, 32, 48, 64, 80, 120

### Content Alignment
- Hero sections: centered, full-viewport
- Content sections: left-aligned with 60/40 or 50/50 splits
- Stats/numbers: centered grid, 3-up on desktop, stacked on mobile

### Responsive Behavior
- Full-bleed approach — content goes edge-to-edge on all breakpoints
- Horizontal scroll sections collapse to vertical stacked cards on mobile
- Video backgrounds swap to static images on mobile for performance
- Typography scales aggressively — h1 drops from 120px to 48px on mobile

---

## 5. Navigation

- **Style:** Fixed/sticky, transparent over hero, transitions to solid `#0A0A0A` with `backdrop-filter: blur(20px)` on scroll
- **Height:** 80px desktop, 64px mobile
- **Font:** "Aeonik Pro", 14px, 500 weight, uppercase, letter-spacing 0.06em
- **Active state:** Papaya orange text color `#FF8000`, no underline
- **Hover:** White → Orange transition, 200ms ease
- **Mobile:** Full-screen overlay, black background, nav items animate in staggered (50ms delay each)
- **Logo:** Left-aligned, custom "LN" monogram in white, 32px height
- **Hamburger:** Custom — two horizontal lines, 24px wide, animate to X

---

## 6. Buttons

### Primary Button
- **Background:** `#FF8000`
- **Text:** `#0A0A0A`, 14px, 600 weight, uppercase, letter-spacing 0.06em
- **Padding:** 16px 40px
- **Border-radius:** 0px (sharp, aggressive)
- **Hover:** Background shifts to `#FF9933`, slight scale(1.02), 200ms ease-out
- **Active:** scale(0.98)

### Secondary / Outline Button
- **Background:** transparent
- **Border:** 1px solid `#FFFFFF`
- **Text:** `#FFFFFF`, same specs as primary
- **Hover:** Background fills `#FFFFFF`, text becomes `#0A0A0A`, 200ms

### Ghost Button
- **Background:** transparent
- **Border:** none
- **Text:** `#FFFFFF`, 14px, 500 weight
- **Hover:** Text becomes `#FF8000`, optional underline slide-in from left
- **Used for:** inline text links, "View all" actions

### CTA Button
- **Same as primary but larger:** padding 20px 56px, font-size 16px
- **Optional arrow icon:** 16px, animates right 4px on hover

### Icon Button
- **Size:** 48px × 48px
- **Background:** `#141414`
- **Border-radius:** 50%
- **Icon:** 20px, white
- **Hover:** Background `#FF8000`, icon stays white

---

## 7. Cards & Containers

### Content Card
- **Background:** `#141414`
- **Border:** none
- **Border-radius:** 0px
- **Shadow:** none (flat, cinematic)
- **Padding:** 32px
- **Hover:** Subtle upward translate (-4px), 300ms ease-out

### Media Card (Race/Gallery)
- **Background:** full-bleed image
- **Overlay:** `linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.9) 100%)`
- **Border-radius:** 0px
- **Aspect ratio:** 16:9
- **Hover:** Image scale(1.05), 500ms ease-out, overlay lightens slightly
- **Text positioned:** bottom-left, over gradient

### Stats Card
- **Background:** transparent
- **Border-top:** 1px solid `#333333`
- **Padding:** 32px 0
- **Number:** 72px, 700 weight, `#FF8000`
- **Label:** 12px, uppercase, `#666666`

---

## 8. Forms & Inputs

### Input Field
- **Background:** `#141414`
- **Border:** 1px solid `#333333`
- **Border-radius:** 0px
- **Padding:** 16px 20px
- **Font:** 16px, 400 weight, `#FFFFFF`
- **Placeholder:** `#666666`

### Focus State
- **Border:** 1px solid `#FF8000`
- **Box-shadow:** 0 0 0 3px rgba(255, 128, 0, 0.15)
- **Transition:** 200ms ease

### Label
- **Position:** above input
- **Font:** 12px, 500 weight, uppercase, `#A0A0A0`, letter-spacing 0.06em
- **Margin-bottom:** 8px

### Error State
- **Border:** 1px solid `#FF3333`
- **Error text:** 12px, 400 weight, `#FF3333`, margin-top 4px

### Select / Dropdown
- **Same as input field**
- **Custom chevron:** 12px, white, right-aligned
- **Dropdown panel:** `#141414`, border 1px solid `#333333`

### Checkbox / Radio
- **Size:** 20px × 20px
- **Border:** 1px solid `#666666`
- **Border-radius:** 0px (checkbox), 50% (radio)
- **Checked:** `#FF8000` fill, white checkmark icon

---

## 9. Images & Media

### Image Treatment
- **Corners:** 0px (always sharp)
- **Shadows:** none
- **Overlays:** Dark gradient on hero/background images
- **Filters:** Slight contrast boost (filter: contrast(1.05)) on editorial images

### Aspect Ratios
- Hero: 16:9 or full-viewport
- Gallery: 3:2
- Portrait: 2:3
- Square: 1:1 (profile/avatar)

### Image Hover
- **Scale:** 1.05 over 500ms ease-out
- **Optional:** Slight brightness increase

### Video Treatment
- **Autoplay, muted, loop** for backgrounds
- **Controls hidden** on ambient video
- **Overlay:** Always present for text readability
- **Format:** WebM primary, MP4 fallback

### Illustration Style
- N/A — this site is photography and video only. No illustrations.

---

## 10. Animation & Motion

### Page Transitions
- **Style:** Fade with slight upward motion
- **Duration:** 400ms
- **Easing:** cubic-bezier(0.25, 0.1, 0.25, 1)

### Scroll Animations
- **Fade-up:** Elements translate from Y: 40px, opacity 0 → Y: 0, opacity 1
- **Duration:** 600ms
- **Stagger:** 100ms between sibling elements
- **Parallax:** Background images move at 0.5x scroll speed
- **Horizontal scroll:** Sections with horizontal carousel, triggered by vertical scroll position

### Hover Micro-interactions
- **Buttons:** Scale + color shift, 200ms
- **Cards:** Translate Y -4px, 300ms
- **Links:** Color transition, optional underline slide
- **Images:** Scale 1.05, 500ms

### Loading States
- **Page load:** Black screen → content fades in, 800ms
- **Skeleton:** Dark grey pulse on `#141414` backgrounds
- **Spinner:** Orange rotating ring, 24px, `border-top: 2px solid #FF8000`

### Timing Functions
- **Default ease:** cubic-bezier(0.25, 0.1, 0.25, 1)
- **Snappy:** cubic-bezier(0.16, 1, 0.3, 1)
- **Smooth out:** cubic-bezier(0, 0, 0.2, 1)

### Performance Notes
- Use `will-change: transform` on parallax elements
- Prefer `transform` and `opacity` for animations (composited properties only)
- Lazy-load videos outside viewport
- Reduce motion: respect `prefers-reduced-motion` — disable parallax, simplify to fade only

---

## 11. Icons & Decorative Elements

### Icon Style
- **Style:** Custom line icons, 1.5px stroke weight
- **Size:** 20px default, 24px in nav, 16px inline
- **Color:** White default, orange on interactive hover

### Decorative Elements
- **Race numbers:** Oversized outlined numerals (200px+) as background texture
- **Grid lines:** Subtle 1px `#1A1A1A` lines creating a track-map aesthetic
- **Speed lines:** Horizontal lines that animate across sections during scroll

### Dividers
- **Horizontal rule:** 1px solid `#333333`, full-width
- **Section break:** 80px spacing with no visible divider
- **Accent divider:** 40px wide, 2px solid `#FF8000`

### Background Textures
- **Noise:** Subtle grain overlay, PNG at 3% opacity
- **Carbon fiber:** Optional subtle pattern on card backgrounds

---

## 12. Unique Signature

**The ONE thing:** Full-viewport video backgrounds with aggressive typographic overlay — headlines at 120px+ that sit directly on top of moving footage, creating a broadcast-quality sports title sequence feel.

**How to replicate:**
1. Use `<video autoplay muted loop playsinline>` covering the full viewport
2. Apply `linear-gradient(180deg, transparent 0%, #0A0A0A 100%)` overlay
3. Position text with `position: absolute; bottom: 15vh; left: 5vw`
4. Set text to uppercase, 700+ weight, clamp(3rem, 8vw, 7.5rem)
5. Add subtle text-shadow: `0 2px 40px rgba(0,0,0,0.5)` for depth
6. Horizontal scroll sections use CSS `scroll-snap-type: x mandatory` with `overflow-x: scroll`

---

## 13. CSS Custom Properties Template

```css
:root {
  /* Typography */
  --font-display: "Aeonik Pro", "Helvetica Neue", Arial, sans-serif;
  --font-body: "Aeonik Pro", "Helvetica Neue", Arial, sans-serif;
  --font-ui: "Aeonik Pro", "Helvetica Neue", Arial, sans-serif;

  --font-size-hero: clamp(3rem, 8vw, 7.5rem);
  --font-size-h1: clamp(2.5rem, 6vw, 7.5rem);
  --font-size-h2: clamp(2rem, 4vw, 4.5rem);
  --font-size-h3: clamp(1.5rem, 3vw, 3rem);
  --font-size-h4: 2rem;
  --font-size-h5: 1.5rem;
  --font-size-h6: 1.125rem;
  --font-size-body: 1rem;
  --font-size-caption: 0.75rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;

  --line-height-tight: 1.1;
  --line-height-normal: 1.6;
  --line-height-loose: 1.8;

  --letter-spacing-tight: -0.03em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.06em;
  --letter-spacing-wider: 0.08em;

  /* Colors */
  --color-bg-primary: #0A0A0A;
  --color-bg-elevated: #141414;
  --color-bg-subtle: #1A1A1A;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --color-text-muted: #666666;
  --color-text-accent: #FF8000;

  --color-accent-primary: #FF8000;
  --color-accent-hover: #FF9933;
  --color-accent-glow: rgba(255, 128, 0, 0.15);

  --color-border: #333333;
  --color-border-subtle: #1A1A1A;

  --color-error: #FF3333;
  --color-success: #00CC66;

  /* Gradients */
  --gradient-hero-overlay: linear-gradient(180deg, transparent 0%, #0A0A0A 100%);
  --gradient-accent: linear-gradient(135deg, #FF8000 0%, #FFB366 100%);
  --gradient-glow: radial-gradient(ellipse, rgba(255, 128, 0, 0.15) 0%, transparent 70%);

  /* Spacing */
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
  --container-padding: clamp(24px, 4vw, 80px);
  --grid-columns: 12;
  --grid-gutter: 24px;

  /* Section */
  --section-padding-desktop: 120px;
  --section-padding-tablet: 80px;
  --section-padding-mobile: 60px;

  /* Nav */
  --nav-height: 80px;
  --nav-height-mobile: 64px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-full: 50%;

  /* Shadows */
  --shadow-text: 0 2px 40px rgba(0, 0, 0, 0.5);

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-snappy: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0, 0, 0.2, 1);

  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-page: 400ms;
  --duration-reveal: 600ms;
}
```
