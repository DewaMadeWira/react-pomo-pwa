/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white-bg':'#F8F4F9',
      'dark-text-bg':'#2C302E',
      'yellow-btn':'#E3D433',
   


    },
    extend: {
      fontFamily:{
        'timer':['Azeret Mono','monospace'],
        'hind':['Hind', 'sans-serif'],
        'mont':['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

