# AGENTS.md — applying the Railway design system

You are building a website (or component) with the **Railway** design system
(Developer Platform / Purple Neon; reference: https://railway.com).

Mission control with a boutique makeover — deep near-black, glowing infra graphs, magenta-violet canvas.

## Hard rules

1. Theatrical dark tech with deep near-black backgrounds
2. Infrastructure as art — the visual canvas is the hero
3. Glowing service graphs reframe deployment complexity
4. Live counters and animated pipelines signal real-time
5. Service-color coding as a visual language

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > The visual canvas — a live, interactive node graph showing your entire stack — is embedded right into the marketing page, turning infrastructure into art. Service nodes pulse and dashed connectors animate data flow, while deployment pipelines progress from violet to terminal green.
5. **Mode:** this is a dark-first system. Body background is `#0B0D0F`,
   primary accent is `#7C3AED`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Geist at weight 700
   (tracking -0.02em); body is Geist at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 12px, buttons at 6px. Shadows: `0 8px 24px rgba(0,0,0,0.6)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
