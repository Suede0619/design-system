# Raycast Design System
**Site:** raycast.com
**Award:** Awwwards Site of the Day 2024
**Category:** Developer Tools — Sleek Dark
**Design DNA:** Command palette aesthetic, glass-morphism, precision dark UI

---

## 1. Overview

Raycast's site embodies the product itself: a precision instrument for developers who live at the keyboard. Every design decision signals speed, control, and intelligence. The visual language is dark-first, not dark-mode — the `#0A0A0A` near-black background is the canvas, not a concession. Glass-morphism surfaces float above it like UI panels in a high-end IDE.

The overarching motif is the **command palette** — a modal, focused, keyboard-driven interface metaphor that bleeds from product into marketing. Interactive UI mockups appear suspended in three-dimensional space with subtle perspective transforms, inviting the viewer to reach in and use them. Keyboard shortcut badges rendered in monospace type reinforce the developer-native audience.

This is a dark UI masterclass: intentional depth through layering, not decoration. Every glow, blur, and gradient earns its place by simulating real interface depth. The result feels like touring the inside of a beautifully engineered machine.

**Core Personality:** Precise. Fast. Dark. Developer-native. Quietly premium.

---

## 2. Typography

### Font Family
- **Primary:** Inter — the workhorse of modern developer UIs
- **Monospace:** JetBrains Mono (keyboard badges, code snippets, shortcut labels)
- **Fallback stack:** `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

### Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `--font-regular` | 400 | Body copy, descriptions |
| `--font-medium` | 500 | UI labels, nav items, captions |
| `--font-semibold` | 600 | Headings, CTAs, feature titles |

### Scale
| Role | Size (px) | Size (rem) | Line-height | Letter-spacing |
|------|-----------|------------|-------------|----------------|
| Display XL | 72px | 4.5rem | 1.05 | -0.04em |
| Display L | 56px | 3.5rem | 1.08 | -0.03em |
| Heading 1 | 40px | 2.5rem | 1.15 | -0.02em |
| Heading 2 | 28px | 1.75rem | 1.25 | -0.015em |
| Heading 3 | 20px | 1.25rem | 1.35 | -0.01em |
| Body L | 18px | 1.125rem | 1.7 | 0em |
| Body M | 16px | 1rem | 1.65 | 0em |
| Body S | 14px | 0.875rem | 1.6 | 0.01em |
| Caption | 12px | 0.75rem | 1.5 | 0.02em |
| Kbd Badge | 11px | 0.6875rem | 1.0 | 0.05em |

### Typography Rules
- Negative letter-spacing on all display and heading sizes — tighter = premium
- Body text sits at `#ABABAB` on dark bg for comfortable reading contrast
- Keyboard badges use `JetBrains Mono` at 11px with `font-feature-settings: 'kern' 1`
- Never exceed 65 characters per line in body text (reading comfort)
- `font-smoothing: antialiased` mandatory on dark backgrounds

---

## 3. Color Palette

### Core Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | `#0A0A0A` | 10, 10, 10 | Page background, deepest layer |
| Surface 1 | `#111111` | 17, 17, 17 | Card backgrounds, elevated panels |
| Surface 2 | `#161616` | 22, 22, 22 | Hover states on cards |
| Surface 3 | `#1C1C1C` | 28, 28, 28 | Input backgrounds, nested elements |
| Border Subtle | `#222222` | 34, 34, 34 | Dividers, card outlines |
| Border Default | `#333333` | 51, 51, 51 | Active borders, focused inputs |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#FFFFFF` | Headlines, primary content |
| Text Secondary | `#ABABAB` | Body copy, descriptions |
| Text Tertiary | `#666666` | Captions, metadata, disabled |
| Text Inverted | `#0A0A0A` | Text on light/colored backgrounds |

### Brand Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Purple | `#7C3AED` | 124, 58, 237 | Primary brand, key CTAs |
| Violet | `#8B5CF6` | 139, 92, 246 | Hover states, gradients, glow source |
| Blue | `#3B82F6` | 59, 130, 246 | Secondary accent, links, info states |
| Purple Dim | `#4C1D95` | 76, 29, 149 | Subtle backgrounds, badge fills |

