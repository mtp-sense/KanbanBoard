import React, { useContext } from "react";
import { TaskCountContext } from "./TaskCountContext";

function Desktop() {
  //Use context for setting up the task count to be displayed on the Desktop component -
  const {
    totalTasks,
    setTotalTasks,
    pendingTasks,
    setPendingTasks,
    completedTasks,
    setCompletedTasks,
  } = useContext(TaskCountContext);
  return (
    <div>
      <h2>Desktop</h2>
      <h3>Total tasks: {totalTasks}</h3>
      <h3>Pending tasks: {pendingTasks}</h3>
      <h3>Completed tasks: {completedTasks}</h3>
    </div>
  );
}

export default Desktop;
