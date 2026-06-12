/** Cal.com — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFFFFF",
          "bg-alt": "#F9FAFB",
          surface: "#FFFFFF",
          text: "#111827",
          muted: "#6B7280",
          border: "#E5E7EB",
          primary: "#111827",
          "primary-hover": "#1F2937",
          "on-primary": "#FFFFFF",
          accent2: "#0069FF"
        }
      },
      fontFamily: {
        sans: ["Inter","system-ui","-apple-system","sans-serif"],
        display: ["Cal Sans","Inter","system-ui","sans-serif"],
        mono: ["Geist Mono","JetBrains Mono","monospace"]
      },
      fontSize: {
        "ds-display": ["72px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["56px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["44px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "12px",
        "ds-btn": "6px"
      },
      boxShadow: {
        ds: "0 8px 32px rgba(0, 0, 0, 0.06)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)"
      }
    }
  }
};
