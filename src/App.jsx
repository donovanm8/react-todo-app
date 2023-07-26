import React, { useState } from "react";
import Todo from "./components/Todo";
import TodoComposer from "./components/TodoComposer";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: "Learn React & React-Router",
      completed: false,
    },
    {
      id: 2,
      label: "Learn React Query & Tailwind",
      completed: false,
    },
    {
      id: 3,
      label: "Learn TypeScript & Firebase",
      completed: false,
    },
  ]);

  const handleUpdateTodo = (newTodo) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo
    );
    setTodos(updatedTodo);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };
  return (
    <div className="container">
      <h1 className="title">To-Do App</h1>
      <TodoComposer handleAddTodo={handleAddTodo}/>
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

// todo add an elemet we use the spread operator
// to remove we use the filter method
// to update we use map
