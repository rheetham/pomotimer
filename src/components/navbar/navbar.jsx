import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import LogoutIcon from "@mui/icons-material/Logout";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
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

      <div className="chatRoom">
        <Link to="/chats"> Chats</Link>
      </div>
      <div className="push">
        <div className="login icon">
          <Link to="/allottedTasks">
            <EditCalendarIcon fontSize="large" />
          </Link>
        </div>
        <div className="reports icon">
          <Link to="/createdTasks">
            <ReceiptLongIcon fontSize="large" />
          </Link>
        </div>
        <div className="login icon">
          <LogoutIcon fontSize="large" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
