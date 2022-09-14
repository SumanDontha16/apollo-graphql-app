import React from "react";

const TodoList = ({ title, description, email }) => {
  return (
    <>
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex gap-3 py-3"
      >
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h5 className="mb-1">{title}</h5>
            <small> {description}</small>
          </div>
          <small className="opacity-50 text-nowrap">{email}</small>
        </div>
      </a>
    </>
  );
};

export default TodoList;
