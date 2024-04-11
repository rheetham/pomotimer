import React from "react";
import "./Customize.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function Customize() {
  return (
    <form className="updateForm">
      <div>
        <HighlightOffIcon className="close" />
      </div>
      <h1>
        Update
        <hr />
      </h1>

      <label className="input">
        Focus Time
        <input type="text" name="focusTime" className="updateFocus" />
      </label>
      <label className="input">
        Break Time
        <input type="text" name="breakTime" className="updateBreak" />
      </label>
      <button className="input update btn btn-success">Update</button>
    </form>
  );
}

export default Customize;
