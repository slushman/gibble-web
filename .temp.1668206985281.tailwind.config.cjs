/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'accent-gradiant': var(--accent-gradient),
      },
      backgroundPosition: {
        none: 0,
      },
      backgroundSize: {
        over: "400%",
      },
    },
  },
  plugins: [],
};
