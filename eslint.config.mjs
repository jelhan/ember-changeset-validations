// eslint.config.mjs

import { FlatCompat } from '@eslint/eslintrc';
import emberPlugin from 'eslint-plugin-ember';
import prettierPlugin from 'eslint-plugin-prettier';
import js from '@eslint/js'; // Import ESLint core configs
import globals from 'globals'; // Import globals

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
  resolvePluginsRelativeTo: import.meta.url,
  recommendedConfig: js.configs.recommended, // Provide recommendedConfig
});

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module', // Ensure ES module parsing
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      ember: emberPlugin,
      prettier: prettierPlugin,
    },
    rules: {},
  },
  // Extend configurations using FlatCompat
  ...compat.extends(
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ),
  {
    ignores: [
      'node_modules/',
      'dist/',
      'blueprints',
      '.prettierrc.cjs',
      '.template-lintrc.js',
      'config/ember-try.js',
      'ember-cli-build.js',
      'index.js',
      'node-test/',
      'config/environment.js',
      'tests/dummy/',
      'testem.js',
    ],
  },
];
