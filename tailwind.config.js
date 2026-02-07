/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bode: {
          midnight: '#182E44', //  Primary Dark
          ivory: '#FBF6E9',    //  Primary Light Background
          crimson: '#8A321D',  //  Accent
          sunlit: '#F0C689',   //  Accent Yellow
        }
      },
fontFamily: {
        // 1. الخط الأساسي (لجسم الموقع والكلام الصغير) -> Manrope
        // ده هيخلي الموقع شكله نضيف ومودرن
        sans: ['Manrope', 'sans-serif'],
        
        // 2. خط العناوين (للفخامة) -> Cormorant Garamond
        // ده هنستخدمه للعناوين الكبيرة بس
        serif: ['"Cormorant Garamond"', 'serif'],
    },
      backgroundImage: {
        // تدرج لوني فخم زي الموجود في صفحة 23
        'bode-gradient': 'linear-gradient(to right, #182E44, #FBF6E9)', 
      }
    },
  },
  plugins: [],
}