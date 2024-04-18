import React from "react";
import "./task.css";
import InsertTask from "./insertTask";
import AddTask from "./ongoingTask";
import { useState } from "react";

const Task = () => {
  const [content, setContent] = useState(false);

  const changeContent = () => {
    setContent(!content);
  };

  return (
    <div>
      {content ? <InsertTask /> : <AddTask />}
      <p onClick={changeContent}>
        {content ? null : <p className="addTask">Add Task?</p>}
      </p>
    </div>
  );
};

export default Task;
