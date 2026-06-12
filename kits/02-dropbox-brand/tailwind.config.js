/** Dropbox Brand — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFFFF",
          "bg-alt": "#F7F7F8",
          surface: "#FFFFFF",
          text: "#1E1919",
          muted: "#6B6B6B",
          border: "#E8E8E8",
          primary: "#0061FF",
          "primary-hover": "#004FCC",
          "on-primary": "#FFFFFF",
          accent2: "#7B68EE"
        }
      },
      fontFamily: {
        sans: ["Sharp Grotesk","Inter","Helvetica Neue","sans-serif"],
        display: ["Sharp Grotesk","Inter","Helvetica Neue","sans-serif"],
        mono: ["IBM Plex Mono","Fira Code","monospace"]
      },
      fontSize: {
        "ds-display": ["96px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["80px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["56px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "12px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 4px 16px rgba(0, 0, 0, 0.08)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #0061FF 0%, #7B68EE 100%)"
      }
    }
  }
};
