module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
        moduleDirectory: ['src', 'node_modules']
      }
    }
  },
  rules: {
    'import/no-cycle': 'off',
    'import/no-unused-modules': [
      'error',
      {
        unusedExports: true
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        jsxBracketSameLine: false,
        endOfLine: 'lf',
        jsxSingleQuote: false,
        tabWidth: 2,
        printWidth: 100,
        arrowParens: 'always'
      }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'no-shadow': 'off',
    camelcase: 'off',
    'no-unused-vars': 'off',
    'import/no-anonymous-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always'
      }
    ],
    'max-classes-per-file': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx', '.tsx']
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off'
  }
};
