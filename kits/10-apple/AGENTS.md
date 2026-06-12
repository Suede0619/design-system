# AGENTS.md — applying the Apple design system

You are building a website (or component) with the **Apple** design system
(Consumer Premium Editorial; reference: https://apple.com).

High-end print advertising that happens to be interactive — restraint, photography, and SF Pro at scale.

## Hard rules

1. Singular focus — one product, one story per page
2. Photography as hero at cinematic scale
3. Motion as revelation via scroll-driven animation
4. Typography-first hierarchy — size and weight carry meaning
5. Frictionless commerce — always-visible, never aggressive

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Apple is recognizable by its 980px centered island floating in vast gray space like a framed exhibit, and by pinned-scroll reveals where products assemble as you scroll. Pages alternate between gray, white and black sections in a deliberate rhythm, with SF Pro's negative tracking at 96px and a frosted blur nav.
5. **Mode:** this is a light-first system. Body background is `#F5F5F7`,
   primary accent is `#0071E3`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is SF Pro Display at weight 700
   (tracking -0.025em); body is SF Pro Text at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 18px, buttons at 980px. Shadows: `0 2px 8px rgba(0,0,0,0.08)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
