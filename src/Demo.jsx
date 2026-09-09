import React, { useRef, useState } from "react";

const Demo = () => {

  const inputFileRef=useRef(null)

  const [selectedFiles,setSelectedFiles]=useState([])

  const handleClick=()=>{
    inputFileRef.current.click()
    inputFileRef.current.value=""

  }

  return <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
    <input ref={inputFileRef} type="file" hidden onChange={(e)=>setSelectedFiles(e.target.files)}/>
    <button onClick={handleClick}>Browse Files</button>
  </div>;
};

export default Demo;
