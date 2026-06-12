# AGENTS.md — applying the Pitch design system

You are building a website (or component) with the **Pitch** design system
(Presentation / Bold Color; reference: https://pitch.com).

Every section looks like one of Pitch's own beautiful slide templates — polished dark-violet SaaS.

## Hard rules

1. The product itself is the hero — marketing as implicit demo
2. Dense but breathable
3. Presentation-editor metaphor bleeds into the site
4. Dark-violet aesthetic communicates deck quality
5. Elevated, slide-deck-precise composition

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The product itself is the hero — every section looks like one of Pitch's own beautiful slide templates. The dark-violet aesthetic communicates exactly what your deck will feel like, making the site an implicit product demonstration. Glow blobs, shimmer-bordered cards, and 3D-tilted screenshots reinforce the editor metaphor.
5. **Mode:** this is a dark-first system. Body background is `#0F0E17`,
   primary accent is `#7B5CF0`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Söhne at weight 700
   (tracking -0.02em); body is Söhne at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 16px, buttons at 8px. Shadows: `0 24px 64px rgba(0,0,0,0.6)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
