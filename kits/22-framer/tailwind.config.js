/** Framer — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFFFF",
          "bg-alt": "#F5F5F7",
          surface: "#FFFFFF",
          text: "#0A0A0A",
          muted: "#444444",
          border: "#E5E5E5",
          primary: "#0099FF",
          "primary-hover": "#0088EE",
          "on-primary": "#FFFFFF",
          accent2: "#00C6FF"
        }
      },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","sans-serif"],
        display: ["Inter","system-ui","-apple-system","sans-serif"],
        mono: ["ui-monospace","SFMono-Regular","Menlo","monospace"]
      },
      fontSize: {
        "ds-display": ["96px", { lineHeight: "1.02", letterSpacing: "-0.025em", fontWeight: "700" }],
        "ds-h1": ["72px", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "ds-h2": ["56px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "16px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 8px 32px rgba(0,0,0,0.08)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 100%)"
      }
    }
  }
};
