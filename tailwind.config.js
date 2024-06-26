const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#f2faff",
      // 'secondary': '#ffed4a',
      // 'danger': '#e3342f',
    }),
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // dmSans: ['var(--font-dm)'],
        outfit: ["var(--font-outfit)"],
        satoshi: ["var(--font-satoshi)"],
        montserrat: ["var(--font-montserrat)"],
        nova: ["var(--font-nova)"],
        // plain: ['var(--font-plain)'],
      },
      fontSize: {
        extraSm: ["10px", "12px"],
        xss: ["12px", "20px"],
        smm: ["14px", "22px"],
        xs: ["14px", "24px"],
        hero: ["56px", "76px"],
        xll: ["20px", "32px"],
        heading: ["40px", "50px"],
      },

      colors: {
        primary: "#3FA9F5",
        darkblue: "#140D31",
        dimSecondary: "hsla(252, 58%, 12%, 0.8)",
        tertiary: "#FFFFFF",
        gray: "#726E83",
        destructive: "#D10002",
        topic: "hsla(252, 58%, 12%, 0.8)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        golden: {
          DEFAULT: "hsl(var(--golden))",
          foreground: "hsl(var(--golden-foreground))",
        },
        sky: {
          DEFAULT: "hsl(var(--sky))",
          foreground: "hsl(var(--sky-foreground))",
        },
        ghost: {
          DEFAULT: "hsl(var(--ghost))",
          foreground: "hsl(var(--ghost-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
