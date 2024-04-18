import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./allotedtasks.css";

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
      <div className="allottedTitle">Allotted Tasks</div>
      {tasks2.map((task, index) =>
        task.userName === localStorage.getItem("name") ? (
          <div key={index} className="taskDetails">
            <div className="taskNameTitle">Task Name: {task.taskName}</div>
            <div>Submit By: {task.submitBy?.toDate().toString()}</div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default AllottedTasks;
