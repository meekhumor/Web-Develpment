/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#32ACFC",
        blue2: "#0F4C75",
        darkblue: "#073757",
        teal: "#20c997",
        black1: "#1B262C",
        black2: "#0F1D26",
        
      },
      fontWeight: {
        '550': 550,
      },
      width: { 
        '68': '17rem',
        '90': '40rem',
      },
      fontSize: { 
        'xxs': '0.625rem', 
      },
    },
  },
  plugins: [],
};
