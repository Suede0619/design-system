# The Monolith Project — Design System
**Source:** monolith.world | **Award:** CSSDA Site of the Day #4, 2025
**Category:** Experimental Art / Anti-Design
**Archetype:** Full-viewport sequential sections, cursor-reactive, anti-aesthetic purity

---

## 1. Overview

The Monolith Project is radical minimalism taken to its logical conclusion: pure black and pure white, monospace type for everything, zero border-radius, zero decorative flourishes. This is not minimalism in the Scandinavian-warm sense — this is confrontational, deliberate, machine-aesthetic anti-design. Every conventional UX pattern is rejected or inverted.

**Design Philosophy:**
- **Binary existence**: #000000 and #FFFFFF only. No greys, no tints, no gradients.
- **Monospace supremacy**: All text — headings, body, labels, everything — in a single monospace typeface
- **Sequential revelation**: Content exists as numbered sections (01, 02, 03...) not categories
- **Cursor as actor**: Mouse position directly influences layout through parallax transforms
- **No affordances**: Buttons don't look like buttons. Links don't look like links. Navigation doesn't look like navigation.
- **Void as content**: Empty space is structural. White space is not rest — it is pressure.

**Target User:** Experimental art audience, digital art collectors, tech-curious creatives. Assumes desktop-first. The experience degrades deliberately on mobile — and that's intentional.

**Layout Pattern:** Full-viewport sections (100vh each), vertically stacked. No sidebar. No persistent chrome. Sequence numbers are the only navigation.

---

## 2. Typography

### Font Families
```
Primary (EVERYTHING): "Space Mono", "JetBrains Mono", "Courier New", monospace
  — Single font. All weights. All contexts. No exceptions.
  — Google Fonts: https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap
  — Alternative: https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap

NO secondary fonts. NO system font fallbacks beyond other monospace faces.
```

### Font Weights
```
Regular:   400  — Body text, paragraph content, labels
Bold:      700  — Section numbers, headings, emphasis

(Space Mono only ships Regular and Bold — this is by design)
(JetBrains Mono: use 300 as "thin", 400 as regular, 700 as bold if using JBM)
```

### Type Scale
```
Section Number:  clamp(4rem, 10vw, 8rem)  — The "01", "02" sequence markers
                 Weight: 700
                 Line-height: 1.0
                 Letter-spacing: -0.04em
                 Color: #FFFFFF on black sections, #000000 on white sections
                 Opacity: 0.08 (ghost/watermark treatment — present but recessive)

Display:         clamp(2.5rem, 5vw, 4rem)  — Hero/section primary statement
                 Weight: 700
                 Line-height: 1.05
                 Letter-spacing: -0.03em

H1:              clamp(2rem, 4vw, 3rem)     — Section titles
                 Weight: 700
                 Line-height: 1.1
                 Letter-spacing: -0.02em

H2:              clamp(1.5rem, 3vw, 2rem)   — Subsection headers
                 Weight: 700
                 Line-height: 1.15
                 Letter-spacing: -0.01em

H3:              1.5rem / 24px              — Minor headers
                 Weight: 400 (not bold — intentional reversal)
                 Line-height: 1.2

Body:            1rem / 16px                — Standard text
                 Weight: 400
                 Line-height: 1.6
                 Letter-spacing: 0.01em     ← Monospace needs slight tracking

Body S:          0.875rem / 14px            — Secondary text, metadata
                 Weight: 400
                 Line-height: 1.5

Caption:         0.75rem / 12px             — Labels, coordinates, data
                 Weight: 400
                 Letter-spacing: 0.08em
                 Text-transform: uppercase

Micro:           0.625rem / 10px            — Technical annotations
                 Letter-spacing: 0.12em
                 Text-transform: uppercase
```

### Typography Rules
- NO text-decoration on any links (underline is a Web 1.0 affordance)
- Cursor changes to pointer on interactive text (the only hover indicator)
- ALL CAPS sections use letter-spacing: 0.1em minimum
- Text selection: background #FFFFFF, color #000000 (or inverted)
- Text rendering: `-webkit-font-smoothing: antialiased; font-variant-ligatures: none;`

---

## 3. Color Palette