### Glass / Alpha Colors
| Name | Value | Usage |
|------|-------|-------|
| Glass Surface | `rgba(255,255,255,0.05)` | Glass card backgrounds |
| Glass Border | `rgba(255,255,255,0.08)` | Glass card borders |
| Glass Border Hover | `rgba(255,255,255,0.14)` | Glass hover borders |
| Purple Glow | `rgba(124,58,237,0.15)` | Glow behind purple elements |
| Violet Glow | `rgba(139,92,246,0.25)` | Stronger accent glow |
| Blue Glow | `rgba(59,130,246,0.12)` | Info/link glow |

### Semantic Colors
| Role | Hex | Usage |
|------|-----|-------|
| Success | `#10B981` | Completion states |
| Warning | `#F59E0B` | Caution indicators |
| Error | `#EF4444` | Destructive actions, errors |
| Info | `#3B82F6` | Informational states |

---

## 4. Layout System

### Container
```
Max-width:    1120px
Padding (desktop): 0 48px
Padding (tablet):  0 32px
Padding (mobile):  0 20px
```

### Breakpoints
| Name | Min-width | Max-width |
|------|-----------|-----------|
| Mobile | 0 | 639px |
| Tablet | 640px | 1023px |
| Desktop | 1024px | 1279px |
| Wide | 1280px | — |

### Grid
- **Desktop:** 12-column, 24px gap
- **Tablet:** 8-column, 20px gap
- **Mobile:** 4-column, 16px gap

### Spacing Scale (8px base)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro gaps, badge padding |
| `--space-2` | 8px | Icon spacing, tight padding |
| `--space-3` | 12px | Component internal padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | Card padding (small) |
| `--space-6` | 24px | Section sub-spacing |
| `--space-8` | 32px | Card padding, grid gaps |
| `--space-10` | 40px | Section breathing room |
| `--space-12` | 48px | Major section padding |
| `--space-16` | 64px | Hero padding |
| `--space-20` | 80px | Section separation |
| `--space-24` | 96px | Feature section spacing |
| `--space-32` | 128px | Hero to next section |

### Section Rhythm
- Hero section: `padding-block: 120px 80px`
- Feature sections: `padding-block: 80px`
- Final CTA section: `padding-block: 96px`

---

## 5. Navigation

### Structure
Fixed top navigation bar, `64px` tall, with `backdrop-filter: blur(12px)` and `background: rgba(10,10,10,0.85)`. Creates depth without blocking content.

### Nav Bar
```
Height:         64px
Background:     rgba(10,10,10,0.85)
Border-bottom:  1px solid rgba(255,255,255,0.06)
Backdrop-filter: blur(12px)
Position:       fixed, top 0, full-width
Z-index:        100
```

### Nav Items
```
Font:         Inter 500, 14px
Color:        #ABABAB
Hover color:  #FFFFFF
Transition:   color 150ms ease
Spacing:      32px between items
```

### Logo
- Raycast logomark in white
- `height: 20px` — deliberately compact

### Primary CTA (Nav)
- "Download" button: glass variant, `rgba(255,255,255,0.08)` background
- Border: `1px solid rgba(255,255,255,0.12)`
- Hover: `background: rgba(255,255,255,0.14)`
- Radius: `8px`, padding: `8px 16px`

### Mobile Nav
- Hamburger icon at `24px`
- Drawer slides from right, full-height
- `backdrop-filter: blur(20px)` on overlay

---

## 6. Buttons

### Primary Button
```css
background:    linear-gradient(135deg, #7C3AED, #8B5CF6);
color:         #FFFFFF;
font:          Inter 600, 15px;
padding:       12px 24px;
border-radius: 10px;
border:        none;
box-shadow:    0 0 20px rgba(124,58,237,0.4);
transition:    all 200ms ease;

/* Hover */
background:    linear-gradient(135deg, #8B5CF6, #A78BFA);
box-shadow:    0 0 32px rgba(139,92,246,0.5);
transform:     translateY(-1px);
```

### Secondary Button
```css
background:    rgba(255,255,255,0.06);
color:         #FFFFFF;
font:          Inter 500, 15px;
padding:       12px 24px;
border-radius: 10px;
border:        1px solid rgba(255,255,255,0.1);
transition:    all 200ms ease;

/* Hover */
background:    rgba(255,255,255,0.10);
border-color:  rgba(255,255,255,0.18);
```

