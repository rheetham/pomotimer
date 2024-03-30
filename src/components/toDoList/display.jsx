import React from "react";

import ToDoList from "./toDolist";
import { useState } from "react";

import Task from "./task";

const DisplayList = () => {
  const [content, setContent] = useState(false);

  const changeContent = () => {
    setContent(true);
  };

  return (
    <div>
      <p onClick={changeContent}>{content ? <ToDoList /> : <Task />}</p>
    </div>
  );
};
export default DisplayList;
