import postcss from 'tailwind-config/postcss.config.js';
import { alias } from '../../alias';

export default defineNuxtConfig({
  compatibilityDate: '2024-12-05',
  modules: ['@pinia/nuxt', '@nuxt/devtools'],
  alias,
  css: [
    'tailwind-config/tailwind.css',
  ],
  components: [
    { path: '../../packages/ui/src/components', extensions: ['vue'] },
  ],
  typescript: {
    shim: false,
  },
  postcss,
  vite: {
    optimizeDeps: {
      exclude: ['pinia'],
    },
  },
  telemetry: { enabled: false },
});
