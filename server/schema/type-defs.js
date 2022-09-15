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

  input UpdateTodoInput {
    id: ID
    title: String
    description: String
    email: String
  }

  type Mutation {
    addTodo(title: String, description: String, email: String): Todo
    updateTodo(id: ID, input: UpdateTodoInput): Todo
    deleteTodo(id: ID!): Todo
  }
`;

module.exports = typeDefs;
