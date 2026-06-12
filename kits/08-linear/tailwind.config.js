/** Linear — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0A0A0A",
          "bg-alt": "#111111",
          surface: "#161616",
          text: "#F5F5F5",
          muted: "rgba(245,245,245,0.65)",
          border: "rgba(255,255,255,0.08)",
          primary: "#7C5CFC",
          "primary-hover": "#5E85FA",
          "on-primary": "#FFFFFF",
          accent2: "#4EA8DE"
        }
      },
      fontFamily: {
        sans: ["Inter","-apple-system","BlinkMacSystemFont","system-ui","sans-serif"],
        display: ["Inter","-apple-system","BlinkMacSystemFont","system-ui","sans-serif"],
        mono: ["Berkeley Mono","JetBrains Mono","SF Mono","monospace"]
      },
      fontSize: {
        "ds-display": ["64px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h1": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h2": ["36px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["15px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "12px",
        "ds-btn": "6px"
      },
      boxShadow: {
        ds: "0 0 20px rgba(124,92,252,0.3)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #7C5CFC 0%, #5E85FA 50%, #4EA8DE 100%)"
      }
    }
  }
};
