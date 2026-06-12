import { useRef, useState } from "react";

const Demo = () => {

  const [files,setFiles]=useState([])

const inputFileRef=useRef(null)

const handleSelect=()=>{
  
}

  return (
    <div>
      <h1>Hello</h1>
      <input onChange={handleSelect} value={files} ref={inputFileRef} hidden></input>
      <button>Browse Files</button>

      <div
        style={{
          height: "50vh",
          background: "gray-400",
          width: "80vw",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          border: "1px dashed",
          margin: "auto",
          marginTop:"40px"
        }}
      >
        Drop your files here
      </div>
    </div>
  );
};

export default Demo;
