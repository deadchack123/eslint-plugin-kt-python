module.exports = {
  rules: {
    "no-describe-test": {
      create(context) {
        return {
          CallExpression(node) {
            const { callee } = node;
            if (callee.name === "describe" || callee.name === "test") {
              context.report({
                node,
                message: "Не используйте describe и test",
              });
            }
          },
        };
      },
    },
    "no-as-jest-mock": {
      create(context) {
        return {
          TSAsExpression(node) {
            if (node.typeAnnotation?.typeName?.escapedText === "jest.Mock") {
              context.report({
                node,
                message: 'Не используйте "as jest.Mock"',
              });
            }
          },
        };
      },
    },
    "no-nested-expect": {
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
    },
    "jest-mock-two-args": {
      create(context) {
        return {
          CallExpression(node) {
            if (
              node.callee.name === "jest.mock" &&
              node.arguments.length !== 2
            ) {
              context.report({
                node,
                message: "jest.mock должен использоваться с двумя аргументами",
              });
            }
          },
        };
      },
    },
  },
};
