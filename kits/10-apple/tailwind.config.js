/** Apple — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#F5F5F7",
          "bg-alt": "#FFFFFF",
          surface: "#FFFFFF",
          text: "#1D1D1F",
          muted: "#6E6E73",
          border: "#D2D2D7",
          primary: "#0071E3",
          "primary-hover": "#0077ED",
          "on-primary": "#FFFFFF",
          accent2: "#0071E3"
        }
      },
      fontFamily: {
        sans: ["SF Pro Text","system-ui","-apple-system","BlinkMacSystemFont","Helvetica Neue","sans-serif"],
        display: ["SF Pro Display","system-ui","-apple-system","BlinkMacSystemFont","Helvetica Neue","sans-serif"],
        mono: ["SF Pro Text","system-ui","-apple-system","BlinkMacSystemFont","Helvetica Neue","sans-serif"]
      },
      fontSize: {
        "ds-display": ["96px", { lineHeight: "1.02", letterSpacing: "-0.025em", fontWeight: "700" }],
        "ds-h1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "18px",
        "ds-btn": "980px"
      },
      boxShadow: {
        ds: "0 2px 8px rgba(0,0,0,0.08)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)"
      }
    }
  }
};
