/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {    
    extend: {
      textColor:{
        skin: {
          grayishblue: 'var(--grayish-blue)' ,
        },
      },
      backgroundColor:{
        skin : {
          body: 'var(--light-gray)' ,
          card: 'var(--white)' ,
        }
      },
      fontFamily:{
        Outfit: 'Outfit, sans-serif'
      }
    },
  },
  plugins: [],
}
