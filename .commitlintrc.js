export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // Bug 修复
        "docs", // 文档更新
        "style", // 代码格式（不影响功能）
        "refactor", // 重构（非功能或 Bug 修复）
        "test", // 测试相关
        "chore", // 构建或辅助工具变动
        "revert", // 回滚提交
      ],
    ],
    "scope-empty": [2, "never"], // scope 不能为空
  }
};
