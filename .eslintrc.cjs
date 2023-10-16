module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:perfectionist/recommended-natural',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-object-types': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'natural',
        order: 'asc',
        groups: [
          'type',
          'react',
          'nanostores',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-*'],
            nanostores: '@nanostores/**',
          },
          type: {
            react: 'react',
          },
        },
        'newlines-between': 'always',
        'internal-pattern': [
          'src/components/**',
          'src/store/**',
          // 'pages/**',
          // 'utils/**',
        ],
      },
    ],
    'perfectionist/sort-jsx-props': [
      'warn',
      {
        'type': 'line-length',
        'order': 'asc',
      },
    ],
  },
};
