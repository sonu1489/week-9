import React from "react";
import "./App.css";
// import ContextAPI from "./component/context";
// import Index from "./component/useReducer/useReducer";
import SearchUsers from "../src/component/HOC/index";
import SearchTodos from "./component/HOC/TodoList";
function App() {
  return (
    <div className="container">
      {/* <ContextAPI /> */}
      {/* <Index/> */}

      <div className="section">
        <SearchUsers />
        <SearchTodos />
      </div>
    </div>
  );
}

export default App;
