import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [files, setFiles] = useState(()=>{
    const files=localStorage.getItem("files")
  });
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
    // ***
    inputFileRef.current.value = "";
  };

  const handleDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const fileData = droppedFiles.map((file) => {
      return { name: file.name };
    });

    setFiles((prev) => [...prev, ...fileData]);
  };

  return (
    <div>
      <h2>Hello !</h2>
      <input
        type="file"
        hidden
        ref={inputFileRef}
        multiple
        onChange={handleSelect}
      />
      <button onClick={handleClick}>Browse Files</button>
      <div
        onDragEnter={handleDefaults}
        onDragOver={handleDefaults}
        onDrop={handleDrop}
        style={{ padding: "100px", border: "1px dashed", margin: "10px" }}
      >
        Drop Your files here
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
