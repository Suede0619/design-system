/** Railway — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0B0D0F",
          "bg-alt": "#0D1117",
          surface: "#161B22",
          text: "#E6EDF3",
          muted: "#7D8590",
          border: "#30363D",
          primary: "#7C3AED",
          "primary-hover": "#6D28D9",
          "on-primary": "#FFFFFF",
          accent2: "#C026D3"
        }
      },
      fontFamily: {
        sans: ["Geist","Inter","system-ui","sans-serif"],
        display: ["Geist","Inter","system-ui","sans-serif"],
        mono: ["Geist Mono","JetBrains Mono","monospace"]
      },
      fontSize: {
        "ds-display": ["80px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["44px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "12px",
        "ds-btn": "6px"
      },
      boxShadow: {
        ds: "0 8px 24px rgba(0,0,0,0.6)"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse at 40% -10%, rgba(124,58,237,0.2) 0%, rgba(192,38,211,0.1) 30%, transparent 60%)"
      }
    }
  }
};
