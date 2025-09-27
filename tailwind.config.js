/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  safelist: [
    "bg-[#050414]",
    "bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]",
    "bg-[length:14px_24px]",
    "mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
       backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};
