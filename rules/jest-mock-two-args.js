module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "jest.mock должен использоваться с двумя аргументами и более",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node?.callee?.object?.name === "jest" &&
          node?.callee?.property?.name === "mock"
        ) {
          if (node.arguments.length === 1) {
            context.report({
              node,
              message:
                "jest.mock должен использоваться с двумя аргументами и более",
            });
          }
        }
      },
    };
  },
};
