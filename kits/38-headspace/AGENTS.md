# AGENTS.md — applying the Headspace design system

You are building a website (or component) with the **Headspace** design system
(Wellness / Warm Illustration; reference: https://headspace.com).

Every interaction feels like a gentle exhale — softness as a feature, not a weakness.

## Hard rules

1. Wellness doesn't have to look clinical — softness is a feature
2. Warmth through radius — soft, unthreatening environment
3. Orange as emotional anchor, used only for action
4. Illustration over photography for a unique world
5. Breathing as design language — the 4-second rhythm permeates motion

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Heavy 20–28px border-radius on everything creates a soft, unthreatening environment, paired with a single warm orange used only for action. Custom organic illustrations build a world competitors can't copy, and a 4-second breathing animation rhythm — even loading states are breathing circles, never spinners — permeates all motion.
5. **Mode:** this is a light-first system. Body background is `#FFFAF0`,
   primary accent is `#F47D31`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is GT Walsheim at weight 700
   (tracking -0.03em); body is GT Walsheim at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 20px, buttons at 28px. Shadows: `0 8px 24px rgba(43, 45, 66, 0.1)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
