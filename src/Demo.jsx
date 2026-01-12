import React, { useEffect, useRef, useState } from "react";

const useDemo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const statuses = ["offline", "online", "unKnown", "loggedOut"];

  const indexRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStatus(statuses[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % statuses.length;
    }, 1200);

    return () => clearInterval(intervalId);
  }, []);

  return <p>{currentStatus}</p>;
};

export default useDemo;
