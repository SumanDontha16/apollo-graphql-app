/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../graphql/Mutation";
import { GET_TODOS } from "../graphql/Query";
import { TodoContext } from "../TodoContext";

const TodoList = ({ todo }) => {
  const { selectedId, setSelectedId } = useContext(TodoContext);
  const { id, title, description, email } = todo;
  const [deleteTodo] = useMutation(DELETE_TODO);

  const removeTodo = (id) => {
    deleteTodo({
      variables: {
        id,
      },
      refetchQueries: [GET_TODOS, "getTodos"],
    });
  };

  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex gap-3 py-3"
        onClick={() => setSelectedId(id)}
      >
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h5 className="mb-1">{title}</h5>
            <small> {description} </small>
            <small className="opacity-50 text-nowrap">{email}</small>
          </div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => removeTodo(id)}
          >
            Delete
          </button>
        </div>
      </a>
    </>
  );
};

export default TodoList;
