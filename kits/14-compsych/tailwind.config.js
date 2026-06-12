/** ComPsych — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FFF8F0",
          "bg-alt": "#E0F4F4",
          surface: "#FFFFFF",
          text: "#1A2744",
          muted: "#6B7A9E",
          border: "#D8D0C8",
          primary: "#0A8A8A",
          "primary-hover": "#06615F",
          "on-primary": "#FFFFFF",
          accent2: "#E86C5A"
        }
      },
      fontFamily: {
        sans: ["DM Sans","-apple-system","BlinkMacSystemFont","Segoe UI","system-ui","sans-serif"],
        display: ["DM Sans","-apple-system","BlinkMacSystemFont","Segoe UI","system-ui","sans-serif"],
        mono: ["DM Mono","Courier New","monospace"]
      },
      fontSize: {
        "ds-display": ["48px", { lineHeight: "1.02", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h1": ["32px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "ds-h2": ["28px", { lineHeight: "1.15", fontWeight: "700" }],
        "ds-body": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      },
      borderRadius: {
        "ds-card": "24px",
        "ds-btn": "16px"
      },
      boxShadow: {
        ds: "0 2px 12px rgba(26, 39, 68, 0.08)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #E0F4F4 0%, #FFF8F0 60%, #FAE8E5 100%)"
      }
    }
  }
};
