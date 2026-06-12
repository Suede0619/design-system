# AGENTS.md — applying the Lando Norris design system

You are building a website (or component) with the **Lando Norris** design system
(Cinematic Sports / Dark Mode; reference: https://landonorris.com).

High-contrast dark cinema where every scroll accelerates through a tunnel of papaya orange and white.

## Hard rules

1. Video is the primary medium, not decoration
2. Enormous, unapologetic typography
3. Orange only for interactive highlights, never large fills
4. High-contrast white-on-black backbone
5. Flat and cinematic, no shadows

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Full-viewport video backgrounds with aggressive typographic overlay — headlines at 120px+ sitting directly on top of moving footage. Creates a broadcast-quality sports title sequence feel. Horizontal scroll sections use scroll-snap to push through content like accelerating through gears.
5. **Mode:** this is a dark-first system. Body background is `#0A0A0A`,
   primary accent is `#FF8000`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Aeonik Pro at weight 800
   (tracking -0.03em); body is Aeonik Pro at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
