import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { alias } from '../../alias';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias,
  },
});
