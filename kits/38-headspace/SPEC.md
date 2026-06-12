# 38 — Headspace

**Category:** Health & Wellness App
**Award:** Webby Award for Health & Fitness (2024), Apple Design Award (2023)
**URL:** headspace.com

---

## Design Philosophy

Headspace is the rare product that makes meditation feel approachable instead of preachy. The design is warm, playful, and deeply considered — a masterclass in using illustration and animation to create emotional safety. Every interaction feels like a gentle exhale.

**Core Thesis:** Wellness doesn't have to look clinical. Softness is a feature, not a weakness.

---

## Color System

```
:root {
  /* Primary */
  --orange-primary:     #F47D31;
  --orange-light:       #FFB88C;
  --orange-ultralight:  #FFF5ED;

  /* Secondary */
  --blue-primary:       #2B2D42;
  --blue-night:         #1A1B2E;
  --blue-twilight:      #3D3F5F;

  /* Accent */
  --yellow:             #FFD166;
  --coral:              #EF476F;
  --teal:               #06D6A0;
  --lavender:           #C3B1E1;

  /* Neutral */
  --cream:              #FFFAF0;
  --warm-gray:          #F0EDE8;
  --text-primary:       #2B2D42;
  --text-secondary:     #6B6E8A;
  --text-muted:         #A0A3BD;

  /* Backgrounds */
  --bg-base:            #FFFAF0;
  --bg-card:            #FFFFFF;
  --bg-meditation:      #1A1B2E;
  --bg-sleep:           #0D0E1A;
}
```

### Palette Rules
- Orange is the brand signature — used for CTAs, active states, and "Start" buttons only
- Night mode sessions use deep navy, never pure black
- Illustrations use a pastel rainbow (coral, teal, lavender, yellow) on warm backgrounds
- Sleep content uses a dedicated dark palette (bg-sleep + muted purples)
- Cards are always #FFF on #FFFAF0 — the "floating on cream" effect

---

## Typography

```
:root {
  --font-display:      'GT Walsheim', -apple-system, sans-serif;
  --font-body:         'GT Walsheim', -apple-system, sans-serif;
  --font-weight-light: 300;
  --font-weight-reg:   400;
  --font-weight-med:   500;
  --font-weight-bold:  700;
}
```

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|----------------|-----|
| Display | 48px | 700 | 1.15 | -0.03em | Hero headlines |
| H1 | 36px | 700 | 1.2 | -0.02em | Page titles |
| H2 | 28px | 500 | 1.3 | -0.01em | Section heads |
| H3 | 22px | 500 | 1.35 | 0 | Card titles |
| Body L | 18px | 400 | 1.6 | 0.01em | Article body |
| Body | 16px | 400 | 1.55 | 0 | Default |
| Caption | 14px | 400 | 1.4 | 0.01em | Metadata |
| Micro | 12px | 500 | 1.3 | 0.03em | Badges, labels |

### Typography Rules
- GT Walsheim is a rounded geometric sans — warm, approachable, never cold
- Headlines are bold but letter-spacing is negative (compact, confident)
- Body text uses generous line-height (1.55-1.6) for readability during meditation instructions
- No uppercase text anywhere except micro badges
- Italic is reserved for meditation prompts and quotes

---

## Spacing & Layout

```
:root {
  --space-xs:    4px;
  --space-sm:    8px;
  --space-md:    16px;
  --space-lg:    24px;
  --space-xl:    32px;
  --space-2xl:   48px;
  --space-3xl:   64px;
  --space-4xl:   96px;

  --content-width:     1120px;
  --card-radius:       20px;
  --button-radius:     28px;
  --pill-radius:       100px;
  --section-gap:       80px;
}
```

### Layout Grid
- 12-column grid, 24px gutters
- Content maxes at 1120px — narrower than most sites, intentionally intimate
- Meditation cards: 320px wide, tall (4:5 aspect), heavy border-radius
- Generous whitespace between sections (80px+)
- Mobile: single column, cards go edge-to-edge with 20px padding

---

## Component Specifications

### Meditation Card
```
- Width: 320px (grid responsive)
- Height: 400px (4:5 ratio)
- Border-radius: 20px
- Background: gradient or illustration (unique per meditation)
- Shadow: 0 8px 24px rgba(43, 45, 66, 0.1)
- Hover: translateY(-4px), shadow 0 12px 32px rgba(43, 45, 66, 0.15)
- Title: 18px/500 white (overlaid on bottom)
- Duration badge: pill, rgba(255,255,255,0.25) backdrop, 12px
```

### CTA Button
```
- Height: 52px
- Padding: 0 32px
- Border-radius: 28px (fully rounded)
- Background: var(--orange-primary)
- Color: #FFF
- Font: 16px/600
- Hover: brightness(1.05), translateY(-1px)
- Shadow: 0 4px 12px rgba(244, 125, 49, 0.3)
```

### Daily Check-in Widget
```
- Full-width card, 20px radius
- Background: linear-gradient(135deg, var(--orange-light), var(--yellow))
- Emoji selector row: 5 emojis, 48px tap targets, pulse on select
- "How are you feeling?" in 22px/500
- Selected state: emoji scales to 1.2x, circle highlight appears behind
```

### Progress Ring
```
- SVG circle, stroke-dasharray animation
- Size: 120px
- Stroke: 6px, rounded caps
- Track: var(--warm-gray)
- Fill: var(--orange-primary)
- Center: day count in 36px/700
```

---

## Motion & Animation

```
:root {
  --ease-gentle:      cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-micro:   150ms;
  --duration-base:    300ms;
  --duration-slow:    600ms;
  --duration-breath:  4000ms;
}
```

### Animation Principles
- Everything moves gently — no snappy entrances
- Breathing animation (4s in, 4s out) is the core rhythm metaphor
- Cards fade in with slight upward float (20px translateY, 400ms)
- Page transitions: crossfade, 300ms, no sliding
- Illustrations use looping ambient animation (floating clouds, swaying plants)
- Loading states are breathing circles, never spinners

---

## Illustration System

### Style
- Custom vector illustrations with organic, rounded shapes
- Characters: simplified human forms, no facial features (universality)
- Color: limited palette per scene (3-4 colors max from brand palette)
- Texture: subtle grain overlay on flat areas

### Illustration Contexts
- Hero: large scene illustration, character(s) in nature/space
- Cards: small spot illustration, single focal object
- Empty states: centered illustration with short copy below
- Sleep stories: atmospheric night scenes, deep blues and purples

---

## Dark Mode (Sleep & Night Sessions)

```
:root[data-mode="sleep"] {
  --bg-base:        #0D0E1A;
  --bg-card:        rgba(255, 255, 255, 0.04);
  --text-primary:   #E0DCF0;
  --text-secondary: #8B87A8;
  --accent:         #7C6BC4;
  --border:         rgba(255, 255, 255, 0.06);
}
```

- Sleep mode auto-activates after 8 PM or when browsing sleep content
- Transitions between modes are slow crossfades (800ms)
- No pure white text in sleep mode — use #E0DCF0 (warm lavender white)

---

## Key Takeaways

1. **Warmth through radius** — 20-28px border-radius on everything creates a soft, unthreatening environment
2. **Orange as emotional anchor** — one strong brand color used only for action, everything else is muted
3. **Illustration > photography** — custom illustration creates a unique world competitors can't copy
4. **Breathing as design language** — the 4-second breathing animation rhythm permeates all motion design
5. **Intentional narrowness** — 1120px max-width makes reading feel intimate, not like consuming content
