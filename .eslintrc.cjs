/* eslint-env node */
module.exports = {
  ignorePatterns: ['src/components/MainPage/Testimonials 2.jsx'],
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/prop-types': 'off', // Example rule, adjust as needed
    'no-unused-vars': 'off', // Example rule, adjust as needed
    'react/jsx-uses-react': 'off', // Not needed with React 17+
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react-hooks/exhaustive-deps': 'off',
  },
  overrides: [
    {
      // @react-three/fiber uses custom JSX props (position, args, intensity, castShadow, etc.)
      // that are not standard HTML attributes. Disable the rule for all R3F files.
      files: [
        'src/components/canvas/**/*.{js,jsx}',
        'src/pages/AIDevAvatar3D.jsx',
      ],
      rules: {
        'react/no-unknown-property': 'off',
      },
    },
  ],
};