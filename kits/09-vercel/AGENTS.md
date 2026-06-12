# AGENTS.md — applying the Vercel design system

You are building a website (or component) with the **Vercel** design system
(Stark Monochrome; reference: https://vercel.com).

Absolute monochrome where raw performance numbers in giant Geist type are the only decoration.

## Hard rules

1. Zero color — contrast is the only accent
2. Typography as architecture
3. Terminal/code aesthetics elevated to marketing
4. Performance numbers as decorative elements
5. Geometry (triangle) as recurring motif

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Vercel's fingerprint is using raw performance data as the primary visual element — '0.7s' in 72px Geist Black, white on black, is the hero where others use imagery. The zero-color constraint is so absolute it becomes a brand statement, and the triangle (▲) is the only shape. Performance is the aesthetic.
5. **Mode:** this is a dark-first system. Body background is `#000000`,
   primary accent is `#FFFFFF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Geist Sans at weight 900
   (tracking -0.04em); body is Geist Sans at 14px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
