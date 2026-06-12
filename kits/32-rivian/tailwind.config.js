/** Rivian — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F8FAF8",
          "bg-alt": "#EBF4EE",
          surface: "#FFFFFF",
          text: "#1C1C1C",
          muted: "#6B7280",
          border: "#E2E8F0",
          primary: "#3D7A4A",
          "primary-hover": "#2C4A30",
          "on-primary": "#FFFFFF",
          accent2: "#3A5070"
        }
      },
      fontFamily: {
        sans: ["Rivian","Inter","system-ui","sans-serif"],
        display: ["Rivian","Inter","system-ui","sans-serif"],
        mono: ["Rivian","Inter","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["88px", { lineHeight: "1.02", letterSpacing: "-0.01em", fontWeight: "600" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "600" }],
        "ds-h2": ["48px", { lineHeight: "1.15", fontWeight: "600" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "16px",
        "ds-btn": "100px"
      },
      boxShadow: {
        ds: "0 4px 24px rgba(0, 0, 0, 0.06)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #F8FAF8 0%, #EBF4EE 100%)"
      }
    }
  }
};
