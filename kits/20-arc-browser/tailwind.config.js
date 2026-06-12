/** Arc Browser — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FAFAFA",
          "bg-alt": "#F0F0F0",
          surface: "#FFFFFF",
          text: "#1A1A1A",
          muted: "#6B7280",
          border: "#E5E7EB",
          primary: "#C4B5FD",
          "primary-hover": "#FB923C",
          "on-primary": "#1A1A1A",
          accent2: "#5EEAD4"
        }
      },
      fontFamily: {
        sans: ["-apple-system","BlinkMacSystemFont","SF Pro Display","Helvetica Neue","Helvetica","Arial","sans-serif"],
        display: ["-apple-system","BlinkMacSystemFont","SF Pro Display","Helvetica Neue","Helvetica","Arial","sans-serif"],
        mono: ["SF Mono","Menlo","Monaco","monospace"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h1": ["44px", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "ds-h2": ["34px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "20px",
        "ds-btn": "999px"
      },
      boxShadow: {
        ds: "0 32px 80px rgba(0,0,0,0.15), 0 8px 24px rgba(0,0,0,0.08)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #C4B5FD 0%, #F9A8D4 25%, #FB923C 55%, #5EEAD4 100%)"
      }
    }
  }
};
