# AGENTS.md — applying the Dropbox Brand design system

You are building a website (or component) with the **Dropbox Brand** design system
(Swiss Minimal / Brand Guidelines; reference: https://brand.dropbox.com).

Ultra-clean Swiss minimalism — a design system about a design system, precise enough to cut glass.

## Hard rules

1. Relentless restraint — the medium is the message
2. One typeface for everything
3. Color deployed surgically: blue for interaction, navy for text
4. Whitespace does the talking (160px section spacing)
5. Flat doctrine — zero decorative gradients or shadows

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > A brand guidelines site that uses its own rules so precisely that the medium is the message. Color swatches live inside the same 12-column grid that defines them, and typography samples use the exact specs they document. Borders, not shadows, define every boundary.
5. **Mode:** this is a light-first system. Body background is `#FFFFFF`,
   primary accent is `#0061FF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Sharp Grotesk at weight 700
   (tracking -0.02em); body is Sharp Grotesk at 18px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 12px, buttons at 8px. Shadows: `0 4px 16px rgba(0, 0, 0, 0.08)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
