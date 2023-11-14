import { useState } from "react";

import "./App.css";

import TodoForm from "./components/TodoForms/TodoForms";
import TodoItens from "./components/TodoItens/TodoItens";
import SearchTodo from "./components/SearchTodo/SearchTodo";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import Imagen from "../src/assets/Digitaltools-amico.svg";
import Imagen1 from "../src/assets/Task-bro.svg";

function App() {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    

    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );

    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    //
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
      <div className="app">
        <h1>Lista de Tarefas</h1>
        <div className="imagens">
          {" "}
          <img src={Imagen} alt="img-fundo"className="imagen0" />
        </div>
        <TodoForm addTodo={addTodo} />

        <div className="todo-list">
          {todos
            .filter((todo) =>
              filter === "All"
                ? true
                : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
            )
            .filter((todo) =>
              todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
              sort === "Asc"
                ? a.text.localeCompare(b.text)
                : b.text.localeCompare(a.text)
            )
            .map((todo) => (
              <TodoItens
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            ))}
        </div>
        <SearchTodo search={search} setSearch={setSearch} />
        <TodoFilter filter={filter} setFilter={setFilter} setSort={setSort} />
      </div>
    </>
  );
}

export default App;
