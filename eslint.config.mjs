import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import stylistic from '@stylistic/eslint-plugin'

const eslintConfig = defineConfig([
  js.configs.recommended,
  stylistic.configs.recommended,
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts'
  ]),
  {
    rules: {
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/max-len': ['error', { code: 144, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }]
    }
  }
])

export default eslintConfig
