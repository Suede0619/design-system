# Symphony of Vines — Design System
**Source:** thesymphonyofvines.com | **Award:** CSSDA Site of the Day #2, 2025
**Category:** Wine / Cinematic Storytelling
**Archetype:** Horizontal parallax scroll, timeline narrative, full-bleed photography, ambient motion

---

## 1. Overview

Symphony of Vines is cinematic wine storytelling — the digital equivalent of a wine estate's coffee table book brought to life. Every design decision serves the narrative arc of the vineyard through seasons and years. The palette draws from the actual colors of wine: deep burgundy, aged gold, lush forest green, cream parchment, and charcoal shadow.

**Design Philosophy:**
- Cinematic first: the experience should feel like a slowly-unfolding film, not a website
- Photography is the hero: full-bleed vineyard images carry emotional weight
- Typography does the talking: display serifs (Playfair Display or Cormorant Garamond) for all headings
- Time is architecture: the year timeline is the backbone of the narrative structure
- Motion is ambient: nothing snaps, nothing pops — everything eases at 1.5 seconds minimum
- Horizontal scroll sections create spatial metaphor (the passage of time as physical journey)

**Target User:** Wine enthusiasts, collectors, estate visitors, fine dining audience. Desktop-primary; mobile is a simplified single-column experience.

**Layout Pattern:** Full-viewport horizontal scroll experience within narrative sections. Traditional vertical scroll between major chapters. Year markers along a horizontal timeline thread.

---

## 2. Typography

### Font Families
```
Display / Serif (headings):   "Playfair Display", "Cormorant Garamond", "Georgia", serif
  Preferred: Playfair Display
  Google Fonts: https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400;1,700&display=swap
  
  Alternative: "Cormorant Garamond"
  Google Fonts: https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&display=swap

Body / Sans:   "Libre Baskerville", "Georgia", serif
  — Yes, serif for body too. This is a fully-serif experience.
  — Alternative: "EB Garamond" for longer body text
  — Google Fonts: https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap

Accent / Label:  "Cormorant SC" (small caps variant) OR letter-spacing 0.15em uppercase Georgia
  — Used for year markers, metadata, wine labels, section numbers

Fallback stack for all: "Georgia", "Times New Roman", serif
```

### Font Weights
```
Light:     300  — (Cormorant only) Large display text, spacious feel
Regular:   400  — Body text, captions, descriptions
Medium:    500  — Subheadings, card labels
SemiBold:  600  — Emphasized subheadings, strong labels
Bold:      700  — Headlines, section titles
Black:     900  — (Playfair Display only) Hero statements, monumental headings
```

### Type Scale
```
Cinematic Hero:  clamp(4rem, 8vw, 7rem)   — Full-bleed hero text (weight: 900, italic option)
                 Line-height: 0.95
                 Letter-spacing: -0.02em

Display XL:      clamp(3rem, 5vw, 5rem)   — Chapter titles (weight: 700)
                 Line-height: 1.0
                 Letter-spacing: -0.01em

Display L:       clamp(2rem, 3.5vw, 3.5rem) — Section headlines (weight: 700)
                 Line-height: 1.1

H1:              2.5rem / 40px             — Page titles (weight: 700)
                 Line-height: 1.15
                 Letter-spacing: -0.01em

H2:              2rem / 32px               — Section headers (weight: 600)
                 Line-height: 1.2

H3:              1.5rem / 24px             — Subsection headers (weight: 600)
                 Line-height: 1.3

H4:              1.25rem / 20px            — Card titles (weight: 500, italic acceptable)
                 Line-height: 1.4

Body L:          1.25rem / 20px            — Intro paragraphs, lead text (weight: 400)
                 Line-height: 1.8
                 Letter-spacing: 0.01em

Body:            1.0625rem / 17px          — Standard body text (weight: 400)
                 Line-height: 1.75
                 Letter-spacing: 0.01em

Body S:          0.9375rem / 15px          — Secondary text, captions
                 Line-height: 1.6

Year Marker:     clamp(1rem, 2vw, 1.5rem)  — Timeline year labels
                 Font-weight: 400
                 Letter-spacing: 0.15em
                 Text-transform: uppercase
                 Font-variant-numeric: oldstyle-nums

Label:           0.75rem / 12px            — Metadata, wine technical details
                 Font-weight: 400
                 Letter-spacing: 0.2em
                 Text-transform: uppercase
```

