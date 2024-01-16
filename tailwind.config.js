/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primaryWhite: '#FFF',
        bgColorLight: '#FAFAFA',
        bgColorDark: '#202C36', 
        primaryGray: '#111517',
        bgColorGray: '#2B3844',
    },
    typography:{
      h1: '26px',
      h2: '20px',
      p: '16px',
    },
    fontFamily: {
      
    }
  },
  plugins: [],
}
}
