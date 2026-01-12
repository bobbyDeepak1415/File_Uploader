import React, { useEffect, useRef, useState } from "react";

const useDemo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const status = ["active", "offline", "busy", "unKnown"];


const indexRef=useRef(0)

useEffect(()=>{

  const interValId= setInterval(() => {
    setCurrentStatus(status[indexRef.current]);
    indexRef.current = (indexRef.current + 1) % status.length;
  }, 1000);

  return ()=>clearInterval(interValId)

})

  return <p>{currentStatus}</p>;
};

export default useDemo;
