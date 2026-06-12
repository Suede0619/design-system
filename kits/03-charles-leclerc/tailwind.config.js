/** Charles Leclerc — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0D0D0D",
          "bg-alt": "#F5F0EB",
          surface: "#1A1A1A",
          text: "#F5F0EB",
          muted: "#888888",
          border: "#333333",
          primary: "#C12C2C",
          "primary-hover": "#E03333",
          "on-primary": "#FFFFFF",
          accent2: "#C5A55A"
        }
      },
      fontFamily: {
        sans: ["Neue Haas Grotesk","Helvetica Neue","Arial","sans-serif"],
        display: ["EB Garamond","Georgia","Times New Roman","serif"],
        mono: ["Neue Haas Grotesk","Helvetica Neue","Arial","sans-serif"]
      },
      fontSize: {
        "ds-display": ["120px", { lineHeight: "1.02", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h1": ["96px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h2": ["64px", { lineHeight: "1.15", fontWeight: "400" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "0 4px 20px rgba(0,0,0,0.06)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, transparent 30%, rgba(13,13,13,0.95) 100%)"
      }
    }
  }
};
