/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  safelist: ["bg-darkcream", "bg-cream"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen-Regular"],
        ranchers: ["Ranchers-Regular"],
        inter: ["Inter"],
        "inter-italic": ["Inter-Italic"],
      },
      colors: {
        red: "#E76F51",
        green: "#90BE6D",
        blue: "#264653",
        white: "#FEFAE0",
        cream: "#FFEFC7",
        darkcream: "#FFE6A7",
        black: "#323232",
      },
    },
  },
  plugins: [],
};
