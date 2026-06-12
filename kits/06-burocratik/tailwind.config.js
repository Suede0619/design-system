/** Bürocratik — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFFFF",
          "bg-alt": "#000000",
          surface: "#1A1A1A",
          text: "#000000",
          muted: "#888888",
          border: "#CCCCCC",
          primary: "#FF3D3D",
          "primary-hover": "#FF5555",
          "on-primary": "#FFFFFF",
          accent2: "#FF3D3D"
        }
      },
      fontFamily: {
        sans: ["Neue Montreal","Helvetica Neue","Arial","sans-serif"],
        display: ["Neue Montreal","Helvetica Neue","Arial","sans-serif"],
        mono: ["Neue Montreal","Helvetica Neue","Arial","sans-serif"]
      },
      fontSize: {
        "ds-display": ["200px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "900" }],
        "ds-h1": ["160px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "900" }],
        "ds-h2": ["96px", { lineHeight: "1.15", fontWeight: "900" }],
        "ds-body": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "none"
      },
      backgroundImage: {
        "ds-hero": "#FFFFFF"
      }
    }
  }
};
