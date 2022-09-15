import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "../graphql/Mutation";
import { GET_TODOS } from "../graphql/Query";

const AddTodos = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    email: "",
  });

  const { title, description, email } = todo;
  const [addTodo] = useMutation(ADD_TODO);

  const onSubmit = () => {
    addTodo({
      variables: {
        title,
        description,
        email,
      },
      refetchQueries: [{ query: GET_TODOS }],
    });
    setTodo({
      title: "",
      description: "",
      email: "",
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          {/* <pre>{JSON.stringify(todo, null, "\t")}</pre> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setTodo({ ...todo, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddTodos;