### Complete Color Vocabulary (this is the entire palette)
```
Pure Black:   #000000  — Primary background, primary text on white sections
              HSL: 0°, 0%, 0%

Pure White:   #FFFFFF  — Secondary background, primary text on black sections
              HSL: 0°, 0%, 100%
```

### That's it. The entire palette. Two colors.

### Usage System
```
Section backgrounds alternate or contrast by design:
  - Black section: bg #000000, text #FFFFFF
  - White section: bg #FFFFFF, text #000000
  - The choice between black and white sections is content-driven, not systematic

Borders: 1px solid #FFFFFF on black; 1px solid #000000 on white
  — NEVER more than 1px
  — NEVER colored, dashed, or dotted

Overlays: rgba(0,0,0,0.5) for black overlay; rgba(255,255,255,0.5) for white overlay
  — Transparency is only permitted for overlays
  — No transparent elements in standard UI
```

### Anti-rules
```
FORBIDDEN:
  - Any hex value that is not #000000 or #FFFFFF
  - Gradients of any kind
  - Box shadows (including 0 0 0 spread rgba — all shadow is forbidden)
  - Border-radius (see section 6 for the zero-radius mandate)
  - Opacity for decorative purposes (transparency only for cursor/parallax layers)
  - Filter effects (blur, drop-shadow, sepia, etc.)
  - Background images (no textures, no noise, no photography backgrounds)
  - CSS `color-mix()` producing intermediate values
```

### Inversion Logic
```
When the cursor enters certain zones or sections trigger:
  - CSS filter: invert(1) on targeted elements
  - OR programmatic swap of color variables
  - This is the ONLY "color change" permitted — inversion, not new colors
```

---

## 4. Layout System

### Container Logic
```
No fixed max-width container.
Content fills the viewport with controlled margins.

Desktop margins:   80px left and right (5vw, max 80px)
Tablet margins:    40px left and right
Mobile margins:    24px left and right

The absence of a container max-width means content fills generously on large screens.
This is intentional — the monolith scales with the viewport.
```

### Section Architecture
```
Each section:
  min-height:      100vh
  width:           100%
  display:         flex
  flex-direction:  column
  justify-content: center (or flex-start for specific sections)
  padding:         80px (desktop), 48px (tablet), 32px (mobile)
  position:        relative  ← for cursor parallax layers
  overflow:        hidden

Sections do NOT have gaps between them.
Sections snap via scroll-snap (optional — see Animation section).
```

### Grid — Minimalist
```
No grid system. Layout uses:
  1. Flexbox with justify-content: space-between for two-column content
  2. Absolute positioning for decorative type elements (section numbers)
  3. No gutter values — whitespace is controlled via padding and margin, not grid

Two-column split (when used):
  Left: 40% width
  Right: 55% width
  Gap: 5% (implicit)
```

### Spacing Scale
```
--space-1:    8px    — Tight
--space-2:   16px    — Compact
--space-3:   24px    — Default inline
--space-4:   32px    — Default block
--space-5:   48px    — Section padding mobile
--space-6:   64px    — Section padding tablet
--space-7:   80px    — Section padding desktop
--space-8:   96px    — Large vertical rhythm
--space-9:  128px    — Monumental spacing
--space-10: 160px    — Void spaces (intentional emptiness)

Note: Odd spacing values are forbidden. Use only these tokens.
```

### Scroll Architecture
```
Scroll behavior:    smooth
Scroll-snap:        optional scroll-snap-type y mandatory on sections
Section snap:       scroll-snap-align start

No custom scrollbar visible.
Scrollbar: width 0, display none (the void has no scroll indicator)
  ::-webkit-scrollbar { display: none; }
  scrollbar-width: none; /* Firefox */
```

---

## 5. Navigation

### Navigation Philosophy
There is no traditional navigation. The Monolith is experienced sequentially.

### Sequence Numbers (Primary Navigation)
```
Position:        Absolute, bottom-right of each section (or top-right)
Font:            Space Mono, 0.75rem / 12px, weight 400
Letter-spacing:  0.15em
Text-transform:  uppercase
Color:           Contrasting color (#FFFFFF on black, #000000 on white)
Opacity:         0.4 (recessive by default)

Format: "01 / 08" (current / total)

Hover (on section):
  opacity: 1.0
  transition: opacity 300ms ease
```

