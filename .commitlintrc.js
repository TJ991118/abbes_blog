export default {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\p{Emoji_Presentation}?)\s?(\w*)(\(\w*\))?:\s(.*)$/u,
      headerCorrespondence: ["emoji", "type", "scope", "subject"],
    },
  },
  // 🌲 🛠 📝 🧲 📦 📜 🔖 📌
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
        "chore", // Build
        "revert", // Revert Commit
        "lint", //Lint update
      ],
    ],
    "scope-empty": [2, "never"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
