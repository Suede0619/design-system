# AGENTS.md — applying the Immersive Garden design system

You are building a website (or component) with the **Immersive Garden** design system
(Dark Luxury / WebGL Portfolio; reference: https://immersive-g.com).

Dark opulence meets digital craftsmanship — cinematic WebGL scenes, refined serif type, whispered gold accents.

## Hard rules

1. Interaction as performance art
2. Color is scarce — scarcity creates value
3. Gold only for interactive elements and the cursor, never backgrounds
4. Warm off-white text, never pure white
5. WebGL depth that flat design cannot touch

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > A custom gold cursor that breathes and transforms by context — shrinking over text, expanding with a 'View' label over images, a gentle gold dot over the background. Combined with WebGL shader transitions between pages, the whole experience feels like navigating a gallery rather than a website.
5. **Mode:** this is a dark-first system. Body background is `#080808`,
   primary accent is `#C5A55A`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Playfair Display at weight 400
   (tracking 0em); body is Sora at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
