# AGENTS.md — applying the Mintlify design system

You are building a website (or component) with the **Mintlify** design system
(Documentation / Fresh Green; reference: https://mintlify.com).

Premium dark with mint-green intelligence — documentation made aspirational.

## Hard rules

1. Docs-native, hierarchical, scannable structure
2. Bento grid for diverse feature callouts
3. Hero always shows the real product in use
4. Mint green as a focused signal
5. Typography-first with excellent hierarchy

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Mintlify makes documentation look aspirational — a premium dark aesthetic that says this isn't your enterprise docs tool, while mint green communicates freshness and intelligence. Bento feature cards glow mint on hover, and the hero shows real customer docs rendered in the platform.
5. **Mode:** this is a dark-first system. Body background is `#0D0D0D`,
   primary accent is `#00C4A0`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Plus Jakarta Sans at weight 700
   (tracking -0.03em); body is Inter at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 8px. Shadows: `0 0 24px rgba(0, 196, 160, 0.4)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
