# Mintlify — Design System

## 1. Overview

- **Site:** mintlify.com
- **URL:** https://mintlify.com
- **What they do:** Intelligent documentation platform for developer teams. Combines AI-powered doc generation, beautiful auto-generated docs sites, and built-in search. Powers docs for Anthropic, Cohere, Resend, and many fast-growing dev companies.
- **Awards:** Widely cited as the benchmark for modern docs tooling design; top Y Combinator alumni product
- **Aesthetic:** Dark primary with a signature mint/emerald green accent. Clean, structured, developer-forward with subtle warmth. The design communicates intelligence — orderly, precise, but not cold. Typography-first with excellent hierarchy.

---

## 2. Typography

### Display Font
- **Family:** "Plus Jakarta Sans" — geometric, slightly humanist sans-serif
- **Fallback:** "Inter", system-ui, sans-serif
- **Weight:** 700 for hero, 600 for section headers
- **Letter-spacing:** -0.03em on display, -0.02em on headings

### Body Font
- **Family:** "Inter" — variable geometric grotesque
- **Weight:** 400 regular, 500 medium
- **Size:** 16–17px base

### Code Font
- **Family:** "Geist Mono", "JetBrains Mono", monospace
- **Usage:** All code examples, CLI commands, file paths

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| h1 | clamp(2.75rem, 5.5vw, 4.5rem) | 700 | Tight, with line breaks |
| h2 | clamp(1.75rem, 3vw, 2.5rem) | 600 | Section titles |
| h3 | 1.375rem | 600 | Feature callouts |
| body | 1rem | 400 | 17px, 1.7 line-height |
| code | 0.875rem | 400 | Mono |
| label | 0.8125rem | 500 | Caps, spaced |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Void Black | `#0D0D0D` | Primary background |
| Surface Dark | `#111111` | Card background |
| Surface Mid | `#181818` | Elevated panels |
| Border Dark | `#1F1F1F` | Card/section borders |
| Border Muted | `#2A2A2A` | Dividers |
| Mint Green | `#00C4A0` | Primary brand accent |
| Mint Bright | `#00E5B8` | Hover states, glow |
| Mint Dark | `#009E80` | Pressed states |
| Mint Tint | `rgba(0, 196, 160, 0.1)` | Accent backgrounds |
| White | `#FFFFFF` | Headings |
| Off White | `rgba(255,255,255,0.85)` | Body copy |
| Muted White | `rgba(255,255,255,0.45)` | Secondary/captions |

### Light Mode (Docs site)
| Name | Hex | Usage |
|------|-----|-------|
| Docs BG | `#FFFFFF` | Main background |
| Sidebar BG | `#F8F9FA` | Left nav |
| Docs Text | `#1A1A1A` | Body copy |
| Docs Accent | `#00C4A0` | Links, active nav |

### Gradients
- **Hero glow:** `radial-gradient(ellipse at 60% -10%, rgba(0, 196, 160, 0.18) 0%, transparent 55%)`
- **Card accent edge:** `linear-gradient(135deg, rgba(0,196,160,0.12) 0%, transparent 60%)`
- **Shimmer text:** `linear-gradient(90deg, #FFFFFF 0%, #00C4A0 50%, #FFFFFF 100%)`

---

## 4. Layout System

### Container
- **Max-width:** 1152px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1024px, Desktop 1024px+

### Section Spacing
- **Vertical padding:** 96px desktop, 64px mobile
- **Feature gap:** 64–80px
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96

### Layout Patterns
- Full-width dark hero, centered text, animated docs screenshot below
- 2-column: text left, live code/docs preview right
- Bento-style feature grid: mixed 1×2, 2×1, and 1×1 cells
- Logo cloud / customer strip (light strip on dark)
- Testimonials: horizontal marquee

---

## 5. Navigation

- **Style:** Transparent → dark blur on scroll
- **Height:** 60px
- **Background scroll:** `rgba(13,13,13,0.9)` + `backdrop-filter: blur(16px)`
- **Border:** `border-bottom: 1px solid #1F1F1F` on scroll
- **Logo:** Mintlify leaf mark + wordmark in white
- **Links:** 14px, 400 weight, `rgba(255,255,255,0.65)` → white
- **CTA in Nav:** "Get Started Free" in mint green filled button
- **Mobile:** Sheet overlay, stacked items

---

## 6. Buttons

### Primary Button
- **Background:** `#00C4A0`
- **Text:** `#0D0D0D` (dark on mint), 14px, 600 weight
- **Padding:** 11px 22px
- **Border-radius:** 8px
- **Hover:** `#00E5B8`, `box-shadow: 0 0 24px rgba(0, 196, 160, 0.4)`
- **Active:** scale(0.98)

### Secondary Button
- **Background:** transparent
- **Border:** `1px solid #2A2A2A`
- **Text:** `rgba(255,255,255,0.75)`
- **Hover:** border `#404040`, bg `rgba(255,255,255,0.04)`

### Ghost Button
- Text link style, mint green `#00C4A0`, arrow → 4px right on hover

---

## 7. Cards & Components

