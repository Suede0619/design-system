/** Resend — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#000000",
          "bg-alt": "#0A0A0A",
          surface: "#0A0A0A",
          text: "#FFFFFF",
          muted: "rgba(255,255,255,0.6)",
          border: "#1A1A1A",
          primary: "#FF4D00",
          "primary-hover": "#FF6A2A",
          "on-primary": "#FFFFFF",
          accent2: "#FF8C42"
        }
      },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","sans-serif"],
        display: ["Inter","system-ui","-apple-system","sans-serif"],
        mono: ["Geist Mono","JetBrains Mono","Fira Code","monospace"]
      },
      fontSize: {
        "ds-display": ["64px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["36px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "10px",
        "ds-btn": "6px"
      },
      boxShadow: {
        ds: "0 0 20px rgba(255, 77, 0, 0.35)"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse at 50% -20%, rgba(255, 77, 0, 0.15) 0%, transparent 60%)"
      }
    }
  }
};
