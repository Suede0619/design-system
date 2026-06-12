# Notion Design System
**Site:** notion.so
**Award:** Multiple awards (Webby, Awwwards, CSS Design Awards)
**Category:** Productivity / Workspace — Warm Minimal
**Design DNA:** Human-scale warmth, editorial restraint, content-first

---

## 1. Overview

Notion's site design is a study in earned minimalism — not emptiness, but purposeful breathing room where every element earns its place by serving the reader. The warm cream canvas (`#FFFEFC`) signals paper, thought, and craft rather than the cold white of a sterile enterprise tool. This is a workspace that invites you to think.

The design language is deliberately approachable and human-scaled. Hand-drawn illustrations scattered throughout communicate "made by people, for people." Emoji used as UI elements (not decoration) compress emotional tone into a single character. The toggle/accordion interaction pattern mirrors the product experience — discovery is a gesture away, not a scroll.

Content is king: the 900px content width enforces reading-first layout at human attention scale. Typography is generous at body level (15px with 1.7 line-height) and assertive at heading level (32–40px). The result feels like a well-designed editorial publication rather than a SaaS marketing page.

**Core Personality:** Warm. Considered. Editorial. Human-made. Inclusive.

---

## 2. Typography

### Font Family
- **Primary:** System font stack — Notion trusts the user's native reading experience
- **Monospace:** `'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace`
- **Full stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`

### Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `--font-regular` | 400 | Body copy, secondary content |
| `--font-medium` | 500 | Navigation, labels, captions |
| `--font-semibold` | 600 | Sub-headings, feature titles |
| `--font-bold` | 700 | Primary headings, hero text |

### Scale
| Role | Size (px) | Size (rem) | Line-height | Letter-spacing |
|------|-----------|------------|-------------|----------------|
| Display XL | 52px | 3.25rem | 1.1 | -0.02em |
| Display L | 44px | 2.75rem | 1.12 | -0.02em |
| Heading 1 | 40px | 2.5rem | 1.15 | -0.01em |
| Heading 2 | 32px | 2rem | 1.2 | -0.01em |
| Heading 3 | 24px | 1.5rem | 1.3 | 0em |
| Heading 4 | 20px | 1.25rem | 1.35 | 0em |
| Body L | 18px | 1.125rem | 1.75 | 0em |
| Body M | 15px | 0.9375rem | 1.7 | 0em |
| Body S | 13px | 0.8125rem | 1.6 | 0.01em |
| Caption | 12px | 0.75rem | 1.5 | 0.02em |

### Typography Rules
- Body text at 15px — slightly smaller than typical, which signals "editorial" rather than "app UI"
- Generous line-height (1.7) makes dense content breathable
- Headings at 32–40px with subtle negative tracking
- Text color `#37352F` (warm dark brown, not pure black) — softens contrast on warm bg
- `font-smoothing: antialiased` on macOS
- Max line length: 72ch — enforced editorially, not by code
- Emoji characters inherit font size, no custom styling needed

---

## 3. Color Palette

### Core Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | `#FFFEFC` | 255, 254, 252 | Page background — warm cream |
| Surface | `#F7F6F3` | 247, 246, 243 | Card backgrounds, sidebar, input fills |
| Surface Alt | `#EFEEEB` | 239, 238, 235 | Hover states, dividers, subtle boxes |
| White | `#FFFFFF` | 255, 255, 255 | Cards, modals, explicit white areas |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Text Primary | `#37352F` | Primary body text — warm, dark |
| Text Secondary | `#6B6B6B` | Secondary content, captions |
| Text Tertiary | `#9B9B9B` | Placeholder text, disabled states |
| Text Inverted | `#FFFFFF` | Text on dark backgrounds |

### Brand Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Accent Red | `#E16259` | 225, 98, 89 | Primary CTA, highlights, key accents |
| Accent Red Dim | `#F5C5C2` | 245, 197, 194 | Light red backgrounds, badges |
| Accent Red Dark | `#C94B42` | 201, 75, 66 | Hover state for red CTA |
| Link Blue | `#4B82C4` | 75, 130, 196 | Links, interactive text |
| Link Blue Hover | `#2D68A8` | 45, 104, 168 | Hover state for links |

