/** Lacoste — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F5F1EA",
          "bg-alt": "#FFFFFF",
          surface: "#FFFFFF",
          text: "#1D1D1D",
          muted: "#7A7A7A",
          border: "#D4CABC",
          primary: "#004D2C",
          "primary-hover": "#003620",
          "on-primary": "#FFFFFF",
          accent2: "#C5A661"
        }
      },
      fontFamily: {
        sans: ["Helvetica Now Display","Helvetica Neue","Helvetica","Arial","sans-serif"],
        display: ["Playfair Display","Georgia","Times New Roman","serif"],
        mono: ["Helvetica Now Display","Helvetica Neue","Helvetica","Arial","sans-serif"]
      },
      fontSize: {
        "ds-display": ["96px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["48px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "300" }]
      },
      borderRadius: {
        "ds-card": "12px",
        "ds-btn": "24px"
      },
      boxShadow: {
        ds: "0 2px 12px rgba(0,0,0,0.06)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), #004D2C"
      }
    }
  }
};
