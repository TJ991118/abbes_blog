export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New Function
        "fix", // Bug Fix
        "docs", // Updated Document
        "style", // Code Style
        "refactor", // Refactor
        "test", // Related Test
        "chore", // Build
        "revert", // Revert Commit
        "lint", //Lint update
      ],
    ],
    "scope-empty": [2, "never"],
  },
};
