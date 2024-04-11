import React from "react";
import "./Report.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function Report() {
  return (
    <div className="Reports">
      <div>
        <HighlightOffIcon className="close" />
      </div>
      <h1>
        Reports
        <hr />
      </h1>

      <label className="frame">
        <h2>Focus Hours</h2>
        <div className="focusHours">21</div>
      </label>
      <label className="frame">
        <h2>Tasks Completed</h2>
        <div className="tasksCompleted">17</div>
      </label>
    </div>
  );
}

export default Report;
