module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui:{
    themes: [{
      'UMNDOC-theme': {
        'primary': '#004789',
        'secondary': '#D83327',
        'accent': '#FDD8CD',
        'neutral': '#333C4D',
        'base-100': '#FFFFFF',
        'info': '#3ABFF8',
        'success': '#36D399',
        'warning': '#FBBD23',
        'error': '#F87272',
      },
    }],
  },
    extend: {
      fontFamily:{
        'Soin sans neue': ['Soin sans neue', 'sans-serif']
      },
    },
  plugins: [require('daisyui')],
}
