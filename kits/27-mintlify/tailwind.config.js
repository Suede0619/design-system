/** Mintlify — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0D0D0D",
          "bg-alt": "#111111",
          surface: "#111111",
          text: "#FFFFFF",
          muted: "rgba(255,255,255,0.45)",
          border: "#1F1F1F",
          primary: "#00C4A0",
          "primary-hover": "#00E5B8",
          "on-primary": "#0D0D0D",
          accent2: "#009E80"
        }
      },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","sans-serif"],
        display: ["Plus Jakarta Sans","Inter","system-ui","sans-serif"],
        mono: ["Geist Mono","JetBrains Mono","monospace"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h1": ["48px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "16px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 0 24px rgba(0, 196, 160, 0.4)"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse at 60% -10%, rgba(0, 196, 160, 0.18) 0%, transparent 55%)"
      }
    }
  }
};
