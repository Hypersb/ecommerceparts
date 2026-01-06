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
        // Part Thieves Professional Theme: Silver, Black, White, Blue, Red
        primary: {
          DEFAULT: '#000000',        // Pure Black
          light: '#1a1a1a',
          dark: '#000000'
        },
        secondary: {
          DEFAULT: '#374151',        // Gray for secondary elements
          light: '#4b5563',
          dark: '#1f2937'
        },
        silver: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        accent: {
          DEFAULT: '#dc2626',        // Red - Primary CTA
          light: '#ef4444',
          dark: '#b91c1c'
        },
        highlight: {
          DEFAULT: '#2563eb',        // Blue - Links and secondary CTA
          light: '#3b82f6',
          dark: '#1e40af'
        },
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