### Semantic Colors
| Role | Hex | Usage |
|------|-----|-------|
| Success | `#0F7B6C` | Completion states |
| Warning | `#D9730D` | Caution, pending |
| Error | `#E16259` | Shares with brand red — errors |
| Info | `#4B82C4` | Shares with link blue |
| Tag Yellow | `#DFAB01` | Callout tags |
| Tag Green | `#0F7B6C` | Status chips |
| Tag Purple | `#6940A5` | Label chips |

### Block / Component Tints (From Product)
These appear in callout and highlight blocks:
```
Gray:   #F1F1EF
Brown:  #F4EEEE
Orange: #FBECDD
Yellow: #FBF3DB
Green:  #EDF3EC
Blue:   #E7F3F8
Purple: #F4F0F9
Pink:   #FBE2E8
Red:    #FFE2DD
```

---

## 4. Layout System

### Container
```
Max-width:     900px  (content pages)
Max-width:     1200px (marketing hero/grid sections)
Padding (desktop): 0 96px
Padding (tablet):  0 48px
Padding (mobile):  0 20px
```

### The 900px Choice
Notion's 900px content width is not accidental — it mirrors the product's page width and signals editorial intent. The narrow column with generous padding on either side creates a reading-friendly measure and makes even sparse content feel intentional.

### Breakpoints
| Name | Min-width | Max-width |
|------|-----------|-----------|
| Mobile | 0 | 599px |
| Tablet | 600px | 999px |
| Desktop | 1000px | 1399px |
| Wide | 1400px | — |

### Grid
- **Marketing (wide):** 12-column, 28px gap
- **Content sections:** 6 or 8 column within 900px container
- **Feature grid:** 2 or 3 column, 24–32px gap
- **Mobile:** 4-column, 16px gap

### Spacing Scale (4px base, editorial feel)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro: icon-text gap |
| `--space-2` | 8px | Badge padding, tight pairing |
| `--space-3` | 12px | Internal component padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | Card padding |
| `--space-6` | 24px | Between related elements |
| `--space-8` | 32px | Section sub-grouping |
| `--space-10` | 40px | Generous card padding |
| `--space-12` | 48px | Section breathing room |
| `--space-16` | 64px | Major section separator |
| `--space-20` | 80px | Section padding-block |
| `--space-24` | 96px | Hero section padding |

---

## 5. Navigation

### Structure
Minimal top navigation, light and airy. Not sticky by default — scrolls with page on content pages, fixed on marketing pages.

### Nav Bar
```
Height:       60px
Background:   rgba(255,254,252,0.92)
Border-bottom: 1px solid #E8E7E4
Backdrop-filter: blur(8px)
Font:          system-ui 500, 14px
Color:         #37352F
```

### Nav Items
```
Spacing:    20px between items
Hover:      color #37352F → underline with 1px offset
Active:     font-weight 600
Transition: 100ms ease
```

### Dropdown Menus
Notion's nav dropdowns feel like product panels:
```
Background:   #FFFFFF
Border:       1px solid #E8E7E4
Border-radius: 8px
Box-shadow:   0 4px 20px rgba(55,53,47,0.12)
Padding:      8px 0
```

### CTA Buttons (Nav)
- "Get Notion free" — red CTA: `#E16259` fill, white text
- "Log in" — ghost: transparent, `#37352F` text

### Mobile Nav
- Clean hamburger, 3 lines at `20px` width
- Overlay: white (`#FFFFFF`) full-screen panel
- Font: larger, comfortable touch targets (`48px` min)

---

## 6. Buttons

### Primary Button (Red CTA)
```css
background:    #E16259;
color:         #FFFFFF;
font:          system-ui 600, 15px;
padding:       10px 20px;
border-radius: 4px;
border:        none;
letter-spacing: 0.01em;
transition:    background 150ms ease, box-shadow 150ms ease;

/* Hover */
background:    #C94B42;
box-shadow:    0 2px 8px rgba(225,98,89,0.3);
```

### Secondary Button
```css
background:    #FFFFFF;
color:         #37352F;
font:          system-ui 500, 15px;
padding:       10px 20px;
border-radius: 4px;
border:        1px solid #E0E0E0;
transition:    background 150ms ease, border-color 150ms ease;

/* Hover */
background:    #F7F6F3;
border-color:  #C7C6C3;
```

### Ghost Button
```css
background:    transparent;
color:         #37352F;
font:          system-ui 500, 15px;
padding:       10px 20px;
border-radius: 4px;
border:        1px solid transparent;
transition:    background 150ms ease, border-color 150ms ease;

/* Hover */
background:    #F7F6F3;
border-color:  #E0E0E0;
```

