module.exports = {
  "root": true,
  "env": {
    es6: true,
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  "ignorePatterns": [
    "/lib/**/*", // Ignore built files.
  ],
  "plugins": [
    "@typescript-eslint",
    "import",
  ],
  "rules": {
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "object-curly-spacing": [2, "always"],
    "semi": "off",
    "require-jsdoc": "off",
    "camelcase": ["error"],
    "@typescript-eslint/semi": ["error"],
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "rules": {
        "camelcase": ["off"],
      },
    },
  ],
};
