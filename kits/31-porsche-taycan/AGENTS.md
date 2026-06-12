# AGENTS.md — applying the Porsche Taycan design system

You are building a website (or component) with the **Porsche Taycan** design system
(Automotive / Performance Luxury; reference: https://www.porsche.com/taycan).

Razor-sharp zero-radius precision — cinema staged for a single product.

## Hard rules

1. Cinema for one product — sections like film chapters
2. Imagery is everything: full-bleed photo and video
3. Minimal UI, maximum drama
4. Thin-weight type at dramatic scale
5. Specs presented with the reverence of artistic statements

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The sharp-corner, zero-radius design language — in a world of rounded corners, every button, card and container has razor-sharp 0px radius, communicating precision engineering with no softening. Combined with thin-weight typography at dramatic scale, it feels built for a car that corners at 0.1g.
5. **Mode:** this is a dark-first system. Body background is `#000000`,
   primary accent is `#FFFFFF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Porsche Next at weight 400
   (tracking -0.01em); body is Porsche Next at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `0 4px 24px rgba(0, 0, 0, 0.6)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
