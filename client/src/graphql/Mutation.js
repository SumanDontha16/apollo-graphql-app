import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($title: String!, $description: String!, $email: String!) {
    addTodo(title: $title, description: $description, email: $email) {
      id
      title
      description
      email
    }
`;
