module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'auth-image': "url('/assets/images/img-auth.png')"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
