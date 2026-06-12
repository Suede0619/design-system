# Mother Design — Design System

## 1. Overview

- **Site:** motherdesign.com
- **URL:** https://motherdesign.com
- **What they do:** New York-based brand design agency. Designs new worlds in five senses and four dimensions. Capabilities span brand strategy, visual identity, art direction, verbal identity, packaging, motion, digital design, and campaigns. Works with brands at pivotal moments — launches, repositions, and transformations.
- **Awards:** Industry-recognized branding agency; regular AIGA, D&AD, and One Show entries; Awwwards recognition for digital design
- **Aesthetic:** Editorial luxury meets brand intelligence. The site reads like a well-curated design annual — refined, deliberate, and confident without being loud. Heavy on imagery quality. Typography with genuine editorial restraint. Minimal color, maximum presence.

---

## 2. Typography

### Primary Display Font
- **Family:** "Canela" (by Commercial Type) or similar editorial serif — high-contrast, slightly condensed luxury serif
- **Fallback:** "Georgia", "Times New Roman", serif
- **Weight:** 300 Light, 400 Regular — serifs carry weight without needing bold
- **Style:** Mixed case, generous leading, italic used for emphasis

### Secondary / UI Font
- **Family:** "Akkurat" or "Neue Haas Grotesk" — clean Swiss grotesque
- **Fallback:** "Helvetica Neue", system-ui, sans-serif
- **Weight:** 300–400, very light
- **Usage:** Navigation, labels, captions, UI text

### Heading Hierarchy
| Level | Size | Weight | Font | Notes |
|-------|------|--------|------|-------|
| Hero H1 | clamp(3rem, 7vw, 7.5rem) | 300–400 | Canela | Lowercase, elegant |
| H2 | clamp(2rem, 4vw, 4rem) | 300–400 | Canela | Section openers |
| H3 | 1.375–1.625rem | 400 | Canela Italic | Feature callouts |
| Body | 1rem | 300–400 | Akkurat | 17px, generous leading |
| Caption/Label | 0.75rem | 400 | Akkurat | All caps, wide tracking |
| Nav | 0.8125rem | 400 | Akkurat | Normal case, quiet |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Eggshell | `#F9F7F4` | Primary background |
| Warm White | `#F2EFE9` | Alt section backgrounds |
| Sand | `#E5DFD6` | Card backgrounds, hover states |
| Stone | `#B0A898` | Secondary text, borders |
| Warm Gray | `#6B6358` | Body text |
| Charcoal | `#2A2520` | Headings, primary text |
| Near Black | `#161412` | Dark sections |

### Accent (Rare)
| Name | Hex | Usage |
|------|-----|-------|
| Terra | `#C4704A` | Rare accent, campaign highlights |
| Dusty Rose | `#D4A5A0` | Occasional soft accent |

### Gradients
- None — color is delivered through photography and image curation, not gradient fills
- **Overlay:** `linear-gradient(180deg, transparent 50%, rgba(22,20,18,0.7) 100%)` on project images

---

## 4. Layout System

