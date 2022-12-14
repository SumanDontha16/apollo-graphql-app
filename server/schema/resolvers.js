const Axios = require("axios");

const resolvers = {
  Query: {
    getTodos: (parent, args) => {
      return Axios.get("http://localhost:3000/Todo").then((res) => res.data);
    },
  },
  Mutation: {
    addTodo(parent, args) {
      return Axios.post("http://localhost:3000/Todo", {
        title: args.title,
        description: args.description,
        email: args.email,
      }).then((res) => res.data);
    },
    updateTodo: (parent, args) => {
      return Axios.patch(`http://localhost:3000/Todo/${args.input.id}`, {
        title: args.input.title,
        description: args.input.description,
        email: args.input.email,
      }).then((res) => res.data);
    },
    deleteTodo: (parent, args) => {
      return Axios.delete(`http://localhost:3000/Todo/${args.id}`).then(
        (res) => res.data
      );
    },
  },
};

module.exports = resolvers;
