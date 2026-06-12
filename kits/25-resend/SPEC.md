# Resend — Design System

## 1. Overview

- **Site:** resend.com
- **URL:** https://resend.com
- **What they do:** Email API for developers. Transactional and marketing email infrastructure built for modern engineering teams. Created by the team behind React Email.
- **Awards:** Widely cited as best-in-class developer tool design; Product Hunt #1; design inspiration across developer tooling vertical
- **Aesthetic:** Pure-dark developer aesthetic with warm orange accent. Minimal, precise, confident. Code-first: every section is organized like a terminal or documentation page. Zero decoration — every element earns its place.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Inter" — variable, geometric grotesque
- **Fallback:** system-ui, -apple-system, sans-serif
- **Weight:** 600–700 for display, 400–500 for body
- **Size range:** Hero: clamp(2.5rem, 5vw, 4rem); H2: clamp(1.5rem, 3vw, 2.25rem)
- **Letter-spacing:** -0.02em on headings, 0 on body
- **Line-height:** 1.1 on display, 1.6 on body

### Code / Mono Font
- **Family:** "Geist Mono", "JetBrains Mono", "Fira Code", monospace
- **Usage:** All code blocks, inline code, terminal snippets, API keys

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| h1 | clamp(2.5rem, 5vw, 4rem) | 700 | Hero, tight tracking |
| h2 | clamp(1.5rem, 3vw, 2.25rem) | 600 | Section headers |
| h3 | 1.25rem | 600 | Feature subheads |
| body | 1rem | 400 | 16px, 1.6 line-height |
| code | 0.875rem | 400 | Mono, dark bg block |
| caption | 0.8125rem | 500 | Labels, status pills |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Void | `#000000` | True black background |
| Surface Dark | `#0A0A0A` | Card surfaces on black |
| Border Dark | `#1A1A1A` | Card borders, dividers |
| Border Mid | `#262626` | Secondary borders |
| Resend Orange | `#FF4D00` | Primary brand accent, CTA |
| Orange Muted | `#FF6A2A` | Hover state, icon fills |
| White Pure | `#FFFFFF` | Headings, primary text |
| White Secondary | `rgba(255,255,255,0.6)` | Body copy on dark |
| White Muted | `rgba(255,255,255,0.35)` | Placeholders, captions |

### Code Block Colors
| Name | Hex | Usage |
|------|-----|-------|
| Code BG | `#111111` | Syntax block background |
| Code Border | `#222222` | Block border |
| Syntax Orange | `#FF8C42` | String literals |
| Syntax Blue | `#79B8FF` | Variables, imports |
| Syntax Green | `#85E89D` | Keywords |
| Syntax Purple | `#B392F0` | Functions |

### Gradients
- **Orange glow:** `radial-gradient(ellipse at 50% -20%, rgba(255, 77, 0, 0.15) 0%, transparent 60%)`
- **Card shimmer:** `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 100%)`

---

## 4. Layout System

### Container
- **Max-width:** 1100px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Desktop 768px+

### Section Spacing
- **Vertical padding:** 80px desktop, 56px tablet, 40px mobile
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96

### Layout Patterns
- Centered single-column hero with code snippet below
- 2-column feature: text left, code/terminal mockup right
- 3-column SDK/language grid
- Full-width pricing table
- Docs-adjacent navigation pattern: fixed left sidebar + main content

---

## 5. Navigation

- **Style:** Transparent, sticky, extremely minimal
- **Height:** 56px
- **Background:** `rgba(0,0,0,0.85)` with `backdrop-filter: blur(12px)` on scroll
- **Logo:** Wordmark "Resend" in white, no icon
- **Links:** 14px, 400 weight, `rgba(255,255,255,0.65)` → white on hover
- **CTA in Nav:** Small filled orange button "Get Started" right-aligned
- **Mobile:** Collapsing hamburger sheet, stacked links

---

## 6. Buttons

### Primary Button
- **Background:** `#FF4D00`
- **Text:** White, 14px, 600 weight
- **Padding:** 10px 20px
- **Border-radius:** 6px
- **Hover:** `#FF6A2A`, slight brightness increase
- **Shadow:** `0 0 20px rgba(255, 77, 0, 0.35)`

### Secondary Button
- **Background:** transparent
- **Border:** 1px solid `#262626`
- **Text:** `rgba(255,255,255,0.8)`, 14px, 500
- **Hover:** border `#404040`, bg `rgba(255,255,255,0.04)`

