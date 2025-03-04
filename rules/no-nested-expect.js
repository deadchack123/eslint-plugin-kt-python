module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Не используйте expect внутри expect",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === "expect") {
          let parent = node.parent;
          while (parent) {
            if (
              parent.type === "CallExpression" &&
              parent.callee.name === "expect"
            ) {
              context.report({
                node,
                message: "Не используйте expect внутри expect",
              });
            }
            parent = parent.parent;
          }
        }
      },
    };
  },
};
