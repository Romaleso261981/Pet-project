// module.exports = {
//   extends: [
//     "eslint:recommended",
//     "react-app",
//     "airbnb",
//     "plugin:import/errors",
//     "plugin:react/recommended",
//     "plugin:jsx-a11y/recommended",
//     "prettier",
//     "plugin:prettier/recommended",
//     "prettier/react",
//   ],
//   plugins: ["react", "import", "prettier", "jsx-a11y"],
//   parser: "babel-eslint",
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: "module",
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   env: {
//     es6: true,
//     browser: true,
//     node: true,
//     jest: true,
//   },
//   rules: {
//     "no-nested-ternary": "off",
//     "no-console": 0,
//     "linebreak-style": ["error", "unix"],
//     "react/jsx-filename-extension": [
//       1,
//       {
//         extensions: [".js", ".jsx"],
//       },
//     ],
//     "jsx-a11y/no-onchange": 0,
//     "no-unused-vars": 0,
//     "import/no-extraneous-dependencies": 0,
//     "react/destructuring-assignment": [
//       2,
//       "always",
//       {
//         ignoreClassFields: true,
//       },
//     ],
//     "react/static-property-placement": [1, "static public field"],
//     "react/state-in-constructor": [1, "never"],
//     "react/sort-comp": [
//       2,
//       {
//         order: [
//           "static-methods",
//           "static-variables",
//           "instance-variables",
//           "lifecycle",
//           "everything-else",
//           "render",
//         ],
//       },
//     ],
//   },
//   globals: {
//     window: true,
//     document: true,
//     localStorage: true,
//     FormData: true,
//     FileReader: true,
//     Blob: true,
//     navigator: true,
//   },
// };
