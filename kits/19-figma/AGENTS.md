# AGENTS.md — applying the Figma design system

You are building a website (or component) with the **Figma** design system
(Design Tool / Colorful Play; reference: https://figma.com).

Design used to sell design — a bold three-color gradient manifesto rendered in chunky geometric type.

## Hard rules

1. Use design to sell design
2. Bold, expressive, and confidently colorful
3. One gradient does the work of an entire palette
4. Live embedded prototypes prove value over description
5. Black CTAs on white — bold without being loud

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The three-color gradient (#A259FF → #FF7262 → #F24E1E) acts as stroke, fill, text, background, and button — one gradient doing the work of an entire brand palette. The round, quirky Whyte typeface carries personality at bold weights, while black CTAs on white deliver contrast that's bold without being loud.
5. **Mode:** this is a light-first system. Body background is `#FFFFFF`,
   primary accent is `#1E1E1E`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Whyte at weight 700
   (tracking -0.04em); body is Whyte at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 8px. Shadows: `0 8px 32px rgba(0,0,0,0.12)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
