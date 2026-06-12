#!/usr/bin/env node
/* ===================================================================
   ATOMIC KIT GENERATOR
   Builds one machine-readable brand kit per design system:
   tokens (JSON/CSS/Tailwind), brand.yaml, component atoms, agent
   instructions, a standalone preview page, and the full original spec.
   Output: kits/<slug>/ + kits/<slug>.zip
   Usage: node scripts/build-kits.mjs [SPEC_DIR]
   =================================================================== */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SPEC_DIR = process.argv[2] || path.resolve(ROOT, "../award-winners");
const OUT = path.join(ROOT, "kits");

/* ---- load data.js (classic script that assigns window.DESIGN_SYSTEMS) ---- */
const dataSrc = fs.readFileSync(path.join(ROOT, "data.js"), "utf8");
const windowShim = {};
new Function("window", dataSrc)(windowShim);
const SYSTEMS = windowShim.DESIGN_SYSTEMS;
if (!SYSTEMS?.length) throw new Error("data.js produced no systems");

/* ---- color helpers (same logic as app.js, for derived contrast tokens) ---- */
function parseColor(str) {
  if (!str) return null;
  str = str.trim();
  let m;
  if ((m = str.match(/^#([0-9a-f]{3,8})$/i))) {
    let h = m[1];
    if (h.length === 3) h = h.split("").map(c => c + c).join("") + "ff";
    else if (h.length === 4) h = h.split("").map(c => c + c).join("");
    else if (h.length === 6) h += "ff";
    return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16), a: parseInt(h.slice(6, 8), 16) / 255 };
  }
  if ((m = str.match(/rgba?\(([^)]+)\)/i))) {
    const p = m[1].split(",").map(x => x.trim());
    return { r: +p[0], g: +p[1], b: +p[2], a: p[3] !== undefined ? +p[3] : 1 };
  }
  return null;
}
function relLum(c) {
  if (!c) return 0.5;
  const f = v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
}
function bgLum(str) {
  const tokens = String(str).match(/#[0-9a-f]{3,8}|rgba?\([^)]+\)/gi) || [];
  let sum = 0, wsum = 0;
  tokens.forEach(t => {
    const c = parseColor(t);
    if (!c) return;
    const w = Math.max(c.a, 0.04);
    sum += relLum(c) * w; wsum += w;
  });
  return wsum ? sum / wsum : 0.5;
}
function derived(d) {
  const c = d.colors;
  const inkDark = relLum(parseColor(c.text)) < 0.5 ? c.text : "#141414";
  const inkLight = relLum(parseColor(c.text)) > 0.5 ? c.text : "#FFFFFF";
  const heroLight = bgLum(d.heroGradient) > 0.52;
  const surfLight = relLum(parseColor(c.surface)) > 0.5;
  const altLight = relLum(parseColor(c.bgAlt)) > 0.5;
  return {
    heroText: heroLight ? inkDark : "#FFFFFF",
    heroMuted: heroLight ? "rgba(20,18,15,0.66)" : "rgba(255,255,255,0.74)",
    surfaceText: surfLight ? inkDark : inkLight,
    surfaceMuted: surfLight ? "rgba(20,18,15,0.62)" : "rgba(255,255,255,0.62)",
    altText: altLight ? inkDark : "#FFFFFF",
    altMuted: altLight ? "rgba(20,18,15,0.6)" : "rgba(255,255,255,0.66)"
  };
}

/* ---- misc helpers ---- */
const y = v => JSON.stringify(String(v)); // JSON string == valid YAML scalar
const firstFont = stack => stack.split(",")[0].replace(/["']/g, "").trim();
const specFiles = fs.readdirSync(SPEC_DIR).filter(f => /^\d{2}-.+\.md$/.test(f));
const slugOf = d => {
  const f = specFiles.find(f => f.startsWith(d.id + "-"));
  return f ? f.replace(/\.md$/, "") : `${d.id}-${d.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
};

/* ================== file generators ================== */

function genBrandYaml(d) {
  return `# ${d.name} — atomic brand kit (machine-readable)
# Generated from the Design System Atlas. Hand this folder to a human or an agent.
kit_version: "1.0"
system:
  id: ${y(d.id)}
  name: ${y(d.name)}
  reference_url: ${y(d.url)}
  award: ${y(d.award)}
  category: ${y(d.category)}
  mode: ${y(d.mode)}
voice:
  tagline: ${y(d.tagline)}
  signature: ${y(d.signature)}
principles:
${d.principles.map(p => `  - ${y(p)}`).join("\n")}
typography:
  font_sans: ${y(d.fonts.sans)}
  font_display: ${y(d.fonts.display)}
  font_mono: ${y(d.fonts.mono || "")}
  scale:
    display: ${y(d.typeScale.display)}
    h1: ${y(d.typeScale.h1)}
    h2: ${y(d.typeScale.h2)}
    body: ${y(d.typeScale.body)}
  weight_heading: ${d.weights.heading}
  weight_body: ${d.weights.body}
  tracking_display: ${y(d.letterSpacingDisplay)}
color:
${Object.entries(d.colors).map(([k, v]) => `  ${k}: ${y(v)}`).join("\n")}
surfaces:
  hero_background: ${y(d.heroGradient)}
  radius_card: ${y(d.radius)}
  radius_button: ${y(d.buttonRadius)}
  shadow: ${y(d.shadow)}
files:
  tokens_json: tokens.json
  tokens_css: tokens.css
  tailwind: tailwind.config.js
  atoms_css: components.css
  agent_instructions: AGENTS.md
  full_spec: SPEC.md
  preview: preview.html
`;
}

function genTokensJson(d) {
  const dv = derived(d);
  const color = {};
  for (const [k, v] of Object.entries(d.colors)) color[k] = { $type: "color", $value: v };
  for (const [k, v] of Object.entries(dv)) color[k] = { $type: "color", $value: v, $description: "Derived for contrast safety" };
  return JSON.stringify({
    $description: `${d.name} design tokens — ${d.category}. ${d.tagline}`,
    color,
    font: {
      sans: { $type: "fontFamily", $value: d.fonts.sans },
      display: { $type: "fontFamily", $value: d.fonts.display },
      mono: { $type: "fontFamily", $value: d.fonts.mono || d.fonts.sans }
    },
    typescale: Object.fromEntries(Object.entries(d.typeScale).map(([k, v]) => [k, { $type: "dimension", $value: v }])),
    fontWeight: {
      heading: { $type: "fontWeight", $value: d.weights.heading },
      body: { $type: "fontWeight", $value: d.weights.body }
    },
    letterSpacing: { display: { $type: "dimension", $value: d.letterSpacingDisplay } },
    radius: {
      card: { $type: "dimension", $value: d.radius },
      button: { $type: "dimension", $value: d.buttonRadius }
    },
    shadow: { default: { $type: "shadow", $value: d.shadow } },
    gradient: { hero: { $type: "string", $value: d.heroGradient } }
  }, null, 2) + "\n";
}

function genTokensCss(d) {
  const dv = derived(d);
  return `/* ${d.name} — design tokens as CSS custom properties.
   Import this first, then components.css (or use the vars directly). */
:root {
  /* fonts */
  --ds-font-sans: ${d.fonts.sans};
  --ds-font-display: ${d.fonts.display};
  --ds-font-mono: ${d.fonts.mono || d.fonts.sans};

  /* color */
  --ds-bg: ${d.colors.bg};
  --ds-bg-alt: ${d.colors.bgAlt};
  --ds-surface: ${d.colors.surface};
  --ds-text: ${d.colors.text};
  --ds-text-muted: ${d.colors.textMuted};
  --ds-border: ${d.colors.border};
  --ds-primary: ${d.colors.primary};
  --ds-primary-hover: ${d.colors.primaryHover};
  --ds-on-primary: ${d.colors.onPrimary};
  --ds-accent-2: ${d.colors.accent2};

  /* derived (contrast-safe) */
  --ds-hero-text: ${dv.heroText};
  --ds-hero-muted: ${dv.heroMuted};
  --ds-surface-text: ${dv.surfaceText};
  --ds-surface-muted: ${dv.surfaceMuted};
  --ds-alt-text: ${dv.altText};
  --ds-alt-muted: ${dv.altMuted};

  /* type scale */
  --ds-size-display: ${d.typeScale.display};
  --ds-size-h1: ${d.typeScale.h1};
  --ds-size-h2: ${d.typeScale.h2};
  --ds-size-body: ${d.typeScale.body};
  --ds-weight-heading: ${d.weights.heading};
  --ds-weight-body: ${d.weights.body};
  --ds-tracking-display: ${d.letterSpacingDisplay};

  /* shape + depth */
  --ds-radius-card: ${d.radius};
  --ds-radius-button: ${d.buttonRadius};
  --ds-shadow: ${d.shadow};

  /* hero */
  --ds-hero-bg: ${d.heroGradient};
}
`;
}

function genTailwind(d) {
  const f = s => s.split(",").map(x => x.trim().replace(/^["']|["']$/g, ""));
  return `/** ${d.name} — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "${d.colors.bg}",
          "bg-alt": "${d.colors.bgAlt}",
          surface: "${d.colors.surface}",
          text: "${d.colors.text}",
          muted: "${d.colors.textMuted}",
          border: "${d.colors.border}",
          primary: "${d.colors.primary}",
          "primary-hover": "${d.colors.primaryHover}",
          "on-primary": "${d.colors.onPrimary}",
          accent2: "${d.colors.accent2}"
        }
      },
      fontFamily: {
        sans: ${JSON.stringify(f(d.fonts.sans))},
        display: ${JSON.stringify(f(d.fonts.display))},
        mono: ${JSON.stringify(f(d.fonts.mono || d.fonts.sans))}
      },
      fontSize: {
        "ds-display": ["${d.typeScale.display}", { lineHeight: "1.02", letterSpacing: "${d.letterSpacingDisplay}", fontWeight: "${d.weights.heading}" }],
        "ds-h1": ["${d.typeScale.h1}", { lineHeight: "1.1", letterSpacing: "${d.letterSpacingDisplay}", fontWeight: "${d.weights.heading}" }],
        "ds-h2": ["${d.typeScale.h2}", { lineHeight: "1.15", fontWeight: "${d.weights.heading}" }],
        "ds-body": ["${d.typeScale.body}", { lineHeight: "1.6", fontWeight: "${d.weights.body}" }]
      },
      borderRadius: {
        "ds-card": "${d.radius}",
        "ds-btn": "${d.buttonRadius}"
      },
      boxShadow: {
        ds: "${d.shadow === "none" ? "none" : d.shadow}"
      },
      backgroundImage: {
        "ds-hero": ${JSON.stringify(d.heroGradient)}
      }
    }
  }
};
`;
}

function genComponentsCss(d) {
  return `/* ${d.name} — atomic components ("atoms"), styled entirely by tokens.css.
   Import tokens.css before this file. */

/* ---------- base ---------- */
.ds-page {
  font-family: var(--ds-font-sans);
  font-size: var(--ds-size-body);
  font-weight: var(--ds-weight-body);
  line-height: 1.6;
  background: var(--ds-bg);
  color: var(--ds-text);
  -webkit-font-smoothing: antialiased;
}
.ds-display, .ds-h1, .ds-h2 {
  font-family: var(--ds-font-display);
  font-weight: var(--ds-weight-heading);
  letter-spacing: var(--ds-tracking-display);
  line-height: 1.05;
  margin: 0;
}
.ds-display { font-size: clamp(40px, 9vw, var(--ds-size-display)); }
.ds-h1 { font-size: clamp(32px, 6vw, var(--ds-size-h1)); }
.ds-h2 { font-size: clamp(24px, 4vw, var(--ds-size-h2)); line-height: 1.15; }
.ds-muted { color: var(--ds-text-muted); }
.ds-mono { font-family: var(--ds-font-mono); }

/* ---------- atoms: buttons ---------- */
.ds-btn {
  display: inline-flex; align-items: center; gap: 8px;
  font: inherit; font-weight: 600; font-size: 14px;
  padding: 12px 22px; cursor: pointer;
  border-radius: var(--ds-radius-button);
  border: 1px solid transparent;
  transition: transform .12s ease, filter .15s ease, background .15s ease;
}
.ds-btn:hover { transform: translateY(-1px); }
.ds-btn:active { transform: translateY(0); }
.ds-btn--primary { background: var(--ds-primary); color: var(--ds-on-primary); box-shadow: var(--ds-shadow); }
.ds-btn--primary:hover { background: var(--ds-primary-hover); }
.ds-btn--secondary { background: transparent; color: var(--ds-text); border-color: var(--ds-border); }
.ds-btn--secondary:hover { border-color: var(--ds-primary); color: var(--ds-primary); }
.ds-btn--ghost { background: transparent; color: var(--ds-primary); }

/* ---------- atoms: card ---------- */
.ds-card {
  background: var(--ds-surface);
  color: var(--ds-surface-text);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-card);
  box-shadow: var(--ds-shadow);
  padding: 24px;
}
.ds-card .ds-muted { color: var(--ds-surface-muted); }

/* ---------- atoms: form ---------- */
.ds-label { display: block; font-size: 12.5px; font-weight: 600; margin-bottom: 6px; }
.ds-input, .ds-select {
  width: 100%; font: inherit; font-size: 14px;
  color: var(--ds-text); background: var(--ds-bg);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-button);
  padding: 11px 13px;
  transition: border-color .15s, box-shadow .15s;
}
.ds-input:focus, .ds-select:focus {
  outline: none; border-color: var(--ds-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ds-primary) 22%, transparent);
}

/* ---------- atoms: badge ---------- */
.ds-badge {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 600; padding: 5px 12px;
  border-radius: 100px; border: 1px solid var(--ds-border);
  color: var(--ds-text-muted);
}
.ds-badge--solid { background: var(--ds-primary); color: var(--ds-on-primary); border-color: transparent; }
.ds-badge--tint { background: color-mix(in srgb, var(--ds-primary) 14%, transparent); color: var(--ds-primary); border-color: transparent; }

/* ---------- molecules: nav + hero + section ---------- */
.ds-nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 30px; border-bottom: 1px solid var(--ds-border);
}
.ds-nav a { color: var(--ds-text-muted); text-decoration: none; font-size: 13.5px; font-weight: 500; margin-left: 22px; }
.ds-nav a:hover { color: var(--ds-text); }
.ds-logo { font-family: var(--ds-font-display); font-weight: var(--ds-weight-heading); font-size: 19px; letter-spacing: var(--ds-tracking-display); }
.ds-logo b { color: var(--ds-primary); }

