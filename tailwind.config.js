// tailwind.config.js

import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        border: 'var(--color-berder)',
        highlight: 'var(--color-highligth)',
        surface: 'var(--color-surface)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
})
