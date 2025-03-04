module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Не используйте describe",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === "describe") {
          context.report({
            node,
            message: "Не используйте describe",
          });
        }
      },
    };
  },
};
