# AGENTS.md — applying the Teenage Engineering design system

You are building a website (or component) with the **Teenage Engineering** design system
(Product / Industrial Brutalism; reference: https://teenage.engineering).

The internet as a product manual from the future — utility is beauty, the website stays invisible.

## Hard rules

1. Utility IS beauty — the most beautiful thing is the thing that works
2. Zero radius, zero compromise — rectangular everything
3. Monochrome as ideology — black/white forces products to provide color
4. Spec sheets are beautiful when the typography is perfect
5. Small type, big confidence — product photography does the selling

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The entire site is pure #000 black text on pure #FFF white, with product accent colors appearing only on product images and buy buttons. Zero border-radius makes everything rectangular, creating an industrial tool-like identity. The design stays invisible so high-res studio product photography can be the entire experience.
5. **Mode:** this is a light-first system. Body background is `#FFFFFF`,
   primary accent is `#000000`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is TE Neue at weight 700
   (tracking -0.04em); body is TE Neue at 14px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
