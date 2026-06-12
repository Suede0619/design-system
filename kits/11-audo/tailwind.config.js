/** Audo Copenhagen — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F5F0EB",
          "bg-alt": "#EDE8E1",
          surface: "#EDE8E1",
          text: "#2C2C2C",
          muted: "#8B8172",
          border: "#D8D0C6",
          primary: "#2C2C2C",
          "primary-hover": "#C4A882",
          "on-primary": "#F5F0EB",
          accent2: "#C4A882"
        }
      },
      fontFamily: {
        sans: ["Suisse Intl","-apple-system","BlinkMacSystemFont","Helvetica Neue","Arial","sans-serif"],
        display: ["Freight Display Pro","Georgia","Times New Roman","serif"],
        mono: ["Courier New","monospace"]
      },
      fontSize: {
        "ds-display": ["88px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "400" }],
        "ds-h1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "400" }],
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
        "ds-hero": "linear-gradient(180deg, #FAF8F5 0%, #F5F0EB 100%)"
      }
    }
  }
};
