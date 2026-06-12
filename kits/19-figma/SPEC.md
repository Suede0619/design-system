# Figma Design System
**Site:** figma.com
**Award:** Webby Award Honoree (multiple years)
**Category:** Design Tools — Colorful & Playful
**Design DNA:** Bold geometric energy, gradient-forward, tool-as-canvas

---

## 1. Overview

Figma's website is a design tool advertising itself through design. It's a manifesto rendered in pixels: bold, colorful, geometric, and alive with motion. The site says — loudly — that design is joyful, collaborative, and expressive. Unlike the restrained refinement of most enterprise SaaS, Figma goes bold.

The palette is a three-color gradient spectacle: `#A259FF` → `#FF7262` → `#F24E1E`. These aren't accent colors — they're the brand itself, deployed with confidence across backgrounds, buttons, strokes, and illustrative elements. The white background lets the color sing.

Typography is set in **Whyte** — a round, chunky geometric sans-serif that communicates warmth and playfulness without sacrificing professionalism. Headings are large and bold. CTAs are black with white text (sharp contrast on white) or gradient-filled for maximum visual weight.

Interactive demos embedded directly in the page prove the product's value rather than just describing it. Rounded shapes, illustration-forward layouts, and generous white space complete a design vocabulary that's unmistakably Figma.

**Core Personality:** Bold. Expressive. Playful. Confident. Creative-native.

---

## 2. Typography

### Font Family
- **Primary:** Whyte — Klim Type Foundry's geometric sans, round and assertive
- **Fallback stack:** `'Whyte', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Monospace:** `'Whyte Mono', 'JetBrains Mono', 'Courier New', monospace`

### Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `--font-light` | 300 | Large display numbers, editorial accents |
| `--font-regular` | 400 | Body copy, descriptions |
| `--font-medium` | 500 | Nav items, labels, sub-headings |
| `--font-bold` | 700 | Headings, CTAs, feature titles |
| `--font-black` | 900 | Display hero text, key numbers |

### Scale
| Role | Size (px) | Size (rem) | Line-height | Letter-spacing |
|------|-----------|------------|-------------|----------------|
| Display XL | 80px | 5rem | 1.0 | -0.04em |
| Display L | 64px | 4rem | 1.05 | -0.03em |
| Heading 1 | 48px | 3rem | 1.1 | -0.02em |
| Heading 2 | 36px | 2.25rem | 1.2 | -0.015em |
| Heading 3 | 28px | 1.75rem | 1.25 | -0.01em |
| Heading 4 | 22px | 1.375rem | 1.35 | 0em |
| Body L | 20px | 1.25rem | 1.6 | 0em |
| Body M | 17px | 1.0625rem | 1.65 | 0em |
| Body S | 14px | 0.875rem | 1.55 | 0.01em |
| Caption | 12px | 0.75rem | 1.5 | 0.02em |

### Typography Rules
- Whyte's rounded shapes make even heavy-weight text approachable
- Display weights (700–900) with negative tracking for maximum graphic punch
- Body copy at 17px — generous, readable
- Text on colored backgrounds: always check contrast, use white (`#FFFFFF`) or very dark (`#1E1E1E`)
- Brand gradient can appear as text fill on large display headings: `background-clip: text`
- `font-smoothing: antialiased` throughout

---

## 3. Color Palette

### Core Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | `#FFFFFF` | 255, 255, 255 | Page background |
| Surface Light | `#F5F5F5` | 245, 245, 245 | Alternating sections, cards |
| Surface Alt | `#FAFAFA` | 250, 250, 250 | Subtle section backgrounds |
| Text Primary | `#1E1E1E` | 30, 30, 30 | All primary text (not pure black) |
| Text Secondary | `#5C5C5C` | 92, 92, 92 | Body copy, descriptions |
| Text Tertiary | `#A0A0A0` | 160, 160, 160 | Captions, disabled |

### Brand Gradient Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Purple | `#A259FF` | 162, 89, 255 | Gradient start, FigJam purple |
| Coral | `#FF7262` | 255, 114, 98 | Gradient mid, warm energy |
| Orange-Red | `#F24E1E` | 242, 78, 30 | Gradient end, Figma orange |
| Black CTA | `#1E1E1E` | 30, 30, 30 | Primary CTA button background |

### Gradient Definitions
```css
/* Brand gradient (directional) */
--gradient-brand: linear-gradient(135deg, #A259FF 0%, #FF7262 50%, #F24E1E 100%);

/* Horizontal for wide elements */
--gradient-h: linear-gradient(90deg, #A259FF 0%, #FF7262 50%, #F24E1E 100%);

/* Radial burst (backgrounds) */
--gradient-radial: radial-gradient(circle at 30% 50%,
  rgba(162,89,255,0.15) 0%,
  rgba(255,114,98,0.1) 40%,
  transparent 70%);

/* Text fill gradient */
--gradient-text: linear-gradient(90deg, #A259FF, #FF7262);
```

