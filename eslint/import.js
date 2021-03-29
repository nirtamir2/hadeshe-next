module.exports = {
  // Import order
  // This won't clash with import/order and will order imports inside the {}.
  "sort-imports": [
    2,
    {
      ignoreDeclarationSort: true,
    },
  ],
  "import/order": [
    "warn",
    {
      groups: [
        ["builtin", "external"],
        "internal",
        ["parent", "index", "sibling"],
      ],
      pathGroups: [
        // replace @projectName with your project name
        {
          pattern: "@projectName/**",
          group: "external",
          position: "after",
        },
        {
          pattern: "*.svg",
          patternOptions: {
            dot: true,
            nocomment: true,
            matchBase: true,
          },
          group: "sibling",
          position: "after",
        },
      ],
      pathGroupsExcludedImportTypes: ["builtin"],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
      },
    },
  ],

  "import/no-namespace": 2,
  "import/no-mutable-exports": 2,
  "import/no-restricted-paths": [
    2,
    {
      zones: [
        {
          target: "./ui-components",
          from: "./firebase-server",
        },
        {
          target: "./ui-components",
          from: "./server",
        },
        {
          target: "./ui-core",
          from: "./firebase-server",
        },
        {
          target: "./ui-core",
          from: "./server",
        },
        {
          target: "./ui-core",
          from: "./firebase-client",
        },
        {
          target: "./ui-core",
          from: "./client",
        },
        {
          target: "./firebase-server",
          from: "./firebase-client",
        },
        {
          target: "./firebase-client",
          from: "./firebase-server",
        },
      ],
    },
  ],
  "import/no-self-import": 2,
  "import/no-cycle": 2,
  "import/no-unused-modules": 2,
  "import/no-anonymous-default-export": 2,
  "import/no-default-export": 2,
  "import/no-named-default": 2,
  "import/no-commonjs": 2,
  "import/no-amd": 2,
  "import/first": 2,
  "import/no-absolute-path": 2,
  "import/no-nodejs-modules": 2,
  "import/no-useless-path-segments": 2,
  "import/unambiguous": 2,
  "import/no-webpack-loader-syntax": 2,
  "import/dynamic-import-chunkname": 2,
  "import/exports-last": 2,
  "import/no-dynamic-require": 2,

  // When using workspaces:
  // "import/no-relative-parent-imports": 2,
  // "import/no-internal-modules": 2, // maybe?
  "import/no-extraneous-dependencies": 2,

  // Off because it's slow
  // "import/no-deprecated": 2,

  // // Not sure
  // extensions: [require("./rules/extensions")],
  // "max-dependencies": require("./rules/max-dependencies"),
  // "no-unassigned-import": require("./rules/no-unassigned-import"),

  //  NO
  // "group-exports": require("./rules/group-exports"),
  // "prefer-default-export": require("./rules/prefer-default-export"),
};
