/* eslint-disable ts/no-require-imports */
import { addDynamicIconSelectors } from '@iconify/tailwind';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // nuxt
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './**/*.{vue,js,ts,jsx,tsx}', // useless ?
    '!./node_modules/**',
    // ui
    '../../**/*.{vue,js,ts,jsx,tsx}',
    '!../../**/node_modules/**',
  ],
  theme: {
    extend: {
      // textShadow: {
      //   DEFAULT: '0 4px 4px var(--tw-shadow-color)',
      // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(farthest-corner, var(--tw-gradient-stops))',
      },
      dropShadow: {
        'glow': ['0 0px 4px var(--tw-shadow-color)'],
        'glow-sm': ['0 0px 2px var(--tw-shadow-color)'],
      },
      fontFamily: {
        digital: ['"DSDigital"', 'monospace'],
      },
      colors: {
        primary: '#FF5733',
        secondary: '#0F6BB1',
        accent: '#FFFAE7',
      },
    },
  },
  darkMode: ['class', '[data-modeㄔ="dark"]'],
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/aspect-ratio'),
    require('@designbycode/tailwindcss-text-stroke'),
    addDynamicIconSelectors(),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': value => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
};
