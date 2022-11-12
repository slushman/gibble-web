/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'accent-gradiant': 'accent-gradient',
      },
      backgroundPosition: {
        none: 0,
      },
      backgroundSize: {
        over: "400%",
      },
      colors: {
        'darker': 'var(--darker)',
        'dark': 'var(--dark)',
        'medium': 'var(--medium)',
        'accent': 'var(--accent)',
        'accent-gradient': 'var(--accent-gradient)'
        'lighter': 'var(--lighter)',
      },
    },
  },
  plugins: [],
};
