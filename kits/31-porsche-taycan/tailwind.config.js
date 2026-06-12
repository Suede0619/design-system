/** Porsche Taycan — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#000000",
          "bg-alt": "#0A0A0A",
          surface: "#1C1C1C",
          text: "#FFFFFF",
          muted: "#B2B2B2",
          border: "#464646",
          primary: "#FFFFFF",
          "primary-hover": "rgba(255,255,255,0.9)",
          "on-primary": "#000000",
          accent2: "#3B78C4"
        }
      },
      fontFamily: {
        sans: ["Porsche Next","Arial","system-ui","sans-serif"],
        display: ["Porsche Next","Arial","system-ui","sans-serif"],
        mono: ["Porsche Next","Arial","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["96px", { lineHeight: "1.02", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h1": ["80px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h2": ["48px", { lineHeight: "1.15", fontWeight: "400" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "0 4px 24px rgba(0, 0, 0, 0.6)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)"
      }
    }
  }
};
