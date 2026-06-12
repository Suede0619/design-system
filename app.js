/* ===================================================================
   DESIGN SYSTEM ATLAS — app logic
   Re-skins a full mock website from each system's tokens.
   =================================================================== */
(function () {
  "use strict";
  const SYSTEMS = window.DESIGN_SYSTEMS || [];
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- atomic kit slugs (id -> kits/<slug>.zip) ---------- */
  let KIT_SLUGS = {};
  fetch("kits/manifest.json")
    .then(r => (r.ok ? r.json() : []))
    .then(list => {
      list.forEach(k => { KIT_SLUGS[k.id] = k.slug; });
      if (current) select(current.id, false); // re-render with kit links
    })
    .catch(() => {});

  /* ---------- color helpers ---------- */
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
  // estimate the luminance of a (possibly multi-stop) background/gradient
  function bgLum(str) {
    const tokens = str.match(/#[0-9a-f]{3,8}|rgba?\([^)]+\)/gi) || [];
    let sum = 0, wsum = 0;
    tokens.forEach(t => {
      const c = parseColor(t);
      if (!c) return;
      const w = Math.max(c.a, 0.04);   // weight by opacity; near-transparent layers count little
      sum += relLum(c) * w; wsum += w;
    });
    if (!wsum) return 0.5;
    return sum / wsum;
  }
  const isDark = str => bgLum(str) < 0.5;

  /* ---------- build CSS variable map for a system ---------- */
  function styleVars(d) {
    const c = d.colors;
    const heroLight = bgLum(d.heroGradient) > 0.52;
    const inkDark = (relLum(parseColor(c.text)) < 0.5) ? c.text : "#141414";
    const heroText = heroLight ? inkDark : "#FFFFFF";
    const onLight = !heroLight;
    const heroMuted = onLight ? "rgba(255,255,255,0.74)" : "rgba(20,18,15,0.66)";
    const heroLine = onLight ? "rgba(255,255,255,0.30)" : "rgba(0,0,0,0.16)";
    const heroChip = onLight ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.05)";

    const altLight = relLum(parseColor(c.bgAlt)) > 0.5;
    const altText = altLight ? inkDark : "#FFFFFF";
    const altMuted = altLight ? "rgba(20,18,15,0.6)" : "rgba(255,255,255,0.66)";

    const lightInk = (relLum(parseColor(c.text)) > 0.5) ? c.text : "#FFFFFF";
    const surfLight = relLum(parseColor(c.surface)) > 0.5;
    const surfText = surfLight ? inkDark : lightInk;
    const surfMuted = surfLight ? "rgba(20,18,15,0.62)" : "rgba(255,255,255,0.62)";
    const surfLine = surfLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.12)";

    return {
      "--ds-font-sans": d.fonts.sans,
      "--ds-font-display": d.fonts.display,
      "--ds-font-mono": d.fonts.mono || d.fonts.sans,
      "--ds-bg": c.bg, "--ds-bg-alt": c.bgAlt, "--ds-surface": c.surface,
      "--ds-text": c.text, "--ds-muted": c.textMuted, "--ds-border": c.border,
      "--ds-primary": c.primary, "--ds-primary-hover": c.primaryHover,
      "--ds-on-primary": c.onPrimary, "--ds-accent2": c.accent2,
      "--ds-hero": d.heroGradient,
      "--ds-hero-text": heroText, "--ds-hero-muted": heroMuted,
      "--ds-hero-line": heroLine, "--ds-hero-chip": heroChip,
      "--ds-alt-text": altText, "--ds-alt-muted": altMuted,
      "--ds-surf-text": surfText, "--ds-surf-muted": surfMuted, "--ds-surf-line": surfLine,
      "--ds-radius": d.radius, "--ds-btn-radius": d.buttonRadius,
      "--ds-shadow": d.shadow === "none" ? "none" : d.shadow,
      "--ds-shadow-card": d.shadow === "none" ? "none" : d.shadow,
      "--ds-display-size": d.typeScale.display,
      "--ds-h2-size": d.typeScale.h2,
      "--ds-body-size": d.typeScale.body,
      "--ds-w-heading": d.weights.heading,
      "--ds-w-body": d.weights.body,
      "--ds-tracking": d.letterSpacingDisplay
    };
  }

  /* ---------- mock website markup ---------- */
  function canvasHTML(d) {
    const name = d.name;
    const ts = d.typeScale;
    const cap = (px, max) => `min(${px}, ${max}px)`;
    const features = [
      ["✦", "Built for scale", "Ships fast, stays fast. Every interaction tuned to the millisecond and measured in production."],
      ["◷", "Always on time", "Reliable infrastructure that runs while you sleep, with zero-config defaults that just work."],
      ["⬡", "Designed to delight", "A coherent system end to end — type, color, and motion working as one considered whole."]
    ];
    return `
    <nav class="pv-nav">
      <div class="pv-logo">${name.split(" ")[0]}<b>.</b></div>
      <div class="pv-links">
        <a href="#">Product</a><a href="#">Solutions</a><a href="#">Pricing</a><a href="#">Docs</a>
        <button class="pv-cta">Get started</button>
      </div>
    </nav>

    <header class="pv-hero">
      <span class="pv-eyebrow">● ${d.category}</span>
      <h1>The website ${name} would build.</h1>
      <p class="lead">${d.tagline}</p>
      <div class="pv-hero-btns">
        <button class="btn btn-primary">Start building</button>
        <button class="btn btn-secondary">View the work</button>
        <button class="btn btn-ghost">Learn more →</button>
      </div>
    </header>

    <section class="pv-section">
      <div class="sec-head">
        <div class="sec-kicker">Why it works</div>
        <h2>Everything in one coherent system</h2>
        <p class="sub">Type, color, spacing and motion engineered to feel inevitable together.</p>
      </div>
      <div class="card-grid">
        ${features.map(f => `
          <div class="feat-card">
            <div class="feat-ico">${f[0]}</div>
            <h3>${f[1]}</h3>
            <p>${f[2]}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="pv-section alt">
      <div class="stat-row">
        <div class="stat"><div class="n">99.9%</div><div class="l">Uptime guarantee</div></div>
        <div class="stat"><div class="n">2.4M</div><div class="l">Requests / minute</div></div>
        <div class="stat"><div class="n">40ms</div><div class="l">Median latency</div></div>
        <div class="stat"><div class="n">180+</div><div class="l">Countries served</div></div>
      </div>
    </section>

    <section class="pv-section">
      <div class="split">
        <div>
          <div class="sec-kicker">Get in touch</div>
          <h2>Start your project</h2>
          <p class="sub" style="margin-bottom:22px">Tell us what you're building. The form below is styled entirely by this system.</p>
          <div class="panel">
            <div class="field"><label>Full name</label><input placeholder="Ada Lovelace" /></div>
            <div class="field"><label>Work email</label><input placeholder="ada@studio.com" /></div>
            <div class="field"><label>Project type</label>
              <select><option>Marketing site</option><option>Web application</option><option>E-commerce</option></select>
            </div>
            <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:4px">Request access</button>
          </div>
        </div>
        <div>
          <div class="sec-kicker">Pricing</div>
          <h2>Simple, honest plans</h2>
          <p class="sub" style="margin-bottom:22px">Pricing cards rendered with this system's surfaces and radii.</p>
          <div class="panel">
            <div class="pill tint" style="display:inline-block;margin-bottom:14px">Most popular</div>
            <div class="price-tag">$29<span>/ month</span></div>
            <ul class="price-list">
              <li>Unlimited projects</li>
              <li>Custom domains &amp; SSL</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
            <button class="btn btn-primary" style="width:100%;justify-content:center">Choose plan</button>
          </div>
        </div>
      </div>
    </section>

    <section class="pv-section">
      <div class="sec-head">
        <div class="sec-kicker">Type scale</div>
        <h2>Typography specimen</h2>
      </div>
      <div class="type-spec">
        <div><span class="tlabel">Display · ${ts.display}</span><span class="tsample" style="font-size:${cap(ts.display, 64)}">Aa</span><span class="tsample" style="font-size:${cap(ts.display, 30)}">The quick brown fox</span></div>
        <div><span class="tlabel">Heading · ${ts.h1}</span><span class="tsample" style="font-size:${cap(ts.h1, 30)}">Jumps over the lazy dog</span></div>
        <div><span class="tlabel">Subhead · ${ts.h2}</span><span class="tsample" style="font-size:${cap(ts.h2, 24)}">Pack my box with jugs</span></div>
        <div><span class="tlabel">Body · ${ts.body}</span><span style="font-size:${ts.body};font-family:var(--ds-font-sans);font-weight:var(--ds-w-body);color:var(--ds-muted);max-width:50ch;line-height:1.6">Body copy set in the system's primary face. The five boxing wizards jump quickly, while sphinxes of black quartz judge a vow.</span></div>
      </div>
      <div class="pill-row" style="margin-top:26px">
        <span class="pill solid">Primary</span>
        <span class="pill tint">Tinted</span>
        <span class="pill acc">Accent</span>
        <span class="pill">Outline</span>
        <span class="pill">New</span>
      </div>
    </section>

    <footer class="pv-foot">
      <div>
        <div class="pv-logo" style="margin-bottom:8px">${name.split(" ")[0]}<b>.</b></div>
        <div style="color:var(--ds-muted);font-size:13px">© 2026 — styled by the ${name} system.</div>
      </div>
      <div class="fcols">
        <div><h4>Product</h4><a href="#">Features</a><a href="#">Pricing</a><a href="#">Docs</a></div>
        <div><h4>Company</h4><a href="#">About</a><a href="#">Careers</a><a href="#">Contact</a></div>
        <div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>`;
  }

  /* ---------- anatomy / spec panels ---------- */
  function swatchEl(label, hex) {
    return `<div class="sw"><div class="chip-c" style="background:${hex}"></div><div class="meta"><div class="nm">${label}</div><div class="hx">${hex}</div></div></div>`;
  }
  function anatomyHTML(d) {
    const c = d.colors;
    const pal = [
      ["Background", c.bg], ["Alt BG", c.bgAlt], ["Surface", c.surface],
      ["Primary", c.primary], ["Primary +", c.primaryHover], ["Accent", c.accent2],
      ["Text", c.text], ["Muted", c.textMuted], ["Border", c.border]
    ];
    const slug = KIT_SLUGS[d.id];
    const kitCard = slug ? `
      <div class="spec-card wide kit-card">
        <div class="kit-copy">
          <h3>Atomic kit</h3>
          <p class="kit-lead">Take the ${esc(d.name)} system with you — as a machine-readable brand kit.</p>
          <p class="kit-sub">Design tokens (JSON&nbsp;·&nbsp;CSS&nbsp;·&nbsp;Tailwind), styled component atoms, a standalone preview page, the complete original spec, and <code>AGENTS.md</code> instructions so an AI coding agent can build on-brand without guesswork. Unzip it, or drop the folder straight into your repo.</p>
          <div class="kit-files">
            ${["brand.yaml", "tokens.json", "tokens.css", "tailwind.config.js", "components.css", "preview.html", "AGENTS.md", "SPEC.md"].map(f => `<span>${f}</span>`).join("")}
          </div>
        </div>
        <div class="kit-action">
          <a class="kit-btn" href="kits/${slug}.zip" download>
            <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 3v12m0 0l-4.5-4.5M12 15l4.5-4.5M4 19h16"/></svg>
            Download the kit
          </a>
          <span class="kit-note">.zip · 9 files · MIT-style, use freely</span>
        </div>
      </div>` : "";

    return `
      <div class="spec-card wide">
        <h3>The one memorable thing</h3>
        <p class="tagline-text">${d.tagline}</p>
        <p class="signature-text">${d.signature}</p>
      </div>

      ${kitCard}

      <div class="spec-card">
        <h3>Color palette</h3>
        <div class="palette">${pal.map(p => swatchEl(p[0], p[1])).join("")}</div>
      </div>

      <div class="spec-card">
        <h3>Foundations</h3>
        <dl class="kv">
          <dt>Display font</dt><dd>${esc(firstFont(d.fonts.display))}</dd>
          <dt>Body font</dt><dd>${esc(firstFont(d.fonts.sans))}</dd>
          <dt>Mono font</dt><dd>${d.fonts.mono ? esc(firstFont(d.fonts.mono)) : "—"}</dd>
          <dt>Display size</dt><dd>${d.typeScale.display}</dd>
          <dt>Heading weight</dt><dd>${d.weights.heading}</dd>
          <dt>Body weight</dt><dd>${d.weights.body}</dd>
          <dt>Tracking</dt><dd>${d.letterSpacingDisplay}</dd>
          <dt>Card radius</dt><dd>${d.radius}</dd>
          <dt>Button radius</dt><dd>${d.buttonRadius}</dd>
          <dt>Mode</dt><dd>${d.mode}</dd>
        </dl>
      </div>

      <div class="spec-card wide">
        <h3>Design principles</h3>
        <ol class="principles">${d.principles.map(p => `<li>${esc(p)}</li>`).join("")}</ol>
      </div>`;
  }
  function firstFont(stack) { return stack.split(",")[0].replace(/["']/g, "").trim(); }
  function esc(s) { return String(s).replace(/[&<>]/g, x => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[x])); }

  /* ---------- sidebar list ---------- */
  function swatchMarkup(d) {
    return `<div class="ds-swatch" style="background:${d.heroGradient}">
      <div class="dots">
        <i style="background:${d.colors.primary}"></i>
        <i style="background:${d.colors.accent2}"></i>
        <i style="background:${d.colors.text}"></i>
      </div></div>`;
  }
  const listEl = $("#dsList");
  function renderList(items) {
    listEl.innerHTML = items.map(d => `
      <button class="ds-item" data-id="${d.id}" role="option">
        ${swatchMarkup(d)}
        <div class="ds-info">
          <div class="row1"><span class="ds-num">${d.id}</span><span class="ds-name">${esc(d.name)}</span></div>
          <div class="ds-cat">${esc(d.category)}</div>
        </div>
        <span class="ds-mode">${d.mode}</span>
      </button>`).join("");
    $$(".ds-item", listEl).forEach(el => el.addEventListener("click", () => select(el.dataset.id, true)));
    markActive();
    $("#resultCount").textContent = `${items.length} of ${SYSTEMS.length} systems`;
  }

  /* ---------- state ---------- */
  let current = SYSTEMS[0];
  let filter = "all", query = "";

  function filtered() {
    return SYSTEMS.filter(d => {
      if (filter !== "all" && d.mode !== filter) return false;
      if (query) {
        const q = query.toLowerCase();
        return (d.name + " " + d.category + " " + d.tagline).toLowerCase().includes(q);
      }
      return true;
    });
  }
  function markActive() {
    $$(".ds-item", listEl).forEach(el => el.classList.toggle("active", el.dataset.id === current.id));
  }

  /* ---------- apply a system ---------- */
  const canvas = $("#canvas");
  const browser = $("#browser");
  function select(id, scrollList) {
    const d = SYSTEMS.find(s => s.id === id);
    if (!d) return;
    current = d;
    const vars = styleVars(d);
    Object.entries(vars).forEach(([k, v]) => canvas.style.setProperty(k, v));
    canvas.innerHTML = canvasHTML(d);
    $("#anatomy").innerHTML = anatomyHTML(d);

    $("#nowNum").textContent = d.id;
    $("#nowName").textContent = d.name;
    $("#nowCat").textContent = d.category;
    $("#nowAward").textContent = d.award;
    const link = $("#srcLink"); link.href = d.url;
    const kitLink = $("#kitLink");
    if (KIT_SLUGS[d.id]) { kitLink.hidden = false; kitLink.href = `kits/${KIT_SLUGS[d.id]}.zip`; }
    else kitLink.hidden = true;
    $("#urlPill").textContent = d.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    document.title = `${d.name} — Design System Atlas`;
    history.replaceState(null, "", "#" + d.id);

    markActive();
    $("#scrollArea").scrollTo({ top: 0, behavior: "smooth" });
    if (scrollList) {
      const it = $(`.ds-item[data-id="${id}"]`, listEl);
      if (it) it.scrollIntoView({ block: "nearest" });
    }
  }
  function step(dir) {
    const list = filtered();
    if (!list.length) return;
    let i = list.findIndex(s => s.id === current.id);
    if (i === -1) i = 0; else i = (i + dir + list.length) % list.length;
    select(list[i].id, true);
  }

  /* ---------- search + filters ---------- */
  $("#search").addEventListener("input", e => { query = e.target.value; renderList(filtered()); });
  $("#filters").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    filter = b.dataset.filter;
    $$(".chip").forEach(x => x.classList.toggle("active", x === b));
    renderList(filtered());
  });

  /* ---------- toolbar ---------- */
  $("#prevBtn").addEventListener("click", () => step(-1));
  $("#nextBtn").addEventListener("click", () => step(1));
  $("#randomBtn").addEventListener("click", () => {
    const list = filtered().filter(s => s.id !== current.id);
    if (list.length) select(list[Math.floor(Math.random() * list.length)].id, true);
  });
  $("#viewportToggle").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    $$("#viewportToggle button").forEach(x => x.classList.toggle("active", x === b));
    browser.className = "browser vw-" + b.dataset.vw;
  });
  $("#menuToggle").addEventListener("click", () => $(".app").classList.toggle("menu-open"));
  listEl.addEventListener("click", () => $(".app").classList.remove("menu-open"));

  /* ---------- command palette ---------- */
  const overlay = $("#cmdkOverlay"), cmdkInput = $("#cmdkInput"), cmdkResults = $("#cmdkResults");
  let cmdkSel = 0, cmdkList = [];
  function openCmdk() { overlay.hidden = false; cmdkInput.value = ""; renderCmdk(""); cmdkInput.focus(); }
  function closeCmdk() { overlay.hidden = true; }
  function renderCmdk(q) {
    q = q.toLowerCase().trim();
    cmdkList = SYSTEMS.filter(d => !q || (d.name + " " + d.category + " " + d.tagline).toLowerCase().includes(q));
    cmdkSel = 0;
    if (!cmdkList.length) { cmdkResults.innerHTML = `<div class="cmdk-empty">No systems match "${esc(q)}"</div>`; return; }
    cmdkResults.innerHTML = cmdkList.map((d, i) => `
      <div class="cmdk-row${i === 0 ? " sel" : ""}" data-id="${d.id}">
        ${swatchMarkup(d)}
        <div><div class="nm">${esc(d.name)}</div><div class="ct">${esc(d.category)}</div></div>
        <span class="go">↵</span>
      </div>`).join("");
    $$(".cmdk-row", cmdkResults).forEach(el => {
      el.addEventListener("click", () => { select(el.dataset.id, true); closeCmdk(); });
    });
  }
  function moveCmdk(dir) {
    if (!cmdkList.length) return;
    cmdkSel = (cmdkSel + dir + cmdkList.length) % cmdkList.length;
    $$(".cmdk-row", cmdkResults).forEach((el, i) => el.classList.toggle("sel", i === cmdkSel));
    const sel = $(".cmdk-row.sel", cmdkResults); if (sel) sel.scrollIntoView({ block: "nearest" });
  }
  cmdkInput.addEventListener("input", e => renderCmdk(e.target.value));
  $("#openCmdk").addEventListener("click", openCmdk);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeCmdk(); });

  /* ---------- keyboard ---------- */
  document.addEventListener("keydown", e => {
    const typing = /^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName);
    if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openCmdk(); return; }
    if (!overlay.hidden) {
      if (e.key === "Escape") closeCmdk();
      else if (e.key === "ArrowDown") { e.preventDefault(); moveCmdk(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); moveCmdk(-1); }
      else if (e.key === "Enter" && cmdkList[cmdkSel]) { select(cmdkList[cmdkSel].id, true); closeCmdk(); }
      return;
    }
    if (e.key === "/" && !typing) { e.preventDefault(); $("#search").focus(); return; }
    if (typing) return;
    if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "r" || e.key === "R") $("#randomBtn").click();
  });

  /* ---------- init ---------- */
  $("#cnt-all").textContent = SYSTEMS.length;
  renderList(SYSTEMS);
  const startId = (location.hash || "").replace("#", "");
  select(SYSTEMS.find(s => s.id === startId) ? startId : SYSTEMS[0].id, true);
  // ?kit deep-link: jump straight to the atomic-kit download card
  if (new URLSearchParams(location.search).has("kit")) {
    setTimeout(() => { const k = $(".kit-card"); if (k) k.scrollIntoView({ block: "center" }); }, 400);
  }
})();
