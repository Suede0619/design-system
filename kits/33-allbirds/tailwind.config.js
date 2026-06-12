/** Allbirds — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F5F0E8",
          "bg-alt": "#EDE7D9",
          surface: "#FFFFFF",
          text: "#3A2820",
          muted: "#B59A80",
          border: "#D9CEBC",
          primary: "#3A2820",
          "primary-hover": "#282018",
          "on-primary": "#FFFFFF",
          accent2: "#2D4030"
        }
      },
      fontFamily: {
        sans: ["Allbirds Sans","Helvetica Neue","system-ui","sans-serif"],
        display: ["Tiempos Headline","Georgia","serif"],
        mono: ["Allbirds Sans","Helvetica Neue","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "0", fontWeight: "700" }],
        "ds-h1": ["56px", { lineHeight: "1.1", letterSpacing: "0", fontWeight: "700" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["15px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "4px",
        "ds-btn": "4px"
      },
      boxShadow: {
        ds: "0 4px 16px rgba(0, 0, 0, 0.06)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #F5F0E8 0%, #EDE7D9 100%)"
      }
    }
  }
};
