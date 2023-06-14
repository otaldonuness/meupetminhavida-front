module.exports = {
  extends: [
    "airbnb-base",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      plugins: [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort",
        "jsx-a11y",
      ],
      extends: [
        "plugin:tailwindcss/recommended",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@next/next/recommended",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "react/function-component-definition": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/jsx-one-expression-per-line": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "no-restricted-syntax": [
          "error",
          "ForInStatement",
          "LabeledStatement",
          "WithStatement",
        ],
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "tailwindcss/no-custom-classname": "off",
      },
    },
    {
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.test.js", "**/*.test.jsx"],
      plugins: ["vitest"],
      extends: ["plugin:vitest/all"],
      env: {
        jest: true,
      },
    },
  ],
};
