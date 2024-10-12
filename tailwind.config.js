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
    extend: {
      colors: {
        'link': '#9d42d7',
        'hover': '#8710D8',
        'black':"#2d2f31",
        'secund-black': "#6b6f73",
      }
    },
  },
  plugins: [],
}