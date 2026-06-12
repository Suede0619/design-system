# 39 — Read.cv

**Category:** Portfolio / Professional Identity
**Award:** Site of the Day (Awwwards 2023), FWA of the Month
**URL:** read.cv

---

## Design Philosophy

Read.cv is the anti-LinkedIn — a clean, opinionated portfolio platform for people who care about craft. The design says "I value restraint." Every pixel is accounted for, nothing is decorative. It's the typographic equivalent of a well-tailored suit: no embellishment, just perfect fit.

**Core Thesis:** Professional identity should be beautiful by default, not despite the platform.

---

## Color System

```
:root {
  /* Core */
  --black:           #000000;
  --white:           #FFFFFF;
  --off-white:       #F9F9F9;

  /* Gray Scale (11 steps) */
  --gray-50:         #FAFAFA;
  --gray-100:        #F5F5F5;
  --gray-200:        #E5E5E5;
  --gray-300:        #D4D4D4;
  --gray-400:        #A3A3A3;
  --gray-500:        #737373;
  --gray-600:        #525252;
  --gray-700:        #404040;
  --gray-800:        #262626;
  --gray-900:        #171717;
  --gray-950:        #0A0A0A;

  /* Accent (minimal) */
  --blue:            #0066FF;
  --blue-light:      #E6F0FF;
  --green:           #00A870;
  --red:             #E5484D;

  /* Backgrounds */
  --bg-base:         #FFFFFF;
  --bg-subtle:       #FAFAFA;
  --bg-hover:        #F5F5F5;
  --border:          #E5E5E5;
  --border-subtle:   #F0F0F0;
}
```

### Palette Rules
- Black and white do 95% of the work — the grayscale is the palette
- Blue (#0066FF) is reserved exclusively for links and interactive elements
- Green for "available for work" status badge only
- Red for destructive actions only
- No gradients anywhere in the UI
- Borders are 1px solid #E5E5E5 — never thicker, never dashed

---

## Typography

```
:root {
  --font-sans:       'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  --font-mono:       'JetBrains Mono', 'SF Mono', Menlo, monospace;
  --font-weight-reg: 400;
  --font-weight-med: 500;
  --font-weight-semi: 600;
}
```

### Type Scale
| Level | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|----------------|-----|
| Name | 24px | 600 | 1.25 | -0.02em | Profile name |
| H1 | 20px | 600 | 1.3 | -0.01em | Section titles |
| H2 | 16px | 600 | 1.4 | 0 | Card titles |
| Body | 15px | 400 | 1.6 | 0 | Primary text |
| Small | 14px | 400 | 1.5 | 0 | Secondary text |
| Caption | 13px | 400 | 1.4 | 0 | Timestamps, metadata |
| Mono | 13px | 400 | 1.5 | 0 | Code, tags |

### Typography Rules
- Inter is the ONLY typeface — no display font, no serif
- Weight range: 400-600 only (no bold 700)
- Max body width: 640px (optimal reading measure)
- No text transform (no uppercase, no small-caps)
- Links: blue, no underline by default, underline on hover
- Code/tags in JetBrains Mono at 13px

---

## Spacing & Layout

```
:root {
  --space-1:    4px;
  --space-2:    8px;
  --space-3:    12px;
  --space-4:    16px;
  --space-5:    20px;
  --space-6:    24px;
  --space-8:    32px;
  --space-10:   40px;
  --space-12:   48px;
  --space-16:   64px;

  --content-max:   640px;
  --page-max:      1000px;
  --sidebar-width: 280px;
  --card-radius:   8px;
  --avatar-radius: 50%;
  --border-width:  1px;
}
```

### Layout Pattern
- Sidebar (280px) + main content (640px) — classic editorial layout
- Everything centers on the 640px content column
- Sidebar has profile info, nav, and featured work
- Card radius is 8px — restrained, professional
- Section spacing: 48-64px between major blocks
- Card internal padding: 16-20px

---

## Component Specifications

### Profile Header
```
- Avatar: 80px circle, no border, subtle shadow
- Name: 24px/600, immediately below avatar
- Bio: 15px/400, max 2 lines, gray-600
- Status badge: "Available" pill, green dot + text, 13px
- Social links: icon row, 20px icons, gray-400, hover gray-900
- Spacing: 12px between avatar and name, 8px between name and bio
```

### Work Card
```
- Full-width within content column (640px)
- Background: white
- Border: 1px solid var(--border)
- Border-radius: 8px
- Padding: 20px
- Image: 16:9 aspect, 8px radius, no border
- Title: 16px/600, below image with 12px gap
- Description: 14px/400, gray-500, 2 lines max
- Tags: monospace, 12px, gray-500, #F5F5F5 background, 4px radius pills
- Hover: border-color darkens to gray-300, 0.15s transition
```

### Text Post
```
- No card wrapper — just text in the feed
- Content: 15px/400, 1.6 line-height, max 640px
- Timestamp: 13px/400, gray-400, relative time ("2h ago")
- Likes: small heart icon + count, gray-400, 13px
- No background, no border — distinguished by whitespace alone
```

### Navigation
```
- Sidebar nav: vertical list
- Items: 14px/500, gray-500
- Active: black, 600 weight, no other decoration
- Hover: gray-900
- No icons in nav — text only
- Section dividers: 1px border with 16px padding above/below
```

---

## Motion & Animation

```
:root {
  --ease-default:    cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration-fast:   100ms;
  --duration-base:   150ms;
  --duration-slow:   200ms;
}
```

### Animation Principles
- Animation is nearly invisible — micro-interactions only
- Hover transitions: 150ms for color/border changes
- No page transitions, no scroll animations, no parallax
- Loading: skeleton screens with subtle pulse (opacity 0.5-1, 1.5s loop)
- Content appears instantly — no stagger, no fade-in on scroll
- The absence of animation IS the design statement

---

## Key Takeaways

1. **Restraint is the brand** — doing less communicates taste more effectively than doing more
2. **640px is the magic number** — optimal reading width that makes everything feel considered
3. **Grayscale as palette** — when your grays are this carefully chosen, you don't need color
4. **No animation as a choice** — silence in a noisy web is louder than any parallax scroll
5. **Typography carries everything** — when there's no decoration, the type system must be flawless
