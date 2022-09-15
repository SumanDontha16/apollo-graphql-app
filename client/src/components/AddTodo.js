import React, { useState, useRef, useEffect, useContext } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO, UPDATE_TODO } from "../graphql/Mutation";
import { GET_TODOS } from "../graphql/Query";
import { TodoContext } from "../TodoContext";

const AddTodos = () => {
  const { selectedId, setSelectedId } = useContext(TodoContext);
  const [updateTodo] = useMutation(UPDATE_TODO);

  const inputAreaRef = useRef();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    email: "",
  });

  //const { title, description, email } = todo;
  const [addTodo] = useMutation(ADD_TODO);

  useEffect(() => {
    const checkIfClcikedOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        //console.log("clicked outside");
        setSelectedId(0);
      } else {
        // console.log("clicked inside");
      }
    };
    document.addEventListener("mousedown", checkIfClcikedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClcikedOutside);
    };
  }, [setSelectedId]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (selectedId === 0) {
      addTodo({
        variables: {
          title: todo.title,
          description: todo.description,
          email: todo.email,
        },
        refetchQueries: [GET_TODOS, "getTodos"],
      });
      setTodo({
        title: "",
        description: "",
        email: "",
      });
    } else {
      updateTodo({
        variables: {
          id: selectedId,
          title: todo.title,
          description: todo.description,
          email: todo.email,
        },
        refetchQueries: [GET_TODOS, "getTodos"],
      });
      setTodo({
        title: "",
        description: "",
        email: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="mt-4" ref={inputAreaRef}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            value={todo.title}
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
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email address"
            value={todo.email}
            onChange={(e) => setTodo({ ...todo, email: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {selectedId === 0 ? "Add Todo" : "Update Todo"}
        </button>
      </form>
    </>
  );
};

export default AddTodos;
