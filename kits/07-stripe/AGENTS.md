# AGENTS.md — applying the Stripe design system

You are building a website (or component) with the **Stripe** design system
(Developer Fintech / Gradient Dark; reference: https://stripe.com).

Premium fintech built for developer trust — deep navy depth punctuated by living, breathing gradient purples.

## Hard rules

1. Precision over decoration
2. Developer-first clarity
3. Gradient depth, not flat color
4. Generous spacing with tight typographic control
5. Code is first-class content

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The animated mesh gradient hero — a dark navy canvas layered with multiple animated radial gradients in purple and cyan that shift on a slow 12s cycle, creating an organic sense of depth. Glass-effect cards float above it alongside pixel-perfect code blocks: this is what premium developer infrastructure looks like.
5. **Mode:** this is a dark-first system. Body background is `#0A2540`,
   primary accent is `#635BFF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 700
   (tracking -0.03em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 12px, buttons at 8px. Shadows: `0 4px 12px rgba(99,91,255,0.35)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