### Container
- **Max-width:** 1360px
- **Padding:** 0 clamp(24px, 5vw, 80px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Asymmetric:**  5/7, 4/8 and 6/6 splits used throughout case studies
- **Breakpoints:** Mobile 0-768px, Tablet 768-1200px, Desktop 1200px+

### Section Spacing
- **Vertical:** 120–160px desktop, 80px tablet, 56px mobile
- **Between projects:** 80–100px gaps
- **Spacing scale:** 8, 16, 24, 32, 48, 64, 80, 96, 120, 160

### Layout Patterns
- Full-bleed hero: single impactful image with minimal overlaid text
- Mixed-width project grid: large + small image combinations
- Pull-quote sections: single sentence across 7-column span
- 2-column editorial: image left, text right with serif heading
- Case study deep-dive: full-bleed alternating image/text

---

## 5. Navigation

- **Style:** Minimal fixed, transparent, nearly invisible
- **Height:** 60px
- **Background:** `rgba(249,247,244,0)` → `rgba(249,247,244,0.95)` blur on scroll
- **Logo:** "Mother Design" wordmark or "Mother" in Akkurat, small and precise
- **Links:** 13px, Akkurat, mixed case, `#6B6358` → `#2A2520`
- **CTA:** "Contact" text link, right-aligned
- **Mobile:** Full-screen overlay with large Canela menu items

---

## 6. Buttons

### Primary CTA
- Typographic link: "View work →" in 15px Akkurat
- Hover: color darkens from `#6B6358` to `#2A2520`, arrow shifts 4px
- No button container — pure editorial link convention

### Case Study CTA
- Small pill: border `#B0A898`, padding `8px 20px`, radius `100px`
- Text: 12px uppercase Akkurat
- Hover: background fills `#2A2520`, text inverts

### Form Submit
- `#2A2520` background, eggshell text, `border-radius: 4px`

---

## 7. Cards & Components

### Project Card (Image Dominant)
- **Aspect ratio:** 3:2 or 4:3
- **No border-radius** — editorial sharp corners
- **Image hover:** scale 1.0 → 1.02 at 800ms ease
- **Text below:** Client name in 13px uppercase, project descriptor in Canela italic

### Work Grid
- Masonry or irregular grid — no rigid uniformity
- Large "feature" projects span 7–8 columns
- Supporting projects: 4–5 columns each
- Varied heights create rhythm

### Process / Service Item
- Canela italic heading, body in Akkurat light
- Thin horizontal rule separating each
- No card border — just typography and rule

### Quote Block
- Canela italic, 2.5–4rem, dark text
- Attribution below in small Akkurat caps
- Generous top/bottom space

---

## 8. Motion & Animation

### Page Load
- Minimal: content fade in 0.6s, no translate animations
- Images load with blur-up (low-res → sharp)

### Scroll Animations
- Elements fade in with 0 Y offset (no slide) — pure opacity
- Images: subtle scale from 1.02 → 1 as they enter viewport (reveal effect)
- Clip-path reveals: image slides in from bottom clip

### Micro-interactions
- Image hover: very slow scale, 0.8s ease
- Nav link: underline slides in 200ms
- Cursor: custom circle cursor, small, expands on image hover to "View" CTA ring

### Page Transitions
- Smooth fade between pages, 400ms
- Project pages load with hero image drop-in 0.8s

### Easing
- Signature: `cubic-bezier(0.6, 0.01, 0.05, 0.95)` — deliberate, unhurried
- Durations: 200ms micro, 400ms standard, 800ms image transitions

---

## 9. Layout Strategy

**Image-forward editorial.** The work is the hero — impactful photography and brand deliverables fill the screen. Text is minimal, quietly confident. The layout doesn't compete with the work; it frames it. Every grid decision serves the imagery. This restraint communicates respect for the client's brand.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The typography system is a masterclass in restraint — Canela serif at light weight creates luxury without ostentation. Most branding agencies use bold to communicate confidence; Mother uses thin serifs and silence to communicate taste. The combination of warm cream backgrounds, high-quality photography, and barely-there typographic hierarchy creates a site that feels like an art book more than a website.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-display: "Canela", "Georgia", "Times New Roman", serif;
  --font-ui: "Akkurat", "Neue Haas Grotesk", "Helvetica Neue", system-ui, sans-serif;

  --font-size-hero: clamp(3rem, 7vw, 7.5rem);
  --font-size-h1: clamp(2.5rem, 5vw, 5.5rem);
  --font-size-h2: clamp(1.75rem, 3.5vw, 3.5rem);
  --font-size-h3: 1.5rem;
  --font-size-body: 1rem;
  --font-size-body-lg: 1.0625rem;
  --font-size-small: 0.8125rem;
  --font-size-caption: 0.75rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;

  --line-height-hero: 0.95;
  --line-height-tight: 1.15;
  --line-height-normal: 1.75;

  --letter-spacing-tight: -0.01em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.1em;
  --letter-spacing-label: 0.12em;

  /* Colors */
  --color-bg: #F9F7F4;
  --color-bg-warm: #F2EFE9;
  --color-bg-sand: #E5DFD6;
  --color-bg-dark: #161412;

  --color-text-primary: #2A2520;
  --color-text-body: #6B6358;
  --color-text-muted: #B0A898;
  --color-text-inverted: #F9F7F4;

  --color-border: #D9D3CB;
  --color-border-mid: #B0A898;

  --color-accent: #C4704A;
  --color-accent-soft: #D4A5A0;

  /* Gradients */
  --gradient-image-overlay: linear-gradient(180deg, transparent 50%, rgba(22,20,18,0.7) 100%);

  /* Spacing */
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --space-40: 160px;

  /* Layout */
  --container-max: 1360px;
  --container-padding: clamp(24px, 5vw, 80px);
  --section-padding: 160px;
  --section-padding-tablet: 80px;
  --section-padding-mobile: 56px;

  /* Border Radius */
  --radius-none: 0px;
  --radius-sm: 4px;
  --radius-pill: 100px;

  /* Shadows */
  --shadow-minimal: 0 2px 16px rgba(0, 0, 0, 0.04);
  --shadow-image: 0 24px 64px rgba(0, 0, 0, 0.08);

  /* Nav */
  --nav-height: 60px;
  --nav-blur: 12px;

  /* Transitions */
  --ease-deliberate: cubic-bezier(0.6, 0.01, 0.05, 0.95);
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 200ms;
  --duration-standard: 400ms;
  --duration-image: 800ms;
}
```

---

## 12. Category Tags

`light` `brand-agency` `editorial-serif` `luxury` `cream-palette` `image-forward` `Canela` `NYC` `portfolio` `restrained`