### Text Button (Link-like)
```css
background:    transparent;
color:         #4B82C4;
font:          system-ui 400, 15px;
padding:       0;
border:        none;
text-decoration: underline;
text-underline-offset: 2px;
cursor:        pointer;

/* Hover */
color:         #2D68A8;
```

### Sizes
| Size | Padding | Font | Radius |
|------|---------|------|--------|
| Large | 14px 28px | 17px | 4px |
| Default | 10px 20px | 15px | 4px |
| Small | 7px 14px | 13px | 4px |

---

## 7. Cards & Containers

### Feature Card
```css
background:    #FFFFFF;
border:        1px solid #E0E0E0;
border-radius: 8px;
padding:       32px;
transition:    box-shadow 200ms ease;

/* Hover */
box-shadow:    0 4px 16px rgba(55,53,47,0.08);
```

### Content Block Card
```css
background:    #F7F6F3;
border-radius: 6px;
padding:       20px 24px;
border-left:   3px solid #E16259; /* optional accent */
```

### Toggle / Accordion Container
```css
border-radius: 4px;
padding:       8px 12px;
cursor:        pointer;
transition:    background 100ms ease;

/* Hover */
background:    #F7F6F3;

/* Expanded content */
padding:       0 12px 8px 24px;
border-left:   2px solid #E0E0E0;
```

### Callout Block
```css
background:    #FBF3DB; /* yellow variant */
border-radius: 4px;
padding:       16px;
display:       flex;
gap:           12px;
/* emoji + content side by side */
```

### Template Gallery Card
```css
background:    #FFFFFF;
border:        1px solid #E0E0E0;
border-radius: 8px;
overflow:      hidden;
transition:    box-shadow 200ms ease, transform 200ms ease;

/* Hover */
box-shadow:    0 6px 20px rgba(55,53,47,0.1);
transform:     translateY(-2px);
```

### Quote / Testimonial Block
```css
border-left:   3px solid #E16259;
padding-left:  24px;
font-style:    italic;
color:         #6B6B6B;
font-size:     18px;
line-height:   1.75;
```

---

## 8. Forms & Inputs

### Text Input
```css
background:    #F7F6F3;
border:        1px solid #E0E0E0;
border-radius: 4px;
color:         #37352F;
font:          system-ui 400, 15px;
padding:       9px 12px;
outline:       none;
transition:    border-color 150ms ease, background 150ms ease;

/* Focus */
background:    #FFFFFF;
border-color:  #37352F;
box-shadow:    0 0 0 1px #37352F;

/* Placeholder */
color:         #9B9B9B;
```

### Search Input
```css
background:    #F7F6F3;
border:        1px solid #E0E0E0;
border-radius: 20px;  /* pill shape */
padding:       8px 16px 8px 36px;
font:          system-ui 400, 14px;
```

### Label
```css
font:          system-ui 500, 13px;
color:         #37352F;
margin-bottom: 5px;
```

### Select
Inherits input styling, custom arrow using SVG background-image in `#9B9B9B`.

### Checkbox
```css
width:         16px;
height:        16px;
border:        1.5px solid #C7C6C3;
border-radius: 3px;
transition:    all 150ms ease;

/* Checked */
background:    #37352F;
border-color:  #37352F;
/* Checkmark: white SVG icon */
```

### Helper Text
```css
font:   system-ui 400, 12px;
color:  #9B9B9B;
margin-top: 4px;
```

### Error State
```css
border-color:  #E16259;
/* Error message */
color:         #E16259;
font:          system-ui 400, 12px;
```

---

## 9. Images & Media

### Hand-Drawn Illustrations
The signature visual device — ink-style illustrations that appear throughout the site. Characteristics:
- Line weight: 1.5–2px, consistent stroke
- Colors: mostly `#37352F` on transparent/white background
- Style: loose, not precise — communicates human craft
- Appear floating above sections, often with slight rotation
- Sizes: 80–200px typical, context-dependent

### Emoji as UI
Notion uses emoji deliberately as functional UI elements, not decoration:
- Category labels: 📝 📅 🗂 🔗
- Callout blocks: ⚡ 💡 ⚠️ ✅
- Testimonials: person photos OR emoji avatar
- Feature bullets: emoji replaces traditional bullet point
- Font-size: inherits, typically `20–24px` for UI emoji

