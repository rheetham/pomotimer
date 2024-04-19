import React,{useState} from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import "./send.css";

function SendChat() {
  const name = localStorage.getItem("name");
  const [formValue, setFormValue] = useState(' ');
  
  const handleNew = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "chats"), {
      chat: document.getElementsByName("chat")[0].value,
      sentAt: serverTimestamp(),
      userName: name,
    });
    setFormValue(" ");
  };
  return (
    <div className="insertTask footer">
      <form className="form-body">
        <input type="text" name="chat" className="input-style msg-input" value={formValue} onChange={(e) => setFormValue(e.target.value)}  />
        <button className="taskButton" onClick={handleNew}>
          Send
        </button>
      </form>
    </div>
  );
}

export default SendChat;
