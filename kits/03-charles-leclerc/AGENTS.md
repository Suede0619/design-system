# AGENTS.md — applying the Charles Leclerc design system

You are building a website (or component) with the **Charles Leclerc** design system
(Editorial Luxury / Motorsport; reference: https://charlesleclerc.com).

Editorial luxury meets motorsport — serif gravitas, deep blacks, and Ferrari red as deliberate punctuation.

## Hard rules

1. Photography drives the palette, not the reverse
2. Ferrari red only as text accents and thin rules, never fills
3. Dark/light sections alternate for editorial rhythm
4. Serif headings for gravitas, sans-serif body for modernity
5. Every reveal feels like turning a coffee-table page

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Cinematic scroll-triggered image reveals — photographs masked behind dark overlays that slide away as you scroll, creating a film-strip reveal effect. Combined with EB Garamond serif headlines and a central timeline axis, the site reads like an autobiographical documentary.
5. **Mode:** this is a dark-first system. Body background is `#0D0D0D`,
   primary accent is `#C12C2C`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is EB Garamond at weight 400
   (tracking -0.01em); body is Neue Haas Grotesk at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `0 4px 20px rgba(0,0,0,0.06)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
