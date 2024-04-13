import React from "react";
import "./Home.css";

import PomodoroTimer from "../timer/pomo";
import Customize from "../customize/customize";
import Report from "../report/Report";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../navbar/navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <PomodoroTimer />
      </>
    ),
  },
  {
    path: "/customize",
    element: (
      <>
        <Navbar />
        <Customize />
      </>
    ),
  },
  {
    path: "/report",
    element: (
      <>
        <Navbar />
        <Report />
      </>
    ),
  },
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
