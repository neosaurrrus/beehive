module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react", "prettier"],
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  rules: {
    "prettier/prettier": "error",
  },
};