### Bento Feature Card
- **Background:** `#111111`
- **Border:** `1px solid #1F1F1F`
- **Border-radius:** 16px
- **Padding:** 28px 32px
- **Hover:** border becomes `rgba(0,196,160,0.3)`, mint corner glow
- **Top accent:** thin 1px mint line at top edge on hover

### Code Preview Card
- Background: `#0D0D0D`, border `#1F1F1F`
- File tab strip in `#161616`
- Syntax highlighting with mint green for keywords
- Live preview toggle (code ↔ preview)

### Docs Nav (Left Sidebar)
- `#0E0E0E` background, 280px wide
- Active item: mint text + left border 2px `#00C4A0`
- Grouped sections with collapsible headings

### Customer Logo Strip
- `rgba(255,255,255,0.08)` logos at 70% opacity
- Marquee animation, 6-second cycle

---

## 8. Motion & Animation

### Page Load
- Hero headline: fade up 16px, 0.5s, stagger 80ms per word group
- Docs screenshot: reveals with clip-path from bottom, 0.8s

### Scroll Animations
- Bento cards: staggered Y:20px → 0, opacity 0→1
- Feature highlights: left/right alternating slides

### Micro-interactions
- Button mint glow: 200ms ease-out
- Code syntax: typing animation on hero code block
- Docs accordion: smooth height transition 250ms

### Signature Animation
- **Animated docs preview:** Live typing simulation showing docs being auto-generated from code comments — the product explaining itself

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Spring: `cubic-bezier(0.16, 1, 0.3, 1)`
- Durations: 150ms micro, 250ms hover, 400ms reveal, 800ms hero

---

## 9. Layout Strategy

**Docs-native structure.** The marketing site borrows the information architecture of a great docs site — hierarchical, scannable, with clear next steps. The bento grid allows diverse feature callouts without a rigid two-column march. Hero always shows the actual product in use. Mint green is used as a focused signal: links, CTAs, active states, key data.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** Mintlify makes documentation look aspirational. The dark premium aesthetic says "this isn't your enterprise docs tool" while the mint green communicates freshness and intelligence. The hero often shows actual customer docs rendered in their platform — not mockups, real products. The meta-message: if *we* care this much about presentation, so will your docs.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-display: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "Geist Mono", "JetBrains Mono", monospace;

  --font-size-hero: clamp(2.75rem, 5.5vw, 4.5rem);
  --font-size-h1: clamp(2rem, 4vw, 3rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.25rem);
  --font-size-h3: 1.375rem;
  --font-size-body: 1rem;
  --font-size-body-lg: 1.0625rem;
  --font-size-small: 0.875rem;
  --font-size-code: 0.875rem;
  --font-size-label: 0.8125rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.1;
  --line-height-normal: 1.7;
  --line-height-code: 1.65;

  --letter-spacing-display: -0.03em;
  --letter-spacing-heading: -0.02em;
  --letter-spacing-label: 0.06em;

  /* Colors */
  --color-bg: #0D0D0D;
  --color-surface: #111111;
  --color-surface-elevated: #181818;
  --color-border: #1F1F1F;
  --color-border-muted: #2A2A2A;
  --color-border-hover: #3A3A3A;

  --color-text-primary: #FFFFFF;
  --color-text-secondary: rgba(255, 255, 255, 0.85);
  --color-text-muted: rgba(255, 255, 255, 0.45);

  --color-accent: #00C4A0;
  --color-accent-bright: #00E5B8;
  --color-accent-dark: #009E80;
  --color-accent-tint: rgba(0, 196, 160, 0.1);
  --color-accent-glow: rgba(0, 196, 160, 0.4);
  --color-accent-border: rgba(0, 196, 160, 0.3);

  /* Gradients */
  --gradient-hero-glow: radial-gradient(ellipse at 60% -10%, rgba(0, 196, 160, 0.18) 0%, transparent 55%);
  --gradient-card-edge: linear-gradient(135deg, rgba(0,196,160,0.12) 0%, transparent 60%);
  --gradient-text-shimmer: linear-gradient(90deg, #FFFFFF 0%, #00C4A0 50%, #FFFFFF 100%);

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
  --container-max: 1152px;
  --container-padding: clamp(16px, 4vw, 48px);
  --section-padding: 96px;
  --section-padding-mobile: 64px;

  /* Border Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 2px 16px rgba(0, 0, 0, 0.4);
  --shadow-button-accent: 0 0 24px rgba(0, 196, 160, 0.4);
  --shadow-card-hover: 0 0 0 1px rgba(0, 196, 160, 0.3), 0 8px 32px rgba(0, 0, 0, 0.5);

  /* Nav */
  --nav-height: 60px;
  --nav-bg-scrolled: rgba(13, 13, 13, 0.9);
  --nav-blur: 16px;

  /* Transitions */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-micro: 150ms;
  --duration-hover: 250ms;
  --duration-reveal: 400ms;
  --duration-hero: 800ms;
}
```

---

## 12. Category Tags

`dark` `developer-docs` `green-accent` `SaaS` `AI-powered` `documentation` `bento-grid` `minimal-dark` `code-forward`
