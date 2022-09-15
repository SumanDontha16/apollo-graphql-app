import "./App.css";
import { GET_TODOS } from "./graphql/Query";
import { useQuery } from "@apollo/client";
import AddTodos from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoContext } from "./TodoContext";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(0);
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <TodoContext.Provider value={{ selectedId, setSelectedId }}>
      <div className="container py-3">
        <h1 className="display-6 fw-normal p-1 pb-md-4 mx-auto border-bottom">
          Todo List 🚀
        </h1>
        <AddTodos />
        <div className="list-group mt-4">
          {data &&
            data.getTodos.map((todo) => <TodoList todo={todo} key={todo.id} />)}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
