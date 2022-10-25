const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'BoutonCompte': '225px',
      },
      colors: {
        "DarkBlue": "#1e2158",
        "DarkerGray": "#222222",
        "LightGray": "#cccccc",
        "DarkGray": "#333333",
        "TransparantDarkBlue": "#1e2158"
      },
      borderRadius: {
        "none": "0",
        "xs": "0.625rem",
        "sm": "0.9375rem",
        "default": "1.25rem",
        "lg": "1.875rem",
        "full": "9999px"
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
