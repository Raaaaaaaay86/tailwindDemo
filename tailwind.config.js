module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
  ],
  theme: {
    textColor: {
      primary: '#3F5D45',
      secondary: '#8DA291',
      warning: '#FFE180',
      'light-darken': '#8a9e94',
      light: '#EAF0ED',
      white: '#fff',
    },
    backgroundColor: {
      primary: '#3F5D45',
      secondary: '#8DA291',
      warning: '#FFE180',
      light: '#EAF0ED',
      'light-darken': '#8a9e94',
      white: '#FFFFFF',
    },
    extend: {
      inset: {
        4: '1rem',
        '-3': '-0.5rem',
        8: '2rem',
        10: '2.5rem',
        '-10px': '-10px',
        '05': '50%',
      },
      margin: {
        '-24': '-6rem',
      },
      height: {
        80: '20rem',
        104: '26rem',
        124: '31rem',
        '460px': '460px',
      },
      width: {
        '460px': '460px',
      },
      borderColor: {
        light: '#EAF0ED',
      },
      flexGrow: {
        2: '2',
      },
    },
  },
  variants: {
    textColor: ['hover', 'active', 'responsive'],
    backgroundColor: ['hover', 'active', 'responsive'],
  },
  plugins: [],
};
