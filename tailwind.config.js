module.exports = {


  mode: ' jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'


  theme: {
    gradientColorStops: theme => ({
      'trans': '#06202A'
    }),
    extend: {},
  },



  variants: {
    
    
    extend: {
      animation: ['group-hover'],
      textColor: ['active'],
      padding: ['last', 'first'],
      scale: ['hover', 'group-hover'],
      zIndex: ['hover', 'group-hover'],
      fontWeight: ['hover', 'group-hover'],
    },
  },


  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
