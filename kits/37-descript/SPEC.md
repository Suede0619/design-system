# Descript — Design System

## 1. Overview

- **Site:** descript.com
- **URL:** https://www.descript.com
- **What they do:** AI-powered video and podcast editing platform. Makes video editing as easy as editing a document — edit the transcript, the video edits itself. Features include filler word removal, eye contact AI, green screen, voice cloning, and their AI co-editor "Underlord."
- **Awards:** Widely recognized as a breakthrough creative tool design; praised for making complex AI features feel approachable; top creator economy product
- **Aesthetic:** Creative energy with professional grounding. Warm coral/salmon accents on a clean white/light base. The design communicates "powerful tools made friendly" — vibrant enough for creators, structured enough for teams. Playful but never childish.

---

## 2. Typography

### Primary Font
- **Family:** "Inter" — versatile geometric grotesque
- **Fallback:** system-ui, sans-serif
- **Weights:** 400 Regular, 500 Medium, 600 SemiBold, 700 Bold
- **Character:** Clean, functional, democratic — works for creator and enterprise

### Display Headlines
- Bold Inter at tight tracking on hero
- Occasional use of color gradient on key words

### Heading Hierarchy
| Level | Size | Weight | Notes |
|-------|------|--------|-------|
| Hero | clamp(2.75rem, 5.5vw, 4.5rem) | 700 | Bold, punchy |
| H2 | clamp(1.75rem, 3.5vw, 2.75rem) | 700 | Section headers |
| H3 | 1.375rem | 600 | Feature titles |
| Body | 1rem | 400 | Clean, readable |
| Caption | 0.875rem | 500 | Labels, pricing |
| Nav | 0.875rem | 500 | Menu items |

---

## 3. Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Warm White | `#FAFAF8` | Primary background |
| Off White | `#F5F4F0` | Alt section backgrounds |
| Light Warm | `#EEECE6` | Card backgrounds |
| Warm Border | `#E0DDD6` | Borders, dividers |
| Pure White | `#FFFFFF` | Card surfaces |

### Accent — Descript Coral
| Name | Hex | Usage |
|------|-----|-------|
| Descript Coral | `#FF5B35` | Primary brand accent |
| Coral Hover | `#E84E2A` | Hover/active states |
| Coral Soft | `#FFF0EC` | Tint backgrounds |
| Coral Mid | `#FF8060` | Icons, secondary accents |

### Text
| Name | Hex | Usage |
|------|-----|-------|
| Descript Dark | `#1A1A14` | Primary headings |
| Body Warm | `#3A3830` | Body copy |
| Muted | `#8A8880` | Secondary text |

### Dark Sections
| Name | Hex | Usage |
|------|-----|-------|
| Dark Warm | `#18140E` | Dark hero/features |
| Dark Card | `#241E18` | Dark card surfaces |
| Dark Border | `#302A24` | Dark section borders |

### Accent Support
| Name | Hex | Usage |
|------|-----|-------|
| Amber | `#F59E0B` | Creator/notification states |
| Sage Green | `#6A9E6A` | Success, pro features |
| Blue Slate | `#4A78C4` | Integration/enterprise |

### Gradients
- **Coral text gradient:** `linear-gradient(90deg, #FF5B35 0%, #FF8060 100%)`
- **Dark hero:** `linear-gradient(180deg, #18140E 0%, #241E18 100%)`
- **Light hero:** `linear-gradient(135deg, #FAFAF8 0%, #F5F4F0 100%)`
- **Warm glow:** `radial-gradient(ellipse at 40% -10%, rgba(255,91,53,0.12) 0%, transparent 55%)`

---

## 4. Layout System

### Container
- **Max-width:** 1200px
- **Padding:** 0 clamp(16px, 4vw, 48px)

### Grid
- **Columns:** 12
- **Gutter:** 24px
- **Breakpoints:** Mobile 0-768px, Tablet 768-1200px, Desktop 1200px+

### Section Spacing
- **Vertical:** 96px desktop, 64px tablet, 48px mobile
- **Feature gap:** 80px

### Layout Patterns
- Hero: light warm background, centered bold text, product screenshot below
- AI Features: dark section with feature chips/pills
- Use cases: horizontal tab or left sidebar navigation
- Pricing: 3-column comparison
- Social proof: grid of company logos + quote strips

---

## 5. Navigation

- **Style:** White, clean, sticky
- **Height:** 64px
- **Background:** `#FFFFFF` with subtle shadow on scroll
- **Logo:** Descript "D" mark + wordmark, coral accent on mark
- **Links:** 14px, 500 weight, `#3A3830` → `#1A1A14`
- **CTA:** "Get started for free" coral button + "Sign in" ghost
- **Mobile:** Hamburger → full overlay

---

## 6. Buttons

### Primary Button
- **Background:** `#FF5B35`
- **Text:** White, 14px, 600 weight
- **Padding:** 12px 24px
- **Border-radius:** 8px
- **Hover:** `#E84E2A`, scale(1.01)
- **Shadow:** `0 4px 16px rgba(255,91,53,0.3)`

