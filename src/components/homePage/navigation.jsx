import React, { useState } from "react";
import Report from "../report/Report";
import PomodoroTimer from "../timer/pomo";
import Customize from "../customize/customize";

const Navigation = () => {
  const [activeComponent, setActiveComponent] = useState("component1");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <button onClick={() => handleComponentChange("component1")}>
        Component 1
      </button>
      <button onClick={() => handleComponentChange("component2")}>
        Component 2
      </button>
      <button onClick={() => handleComponentChange("component3")}>
        Component 3
      </button>

      {activeComponent === "component1" && <Customize />}
      {activeComponent === "component2" && <PomodoroTimer />}
      {activeComponent === "component3" && <Report />}
    </div>
  );
};

export default Navigation;
