import React, { useRef, useState } from "react";

function Demo() {
  const [files, setFiles] = useState([]);
  const inputFileRef = useRef(null);

  const handleClick = () => {
    inputFileRef.current.click();
    inputFileRef.current.value = "";
  };

  const handleSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  return (
    <div>
      <h2>Demo</h2>
      <input
        ref={inputFileRef}
        type="file"
        multiple
        hidden
        onChange={(e) => handleSelect(e)}
      ></input>
      <button style={{ marginBottom: "2rem" }} onClick={handleClick}>
        Click to browse
      </button>
      <div
        style={{
          border: "1px dashed",
          height: "40vh",
          width: "80vw",
          margin: "auto",
        }}
        onDrop={handleDrop}
        onDragEnter={handleDefault}
        onDragOver={handleDefault}
      >
        Drop your files here:
      </div>
      <div>
        <ul>
          {files.map((file, index) => {
            return <li key={index}>{file.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Demo;
