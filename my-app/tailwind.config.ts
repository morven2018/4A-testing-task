import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["var(--font-gilroy)", "sans-serif"],
      },
      animation: {
        gentleFadeIn: "gentleFadeIn 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
        gentleFadeOut: "gentleFadeOut 1.8s cubic-bezier(0.4, 0, 0.2, 1)",
        priceTransition: "priceTransition 2.2s ease-in-out",
        crossfade: "crossfade 2.5s ease-in-out",
        borderPulse: "borderPulse 2s ease-in-out",
        borderFlash: "borderFlash 2s ease-in-out",
      },
      keyframes: {
        gentleFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(8px) scale(0.95)",
            filter: "blur(4px)",
          },
          "50%": {
            opacity: "0.6",
            transform: "translateY(4px) scale(0.97)",
            filter: "blur(2px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
        },
        gentleFadeOut: {
          "0%": {
            opacity: "1",
            transform: "translateY(0) scale(1)",
            filter: "blur(0)",
          },
          "50%": {
            opacity: "0.4",
            transform: "translateY(-4px) scale(0.97)",
            filter: "blur(2px)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-8px) scale(0.95)",
            filter: "blur(4px)",
          },
        },
        borderPulse: {
          "0%": {
            borderColor: "#484D4E",
            boxShadow: "0 0 0 0 rgba(253, 86, 86, 0)",
          },
          "25%": {
            borderColor: "#FD5656",
            boxShadow: "0 0 0 8px rgba(253, 86, 86, 0.3)",
          },
          "50%": {
            borderColor: "#FD5656",
            boxShadow: "0 0 0 12px rgba(253, 86, 86, 0.2)",
          },
          "75%": {
            borderColor: "#FD5656",
            boxShadow: "0 0 0 16px rgba(253, 86, 86, 0.1)",
          },
          "100%": {
            borderColor: "#484D4E",
            boxShadow: "0 0 0 20px rgba(253, 86, 86, 0)",
          },
        },
        borderFlash: {
          "0%": {
            borderColor: "#484D4E",
            backgroundColor: "#313637",
          },
          "15%": {
            borderColor: "#FD5656",
            backgroundColor: "rgba(253, 86, 86, 0.1)",
          },
          "30%": {
            borderColor: "#FD5656",
            backgroundColor: "rgba(253, 86, 86, 0.2)",
          },
          "45%": {
            borderColor: "#FD5656",
            backgroundColor: "rgba(253, 86, 86, 0.1)",
          },
          "60%": {
            borderColor: "#FD5656",
            backgroundColor: "rgba(253, 86, 86, 0.05)",
          },
          "100%": {
            borderColor: "#484D4E",
            backgroundColor: "#313637",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
