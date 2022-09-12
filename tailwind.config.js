module.exports = {
  content: [`./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    screens: {
      xs: `320px`,
      sm: `375px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      '2xl': `1440px`,
    },
    extend: {
      width: {},
      backgroundColor: {},
      borderColor: {},
      colors: {},
      textColor: {},
      fontSize: {},
      fontFamily: {
        roboto: `Roboto`,
        inter: `Inter`,
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
