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
    <Navbar className="stick-nav"/>
    <div className="chatRoom">
      <div className="chatRoomTitle">Chat Room</div>
      <div className="chatGroup">
      {tasks2.map((chats, index) =>
        chats.userName === localStorage.getItem("name") ? (
          <div key={index} className="chatDetails">
            <div className="mainUserName commonstyle">You</div>
            <div className="chatMsg">{chats.chat}</div>
          </div>
        ) : <div key={index} className="chatDetails">
            <div className="otherUserName commonstyle">{(chats.userName).slice(1,-1)}</div>
            <div className="chatMsg">{chats.chat}</div>
          </div>
      )}
      </div>
        <SendChat className = "stick-send"/>
    </div>
  </>
  );
}

export default Chat;
