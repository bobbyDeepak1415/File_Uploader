import React, { useEffect, useRef, useState } from "react";

let index=0
const useDemo = () => {
  const [currentStatus, setCurrentStatus] = useState("");

  useEffect(()=>{
setInterval(()=>{
setCurrentStatus()
},1200)
  },[])

  
  return <p>{currentStatus}</p>

};

export default useDemo;
