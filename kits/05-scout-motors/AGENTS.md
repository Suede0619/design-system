# AGENTS.md — applying the Scout Motors design system

You are building a website (or component) with the **Scout Motors** design system
(Rugged Heritage / Automotive E-commerce; reference: https://www.scoutmotors.com).

Rugged heritage meets modern precision — earth tones and industrial type designed in a workshop, not a studio.

## Hard rules

1. Scout Green for major brand moments, Rust as the attention-grabber
2. Everything muted, natural, weathered — never bright or saturated
3. Sand and cream backgrounds alternate for rhythm
4. Heritage storytelling justifies the purchase
5. Industrial, purposeful typography

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > A full-screen vehicle configurator fused with heritage storytelling — the site transitions seamlessly from a 'once upon a time' brand narrative directly into a 'build yours' configurator. The emotional story justifies the purchase without ever feeling like a sales pitch.
5. **Mode:** this is a light-first system. Body background is `#F5F0E6`,
   primary accent is `#A0522D`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Barlow Condensed at weight 700
   (tracking 0.02em); body is Barlow at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 8px, buttons at 4px. Shadows: `0 2px 8px rgba(0,0,0,0.06)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
