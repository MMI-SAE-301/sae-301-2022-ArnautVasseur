const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        'BoutonCompte': '225px',
        'SmallClassicButton': '225px',
        'ClassicButton':'439px',
        'Card':'506px',
        'SmallLoginCard':'480px',
        'LoginCard':'1100px'
      },
      height:{
        'Card':'312px',
        'SmallLoginCard':'1100px',
        'LoginCard':'480px'
      },
      colors: {
        "DarkBlue": "#1e2158",
        "DarkerGray": "#222222",
        "LightGray": "#cccccc",
        "DarkGray": "#333333",
      },
      borderRadius: {
        "none": "0",
        "xs": "0.625rem",
        "sm": "0.9375rem",
        "default": "1.25rem",
        "lg": "1.875rem",
        "full": "9999px"
      },
      screens: {

        'sm': '400px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
