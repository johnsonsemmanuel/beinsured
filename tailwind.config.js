/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#F9F8F3',      // Warm cream background canvas
          card: '#F4F3EE',       // Neutral off-white card fill
          dark: '#0F172A',       // Deep navy text
          gold: '#FEBD19',       // Official BeINsured logo gold/yellow
          'gold-light': '#FFF8E6', // Light golden tint
          blue: '#136991',       // Official BeINsured logo deep teal/ocean blue
          'blue-hover': '#0E5272', // Darker blue hover
          'blue-light': '#EBF5F9', // Light blue tint
        }
      },
      borderRadius: {
        '3xl': '1.5rem',  // 24px organic radius
        '4xl': '2rem',    // 32px organic radius
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
        'float': '0 20px 40px -12px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
}