### Click-to-Section Navigation
```
Each sequence number is a discrete scrollTo anchor.
No persistent nav bar. No hamburger. No menu overlay.

If a nav exists at all:
  - Fixed position, right edge of viewport
  - Vertical stack of bare numbers: 01 02 03 04...
  - Font: Space Mono 10px, letter-spacing 0.1em
  - Color: rgba(255,255,255,0.3) on black; rgba(0,0,0,0.3) on white
  - Active: rgba(255,255,255,1.0) full opacity
  - No background, no container, no border
  - Width: 24px (the numbers only)
```

### No Breadcrumbs, No Footer Nav
```
Breadcrumbs: Do not exist.
Footer: May exist as section "0X / 0X" — the terminal section.
        Not a traditional footer with links.
        Final section contains contact/credit information only.
```

### Exit Points (Links to Other Sites)
```
Displayed as raw text, monospace, no underline.
Hover: cursor pointer, no decoration change.
Font color inverts on hover (filter: invert(1) or swap).
```

---

## 6. Buttons

### Philosophy
Buttons look like text. No button "look."

### Primary Action
```
Background:       Contrasting solid fill
                  — On black section: #FFFFFF background, #000000 text
                  — On white section: #000000 background, #FFFFFF text
Font:             Space Mono, 0.875rem / 14px, weight 700
Letter-spacing:   0.08em
Text-transform:   uppercase
Padding:          14px 24px
Border-radius:    0  ← ZERO RADIUS. ALWAYS.
Border:           1px solid currentColor
Display:          inline-block

Hover:
  Background:     Invert (white bg → black bg, black text → white text)
  transition:     background 0ms, color 0ms  ← NO TRANSITION. Snap-switch.
  cursor:         crosshair  ← Not the standard pointer

Active:
  opacity: 0.7 for 100ms then restore
```

### Secondary Action
```
Background:       transparent
Text:             currentColor
Border:           1px solid currentColor
Font:             Space Mono, 0.875rem / 14px, weight 400
Letter-spacing:   0.06em
Text-transform:   uppercase
Padding:          12px 22px
Border-radius:    0

Hover:
  Background:     currentColor
  Color:          contrasting color (inversion)
  transition:     none (immediate)
```

### Ghost / Minimal Action
```
Background:       transparent
Text:             currentColor, opacity: 0.5
Border:           none
Font:             Space Mono, 0.875rem / 14px, weight 400
Letter-spacing:   0.1em
Text-transform:   uppercase
Padding:          8px 0
Border-radius:    0
Border-bottom:    1px solid currentColor

Hover:
  opacity: 1.0
  transition: opacity 200ms linear
```

### Cursor Override
```
All interactive elements use:
  cursor: crosshair

Standard pointer cursor is not used on this site.
```

---

## 7. Cards & Containers

### Card Philosophy
Cards as a UI pattern are rejected. Content exists in the void.

### Content Blocks (What Cards Become)
```
Background:       Transparent (inherits section bg)
Border:           1px solid currentColor  ← if delineation is needed
Border-radius:    0  ← ZERO ALWAYS
Padding:          32px
Margin:           0 (use section padding for spacing)

When a boundary IS needed:
  — Use 1px top border only (like a table row)
  — OR use whitespace (preferred)
  — Never use background fills to create "card" separation
```

### Text Block Container
```
Max-width:       720px (readability)
Position:        relative (for number positioning)
No background, no border, no radius, no shadow.
```

### Definition/Data Blocks
```
Layout:          2-column flex (label | value)
Label:           Space Mono, 0.75rem, uppercase, letter-spacing 0.1em, opacity 0.4
Value:           Space Mono, 0.875rem, weight 700
Border-top:      1px solid currentColor (separates rows)
Padding:         12px 0
```

### Full-Bleed Text Zone
```
Some sections use text that stretches edge-to-edge:
  font-size: clamp(3rem, 8vw, 7rem)
  font-weight: 700
  letter-spacing: -0.04em
  line-height: 0.9
  white-space: nowrap (or overflow clip with marquee)
  This is structural typography, not content.
```

---

## 8. Forms & Inputs

### Input Philosophy
Forms are hostile to the aesthetic but necessary for contact. They are rendered as simply as possible.

