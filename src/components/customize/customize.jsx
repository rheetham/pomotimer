import React from "react";
import "./Customize.css";
import { Link } from "react-router-dom";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
function Customize() {
  return (
    <form className="updateForm">
      <div className="updateHeader">
      <h1 className="updateTitle">
        Update
      </h1>
        <Link to="/"><HighlightOffIcon className="close" /></Link>
      </div>
      <hr />
      
      <div className="updateBody">
      <label className="input">
        Focus Time
        <input type="text" name="focusTime" className="updateFocus" />
      </label>
      <label className="input">
        Break Time
        <input type="text" name="breakTime" className="updateBreak" />
      </label>
      <button className="input update btn btn-success">Update</button>
      </div>
    </form>
  );
}

export default Customize;
