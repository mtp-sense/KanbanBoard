import "./App.css";
import TaskManagement from "./components/TaskManagement";
import React, { useState } from "react";
import Desktop from "./components/Desktop";
import {
  TaskCountContext,
  TaskCountContextProvider,
} from "./components/TaskCountContext";

function App() {
  return (
    <TaskCountContextProvider>
      <div className="App">
        <h2>Kanban Board</h2>
        <Desktop />
        <TaskManagement />
      </div>
    </TaskCountContextProvider>
  );
}

export default App;
