# AGENTS.md — applying the Raycast design system

You are building a website (or component) with the **Raycast** design system
(Developer Tool / Sleek Dark; reference: https://raycast.com).

A precision dark command-palette aesthetic where glass panels and purple glow simulate real interface depth.

## Hard rules

1. Dark-first, not dark-mode — near-black is the canvas
2. Depth through intentional layering, not decoration
3. Command palette as the core interface metaphor
4. Keyboard-native, developer-first signaling
5. Radical restraint in saturation — one touch of color at a time

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The command palette is the aesthetic language — glass panels with purple glow trace back to the product's command bar. Keyboard shortcut badges in monospace appear everywhere, and perspective-shifted UI screenshots float in 3D space. Color pops precisely because everything else stays neutral.
5. **Mode:** this is a dark-first system. Body background is `#0A0A0A`,
   primary accent is `#7C3AED`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 600
   (tracking -0.04em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 10px. Shadows: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
