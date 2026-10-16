// Design tokens — UI UX Pro Max "Minimalism & Swiss Style", light theme.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./app.js"],
  theme: {
    extend: {
      colors: {
        bg: "#FAFAFA", card: "#FFFFFF", ink: "#09090B", ink2: "#3F3F46",
        muted: "#52525B", line: "#E4E4E7", soft: "#F4F4F5",
        accent: { DEFAULT: "#2563EB", soft: "#EFF4FF", ink: "#1D4ED8" },
        up: "#15803D",
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      maxWidth: { page: "1120px" },
    },
  },
};