### Italic Usage
```
Italic is a primary voice in this system:
  - Wine varietal names: always italic
  - Winemaker quotes: always italic
  - Estate descriptions: lead sentence often italic
  - Pull quotes: italic, larger than body (1.5rem+)

font-style: italic is never decorative — only for the above semantic uses
```

---

## 3. Color Palette

### Primary Palette
```
Burgundy:       #722F37  — Primary brand, deepest wine color
                HSL: 356°, 43%, 31%
                Usage: Hero text on light, dark section backgrounds, signature accents
                Contrast on cream: 7.8:1 ✓ AAA
                Contrast on white: 8.2:1 ✓ AAA

Gold:           #C5A55A  — Aged gold, secondary accent
                HSL: 40°, 49%, 56%
                Usage: Buttons on dark, year markers, divider lines, metallic accents
                Contrast on burgundy: 3.8:1 (decorative/large text only)
                Contrast on black/charcoal: 5.9:1 ✓ AA

Forest Green:   #2D4F2C  — Vineyard, foliage, life
                HSL: 119°, 28%, 24%
                Usage: Accent color, season indicators, botanical details
                Contrast on cream: 8.4:1 ✓ AAA

Cream:          #F5F0E8  — Parchment, aged paper, warmth
                HSL: 36°, 35%, 93%
                Usage: Card backgrounds, light section backgrounds, body text background

Charcoal:       #2B2B2B  — Near-black, text on light sections
                HSL: 0°, 0%, 17%
                Usage: Body text, dark headings, footer background
                Contrast on cream: 13.1:1 ✓ AAA
```

### Extended Palette
```
Burgundy Dark:  #4A1B22  — Deep wine, section backgrounds
Burgundy Light: #D4A0A5  — Tinted burgundy for soft accents
Gold Dark:      #8C7239  — Hover state for gold elements
Gold Light:     #E8D9AD  — Gold tint for backgrounds, subtle highlights
Gold Foil:      #D4AF6A  — Brighter gold for timeline accents
Green Dark:     #1A301A  — Deep forest, maximum depth
Green Light:    #7A9E78  — Lighter foliage tone
Cream Dark:     #E8E0D0  — Warmer cream for borders, dividers
White:          #FFFFFF  — Clean white for photo backgrounds
Warm Black:     #1A1006  — True dark with warm undertone (footer, hero overlays)
```

### Text on Dark Backgrounds
```
Primary text on burgundy/charcoal:  #F5F0E8 (cream)
Secondary text on dark:              #C5A55A (gold) — for labels/accents
Tertiary text on dark:               rgba(245, 240, 232, 0.6) — muted cream
```

### Photo Overlay Gradients
```
Hero overlay:    linear-gradient(to bottom, rgba(26, 16, 6, 0) 0%, rgba(26, 16, 6, 0.7) 60%, rgba(26, 16, 6, 0.95) 100%)
Section overlay: linear-gradient(to right, rgba(26, 16, 6, 0.9) 0%, rgba(26, 16, 6, 0) 60%)
Horizontal fade: linear-gradient(to right, #F5F0E8 0%, rgba(245, 240, 232, 0) 100%)
```

---

## 4. Layout System

### Container Widths
```
Max width:         1440px  — Cinematic wide format
Content:           1200px  — Standard content column
Article:            800px  — Long-form wine editorial
Narrow:             600px  — Intimate text sections
Timeline:          100vw  — Full viewport for timeline scroll
```

### Horizontal Scroll Architecture
```
Chapter sections use horizontal scroll (overflow-x scroll, overflow-y hidden):
  height:          100vh
  display:         flex
  flex-direction:  row
  overflow-x:      scroll
  scroll-snap-type: x mandatory

Individual panels within horizontal scroll:
  min-width:       100vw  (full viewport per panel)
  OR min-width:    60vw   (partial reveal panels — right edge bleeds into next)
  height:          100%
  scroll-snap-align: start

The horizontal scroll sections sit within a vertical scroll page structure.
Vertical sections use standard block layout.
```

