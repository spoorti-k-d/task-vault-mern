import { defineConfig, globalIgnores } from '@eslint/config'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig([
  globalIgnores([
    {
      path: 'dist',
      glob: '**/*',
    },
    {
      path: 'node_modules',
      glob: '**/*',
    },
  ]),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      'plugin:react-hooks/recommended',
      'plugin:react-refresh/recommended',
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'react/prop-types': 'error',
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true },
      ],
    },
  },
])