### Extended Brand Palette (Product Colors)
| Name | Hex | Product Context |
|------|-----|----------------|
| Figma Component Purple | `#9747FF` | Component markers |
| Figma Vector Blue | `#0AC0FF` | Vector tool accent |
| Figma Instance Teal | `#00B2FF` | Instance overlays |
| FigJam Yellow | `#FFD700` | FigJam specific |
| FigJam Green | `#1BC47D` | FigJam success |

### Semantic Colors
| Role | Hex | Usage |
|------|-----|-------|
| Success | `#1BC47D` | Completion, published states |
| Warning | `#FFA500` | Caution, pending |
| Error | `#F24E1E` | Shares with brand orange-red |
| Info | `#0AC0FF` | Informational |

---

## 4. Layout System

### Container
```
Max-width:     1200px
Padding (desktop): 0 80px
Padding (tablet):  0 40px
Padding (mobile):  0 24px
```

### Breakpoints
| Name | Min-width | Max-width |
|------|-----------|-----------|
| Mobile | 0 | 767px |
| Tablet | 768px | 1023px |
| Desktop | 1024px | 1439px |
| Wide | 1440px | — |

### Grid
- **Desktop:** 12-column, 24px gap (standard marketing)
- **Feature sections:** Asymmetric — 7/5 or 5/7 column splits for text/visual balance
- **Card grid:** 3 or 4 column, 20–24px gap
- **Mobile:** 4-column, 16px gap

### Spacing Scale (8px system with extra stops)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro-gaps |
| `--space-2` | 8px | Tight padding |
| `--space-3` | 12px | Badge padding, tag spacing |
| `--space-4` | 16px | Component padding |
| `--space-5` | 24px | Card padding |
| `--space-6` | 32px | Section sub-spacing |
| `--space-7` | 40px | Card padding large |
| `--space-8` | 48px | Section breathing |
| `--space-9` | 64px | Section padding |
| `--space-10` | 80px | Hero sub-section |
| `--space-11` | 96px | Major sections |
| `--space-12` | 128px | Hero top padding |

### Section Patterns
- Hero: `padding-block: 100px 80px`, full-bleed background color option
- Alternating sections: white / light gray background swap
- Full-bleed gradient sections: gradient fills entire viewport width

---

## 5. Navigation

### Structure
Bold, confident navigation. The Figma logo (multicolor) dominates the left. Navigation items are clean, with a prominent black CTA on the right.

### Nav Bar
```
Height:        72px
Background:    #FFFFFF
Border-bottom: 1px solid #E8E8E8
Font:          Whyte 500, 15px
Color:         #1E1E1E
```

### Nav Items
```
Spacing:    24px between items
Color:      #1E1E1E
Hover:      underline, 1.5px, #1E1E1E
Active:     font-weight 700
Transition: all 150ms ease
```

### Dropdowns
```
Background:    #FFFFFF
Border:        1px solid #E8E8E8
Border-radius: 12px
Box-shadow:    0 8px 32px rgba(0,0,0,0.12)
Padding:       16px
```

### CTA Buttons (Nav)
- "Get started" — black fill: `#1E1E1E`, white text, `8px` radius
- "Log in" — ghost: transparent, `#1E1E1E` text

### Mobile Nav
- Hamburger at `24px`
- Overlay white panel, full-screen
- Large touch targets, `Whyte 700` headings in mobile menu

---

## 6. Buttons

### Primary Button (Black)
```css
background:    #1E1E1E;
color:         #FFFFFF;
font:          Whyte 700, 16px;
padding:       14px 28px;
border-radius: 8px;
border:        none;
letter-spacing: 0em;
transition:    background 150ms ease, transform 100ms ease;

/* Hover */
background:    #333333;
transform:     translateY(-1px);
```

### Gradient CTA Button
```css
background:    linear-gradient(135deg, #A259FF, #FF7262, #F24E1E);
color:         #FFFFFF;
font:          Whyte 700, 16px;
padding:       14px 28px;
border-radius: 8px;
border:        none;
background-size: 200% 200%;
transition:    background-position 300ms ease, transform 100ms ease;

/* Hover */
background-position: right center;
transform:     translateY(-1px);
```

