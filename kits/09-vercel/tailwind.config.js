/** Vercel — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#000000",
          "bg-alt": "#0A0A0A",
          surface: "#111111",
          text: "#FFFFFF",
          muted: "#888888",
          border: "#333333",
          primary: "#FFFFFF",
          "primary-hover": "#CCCCCC",
          "on-primary": "#000000",
          accent2: "#0070F3"
        }
      },
      fontFamily: {
        sans: ["Geist Sans","Geist","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        display: ["Geist Sans","Geist","-apple-system","BlinkMacSystemFont","Segoe UI","sans-serif"],
        mono: ["Geist Mono","SF Mono","Fira Code","monospace"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.04em", fontWeight: "900" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "900" }],
        "ds-h2": ["48px", { lineHeight: "1.15", fontWeight: "900" }],
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
        "ds-hero": "#000000"
      }
    }
  }
};
