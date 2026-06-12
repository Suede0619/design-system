/** Loom — Tailwind theme mapping of the atomic kit tokens. */
module.exports = {
  theme: {
    extend: {
      colors: {
        ds: {
          bg: "#FAFAFA",
          "bg-alt": "#F0EFFF",
          surface: "#FFFFFF",
          text: "#0F0F1A",
          muted: "#9898B0",
          border: "#E4E4F0",
          primary: "#625DF5",
          "primary-hover": "#4B46D9",
          "on-primary": "#FFFFFF",
          accent2: "#FF6B6B"
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
        ds: "0 4px 16px rgba(98, 93, 245, 0.35)"
      },
      backgroundImage: {
        "ds-hero": "linear-gradient(135deg, #625DF5 0%, #8B87FF 100%)"
      }
    }
  }
};
