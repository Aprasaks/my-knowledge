/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanna: ["BMHANNAPro"],
        decobox: ["cafe24Decobox"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}