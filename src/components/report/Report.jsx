import React from "react";
import "./Report.css";
function Report() {
  return (
    <div className="reports">
      <h1 className="reportTitle">Summary</h1>
      <hr></hr>

      <div className="totalHoursSpent component">
        <h1 className="totalHoursTitle">Total Hours Spent</h1>

        <div className="totalHoursComponents">
          <div className="total hoursSpent">
            <span className="title">This Week</span>
            <span className="hours">5</span>
          </div>

          <div className="total hoursSpent">
            <span className="title">This Month</span>
            <span className="hours">23</span>
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="avgHoursSpent component">
        <h1 className="avgHoursTitle">Average Hours Spent</h1>

        <div className="avgHoursComponents">
          <div className="avg hoursSpent">
            <span className="title">Daily</span>
            <span className="hours">3</span>
          </div>

          <div className="avg hoursSpent">
            <span className="title">Weekly</span>
            <span className="hours">21</span>
          </div>

          <div className="avg hoursSpent">
            <span className="title">Monthly</span>
            <span className="hours">98</span>
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="totalTasksCompleted component">
        <h1 className="tasksCompletedTitle">Total Tasks Completed</h1>
        <h2 className="tasksCompleted">27</h2>
      </div>
    </div>
  );
}

export default Report;
