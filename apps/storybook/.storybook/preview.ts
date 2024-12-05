import { action } from '@storybook/addon-actions';
import { withThemeByClassName } from '@storybook/addon-themes';
import { setup } from '@storybook/vue3';
import { createPinia } from 'pinia';

import 'tailwind-config/tailwind.css';

setup((app) => {
  const pinia = createPinia();
  app.use(pinia);
  // Provide NuxtLink Stub
  app.component('NuxtLink', {
    props: {
      to: {
        type: String,
        default: '',
      },
    },
    methods: {
      log() {
        action('link target')(this.to);
      },
    },
    template: '<div @click="log()"><slot>NuxtLink</slot></div>',
  });
});

export const parameters = {
  layout: 'centered',
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
];