### Icon Button
- 32×32px, border `#1A1A1A`, icon in `rgba(255,255,255,0.6)`

---

## 7. Cards & Components

### Feature Card
- **Background:** `#0A0A0A`
- **Border:** 1px solid `#1A1A1A`
- **Border-radius:** 10px
- **Padding:** 24px
- **Hover:** Border → `#333`, subtle orange glow on corner

### Code Block
- **Background:** `#111111`
- **Border:** 1px solid `#222222`
- **Border-radius:** 8px
- **Padding:** 20px 24px
- **Font:** Geist Mono, 13px
- **Top bar:** Language pill + copy button

### SDK Pill / Language Badge
- Small rounded pill, `#161616` background, border `#2A2A2A`
- Logo icon + language name, 13px

### Status / Badge
- `#FF4D00` background at 15% opacity, `#FF6A2A` text
- 4px border-radius, 11px font, 500 weight

---

## 8. Motion & Animation

### Page Load
- Hero text fades up from Y:12px, 0.4s ease-out
- Code block animates in 80ms after heading

### Scroll Animations
- Feature sections: subtle fade-in, no translate (respects reduced motion)
- Syntax highlighting: characters appear left-to-right in 300ms on load

### Micro-interactions
- Button hover: 120ms, color shift only — no scale
- Code copy button: checkmark icon swap at 200ms
- Nav link: 100ms underline slide-in from left

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Durations: 120ms (micro), 200ms (hover), 300ms (reveal)

---

## 9. Layout Strategy

**Developer-first, docs-adjacent.** The homepage reads like a documentation index — clear, dense, no fluff. Navigation mirrors an API reference structure. Every visual is a code snippet, a terminal, or a live email preview. The orange accent is deployed sparingly: only on CTAs and key feature labels. Everything else is white text on true black.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** Resend designs its marketing site exactly like its product — pure developer utility with zero visual noise. The orange accent is so reserved that when it appears, it reads as a signal, not decoration. Code blocks are the hero visuals. Typography does all the heavy lifting. This restraint communicates: *we trust that you understand the product; we don't need to sell it to you.*

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "Geist Mono", "JetBrains Mono", "Fira Code", monospace;

  --font-size-hero: clamp(2.5rem, 5vw, 4rem);
  --font-size-h1: clamp(2rem, 4vw, 3rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.25rem);
  --font-size-h3: 1.25rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-code: 0.8125rem;
  --font-size-caption: 0.8125rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.1;
  --line-height-normal: 1.6;
  --line-height-code: 1.7;

  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;

  /* Colors */
  --color-bg: #000000;
  --color-surface: #0A0A0A;
  --color-border: #1A1A1A;
  --color-border-mid: #262626;
  --color-border-hover: #333333;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.6);
  --color-text-muted: rgba(255, 255, 255, 0.35);

  --color-accent: #FF4D00;
  --color-accent-hover: #FF6A2A;
  --color-accent-glow: rgba(255, 77, 0, 0.15);
  --color-accent-glow-button: rgba(255, 77, 0, 0.35);

  /* Code */
  --color-code-bg: #111111;
  --color-code-border: #222222;
  --color-syntax-string: #FF8C42;
  --color-syntax-var: #79B8FF;
  --color-syntax-keyword: #85E89D;
  --color-syntax-function: #B392F0;
  --color-syntax-comment: rgba(255,255,255,0.35);

  /* Gradients */
  --gradient-hero-glow: radial-gradient(ellipse at 50% -20%, rgba(255, 77, 0, 0.15) 0%, transparent 60%);
  --gradient-card-shimmer: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 100%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Layout */
  --container-max: 1100px;
  --container-padding: clamp(16px, 4vw, 48px);
  --section-padding: 80px;
  --section-padding-mobile: 40px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
  --radius-xl: 14px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 1px 8px rgba(0, 0, 0, 0.4);
  --shadow-button-accent: 0 0 20px rgba(255, 77, 0, 0.35);
  --shadow-code: 0 0 0 1px #222222;

  /* Nav */
  --nav-height: 56px;
  --nav-bg: rgba(0, 0, 0, 0.85);
  --nav-blur: 12px;

  /* Transitions */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-micro: 120ms;
  --duration-hover: 200ms;
  --duration-reveal: 300ms;
}
```

---

## 12. Category Tags

`dark` `developer-tool` `email-api` `orange-accent` `code-forward` `minimal` `black-bg` `monospace` `SaaS`
