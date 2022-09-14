import React, { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { ADD_TODO } from "../graphql/Mutation";

const AddTodos = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    email: "",
  });

  const { title, description, email } = todo;

  //const [addTodo] = useMutation(ADD_TODO);
  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email address"
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
