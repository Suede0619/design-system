/** Descript — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FAFAF8",
          "bg-alt": "#F5F4F0",
          surface: "#FFFFFF",
          text: "#1A1A14",
          muted: "#8A8880",
          border: "#E0DDD6",
          primary: "#FF5B35",
          "primary-hover": "#E84E2A",
          "on-primary": "#FFFFFF",
          accent2: "#FF8060"
        }
      },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","sans-serif"],
        display: ["Inter","system-ui","-apple-system","sans-serif"],
        mono: ["Inter","system-ui","-apple-system","sans-serif"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["40px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "16px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 4px 16px rgba(255, 91, 53, 0.3)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #FAFAF8 0%, #F5F4F0 100%)"
      }
    }
  }
};
