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
      // Disable the rule that requires React to be in scope
      'react/react-in-jsx-scope': 'off',
      // Add other custom rules if needed
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  