import React, { useRef, useState } from "react";

function FileUploader(props) {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleSelectFile = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleSelect = () => {
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
      <h2>File Uploader</h2>
      <input
        hidden
        multiple
        ref={fileInputRef}
        onChange={handleSelectFile}
        type="file"
      />
      <button onClick={handleSelect}>BrowseFiles</button>
      <div
        onDragEnter={preventDefaults}
        onDragOver={preventDefaults}
        onDrop={handleDrop}
        style={{ border: "1px dashed", padding: "100px", margin: "10px" }}
      >
        Drop file here
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

export default FileUploader;
