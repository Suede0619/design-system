# AGENTS.md — applying the Glossier design system

You are building a website (or component) with the **Glossier** design system
(Beauty / Millennial Pink; reference: https://www.glossier.com).

Millennial pink softness with disciplined restraint — beauty that's already on your skin.

## Hard rules

1. Soft, effortless, and for you
2. The product IS the palette
3. Disciplined restraint over feature clutter
4. Community woven in to validate and inspire
5. Invite, never pressure

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The color is a cultural artifact, not just a brand choice. 'Millennial pink' entered the design vernacular partly because of Glossier's disciplined deployment of #F5DAD2 and its relatives. Every pink element reinforces beauty that's soft, effortless, and never aggressive.
5. **Mode:** this is a light-first system. Body background is `#FDF8F6`,
   primary accent is `#1A1414`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Graphik at weight 400
   (tracking 0); body is Graphik at 15px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 8px, buttons at 4px. Shadows: `0 2px 12px rgba(0, 0, 0, 0.05)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
