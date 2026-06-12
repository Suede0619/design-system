/** Scout Motors — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F5F0E6",
          "bg-alt": "#EDE7D9",
          surface: "#EDE7D9",
          text: "#1C1C1C",
          muted: "#9B9589",
          border: "#D4C5A9",
          primary: "#A0522D",
          "primary-hover": "#C0633A",
          "on-primary": "#F5F0E6",
          accent2: "#2D3E2F"
        }
      },
      fontFamily: {
        sans: ["Barlow","Helvetica Neue","sans-serif"],
        display: ["Barlow Condensed","Arial Narrow","sans-serif"],
        mono: ["IBM Plex Mono","monospace"]
      },
      fontSize: {
        "ds-display": ["120px", { lineHeight: "1.02", letterSpacing: "0.02em", fontWeight: "700" }],
        "ds-h1": ["96px", { lineHeight: "1.1", letterSpacing: "0.02em", fontWeight: "700" }],
        "ds-h2": ["64px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "8px",
        "ds-btn": "4px"
      },
      boxShadow: {
        ds: "0 2px 8px rgba(0,0,0,0.06)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, transparent 40%, rgba(28,28,28,0.85) 100%)"
      }
    }
  }
};
