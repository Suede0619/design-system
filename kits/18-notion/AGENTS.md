# AGENTS.md — applying the Notion design system

You are building a website (or component) with the **Notion** design system
(Productivity / Warm Minimal; reference: https://notion.so).

Earned minimalism on a warm cream canvas — a well-loved notebook, not a command center.

## Hard rules

1. Earned minimalism — every element serves the reader
2. Content is king — reading-first at human attention scale
3. Human-scaled warmth over cold enterprise sterility
4. Editorial restraint with generous breathing room
5. Toggle as metaphor — discovery is a gesture away

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > Built on editorial humanism — the warm cream canvas says 'paper' before a word is read. Emoji function as first-class UI shorthand and hand-drawn illustrations humanize what could feel like a feature grid. The 900px reading width keeps layouts focused, trusting content over convention.
5. **Mode:** this is a light-first system. Body background is `#FFFEFC`,
   primary accent is `#E16259`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is -apple-system at weight 700
   (tracking -0.02em); body is -apple-system at 15px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 8px, buttons at 4px. Shadows: `0 4px 16px rgba(55,53,47,0.10)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
