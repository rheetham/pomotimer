import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./Report.css";

function FinishedTasks() {
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
    <div className="report">
      {tasks2.map((task, index) =>
        task.userName === localStorage.getItem("name") ? (
          <div key={index} className="task">
            <h3>Task Name: {task.taskName}</h3>
            <h4>Finished At: {task.finishedAt?.toDate().toString()}</h4>
            <h4>Username : {task.userName}</h4>
          </div>
        ) : null
      )}
    </div>
  );
}

export default FinishedTasks;
