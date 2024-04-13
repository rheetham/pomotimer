import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-router-dom";
import "../homePage/Home.css";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="head">
      <Link to="/timer">
        <div className="logo icon">
          <TimelineIcon fontSize="large" />
          <h1>Zenith</h1>
        </div>
      </Link>

      <div className="push">
        <div className="reports icon">
          <Link to="/report">
            <AssessmentIcon fontSize="large" />
          </Link>
        </div>
        <div className="login icon">
          <AccountCircleIcon fontSize="large" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
