/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#4F8EF7',
          purple: '#A855F7',
          cyan: '#06B6D4',
        },
        dark: {
          900: '#05060F',
          800: '#0A0D1E',
          700: '#0F1330',
          600: '#141840',
          card: '#0D1025',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #4F8EF7 0%, #A855F7 100%)',
        'gradient-hero': 'radial-gradient(ellipse at 60% 50%, #1a1060 0%, #05060F 60%)',
        'gradient-text': 'linear-gradient(90deg, #4F8EF7 0%, #A855F7 50%, #06B6D4 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(79, 142, 247, 0.3)',
        'glow-purple': '0 0 40px rgba(168, 85, 247, 0.3)',
        'glow-brand': '0 0 60px rgba(79, 142, 247, 0.2), 0 0 100px rgba(168, 85, 247, 0.1)',
      },
    },
  },
  plugins: [],
}
