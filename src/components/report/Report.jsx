import React, { useState } from "react";
import "./Report.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import "../homePage/Home.css";
function Report() {
  return (
    <>
      <Navbar />
      <div className="Reports">
        <div className="header">
          <h1 className="reportsTitle">Reports</h1>
          <Link to="/">
            <HighlightOffIcon className="close" />
          </Link>
        </div>

        <hr />

        <div className="reportsBody">
          <label className="frame">
            <h2>Focus Hours</h2>
            <div className="focusHours">21</div>
          </label>
          <label className="frame">
            <h2>Tasks Completed</h2>
            <div className="tasksCompleted">17</div>
          </label>
        </div>
      </div>
    </>
  );
}

export default Report;
