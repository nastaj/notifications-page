/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",
      white: "hsl(0, 0%, 100%)",
      "blue-grayish-snow-white": "hsl(210, 60%, 98%)",
      "blue-grayish-light-1": "hsl(211, 68%, 94%)",
      "blue-grayish-light-1": "hsl(205, 33%, 90%)",
      "blue-grayish": "hsl(219, 14%, 63%)",
      "blue-grayish-dark-1": "hsl(219, 12%, 42%)",
      "blue-grayish-dark-2": "hsl(224, 21%, 14%)",
    },
    fontWeight: {
      medium: "500",
      "extra-bold": "800",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans"],
      },
      fontSize: {
        m: ["0.9375rem"],
      },
    },
  },
  plugins: [],
};