### Product Screenshots
Clean, browser-framed or frameless:
```css
border-radius: 12px;
border:        1px solid #E0E0E0;
box-shadow:    0 8px 32px rgba(55,53,47,0.12);
```

### Feature Illustrations (Animated)
Product panels showing real UI:
```css
border-radius: 8px;
overflow:      hidden;
box-shadow:    0 12px 40px rgba(55,53,47,0.15);
```

### Avatar / Team Photos
```css
width:         40px;
height:        40px;
border-radius: 50%;
border:        2px solid #FFFFFF;
box-shadow:    0 2px 8px rgba(55,53,47,0.12);
```

### Video Embeds
```css
border-radius: 8px;
overflow:      hidden;
box-shadow:    0 16px 48px rgba(55,53,47,0.15);
border:        1px solid #E0E0E0;
```

---

## 10. Animation & Motion

### Philosophy
Notion's motion is restrained — content is king, animation serves comprehension. Nothing bounces; nothing pulses without purpose.

### Timing Functions
```css
--ease-notion:    cubic-bezier(0.4, 0, 0.2, 1);  /* Material-inspired */
--ease-out:       cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:    cubic-bezier(0.4, 0, 0.6, 1);
--ease-smooth:    cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Duration Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--dur-micro` | 80ms | Checkbox, toggle tick |
| `--dur-fast` | 150ms | Hover color changes |
| `--dur-normal` | 200ms | Dropdowns, accordions |
| `--dur-medium` | 300ms | Panel slides, card reveals |
| `--dur-slow` | 400ms | Section entrance animations |

### Toggle / Accordion
```css
/* Chevron rotation */
transform: rotate(0deg);
transition: transform 200ms var(--ease-notion);

/* Open state */
transform: rotate(90deg);

/* Content reveal */
overflow: hidden;
max-height: 0;
transition: max-height 250ms var(--ease-out);

/* Open state */
max-height: 500px; /* arbitrary large value */
```

### Scroll Reveals
Subtle fade + lift for feature sections:
```css
/* Initial */
opacity: 0;
transform: translateY(16px);

/* Visible */
opacity: 1;
transform: translateY(0);
transition: opacity 400ms var(--ease-out),
            transform 400ms var(--ease-out);
transition-delay: calc(var(--index) * 60ms); /* stagger */
```

### Illustration Float
Hand-drawn illustrations gently drift:
```css
@keyframes drift {
  0%, 100% { transform: translateY(0) rotate(-2deg); }
  50%       { transform: translateY(-8px) rotate(-1deg); }
}
animation: drift 8s ease-in-out infinite;
```

### Card Hover
```css
transition: transform 200ms var(--ease-smooth),
            box-shadow 200ms var(--ease-smooth);
/* Hover: */
transform: translateY(-2px);
```

---

## 11. Icons & Decorative Elements

### Icon System
- **Style:** Custom icons matching hand-drawn illustration feel, OR emoji
- **Stroke icons:** 1.5px stroke weight, rounded line-cap and line-join
- **Sizes:** 16px / 20px / 24px
- **Color:** `#37352F` primary, `#9B9B9B` muted

### Decorative Hand-Drawn Motifs
Common illustration characters appearing site-wide:
- Arrows (curved, pointing to UI elements)
- Circles and underlines (emphasis marks)
- Stars and asterisks (highlight sparkles)
- Simple character sketches (people, plants)
- These appear as `<img>` SVGs with `role="presentation"` and `aria-hidden`

### Block Quote Marks
```css
font-size:  48px;
color:      #E16259;
font-family: Georgia, serif;  /* slightly different, editorial */
line-height: 0.8;
```

### Tag / Badge Chips
```css
display:       inline-flex;
align-items:   center;
font:          system-ui 500, 12px;
padding:       2px 8px;
border-radius: 3px;
background:    #FBF3DB;  /* yellow — most common */
color:         #9B6700;
```

### Dividers
```css
border: none;
height: 1px;
background: #E8E7E4;
margin: 40px 0;
```

### "New" / "Beta" Labels
```css
background:    #E16259;
color:         #FFFFFF;
font:          system-ui 600, 11px;
padding:       2px 6px;
border-radius: 3px;
letter-spacing: 0.04em;
text-transform: uppercase;
```

### Checkmark Feature List
Used in pricing / feature comparisons:
- ✅ Emoji checkmark, `20px`
- Or custom SVG: `#0F7B6C` stroke circle with checkmark
- Spacing: `12px` gap between icon and text