### Vertical Grid (Standard Sections)
```
Desktop (1200px+):
  12-column grid
  Column gutter: 32px
  Page margin: 80px each side

Tablet (768px–1199px):
  8-column grid
  Column gutter: 24px
  Page margin: 48px each side

Mobile (< 768px):
  4-column grid
  Column gutter: 16px
  Page margin: 24px each side
  All horizontal scroll converts to vertical single-column
```

### Spacing Scale
```
--space-1:    8px    (0.5rem)
--space-2:   16px    (1rem)
--space-3:   24px    (1.5rem)
--space-4:   32px    (2rem)
--space-5:   48px    (3rem)
--space-6:   64px    (4rem)
--space-7:   80px    (5rem)
--space-8:   96px    (6rem)
--space-9:  120px    (7.5rem)
--space-10: 160px    (10rem)
--space-11: 200px    (12.5rem)
--space-12: 240px    (15rem)  — Cinematic breathing room
```

---

## 5. Navigation

### Primary Navigation
```
Position:        Fixed top, full width
Background:      transparent initially
                 rgba(26, 16, 6, 0.95) on scroll (after 100px)
                 backdrop-filter: blur(8px)
Height:          80px (expands to 100px without scroll)
Transition:      background 600ms ease, height 400ms ease

Logo:
  Position: left
  Color: #C5A55A (gold) on dark, #722F37 (burgundy) on light
  Size: 140px wide

Nav Links:
  Font: Playfair Display, 0.9375rem / 15px, weight 400, italic
  Color: #F5F0E8 (cream) on dark overlay, #2B2B2B on light
  Letter-spacing: 0.05em
  Padding: 8px 16px
  No underline
  
  Hover:
    Color: #C5A55A (gold)
    transition: color 500ms ease
  
  Active:
    Color: #C5A55A
    border-bottom: 1px solid #C5A55A (subtle)

CTA Button in nav:
  See Buttons section (Gold Outline variant)
```

### Year Timeline Navigation
```
Position:        Fixed, vertical right side OR horizontal bottom
Display:         Vertical stack of years OR horizontal row
Font:            Cormorant SC or Playfair, 0.75rem, uppercase, letter-spacing 0.15em
Color:           rgba(245, 240, 232, 0.4) inactive
                 #C5A55A active
Width:           60px (vertical) OR 40px height (horizontal)
Tick mark:       1px line, 16px wide, in gold on active
Hover:           Color transitions to gold in 400ms
```

### Mobile Navigation
```
Hamburger: top-right, 40×40px touch target
Menu: full-screen overlay
Background: #1A1006 (warm black)
Links: large (1.5rem), centered, white, italic, one per line
Close: X in top-right corner
Animation: opacity fade 600ms + translateY(20px) → 0 for links (staggered)
```

---

## 6. Buttons

### Gold Outline Button (on Dark Backgrounds)
```
Background:       transparent
Text:             #C5A55A (gold)
Border:           1.5px solid #C5A55A
Font:             Playfair Display, 0.875rem / 14px, weight 400, italic
Letter-spacing:   0.12em
Text-transform:   uppercase
Padding:          14px 32px
Border-radius:    0  ← No radius on this system (wine estate formality)

Hover:
  Background:     rgba(197, 165, 90, 0.15)
  Border-color:   #D4AF6A (slightly brighter gold)
  Color:          #D4AF6A
  transition:     all 600ms ease  ← SLOW hover (cinematic)

Active:
  Background:     rgba(197, 165, 90, 0.25)
```

### Filled Button (on Light/Cream Backgrounds)
```
Background:       #722F37 (burgundy)
Text:             #F5F0E8 (cream)
Border:           none
Font:             Playfair Display, 0.875rem / 14px, weight 400, italic
Letter-spacing:   0.12em
Text-transform:   uppercase
Padding:          14px 32px
Border-radius:    0

Hover:
  Background:     #4A1B22 (burgundy dark)
  transition:     background 500ms ease

Active:
  Background:     #3A1018
```

