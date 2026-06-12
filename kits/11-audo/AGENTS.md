# AGENTS.md — applying the Audo Copenhagen design system

You are building a website (or component) with the **Audo Copenhagen** design system
(Scandinavian Luxury / Interior E-Commerce; reference: https://audo.com).

A coffee-table book about Scandinavian design — warm whites, brass, and editorial serifs at light weight.

## Hard rules

1. Hygge as UI — warmth from texture, not busyness
2. Architectural photography as navigation
3. Restraint as luxury — no borders, shadows, or gradients
4. Craft over convention — editorial, never transactional typography
5. Slow scroll — designed to inhabit, not rush

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Audo's identity rests on the warm white #F5F0EB foundation — never cold — and Freight Display used at weight 300–400, never bold. Square buttons signal Bauhaus over tech, while product cards carry no borders or shadows because the products sell themselves. Brass #C4A882 is the sole accent.
5. **Mode:** this is a light-first system. Body background is `#F5F0EB`,
   primary accent is `#2C2C2C`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Freight Display Pro at weight 400
   (tracking -0.02em); body is Suisse Intl at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
