import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/dist";
import Report from "./components/report/Report";
import ToDoList from "./components/toDoList/toDolist";
import Home from "./components/homePage/Home";
import Auth from "./components/auth";
import PomodoroTimer from "./components/timer/pomo";
import "./components/homePage/Home.css";
import Customize from "./components/customize/customize";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/timer" element={<PomodoroTimer />} />
          <Route path="/report" element={<Report />} />
          <Route path="/customize" element={<Customize />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
