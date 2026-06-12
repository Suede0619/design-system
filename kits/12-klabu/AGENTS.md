# AGENTS.md — applying the KLABU design system

You are building a website (or component) with the **KLABU** design system
(Social Impact / Athletic; reference: https://klabu.org).

Stadium-scale athletic typography and electric signal colors turn humanitarian data into a call to action.

## Hard rules

1. Urgency over elegance — high contrast and signal colors
2. Sport as visual language — condensed athletic type, kinetic energy
3. Data as storytelling — impact numbers animate and grow
4. Split thinking — split-screen layouts mirror two worlds
5. No apology aesthetics — nothing soft, rounded, or neutral

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > KLABU deploys Barlow Condensed at 80–120px — the voice of stadium scoreboards — for humanitarian numbers, an intentional cognitive dissonance. The 50/50 split-screen layout creates two parallel realities, with thick bordered cards like scoreboard panels and animated counters in electric blue and signal red.
5. **Mode:** this is a dark-first system. Body background is `#1A1A1A`,
   primary accent is `#0066FF`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Barlow Condensed at weight 700
   (tracking -0.01em); body is Barlow at 18px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 0px, buttons at 4px. Shadows: `0 8px 24px rgba(0,102,255,0.3)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
