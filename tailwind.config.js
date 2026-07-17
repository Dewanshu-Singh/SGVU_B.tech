/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0D0A1C',
          2: '#161129',
          3: '#1F1838',
        },
        paper: {
          DEFAULT: '#F5F3EC',
          2: '#ECE9DF',
        },
        violet: {
          DEFAULT: '#7B5CFF',
          soft: '#A48DFF',
          deep: '#4C31C9',
        },
        lime: '#C8F135',
        redx: '#FF6B6B',
        textdark: '#241E38',
        muted: {
          dark: '#9A93B8',
          light: '#6B6580',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        brand: '14px',
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      boxShadow: {
        card: '0 24px 70px rgba(0,0,0,.45)',
        diff: '0 30px 80px rgba(0,0,0,.45)',
        lift: '0 18px 44px rgba(36,30,56,.12)',
      },
    },
  },
  plugins: [],
}
