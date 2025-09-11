import React, { useRef, useState } from "react";

export default function Demo(props) {
  const inputFileRef = useRef(0);
  const [files, setFiles] = useState([]);

  const handleSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };
  const handleClick = () => {
    inputFileRef.value=""
    inputFileRef.current.click();
  };

  const handleDefaults = (e) => {
    e.stopPropogation()
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
  };

  return (
    <div>
      <h2>FileUploader</h2>
      <input
        type="file"
        ref={inputFileRef}
        multiple
        onChange={handleSelect}
        hidden
      ></input>
      <button onClick={handleClick}>Upload Files</button>
      <div
        onDragEnter={handleDefaults}
        onDragOver={handleDefaults}
        onDrop={handleDrop}
        style={{
          border: "1px dashed blue",
          height: "400px",
          marginTop: "10px",
        }}
      >
        <p>Drop your files here</p>
      </div>
      <div>
        <h2>Your files here:</h2>
        {files.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </div>
    </div>
  );
}
