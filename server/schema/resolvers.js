const { Todo } = require("../FakeData.json");
const Axios = require("axios");

const resolvers = {
  Query: {
    getTodos: (parent, args) => {
      return Axios.get("http://localhost:3000/Todo").then((res) => res.data);
    },
  },
  Mutation: {
    addTodo(parent, args) {
      return Axios.post("http://localhost:3000/Todo", args.input).then(
        (res) => res.data
      );
    },
  },
};

module.exports = resolvers;
