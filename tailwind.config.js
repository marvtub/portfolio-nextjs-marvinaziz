const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-1": "url('/images/pexels-gradienta-6985201 (1).jpg')",
        "hero-2": "url('/images/pexels-gradienta-7135037 (1).jpg')",
        "hero-3": "url('/images/pexels-gradienta-7130475 (1).jpg')",
        "hero-4": "url('/images/pexels-maksim-goncharenok-5821029 (1).jpg')",
      },
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
