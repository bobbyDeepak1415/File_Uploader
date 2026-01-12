import React, { useEffect, useRef, useState } from "react";

const useDemo = () => {

  const [currentStatus,setCurrentStatus]=useState("")

  const statuses=["active","ofline","unKnown","inactive"]

  

  return (
    <>
    <h1>Hello</h1>
    <h1>Hello</h1>
    <h1>Hello</h1>
    <p>{currentStatus}</p>
    </>
  )


};

export default useDemo;
