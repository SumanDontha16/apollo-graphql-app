import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation addTodo($title: String, $description: String, $email: String) {
    addTodo(title: $title, description: $description, email: $email) {
      id
      title
      description
      email
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo(
    $id: ID!
    $title: String!
    $description: String!
    $email: String!
  ) {
    updateTodo(
      id: $id
      title: $title
      description: $description
      email: $email
    ) {
      id
      title
      description
      email
    }
  }
`;

// Delete Todo
export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;
