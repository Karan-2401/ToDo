/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ghostwhite:'#F8F9FA',
        Darkcharcoal: '#333333',
        salad:'#4CAF50',
        LushParadise:'#2E7D32'
      },
      fontFamily:{
        poppins:'Poppins',
        roboto:'Roboto',
      },
      Position:{
        h:'50%',
      }
    },
  },
  plugins: [],
}

