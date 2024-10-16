/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}', // 컴포넌트 폴더 내의 모든 Vue 및 JS 파일
    './layouts/**/*.{vue,js}',    // 레이아웃 폴더 내의 모든 Vue 및 JS 파일
    './pages/**/*.{vue,js}',      // 페이지 폴더 내의 모든 Vue 및 JS 파일
    './plugins/**/*.{js,ts}',     // 플러그인 폴더 내의 모든 JS 및 TS 파일
    './nuxt.config.{js,ts}'       // Nuxt 구성 파일
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
