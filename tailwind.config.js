/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        // 增强的颜色系统
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // 玻璃拟态颜色
        glass: {
          bg: 'rgba(15, 23, 42, 0.7)',
          border: 'rgba(148, 163, 184, 0.1)',
        },
        // 渐变色
        gradient: {
          primary: 'from-purple-600 via-pink-600 to-blue-600',
          secondary: 'from-cyan-500 via-blue-500 to-purple-500',
          neon: 'from-green-400 via-blue-500 to-purple-600',
          sunset: 'from-orange-500 via-pink-500 to-purple-600',
        },
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, hsla(280, 100%, 74%, 1) 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
          radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
          radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
          radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%)
        `,
      },
      boxShadow: {
        'glass-sm': '0 2px 4px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
        'glass-lg': '0 16px 64px rgba(0, 0, 0, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        'neon-sm': '0 0 10px var(--accent-primary), 0 0 20px var(--accent-primary)',
        'neon': '0 0 20px var(--accent-primary), 0 0 40px var(--accent-primary)',
        'neon-lg': '0 0 30px var(--accent-primary), 0 0 60px var(--accent-primary)',
        'glow': '0 0 40px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 60px rgba(139, 92, 246, 0.6)',
        'inner-glow': 'inset 0 0 20px rgba(139, 92, 246, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-slow': 'glow 4s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'shake': 'shake 0.5s ease-in-out',
        'bounce-light': 'bounceLight 2s infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'mesh': 'mesh 20s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        mesh: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'size': 'width, height',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
