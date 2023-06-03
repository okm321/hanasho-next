module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:promise/recommended", "react-app", "plugin:jest/recommended", "plugin:jest/style", "plugin:storybook/recommended"],
  plugins: ["@typescript-eslint", "jsx-a11y", "simple-import-sort", "eslint-plugin-local-rules"],
  rules: {
    // local rules
    "local-rules/no-button-import": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // any完全排除はルール的に厳しすぎるので無視する
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error", {
      argsIgnorePattern: "^_",
      varsIgnorePattern: "^_",
      caughtErrorsIgnorePattern: "^_",
      destructuredArrayIgnorePattern: "^_"
    }],
    "react-hooks/exhaustive-deps": ["error", {
      enableDangerousAutofixThisMayCauseInfiniteLoops: true
    }],
    "no-irregular-whitespace": ["error", {
      skipRegExps: true
    }],
    "@typescript-eslint/ban-types": ["error", {
      types: {
        // {}型は使いたいケースがそこそこあるので許可する
        "{}": false
      },
      extendDefaults: true
    }],
    "no-restricted-imports": ["error", {
      paths: [{
        name: "lodash",
        message: "Tree Shakingのためにlodash-esを使ってください"
      }],
      patterns: [{
        group: ["*/../", "!../*"],
        message: "途中で相対パスで上の階層に上がることを禁止しています。絶対パスを使用する場合は..を使わずに指定してください。"
      }, {
        group: ["@mui/icons-material", "@mui/icons-material/**"],
        message: "Vuetifyからの移植の関係上、アイコンはMaterial Design Iconsを使うので'mdi-material-ui'をimportして下さい"
      }, {
        group: ["~/features/*/**"],
        message: "featuresディレクトリのimportは詳細のファイルへのアクセスは禁止しています。"
      }]
    }],
    "@next/next/no-html-link-for-pages": "off"
  },
  overrides: [{
    files: ["*.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off"
    }
  }, {
    files: ["apps/tenant/**"],
    extends: ["next"],
    rules: {
      "@next/next/no-img-element": "off"
    }
  }]
};