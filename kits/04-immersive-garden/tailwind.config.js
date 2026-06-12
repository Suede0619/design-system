/** Immersive Garden — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#080808",
          "bg-alt": "#111111",
          surface: "#1C1C1C",
          text: "#F2EDE8",
          muted: "#8A8A8A",
          border: "#333333",
          primary: "#C5A55A",
          "primary-hover": "#E8D5A0",
          "on-primary": "#080808",
          accent2: "#A8893D"
        }
      },
      fontFamily: {
        sans: ["Sora","Helvetica Neue","sans-serif"],
        display: ["Playfair Display","Georgia","serif"],
        mono: ["Sora","Helvetica Neue","sans-serif"]
      },
      fontSize: {
        "ds-display": ["100px", { lineHeight: "1.02", letterSpacing: "0em", fontWeight: "400" }],
        "ds-h1": ["88px", { lineHeight: "1.1", letterSpacing: "0em", fontWeight: "400" }],
        "ds-h2": ["64px", { lineHeight: "1.15", fontWeight: "400" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "300" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "none"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse at center, transparent 60%, #080808 100%)"
      }
    }
  }
};
