import React, { useRef, useState } from "react";

function FileUploader(props) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.value);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const preventDefaults = (e) => {
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
      <input
        type="file"
        hidden
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button onClick={openFileDialog}> Browse Files</button>
      <div
        onDrop={handleDrop}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        style={{
          border: "2px dashed",
          padding: "100px",
          maggin: "10px",
          textAlign: "center",
        }}
      >
        Drop files here
      </div>
      <div>
        <h4>Uploaded files here</h4>
        <ul>
          {files.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default FileUploader;
