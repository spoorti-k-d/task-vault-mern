import { defineConfig } from '@eslint/config'

export default defineConfig({
  ignorePatterns: ['dist', 'node_modules'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-refresh/recommended',
  ],
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'react/prop-types': 'error',
  },
})