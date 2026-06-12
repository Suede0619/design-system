# AGENTS.md — applying the Lacoste design system

You are building a website (or component) with the **Lacoste** design system
(Fashion / Playful Luxury; reference: https://www.lacoste.com).

Heritage tennis-club luxury made contemporary — sacred green, gold accents, and Playfair editorial flair.

## Hard rules

1. Heritage with momentum — vintage tennis club updated for digital luxury
2. The green is sacred — #004D2C is the organizing logic of every screen
3. Editorial photography as premium signal
4. Membership as identity — the Club tier system is a primary UI pattern
5. Refined restraint — generous whitespace, slow reveals, precise gold accents

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Lacoste pairs Playfair Display italic at 64–96px for campaign headlines with #004D2C used as architectural material across full-bleed sections, nav, and footers. The 24px button radius is a deliberate middle ground between square and pill, and gold #C5A661 is applied with jeweler's precision over a warm cream background.
5. **Mode:** this is a light-first system. Body background is `#F5F1EA`,
   primary accent is `#004D2C`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Playfair Display at weight 700
   (tracking -0.02em); body is Helvetica Now Display at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 12px, buttons at 24px. Shadows: `0 2px 12px rgba(0,0,0,0.06)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
