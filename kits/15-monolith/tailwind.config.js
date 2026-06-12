/** The Monolith Project — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#000000",
          "bg-alt": "#FFFFFF",
          surface: "#000000",
          text: "#FFFFFF",
          muted: "rgba(255,255,255,0.4)",
          border: "#FFFFFF",
          primary: "#FFFFFF",
          "primary-hover": "#CCCCCC",
          "on-primary": "#000000",
          accent2: "#FFFFFF"
        }
      },
      fontFamily: {
        sans: ["Space Mono","JetBrains Mono","Courier New","monospace"],
        display: ["Space Mono","JetBrains Mono","Courier New","monospace"],
        mono: ["Space Mono","JetBrains Mono","Courier New","monospace"]
      },
      fontSize: {
        "ds-display": ["64px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h1": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h2": ["32px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "none"
      },
      backgroundImage: {
        "ds-hero": "#000000"
      }
    }
  }
};
