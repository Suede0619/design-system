# Design System Atlas

A living visual reference for **40 award-winning website design systems**. Pick a system from the menu and instantly see what a real website looks like when built with its tokens — typography, color, spacing, components, and the one signature move that makes it unmistakable.

🔗 **Live:** https://atomic.nrvana.com (also at https://suede0619.github.io/design-system/)

## What it does

Each of the 40 systems (Stripe, Linear, Apple, Figma, Aesop, Teenage Engineering, …) is distilled into a token set — fonts, color palette, radii, shadows, hero treatment, type scale. The app re-skins one identical mock website (nav, hero, feature cards, stats, forms, pricing, type specimen, footer) live as you switch, so you can compare them apples-to-apples.

Below each preview, an **anatomy panel** documents the palette (with hex values), foundations, design principles, and the system's signature.

## The menu

- **Sidebar** — searchable, filterable (Dark / Light) list with a mini-swatch preview of every system.
- **⌘K command palette** — fuzzy-jump to any system.
- **Keyboard** — `←` / `→` cycle systems, `R` randomizes, `/` focuses search, `↵` opens.
- **Viewport toggle** — preview at desktop / tablet / mobile widths.

## Atomic kits

Every system ships as a downloadable **atomic kit** — a machine-readable brand folder in the spirit of [the HTML brand / input-based outcomes](https://x.com/emmettshine): `brand.yaml`, `tokens.json` (W3C-style), `tokens.css`, `tailwind.config.js`, styled component atoms, a standalone `preview.html`, `AGENTS.md` instructions for AI coding agents, and the complete original `SPEC.md`. Download from any system's page, or grab them from [`kits/`](kits/).

Regenerate all kits from `data.js` + the original specs:

```sh
node scripts/build-kits.mjs [path/to/specs]
```

## Tech

Pure static HTML/CSS/JS — no build step, no dependencies. Every preview is driven by CSS custom properties set per system; contrast-safe text colors are computed from each background's relative luminance.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | App shell, menu, command palette |
| `styles.css` | App chrome + the scoped `.ds-canvas` preview styles |
| `data.js` | The 40 design-system token sets |
| `app.js` | Rendering, re-skinning, search, keyboard, palette |

> **Rule:** No two projects should ever use the same design system. Pick one per project.
