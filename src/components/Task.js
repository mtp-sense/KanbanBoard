import React from "react";

function Task(props) {
  const {
    taskname,
    taskpriority,
    taskdeadline,
    backwardBtnHandler,
    forwardBtnHandler,
    deleteBtnHandler,
  } = props;
  return (
    <div className="card task">
      <h6>{taskname}</h6>
      <h6>{taskpriority}</h6>
      <h6>{taskdeadline}</h6>
      <button
        onClick={() => backwardBtnHandler(taskname)}
        className="icon-only"
      >
        <i className="material-icons">B</i>
      </button>
      <button onClick={() => forwardBtnHandler(taskname)} className="icon-only">
        <i className="material-icons">F</i>
      </button>
      <button onClick={() => deleteBtnHandler(taskname)} className="icon-only">
        <i className="material-icons">D</i>
      </button>
    </div>
  );
}

export default Task;
