/** Teenage Engineering — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFFFF",
          "bg-alt": "#F5F5F5",
          surface: "#F5F5F5",
          text: "#000000",
          muted: "#666666",
          border: "#E0E0E0",
          primary: "#000000",
          "primary-hover": "rgba(0,0,0,0.85)",
          "on-primary": "#FFFFFF",
          accent2: "#FF6600"
        }
      },
      fontFamily: {
        sans: ["TE Neue","Helvetica Neue","Helvetica","Arial","sans-serif"],
        display: ["TE Neue","Helvetica Neue","Helvetica","Arial","sans-serif"],
        mono: ["TE Mono","SF Mono","Menlo","Consolas","monospace"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h1": ["32px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h2": ["18px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["14px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "none"
      },
      backgroundImage: {
        "ds-hero": "#FFFFFF"
      }
    }
  }
};
