# AGENTS.md — applying the Read.cv design system

You are building a website (or component) with the **Read.cv** design system
(Portfolio / Typographic Restraint; reference: https://read.cv).

The anti-LinkedIn — the typographic equivalent of a well-tailored suit, no embellishment.

## Hard rules

1. Restraint is the brand — doing less communicates taste
2. 640px is the magic number for an optimal reading measure
3. Grayscale as palette — carefully chosen grays need no color
4. No animation as a deliberate choice
5. Typography carries everything when there's no decoration

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Black and white do 95% of the work — an 11-step grayscale is the palette, with blue reserved exclusively for links. No gradients, no scroll animations, no parallax; the absence of animation IS the design statement. Everything centers on a 640px reading column that makes each element feel considered.
5. **Mode:** this is a light-first system. Body background is `#FFFFFF`,
   primary accent is `#0066FF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 600
   (tracking -0.02em); body is Inter at 15px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 8px, buttons at 8px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
