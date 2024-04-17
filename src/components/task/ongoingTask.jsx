import React from "react";
import "./task.css";
import { getDocs, onSnapshot } from "firebase/firestore";
import {
  collection,
  deleteDoc,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { useEffect, useState } from "react";

async function deleteLatestDocument() {
  const taskRef = collection(db, "currentTask");
  const latestQuery = query(taskRef, orderBy("userName", "desc"), limit(1));
  const latestSnapshot = await getDocs(latestQuery);

  latestSnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
}

function Task() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "currentTask"), orderBy("userName", "desc"));
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
  const handleDelete = async () => {
    const name = localStorage.getItem("name");

    const taskRef = collection(db, "currentTask");
    const latestQuery = query(taskRef, orderBy("taskName", "desc"), limit(1));
    const latestSnapshot = await getDocs(latestQuery);
    await addDoc(collection(db, "completedTasks"), {
      taskName: latestSnapshot.docs[0].data().taskName,
      finishedAt: serverTimestamp(),
      userName: name,
    });
    console.log(name);
    deleteLatestDocument();
  };

  return (
    <div className="addTask">
      <div className="report">
        {tasks.map((task, index) =>
          task.userName === localStorage.getItem("name") ? (
            <div key={index} className="task">
              <h3>Task Name: {task.taskName}</h3>
            </div>
          ) : null
        )}
      </div>
      <div>
        <button onClick={handleDelete}>Completed?</button>
      </div>
    </div>
  );
}

export default Task;
