import React from "react";
import { TodoInput, TodoItem } from "../components";
import { useAppContext } from "./../context/Context";

const Todo = () => {
  // todos item array destructuring from AppContext
  const {
    appData: {
      todo: { completedTodos, totalTodos, todos },
    },
    setAppData,
  } = useAppContext();
  return (
    <div>
      {/* todo Input */}
      <TodoInput />
      {/* todos list */}
      {todos.length === 0 ? (
        <h1 style={{ margin: "auto", textAlign: "center" }}>No Todo</h1>
      ) : (
        todos.map((el, index) => {
          return (
            <TodoItem
              key={index}
              name={el.name}
              status={el.status}
              index={index}
              setAppData={setAppData}
            />
          );
        })
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "25px",
        }}
      >
        <span>Completed Todos: {completedTodos}</span>
        <span> Total Todos: {totalTodos}</span>
      </div>
    </div>
  );
};

export default Todo;