### Text Input
```
Background:       transparent
Border:           none
Border-bottom:    1px solid currentColor  ← underline only
Border-radius:    0
Padding:          8px 0
Font:             Space Mono, 1rem / 16px, weight 400
Color:            currentColor
Line-height:      1.5

Placeholder:
  Color:          currentColor, opacity: 0.3
  font-style:     normal

Focus:
  outline:        none
  border-bottom:  2px solid currentColor  ← thickens by 1px only
  transition:     border-width 0ms  ← snap, no animation

Label:
  Display:        block
  Font:           Space Mono, 0.75rem, uppercase, letter-spacing 0.1em
  Color:          currentColor, opacity: 0.5
  Margin-bottom:  8px
```

### Textarea
```
Same as input, but:
  min-height:     96px
  resize:         vertical
  border:         1px solid currentColor (all sides — enough content to warrant boundary)
  padding:        12px
```

### Submit / Form Button
```
See Buttons section (Primary Action).
margin-top: 32px
width: auto (never full-width)
```

### No Custom Checkboxes/Radios
```
Browser default appearance for checkboxes and radios.
accent-color: currentColor (CSS accent-color property)
This is intentionally raw.
```

---

## 9. Images & Media

### Image Philosophy
The Monolith minimizes photography. When images appear, they are treated as pure data.

### Photography Rules
```
All images:
  filter: grayscale(100%) contrast(1.1)  ← stark B&W
  border-radius: 0  ← ZERO
  border: 1px solid currentColor (optional)

Object-fit: cover
Object-position: center

Hover (interactive images):
  filter: invert(1)  ← full inversion on hover
  transition: filter 0ms  ← instant, no ease

Image captions:
  Font: Space Mono, 0.625rem / 10px
  Letter-spacing: 0.15em
  Uppercase
  opacity: 0.4
  Margin-top: 8px
```

### Video
```
Video elements:
  grayscale(100%) — always
  No custom controls. Native browser controls.
  autoplay muted loop playsInline (for atmospheric video)
  No poster image — shows first frame
  
Video containers:
  border-radius: 0
  overflow: hidden
  border: 1px solid currentColor (if bounded)
```

### No Illustrations
```
The Monolith does not use illustrations.
The content IS the art.
SVG use: data visualization or precise geometric shapes only.
SVG fills: #FFFFFF or #000000 only.
```

---

## 10. Animation & Motion

### Motion Philosophy
Motion exists only for cursor interaction and scroll revelation. No decorative animations.

### Cursor Parallax (Signature Feature)
```javascript
// Core cursor tracking implementation target
// Elements with data-parallax="[factor]" respond to mouse position

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;   // -1 to 1
  const y = (e.clientY / window.innerHeight - 0.5) * 2;  // -1 to 1
  
  parallaxElements.forEach(el => {
    const factor = parseFloat(el.dataset.parallax) || 0.03;
    el.style.transform = `translate(${x * factor * 100}px, ${y * factor * 100}px)`;
  });
});

// Typical factor values:
//   0.02 — subtle background layer (large text, section numbers)
//   0.04 — mid-ground elements (content blocks)
//   0.08 — foreground elements (focal images, key text)
//   0.15 — extreme foreground (cursor-following elements)
```

### CSS Transitions
```
Cursor parallax:    transform  — NO transition (direct tracking, no lag)
                    OR transition: transform 60ms linear (minimal lag for smooth feel)

Color inversions:   transition: none (snap inversion — mechanical feel)

Opacity reveals:    transition: opacity 400ms linear

Scroll reveals:
  @keyframes revealUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  animation: revealUp 600ms cubic-bezier(0.16, 1, 0.3, 1) forwards

Intersection Observer threshold: 0.2 (triggers at 20% visibility)
```

### What Is FORBIDDEN
```
- bounce / spring eases
- color transitions (colors snap, never tween)
- rotation animations (unless cursor-driven)
- scale animations on hover
- parallax backgrounds (CSS background-attachment: fixed is NOT used)
- scroll progress bars
- loading spinners (if loading is needed: use a counter 00...99...)
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable cursor parallax via JS flag check */
  /* Keep reveal animations but reduce to opacity-only */
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. Icons & Decorative Elements

### Icon Philosophy
Icons are not used. Text communicates.

### If Icons Must Exist
```
Style:           Custom SVG geometry only
Fills:           #FFFFFF or #000000 — no other colors
Stroke:          1px (if stroke-based) — no thicker
Size:            16px × 16px or 24px × 24px only
Border-radius:   0 on any containing element

