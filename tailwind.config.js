/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: "600px",
        xl: "600px",
        "2xl": "600px",
      },
    },
    extend: {
      colors: {
        bodyBgClr: "var(--body-bg-clr)",
        mainContentBgClr: "var(--main-content-bg-clr)",
        typeTextClr: "var(--type-text-clr)",
        authorTextClr: "var(--author-text-clr)",
        bodyTextClr: "var(--body-text-clr)",
      },
      backgroundImage: {
        "main-svg-image": "url('./src/assets/bg-image-random-quote.svg')",
        "copy-svg-image": "url('./src/assets/link.svg')",
        "generate-svg-image": "url('./src/assets/Regroup.svg')",
      },
    },
    fontSize: {
      author: [
        "1rem",
        {
          fontWeight: "600",
        },
      ],

      quote: [
        "1.5rem",
        {
          fontWeight: "400",
        },
      ],

      "quote-type": [
        "0.625rem",
        {
          fontWeight: "600",
        },
      ],
    },
  },
  plugins: [],
};
