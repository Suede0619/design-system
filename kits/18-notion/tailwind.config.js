/** Notion — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFEFC",
          "bg-alt": "#F7F6F3",
          surface: "#FFFFFF",
          text: "#37352F",
          muted: "#6B6B6B",
          border: "#E0E0E0",
          primary: "#E16259",
          "primary-hover": "#C94B42",
          "on-primary": "#FFFFFF",
          accent2: "#4B82C4"
        }
      },
      fontFamily: {
        sans: ["-apple-system","BlinkMacSystemFont","Segoe UI","Noto Sans","Helvetica","Arial","sans-serif"],
        display: ["-apple-system","BlinkMacSystemFont","Segoe UI","Noto Sans","Helvetica","Arial","sans-serif"],
        mono: ["SFMono-Regular","Menlo","Monaco","Consolas","monospace"]
      },
      fontSize: {
        "ds-display": ["52px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["40px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["32px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["15px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "8px",
        "ds-btn": "4px"
      },
      boxShadow: {
        ds: "0 4px 16px rgba(55,53,47,0.10)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, #FFFEFC 0%, #F7F6F3 100%)"
      }
    }
  }
};
