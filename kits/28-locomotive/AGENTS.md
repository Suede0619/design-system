# AGENTS.md — applying the Locomotive design system

You are building a website (or component) with the **Locomotive** design system
(Agency / Brutalist Motion; reference: https://locomotive.ca).

Typography at architectural scale on pure black — the site is a live case study.

## Hard rules

1. Type grid itself is the layout, not text inside a layout
2. Negative space pushed to the point of discomfort
3. Tactile, physics-based scroll and hover states
4. Restrained color — black, white, rare red
5. Razor-sharp corners, flat presentation

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Typography at architectural scale — headlines so large they become abstract forms, letters cropped by the viewport and stacked like infrastructure. The differential between 10vw hero type and 0.75rem nav labels creates cinematic tension, with the type grid treated as the layout itself.
5. **Mode:** this is a dark-first system. Body background is `#000000`,
   primary accent is `#FF2800`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Monument Extended at weight 900
   (tracking -0.02em); body is Neue Haas Grotesk at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `0 24px 64px rgba(0, 0, 0, 0.6)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
