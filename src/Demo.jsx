import React, { useRef, useState } from "react";

const Demo = () => {
  const inputFileRef = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState([]);


  const handleSelect=()=>{
    
  }

  const handleClick = () => {
    inputFileRef.current.click();
    inputFileRef.current.value = "";
  };

  return (
    <div>
      <input onChange={handleSelect} hidden type="file" ref={inputFileRef} multiple />
      <button onClick={handleClick}>Browse Files</button>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px dashed",
            height: "50vh",
            width: "80vw",
            margin: "auto",
            marginTop: "2rem",
          }}
        >
          Drop your files here
        </div>
        <div>
          <ul>
            {selectedFiles.map((file) => {
              return <li>{file.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;
