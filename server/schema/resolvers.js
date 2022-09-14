const { Todo } = require("../FakeData.json");

const resolvers = {
  Query: {
    getTodos: () => Todo,
  },
};

module.exports = resolvers;
