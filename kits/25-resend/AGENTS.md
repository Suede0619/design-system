# AGENTS.md — applying the Resend design system

You are building a website (or component) with the **Resend** design system
(Developer Email / Minimal Dark; reference: https://resend.com).

Pure black, surgical orange — a marketing site engineered like the product itself.

## Hard rules

1. Zero decoration — every element earns its place
2. Code blocks are the hero visuals
3. Orange used as a signal, not decoration
4. Typography does the heavy lifting
5. Docs-adjacent, developer-first structure

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Resend designs its marketing site exactly like its product — pure developer utility with zero visual noise on true black. The orange accent is so reserved that when it appears it reads as a signal, not decoration. Code blocks are the hero and typography carries everything.
5. **Mode:** this is a dark-first system. Body background is `#000000`,
   primary accent is `#FF4D00`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 700
   (tracking -0.02em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 10px, buttons at 6px. Shadows: `0 0 20px rgba(255, 77, 0, 0.35)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
