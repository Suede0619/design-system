/** Lando Norris — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0A0A0A",
          "bg-alt": "#1A1A1A",
          surface: "#141414",
          text: "#FFFFFF",
          muted: "#A0A0A0",
          border: "#333333",
          primary: "#FF8000",
          "primary-hover": "#FF9933",
          "on-primary": "#0A0A0A",
          accent2: "#FFB366"
        }
      },
      fontFamily: {
        sans: ["Aeonik Pro","Helvetica Neue","Arial","sans-serif"],
        display: ["Aeonik Pro","Helvetica Neue","Arial","sans-serif"],
        mono: ["Aeonik Pro","Helvetica Neue","Arial","sans-serif"]
      },
      fontSize: {
        "ds-display": ["120px", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "800" }],
        "ds-h1": ["120px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "800" }],
        "ds-h2": ["72px", { lineHeight: "1.15", fontWeight: "800" }],
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
        "ds-hero": "linear-gradient(180deg, transparent 0%, #0A0A0A 100%)"
      }
    }
  }
};
