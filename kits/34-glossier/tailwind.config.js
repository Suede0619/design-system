/** Glossier — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FDF8F6",
          "bg-alt": "#FAF0EC",
          surface: "#FFFFFF",
          text: "#4A3830",
          muted: "#C4A89E",
          border: "#F0C4BA",
          primary: "#1A1414",
          "primary-hover": "#4A3830",
          "on-primary": "#FFFFFF",
          accent2: "#F5DAD2"
        }
      },
      fontFamily: {
        sans: ["Graphik","Helvetica Neue","system-ui","sans-serif"],
        display: ["Graphik","Helvetica Neue","system-ui","sans-serif"],
        mono: ["Graphik","Helvetica Neue","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["64px", { lineHeight: "1.02", letterSpacing: "0", fontWeight: "400" }],
        "ds-h1": ["48px", { lineHeight: "1.1", letterSpacing: "0", fontWeight: "400" }],
        "ds-h2": ["32px", { lineHeight: "1.15", fontWeight: "400" }],
        "ds-body": ["15px", { lineHeight: "1.6", fontWeight: "300" }]
      },
      borderRadius: {
        "ds-card": "8px",
        "ds-btn": "4px"
      },
      boxShadow: {
        ds: "0 2px 12px rgba(0, 0, 0, 0.05)"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse at 60% 0%, #F5DAD2 0%, #FDF8F6 60%)"
      }
    }
  }
};
