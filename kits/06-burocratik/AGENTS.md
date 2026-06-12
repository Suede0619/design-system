# AGENTS.md — applying the Bürocratik design system

You are building a website (or component) with the **Bürocratik** design system
(Editorial Maximalism / Monochrome Brutalist; reference: https://www.burocratik.com).

Editorial maximalism in monochrome — oversized type, absolute black-and-white contrast, red as an exclamation mark.

## Hard rules

1. The palette is binary: black or white, period
2. Red appears only once per page — extreme restraint
3. Oversized typography dominates every viewport
4. Whitespace is weaponized
5. Numbered manifesto structure anchors every section

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The numbered manifesto structure — every section opens with an oversized outlined numeral (01, 02, 03...) anchoring content like chapter markers in a bold publication. Combined with max-width typography that fills the viewport and infinite marquee strips between sections, it reads like a design agency's declaration of principles.
5. **Mode:** this is a light-first system. Body background is `#FFFFFF`,
   primary accent is `#FF3D3D`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Neue Montreal at weight 900
   (tracking -0.04em); body is Neue Montreal at 18px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
