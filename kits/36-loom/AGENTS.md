# AGENTS.md — applying the Loom design system

You are building a website (or component) with the **Loom** design system
(SaaS / Friendly Purple; reference: https://www.loom.com).

Warm purple-violet product energy that says video is for everyone — bright, friendly, never cold.

## Hard rules

1. Video is for everyone — accessible and encouraging
2. Video-native — every screenshot is a recording
3. Vibrant but never overwhelming
4. Color journey from hero energy to clean comprehension
5. Dark sections shift emotional register, not just aesthetics

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The recording UI is always visible — a camera pip, a recording indicator, a screen capture frame, or a timeline scrubber. The product's core interaction (pressing record) is never far from view, keeping the value proposition constantly alive. You don't just read 'record a video' — you see someone already recording.
5. **Mode:** this is a light-first system. Body background is `#FAFAFA`,
   primary accent is `#625DF5`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 700
   (tracking -0.02em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 8px. Shadows: `0 4px 16px rgba(98, 93, 245, 0.35)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
