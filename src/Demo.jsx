import React, { useRef, useState } from "react";

let index = 0;
const useDemo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const status = ["active", "offline", "busy", "unKnown"];

  const IndexRef=useRef(0)


  setInterval(() => {
    setCurrentStatus(status[index]);
    index = (index + 1) % status.length;
  }, 1000);

  return <p>{currentStatus}</p>;
};

export default useDemo;
