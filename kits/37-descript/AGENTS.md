# AGENTS.md — applying the Descript design system

You are building a website (or component) with the **Descript** design system
(Creative Tool / Playful; reference: https://www.descript.com).

Creative energy with professional grounding — powerful tools made friendly in warm coral.

## Hard rules

1. Powerful tools made friendly
2. Show the work — demonstrate, don't describe
3. Playful but never childish
4. Coral accent only on things that matter: CTAs and feature highlights
5. Vibrant for creators, structured for teams

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The product interface is the hero. Rather than static screenshots, Descript shows the editing happening — words getting struck through, audio waveforms shifting, video frames updating in sync with text changes. The coral accent is warm enough to feel creative, structured enough to feel professional.
5. **Mode:** this is a light-first system. Body background is `#FAFAF8`,
   primary accent is `#FF5B35`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 700
   (tracking -0.02em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 8px. Shadows: `0 4px 16px rgba(255, 91, 53, 0.3)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
