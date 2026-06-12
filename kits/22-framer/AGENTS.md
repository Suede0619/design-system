# AGENTS.md — applying the Framer design system

You are building a website (or component) with the **Framer** design system
(Design Tool / Gradient Dark; reference: https://www.framer.com).

Clean white canvas with surgical typography and electric blue — a living product demo built in Framer.

## Hard rules

1. Clean white canvas with surgical typography
2. The site is built in Framer — a living product demo
3. Interactive previews that feel alive over screenshots
4. Bento-grid clarity and precision
5. Minimal, crisp motion — content appears cleanly

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The marketing site is built in Framer and runs live interactive product demos directly inside the page — scroll-driven canvas components, real editors. The product sells itself through direct experience. Surgical Inter typography, bento-grid layouts, and electric blue accents keep the white canvas crisp.
5. **Mode:** this is a light-first system. Body background is `#FFFFFF`,
   primary accent is `#0099FF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 700
   (tracking -0.025em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 8px. Shadows: `0 8px 32px rgba(0,0,0,0.08)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
