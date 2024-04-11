import React, { useState } from "react";
import "./Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import TimelineIcon from "@mui/icons-material/Timeline";
import PomodoroTimer from "../timer/pomo";
import Customize from "../customize/customize";
import Report from "../report/Report";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><div className="head">
        <div className="logo icon">
          <TimelineIcon fontSize="large" />
          <h1>Zenith</h1>
        </div>
        <div className="push">
          <div className="reports icon">
            <Link to="/report"><AssessmentIcon fontSize="large" /></Link>
          </div>
          <div className="login icon">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div><PomodoroTimer /></>,
  },
  {
    path: "/customize",
    element: <><div className="head">
        <div className="logo icon">
          <TimelineIcon fontSize="large" />
          <h1>Zenith</h1>
        </div>
        <div className="push">
          <div className="reports icon">
            <Link to="/report"><AssessmentIcon fontSize="large" /></Link>
          </div>
          <div className="login icon">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div><Customize /></>,
  },
  {
    path: "/report",
    element: <><div className="head">
        <div className="logo icon">
          <TimelineIcon fontSize="large" />
          <h1>Zenith</h1>
        </div>
        <div className="push">
          <div className="reports icon">
            <Link to="/report"><AssessmentIcon fontSize="large" /></Link>
          </div>
          <div className="login icon">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div><Report /></>
  }
]);

function Home() {
  return (
    <div className="home">
      <div className="mainBody">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default Home;
