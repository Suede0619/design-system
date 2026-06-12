# AGENTS.md — applying the Mother Design design system

You are building a website (or component) with the **Mother Design** design system
(Studio / Confident Minimal; reference: https://motherdesign.com).

Light Canela serif on warm cream — an art book that happens to be a website.

## Hard rules

1. Image-forward — the work is the hero, text frames it
2. Editorial restraint: thin serifs and silence over bold
3. Minimal color, maximum presence
4. Asymmetric grid serves the imagery
5. Color delivered through photography, not gradient fills

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > A masterclass in typographic restraint — Canela serif at light weight creates luxury without ostentation, using thin serifs and silence to communicate taste where others use bold. Warm cream backgrounds and barely-there hierarchy make the site feel like an art book.
5. **Mode:** this is a light-first system. Body background is `#F9F7F4`,
   primary accent is `#2A2520`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Canela at weight 400
   (tracking -0.01em); body is Akkurat at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 100px. Shadows: `0 24px 64px rgba(0, 0, 0, 0.08)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
