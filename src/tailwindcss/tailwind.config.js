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
          "primary": "#2D2B83",      // Mantido como solicitado
          "primary-content": "#FFFFFF",
  
          "secondary": "#C5B286",    // Dourado suave para elementos secundários
          "secondary-content": "#2D2B83",
  
          "accent": "#A08C5E",       // Dourado mais intenso para destaques
          "accent-content": "#FFFFFF",
  
          "neutral": "#3D3A30",      // Neutro terroso para equilíbrio
          "neutral-content": "#E8E5DD",
  
          "base-100": "#F8F7F5",     // Bege claro de fundo
          "base-200": "#E8E5DD",      // Bege médio para camadas
          "base-300": "#D4CFC4",      // Bege mais escuro para detalhes
          "base-content": "#2D2B83",  // Azul primário como cor de texto
  
          "info": "#4E4BD5",          // Azul secundário original
          "success": "#4A7C59",       // Verde terroso natural
          "warning": "#C5A347",       // Dourado para alertas
          "error": "#B6453C",         // Vermelho terroso
        },
        "custom-dark": {
          "primary": "#2D2B83",
          "primary-content": "#E8E5DD",
  
          "secondary": "#A08C5E",     
          "secondary-content": "#2D2B83",
  
          "accent": "#C5B286",        
          "accent-content": "#2D2B83",
  
          "neutral": "#2A2824",       
          "neutral-content": "#E8E5DD",
  
          "base-100": "#1A1915",      // Fundo escuro quente
          "base-200": "#2D2B27",      
          "base-300": "#3D3A34",      
          "base-content": "#E8E5DD",  // Bege claro para texto
  
          "info": "#6B68D5",          
          "success": "#5B8C6B",
          "warning": "#D4B45C",
          "error": "#C7554C",
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
