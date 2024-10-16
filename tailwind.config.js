/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',   
    './pages/**/*.{vue,js}',     
    './plugins/**/*.{js,ts}',    
    './nuxt.config.{js,ts}'      
  ],
  theme: { 
    extend: {
      colors: {
        footerColor: '#1C1D1C', 
      },
      screens:{
        'lg':'1080px',
        'md':'768px',
        'sm':'375px'
      }
    } 
  },
  plugins: [],
}
