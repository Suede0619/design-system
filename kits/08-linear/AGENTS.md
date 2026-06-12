# AGENTS.md — applying the Linear design system

You are building a website (or component) with the **Linear** design system
(Ultra-Refined Dark SaaS; reference: https://linear.app).

The gold standard for dark SaaS — near-black surfaces, gossamer glass cards, gradient-text accents, keyboard-native.

## Hard rules

1. Maximum signal, minimum noise
2. Dark-first: light mode is an afterthought
3. Typography as primary visual element
4. Glass morphism done with discipline, not excess
5. Keyboard-native interaction patterns made visible

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Gradient-filled headlines paired with pervasive keyboard-shortcut visual language. The purple-to-blue gradient applied to background-clip:text on large headings is instantly recognizable, while scattered kbd chips declare a keyboard-first philosophy. Linear was engineered for people who optimize everything.
5. **Mode:** this is a dark-first system. Body background is `#0A0A0A`,
   primary accent is `#7C5CFC`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 700
   (tracking -0.04em); body is Inter at 15px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 12px, buttons at 6px. Shadows: `0 0 20px rgba(124,92,252,0.3)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
