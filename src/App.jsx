import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom/dist";
import Report from "./components/report/Report";
import Auth from "./components/auth";
import PomodoroTimer from "./components/timer/pomo";
import "./components/homePage/Home.css";
import Customize from "./components/customize/customize";
import DisplayReport from "./components/report/createdTasks";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/timer" element={<PomodoroTimer />} />
          <Route path="/report" element={<DisplayReport />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
