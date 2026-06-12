# Railway — Design System

## 1. Overview

- **Site:** railway.com (formerly railway.app)
- **URL:** https://railway.com
- **What they do:** Infrastructure deployment platform. Connect your repo, Railway auto-configures and deploys everything. Visual canvas showing your entire stack, 100 Gbps private networking, preview environments per PR.
- **Awards:** Product Hunt #1 Product of the Day; widely recognized as the most beautiful infrastructure platform
- **Aesthetic:** Theatrical dark tech — deep near-black backgrounds with a signature magenta/violet canvas and glowing infrastructure graphs. Feels like mission control got a boutique design studio makeover.

---

## 2. Typography

### Display / Heading Font
- **Family:** "Geist" (Vercel's font) — or nearest equivalent clean grotesque
- **Fallback:** "Inter", system-ui, sans-serif
- **Weight:** 600–700 headings, 400 body
- **Size:** Hero: clamp(2.5rem, 5.5vw, 5rem)
- **Letter-spacing:** -0.02em headings

### Body
- **Family:** "Geist" / "Inter"
- **Weight:** 400
- **Size:** 15–16px
- **Line-height:** 1.6

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| h1 | clamp(2.5rem, 5.5vw, 5rem) | 700 | Split into bold stanzas |
| h2 | clamp(1.75rem, 3.5vw, 2.75rem) | 600 | |
| h3 | 1.375rem | 600 | |
| body | 1rem | 400 | |
| meta | 0.8125rem | 400 | |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Railway Black | `#0B0D0F` | Primary background |
| Surface Dark | `#161B22` | Cards, panels |
| Surface Mid | `#1C2128` | Elevated surfaces |
| Border Dark | `#30363D` | Borders and dividers |
| Railway Violet | `#7C3AED` | Primary accent, services |
| Railway Magenta | `#C026D3` | Secondary accent, glow |
| Terminal Green | `#22C55E` | Success, running states |
| Error Red | `#EF4444` | Error states |
| Yellow | `#EAB308` | Warning, deploying states |
| Text Primary | `#E6EDF3` | Primary text on dark |
| Text Muted | `#7D8590` | Secondary text |

### Background System
- **Primary:** `#0B0D0F`
- **Surface:** `#161B22`
- **Canvas (visual infra graph):** `#0D1117` with subtle dot grid at `rgba(255,255,255,0.04)`
- **Code blocks:** `#161B22`

### Gradients
- **Hero gradient glow:** `radial-gradient(ellipse at 40% -10%, rgba(124, 58, 237, 0.2) 0%, rgba(192, 38, 211, 0.1) 30%, transparent 60%)`
- **Canvas shimmer:** `linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)` for service node highlights
- **Deployment trail:** `linear-gradient(90deg, #7C3AED, #22C55E)` animated along deploy pipeline

---

## 4. Layout System

### Container
- **Max-width:** 1100px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 20px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1024px, Desktop 1024px+

### Section Spacing
- **Vertical padding:** 96px desktop, 64px tablet, 48px mobile
- **Spacing scale:** 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96

### Layout Patterns
- Hero: full-width dark with canvas preview embedded
- Feature sections: alternating text + canvas demo columns
- Stats row: horizontal strip of counter animations
- Architecture diagram: animated SVG flowchart of Railway topology
- "Alternatives to" comparison: logo badges in a strip

---

## 5. Navigation

- **Style:** Sticky, `#0B0D0F`, `border-bottom: 1px solid #30363D`
- **Height:** 56px
- **Logo:** Railway locomotive SVG (distinctive, iconic)
- **Links:** `#7D8590` → `#E6EDF3` on hover
- **CTA:** "Start deploying" — violet button
- **Font:** 13px, 500 weight

---

## 6. Buttons

### Primary
- **Background:** `#7C3AED`
- **Text:** White, 14px, 600 weight
- **Padding:** 10px 20px
- **Border-radius:** 6px
- **Hover:** `#6D28D9`, glow `0 0 16px rgba(124, 58, 237, 0.4)`

### Secondary
- **Background:** `#161B22`
- **Border:** 1px solid `#30363D`
- **Text:** `#E6EDF3`
- **Hover:** border `#7C3AED`

---

## 7. Cards & Components

### Service Card (Infrastructure Node)
- **Background:** `#161B22`
- **Border:** 1px solid `#30363D`
- **Border-radius:** 8px
- **Left accent:** 3px solid service-type color (violet for web, green for DB, etc.)
- **Status dot:** 8px circle in terminal green (#22C55E) for running

### Feature Card
- **Background:** `#161B22`
- **Border-radius:** 12px
- **Padding:** 32px
- **Icon:** 40px, monochrome, in service color
- **Hover:** border brightens to service-color at 40% opacity

### Canvas (Visual Stack Diagram)
- The hero's primary visual — a node graph of deployed services, connected with animated dashed lines
- **Background:** `#0D1117` with dot grid pattern
- Nodes: cards with status indicators
- **Connectors:** `stroke: #30363D; stroke-dasharray: 4 4` animated at 1s pace

---

## 8. Motion & Animation

### Signature Animation
- **Deployment pipeline:** Animated progress flowing from GitHub commit → build → deploy with color progression from violet to green
- **Canvas graph:** Service nodes subtly pulse, connections animate data flow
- **Counter numbers:** Real-time stats (51.3M deploys/month) increment live

### Scroll Animations
- Sections: fade-in translateY 24px, 400ms
- Feature callouts: stagger 80ms

### Hover
- Buttons: 150ms glow + color
- Cards: 200ms border color
- Nav links: 150ms color

### Easing
- `cubic-bezier(0.16, 1, 0.3, 1)` for spring-feel reveals
- `cubic-bezier(0.25, 0.1, 0.25, 1)` default
- Durations: 150ms micro, 300ms standard, 400ms reveal

---

## 9. What Makes This Design Distinctive

**The ONE thing:** The visual canvas — a live, interactive node graph showing your entire stack — embedded right into the marketing page. Infrastructure as art. The complexity of modern deployment is reframed as something you can literally see and navigate.

---

## 10. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-sans: "Geist", "Inter", system-ui, sans-serif;
  --font-mono: "Geist Mono", "JetBrains Mono", monospace;

  --font-size-hero: clamp(2.5rem, 5.5vw, 5rem);
  --font-size-h1: clamp(2rem, 4.5vw, 4rem);
  --font-size-h2: clamp(1.75rem, 3.5vw, 2.75rem);
  --font-size-h3: 1.375rem;
  --font-size-h4: 1.125rem;
  --font-size-body: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.8125rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.2;
  --line-height-normal: 1.6;
  --letter-spacing-tight: -0.02em;

  /* Colors */
  --color-bg: #0B0D0F;
  --color-bg-canvas: #0D1117;
  --color-bg-surface: #161B22;
  --color-bg-elevated: #1C2128;

  --color-border: #30363D;
  --color-border-subtle: #21262D;
  --color-border-strong: #484F58;

  --color-text-primary: #E6EDF3;
  --color-text-secondary: #8B949E;
  --color-text-muted: #7D8590;

  --color-accent-violet: #7C3AED;
  --color-accent-violet-hover: #6D28D9;
  --color-accent-magenta: #C026D3;
  --color-accent-glow: rgba(124, 58, 237, 0.25);

  --color-success: #22C55E;
  --color-warning: #EAB308;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Canvas / Graph */
  --canvas-dot: rgba(255, 255, 255, 0.04);
  --connector-color: #30363D;
  --service-web: #7C3AED;
  --service-db: #22C55E;
  --service-worker: #3B82F6;
  --service-cache: #EAB308;

  /* Gradients */
  --gradient-hero: radial-gradient(ellipse at 40% -10%, rgba(124, 58, 237, 0.2) 0%, rgba(192, 38, 211, 0.1) 30%, transparent 60%);
  --gradient-deploy: linear-gradient(90deg, #7C3AED, #22C55E);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Layout */
  --container-max: 1100px;
  --container-padding: clamp(16px, 4vw, 48px);
  --section-padding: 96px;

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 1px 4px rgba(0, 0, 0, 0.4);
  --shadow-elevated: 0 8px 24px rgba(0, 0, 0, 0.6);
  --shadow-violet-glow: 0 0 16px rgba(124, 58, 237, 0.4);

  /* Nav */
  --nav-height: 56px;
  --nav-bg: #0B0D0F;

  /* Transitions */
  --ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-micro: 150ms;
  --duration-standard: 300ms;
  --duration-reveal: 400ms;
}
```

---

## 12. Category Tags

`dark` `developer` `infrastructure` `violet` `canvas` `data-viz` `terminal` `graph-ui` `deploy`