### Ghost Button
```css
background:    transparent;
color:         #ABABAB;
font:          Inter 500, 14px;
padding:       10px 20px;
border-radius: 8px;
border:        1px solid rgba(255,255,255,0.06);
transition:    all 150ms ease;

/* Hover */
color:         #FFFFFF;
border-color:  rgba(255,255,255,0.12);
background:    rgba(255,255,255,0.04);
```

### Keyboard Badge Button (Unique to Raycast)
```css
background:    rgba(255,255,255,0.06);
color:         #ABABAB;
font:          JetBrains Mono 400, 11px;
padding:       2px 6px;
border-radius: 4px;
border:        1px solid rgba(255,255,255,0.1);
letter-spacing: 0.05em;
```

### Sizes
| Size | Padding | Font | Radius |
|------|---------|------|--------|
| Large | 16px 32px | 16px | 12px |
| Default | 12px 24px | 15px | 10px |
| Small | 8px 16px | 13px | 8px |
| XSmall | 4px 10px | 12px | 6px |

---

## 7. Cards & Containers

### Glass Card (Primary)
```css
background:       rgba(255,255,255,0.05);
border:           1px solid rgba(255,255,255,0.08);
border-radius:    16px;
backdrop-filter:  blur(12px);
-webkit-backdrop-filter: blur(12px);
padding:          28px;
```

### Feature Card
```css
background:    #111111;
border:        1px solid #222222;
border-radius: 16px;
padding:       32px;
transition:    border-color 200ms ease, box-shadow 200ms ease;

/* Hover */
border-color:  rgba(124,58,237,0.3);
box-shadow:    0 0 24px rgba(124,58,237,0.08);
```

### Command Palette Card (Hero Motif)
```css
background:    #111111;
border:        1px solid #2A2A2A;
border-radius: 12px;
box-shadow:    0 32px 80px rgba(0,0,0,0.6),
               0 0 0 1px rgba(255,255,255,0.04);
overflow:      hidden;
```

### Stat Card
```css
background:    rgba(255,255,255,0.03);
border:        1px solid rgba(255,255,255,0.06);
border-radius: 12px;
padding:       24px;
text-align:    center;
```

### Highlight Strip
```css
background:    linear-gradient(90deg, rgba(124,58,237,0.1), rgba(59,130,246,0.1));
border-top:    1px solid rgba(124,58,237,0.2);
border-bottom: 1px solid rgba(59,130,246,0.2);
padding:       12px 0;
```

---

## 8. Forms & Inputs

### Text Input
```css
background:    #161616;
border:        1px solid #2A2A2A;
border-radius: 10px;
color:         #FFFFFF;
font:          Inter 400, 15px;
padding:       12px 16px;
outline:       none;
transition:    border-color 150ms ease, box-shadow 150ms ease;

/* Focus */
border-color:  #7C3AED;
box-shadow:    0 0 0 3px rgba(124,58,237,0.15);

/* Placeholder */
color:         #555555;
```

### Search / Command Input
The signature UI element — mimics the product's command bar:
```css
background:    #111111;
border:        1px solid #333333;
border-radius: 12px;
padding:       14px 16px 14px 44px; /* space for search icon */
font:          Inter 400, 16px;
color:         #FFFFFF;
box-shadow:    0 8px 32px rgba(0,0,0,0.4);

/* Icon */
position:      absolute;
left:          16px;
color:         #555555;
```

### Label
```css
font:    Inter 500, 13px;
color:   #888888;
margin-bottom: 6px;
letter-spacing: 0.02em;
text-transform: uppercase;
```

### Select
Same visual treatment as text input, with custom dropdown arrow in `#ABABAB`.

### Checkbox / Toggle
- Toggle: `40px × 22px`, purple fill when active (`#7C3AED`)
- Track: `#2A2A2A` when off
- Transition: `200ms ease` all
- Thumb: white circle, `18px`, drop shadow

---

## 9. Images & Media

### Product Screenshots (UI Mockups)
The defining visual device — screenshots of Raycast UI rendered at perspective angles:
```css
transform:     perspective(1000px) rotateY(-8deg) rotateX(4deg);
border-radius: 16px;
box-shadow:    0 48px 120px rgba(0,0,0,0.8),
               0 0 0 1px rgba(255,255,255,0.06);
```

