import React, { useRef, useState } from "react";

const Demo = () => {
  const [files, setFiles] = useState([]);
  const inputFileRef = useRef(null);

  const handleSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const fileData = selectedFiles.map((file) => {
      return { name: file.name };
    });

    setFiles((prev) => [...prev, ...fileData]);
  };

  const handleClick = () => {
    inputFileRef.current.click();
    inputFileRef.current.value = "";
  };

  const handleDefaults=(e)=>{
    e.preventDefault()
  }


  return (
    <div>
      <input
        type="file"
        ref={inputFileRef}
        onChange={handleSelect}
        hidden
        multiple
      />
      <button onClick={handleClick}>Browse Files</button>

      <div
        style={{
          display: "flex",
          height: "50vh",
          width: "90vw",
          alignItems: "center",
          justifyContent: "center",
          border: "1px dashed",
          margin: "auto",
          marginTop: "40px",
          
        }}
        onDragEnter={handleDefaults}
        onDragOver={handleDefaults}
        onDrop={}

      >
        Drop Your Files Here
      </div>

      <div>
        {files.map((file, index) => {
          return <li key={index}>{file.name}</li>;
        })}
      </div>
    </div>
  );
};

export default Demo;