.ds-hero {
  background: var(--ds-hero-bg);
  color: var(--ds-hero-text);
  padding: 76px 30px 84px;
}
.ds-hero .ds-muted { color: var(--ds-hero-muted); }
.ds-hero .ds-btn--secondary { color: var(--ds-hero-text); border-color: color-mix(in srgb, var(--ds-hero-text) 30%, transparent); }

.ds-section { padding: 56px 30px; }
.ds-section--alt { background: var(--ds-bg-alt); color: var(--ds-alt-text); }
.ds-section--alt .ds-muted { color: var(--ds-alt-muted); }
`;
}

function genPreviewHtml(d) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${d.name} — Atomic Kit Preview</title>
<link rel="stylesheet" href="tokens.css" />
<link rel="stylesheet" href="components.css" />
<style>body{margin:0} .row{display:flex;gap:12px;flex-wrap:wrap;align-items:center} .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px}</style>
</head>
<body class="ds-page">
  <nav class="ds-nav">
    <span class="ds-logo">${d.name.split(" ")[0]}<b>.</b></span>
    <span><a href="#">Product</a><a href="#">Pricing</a><a href="#">Docs</a></span>
  </nav>
  <header class="ds-hero">
    <p class="ds-badge ds-badge--tint">${d.category}</p>
    <h1 class="ds-display" style="max-width:16ch;margin:18px 0">The ${d.name} system, applied.</h1>
    <p class="ds-muted" style="max-width:46ch;margin:0 0 28px">${d.tagline}</p>
    <div class="row">
      <button class="ds-btn ds-btn--primary">Primary action</button>
      <button class="ds-btn ds-btn--secondary">Secondary</button>
      <button class="ds-btn ds-btn--ghost">Ghost →</button>
    </div>
  </header>
  <section class="ds-section">
    <h2 class="ds-h2" style="margin-bottom:18px">Atoms</h2>
    <div class="grid">
      <div class="ds-card">
        <h3 style="margin:0 0 8px;font-family:var(--ds-font-display)">Card</h3>
        <p class="ds-muted" style="margin:0;font-size:14px">Surface, border, radius and shadow from tokens.</p>
      </div>
      <div class="ds-card">
        <label class="ds-label">Input</label>
        <input class="ds-input" placeholder="Type here…" />
      </div>
      <div class="ds-card">
        <div class="row">
          <span class="ds-badge ds-badge--solid">Solid</span>
          <span class="ds-badge ds-badge--tint">Tint</span>
          <span class="ds-badge">Outline</span>
        </div>
      </div>
    </div>
  </section>
  <section class="ds-section ds-section--alt">
    <h2 class="ds-h2">Alt section rhythm</h2>
    <p class="ds-muted" style="max-width:52ch">Alternate background with contrast-safe text, exactly as the system alternates page sections.</p>
  </section>
</body>
</html>
`;
}

