module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#20035B", // Existing deep background color
        secondary: "#4c1d95", // Existing soft pink-purple for highlights
        tertiary: "#5b3e5c", // Existing rich mauve for elements
        quaternary: "#9a8c98", // Existing muted lavender for subtle accents
        coinpulsePrimary: "#a5f3fc", // CoinPulse Dark Gray
        coinpulseAccent: "#164E63", // CoinPulse Vivid Red
        coinpulseSecondary: "#7dd3fc", // CoinPulse Deep Maroon
        coinpulseHighlight: "#A5F3FC", // CoinPulse Rich Magenta
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpeg')",
      },
      keyframes: {
        textRotate1: {
          '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 2.4s infinite alternate',
        textRotate2: 'textRotate2 2.4s infinite alternate',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
};