import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./Report.css";

function AllottedTasks() {
  const [tasks2, setTasks2] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "allottedTask"),
      orderBy("submitBy", "desc")
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
            <h4>Submit By: {task.submitBy?.toDate().toString()}</h4>
          </div>
        ) : null
      )}
    </div>
  );
}

export default AllottedTasks;