function genAgentsMd(d) {
  return `# AGENTS.md — applying the ${d.name} design system

You are building a website (or component) with the **${d.name}** design system
(${d.category}; reference: ${d.url}).

${d.tagline}

## Hard rules

${d.principles.map((p, i) => `${i + 1}. ${p}`).join("\n")}

## How to use this kit

1. **Read \`brand.yaml\`** for the machine-readable summary, then **\`SPEC.md\`** for the
   complete original specification (full type scale, spacing, motion, component CSS).
2. **Never hardcode style values.** Import \`tokens.css\` and consume the \`--ds-*\` custom
   properties, or map through \`tailwind.config.js\` if the project uses Tailwind.
3. **Start from \`components.css\`** for atoms (buttons, cards, inputs, badges, nav, hero).
   Extend them; do not restyle them from scratch.
4. **The signature is non-negotiable.** Every page must express it:
   > ${d.signature}
5. **Mode:** this is a ${d.mode}-first system. Body background is \`${d.colors.bg}\`,
   primary accent is \`${d.colors.primary}\`. Use the derived \`--ds-*-text\` tokens on hero,
   surface and alt backgrounds — they are pre-computed for contrast safety.
6. **Typography:** display face is ${firstFont(d.fonts.display)} at weight ${d.weights.heading}
   (tracking ${d.letterSpacingDisplay}); body is ${firstFont(d.fonts.sans)} at ${d.typeScale.body}.
   Do not introduce other typefaces.
7. **Shape:** cards round at ${d.radius}, buttons at ${d.buttonRadius}. Shadows: \`${d.shadow}\`.

## Sanity checklist before shipping

- [ ] Open \`preview.html\` and compare — does your page feel like the same brand?
- [ ] No colors outside \`tokens.json\`.
- [ ] The signature move (above) is present and obvious.
- [ ] Section rhythm alternates \`--ds-bg\` / \`--ds-bg-alt\` like the reference.
`;
}

