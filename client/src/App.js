import "./App.css";
import { GET_TODOS } from "./graphql/Query";
import { useQuery } from "@apollo/client";
import AddTodos from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <hr />
      <AddTodos />
      <div className="list-group mt-4">
        {data &&
          data.getTodos.map((todo) => (
            <TodoList
              title={todo.title}
              description={todo.description}
              email={todo.email}
              key={todo.id}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
