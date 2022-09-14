import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GetAllTodos {
    getTodos {
      id
      title
      description
      email
    }
  }
`;