function genReadme(d, slug) {
  return `# ${d.name} — Atomic Kit

> ${d.tagline}

**${d.award}** · ${d.category} · [reference site](${d.url})

This is a machine-readable brand kit: hand the folder to a designer, a developer,
or an AI coding agent and they have everything needed to produce on-system work.

| File | What it is |
|------|------------|
| \`brand.yaml\` | Machine-readable brand summary (identity, voice, principles, tokens index) |
| \`tokens.json\` | Design tokens in W3C-style JSON (colors, type, radii, shadows, gradients) |
| \`tokens.css\` | The same tokens as CSS custom properties (\`--ds-*\`) |
| \`tailwind.config.js\` | Tailwind theme mapping of the tokens |
| \`components.css\` | Styled atoms: buttons, cards, inputs, badges, nav, hero, sections |
| \`preview.html\` | Standalone specimen page — open it in a browser |
| \`AGENTS.md\` | Instructions for AI coding agents applying this system |
| \`SPEC.md\` | The complete original design-system specification |

## Quick start

\`\`\`html
<link rel="stylesheet" href="tokens.css" />
<link rel="stylesheet" href="components.css" />
<body class="ds-page"> … </body>
\`\`\`

Or with an agent:

\`\`\`
Apply the design system in ./${slug}/ to this project. Follow AGENTS.md.
\`\`\`

---
Part of the [Design System Atlas](https://atomic.nrvana.com) — 40 award-winning systems, applied live.
`;
}

