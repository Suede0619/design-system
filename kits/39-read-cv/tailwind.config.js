/** Read.cv — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFFFF",
          "bg-alt": "#FAFAFA",
          surface: "#FFFFFF",
          text: "#171717",
          muted: "#737373",
          border: "#E5E5E5",
          primary: "#0066FF",
          "primary-hover": "#0052CC",
          "on-primary": "#FFFFFF",
          accent2: "#00A870"
        }
      },
      fontFamily: {
        sans: ["Inter","-apple-system","BlinkMacSystemFont","system-ui","sans-serif"],
        display: ["Inter","-apple-system","BlinkMacSystemFont","system-ui","sans-serif"],
        mono: ["JetBrains Mono","SF Mono","Menlo","monospace"]
      },
      fontSize: {
        "ds-display": ["36px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "600" }],
        "ds-h1": ["28px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "ds-h2": ["20px", { lineHeight: "1.15", fontWeight: "600" }],
        "ds-body": ["15px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "8px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "none"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)"
      }
    }
  }
};
