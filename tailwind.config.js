/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      padding:{
        DEFAULT:'1rem',
        sm:'2rem',
        lg:'4rem',
        xl:'5rem',
        '2xl':'6rem',
      },
      center:true
    },
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'hover': '#9d42d7',
        'primary': '#4a29a4',
        'black':"#2d2f31",
        'link':"#4b2cab",
        'purple':'#a436f1',
        'darkPurple':'#8610d8',
      }
    },
  },
  plugins: [],
}