/* ================== build ================== */
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const manifest = [];

for (const d of SYSTEMS) {
  const slug = slugOf(d);
  const dir = path.join(OUT, slug);
  fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(path.join(dir, "README.md"), genReadme(d, slug));
  fs.writeFileSync(path.join(dir, "AGENTS.md"), genAgentsMd(d));
  fs.writeFileSync(path.join(dir, "brand.yaml"), genBrandYaml(d));
  fs.writeFileSync(path.join(dir, "tokens.json"), genTokensJson(d));
  fs.writeFileSync(path.join(dir, "tokens.css"), genTokensCss(d));
  fs.writeFileSync(path.join(dir, "tailwind.config.js"), genTailwind(d));
  fs.writeFileSync(path.join(dir, "components.css"), genComponentsCss(d));
  fs.writeFileSync(path.join(dir, "preview.html"), genPreviewHtml(d));

  const specPath = path.join(SPEC_DIR, slug + ".md");
  if (fs.existsSync(specPath)) {
    fs.copyFileSync(specPath, path.join(dir, "SPEC.md"));
  } else {
    console.warn(`! no spec found for ${slug}`);
  }

  execSync(`zip -q -r -X "${slug}.zip" "${slug}"`, { cwd: OUT });
  manifest.push({ id: d.id, name: d.name, slug, zip: `kits/${slug}.zip` });
  console.log(`✓ ${slug}`);
}

fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`\nBuilt ${manifest.length} kits → ${OUT}`);
