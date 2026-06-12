# AGENTS.md — applying the Rivian design system

You are building a website (or component) with the **Rivian** design system
(Automotive / Adventure Editorial; reference: https://rivian.com).

Forest greens and earthy tones — the green is earned, not a sustainability cliche.

## Hard rules

1. Nature meets precision — landscape photo as emotional anchor
2. Green connects both worlds: forest AND brand
3. Generous, breathable layouts mirroring open spaces
4. Specs given the same weight as adventure stories
5. Clean humanist type, functional with warmth

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The green is earned — Rivian's #3D7A4A is the actual color of the environments their vehicles explore, so every button, stat and border recalls forest trails and mountain passes. Rugged landscape photography in tension with precise UI produces a voice that is capable, purposeful, and alive.
5. **Mode:** this is a light-first system. Body background is `#F8FAF8`,
   primary accent is `#3D7A4A`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Rivian at weight 600
   (tracking -0.01em); body is Rivian at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 100px. Shadows: `0 4px 24px rgba(0, 0, 0, 0.06)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
