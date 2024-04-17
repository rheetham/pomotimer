import React from "react";
import "./task.css";
import InsertTask from "./insertTask";
import AddTask from "./ongoingTask";
import { useState } from "react";

const Task = () => {
  const [content, setContent] = useState(false);

  const changeContent = () => {
    setContent(true);
  };

  return (
    <div>
      <p onClick={changeContent}>{content ? <InsertTask /> : <AddTask />}</p>
    </div>
  );
};

export default Task;
