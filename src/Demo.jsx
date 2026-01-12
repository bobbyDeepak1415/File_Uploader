import React, { useState } from "react";

const useDemo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const status = ["active", "offline", "busy", "unKnown"];

  setInterval(() => {
    status.map((status) => {
     return setCurrentStatus(status);
    });
  }, 2000);

  return <p>{currentStatus}</p>
};

export default useDemo;

