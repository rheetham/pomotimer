import React, { useState } from "react";
import "./Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
//import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import Navigation from "./navigation";
import TimelineIcon from "@mui/icons-material/Timeline";
import PomodoroTimer from "../timer/pomo";
import DisplayList from "../toDoList/display";
import Customize from "../customize/customize";
import Report from "../report/Report";

function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  // const handleMainPageClick = () => setCurrentPage(0);
  const handleReportsPageClick = () => setCurrentPage(1);
  // Add similar handlers for other pages

  return (
    <div className="home">
      <div className="head">
        <div className="logo icon">
          <TimelineIcon fontSize="large" />
          <h1>Zenith</h1>
        </div>
        <div className="push">
          <div className="reports icon">
            <AssessmentIcon fontSize="large" onClick={handleReportsPageClick} />
          </div>
          <div className="login icon">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="mainBody">
        {currentPage === 0 && <PomodoroTimer />}
        {currentPage === 1 && <Report />}
      </div>
      <div className="todoList">
        <div className="addTask">
          <DisplayList />
        </div>
      </div>
    </div>
  );
}

export default Home;
