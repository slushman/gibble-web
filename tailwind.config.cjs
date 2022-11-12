/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "accent-gradiant": "var(--accent-gradient)",
      },
      backgroundPosition: {
        all: "99.9%",
        zero: 0,
      },
      backgroundSize: {
        over: "400%",
      },
      colors: {
        darker: "var(--darker)",
        dark: "var(--dark)",
        medium: "var(--medium)",
        accent: "var(--accent)",
        lighter: "var(--lighter)",
        "trans-black": "rgba(0, 0, 0, 0.1)",
      },
      transitionTimingFunction: {
        "cubic-bezier": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
