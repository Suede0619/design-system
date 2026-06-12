# Arc Browser Design System
**Site:** arc.net
**Award:** Multiple awards (Awwwards, Webby, Product Hunt)
**Category:** Browser / Consumer App — Gradient Whimsy
**Design DNA:** Soft gradients, illustration-forward, pill shapes, playful premium

---

## 1. Overview

Arc's site is a love letter to a browser that cares about you. Where most browser marketing is feature-forward and corporate, Arc leads with personality, illustration, and genuine delight. The gradient palette — lavender to coral to teal — communicates breadth: Arc isn't one thing, it's everything your browsing life needs, and it's colorful.

The visual language is soft, rounded, and generous. Nothing has a sharp corner. Buttons are pills (`999px` radius). Cards have `16–20px` radius. Even the screenshots of the product float with a dreamy softness, gentle drop shadows and subtle animation making them feel alive rather than captured.

Illustration is load-bearing — not decorative. Characters and scenes drawn in Arc's palette carry emotional weight that marketing copy cannot. The font is **SF Pro Display** (Apple's own), which signals native Mac quality and reinforces the "this belongs on your Mac" message.

The overall effect is like a beautifully designed indie app that somehow scaled: premium, personal, and warm. The gradient whimsy is controlled enough to feel sophisticated and loose enough to feel human.

**Core Personality:** Whimsical. Warm. Premium-indie. Personal. Mac-native.

---

## 2. Typography

### Font Family
- **Primary:** SF Pro Display / SF Pro Text (Apple system font, matches macOS UI)
- **Web fallback stack:** `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif`
- **Monospace:** `'SF Mono', 'SFMono-Regular', Menlo, Monaco, 'Cascadia Code', monospace`

### Weights
| Token | Weight | Usage |
|-------|--------|-------|
| `--font-light` | 300 | Large display callout numbers, editorial |
| `--font-regular` | 400 | Body copy, descriptions |
| `--font-medium` | 500 | Sub-headings, nav items, labels |
| `--font-semibold` | 600 | Feature titles, card headings |
| `--font-bold` | 700 | Primary headings, CTAs |

### Scale
| Role | Size (px) | Size (rem) | Line-height | Letter-spacing |
|------|-----------|------------|-------------|----------------|
| Display XL | 72px | 4.5rem | 1.05 | -0.03em |
| Display L | 56px | 3.5rem | 1.1 | -0.025em |
| Heading 1 | 44px | 2.75rem | 1.15 | -0.02em |
| Heading 2 | 34px | 2.125rem | 1.2 | -0.015em |
| Heading 3 | 26px | 1.625rem | 1.3 | -0.01em |
| Heading 4 | 20px | 1.25rem | 1.4 | 0em |
| Body L | 20px | 1.25rem | 1.7 | 0em |
| Body M | 17px | 1.0625rem | 1.65 | 0em |
| Body S | 15px | 0.9375rem | 1.6 | 0em |
| Caption | 13px | 0.8125rem | 1.5 | 0.01em |

### Typography Rules
- SF Pro Display is the voice of macOS — every headline reinforces native trust
- Body at 17px, generous line-height (1.65) for comfortable long-form reading
- Negative letter-spacing on all headings — SF Pro at large sizes benefits dramatically
- Gradient text on select display headings: `background-clip: text` technique
- `font-smoothing: antialiased` critical for SF Pro web rendering
- Always test on Retina: SF Pro is designed for HiDPI and may look thin on 1x screens

---

## 3. Color Palette

### Core Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | `#FAFAFA` | 250, 250, 250 | Page background — barely off-white |
| Surface | `#F0F0F0` | 240, 240, 240 | Card backgrounds, subtle fills |
| Surface Warm | `#F5F3F0` | 245, 243, 240 | Warm surface variant |
| White | `#FFFFFF` | 255, 255, 255 | Cards, modals, clean areas |
| Text Primary | `#1A1A1A` | 26, 26, 26 | All primary text |
| Text Secondary | `#6B7280` | 107, 114, 128 | Body, descriptions |
| Text Tertiary | `#9CA3AF` | 156, 163, 175 | Captions, placeholders |

