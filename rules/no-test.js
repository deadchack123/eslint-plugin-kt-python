module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Не используйте test",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
    fixable: "code",
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === "test") {
          context.report({
            node,
            message: "Не используйте test",
            fix(fixer) {
              return fixer.replaceText(node.callee, "it");
            },
          });
        }
      },
    };
  },
};
