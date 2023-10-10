/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:'#25274D',
        shadow:'#464866',        
        whits:'#AAABB8',
        button:'#2E9CCA',
        hover:'#29648A',
        text:'#2E9CCA',
      }
    },
  },
  plugins: [],
}

