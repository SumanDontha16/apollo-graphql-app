import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($title: String!, $description: String!, $email: String!) {
    addTodo(title: $title, description: $description, email: $email) {
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
