/** @type {import('tailwindcss').Config} */
export default {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFF7FF',     // Soft pinkish white
          dark: '#1C151C',      // Deep purple-black
          surfaceLight: '#E5E7EB',
          surfaceDark: '#374151',
        },
        display: {
          light: '#EBCFF6',     // Light lavender
          dark: '#322630',      // Dim purple-gray
        },
        key: {
          light: '#F3E2F6',     // Pale lavender for number keys
          dark: '#3B313A',      // Soft charcoal-violet for number keys
        },
        keyAccent: {
          light: '#FFDADA',     // Light peach for 'AC' and ops
          dark: '#8C4A3A',      // Warm brown-red for 'AC'
        },
        keyEqual: {
          light: '#F4C3FF',     // Light pink-purple
          dark: '#9B27B0',      // Vivid purple
        },
        text: {
          light: '#2D1C2D',     // Dark plum text
          dark: '#F5EAF7',      // Pale lavender text
        },
      },
    },
  },
  plugins: [],
}