### Ghost / Text Button
```
Background:       transparent
Text:             currentColor (burgundy on light, gold on dark)
Border:           none
Font:             Playfair Display, 0.875rem, weight 400, italic
Letter-spacing:   0.1em
Text-transform:   uppercase
Padding:          8px 0
Border-bottom:    1px solid currentColor
opacity:          0.7

Hover:
  opacity: 1.0
  transition: opacity 400ms ease
  
Usage: Secondary actions, "Learn more" links, non-primary CTAs
```

---

## 7. Cards & Containers

### Wine Card (Standard)
```
Background:       #F5F0E8 (cream)
Border:           none (shadow-free)
Border-radius:    0  ← Formal, no radius
Padding:          32px 28px
overflow:         hidden

No shadow — cards differentiate by background color contrast against section bg.
Against white section: cream card still reads as distinct.
Against dark section: cream card glows.

Title:            H4, Playfair Display 500 italic, #722F37 (burgundy)
Year/vintage:     Label style, Cormorant SC, 0.75rem, uppercase
Body:             Body, Libre Baskerville 400, #2B2B2B
Image area:       Full width top, 200px height, object-fit cover
```

### Vintage Card (Dark)
```
Background:       #2B2B2B (charcoal)
Text:             #F5F0E8 (cream)
Border:           none
Border-radius:    0
Padding:          32px 28px

Accent line:      3px solid #C5A55A at top (top border only)
Title:            H4, Playfair Display 500 italic, #C5A55A (gold)
```

### Pull Quote Container
```
No background, no border, no radius.
Left border:      3px solid #C5A55A
Padding-left:     32px
Margin:           48px 0

Quote:            Playfair Display, 1.5rem, italic, weight 400, #722F37
Attribution:      0.875rem, uppercase, letter-spacing 0.15em, #2B2B2B, opacity 0.6
```

### Timeline Entry Container
```
Position:         relative
Padding-left:     48px (space for timeline line/dot)

Timeline dot:     8px circle, #C5A55A, absolute left 0, top 8px
Timeline line:    1px solid rgba(197, 165, 90, 0.3), absolute left 4px, full height

Year label:       See Type Scale, Year Marker style, #C5A55A
Content:          Standard card content, cream background
```

### Section Containers (Light/Dark alternating)
```
Light sections:   background #F5F0E8, text #2B2B2B
Dark sections:    background #1A1006 (or #722F37 for burgundy wash), text #F5F0E8
Photo sections:   background image full-bleed, overlay gradient
Padding:          96px 0 (vertical), page margins horizontal
```

---

## 8. Forms & Inputs

### Visitor Registration / Tasting Reservation Form
```
Background:       transparent
Border:           none
Border-bottom:    1px solid #C5A55A (gold underline)
Border-radius:    0
Padding:          10px 0 10px
Font:             Libre Baskerville, 1rem / 16px, weight 400
Color:            #F5F0E8 (on dark) or #2B2B2B (on light)
Line-height:      1.5

Placeholder:
  Color:          rgba(245, 240, 232, 0.4) on dark
  Font-style:     italic

Focus:
  Border-bottom:  2px solid #C5A55A
  outline:        none
  transition:     border-width 500ms ease

Label:
  Display:        block
  Font:           Playfair Display, 0.8125rem / 13px, weight 400, italic
  Letter-spacing: 0.1em
  Text-transform: uppercase
  Color:          #C5A55A (on dark) or #722F37 (on light)
  Margin-bottom:  8px
```

### Select / Dropdown
```
Same underline style as text input
Custom chevron: SVG gold arrow
appearance: none
padding-right: 32px
```

### Form Layout
```
Form max-width:   480px
Label-input group: margin-bottom 32px
Submit button: margin-top 48px, centered
```

---

## 9. Images & Media

### Photography (Primary Visual Language)
```
Style:            Full-bleed vineyard photography
Treatment:        Warm color grade — golden hour preferred
                  CSS: filter: saturate(1.1) brightness(0.95) sepia(0.08)
                  (subtle warmth, not obvious filter)

Border-radius:    0 — formality, no crops
Object-fit:       cover
Object-position:  center (landscape) or 60% 40% (horizon rule of thirds)

Full-bleed hero:
  Width: 100vw
  Height: 100vh
  Object-fit: cover
  Overlay: hero gradient (see Color section)
  z-index: -1

Section photography:
  Width: 100% (or half-bleed 50vw on two-column)
  Height: 60vh–80vh
  No border, no radius, no shadow

Card photography:
  Width: 100%
  Height: 200–280px
  Object-fit: cover
```

