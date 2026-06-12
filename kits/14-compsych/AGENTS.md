# AGENTS.md — applying the ComPsych design system

You are building a website (or component) with the **ComPsych** design system
(Corporate Wellness / Warm; reference: https://www.compsych.com).

Rounded warmth and flat-vector people de-medicalize corporate wellness with AAA-grade accessibility.

## Hard rules

1. Rounded everything — no sharp corners, nothing institutional
2. Illustration-forward — warm, diverse flat vector people over photography
3. Documentation-first layout with persistent sidebar
4. Color-coded content using a warm teal/coral/cream palette
5. Feels like a trusted colleague's office, not a hospital waiting room

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > ComPsych's signature is maximum roundness — 24px card radius, 16px button radius — paired with illustration-native characters to psychologically de-medicalize wellness. Tinted rounded illustration pods frame flat vector people, and layered depth comes from background color relationships rather than dramatic shadows.
5. **Mode:** this is a light-first system. Body background is `#FFF8F0`,
   primary accent is `#0A8A8A`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is DM Sans at weight 700
   (tracking -0.02em); body is DM Sans at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 24px, buttons at 16px. Shadows: `0 2px 12px rgba(26, 39, 68, 0.08)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
