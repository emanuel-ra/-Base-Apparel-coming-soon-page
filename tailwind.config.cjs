/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'desaturated-red' : 'var(--desaturated-red)' ,
        'soft-Red' : 'var(--soft-Red)' ,
      }),
      fontFamily:theme => ({
        'josefin-sans' : ['Josefin Sans', 'sans-serif']
      }),
      textColor: theme => ({
        'desaturated-red' : 'var(--desaturated-red)' ,
        'dark-grayish-red' : 'var(--dark-grayish-red)' ,
        'soft-Red' : 'var(--soft-Red)' ,
      }),
      colors:theme => ({
        'gradient-from':'var(--gradient-from)' ,
        'gradient-to':'var(--gradient-to)' ,    
      }),    
      borderColor : theme => ({
        'dark-grayish-red' : 'var(--dark-grayish-red)' ,        
      }),
      animation: theme => ({
        wiggle: 'wiggle 1s ease-in-out ',
        slideIn : 'slideIn  5s ease-in-out ',        
      }),
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideIn:{
          '0%': { transform: 'scale-0' } ,          
          '50%': { transform: 'scale-50' } ,          
          '70%': { transform: 'scale-70' } ,          
          '100%': { transform: 'scale-100' } ,
        }
      }
    },
  },
  plugins: [],
}
