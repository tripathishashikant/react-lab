import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist', 'node_modules', '**/.*', 'eslint.config.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...reactHooks.configs.flat.recommended,
    files: ['**/*.{js,jsx,ts,tsx}'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-refresh': reactRefresh,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
      'prettier/prettier': 'error',
    },
  },
  prettier,
];



