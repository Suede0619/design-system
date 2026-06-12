/** Raycast — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0A0A0A",
          "bg-alt": "#111111",
          surface: "rgba(255,255,255,0.05)",
          text: "#FFFFFF",
          muted: "#ABABAB",
          border: "#222222",
          primary: "#7C3AED",
          "primary-hover": "#8B5CF6",
          "on-primary": "#FFFFFF",
          accent2: "#3B82F6"
        }
      },
      fontFamily: {
        sans: ["Inter","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        display: ["Inter","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        mono: ["JetBrains Mono","Fira Code","monospace"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "600" }],
        "ds-h1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "600" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "16px",
        "ds-btn": "10px"
      },
      boxShadow: {
        ds: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.2) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)"
      }
    }
  }
};