### Video (Atmospheric)
```
Usage:           Seasonal b-roll, harvest footage, ambient motion
Treatment:       Autoplay, muted, loop, playsinline
Filter:          Matching photo treatment (warm, slightly desaturated)
Position:        Absolute within section, full-bleed background
Overlay:         Required — at minimum 40% dark overlay for text contrast
Border-radius:   0
```

### Photo Captions
```
Font:            Cormorant SC or uppercase-tracked, 0.625rem / 10px
Color:           rgba(245, 240, 232, 0.5) on dark
Letter-spacing:  0.2em
Margin-top:      8px
Text-align:      right (positioning toward photographer credit convention)
```

---

## 10. Animation & Motion

### Core Principle: Cinematic Time
All transitions last 1.5 seconds minimum for key movements. No snap. No bounce. Only slow, inevitable ease.

### Easing Functions
```
--ease-cinematic:   cubic-bezier(0.25, 0.46, 0.45, 0.94)  — Smooth, gentle deceleration
--ease-wine:        cubic-bezier(0.16, 1, 0.3, 1)          — Slow start, decisive end
--ease-pour:        cubic-bezier(0.4, 0, 0.1, 1)            — Fluid pour-like motion
--ease-breath:      cubic-bezier(0.45, 0, 0.55, 1)          — Symmetric, breathing
```

### Duration Scale
```
--duration-micro:   300ms   — Hover color changes
--duration-fast:    600ms   — Button hovers, link colors
--duration-default: 900ms   — Panel slides, nav items
--duration-slow:   1500ms   — Page transitions, section reveals
--duration-cinematic: 2000ms — Hero text reveals, key animations
--duration-epic:   3000ms   — Full-page scene transitions
```

### Signature Animations
```
Horizontal parallax scroll (within chapters):
  CSS scroll-driven animations (or JS scroll listener)
  Background images move at 0.5× scroll rate (classic parallax)
  Text layers at 0.8× (slightly less than scroll)
  Use: transform: translateX() on scroll position

Hero text reveal:
  @keyframes cinematicReveal {
    from { opacity: 0; transform: translateY(30px) skewY(1deg); }
    to   { opacity: 1; transform: translateY(0) skewY(0deg); }
  }
  animation: cinematicReveal 2000ms cubic-bezier(0.16, 1, 0.3, 1) forwards

Image fade-in (on scroll):
  @keyframes imageFade {
    from { opacity: 0; transform: scale(1.03); }
    to   { opacity: 1; transform: scale(1); }
  }
  animation: imageFade 1500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards

Year timeline progress:
  Animated gold line drawing from left to right as user scrolls through timeline
  stroke-dashoffset animation, 2000ms ease
  
Card reveal (stagger):
  Each card delays by 150ms from previous
  opacity: 0 → 1 over 800ms, translateY(20px) → 0
```

### Hover Transitions
```
All hover transitions: 500ms–600ms ease
No color snaps. The wine breathes; so does the UI.

Button hover: 600ms ease (background, border, color all transition)
Nav link hover: 500ms ease (color only)
Image hover scale: transform scale(1.02), 800ms ease
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 11. Icons & Decorative Elements

### Icon System
```
Style:           Custom thin-line SVG icons (not icon library)
                 Wine-specific: glass, bottle, grape, leaf, barrel, corkscrew
Stroke:          1px (wine glass elegance, not bold)
Size:
  SM: 16px — Inline
  MD: 24px — Feature
  LG: 40px — Section icons
  XL: 64px — Illustration-scale icons
Color:           #C5A55A (gold) on dark sections
                 #722F37 (burgundy) on light sections
No fill — stroke-only for lightness and formality.
```

### Dividers
```
Standard divider:   1px solid rgba(197, 165, 90, 0.3) (faint gold)
                    Margin: 48px 0

