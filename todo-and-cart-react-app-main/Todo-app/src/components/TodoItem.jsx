import React from "react";
import styles from "./../assets/styles/TodoItem.module.css";

const TodoItem = ({ name, status, index, setAppData }) => {
  // this function work is changing todo item status
  const handleChange = (e) => {
    setAppData((prev) => {
      const updatedTodos = prev.todo.todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            status: e.target.checked ? "completed" : "pending",
          };
        }
        return todo;
      });

      return {
        ...prev,
        todo: {
          ...prev.todo,
          completedTodos: e.target.checked
            ? prev.todo.completedTodos + 1
            : prev.todo.completedTodos - 1,
          todos: updatedTodos,
        },
      };
    });
  };

  // this function work is remove the todo item
  const handleRemove = (e) => {
    setAppData((prev) => {
      const todo = prev.todo.todos[index];
      const updatedTodos = prev.todo.todos.filter((todo, i) => {
        if (i !== index) return todo;
      });
      return {
        ...prev,
        todo: {
          ...prev.todo,
          completedTodos:
            todo.status === "completed"
              ? prev.todo.completedTodos - 1
              : prev.todo.completedTodos - 0,
          totalTodos: prev.todo.totalTodos - 1,
          todos: updatedTodos,
        },
      };
    });
  };
  return (
    <div className={styles.container}>
      <input
        className={styles.container__input}
        type="checkbox"
        checked={status === "completed" ? true : false}
        onChange={handleChange}
      />
      <span
        className={
          status === "completed"
            ? styles.container__name_completed
            : styles.container__name
        }
      >
        {name}
      </span>
      <button onClick={handleRemove} className={styles.container__btn}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
