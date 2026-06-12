# Supabase — Design System

## 1. Overview

- **Site:** supabase.com
- **URL:** https://supabase.com
- **What they do:** Open-source Firebase alternative. Postgres database, authentication, storage, edge functions, and real-time subscriptions. The backend platform for developers who want control.
- **Awards:** GitHub star milestones (60K+ stars), widely recognized as one of the most design-forward developer platforms; Hacker News favorite
- **Aesthetic:** Confident dark mode with a signature electric green (#3ECF8E). Dense with code blocks, terminal aesthetics, and data flow diagrams. Feels like the terminal got a tasteful rebrand.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Custom Sans" / "Inter" (Variable) — clean, neutral
- **Weight:** 700 hero, 600 section heads
- **Size:** Hero: clamp(3rem, 6vw, 5rem); H2: clamp(2rem, 4vw, 3rem)
- **Letter-spacing:** -0.02em headings
- **Line-height:** 1.15 tight headings, 1.6 body

### Code / Mono Font
- **Family:** "JetBrains Mono", "Fira Code", "Menlo", monospace
- **Size:** 13–14px for inline code blocks
- **Used extensively** — code examples are core content

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| h1 | clamp(3rem, 6vw, 5rem) | 700 | White on dark |
| h2 | clamp(2rem, 4vw, 3rem) | 600 | Section anchors |
| h3 | 1.5rem | 600 | Feature callouts |
| h4 | 1.125rem | 600 | Card headers |
| body | 1rem | 400 | 16px, 1.6 line |
| code | 0.8125rem | 400 | Monospace |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Background Dark | `#1C1C1C` | Primary dark background |
| Surface | `#262626` | Cards, panels |
| Surface Raised | `#2A2A2A` | Elevated cards |
| Border | `#3E3E3E` | All borders |
| Supabase Green | `#3ECF8E` | Brand accent, CTAs, links |
| Green Muted | `#1A7A50` | Code string highlight background |
| Foreground White | `#EEEEEE` | Primary text |
| Foreground Muted | `#888888` | Secondary text |
| Brand Dark | `#161616` | Hero background |

### Extended Palette
| Name | Hex | Usage |
|------|-----|-------|
| Green 100 | `#DCFCE7` | Success light bg |
| Green 500 | `#22C55E` | Success icon |
| Green 600 | `#16A34A` | Darker green alt |
| Red | `#EF4444` | Danger/error |
| Yellow | `#F59E0B` | Warning |
| Blue | `#3B82F6` | Info |

### Background System
- **Dark (primary):** `#1C1C1C`
- **Hero (deepest):** `#0F0F0F` or `#161616`
- **Surfaces:** `#262626` (cards), `#2A2A2A` (elevated)
- **Code blocks:** `#1E1E1E` with syntax highlighting
- **Light mode:** `#FFFFFF` bg, `#F8FAFC` subtle (rarely used — dark is default)

### Text Colors
- **Primary:** `#EEEEEE`
- **Secondary:** `#AAAAAA`
- **Muted:** `#888888`
- **Brand/Link:** `#3ECF8E`
- **Code strings:** `#7EE787`
- **Code keywords:** `#FF7B72`
- **Code comments:** `#8B949E`

---

## 4. Layout System

### Container
- **Max-width:** 1200px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-640px, Tablet 640-1024px, Desktop 1024-1200px, Wide 1200px+

### Section Spacing
- **Section padding:** 96px (desktop), 64px (tablet), 48px (mobile)
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 80, 96

### Layout Patterns
- Full dark hero with animated particles or gradient mesh
- Feature grid: 2-up and 3-up with large code demos
- "Integrations" section: logo cloud with connecting lines animation
- Dashboard preview: Supabase studio screenshot with labeled callouts
- Testimonials: Full-width quote with company logo
- Stats bar: large numbers in a horizontal band

---

## 5. Navigation

- **Style:** Sticky, `#161616` background, `border-bottom: 1px solid #2A2A2A`
- **Height:** 60px
- **Logo:** Green Supabase diamond + "Supabase" wordmark
- **Links:** `#AAAAAA` → `#EEEEEE` on hover
- **CTA:** "Start your project" — green button
- **Font:** 13px, 400 weight

---

## 6. Buttons

### Primary Button
- **Background:** `#3ECF8E`
- **Text:** `#1C1C1C` (dark on green), 14px, 600 weight
- **Padding:** 10px 20px
- **Border-radius:** 6px
- **Hover:** `#47DBA0`, slight glow `0 0 16px rgba(62, 207, 142, 0.3)`

### Secondary Button
- **Background:** `#262626`
- **Border:** 1px solid `#3E3E3E`
- **Text:** `#EEEEEE`, 14px, 500 weight
- **Hover:** `#2A2A2A`, border lightens

### Ghost Button
- **Background:** transparent
- **Border:** 1px solid `rgba(255,255,255,0.1)`
- **Text:** `#AAAAAA`
- **Hover:** text `#EEEEEE`, border `rgba(255,255,255,0.2)`

---

## 7. Cards & Components

### Feature Card
- **Background:** `#262626`
- **Border:** 1px solid `#3E3E3E`
- **Border-radius:** 8px
- **Padding:** 24px–32px
- **Green accent line:** 2px top border in `#3ECF8E` on hover
- **Hover:** border color brightens, subtle shadow

### Code Block
- **Background:** `#1E1E1E`
- **Font:** JetBrains Mono, 13px
- **Border-radius:** 8px
- **Border:** 1px solid `#333333`
- **Header bar:** `#2A2A2A` with language label and copy button

### Terminal / Dashboard Preview
- Full-color Supabase Studio screenshot with shadow `0 24px 64px rgba(0,0,0,0.8)`
- Subtle green glow behind: `radial-gradient(ellipse, rgba(62,207,142,0.1) 0%, transparent 60%)`

---

## 8. Motion & Animation

### Signature Animation
- **Connection graph:** Animated SVG lines showing integrations connecting to Supabase central node
- **Particle field / starfield:** Subtle moving dots on hero background
- **Real-time data flow:** Numbers incrementing in dashboard preview to show "live" queries

### Scroll Animations
- Cards: fade-up 30px, 500ms, stagger 80ms
- Code blocks: typewriter-style reveal on first viewport entry

### Hover Micro-interactions
- Buttons: 150ms glow effect
- Cards: 200ms border brightening
- Integrations logos: 200ms scale(1.05) + color reveal

### Easing
- Default: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Durations: 150ms micro, 300ms hover, 500ms scroll reveal

---

## 9. What Makes This Design Distinctive

**The ONE thing:** That electric green `#3ECF8E` — singular, unmistakable, and technically legible on dark — used so consistently it has become a developer-culture icon. The moment you see that green, you know it's Supabase.

---

## 10. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", "Menlo", monospace;

  --font-size-hero: clamp(3rem, 6vw, 5rem);
  --font-size-h1: clamp(2.5rem, 5vw, 4rem);
  --font-size-h2: clamp(2rem, 4vw, 3rem);
  --font-size-h3: 1.5rem;
  --font-size-h4: 1.125rem;
  --font-size-body: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-code: 0.8125rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.15;
  --line-height-normal: 1.6;
  --letter-spacing-tight: -0.02em;

  /* Colors */
  --color-bg: #1C1C1C;
  --color-bg-deep: #0F0F0F;
  --color-bg-hero: #161616;
  --color-bg-surface: #262626;
  --color-bg-elevated: #2A2A2A;
  --color-bg-code: #1E1E1E;

  --color-border: #3E3E3E;
  --color-border-subtle: #2A2A2A;
  --color-border-strong: #555555;

  --color-text-primary: #EEEEEE;
  --color-text-secondary: #AAAAAA;
  --color-text-muted: #888888;

  --color-brand: #3ECF8E;
  --color-brand-hover: #47DBA0;
  --color-brand-glow: rgba(62, 207, 142, 0.2);
  --color-brand-text: #3ECF8E;

  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;
  --color-success: #22C55E;

  /* Code syntax */
  --code-keyword: #FF7B72;
  --code-string: #7EE787;
  --code-comment: #8B949E;
  --code-number: #79C0FF;
  --code-function: #D2A8FF;

  /* Gradients */
  --gradient-hero: radial-gradient(ellipse at 50% -20%, rgba(62, 207, 142, 0.12) 0%, transparent 60%);
  --gradient-glow: radial-gradient(ellipse, rgba(62, 207, 142, 0.1) 0%, transparent 60%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Layout */
  --container-max: 1200px;
  --container-padding: clamp(16px, 4vw, 48px);
  --section-padding: 96px;
  --section-padding-tablet: 64px;
  --section-padding-mobile: 48px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-elevated: 0 8px 32px rgba(0, 0, 0, 0.6);
  --shadow-screenshot: 0 24px 64px rgba(0, 0, 0, 0.8);
  --shadow-green-glow: 0 0 16px rgba(62, 207, 142, 0.3);

  /* Nav */
  --nav-height: 60px;
  --nav-bg: #161616;
  --nav-border: 1px solid #2A2A2A;

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-micro: 150ms;
  --duration-hover: 200ms;
  --duration-reveal: 500ms;
}
```

---

## 11. Category Tags

`dark` `developer` `open-source` `green-accent` `terminal` `data-heavy` `code-forward` `minimal-dark` `postgres`