### Secondary Button
- **Background:** `#FFFFFF`
- **Border:** `1px solid #E0DDD6`
- **Text:** `#1A1A14`, 14px, 500
- **Hover:** background `#F5F4F0`

### Feature CTA (Dark Section)
- White fill, dark text
- Or: coral fill on dark
- Border-radius: 8px consistent

---

## 7. Cards & Components

### Feature Card (Light)
- Background: `#FFFFFF`
- Border: `1px solid #E0DDD6`
- Border-radius: 16px
- Padding: 28px 32px
- Shadow: `0 2px 16px rgba(0,0,0,0.04)`
- Icon: 40×40px coral or warm colored illustration
- Hover: shadow deepen, border warm-coral

### Feature Card (Dark)
- Background: `#241E18`
- Border: `1px solid #302A24`
- Hover: border `rgba(255,91,53,0.3)`

### AI Feature Pill
- Rounded chip: coral or dark bg
- Feature name + icon, 13px, 500 weight
- Used to list AI capabilities (Underlord menu items)

### Pricing Card
- White, border `#E0DDD6`, radius 16px
- Popular tier: coral border highlight
- Price: large bold numeral

### Creator Testimonial
- Avatar, name, platform (YouTube/Podcast), quote
- Light gray background, radius 12px

---

## 8. Motion & Animation

### Hero
- Product screenshot animates in from bottom with slight scale
- Background: subtle warm gradient shift

### Scroll Animations
- Feature cards: fade up Y:20px staggered 100ms
- AI feature section: dark reveal clip-path from top

### Feature Demonstrations
- Inline video demos showing editing workflows
- Animated text strike-through showing filler word removal
- Waveform animation for audio features

### Micro-interactions
- Button: 150ms, coral darkens + scale(1.01)
- Card hover: border brightens warm, shadow deepens
- Tab/mode switch: content crossfade 250ms

### Signature Animation
- **Filler word demo:** Animated text editor showing "um", "uh" struck through and removed in real time
- **Transcript editing:** Text cursor moves through words, video frame updates to match

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)`
- Spring: `cubic-bezier(0.16, 1, 0.3, 1)`
- Durations: 150ms micro, 250ms hover, 400ms reveal

---

## 9. Layout Strategy

**Show the work.** Every section demonstrates a specific capability — often with an interactive or animated mockup of the actual product UI. Descript doesn't describe features abstractly; it shows you the filler words being removed, the eye contact being corrected. The warm coral accent appears only on things that matter: CTAs and product feature highlights.

---

## 10. What Makes This Design Distinctive

**The ONE thing:** The product interface is the hero. Unlike most tools that show screenshots, Descript shows *the editing happening* — words getting struck through, audio waveforms shifting, video frames updating in sync with text changes. The design communicates competency through demonstration, not description. The coral accent is warm enough to feel creative, structured enough to feel professional.

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

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.15;
  --line-height-normal: 1.65;

  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;

  /* Colors — Light */
  --color-bg: #FAFAF8;
  --color-bg-alt: #F5F4F0;
  --color-bg-warm: #EEECE6;
  --color-bg-white: #FFFFFF;
  --color-border: #E0DDD6;
  --color-border-hover: #C8C5BE;

  --color-text-primary: #1A1A14;
  --color-text-body: #3A3830;
  --color-text-muted: #8A8880;
  --color-text-inverted: #FFFFFF;

  --color-accent: #FF5B35;
  --color-accent-hover: #E84E2A;
  --color-accent-mid: #FF8060;
  --color-accent-tint: #FFF0EC;
  --color-accent-glow: rgba(255, 91, 53, 0.3);
  --color-accent-border: rgba(255, 91, 53, 0.3);

  /* Dark sections */
  --color-bg-dark: #18140E;
  --color-surface-dark: #241E18;
  --color-border-dark: #302A24;

  /* Support */
  --color-amber: #F59E0B;
  --color-sage: #6A9E6A;
  --color-slate: #4A78C4;

  /* Gradients */
  --gradient-coral-text: linear-gradient(90deg, #FF5B35 0%, #FF8060 100%);
  --gradient-dark-hero: linear-gradient(180deg, #18140E 0%, #241E18 100%);
  --gradient-warm-hero: linear-gradient(135deg, #FAFAF8 0%, #F5F4F0 100%);
  --gradient-warm-glow: radial-gradient(ellipse at 40% -10%, rgba(255,91,53,0.12) 0%, transparent 55%);

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
  --shadow-card: 0 2px 16px rgba(0, 0, 0, 0.04);
  --shadow-card-hover: 0 8px 32px rgba(0, 0, 0, 0.08);
  --shadow-button: 0 4px 16px rgba(255, 91, 53, 0.3);

  /* Nav */
  --nav-height: 64px;
  --nav-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);

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

`light` `creative-tools` `coral-accent` `SaaS` `AI-powered` `video-editor` `podcasting` `warm-palette` `product-led` `creator-economy`
