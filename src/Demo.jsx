import React, { useEffect, useRef, useState } from "react";

const useDemo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const indexRef = useRef(0);

  const statuses = ["active", "ofline", "unKnown", "inactive"];

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setCurrentStatus(statuses[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % statuses.length;
    }, 1200);

    return () => clearInterval(intervalRef);
  },[]);

  return (
    <>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <p>{currentStatus}</p>
    </>
  );
};

export default useDemo;
