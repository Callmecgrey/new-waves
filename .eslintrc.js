// .eslintrc.js

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'next/core-web-vitals',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'prettier',
    ],
    plugins: ['@typescript-eslint', 'react'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react/no-unknown-property': [
        'error',
        {
          ignore: ['wireframe', 'intensity', 'position', 'args', 'attach'],
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };  