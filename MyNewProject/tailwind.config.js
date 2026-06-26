/** @type {import('tailwindcss').Config} */
module.exports = {
  // Yeh line Tailwind ko batati hai ki classes kahan dhundni hain
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}