### Secondary Button
```css
background:    #FFFFFF;
color:         #1E1E1E;
font:          Whyte 500, 16px;
padding:       14px 28px;
border-radius: 8px;
border:        1.5px solid #1E1E1E;
transition:    background 150ms ease;

/* Hover */
background:    #F5F5F5;
```

### Ghost Button
```css
background:    transparent;
color:         #1E1E1E;
font:          Whyte 500, 15px;
padding:       12px 24px;
border-radius: 8px;
border:        none;
transition:    background 150ms ease;

/* Hover */
background:    #F5F5F5;
```

### Sizes
| Size | Padding | Font | Radius |
|------|---------|------|--------|
| Large | 18px 36px | 18px | 10px |
| Default | 14px 28px | 16px | 8px |
| Small | 10px 20px | 14px | 6px |

---

## 7. Cards & Containers

### Feature Card
```css
background:    #FFFFFF;
border-radius: 16px;
padding:       32px;
box-shadow:    0 2px 12px rgba(0,0,0,0.06),
               0 8px 32px rgba(0,0,0,0.04);
transition:    box-shadow 200ms ease, transform 200ms ease;

/* Hover */
box-shadow:    0 8px 32px rgba(0,0,0,0.12);
transform:     translateY(-4px);
```

### Gradient Accent Card
```css
background:    #FFFFFF;
border-radius: 16px;
border-top:    4px solid transparent;
border-image:  linear-gradient(90deg, #A259FF, #FF7262, #F24E1E) 1;
border-image-slice: 1;
/* Alternative: gradient left border using pseudo-element */
```

### Testimonial Card
```css
background:    #F5F5F5;
border-radius: 16px;
padding:       28px;
/* Profile photo: 48px circle */
/* Quote text: Whyte 400, 17px, #1E1E1E */
/* Name: Whyte 600, 14px, #1E1E1E */
/* Title: Whyte 400, 13px, #5C5C5C */
```

### Use Case Card
```css
background:    linear-gradient(135deg, #F5F0FF, #FFF0EE);  /* light purple to cream */
border-radius: 20px;
padding:       36px;
overflow:      hidden;
position:      relative;
/* Gradient blob decoration: position: absolute */
```

### Pricing Card
```css
background:    #FFFFFF;
border:        2px solid #E8E8E8;
border-radius: 16px;
padding:       40px;

/* Featured / highlighted */
border-color:  #1E1E1E;
box-shadow:    0 12px 48px rgba(0,0,0,0.1);
```

---

## 8. Forms & Inputs

### Text Input
```css
background:    #FFFFFF;
border:        1.5px solid #CCCCCC;
border-radius: 8px;
color:         #1E1E1E;
font:          Whyte 400, 16px;
padding:       12px 16px;
outline:       none;
transition:    border-color 150ms ease, box-shadow 150ms ease;

/* Focus */
border-color:  #1E1E1E;
box-shadow:    0 0 0 3px rgba(30,30,30,0.08);

/* Placeholder */
color:         #A0A0A0;
```

### Search Input
```css
background:    #F5F5F5;
border:        none;
border-radius: 40px;
padding:       12px 20px 12px 44px;
font:          Whyte 400, 15px;

/* Focus */
background:    #FFFFFF;
box-shadow:    0 0 0 2px #1E1E1E;
```

### Label
```css
font:          Whyte 600, 14px;
color:         #1E1E1E;
margin-bottom: 6px;
```

### Checkboxes / Radio
- Custom rounded squares (`8px` radius for checkbox)
- Active state: `#1E1E1E` fill with white checkmark
- Transition: `150ms ease`

### Error State
```css
border-color:  #F24E1E;
/* Error message */
font:          Whyte 400, 13px;
color:         #F24E1E;
margin-top:    4px;
```

### Newsletter Form
```css
/* Inline form: input + button side by side */
display:       flex;
gap:           8px;
/* Input: flex 1, 48px height */
/* Button: shrink 0, black pill 999px radius */
border-radius: 999px; /* pill variant for marketing forms */
```

---

## 9. Images & Media

### Interactive Demos (Figma Embeds)
The defining feature — real Figma prototypes embedded in the page:
```css
border-radius: 16px;
overflow:      hidden;
box-shadow:    0 24px 64px rgba(0,0,0,0.15);
border:        1px solid rgba(0,0,0,0.06);
/* Wrapper: relative, padding-top: 56.25% (16:9) */
```

### Product Screenshots
```css
border-radius: 16px;
box-shadow:    0 16px 64px rgba(0,0,0,0.12);
/* Optional: slight rotation for energy */
transform:     rotate(-1deg);
```

