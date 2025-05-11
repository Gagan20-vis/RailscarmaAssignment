import js from '@eslint/js'
import { defineConfig } from 'eslint/config'
import prettierConfig from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import pluginPrettier from 'eslint-plugin-prettier'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      prettier: pluginPrettier,
      import: pluginImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...pluginReact.configs.flat.recommended.rules,

      // Prettier
      'prettier/prettier': 'error',

      // React
      'react/react-in-jsx-scope': 'off',

      // Import sorting
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Apply Prettier config last
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      ...prettierConfig.rules,
    },
  },
])
