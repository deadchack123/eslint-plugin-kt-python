module.exports = {
  rules: {
    "no-describe": require("./rules/no-describe"),
    "no-test": require("./rules/no-test"),
    "no-as-jest-mock": require("./rules/no-as-jest-mock"),
    "no-nested-expect": require("./rules/no-nested-expect"),
    "jest-mock-two-args": require("./rules/jest-mock-two-args"),
  },
  configs: {
    recommended: {
      plugins: ["kt-python"],
      rules: {
        "kt-python/no-describe": "error",
        "kt-python/no-test": "error",
        "kt-python/no-as-jest-mock": "error",
        "kt-python/no-nested-expect": "error",
        "kt-python/jest-mock-two-args": "error",
      },
    },
  },
};
