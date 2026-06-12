# AGENTS.md — applying the Allbirds design system

You are building a website (or component) with the **Allbirds** design system
(E-commerce / Sustainable Warm; reference: https://www.allbirds.com).

Earthy, honest commerce without pressure — a palette made of the materials themselves.

## Hard rules

1. Comfortable, sustainable, honest
2. Anti-corporate, approachable typography
3. Calm browsing over urgency tactics
4. Color palette ideologically consistent with the brand mission
5. Clean product photography in natural settings

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Every shade in the system — oat, bark, clay, wool gray — is a direct reference to the natural materials Allbirds uses. The design makes the color palette feel ideologically consistent with the sustainability mission, not just decoratively matching. You feel the ethics in the UX.
5. **Mode:** this is a light-first system. Body background is `#F5F0E8`,
   primary accent is `#3A2820`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Tiempos Headline at weight 700
   (tracking 0); body is Allbirds Sans at 15px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 4px, buttons at 4px. Shadows: `0 4px 16px rgba(0, 0, 0, 0.06)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