---

## 12. Unique Signature

Notion's design language is built on **editorial humanism** — the belief that productivity software should feel like a well-loved notebook, not a command center.

**Five hallmarks:**
1. **Warm cream canvas** — `#FFFEFC` says "paper" before a word is read. It's a founding decision that shapes every color choice downstream.
2. **Emoji as first-class UI** — not decoration or fallback, but intentional shorthand. A `📝` in a nav item communicates category faster than text.
3. **Hand-drawn illustrations** — imperfect on purpose. They humanize what could feel like a feature grid.
4. **Toggle as metaphor** — discovery is a tap, not a scroll. The accordion pattern mirrors the product's block-based structure.
5. **900px reading width** — narrow enough to feel focused, wide enough to feel spacious. Never sacrificed for a wider marketing layout.

If a design feels "Notion," it's because it trusts content over convention, warmth over whiteness, and reading over scanning.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* === COLORS === */
  /* Background */
  --color-bg:        #FFFEFC;
  --color-surface:   #F7F6F3;
  --color-surface-alt: #EFEEEB;
  --color-white:     #FFFFFF;

  /* Text */
  --color-text-primary:   #37352F;
  --color-text-secondary: #6B6B6B;
  --color-text-tertiary:  #9B9B9B;
  --color-text-inverted:  #FFFFFF;

  /* Brand */
  --color-red:        #E16259;
  --color-red-dim:    #F5C5C2;
  --color-red-dark:   #C94B42;
  --color-blue:       #4B82C4;
  --color-blue-dark:  #2D68A8;

  /* Semantic */
  --color-success:  #0F7B6C;
  --color-warning:  #D9730D;
  --color-error:    #E16259;
  --color-info:     #4B82C4;

  /* Border */
  --color-border:      #E0E0E0;
  --color-border-dark: #C7C6C3;
  --color-border-light: #E8E7E4;

  /* Block tints */
  --block-yellow: #FBF3DB;
  --block-red:    #FFE2DD;
  --block-blue:   #E7F3F8;
  --block-green:  #EDF3EC;
  --block-purple: #F4F0F9;
  --block-gray:   #F1F1EF;

  /* === TYPOGRAPHY === */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
               Helvetica, Arial, sans-serif,
               'Apple Color Emoji', 'Segoe UI Emoji';
  --font-mono: 'SFMono-Regular', Menlo, Monaco, Consolas,
               'Liberation Mono', monospace;

  --font-regular:  400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;

  --text-display-xl: 3.25rem;  /* 52px */
  --text-display-l:  2.75rem;  /* 44px */
  --text-h1:         2.5rem;   /* 40px */
  --text-h2:         2rem;     /* 32px */
  --text-h3:         1.5rem;   /* 24px */
  --text-h4:         1.25rem;  /* 20px */
  --text-body-l:     1.125rem; /* 18px */
  --text-body-m:     0.9375rem; /* 15px */
  --text-body-s:     0.8125rem; /* 13px */
  --text-caption:    0.75rem;  /* 12px */

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

  /* === LAYOUT === */
  --container-max:         900px;
  --container-max-wide:    1200px;
  --container-padding:     96px;
  --container-padding-md:  48px;
  --container-padding-sm:  20px;

  /* === BORDERS === */
  --radius-sm:    3px;
  --radius-md:    4px;
  --radius-lg:    6px;
  --radius-xl:    8px;
  --radius-2xl:   12px;
  --radius-full:  999px;

  /* === SHADOWS === */
  --shadow-sm:    0 2px 8px rgba(55,53,47,0.08);
  --shadow-md:    0 4px 16px rgba(55,53,47,0.10);
  --shadow-lg:    0 8px 32px rgba(55,53,47,0.12);
  --shadow-xl:    0 16px 48px rgba(55,53,47,0.15);

  /* === ANIMATION === */
  --ease-notion:  cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --ease-smooth:  cubic-bezier(0.25, 0.46, 0.45, 0.94);

  --dur-micro:  80ms;
  --dur-fast:   150ms;
  --dur-normal: 200ms;
  --dur-medium: 300ms;
  --dur-slow:   400ms;

  /* === Z-INDEX === */
  --z-base:    0;
  --z-raised:  10;
  --z-dropdown: 50;
  --z-modal:   100;
  --z-nav:     200;
  --z-tooltip: 300;
}
```
