/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkblue: "#192236",
        customorange: "#f8bb84;",
      },
      animation: {
        slideup: " slideup ease 1s forwards",
        slidein5: " slidein ease 1.5s 0.5s forwards",
        slidein7: " slidein ease 1.5s 0.7s forwards",
        slidein9: " slidein ease 1.5s 0.9s forwards",
      },
      keyframes: {
        slidein: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        slideup: {
          "100%": {
            transform: "translateY(0)",
          },
        },
      },

      fontSize: {
        step0: "clamp(1rem, 0.9458rem + 0.2312cqi, 1.125rem)",
        step1: "clamp(1.1625rem, 1.3733rem + 0.8074cqi, 1.999rem)",
        step2: "clamp(1.5531rem, 1.6447rem + 1.3161cqi, 2.6647rem)",
        step3: "clamp(2.0414rem, 1.9599rem + 2.0543cqi, 3.552rem)",
      },

      plugins: [],
    },
  },
};
