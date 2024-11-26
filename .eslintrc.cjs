/**
 * ESLint configuration
 * This serves as a starting point for linting in your app.
 * It uses recommended configurations for simplicity but should be tailored to your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true, // Restricts ESLint to the root directory
  parserOptions: {
    ecmaVersion: "latest", // Specifies ECMAScript version for linting
    sourceType: "module", // Allows the use of ES modules
    ecmaFeatures: {
      jsx: true, // Enables linting for JSX syntax
    },
  },
  env: {
    browser: true, // Defines browser global variables
    commonjs: true, // Allows CommonJS syntax (e.g., `require`)
    es6: true, // Enables ES6 globals and syntax
  },

  // Base configuration
  extends: ["eslint:recommended"],

  overrides: [
    // React configuration
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
      ],
      env: { es2020: true },
      settings: {
        react: {
          version: "detect", // Automatically detect the React version
        },
        // Custom settings for JSX linting
        formComponents: ["Form"], // Add custom form component detection
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
        "import/resolver": {
          typescript: {}, // Ensures TypeScript files are properly resolved
        },
      },
      rules: {
        // Add specific React rules if needed
      },
    },

    // TypeScript configuration
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended", // TypeScript-specific rules
        "plugin:import/recommended", // Import rules
        "plugin:import/typescript", // TypeScript-specific import rules
      ],
      settings: {
        "import/internal-regex": "^~/", // Matches internal imports
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"], // Resolves .ts and .tsx extensions
          },
          typescript: {
            alwaysTryTypes: true, // Ensures type packages are considered
          },
        },
      },
      rules: {
        // Add TypeScript-specific rules if needed
      },
    },

    // Node.js configuration
    {
      files: ["**/*.js"], // Only applies to JS files in Node environments
      extends: ["eslint:recommended", "prettier"], // Includes Prettier for code formatting
      env: {
        es2020: true,
        node: true, // Defines Node.js global variables
      },
      rules: {
        "no-empty": "off", // Disables the no-empty rule
        "react/display-name": "off", // Avoids requiring display names for React components
      },
    },
  ],
};
