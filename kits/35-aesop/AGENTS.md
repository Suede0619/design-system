# AGENTS.md — applying the Aesop design system

You are building a website (or component) with the **Aesop** design system
(Luxury / Typographic Restraint; reference: https://www.aesop.com).

Literary luxury — libraries, apothecaries and rare bookshops rendered as a website.

## Hard rules

1. Copy at the center — design assumes you want to read
2. The page as page — book-like margins and rhythm
3. Generous whitespace, narrow type columns
4. Product within a world of literature and philosophy
5. Restraint and pigment-like, natural transitions

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Aesop is one of the only luxury brands whose website design assumes the visitor can and wants to read. Body text is 18px at 1.8 line-height in a serif designed for book setting, with navigation, layout, and whitespace all arranged in service of words. A radically differentiated literary design ethic.
5. **Mode:** this is a light-first system. Body background is `#F4EFE6`,
   primary accent is `#1A1410`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Vendetta at weight 400
   (tracking -0.01em); body is Futura PT at 18px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `0 4px 20px rgba(58, 46, 32, 0.08)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
