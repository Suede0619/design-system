# AGENTS.md — applying the Symphony of Vines design system

You are building a website (or component) with the **Symphony of Vines** design system
(Wine / Cinematic Scroll; reference: https://thesymphonyofvines.com).

Cinematic wine storytelling — a slowly-unfolding film of burgundy, gold, and full-bleed vineyard photography.

## Hard rules

1. Cinematic first — feels like a slowly-unfolding film
2. Photography is the hero — full-bleed vineyard images carry emotion
3. Typography does the talking — display serifs for all headings
4. Time is architecture — the year timeline is the narrative backbone
5. Motion is ambient — everything eases at 1.5 seconds minimum

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > A horizontal scroll narrative where each panel is a vintage year with the year floating in large translucent numerals behind the content, advancing like a film reel. A three-layer parallax stack builds genuine 3D depth, threaded by a full-width gold timeline — making time a physical journey rather than a document.
5. **Mode:** this is a dark-first system. Body background is `#1A1006`,
   primary accent is `#722F37`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Playfair Display at weight 700
   (tracking -0.02em); body is Libre Baskerville at 17px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 0px. Shadows: `none`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
