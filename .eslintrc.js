module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "prettier",
  ],
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": 2,
    "class-methods-use-this": 0,
    "computed-property-spacing": ["error", "never"],
    indent: ["error", 2, { SwitchCase: 1 }],
    "key-spacing": [
      2,
      {
        afterColon: true,
      },
    ],
    "keyword-spacing": 2,
    "linebreak-style": "off",
    "lines-around-comment": [
      "error",
      {
        afterBlockComment: false,
        beforeBlockComment: false,
      },
    ],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": "off",
    "no-useless-escape": "off",
    "object-curly-newline": [
      "error",
      {
        ImportDeclaration: {
          consistent: true,
          multiline: true,
        },
      },
    ],
    "object-curly-spacing": [2, "always"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        next: "function",
        prev: "function",
      },
      {
        blankLine: "always",
        next: "class",
        prev: "class",
      },
    ],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: [
      "error",
      "always",
      {
        omitLastInOneLineBlock: true,
      },
    ],
    "quote-props": ["error", "as-needed"],
    "sort-imports": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    "vue/max-len": [
      "error",
      {
        code: 100,
        comments: 80,
        ignoreComments: true,
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
        ignorePattern: "",
        ignoreRegExpLiterals: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        tabWidth: 4,
        template: 100,
      },
    ],
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: [],
      },
    ],
    "object-property-newline": "error",
  },
};
