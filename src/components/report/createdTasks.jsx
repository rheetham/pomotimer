import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./Report.css";
import { Link } from "react-router-dom";

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
    <div>
      <div className="report">
        <div className="createdTasksTitle">
          Created Tasks
        </div>
        <div className="completedTasksTitle">
          <Link to="/completedTasks"> Completed Tasks</Link>
        </div>
        {tasks.map((task, index) =>
          task.userName === localStorage.getItem("name") ? (
            <div key={index} className="task">
              <h3>Task Name: {task.taskName}</h3>
              <h4>Created At: {task.CreatedAt?.toDate().toString()}</h4>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default CreatedTasks;
