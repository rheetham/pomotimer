import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./Report.css";

function DisplayReport() {
  const [tasks, setTasks] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "tasks"), (snapshot) =>
        setTasks(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );
  return (
    <div>
      <h2>Details</h2>
      <div className="report">
        {tasks.map((task, index) =>
          task.userName === localStorage.getItem("name") ? (
            <div key={index} className="task">
              <h3>Task Name: {task.taskName}</h3>
              <h4>Created At: {task.CreatedAt?.toDate().toString()}</h4>
              <h4>Username : {task.userName}</h4>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default DisplayReport;