Standard icon libraries: FORBIDDEN
Emoji: FORBIDDEN (too playful)
```

### Decorative Text Elements
```
Section numbers (large ghost):
  Position: absolute, top-left or bottom-right
  Font-size: clamp(8rem, 20vw, 16rem)
  Font-weight: 700
  Color: currentColor
  Opacity: 0.04  ← barely visible, structural not decorative
  user-select: none
  pointer-events: none
  z-index: 0

Running text (marquee):
  A single line of repeating text that scrolls horizontally
  Font-size: clamp(1rem, 2vw, 1.5rem)
  Uppercase, letter-spacing 0.1em, opacity 0.3
  animation: marquee 30s linear infinite
  Separator between repeats: " — " or " · "
```

### Line Dividers
```
1px horizontal rule: border-top: 1px solid currentColor
  opacity: 0.2 (recessive)
  margin: 0 (full width)
  
Do NOT use <hr> tags styled differently.
Do NOT use gradient dividers.
Do NOT use thick (>1px) dividers.
```

### Coordinate/Technical Annotations
```
Monospace labels at edge of sections:
  Font: Space Mono, 0.625rem / 10px
  Uppercase, letter-spacing 0.15em
  Position: absolute, corners
  opacity: 0.2
  Content: coordinates, timestamps, version strings
  These are decorative but reinforce machine aesthetic
