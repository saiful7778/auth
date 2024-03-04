/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/style/*.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        "accent-color": "#5454D4",
      },
      backgroundImage: {
        "blue-blob":
          "linear-gradient(180deg, rgba(84, 84, 212, 0.25) 0%, rgba(84, 84, 212, 0.15) 100%)",
        "red-blob":
          "linear-gradient(180deg, rgba(251, 168, 28, 0.15) 0%, rgba(224, 86, 136, 0.10) 100%)",
      },
    },
  },
  plugins: [],
};
