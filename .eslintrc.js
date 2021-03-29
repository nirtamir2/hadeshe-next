const importRules = require("./eslint/import");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    createDefaultProgram: true,
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/all",
    "plugin:regexp/recommended",
    "plugin:compat/recommended",
    "plugin:etc/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:security/recommended",
    "plugin:sort-export-all/recommended",
    "plugin:import/recommended",
    "plugin:import/react",
    "plugin:import/typescript",
    "plugin:json/recommended",
    "plugin:sonarjs/recommended",
    "plugin:i18n-json/recommended",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    // ignore eslint prettier that remove this rule, because I want to remove useless template literal
    quotes: [2, "double", { allowTemplateLiterals: false }],
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/jsx-pascal-case": 2,
    // When it will release "react/jsx-no-constructed-context-values": 2,
    "react/jsx-no-useless-fragment": 2,
    "react/jsx-handler-names": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-curly-brace-presence": [
      2,
      { props: "never", children: "never" },
    ],
    // Typescript
    "@typescript-eslint/no-magic-numbers": 0,
    "@typescript-eslint/prefer-readonly-parameter-types": 0,
    "@typescript-eslint/naming-convention": 0,
    "@typescript-eslint/no-shadow": 0,
    "@typescript-eslint/consistent-type-imports": 0,
    "@typescript-eslint/no-type-alias": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/ban-ts-comment": [
      2,
      {
        "ts-ignore": "allow-with-description",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-floating-promises": 0,
    // a11y
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        controlComponents: ["Input"],
      },
    ],
    // Etc
    "etc/prefer-interface": 2,
    "etc/no-misused-generics": 2,
    "etc/no-const-enum": 2,
    "etc/throw-error": 2,
    ...importRules,
    "no-console": [
      2,
      {
        allow: ["warn", "error"],
      },
    ],
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 2,
  },
  overrides: [
    {
      files: ["pages/**/*.{ts,tsx}", "**/*.d.ts"],
      rules: {
        // Next.js pages are default exports
        "import/no-default-export": 0,
      },
    },
    {
      files: ["pages/**/*.{ts,tsx}", "server/**", "firebase-server/**"],
      rules: {
        "import/no-nodejs-modules": 0,
      },
    },
    {
      files: ["**/*.d.ts"],
      rules: {
        "import/unambiguous": 0,
      },
    },
  ],
};
