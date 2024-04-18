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
import InsertTask from "./insertTask";

async function deleteLatestDocument() {
  const taskRef = collection(db, "currentTask");
  const latestQuery = query(taskRef, orderBy("userName", "desc"), limit(1));
  const latestSnapshot = await getDocs(latestQuery);

  latestSnapshot.forEach((doc) => {
    deleteDoc(doc.ref);
  });
}

function AddTask() {
  const [content, setContent] = useState(true);

  const changeContent = () => {
    setContent(false);
  };
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

  return content ? (
    <div>
      <div className="addTask">
        <div>
          {tasks.map((task, index) =>
            task.userName === localStorage.getItem("name") ? (
              <div key={index} className="task">
                <div className="taskTitle"> {task.taskName}</div>
                <div>
                  <button className="doneButton" onClick={handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="addTask" onClick={changeContent}>
        Add Task
      </div>
    </div>
  ) : (
    <InsertTask />
  );
}

export default AddTask;