Decorative vine:    SVG botanical line — horizontal vine/tendril motif
                    Color: rgba(197, 165, 90, 0.4)
                    Height: 24px, full width or 200px centered
                    Used: between major sections, around chapter titles

Year marker line:   40px wide, 1px, #C5A55A (solid gold)
                    Above or below year number
```

### Decorative Typography
```
Chapter numbers:    Roman numerals (I, II, III, IV) or French years (MCMXCII)
                    Position: absolute, large ghost text (opacity 0.06)
                    Font: Playfair Display, 900 weight
                    Color: #C5A55A or #722F37
                    Font-size: clamp(8rem, 15vw, 12rem)

Initial caps:       Drop caps on first paragraph of sections
                    Font: Playfair Display, 900, 4 lines tall
                    Color: #722F37 (burgundy)
                    Float: left, margin 0 12px 0 0
```

### Ornamental Details
```
Botanical SVG frames: Thin grape leaf/vine borders for pull quotes
Gold rule hairlines: 0.5px horizontal rules between content blocks
Wax seal motif: circular SVG in burgundy/gold for CTAs or credits
```

---

## 12. Unique Signature — The ONE Thing

**Horizontal Time Travel — The Parallax Timeline**

Symphony of Vines' signature is the **horizontal scroll narrative** where each panel in a chapter represents a different vintage year, and the background photography parallax creates the sensation of physically moving through time. The horizontal scroll is not just a technical choice — it's a metaphor: time is spatial, and the wine estate is a place you journey through, not a document you read.

The signature implementation:
1. **Year-anchored panels**: Each horizontal panel is a specific year (1987, 1995, 2003...). The year floats in large, translucent numerals behind the content. As you scroll, the year changes — this creates the sensation of a film reel advancing.
2. **Parallax depth stack**: 3 layers move at different rates:
   - Background photo: 0.4× scroll speed (slowest)
   - Mid-layer text/year: 0.7× scroll speed
   - Foreground content: 1× (normal)
   This creates genuine 3D depth from 2D layers.
3. **Gold thread**: A horizontal gold line runs the full width of the timeline, with vintage dots at each year marker. This is the visual "spine" of the narrative — the thread of time.

When implementing: The horizontal scroll sections must be wrapped so that vertical page scroll pauses while horizontal scroll is active (use JS intersection observer to toggle body scroll lock). This is essential to the "captured" sensation — the user is in the timeline, not scrolling past it.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* ============================================
     COLOR TOKENS — SYMPHONY OF VINES
  ============================================ */

  /* Primary Palette */
  --color-burgundy:        #722F37;
  --color-burgundy-dark:   #4A1B22;
  --color-burgundy-deeper: #3A1018;
  --color-burgundy-light:  #D4A0A5;
  --color-gold:            #C5A55A;
  --color-gold-dark:       #8C7239;
  --color-gold-bright:     #D4AF6A;
  --color-gold-light:      #E8D9AD;
  --color-green:           #2D4F2C;
  --color-green-dark:      #1A301A;
  --color-green-light:     #7A9E78;
  --color-cream:           #F5F0E8;
  --color-cream-dark:      #E8E0D0;
  --color-charcoal:        #2B2B2B;
  --color-warm-black:      #1A1006;
  --color-white:           #FFFFFF;

  /* Semantic Colors */
  --color-bg-light:        var(--color-cream);
  --color-bg-dark:         var(--color-warm-black);
  --color-bg-burgundy:     var(--color-burgundy-dark);
  --color-text-on-light:   var(--color-charcoal);
  --color-text-on-dark:    var(--color-cream);
  --color-accent:          var(--color-gold);
  --color-accent-dark:     var(--color-gold-dark);
  --color-link:            var(--color-burgundy);

  /* ============================================
     TYPOGRAPHY TOKENS
  ============================================ */

  --font-serif:         "Playfair Display", "Cormorant Garamond", "Georgia", serif;
  --font-body:          "Libre Baskerville", "Georgia", "Times New Roman", serif;
  --font-label:         "Cormorant SC", "Playfair Display", serif;

  --font-size-micro:    0.625rem;    /* 10px */
  --font-size-xs:       0.75rem;     /* 12px */
  --font-size-sm:       0.8125rem;   /* 13px */
  --font-size-base:     1.0625rem;   /* 17px */
  --font-size-md:       1.25rem;     /* 20px */
  --font-size-lg:       1.5rem;      /* 24px */
  --font-size-xl:       2rem;        /* 32px */
  --font-size-2xl:      2.5rem;      /* 40px */
  --font-size-3xl:      clamp(2rem, 3.5vw, 3.5rem);
  --font-size-4xl:      clamp(3rem, 5vw, 5rem);
  --font-size-hero:     clamp(4rem, 8vw, 7rem);

  --font-weight-light:    300;
  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;
  --font-weight-black:    900;

  --line-height-cinema:  0.95;
  --line-height-tight:   1.1;
  --line-height-snug:    1.3;
  --line-height-body:    1.75;
  --line-height-loose:   1.8;

  --letter-spacing-tight:    -0.02em;
  --letter-spacing-normal:    0.01em;
  --letter-spacing-wide:      0.1em;
  --letter-spacing-wider:     0.15em;
  --letter-spacing-label:     0.2em;

  /* ============================================
     SPACING TOKENS
  ============================================ */

  --space-1:    0.5rem;    /* 8px */
  --space-2:    1rem;      /* 16px */
  --space-3:    1.5rem;    /* 24px */
  --space-4:    2rem;      /* 32px */
  --space-5:    3rem;      /* 48px */
  --space-6:    4rem;      /* 64px */
  --space-7:    5rem;      /* 80px */
  --space-8:    6rem;      /* 96px */
  --space-9:    7.5rem;    /* 120px */
  --space-10:   10rem;     /* 160px */
  --space-11:   12.5rem;   /* 200px */
  --space-12:   15rem;     /* 240px */

  /* ============================================
     BORDER & SHAPE TOKENS
  ============================================ */

  --radius:          0;      /* Formal — no border radius */
  --border-thin:     0.5px solid rgba(197, 165, 90, 0.3);
  --border-standard: 1px solid rgba(197, 165, 90, 0.3);
  --border-gold:     1.5px solid var(--color-gold);
  --border-cream:    1px solid var(--color-cream-dark);

  /* ============================================
     SHADOW TOKENS
  ============================================ */

  --shadow-none:     none;
  /* Note: Cards use NO shadow — background color differentiation only */

  /* ============================================
     LAYOUT TOKENS
  ============================================ */

  --container-max:        1440px;
  --container-content:    1200px;
  --container-article:     800px;
  --container-narrow:      600px;
  --margin-desktop:         80px;
  --margin-tablet:          48px;
  --margin-mobile:          24px;
  --nav-height:             80px;
  --timeline-dot-size:       8px;

  /* ============================================
     ANIMATION TOKENS
  ============================================ */

  --ease-cinematic:   cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-wine:        cubic-bezier(0.16, 1, 0.3, 1);
  --ease-pour:        cubic-bezier(0.4, 0, 0.1, 1);
  --ease-breath:      cubic-bezier(0.45, 0, 0.55, 1);

  --duration-micro:     300ms;
  --duration-fast:      600ms;
  --duration-default:   900ms;
  --duration-slow:     1500ms;
  --duration-cinematic: 2000ms;
  --duration-epic:      3000ms;

  /* Parallax speed multipliers (use in JS) */
  --parallax-bg:   0.4;   /* Background photo */
  --parallax-mid:  0.7;   /* Year text/mid layer */
  --parallax-fg:   1.0;   /* Foreground content */

  /* ============================================
     OVERLAY GRADIENTS
  ============================================ */

  --overlay-hero:    linear-gradient(to bottom, rgba(26,16,6,0) 0%, rgba(26,16,6,0.7) 60%, rgba(26,16,6,0.95) 100%);
  --overlay-side:    linear-gradient(to right, rgba(26,16,6,0.9) 0%, rgba(26,16,6,0) 60%);
  --overlay-fade:    linear-gradient(to right, #F5F0E8 0%, rgba(245,240,232,0) 100%);

  /* ============================================
     Z-INDEX SCALE
  ============================================ */

  --z-bg:       -1;
  --z-base:      0;
  --z-content:  10;
  --z-overlay:  20;
  --z-nav:     100;
  --z-modal:   200;
}
```
