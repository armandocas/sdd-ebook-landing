/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: '#0B0D14',
        graphite: '#141626',
        panel: '#1A1D30',
        steel: '#252840',
        mist: '#5A6282',
        silver: '#8B94B8',
        cloud: '#C8CEDF',
        cobalt: '#1D4ED8',
        cblue: '#3B82F6',
        violet: '#7C3AED',
        teal: '#0F766E',
        amber: '#B45309',
        yamber: '#F59E0B',
        signal: '#DC2626',
        cream: '#F5F4F0',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
        mono: ['IBM Plex Mono', 'Menlo', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
