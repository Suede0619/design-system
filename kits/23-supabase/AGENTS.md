# AGENTS.md — applying the Supabase design system

You are building a website (or component) with the **Supabase** design system
(Developer / Dark Emerald; reference: https://supabase.com).

The terminal got a tasteful rebrand — confident dark mode anchored by unmistakable electric green.

## Hard rules

1. Confident dark mode as default
2. Code blocks and terminal aesthetics as core content
3. Signature electric green used with total consistency
4. Data flow and connection diagrams tell the platform story
5. Technically legible, developer-native restraint

## How to use this kit

1. **Read `brand.yaml`** for the machine-readable summary, then **`SPEC.md`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import `tokens.css` and consume the `--ds-*` custom
   properties, or map through `tailwind.config.js` if the project uses Tailwind.
3. **Start from `components.css`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > That electric green #3ECF8E — singular, unmistakable, and technically legible on dark — is used so consistently it has become a developer-culture icon. The moment you see that green, you know it's Supabase. Dense code blocks, terminal aesthetics, and animated connection graphs reinforce the identity.
5. **Mode:** this is a dark-first system. Body background is `#1C1C1C`,
   primary accent is `#3ECF8E`. Use the derived `--ds-*-text` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is Inter at weight 700
   (tracking -0.02em); body is Inter at 16px.
   Do not introduce other typefaces.
7. **Shape:** cards round at 8px, buttons at 6px. Shadows: `0 8px 32px rgba(0,0,0,0.6)`.

## Sanity checklist before shipping

- [ ] Open `preview.html` and compare — does your page feel like the same brand?
- [ ] No colors outside `tokens.json`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates `--ds-bg` / `--ds-bg-alt` like the reference.
