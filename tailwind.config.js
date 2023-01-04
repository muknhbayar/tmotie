/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js",
 
  ],
  theme: {
       
    
    fontFamily: {      
      cursive: ['Lobster', 'cursive'],
      serif: ['Roboto', 'serif'],
    },
    extend: {

      colors: {
       

      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
   
  },

  variants: {
    backgroundColor:["responsive", "hover", "focus", "active"],
    display:["responsive", "group-hover"],
  },

  plugins: [
    "tw-elements/dist/plugin",
  ],
}