### Floating Layer Effect
Multiple UI panels stacked with z-axis offset:
```
Layer 1 (back):   translateZ(0) scale(0.92) opacity(0.6)
Layer 2 (mid):    translateZ(20px) scale(0.96)
Layer 3 (front):  translateZ(40px)
```

### Glow Backlight
Behind hero screenshots, radial gradient creating a color "halo":
```css
background:    radial-gradient(ellipse 70% 50% at 50% 50%,
               rgba(124,58,237,0.2) 0%,
               rgba(59,130,246,0.1) 50%,
               transparent 100%);
filter:        blur(40px);
```

### Extension / Integration Icons
- `40px × 40px` rounded square containers, `10px` radius
- Background: `rgba(255,255,255,0.06)`
- Icon: color on dark, `24px` size

### Video / Animation Containers
```css
border-radius: 20px;
overflow:      hidden;
box-shadow:    0 40px 100px rgba(0,0,0,0.7);
border:        1px solid rgba(255,255,255,0.08);
```

---

## 10. Animation & Motion

### Timing Functions
```css
--ease-out-expo:  cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:    cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);  /* subtle overshoot */
--ease-linear:    linear;
```

### Duration Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--dur-instant` | 100ms | Micro-interactions |
| `--dur-fast` | 150ms | Hover transitions |
| `--dur-normal` | 200ms | Standard transitions |
| `--dur-medium` | 300ms | Card reveals, dropdowns |
| `--dur-slow` | 500ms | Section enters, large reveals |
| `--dur-crawl` | 800ms | Floating animations |

### Scroll-triggered Reveals
```css
/* Initial state */
opacity: 0;
transform: translateY(24px);

/* Triggered state */
opacity: 1;
transform: translateY(0);
transition: opacity 500ms var(--ease-out-expo),
            transform 500ms var(--ease-out-expo);
```

### Floating Animation (UI Mockups)
```css
@keyframes float {
  0%, 100% { transform: perspective(1000px) rotateY(-8deg) rotateX(4deg) translateY(0); }
  50%       { transform: perspective(1000px) rotateY(-8deg) rotateX(4deg) translateY(-12px); }
}
animation: float 6s ease-in-out infinite;
```

### Glow Pulse
```css
@keyframes glow-pulse {
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.7; }
}
animation: glow-pulse 4s ease-in-out infinite;
```

### Shimmer (Loading / Skeleton)
```css
@keyframes shimmer {
  from { background-position: -200% center; }
  to   { background-position: 200% center; }
}
background: linear-gradient(90deg,
  rgba(255,255,255,0.03) 0%,
  rgba(255,255,255,0.08) 50%,
  rgba(255,255,255,0.03) 100%);
background-size: 200% auto;
animation: shimmer 2s linear infinite;
```

### Command Palette Appear
```css
@keyframes palette-in {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(-8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
animation: palette-in 200ms var(--ease-out-expo);
```

---

## 11. Icons & Decorative Elements

### Icon System
- **Style:** Lucide icons (or custom matching stroke style)
- **Stroke width:** 1.5px — deliberate, not chunky
- **Sizes:** 14px / 16px / 20px / 24px
- **Color:** Inherits text color or explicit `#ABABAB`

### Keyboard Shortcut Badges
The signature decorative element — represents keyboard-first UX:
```html
<kbd>⌘K</kbd>
```
```css
kbd {
  display:        inline-flex;
  align-items:    center;
  font-family:    JetBrains Mono, monospace;
  font-size:      11px;
  color:          #888888;
  background:     rgba(255,255,255,0.06);
  border:         1px solid rgba(255,255,255,0.1);
  border-radius:  4px;
  padding:        2px 6px;
  line-height:    1;
}
```

### Gradient Orbs (Background Decoration)
Large, blurred radial gradients anchored to sections:
- Purple orb: `radial-gradient(circle, rgba(124,58,237,0.15), transparent 60%)`, `400px × 400px`
- Blue orb: `radial-gradient(circle, rgba(59,130,246,0.10), transparent 60%)`, `300px × 300px`
- Both: `filter: blur(60px)`, `pointer-events: none`, `position: absolute`

### Grid Dots Pattern
Subtle dot grid as background texture on hero:
```css
background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
background-size:  32px 32px;
opacity:          0.3;
```

