import React, { FC } from "react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task ..."></input>
          <input type="number" placeholder="Dealine (in days)..."></input>
        </div>

        <button>Add task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
};

export default App;
