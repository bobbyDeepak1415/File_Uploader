import React, { useRef, useState } from "react";

function FileUploader(props) {
  const [files, setFiles] = useState([]);
  const inputFileRef = useRef(null);

  const handleSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleClick = () => {
    inputFileRef.current.value = "";
    inputFileRef.current.click();
  };

  const handleDefaults = (e) => {
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
      <h2>Hello bruv</h2>
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
}

export default FileUploader;
