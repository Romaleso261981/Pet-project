module.exports = {
  extends: ["eslint:recommended", "react-app"],
  rules: {
    "no-nested-ternary": "off",
    "no-console": 0,
    "linebreak-style": ["error", "unix"],
    "jsx-a11y/no-onchange": 0,
    "no-unused-vars": 0,
    "import/no-extraneous-dependencies": 0,
    "react/static-property-placement": [1, "static public field"],
    "react/state-in-constructor": [1, "never"],
    "react/sort-comp": [
      2,
      {
        order: [
          "static-methods",
          "static-variables",
          "instance-variables",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],
  },
};
