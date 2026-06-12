/** Mother Design — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F9F7F4",
          "bg-alt": "#F2EFE9",
          surface: "#E5DFD6",
          text: "#2A2520",
          muted: "#6B6358",
          border: "#D9D3CB",
          primary: "#2A2520",
          "primary-hover": "#161412",
          "on-primary": "#F9F7F4",
          accent2: "#C4704A"
        }
      },
      fontFamily: {
        sans: ["Akkurat","Neue Haas Grotesk","Helvetica Neue","system-ui","sans-serif"],
        display: ["Canela","Georgia","Times New Roman","serif"],
        mono: ["Akkurat","Neue Haas Grotesk","Helvetica Neue","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["120px", { lineHeight: "1.02", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h1": ["88px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h2": ["56px", { lineHeight: "1.15", fontWeight: "400" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "300" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "100px"
      },
      boxShadow: {
        ds: "0 24px 64px rgba(0, 0, 0, 0.08)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, transparent 50%, rgba(22,20,18,0.7) 100%)"
      }
    }
  }
};
