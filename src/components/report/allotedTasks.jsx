import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./allotedtasks.css";
import Navbar from "../navbar/navbar";

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
    <>
    <Navbar />
    <div className="report">
      <div className="allottedTitle">Allotted Tasks</div>
      {tasks2.map((task, index) =>
        task.userName === localStorage.getItem("name") ? (
          <div key={index} className="taskDetails">
            <div className="taskNameTitle"><span className="tn">Task Name: </span>{task.taskName}</div>
            <div><span  className="ca">Submit By: </span>{task.submitBy?.toDate().toString()}</div>
          </div>
        ) : null
      )}
    </div>
  </>
  );
}

export default AllottedTasks;
