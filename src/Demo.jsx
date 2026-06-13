import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
  const [files, setFiles] = useState(() => {
    const files = localStorage.getItem("files");
    return files ? JSON.parse(files) : [];
  });

  useEffect(() => {
    localStorage.setItem("", JSON.stringify(files));
  }, [files]);

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
        onDrop={handleDrop}
      >
        Drop Your Files Here
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
};

export default Demo;
