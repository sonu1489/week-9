import React from "react";
import HOC from "./hoc";

const TodoList = ({ data }) => {
  const renderTodos = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");
export default SearchTodos;
