import React from "react";

import { Link } from "react-router-dom";
import "./logout.css";
import Navbar from "../navbar/navbar";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useNavigate } from "react-router-dom";

function Logout() {
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
    <>
      <Navbar />
      <div className="LogoutForm">
        <div>
          <h1>Do you want to Logout ?</h1>
        </div>
        <hr />
        <div>
          <Link to="/">
            <button
              className="input update btn btn-success"
              onClick={handleLogout}
            >
              Yes
            </button>
          </Link>
          <Link to="/timer">
            <button className="input update btn btn-success logout">No</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Logout;
