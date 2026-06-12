/** Stripe — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0A2540",
          "bg-alt": "#060F1E",
          surface: "#0D3151",
          text: "#FFFFFF",
          muted: "rgba(255,255,255,0.75)",
          border: "rgba(255,255,255,0.12)",
          primary: "#635BFF",
          "primary-hover": "#4B45CC",
          "on-primary": "#FFFFFF",
          accent2: "#00A3FF"
        }
      },
      fontFamily: {
        sans: ["Inter","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        display: ["Inter","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        mono: ["JetBrains Mono","Fira Code","Courier New","monospace"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "12px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 4px 12px rgba(99,91,255,0.35)"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse at 20% 50%, #635BFF33 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, #00A3FF22 0%, transparent 60%), radial-gradient(ellipse at 50% 80%, #8B45FF22 0%, transparent 60%), #0A2540"
      }
    }
  }
};
