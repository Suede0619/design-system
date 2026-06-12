/** Pitch — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#0F0E17",
          "bg-alt": "#161426",
          surface: "#161426",
          text: "#FFFFFF",
          muted: "rgba(255,255,255,0.6)",
          border: "#2D2B4E",
          primary: "#7B5CF0",
          "primary-hover": "#8B6CF5",
          "on-primary": "#FFFFFF",
          accent2: "#9B7FF5"
        }
      },
      fontFamily: {
        sans: ["Söhne","Inter","system-ui","sans-serif"],
        display: ["Söhne","Inter","system-ui","sans-serif"],
        mono: ["ui-monospace","SFMono-Regular","Menlo","monospace"]
      },
      fontSize: {
        "ds-display": ["88px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["56px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "16px",
        "ds-btn": "8px"
      },
      boxShadow: {
        ds: "0 24px 64px rgba(0,0,0,0.6)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #0F0E17 0%, #1A1540 50%, #0F0E17 100%)"
      }
    }
  }
};
