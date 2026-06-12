/** Figma — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFFFF",
          "bg-alt": "#F5F5F5",
          surface: "#FFFFFF",
          text: "#1E1E1E",
          muted: "#5C5C5C",
          border: "#E8E8E8",
          primary: "#1E1E1E",
          "primary-hover": "#333333",
          "on-primary": "#FFFFFF",
          accent2: "#A259FF"
        }
      },
      fontFamily: {
        sans: ["Whyte","Inter","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        display: ["Whyte","Inter","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        mono: ["JetBrains Mono","Courier New","monospace"]
      },
      fontSize: {
        "ds-display": ["80px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h1": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "ds-h2": ["36px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["17px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "16px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 8px 32px rgba(0,0,0,0.12)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #A259FF 0%, #FF7262 50%, #F24E1E 100%)"
      }
    }
  }
};
