import React, { useRef } from "react";

const Demo = () => {

  const inputFileRef=useRef(0)

  return <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
    <input type="file" hidden/>
    <button>Browse Files</button>
  </div>;
};

export default Demo;
