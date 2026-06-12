/** KLABU — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#1A1A1A",
          "bg-alt": "#2A2A2A",
          surface: "#1A1A1A",
          text: "#FFFFFF",
          muted: "#888888",
          border: "#444444",
          primary: "#0066FF",
          "primary-hover": "#0052CC",
          "on-primary": "#FFFFFF",
          accent2: "#FF3333"
        }
      },
      fontFamily: {
        sans: ["Barlow","-apple-system","BlinkMacSystemFont","Helvetica Neue","Arial","sans-serif"],
        display: ["Barlow Condensed","Arial Narrow","Impact","sans-serif"],
        mono: ["Barlow","-apple-system","BlinkMacSystemFont","Helvetica Neue","Arial","sans-serif"]
      },
      fontSize: {
        "ds-display": ["120px", { lineHeight: "1.02", letterSpacing: "-0.01em", fontWeight: "700" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "4px"
      },
      boxShadow: {
        ds: "0 8px 24px rgba(0,102,255,0.3)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #1A1A1A 0%, #0066FF 100%)"
      }
    }
  }
};
