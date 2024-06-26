/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        secondary: "#FFFFFF",
        background: "#10101A",
        green: "#2FBF71",
        disabled: "#8996A3",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
