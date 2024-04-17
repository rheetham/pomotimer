import React from "react";
import "./task.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase-config";

function InsertTask() {
  const name = localStorage.getItem("name");

  const handleNew = async () => {
    await addDoc(collection(db, "createdTasks"), {
      taskName: document.getElementsByName("taskname")[0].value,
      CreatedAt: serverTimestamp(),
      userName: name,
    });
    await addDoc(collection(db, "currentTask"), {
      taskName: document.getElementsByName("taskname")[0].value,
      userName: name,
    });
  };
  return (
    <div className="insertTask">
      <h3>Enter Task Name</h3>
      <form className="form-body">
        <input type="text" name="taskname" className="input-style" />
        <button className="taskButton" onClick={handleNew}>
          Add Task
        </button>
      </form>
    </div>
  );
}

export default InsertTask;
