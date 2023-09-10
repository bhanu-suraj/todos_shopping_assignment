import React, { useState, useEffect } from "react";
import styles from "./../assets/styles/TodoInput.module.css";
import { useAppContext } from "./../context/Context";

const TodoInput = () => {
  const { appData, setAppData } = useAppContext();
  const [inputTodo, setInputTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setAppData((prev) => {
      return {
        ...prev,
        todo: {
          ...prev.todo,
          totalTodos: prev.todo.totalTodos + 1,
          todos: [...prev.todo.todos, { name: inputTodo, status: "pending" }],
        },
      };
    });
    setInputTodo("");
  };
  useEffect(() => {
    if (appData) localStorage.setItem("AppData", JSON.stringify(appData));
  }, [appData]);

  return (
    <form onSubmit={handleSubmit} className={styles.add_todo}>
      <input
        type="text"
        className={styles.add_todo__input}
        placeholder="Todo Name..."
        required={true}
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button type="submit" className={styles.add_todo__button}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoInput;
