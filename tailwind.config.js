/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'demo-purple': '#4c1d95',
        'demo-gold': '#f59e0b',
        'govuk-blue': '#1d70b8',
        'govuk-black': '#0b0c0c',
        'nhs-blue': '#005eb8',
        'nhs-green': '#007f3b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
