module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: 'не используйте "as jest.mock"',
      category: "Best Practices",
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    return {
      TSAsExpression(node) {
        if (node.typeAnnotation?.typeName?.escapedText === "jest.Mock") {
          context.report({
            node,
            message: 'не используйте "as jest.mock"',
          });
        }
      },
    };
  },
};
