/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        fog: {
          DEFAULT: '#FAFAF7',
          dark: '#F2F5F2',
        },
        stone: {
          ci: '#A8B09A',
          dark: '#7A8A6E',
        },
        navy: {
          DEFAULT: '#1A3A2A',
          light: '#2F6B52',
          deep: '#0F2318',
        },
        green: {
          DEFAULT: '#1A3A2A',
          light: '#234D38',
          deep: '#1E4D3A',
          mid: '#2D5A3D',
          sage: '#8FAF8A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#CCA84A',
          pale: '#F0E4C0',
        },
        ink: {
          DEFAULT: '#1C2B1E',
          soft: '#3D4F3E',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8963C 0%, #CCA84A 50%, #B8963C 100%)',
        'navy-gradient': 'linear-gradient(180deg, #1A3A2A 0%, #0F2318 100%)',
        'green-gradient': 'linear-gradient(180deg, #1A3A2A 0%, #0F2318 100%)',
      },
      animation: {
        'ken-burns': 'kenBurns 28s ease-in-out infinite',
        'marquee-scroll': 'marqueeScroll 36s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        kenBurns: {
          '0%':   { transform: 'scale(1.0) translate(0%, 0%)' },
          '33%':  { transform: 'scale(1.08) translate(-1%, -0.5%)' },
          '66%':  { transform: 'scale(1.05) translate(1%, 0.5%)' },
          '100%': { transform: 'scale(1.0) translate(0%, 0%)' },
        },
        marqueeScroll: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(184, 150, 60, 0.4)' },
          '50%':      { boxShadow: '0 0 0 8px rgba(184, 150, 60, 0)' },
        },
      },
      boxShadow: {
        'gold-sm': '0 4px 16px rgba(184, 150, 60, 0.25)',
        'gold-md': '0 8px 32px rgba(184, 150, 60, 0.35)',
        'navy-sm': '0 4px 16px rgba(26, 58, 42, 0.12)',
        'navy-md': '0 12px 40px rgba(26, 58, 42, 0.18)',
      },
    },
  },
  plugins: [],
};