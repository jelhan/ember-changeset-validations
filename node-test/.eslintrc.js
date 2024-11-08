'use strict';

module.exports = {
  env: {
    mocha: true,
  },
  rules: {
    'n/no-unpublished-require': [
      'error',
      {
        // ESLint complaints but it's just devDependencies and used only in tests.
        allowModules: ['ember-cli-blueprint-test-helpers'],
      },
    ],
  },
};