### Illustration / Character Art
Figma uses illustrated characters and abstract shapes extensively:
- Style: flat vector, bold fills, minimal outline
- Colors: pull from brand gradient (`#A259FF`, `#FF7262`, `#F24E1E`)
- Purpose: explain abstract concepts, add warmth to technical content
- Sizes: 200–400px widths typical in feature sections

### Avatar / Community Photos
```css
width:         56px;
height:        56px;
border-radius: 50%;
border:        3px solid #FFFFFF;
box-shadow:    0 2px 8px rgba(0,0,0,0.12);
/* Stacked: margin-left: -12px on subsequent items */
```

### Video
```css
border-radius: 16px;
overflow:      hidden;
box-shadow:    0 24px 80px rgba(0,0,0,0.18);
```

### Floating Cursor / Collaboration Indicator
Signature element showing multiple cursors on a design:
```css
/* Cursor label */
background:    #A259FF; /* or other person color */
border-radius: 999px;
padding:       4px 10px;
font:          Whyte 600, 12px;
color:         #FFFFFF;
white-space:   nowrap;
```

---

## 10. Animation & Motion

### Philosophy
Figma's motion is expressive and playful — the site demonstrates that design tools should be fun. Motion is used to showcase the product (live demos) and to create delight on scroll.

### Timing Functions
```css
--ease-playful:  cubic-bezier(0.34, 1.56, 0.64, 1);  /* bouncy overshoot */
--ease-smooth:   cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out:      cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:   cubic-bezier(0.4, 0, 0.6, 1);
--ease-spring:   cubic-bezier(0.175, 0.885, 0.32, 1.275);
```

### Duration Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--dur-fast` | 150ms | Hover, micro-interactions |
| `--dur-normal` | 200ms | Standard transitions |
| `--dur-medium` | 350ms | Card reveals |
| `--dur-slow` | 500ms | Section entrances |
| `--dur-slower` | 800ms | Feature demo reveals |

### Scroll Entrance
```css
/* Initial */
opacity: 0;
transform: translateY(32px) scale(0.98);

/* Visible */
opacity: 1;
transform: translateY(0) scale(1);
transition: opacity 500ms var(--ease-out),
            transform 500ms var(--ease-out);
```

### Cursor Multiplayer Animation
```css
@keyframes cursor-drift {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(20px, -15px); }
  75%  { transform: translate(-10px, 10px); }
  100% { transform: translate(0, 0); }
}
animation: cursor-drift 4s ease-in-out infinite;
```

### Gradient Shift (CTA hover)
```css
@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
background-size: 300% 300%;
animation: gradient-shift 3s ease infinite;
```

### Card Hover (Playful)
```css
transition: transform 250ms var(--ease-playful),
            box-shadow 250ms var(--ease-out);
/* Hover: */
transform: translateY(-6px) rotate(0.5deg);
box-shadow: 0 20px 60px rgba(0,0,0,0.15);
```

---

## 11. Icons & Decorative Elements

### Icon System
- **Style:** Rounded geometric, matching Whyte typeface's character
- **Stroke:** 2px, rounded caps and joins
- **Sizes:** 16px / 20px / 24px / 32px
- **Colors:** `#1E1E1E` default, brand gradient for emphasis

### Figma Tool Icons (Product-Derived)
The product's tool icons appear as decoration:
- Vector pen nib
- Component grid
- Instance diamond
- Auto-layout align icons
- All rendered in the brand gradient

### Decorative Shapes
Geometric shapes floating in backgrounds:
```css
/* Square */
border-radius: 16px;
background:    linear-gradient(135deg, #A259FF, #FF7262);
width:         80px; height: 80px;
transform:     rotate(15deg);

/* Circle blob */
border-radius: 50%;
background:    rgba(162,89,255,0.12);
width:         300px; height: 300px;
filter:        blur(40px);
```

### Badge / Tag System
```css
/* Feature tag */
display:       inline-flex;
align-items:   center;
gap:           6px;
font:          Whyte 600, 12px;
padding:       4px 12px;
border-radius: 999px;
background:    linear-gradient(90deg, rgba(162,89,255,0.1), rgba(255,114,98,0.1));
color:         #A259FF;
border:        1px solid rgba(162,89,255,0.2);
```

### Number / Stat Display
Large gradient numbers as decorative elements:
```css
font:        Whyte 900, 80px;
background:  var(--gradient-brand);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
line-height: 1;
```

### Dividers
```css
/* Gradient divider */
height: 2px;
background: var(--gradient-h);
border: none;

/* Subtle divider */
height: 1px;
background: #E8E8E8;
```

---

## 12. Unique Signature

Figma's visual identity has one prime directive: **use design to sell design**. The site is a portfolio proof, a capabilities statement, and a design system tutorial all at once.

