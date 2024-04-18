import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./createdTasks.css"
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

function CreatedTasks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "createdTasks"),
      orderBy("CreatedAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = [];
      snapshot.forEach((doc) => {
        taskList.push(doc.data());
      });
      setTasks(taskList);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
    <Navbar />
    <div>
      <div className="report">
        <div className="reportHeader">
        <div className="createdTasksTitle">
          <div className="selectTasksText">Created Tasks</div>
        </div>
        <div className="completedTasksTitle">
          <div className="otherTasksText"><Link to="/completedTasks"> Completed Tasks</Link></div>
        </div>
        </div>
        {tasks.map((task, index) =>
          task.userName === localStorage.getItem("name") ? (
            <div key={index} className="taskDetails">
              <div className="taskNameTitle">Task Name: {task.taskName}</div>
              <div>Created At: {task.CreatedAt?.toDate().toString()}</div>
            </div>
          ) : null
        )}
      </div>
    </div>
    </>
  );
}

export default CreatedTasks;
