# Loom — Design System

## 1. Overview

- **Site:** loom.com
- **URL:** https://www.loom.com
- **What they do:** Async video messaging platform for teams. Record and share screen + camera videos to communicate across timezones without meetings. Acquired by Atlassian. Integrated deeply with Jira, Slack, and Google Workspace.
- **Awards:** Product Hunt Top Product; Fast Company innovation recognition; widely cited in product design for friendly, accessible SaaS UX
- **Aesthetic:** Warm purple-violet product energy with friendly, approachable UI. Never cold, never corporate. The color system is vibrant but not overwhelming. Loom's design says "video is for everyone" — accessible, bright, encouraging. Like if a Pixar character designed a SaaS product.

---

## 2. Typography

### Primary Font
- **Family:** "Inter" — geometric variable sans-serif
- **Fallback:** system-ui, -apple-system, sans-serif
- **Weights:** 400 Regular, 500 Medium, 600 SemiBold, 700 Bold
- **Character:** Clean and humanist — matches the product's approachability

### Display (Hero Moments)
- Same Inter family, pushed to 700 with tight tracking

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Hero | clamp(2.75rem, 5.5vw, 4.5rem) | 700 | Bold, energetic |
| H2 | clamp(1.75rem, 3.5vw, 2.75rem) | 700 | Section headers |
| H3 | 1.375rem | 600 | Feature callouts |
| Body | 1rem | 400 | 1.65 leading |
| Caption | 0.875rem | 500 | Labels, meta |
| UI | 0.8125rem | 500 | Interface labels |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Loom Purple | `#625DF5` | Primary brand accent, CTAs |
| Purple Deep | `#4B46D9` | Hover states |
| Purple Light | `#8B87FF` | Secondary accent, icons |
| Purple Soft | `#F0EFFF` | Tint backgrounds |
| Off White | `#FAFAFA` | Primary background |
| Pure White | `#FFFFFF` | Cards, clean surfaces |

### Dark Sections
| Name | Hex | Usage |
|------|-----|-------|
| Deep Navy | `#0E0E1A` | Dark hero sections |
| Navy Mid | `#141428` | Dark card surfaces |
| Navy Border | `#1E1E3A` | Dark section borders |

### Neutral
| Name | Hex | Usage |
|------|-----|-------|
| Dark Text | `#0F0F1A` | Primary headings |
| Body Gray | `#4A4A60` | Body copy |
| Muted | `#9898B0` | Secondary text, placeholders |
| Border | `#E4E4F0` | Light mode borders |

### Accent Support
| Name | Hex | Usage |
|------|-----|-------|
| Coral | `#FF6B6B` | Warm accent for emotion/emphasis |
| Teal | `#2DD4BF` | Success states, integrations |
| Amber | `#F59E0B` | Warning, notifications |

### Gradients
- **Hero:** `linear-gradient(135deg, #625DF5 0%, #8B87FF 100%)`
- **Dark hero bg:** `linear-gradient(180deg, #0E0E1A 0%, #141428 100%)`
- **Purple glow:** `radial-gradient(ellipse at 50% 0%, rgba(98,93,245,0.2) 0%, transparent 60%)`
- **Shimmer card:** `linear-gradient(135deg, rgba(98,93,245,0.08) 0%, transparent 80%)`

---

## 4. Layout System

### Container
- **Max-width:** 1200px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1024px, Desktop 1024px+

### Section Spacing
- **Vertical:** 96px desktop, 64px tablet, 48px mobile
- **Feature block gap:** 64–80px

### Layout Patterns
- Hero: dark/purple gradient, centered copy, product screenshot below
- 2-column feature: alternating text + screen recording preview
- Use case tabs: horizontal tab navigation + animated content
- Integration logos: pill-style integration badges in a flow diagram
- Testimonial grid: 3-column with user avatars

---

## 5. Navigation

- **Style:** White, sticky, clean
- **Height:** 64px
- **Background:** `#FFFFFF` with `border-bottom: 1px solid #E4E4F0` on scroll
- **Logo:** Loom camera-shutter icon + "Loom" wordmark in `#0F0F1A`
- **Links:** 14px, 500 weight, `#4A4A60` → `#0F0F1A`
- **CTA in Nav:** "Get Started Free" purple button + "Log in" ghost
- **Mobile:** Hamburger → top drawer, slide down

---

## 6. Buttons

### Primary Button
- **Background:** `#625DF5`
- **Text:** White, 14px, 600 weight
- **Padding:** 12px 24px
- **Border-radius:** 8px
- **Hover:** `#4B46D9`, scale(1.01)
- **Shadow:** `0 4px 16px rgba(98, 93, 245, 0.35)`

### Secondary Button
- **Background:** transparent
- **Border:** `1px solid #E4E4F0`
- **Text:** `#0F0F1A`, 14px, 500
- **Hover:** `#F0EFFF` background

