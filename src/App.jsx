import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/dist";

import Auth from "./components/auth";
import PomodoroTimer from "./components/timer/pomo";
import "./components/homePage/Home.css";

import AllottedTasks from "./components/report/allotedTasks";
import CompletedTasks from "./components/report/completedTasks";
import CreatedTasks from "./components/report/createdTasks";
import Chat from "./components/globalchat/chat";
import Logout from "./components/auth/logoutConfirm";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/timer" element={<PomodoroTimer />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/createdTasks" element={<CreatedTasks />} />
          <Route path="/completedTasks" element={<CompletedTasks />} />
          <Route path="/allottedTasks" element={<AllottedTasks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
