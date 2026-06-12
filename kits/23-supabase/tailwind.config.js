/** Supabase — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#1C1C1C",
          "bg-alt": "#161616",
          surface: "#262626",
          text: "#EEEEEE",
          muted: "#AAAAAA",
          border: "#3E3E3E",
          primary: "#3ECF8E",
          "primary-hover": "#47DBA0",
          "on-primary": "#1C1C1C",
          accent2: "#22C55E"
        }
      },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","sans-serif"],
        display: ["Inter","system-ui","-apple-system","sans-serif"],
        mono: ["JetBrains Mono","Fira Code","Menlo","monospace"]
      },
      fontSize: {
        "ds-display": ["80px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["48px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "8px",
        "ds-btn": "6px"
      },
      boxShadow: {
        ds: "0 8px 32px rgba(0,0,0,0.6)"
      },
      backgroundImage: {
        "ds-hero": "radial-gradient(ellipse at 50% -20%, rgba(62,207,142,0.12) 0%, transparent 60%)"
      }
    }
  }
};
