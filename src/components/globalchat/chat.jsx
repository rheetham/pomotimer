import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase-config";
import "./chat.css";
import Navbar from "../navbar/navbar";
import SendChat from "./send";

function Chat() {
  const [tasks2, setTasks2] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "chats"),
      orderBy("sentAt", "asc")
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
      <div className="allottedTitle">Chat Room</div>
      {tasks2.map((chats, index) =>
        chats.userName === localStorage.getItem("name") ? (
          <div key={index} className="taskDetails">
            <div className="userName">{chats.userName}</div>
            <div className="taskNameTitle">{chats.chat}</div>
          </div>
        ) : <div key={index} className="taskDetails">
            <div className="userNameOther">{chats.userName}</div>
            <div className="taskNameTitle">{chats.chat}</div>
          </div>
      )}
        <SendChat />
    </div>
  </>
  );
}

export default Chat;
