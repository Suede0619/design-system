/** Symphony of Vines — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#1A1006",
          "bg-alt": "#F5F0E8",
          surface: "#2B2B2B",
          text: "#F5F0E8",
          muted: "rgba(245, 240, 232, 0.6)",
          border: "rgba(197, 165, 90, 0.3)",
          primary: "#722F37",
          "primary-hover": "#4A1B22",
          "on-primary": "#F5F0E8",
          accent2: "#C5A55A"
        }
      },
      fontFamily: {
        sans: ["Libre Baskerville","Georgia","Times New Roman","serif"],
        display: ["Playfair Display","Cormorant Garamond","Georgia","serif"],
        mono: ["Libre Baskerville","Georgia","Times New Roman","serif"]
      },
      fontSize: {
        "ds-display": ["112px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["32px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "none"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(to bottom, rgba(26, 16, 6, 0) 0%, rgba(26, 16, 6, 0.7) 60%, rgba(26, 16, 6, 0.95) 100%)"
      }
    }
  }
};
