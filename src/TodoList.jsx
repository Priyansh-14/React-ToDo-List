import { useState, useEffect } from "react";
import List from "@mui/material/List";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
const initialTodos = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  return data ? data : [];
};

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const addTodo = (t) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: crypto.randomUUID(),
          text: t,
          completed: false,
        },
      ];
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          handleCross={() => removeTodo(todo.id)}
          toggle={() => toggleTodo(todo.id)}
          key={todo.id}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
  );
}
