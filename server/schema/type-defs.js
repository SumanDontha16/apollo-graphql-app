const { gql } = require("apollo-server");

const typeDefs = gql`
  type Todo {
    id: ID
    title: String
    description: String
    email: String
  }
  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(title: String, description: String, email: String): Todo
    updateTodo(id: ID, title: String, description: String, email: String): Todo
    deleteTodo(id: ID!): Todo
  }
`;

module.exports = typeDefs;
