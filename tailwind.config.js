const defaultTheme = require(`tailwindcss/defaultTheme`);

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
        inter: [`Inter var`, ...defaultTheme.fontFamily.sans],
        sans: [`Inter var`, ...defaultTheme.fontFamily.sans],
      },
    },
    variants: {
      extend: {},
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
