# AGENTS.md — applying the Aktiv design system

You are building a website (or component) with the **Aktiv** design system
(Agency / Swiss Grid; reference: https://aktiv.studio).

Swiss restraint in a cream palette — Aktiv Grotesk as both brand and tool.

## Hard rules

1. Grid as language — followed rigorously, broken intentionally
2. 40% of any section is intentionally empty
3. Asymmetry is architectural, not accidental
4. Mixed-weight headlines: thin + bold juxtaposition
5. Flat color and grain texture over gradients

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The namesake typeface is the design system — Aktiv Grotesk at every scale from 8vw hero to 11px nav labels creates a coherent voice where size and weight are the only variables. Clean without being empty, structured without being rigid, with a warm cream palette and intentional grid breaks.
5. **Mode:** this is a light-first system. Body background is `#FAFAF8`,
   primary accent is `#111110`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Aktiv Grotesk at weight 700
   (tracking -0.01em); body is Aktiv Grotesk at 15px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 4px, buttons at 8px. Shadows: `0 2px 12px rgba(0, 0, 0, 0.06)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
