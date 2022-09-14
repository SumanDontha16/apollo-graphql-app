const { gql } = require("apollo-server");

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String!
    email: String!
  }
  type Query {
    getTodos: [Todo!]!
  }

  input TodoInput {
    title: String!
    description: String!
    email: String!
  }

  type Mutation {
    addTodo(input: TodoInput!): Todo
  }
`;

module.exports = typeDefs;
