import React, { useEffect, useRef, useState } from "react";

function FileUploader(props) {
  const [files, setFiles] = useState(() => {
    try {
      const localArr = localStorage.getItem("files");
      return localArr ? JSON.parse(localArr) : [];
    } catch (er) {
      console.error("not found", er);
    }
  });
  const inputFileRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

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
