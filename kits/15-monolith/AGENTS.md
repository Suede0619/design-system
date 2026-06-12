# AGENTS.md — applying the The Monolith Project design system

You are building a website (or component) with the **The Monolith Project** design system
(Experimental / Anti-Design; reference: https://monolith.world).

Confrontational machine-aesthetic anti-design: pure black/white, all-monospace, and a cursor that is the artwork.

## Hard rules

1. Binary existence — #000000 and #FFFFFF only, no greys or gradients
2. Monospace supremacy — a single monospace face for everything
3. Sequential revelation — numbered sections, not categories
4. Cursor as actor — mouse position drives layout via parallax
5. No affordances — buttons, links, and nav don't look like themselves

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Every decision flows from one commitment: the cursor is part of the artwork, tracked in real time to transform page elements. Zero-lag depth layers build a pseudo-3D space, anchored by huge ghost-opacity section numbers. Mechanical snap-inversions on hover and a crosshair cursor signal this is not a normal website.
5. **Mode:** this is a dark-first system. Body background is `#000000`,
   primary accent is `#FFFFFF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Space Mono at weight 700
   (tracking -0.04em); body is Space Mono at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
