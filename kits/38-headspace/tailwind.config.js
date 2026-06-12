/** Headspace — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFAF0",
          "bg-alt": "#F0EDE8",
          surface: "#FFFFFF",
          text: "#2B2D42",
          muted: "#A0A3BD",
          border: "#F0EDE8",
          primary: "#F47D31",
          "primary-hover": "#E8692180",
          "on-primary": "#FFFFFF",
          accent2: "#06D6A0"
        }
      },
      fontFamily: {
        sans: ["GT Walsheim","-apple-system","sans-serif"],
        display: ["GT Walsheim","-apple-system","sans-serif"],
        mono: ["GT Walsheim","-apple-system","sans-serif"]
      },
      fontSize: {
        "ds-display": ["48px", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h1": ["36px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h2": ["28px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "20px",
        "ds-btn": "28px"
      },
      boxShadow: {
        ds: "0 8px 24px rgba(43, 45, 66, 0.1)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #FFB88C 0%, #FFD166 100%)"
      }
    }
  }
};
