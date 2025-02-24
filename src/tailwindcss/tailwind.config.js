/** @type {import("tailwindcss").Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "../../*.py",
    "../app/*.py",
    "../app/**/*.py",
    "../static/css/input.css",
    "../static/js/*.js",
    "../static/js/**/*.js",
    "../static/js/modules/*.js",
    "../static/js/components/*.js",
    "../templates/*.html",
    "../templates/**/*.html",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "1.0rem",
        xsm: "0.75rem",
        xxsm: "0.625rem",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      boxShadow: {
        "3xl": "0 10px 15px 10px rgba(0, 0, 0, 0.3)",
        "inner-xl": "inset 0px -5px 10px 5px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in-out",
        "slide-in": "slideIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  // SOMENTE esta parte foi alterada para refletir a nova paleta e incluir o tema escuro
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#2D2B83",
          "primary-content": "#ffffff",

          "secondary": "#4E4BD5",
          "secondary-content": "#ffffff",

          "accent": "#1FB2A6",
          "accent-content": "#ffffff",

          "neutral": "#3D4451",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-300": "#e5e6e6",
          "base-content": "#1f2937",

          "info": "#2094f3",
          "info-content": "#ffffff",

          "success": "#009485",
          "success-content": "#ffffff",

          "warning": "#ff9900",
          "warning-content": "#ffffff",

          "error": "#ff5724",
          "error-content": "#ffffff",
        },
        "custom-dark": {
          "primary": "#2D2B83",
          "primary-content": "#ffffff",

          "secondary": "#4E4BD5",
          "secondary-content": "#ffffff",

          "accent": "#1FB2A6",
          "accent-content": "#ffffff",

          // Ajuste de cores para modo escuro
          "neutral": "#2A2E37",
          "neutral-content": "#ffffff",

          "base-100": "#181A20",
          "base-200": "#1F222A",
          "base-300": "#242731",
          "base-content": "#A6ADBB",

          "info": "#2094f3",
          "info-content": "#ffffff",

          "success": "#009485",
          "success-content": "#ffffff",

          "warning": "#ff9900",
          "warning-content": "#ffffff",

          "error": "#ff5724",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
