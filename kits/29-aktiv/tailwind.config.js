/** Aktiv — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FAFAF8",
          "bg-alt": "#F0EFEB",
          surface: "#EAE8E1",
          text: "#111110",
          muted: "#8C8C8A",
          border: "#DCDCD8",
          primary: "#111110",
          "primary-hover": "#000000",
          "on-primary": "#FAFAF8",
          accent2: "#C8B89A"
        }
      },
      fontFamily: {
        sans: ["Aktiv Grotesk","Inter","Helvetica Neue","system-ui","sans-serif"],
        display: ["Aktiv Grotesk","Inter","Helvetica Neue","system-ui","sans-serif"],
        mono: ["Aktiv Grotesk","Inter","Helvetica Neue","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["128px", { lineHeight: "1.02", letterSpacing: "-0.01em", fontWeight: "700" }],
        "ds-h1": ["80px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }],
        "ds-h2": ["48px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["15px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "4px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 2px 12px rgba(0, 0, 0, 0.06)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #FAFAF8 0%, #F0EFEB 100%)"
      }
    }
  }
};
