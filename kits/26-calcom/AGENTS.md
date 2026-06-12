# AGENTS.md — applying the Cal.com design system

You are building a website (or component) with the **Cal.com** design system
(Scheduling / Open Source Clean; reference: https://cal.com).

Crisp off-white, deep navy type — the booking widget IS the hero.

## Hard rules

1. Calendar UI previews are the core visual language
2. Entirely flat design — no gradients
3. Compact, precise, and trustworthy
4. The product demonstrates itself
5. Generous, structured white space

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The actual booking widget is embedded directly in the marketing hero — not a screenshot or mockup, a real functional calendar component you can interact with. The product IS the hero element, rendered in crisp off-white with deep navy type and green availability slots.
5. **Mode:** this is a light-first system. Body background is `#FFFFFF`,
   primary accent is `#111827`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Cal Sans at weight 700
   (tracking -0.02em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 12px, buttons at 6px. Shadows: `0 8px 32px rgba(0, 0, 0, 0.06)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
