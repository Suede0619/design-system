/** Aesop — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F4EFE6",
          "bg-alt": "#EEE8DC",
          surface: "#FFFFFF",
          text: "#1A1410",
          muted: "#B8AD98",
          border: "#D8CEBC",
          primary: "#1A1410",
          "primary-hover": "#3A2E20",
          "on-primary": "#F4EFE6",
          accent2: "#8B5E3C"
        }
      },
      fontFamily: {
        sans: ["Futura PT","Helvetica Neue","system-ui","sans-serif"],
        display: ["Vendetta","Canela","Georgia","Times New Roman","serif"],
        mono: ["Futura PT","Helvetica Neue","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["80px", { lineHeight: "1.02", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "400" }],
        "ds-h2": ["44px", { lineHeight: "1.15", fontWeight: "400" }],
        "ds-body": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "0 4px 20px rgba(58, 46, 32, 0.08)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #F4EFE6 0%, #EEE8DC 100%)"
      }
    }
  }
};
