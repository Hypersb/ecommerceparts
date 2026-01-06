/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Part Thieves Automotive Theme
        primary: '#000000',           // Black - main background
        secondary: {
          DEFAULT: '#1a1a1a',         // Dark gray
          light: '#2d2d2d',
          dark: '#0a0a0a'
        },
        silver: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#94a3b8',
          600: '#6c757d',
          700: '#495057',
        },
        accent: '#dc2626',            // Red - buttons, prices, alerts
        highlight: '#3b82f6',         // Blue - links, trust icons
        automotive: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        glass: '4px',
      }
    },
  },
  plugins: [],
}
