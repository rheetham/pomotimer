import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./completedTasks.css";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";

function CompletedTasks() {
  const [tasks2, setTasks2] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "completedTasks"),
      orderBy("finishedAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskList = [];
      snapshot.forEach((doc) => {
        taskList.push(doc.data());
      });
      setTasks2(taskList);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <>
    <Navbar />
    <div className="report">
      <div className="reportHeader">
      <div className="createdTasksTitle">
        <div className="otherTasksText"><Link to="/createdTasks">Created Tasks</Link></div>
      </div>
      <div className="completedTasksTitle">
        <div className="selectTasksText">Completed Tasks</div>
      </div>
      </div>
      {tasks2.map((task, index) =>
        task.userName === localStorage.getItem("name") ? (
          <div key={index} className="taskDetails">
            <div className="taskNameTitle">Task Name: {task.taskName}</div>
            <div>Finished At: {task.finishedAt?.toDate().toString()}</div>
          </div>
        ) : null
      )}
    </div>
    </>
  );
}

export default CompletedTasks;
