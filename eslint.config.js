import antfu from '@antfu/eslint-config';

const apps = 'apps';
const histoirePath = `${apps}/histoire`;

export default await antfu(
  {
    typescript: true,
    vue: true,
    stylistic: {
      semi: true,
    },
  },
  {
    rules: {
      'antfu/top-level-function': 'off',
    },
  },
  // Histoire Overrides
  {
    files: [`${histoirePath}/**/*.{js,ts,vue}`],
    rules: {
      'import/default': 'off',
    },
  },
);
