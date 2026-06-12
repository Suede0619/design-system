# AGENTS.md — applying the Arc Browser design system

You are building a website (or component) with the **Arc Browser** design system
(Browser / Gradient Whimsy; reference: https://arc.net).

A browser that loves you back — soft gradient pills, floating screenshots, and warm Mac-native whimsy.

## Hard rules

1. Whimsical warmth controlled enough to feel sophisticated
2. Nothing has a sharp corner — pill shapes everywhere
3. Illustration is load-bearing, not decorative
4. Gradient restraint tells a product story
5. SF Pro as a Mac-native trust signal

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The 999px gradient pill is Arc's signature — every button, badge, and form element is soft and approachable. Floating screenshots breathe via a float animation whose shadow grows as the screen rises. The lavender → coral → teal gradient maps the emotional spectrum of browsing.
5. **Mode:** this is a light-first system. Body background is `#FAFAFA`,
   primary accent is `#C4B5FD`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is -apple-system at weight 700
   (tracking -0.03em); body is -apple-system at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 20px, buttons at 999px. Shadows: `0 32px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
