# KLABU — Atomic Kit

> Stadium-scale athletic typography and electric signal colors turn humanitarian data into a call to action.

**Webby People's Voice 2025** · Social Impact / Athletic · [reference site](https://klabu.org)

This is a machine-readable brand kit: hand the folder to a designer, a developer,
or an AI coding agent and they have everything needed to produce on-system work.

| File | What it is |
|------|------------|
| `brand.yaml` | Machine-readable brand summary (identity, voice, principles, tokens index) |
| `tokens.json` | Design tokens in W3C-style JSON (colors, type, radii, shadows, gradients) |
| `tokens.css` | The same tokens as CSS custom properties (`--ds-*`) |
| `tailwind.config.js` | Tailwind theme mapping of the tokens |
| `components.css` | Styled atoms: buttons, cards, inputs, badges, nav, hero, sections |
| `preview.html` | Standalone specimen page — open it in a browser |
| `AGENTS.md` | Instructions for AI coding agents applying this system |
| `SPEC.md` | The complete original design-system specification |

## Quick start

```html
<link rel="stylesheet" href="tokens.css" />
<link rel="stylesheet" href="components.css" />
<body class="ds-page"> … </body>
```

Or with an agent:

```
Apply the design system in ./12-klabu/ to this project. Follow AGENTS.md.
```

---
Part of the [Design System Atlas](https://atomic.nrvana.com) — 40 award-winning systems, applied live.
