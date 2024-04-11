import React from "react";
import "./Report.css";

function Report() {
    return (
        <div className="Reports">
            <h1>
              Reports
                <hr />
            </h1>
            <label className="frame">
                <h2>Focus Hours</h2>
                <div className="focusHours">
                  21
                </div>
            </label>
            <label className="frame">
                <h2>Tasks Completed</h2>
                <div className="tasksCompleted">
                  17
                </div>
            </label>
        </div>
    );
}

export default Report;