### Brand Gradient Colors
| Name | Hex | RGB | Arc Meaning |
|------|-----|-----|-------------|
| Lavender | `#C4B5FD` | 196, 181, 253 | Calm, focused browsing |
| Coral | `#FB923C` | 251, 146, 60 | Energy, discovery |
| Teal | `#5EEAD4` | 94, 234, 212 | Clarity, productivity |

### Extended Gradient Spectrum
The three brand colors anchor a wider spectral gradient used across sections:
```css
/* Full spectrum */
--gradient-arc: linear-gradient(135deg,
  #C4B5FD 0%,     /* lavender */
  #F9A8D4 25%,    /* pink */
  #FB923C 55%,    /* coral */
  #5EEAD4 100%);  /* teal */

/* Soft version for backgrounds */
--gradient-arc-soft: linear-gradient(135deg,
  rgba(196,181,253,0.3) 0%,
  rgba(251,146,60,0.2) 55%,
  rgba(94,234,212,0.25) 100%);

/* Button gradient */
--gradient-arc-btn: linear-gradient(90deg,
  #C4B5FD 0%,
  #FB923C 50%,
  #5EEAD4 100%);
```

### Individual Brand Tones
| Name | Hex | Light Tint | Usage |
|------|-----|-----------|-------|
| Lavender | `#C4B5FD` | `#EDE9FE` | Features, calm sections |
| Lavender Dark | `#7C3AED` | — | Text on light lavender bg |
| Coral | `#FB923C` | `#FED7AA` | Energetic sections |
| Coral Dark | `#EA580C` | — | Text on light coral bg |
| Teal | `#5EEAD4` | `#CCFBF1` | Clean, airy sections |
| Teal Dark | `#0D9488` | — | Text on light teal bg |

### Semantic Colors
| Role | Hex | Usage |
|------|-----|-------|
| Success | `#10B981` | Completion, sync states |
| Warning | `#F59E0B` | Caution, storage warnings |
| Error | `#EF4444` | Errors, danger states |
| Info | `#3B82F6` | Updates, informational |

---

## 4. Layout System

