/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // We'll manage dark mode via class on HTML element
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        background: {
          light: 'var(--bg-light)',
          dark: 'var(--bg-dark)',
        },
        text: {
          light: 'var(--text-light)',
          dark: 'var(--text-dark)',
          muted: 'var(--text-muted)',
        },
        border: {
          light: 'var(--border-light)',
          dark: 'var(--border-dark)',
        },
        success: 'var(--success)',
        error: 'var(--error)',
      }
    },
  },
  plugins: [],
}