**Five hallmarks:**
1. **The three-color gradient** — `#A259FF → #FF7262 → #F24E1E` appears as stroke, fill, text, background, and button. It's one gradient doing the work of an entire brand color palette.
2. **Whyte typeface** — round, geometric, slightly quirky. It communicates "we care about type" without being precious. The bold weights at large sizes have unmistakable personality.
3. **Live embedded prototypes** — clicking into an actual Figma prototype mid-scroll is the killer demo. No feature description matches the proof of the actual tool in action.
4. **Multiplayer cursors** — the floating colored name-tag cursors are the company's single most powerful brand icon. They appear as both illustration and animation throughout.
5. **Black CTAs on white** — the extreme contrast of black `#1E1E1E` buttons on white pages is a deliberate rejection of colored primary buttons. It's bold without being loud.

If a page feels "Figma," you can see the gradient, feel the Whyte weight, and hear the collaborative energy.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* === COLORS === */
  /* Background */
  --color-bg:          #FFFFFF;
  --color-surface:     #F5F5F5;
  --color-surface-alt: #FAFAFA;

  /* Text */
  --color-text-primary:   #1E1E1E;
  --color-text-secondary: #5C5C5C;
  --color-text-tertiary:  #A0A0A0;
  --color-text-inverted:  #FFFFFF;

  /* Brand */
  --color-purple:     #A259FF;
  --color-coral:      #FF7262;
  --color-orange-red: #F24E1E;
  --color-black-cta:  #1E1E1E;

  /* Gradients */
  --gradient-brand: linear-gradient(135deg, #A259FF 0%, #FF7262 50%, #F24E1E 100%);
  --gradient-h:     linear-gradient(90deg, #A259FF 0%, #FF7262 50%, #F24E1E 100%);
  --gradient-light: linear-gradient(135deg,
    rgba(162,89,255,0.1) 0%,
    rgba(255,114,98,0.08) 100%);

  /* Semantic */
  --color-success:  #1BC47D;
  --color-warning:  #FFA500;
  --color-error:    #F24E1E;
  --color-info:     #0AC0FF;

  /* Border */
  --color-border:      #E8E8E8;
  --color-border-dark: #CCCCCC;

  /* === TYPOGRAPHY === */
  --font-sans: 'Whyte', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Whyte Mono', 'JetBrains Mono', 'Courier New', monospace;

  --font-light:   300;
  --font-regular: 400;
  --font-medium:  500;
  --font-bold:    700;
  --font-black:   900;

  --text-display-xl: 5rem;     /* 80px */
  --text-display-l:  4rem;     /* 64px */
  --text-h1:         3rem;     /* 48px */
  --text-h2:         2.25rem;  /* 36px */
  --text-h3:         1.75rem;  /* 28px */
  --text-h4:         1.375rem; /* 22px */
  --text-body-l:     1.25rem;  /* 20px */
  --text-body-m:     1.0625rem; /* 17px */
  --text-body-s:     0.875rem; /* 14px */
  --text-caption:    0.75rem;  /* 12px */

  /* === SPACING === */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  40px;
  --space-8:  48px;
  --space-9:  64px;
  --space-10: 80px;
  --space-11: 96px;
  --space-12: 128px;

  /* === LAYOUT === */
  --container-max:        1200px;
  --container-padding:    80px;
  --container-padding-md: 40px;
  --container-padding-sm: 24px;
  --grid-cols:            12;
  --grid-gap:             24px;

  /* === BORDERS === */
  --radius-sm:    6px;
  --radius-md:    8px;
  --radius-lg:    12px;
  --radius-xl:    16px;
  --radius-2xl:   20px;
  --radius-full:  999px;

  /* === SHADOWS === */
  --shadow-sm:    0 2px 12px rgba(0,0,0,0.06);
  --shadow-md:    0 8px 32px rgba(0,0,0,0.10);
  --shadow-lg:    0 16px 64px rgba(0,0,0,0.12);
  --shadow-xl:    0 24px 80px rgba(0,0,0,0.18);

  /* === ANIMATION === */
  --ease-playful:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth:   cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-out:      cubic-bezier(0, 0, 0.2, 1);
  --ease-spring:   cubic-bezier(0.175, 0.885, 0.32, 1.275);

  --dur-fast:    150ms;
  --dur-normal:  200ms;
  --dur-medium:  350ms;
  --dur-slow:    500ms;
  --dur-slower:  800ms;

  /* === Z-INDEX === */
  --z-base:      0;
  --z-raised:    10;
  --z-dropdown:  50;
  --z-modal:     100;
  --z-nav:       200;
  --z-tooltip:   300;
}
```