### Container
```
Max-width:     1120px
Padding (desktop): 0 64px
Padding (tablet):  0 40px
Padding (mobile):  0 24px
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
- **Feature sections:** 2-column, 40–60px gap (generous breathing)
- **Card grid:** 3-column on desktop, 1-2 on mobile
- **Mobile:** 4-column, 16px gap

### Spacing Scale (8px system, flowing and generous)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro-gaps, icon spacing |
| `--space-2` | 8px | Badge padding, tight pairs |
| `--space-3` | 12px | Component internal |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 20px | Small card padding |
| `--space-6` | 24px | Medium spacing |
| `--space-8` | 32px | Card padding |
| `--space-10` | 40px | Section sub-spacing |
| `--space-12` | 48px | Large section gap |
| `--space-14` | 56px | Section breathing |
| `--space-16` | 64px | Section padding |
| `--space-20` | 80px | Feature sections |
| `--space-24` | 96px | Hero sub-section |
| `--space-32` | 128px | Hero top |

### Section Philosophy
- Every section breathes — minimum `padding-block: 80px`
- Illustration elements break grid intentionally
- Background gradient sections alternate every 2–3 sections

---

## 5. Navigation

### Structure
Light, floating navigation. The Arc logo — a simple arc shape in gradient — is central to identity. Navigation is minimal, letting the product speak.

### Nav Bar
```
Height:         64px
Background:     rgba(250,250,250,0.88)
Border-bottom:  1px solid rgba(0,0,0,0.06)
Backdrop-filter: blur(16px)
Font:           -apple-system 500, 15px
Color:          #1A1A1A
```

### Nav Items
```
Spacing:    24px between items
Color:      #1A1A1A
Hover:      opacity 0.65
Transition: opacity 150ms ease
Active:     font-weight 600
```

### CTA Buttons (Nav)
- "Download Arc" — gradient pill button (signature)
- "Learn more" — ghost, text only

### Download Button (Nav) — Signature
```css
background:    linear-gradient(90deg, #C4B5FD, #FB923C, #5EEAD4);
color:         #1A1A1A;  /* dark text on light gradient */
font:          -apple-system 600, 14px;
padding:       9px 20px;
border-radius: 999px;
border:        none;
```

### Mobile Nav
- Minimal: just logo and hamburger
- Drawer from right, white background
- Gradient accent on active item

---

## 6. Buttons

### Primary Button (Gradient Pill — Signature)
```css
background:    linear-gradient(90deg, #C4B5FD 0%, #FB923C 50%, #5EEAD4 100%);
background-size: 200% 100%;
color:         #1A1A1A;
font:          -apple-system 600, 16px;
padding:       14px 32px;
border-radius: 999px;
border:        none;
transition:    background-position 300ms ease,
               filter 200ms ease,
               transform 150ms ease;

/* Hover */
background-position: right center;
filter:        brightness(1.08);
transform:     translateY(-1px);
```

### Primary Button (Dark variant)
```css
background:    #1A1A1A;
color:         #FFFFFF;
font:          -apple-system 600, 16px;
padding:       14px 32px;
border-radius: 999px;
border:        none;
transition:    background 150ms ease, transform 150ms ease;

/* Hover */
background:    #2D2D2D;
transform:     translateY(-1px);
```

### Secondary Button
```css
background:    #FFFFFF;
color:         #1A1A1A;
font:          -apple-system 500, 16px;
padding:       14px 32px;
border-radius: 999px;
border:        1.5px solid rgba(0,0,0,0.12);
transition:    background 150ms ease, border-color 150ms ease;

/* Hover */
background:    #F5F5F5;
border-color:  rgba(0,0,0,0.2);
```

### Ghost Button
```css
background:    transparent;
color:         #6B7280;
font:          -apple-system 500, 15px;
padding:       12px 24px;
border-radius: 999px;
border:        1px solid rgba(0,0,0,0.08);
transition:    all 150ms ease;

/* Hover */
color:         #1A1A1A;
background:    rgba(0,0,0,0.04);
border-color:  rgba(0,0,0,0.14);
```

### Platform Download Button (Large CTA)
```css
display:       inline-flex;
align-items:   center;
gap:           12px;
background:    linear-gradient(135deg, #C4B5FD, #FB923C);
color:         #FFFFFF;
font:          -apple-system 700, 18px;
padding:       18px 40px;
border-radius: 999px;
box-shadow:    0 8px 32px rgba(196,181,253,0.4);
transition:    all 250ms ease;

/* Hover */
filter:        brightness(1.1);
box-shadow:    0 12px 48px rgba(196,181,253,0.5);
transform:     translateY(-2px);
```

### Sizes
| Size | Padding | Font | Radius |
|------|---------|------|--------|
| Large | 18px 40px | 18px | 999px |
| Default | 14px 32px | 16px | 999px |
| Small | 10px 20px | 14px | 999px |
| Compact | 7px 14px | 13px | 999px |

---

## 7. Cards & Containers

### Feature Card (Float with Shadow)
```css
background:    #FFFFFF;
border-radius: 20px;
padding:       36px;
box-shadow:    0 4px 24px rgba(0,0,0,0.06),
               0 16px 48px rgba(0,0,0,0.04);
transition:    box-shadow 250ms ease, transform 250ms ease;

/* Hover */
box-shadow:    0 8px 40px rgba(0,0,0,0.1),
               0 24px 64px rgba(0,0,0,0.06);
transform:     translateY(-4px);
```

### Gradient Tinted Card
```css
background:    linear-gradient(135deg,
               rgba(196,181,253,0.12) 0%,
               rgba(94,234,212,0.08) 100%);
border:        1px solid rgba(196,181,253,0.2);
border-radius: 20px;
padding:       32px;
backdrop-filter: blur(8px);
```

### Screenshot Container (Floating)
```css
border-radius: 16px;
overflow:      hidden;
box-shadow:    0 24px 80px rgba(0,0,0,0.12),
               0 8px 24px rgba(0,0,0,0.08);
/* Float animation applied via class */
```

### Testimonial Card
```css
background:    #FFFFFF;
border-radius: 20px;
padding:       32px;
box-shadow:    0 4px 20px rgba(0,0,0,0.06);
/* Avatar: 48px pill photo */
/* Gradient underline below name */
```

### App Store Rating Card
```css
background:    rgba(196,181,253,0.1);
border:        1px solid rgba(196,181,253,0.2);
border-radius: 20px;
padding:       28px;
text-align:    center;
```

### Section Background Panel
Full-width background sections:
```css
background:    linear-gradient(180deg,
               rgba(196,181,253,0.08) 0%,
               rgba(94,234,212,0.06) 100%);
/* OR: solid tint */
background:    rgba(196,181,253,0.06);
padding:       80px 0;
```

---

## 8. Forms & Inputs

### Text Input
```css
background:    #FFFFFF;
border:        1.5px solid #E5E7EB;
border-radius: 16px;
color:         #1A1A1A;
font:          -apple-system 400, 16px;
padding:       14px 18px;
outline:       none;
transition:    border-color 150ms ease, box-shadow 150ms ease;

/* Focus */
border-color:  #C4B5FD;
box-shadow:    0 0 0 3px rgba(196,181,253,0.2);

/* Placeholder */
color:         #9CA3AF;
```

### Email Capture (Waitlist Form — Hero Pattern)
```css
/* Wrapper */
display:       flex;
background:    #FFFFFF;
border:        1.5px solid #E5E7EB;
border-radius: 999px;
padding:       6px 6px 6px 20px;
gap:           0;
box-shadow:    0 4px 16px rgba(0,0,0,0.08);

/* Input (inside wrapper) */
border:        none;
background:    transparent;
flex:          1;
font:          -apple-system 400, 16px;
color:         #1A1A1A;
outline:       none;

/* Submit button (inside wrapper) */
border-radius: 999px;
padding:       10px 24px;
background:    linear-gradient(90deg, #C4B5FD, #FB923C, #5EEAD4);
```

### Label
```css
font:          -apple-system 500, 14px;
color:         #6B7280;
margin-bottom: 6px;
```

### Checkbox
```css
width:         20px;
height:        20px;
border:        1.5px solid #D1D5DB;
border-radius: 6px;
transition:    all 150ms ease;

/* Checked */
background:    linear-gradient(135deg, #C4B5FD, #FB923C);
border:        none;
```

### Select
Inherits text input styling with `border-radius: 999px` pill variant for prominent selects.

---

## 9. Images & Media

### Floating Screenshots (Hero)
The defining visual device — browser screenshots that appear to float and breathe:
```css
border-radius: 16px;
overflow:      hidden;
box-shadow:    0 32px 80px rgba(0,0,0,0.15),
               0 8px 24px rgba(0,0,0,0.08);
animation:     float-shadow 6s ease-in-out infinite;
```

```css
@keyframes float-shadow {
  0%, 100% {
    transform:  translateY(0);
    box-shadow: 0 32px 80px rgba(0,0,0,0.15),
                0 8px 24px rgba(0,0,0,0.08);
  }
  50% {
    transform:  translateY(-12px);
    box-shadow: 0 48px 100px rgba(0,0,0,0.18),
                0 16px 40px rgba(0,0,0,0.10);
  }
}
```

### Illustration Characters
Arc uses a consistent illustration style for characters and scenes:
- **Style:** Flat, geometric, warm colors matching brand palette
- **Technique:** Solid fills with subtle gradient, minimal shadow
- **Characters:** Diverse people using laptops, reading, collaborating
- **Backgrounds:** Gradient blob environments
- Sizes: 240–480px in feature sections

### App Icon (Prominent)
Arc's app icon — gradient arc shape — appears large and centered in hero:
```css
width:         120px;
height:        120px;
border-radius: 28px;  /* macOS icon radius */
box-shadow:    0 16px 48px rgba(196,181,253,0.4);
```

### Before/After Screenshots
Comparison of old vs. new browsing experience:
```css
border-radius: 12px;
border:        1px solid rgba(0,0,0,0.06);
box-shadow:    0 8px 32px rgba(0,0,0,0.08);
```

### Video / Demo
```css
border-radius: 20px;
overflow:      hidden;
box-shadow:    0 32px 80px rgba(0,0,0,0.15);
border:        2px solid rgba(255,255,255,0.8);
```

### Avatar Stack (Social Proof)
```css
.avatar {
  width:        40px;
  height:       40px;
  border-radius: 50%;
  border:       2px solid #FAFAFA;
}
.avatar + .avatar {
  margin-left:  -10px;
}
```

---

## 10. Animation & Motion

### Philosophy
Arc's motion is the site's heartbeat. Illustrations animate, screenshots float, gradients shift. Motion is warm, organic, and never mechanical. The browser feels alive.

### Timing Functions
```css
--ease-arc:       cubic-bezier(0.25, 0.1, 0.25, 1.0);   /* smooth, deliberate */
--ease-float:     cubic-bezier(0.37, 0, 0.63, 1);        /* breathing motion */
--ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1);     /* playful bounce */
--ease-out:       cubic-bezier(0, 0, 0.2, 1);
--ease-gradient:  linear;
```

### Duration Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--dur-fast` | 150ms | Hover micro-interactions |
| `--dur-normal` | 250ms | Standard transitions |
| `--dur-medium` | 400ms | Section entrances |
| `--dur-slow` | 600ms | Feature reveals |
| `--dur-float` | 6000ms | Floating screenshots |
| `--dur-drift` | 8000ms | Illustration drift |

### Screenshot Float
```css
@keyframes float {
  0%, 100% {
    transform:  translateY(0px);
    box-shadow: 0 32px 80px rgba(0,0,0,0.15);
  }
  50% {
    transform:  translateY(-14px);
    box-shadow: 0 48px 100px rgba(0,0,0,0.18);
  }
}
animation: float 6s var(--ease-float) infinite;
```

### Gradient Orb Drift
```css
@keyframes orb-drift {
  0%   { transform: translate(0, 0) scale(1); }
  33%  { transform: translate(30px, -20px) scale(1.05); }
  66%  { transform: translate(-20px, 15px) scale(0.97); }
  100% { transform: translate(0, 0) scale(1); }
}
animation: orb-drift 12s ease-in-out infinite;
```

### Scroll Entrance
```css
/* Initial */
opacity: 0;
transform: translateY(28px);

/* Visible */
opacity: 1;
transform: translateY(0);
transition: opacity 600ms var(--ease-out),
            transform 600ms var(--ease-out);
transition-delay: calc(var(--stagger, 0) * 80ms);
```

### Button Hover (Gradient Brighten)
```css
transition: filter 200ms ease, transform 150ms ease, box-shadow 200ms ease;

/* Hover */
filter:    brightness(1.1) saturate(1.1);
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(196,181,253,0.4);
```

### Illustration Entrance
```css
@keyframes illustration-in {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
animation: illustration-in 700ms var(--ease-spring) both;
```

---

## 11. Icons & Decorative Elements

### Icon System
- **Style:** Rounded, friendly — matches SF Pro's rounded forms
- **Stroke:** 1.5–2px, `round` line-cap and line-join
- **Sizes:** 16px / 20px / 24px / 32px
- **Colors:** `#1A1A1A` default, gradient for emphasis, tinted for categories

### Gradient Icon Treatment
```css
/* SVG gradient via linearGradient element */
/* Or: wrapper with gradient bg + mask */
.icon-gradient {
  background:         var(--gradient-arc);
  -webkit-mask:       url(icon.svg) center / contain no-repeat;
  mask:               url(icon.svg) center / contain no-repeat;
}
```

### Gradient Orbs (Background Decoration)
Large, blurred radial gradient circles behind sections:
```css
.orb-lavender {
  width:      500px;
  height:     500px;
  background: radial-gradient(circle, rgba(196,181,253,0.35), transparent 70%);
  filter:     blur(60px);
  position:   absolute;
  pointer-events: none;
}

.orb-coral {
  background: radial-gradient(circle, rgba(251,146,60,0.25), transparent 70%);
}

.orb-teal {
  background: radial-gradient(circle, rgba(94,234,212,0.25), transparent 70%);
}
```

### Feature Badges
```css
display:        inline-flex;
align-items:    center;
gap:            8px;
padding:        6px 14px;
border-radius:  999px;
background:     rgba(196,181,253,0.12);
border:         1px solid rgba(196,181,253,0.25);
font:           -apple-system 500, 13px;
color:          #7C3AED;
```

### Platform Badge (macOS / Windows)
```css
display:        inline-flex;
align-items:    center;
gap:            6px;
padding:        4px 12px;
border-radius:  999px;
background:     rgba(0,0,0,0.06);
font:           -apple-system 500, 12px;
color:          #6B7280;
```

### Rating Stars
Arc prominently displays App Store ratings:
```css
/* Star: filled gradient */
color: transparent;
background: linear-gradient(90deg, #FB923C, #F59E0B);
background-clip: text;
-webkit-background-clip: text;
font-size: 20px;
```

### Dividers
```css
/* Gradient divider */
height: 1px;
background: linear-gradient(90deg,
  transparent,
  rgba(196,181,253,0.5),
  rgba(94,234,212,0.5),
  transparent);
border: none;
margin: 64px 0;
```

### Arc Shape Logo (Decorative)
The arc curve appears as a decorative element behind sections:
```css
/* SVG arc path used as background decoration */
stroke: url(#arcGradient);
stroke-width: 3px;
fill: none;
opacity: 0.3;
```

---

## 12. Unique Signature

Arc's design earns its awards by doing something most browser makers never attempt: **making the browser feel like it loves you back**.

**Five hallmarks:**
1. **Gradient pills everywhere** — the `999px border-radius` pill shape is Arc's signature. Every button, badge, and form element is a pill. It's soft, approachable, and immediately recognizable.
2. **Floating screenshots with breathing shadows** — the `float` keyframe animation is not decorative. It says "this is alive" before any copy does. The shadow grows as the screen rises, as if real light is below.
3. **Three-color gradient restraint** — lavender + coral + teal covers the emotional spectrum (calm → energetic → focused) and Arc's product scope (calm browsing, active discovery, focused work). The gradient is a product story.
4. **SF Pro as brand trust signal** — using Apple's own typeface on a Mac app site communicates native quality before a single feature is mentioned. It says: "this was made for you, Mac user."
5. **Illustration as proof of care** — the illustrated characters aren't clip art. They're custom, warm, and appear in precise moments to carry emotional weight no screenshot can. A product that pays this much attention to illustration-as-story clearly paid attention to the product too.

If a design feels "Arc," you see the gradient shimmer, feel the softness, and sense the care.

---

## 13. CSS Custom Properties Template

```css
:root {
  /* === COLORS === */
  /* Background */
  --color-bg:          #FAFAFA;
  --color-surface:     #F0F0F0;
  --color-surface-warm: #F5F3F0;
  --color-white:       #FFFFFF;

  /* Text */
  --color-text-primary:   #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-text-tertiary:  #9CA3AF;
  --color-text-inverted:  #FFFFFF;

  /* Brand */
  --color-lavender:    #C4B5FD;
  --color-lavender-bg: #EDE9FE;
  --color-lavender-dk: #7C3AED;
  --color-coral:       #FB923C;
  --color-coral-bg:    #FED7AA;
  --color-coral-dk:    #EA580C;
  --color-teal:        #5EEAD4;
  --color-teal-bg:     #CCFBF1;
  --color-teal-dk:     #0D9488;

  /* Gradients */
  --gradient-arc: linear-gradient(135deg,
    #C4B5FD 0%, #F9A8D4 25%, #FB923C 55%, #5EEAD4 100%);
  --gradient-arc-btn: linear-gradient(90deg,
    #C4B5FD 0%, #FB923C 50%, #5EEAD4 100%);
  --gradient-arc-soft: linear-gradient(135deg,
    rgba(196,181,253,0.3) 0%,
    rgba(251,146,60,0.2) 55%,
    rgba(94,234,212,0.25) 100%);
  --gradient-lavender-coral: linear-gradient(135deg, #C4B5FD, #FB923C);

  /* Semantic */
  --color-success:  #10B981;
  --color-warning:  #F59E0B;
  --color-error:    #EF4444;
  --color-info:     #3B82F6;

  /* Border */
  --color-border:      #E5E7EB;
  --color-border-dark: #D1D5DB;
  --color-border-light: rgba(0,0,0,0.06);

  /* === TYPOGRAPHY === */
  --font-sans: -apple-system, BlinkMacSystemFont, 'SF Pro Display',
               'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-mono: 'SF Mono', 'SFMono-Regular', Menlo, Monaco,
               'Cascadia Code', monospace;

  --font-light:   300;
  --font-regular: 400;
  --font-medium:  500;
  --font-semibold: 600;
  --font-bold:    700;

  --text-display-xl: 4.5rem;   /* 72px */
  --text-display-l:  3.5rem;   /* 56px */
  --text-h1:         2.75rem;  /* 44px */
  --text-h2:         2.125rem; /* 34px */
  --text-h3:         1.625rem; /* 26px */
  --text-h4:         1.25rem;  /* 20px */
  --text-body-l:     1.25rem;  /* 20px */
  --text-body-m:     1.0625rem; /* 17px */
  --text-body-s:     0.9375rem; /* 15px */
  --text-caption:    0.8125rem; /* 13px */

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
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-32: 128px;

  /* === LAYOUT === */
  --container-max:        1120px;
  --container-padding:    64px;
  --container-padding-md: 40px;
  --container-padding-sm: 24px;
  --grid-cols:            12;
  --grid-gap:             24px;

  /* === BORDERS === */
  --radius-sm:    8px;
  --radius-md:    12px;
  --radius-lg:    16px;
  --radius-xl:    20px;
  --radius-2xl:   24px;
  --radius-icon:  28px;  /* macOS icon radius */
  --radius-full:  999px; /* The Arc pill */

  /* === SHADOWS === */
  --shadow-sm:    0 2px 8px rgba(0,0,0,0.06);
  --shadow-md:    0 4px 24px rgba(0,0,0,0.08);
  --shadow-lg:    0 16px 48px rgba(0,0,0,0.10);
  --shadow-xl:    0 32px 80px rgba(0,0,0,0.15);
  --shadow-float: 0 48px 100px rgba(0,0,0,0.18);
  --shadow-glow-lavender: 0 8px 32px rgba(196,181,253,0.4);
  --shadow-glow-coral:    0 8px 32px rgba(251,146,60,0.35);

  /* === ANIMATION === */
  --ease-arc:    cubic-bezier(0.25, 0.1, 0.25, 1.0);
  --ease-float:  cubic-bezier(0.37, 0, 0.63, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out:    cubic-bezier(0, 0, 0.2, 1);

  --dur-fast:   150ms;
  --dur-normal: 250ms;
  --dur-medium: 400ms;
  --dur-slow:   600ms;
  --dur-float:  6000ms;
  --dur-drift:  8000ms;

  /* === Z-INDEX === */
  --z-base:      0;
  --z-raised:    10;
  --z-float:     20;
  --z-dropdown:  50;
  --z-modal:     100;
  --z-nav:       200;
  --z-tooltip:   300;
}
```