```

---

## 12. Unique Signature — The ONE Thing

**The Cursor-as-Actor Parallax System**

Every other design decision in this system flows from one commitment: **the cursor is part of the artwork**. The user's mouse position is tracked and directly transforms page elements in real-time, creating the sensation that the monolith responds to human presence.

The signature implementation:
1. **Zero-lag depth layers**: foreground text tracks mouse at 0.08 factor, mid elements at 0.04, background numbers at 0.02 — creating a pseudo-3D space from 2D elements
2. **The void pressure**: Large, ghost-opacity section numbers positioned absolutely create a spatial anchor for the parallax system — you feel the depth because you see where the layers begin and end
3. **Mechanical color switching**: When buttons or key elements are hovered, colors SNAP (no transition) — the mechanical snap-inversion reinforces the machine/monolith metaphor

When implementing: The parallax layers must have `will-change: transform` for GPU acceleration. Performance matters — a janky parallax destroys the effect. Test at 60fps. If device GPU is inadequate (check with `window.matchMedia('(prefers-reduced-motion)')`), disable parallax entirely.

The cursor should always be `crosshair` across the entire viewport. This single cursor change immediately signals "this is not a normal website."

---

## 13. CSS Custom Properties Template

```css
:root {
  /* ============================================
     COLOR TOKENS — THE MONOLITH PROJECT
     (Binary palette only — two values total)
  ============================================ */

  --color-black:    #000000;
  --color-white:    #FFFFFF;

  /* Semantic aliases */
  --color-bg:       var(--color-black);   /* Default: black section */
  --color-text:     var(--color-white);   /* Default: white on black */
  --color-border:   var(--color-white);   /* 1px borders */

  /* Inverted section overrides (apply to .section--white) */
  /* .section--white { --color-bg: #FFFFFF; --color-text: #000000; --color-border: #000000; } */

  /* Overlay (only transparency permitted) */
  --color-overlay-black:  rgba(0, 0, 0, 0.5);
  --color-overlay-white:  rgba(255, 255, 255, 0.5);

  /* ============================================
     TYPOGRAPHY TOKENS
  ============================================ */

  --font-primary:    "Space Mono", "JetBrains Mono", "Courier New", monospace;

  --font-size-micro:   0.625rem;   /* 10px */
  --font-size-xs:      0.75rem;    /* 12px */
  --font-size-sm:      0.875rem;   /* 14px */
  --font-size-base:    1rem;       /* 16px */
  --font-size-lg:      1.5rem;     /* 24px */
  --font-size-xl:      2rem;       /* 32px */
  --font-size-2xl:     3rem;       /* 48px */
  --font-size-display: clamp(2.5rem, 5vw, 4rem);
  --font-size-giant:   clamp(4rem, 10vw, 8rem);   /* Section numbers */
  --font-size-void:    clamp(8rem, 20vw, 16rem);  /* Ghost background numbers */

  --font-weight-regular:  400;
  --font-weight-bold:     700;

  --line-height-tight:    1.0;
  --line-height-normal:   1.1;
  --line-height-body:     1.6;

  --letter-spacing-tight:  -0.04em;
  --letter-spacing-normal:  0.01em;
  --letter-spacing-wide:    0.08em;
  --letter-spacing-wider:   0.1em;
  --letter-spacing-widest:  0.15em;

  /* ============================================
     SPACING TOKENS
  ============================================ */

  --space-1:    8px;
  --space-2:   16px;
  --space-3:   24px;
  --space-4:   32px;
  --space-5:   48px;
  --space-6:   64px;
  --space-7:   80px;
  --space-8:   96px;
  --space-9:  128px;
  --space-10: 160px;

  /* ============================================
     LAYOUT TOKENS
  ============================================ */

  --margin-desktop:  80px;
  --margin-tablet:   40px;
  --margin-mobile:   24px;
  --content-max:     720px;

  /* ============================================
     BORDER TOKENS
     ALL border-radius values MUST be 0
  ============================================ */

  --border-width:    1px;
  --border-style:    solid;
  --border-color:    var(--color-border);
  --border:          var(--border-width) var(--border-style) var(--border-color);
  --radius:          0;  /* ALWAYS ZERO — this is architectural */

  /* ============================================
     SHADOW TOKENS
     NO shadows permitted — all zero
  ============================================ */

  --shadow:          none;  /* Shadows forbidden */
  --shadow-any:      none;  /* If a dev tries to add shadow, it's none */

  /* ============================================
     ANIMATION TOKENS
  ============================================ */

  --ease-mechanical:  none;       /* Colors snap — no easing */
  --ease-reveal:      cubic-bezier(0.16, 1, 0.3, 1);
  --ease-linear:      linear;

  --duration-snap:    0ms;      /* Immediate — for color inversions */
  --duration-reveal:  600ms;    /* Scroll reveal */
  --duration-opacity: 400ms;    /* Opacity transitions */
  --duration-cursor:  60ms;     /* Minimal cursor lag for parallax */

  /* ============================================
     PARALLAX FACTORS
  ============================================ */

  --parallax-bg:          0.02;  /* Ghost number layer */
  --parallax-mid:         0.04;  /* Mid content layer */
  --parallax-fg:          0.08;  /* Foreground content */
  --parallax-accent:      0.15;  /* Maximum depth layer */

  /* ============================================
     OPACITY SCALE (for text/element recession)
  ============================================ */

  --opacity-ghost:    0.04;   /* Background numbers */
  --opacity-muted:    0.2;    /* Dividers, annotations */
  --opacity-subtle:   0.3;    /* Coordinates, micro-labels */
  --opacity-mid:      0.4;    /* Secondary labels */
  --opacity-secondary: 0.5;  /* Helper text */
  --opacity-full:     1.0;    /* Active/primary elements */

  /* ============================================
     Z-INDEX SCALE
  ============================================ */

  --z-void:       -1;   /* Behind everything (ghost numbers) */
  --z-base:        0;   /* Section content */
  --z-mid:        10;   /* Parallax mid layer */
  --z-fg:         20;   /* Foreground parallax */
  --z-overlay:   100;   /* Overlays */
  --z-nav:       200;   /* Sequence nav */
  --z-cursor:    999;   /* Cursor follower if used */
}

/* ============================================
   SECTION INVERSION (White sections)
============================================ */
.section--white {
  --color-bg:     #FFFFFF;
  --color-text:   #000000;
  --color-border: #000000;
  background-color: var(--color-bg);
  color: var(--color-text);
}

/* ============================================
   GLOBAL CURSOR OVERRIDE
============================================ */
*, *:hover {
  cursor: crosshair !important;
}

/* ============================================
   SCROLLBAR SUPPRESSION
============================================ */
::-webkit-scrollbar { display: none; }
html { scrollbar-width: none; }
```