### Dividers
```css
border: none;
height: 1px;
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
```

### Status Indicators
- Active: `#10B981` dot, `6px`, pulsing animation
- Inactive: `#555555` dot, `6px`

---

## 12. Unique Signature

Raycast's design is defined by the **command palette as aesthetic language**. The product IS the UI — and the marketing site makes you feel like you're already inside it.

**Five hallmarks:**
1. **Glass panels with purple glow** — not decorative, but structural. Every floating card traces back to the command palette.
2. **Keyboard shortcut badges everywhere** — even in hero copy, they appear inline, saying "this is built for people like you."
3. **Perspective-shifted screenshots** — product UI floating in 3D space, casting shadows onto the dark background below.
4. **Negative-tracked display type** — headlines kerned so tightly they feel engineered, not set.
5. **Radical restraint in saturation** — the purple and blue pop precisely BECAUSE everything else is neutral. One touch of color at a time.

If a page feels "Raycast," it's because you can almost hear the `⌘K` keystroke.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* === COLORS === */
  /* Background */
  --color-bg:          #0A0A0A;
  --color-surface-1:   #111111;
  --color-surface-2:   #161616;
  --color-surface-3:   #1C1C1C;

  /* Borders */
  --color-border-subtle:  #222222;
  --color-border-default: #333333;

  /* Text */
  --color-text-primary:   #FFFFFF;
  --color-text-secondary: #ABABAB;
  --color-text-tertiary:  #666666;
  --color-text-inverted:  #0A0A0A;

  /* Brand */
  --color-purple:      #7C3AED;
  --color-violet:      #8B5CF6;
  --color-blue:        #3B82F6;
  --color-purple-dim:  #4C1D95;

  /* Glass */
  --glass-bg:            rgba(255,255,255,0.05);
  --glass-border:        rgba(255,255,255,0.08);
  --glass-border-hover:  rgba(255,255,255,0.14);
  --glow-purple:         rgba(124,58,237,0.15);
  --glow-violet:         rgba(139,92,246,0.25);
  --glow-blue:           rgba(59,130,246,0.12);

  /* Semantic */
  --color-success:  #10B981;
  --color-warning:  #F59E0B;
  --color-error:    #EF4444;
  --color-info:     #3B82F6;

  /* === TYPOGRAPHY === */
  --font-sans:  Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono:  'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;

  --font-regular:  400;
  --font-medium:   500;
  --font-semibold: 600;

  --text-display-xl: 4.5rem;    /* 72px */
  --text-display-l:  3.5rem;    /* 56px */
  --text-h1:         2.5rem;    /* 40px */
  --text-h2:         1.75rem;   /* 28px */
  --text-h3:         1.25rem;   /* 20px */
  --text-body-l:     1.125rem;  /* 18px */
  --text-body-m:     1rem;      /* 16px */
  --text-body-s:     0.875rem;  /* 14px */
  --text-caption:    0.75rem;   /* 12px */
  --text-kbd:        0.6875rem; /* 11px */

  /* === SPACING === */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* === LAYOUT === */
  --container-max:       1120px;
  --container-padding:   48px;
  --grid-cols:           12;
  --grid-gap:            24px;

  /* === BORDERS === */
  --radius-sm:    4px;
  --radius-md:    8px;
  --radius-lg:    12px;
  --radius-xl:    16px;
  --radius-2xl:   20px;

  /* === SHADOWS === */
  --shadow-sm:    0 4px 16px rgba(0,0,0,0.3);
  --shadow-md:    0 8px 32px rgba(0,0,0,0.5);
  --shadow-lg:    0 32px 80px rgba(0,0,0,0.6);
  --shadow-xl:    0 48px 120px rgba(0,0,0,0.8);
  --shadow-glow:  0 0 24px rgba(124,58,237,0.3);

  /* === ANIMATION === */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1);

  --dur-instant: 100ms;
  --dur-fast:    150ms;
  --dur-normal:  200ms;
  --dur-medium:  300ms;
  --dur-slow:    500ms;
  --dur-crawl:   800ms;

  /* === Z-INDEX === */
  --z-base:    0;
  --z-raised:  10;
  --z-modal:   50;
  --z-nav:     100;
  --z-tooltip: 200;
}
```
