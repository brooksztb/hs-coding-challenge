module.exports = {
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px"
      // => @media (min-width: 1280px) { ... }
    },
    maxHeight: {
      "0": "0",
      "300": "300px",
      "500": "500px",
      full: "100%"
    }
  },
  plugins: [require("@tailwindcss/custom-forms")]
};
