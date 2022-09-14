const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date
  type Todo {
    id: ID!
    title: String!
    description: String!
    date: Date
  }
  type Query {
    getTodos: [Todo!]!
  }
`;

module.exports = typeDefs;