### Dark CTA (on dark sections)
- White fill, purple text
- Or: purple fill with `box-shadow: 0 0 24px rgba(98,93,245,0.5)`

### Size Variants
- SM: 8px 16px, 13px font
- MD: 12px 24px, 14px font (default)
- LG: 14px 32px, 16px font

---

## 7. Cards & Components

### Feature Card
- Background: `#FFFFFF`
- Border: `1px solid #E4E4F0`
- Border-radius: 16px
- Padding: 28px 32px
- Shadow: `0 4px 24px rgba(0,0,0,0.05)`
- Icon: 40×40px, purple `#F0EFFF` background
- Hover: border purple `rgba(98,93,245,0.3)`, shadow deepen

### Screen Recording Preview
- Laptop/browser frame mockup with Loom recording overlay
- Red recording dot animation
- User avatar pip-in-pip in corner

### Integration Badge
- Rounded pill, `#FFFFFF` border `#E4E4F0`
- App icon (32×32) + app name
- Connected with arrow/line for flow diagrams

### Testimonial Card
- Light gray background `#F5F5F8`
- Avatar + name + company + quote text
- Star rating optional
- Border-radius: 12px

---

## 8. Motion & Animation

### Hero
- Product screenshot: animated recording demo plays on loop
- Purple gradient sections: subtle particle animation

### Page Load
- Elements fade up from Y:20px, staggered 80ms, 400ms each

### Scroll Animations
- Feature sections: fade-in with Y:24px offset
- Stats counter: animated on enter

### Micro-interactions
- Button: 150ms ease-out, color + scale
- Card hover: 200ms shadow + border color
- Feature tab switch: content crossfade 250ms

### Recording Indicator
- Pulsing red dot: `animation: pulse 1.5s ease-in-out infinite`

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Spring: `cubic-bezier(0.16, 1, 0.3, 1)`
- Durations: 150ms micro, 250ms hover, 400ms reveal

---

## 9. Layout Strategy

**Video-native.** Every screenshot is a recording. Every demo is playing. The product isn't described — it's demonstrated inline. The color system (purple → white) creates a journey from "what is this?" (hero energy) to "I understand this" (clean feature white sections). Dark sections are used to shift emotional register, not just aesthetics.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The recording UI is always visible. Whether it's a camera pip, a recording indicator, a screen capture frame, or a timeline scrubber — the product's core interaction pattern (pressing record) is never far from view. This keeps the value proposition constantly alive. You don't just read "record a video" — you see someone already recording.

---

## 11. CSS Custom Properties

```css
:root {
  /* Typography */
  --font-primary: "Inter", system-ui, -apple-system, sans-serif;

  --font-size-hero: clamp(2.75rem, 5.5vw, 4.5rem);
  --font-size-h1: clamp(2rem, 4vw, 3.5rem);
  --font-size-h2: clamp(1.5rem, 3vw, 2.5rem);
  --font-size-h3: 1.375rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-ui: 0.8125rem;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.15;
  --line-height-normal: 1.65;

  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;

  /* Colors — Light */
  --color-bg: #FAFAFA;
  --color-bg-white: #FFFFFF;
  --color-bg-tint: #F0EFFF;
  --color-border: #E4E4F0;

  --color-text-primary: #0F0F1A;
  --color-text-body: #4A4A60;
  --color-text-muted: #9898B0;
  --color-text-inverted: #FFFFFF;

  --color-accent: #625DF5;
  --color-accent-hover: #4B46D9;
  --color-accent-light: #8B87FF;
  --color-accent-tint: #F0EFFF;
  --color-accent-glow: rgba(98, 93, 245, 0.35);
  --color-accent-border: rgba(98, 93, 245, 0.3);

  /* Dark sections */
  --color-bg-dark: #0E0E1A;
  --color-surface-dark: #141428;
  --color-border-dark: #1E1E3A;

  /* Support */
  --color-coral: #FF6B6B;
  --color-teal: #2DD4BF;
  --color-amber: #F59E0B;

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #625DF5 0%, #8B87FF 100%);
  --gradient-dark-bg: linear-gradient(180deg, #0E0E1A 0%, #141428 100%);
  --gradient-purple-glow: radial-gradient(ellipse at 50% 0%, rgba(98,93,245,0.2) 0%, transparent 60%);
  --gradient-card-shimmer: linear-gradient(135deg, rgba(98,93,245,0.08) 0%, transparent 80%);

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
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
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.05);
  --shadow-card-hover: 0 8px 40px rgba(0, 0, 0, 0.08);
  --shadow-button: 0 4px 16px rgba(98, 93, 245, 0.35);

  /* Nav */
  --nav-height: 64px;
  --nav-border: #E4E4F0;

  /* Transitions */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-micro: 150ms;
  --duration-hover: 250ms;
  --duration-reveal: 400ms;
}
```

---

## 12. Category Tags

`light-dark-hybrid` `SaaS` `video-messaging` `purple-accent` `product-led` `friendly` `async` `team-tool` `vibrant`
