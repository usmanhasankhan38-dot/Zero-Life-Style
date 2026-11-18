/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          charcoal: "#111827",
          dark: "#1A1A1A",
          red: "#E53935",
          redDark: "#D32F2F",
          grayLight: "#F3F4F6",
          grayPill: "#EEF0F5",
          grayBorder: "#E5E7EB",
          textMuted: "#6B7280",
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marqueeFast: 'marquee 15s linear infinite',
        glow: 'pulseGlow 3s ease-in-out infinite',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        'card': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -10px rgba(0, 0, 0, 0.15)',
        'pill': '0 4px 14px rgba(0, 0, 0, 0.08)',
        'drawer': '-4px 0 24px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
