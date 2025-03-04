module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "jest.mock должен использоваться с двумя аргументами",
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      CallExpression(node) {
        if (node.callee.name === "jest.mock" && node.arguments.length !== 2) {
          context.report({
            node,
            message: "jest.mock должен использоваться с двумя аргументами",
          });
        }
      },
    };
  },
};
