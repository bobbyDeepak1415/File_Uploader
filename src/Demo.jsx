import React, { useEffect, useRef, useState } from "react";

const useDemo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  const statuses=["offline","online","unKnown","loggedOut"]

  const indexRef=useRef(0)

  useEffect(()=>{
setInterval(()=>{
// setCurrentStatus(statuses[indexRef])
// indexRef=(indexRef+1)%statuses.length
},1200)
  },[])

  
  return <p>{currentStatus}</p>

};

export default useDemo;
