import React, { useState, useContext } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { TaskCountContext } from "./TaskCountContext";
let tsks = [
  { name: "Task1", stage: 0, priority: 1, deadline: "15Feb2022" },
  { name: "Task2", stage: 0, priority: 2, deadline: "15Feb2022" },
  { name: "Task3", stage: 1, priority: 3, deadline: "15Feb2022" },
  { name: "Task4", stage: 2, priority: 1, deadline: "15Feb2022" },
  { name: "Task5", stage: 3, priority: 2, deadline: "15Feb2022" },
  { name: "Task6", stage: 2, priority: 3, deadline: "15Feb2022" },
  { name: "Task7", stage: 3, priority: 1, deadline: "15Feb2022" },
];
const snames = ["Backlog", "To Do", "Ongoing", "Done"];

function TaskManagement() {
  const [stageNames, setStageNames] = useState(snames);
  const [tasks, setTasks] = useState(tsks);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");

  //Use context for setting up the task count to be displayed on the Desktop component -
  const {
    totalTasks,
    setTotalTasks,
    pendingTasks,
    setPendingTasks,
    completedTasks,
    setCompletedTasks,
  } = useContext(TaskCountContext);

  const setTaskCount = () => {
    const pendingTasks = tasks.filter((t) => t.stage === 2);
    const completedTasks = tasks.filter((t) => t.stage === 3);
    setTotalTasks(tasks.length);
    setPendingTasks(pendingTasks.length);
    setCompletedTasks(completedTasks.length);
  };
  //Set different task counts - Total tasks, pending tasks and completed tasks
  setTaskCount();

  const stages = [];
  //Initialize the array of stages.
  for (let i = 0; i < stageNames.length; i++) {
    stages.push([]);
  }
  //Put task as per their stages inside the stage array
  for (let task of tasks) {
    stages[task.stage].push(task);
  }

  const addTask = () => {
    if (title) {
      const ts = tasks;
      ts.push({
        name: title,
        stage: 0,
        priority: priority,
        deadline: deadline,
      });
      setTasks(ts);
    }
    setTitle("");
    setPriority("high");
    setDeadline("");
    //Update different task counts
    setTaskCount();
  };
  const backwardBtnHandler = (name) => {
    console.log(name);
    let ts = [];
    ts = tasks.map((t) => {
      if (t.name === name) {
        return {
          name: t.name,
          priority: t.priority,
          deadline: t.deadline,
          stage: t.stage === 0 ? 0 : t.stage - 1,
        };
      } else return t;
    });
    setTasks(ts);
    //Update different task counts
    setTaskCount();
  };
  const forwardBtnHandler = (name) => {
    let ts = [];
    ts = tasks.map((t) => {
      if (t.name === name) {
        return {
          name: t.name,
          priority: t.priority,
          deadline: t.deadline,
          stage: t.stage === 3 ? 3 : t.stage + 1,
        };
      } else return t;
    });
    setTasks(ts);
    //Update different task counts
    setTaskCount();
  };
  const deleteBtnHandler = (name) => {
    const ts = tasks.filter((t) => t.name !== name);
   setTasks(ts);
   //Update different task counts
   setTaskCount();
  };
  return (
    <div className="mt-50 layout-column justify-content-center align-items-center">
      <h2>Task Management</h2>
      <section className="mt-50 layout-row align-items-center justify-content-center">
        <AddTask
          taskTitle={title}
          onTaskTitleChange={setTitle}
          taskPriority={priority}
          onTaskPriorityChange={setPriority}
          taskDeadline={deadline}
          onTaskDeadlineChange={setDeadline}
          addTask={addTask}
        />
      </section>
      <div
        className="stages mt-80"
        style={{ display: "flex", justifyContent: "center", height: "100%" }}
      >
        {stages.map((tasks, i) => {
          return (
            <div className="card outlined ml-20 mt-0" key={`${i}`}>
              <div className="card-text">
                <h4>{stageNames[i]}</h4>
                <ul className="styled mt-50">
                  {tasks.map((task, index) => {
                    return (
                      <li className="slide-up-fade-in" key={`${i}${index}`}>
                        {/* <span>{task.name}</span>
                        <button
                          onClick={() => backwardBtnHandler(task.name)}
                          className="icon-only"
                        >
                          <i className="material-icons">B</i>
                        </button>
                        <button
                          onClick={() => forwardBtnHandler(task.name)}
                          className="icon-only"
                        >
                          <i className="material-icons">F</i>
                        </button>
                        <button
                          onClick={() => deleteBtnHandler(task.name)}
                          className="icon-only"
                        >
                          <i className="material-icons">D</i>
                        </button> */}
                        <Task
                          taskname={task.name}
                          taskpriority={task.priority}
                          taskdeadline={task.deadline}
                          backwardBtnHandler={() =>
                            backwardBtnHandler(task.name)
                          }
                          forwardBtnHandler={() => forwardBtnHandler(task.name)}
                          deleteBtnHandler={() => deleteBtnHandler(task.name)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskManagement;
