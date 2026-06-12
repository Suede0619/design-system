/** Locomotive — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#000000",
          "bg-alt": "#0C0C0C",
          surface: "#0C0C0C",
          text: "#FFFFFF",
          muted: "#888888",
          border: "#1A1A1A",
          primary: "#FF2800",
          "primary-hover": "#FF4D26",
          "on-primary": "#FFFFFF",
          accent2: "#F5C400"
        }
      },
      fontFamily: {
        sans: ["Neue Haas Grotesk","Helvetica Neue","Arial","system-ui","sans-serif"],
        display: ["Monument Extended","Helvetica Neue","Arial Black","sans-serif"],
        mono: ["Neue Haas Grotesk","Helvetica Neue","Arial","system-ui","sans-serif"]
      },
      fontSize: {
        "ds-display": ["160px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "900" }],
        "ds-h1": ["112px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "900" }],
        "ds-h2": ["72px", { lineHeight: "1.15", fontWeight: "900" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "300" }]
      },
      borderRadius: {
        "ds-card": "0px",
        "ds-btn": "0px"
      },
      boxShadow: {
        ds: "0 24px 64px rgba(0, 0, 0, 0.6)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 100%)"
      }
    }
  }
};
