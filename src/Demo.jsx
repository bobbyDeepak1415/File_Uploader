import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
  const inputFileRef = useRef(null);

  const [selectedFiles, setSelectedFiles] = useState(() => {
    const files = localStorage.getItem("selectedFiles");
    return files ? JSON.parse(files) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedFiles", JSON.stringify(selectedFiles));
  }, [selectedFiles]);

  const handleSelect = (e) => {
    const files = Array.from(e.target.files);

    const fileData = files.map((file) => {
      return {
        name: file.name,
      };
    });

    setSelectedFiles((prev) => [...prev, ...fileData]);
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
    const files = e.dataTransfer.files;

    setSelectedFiles((prev) => [...prev, ...files]);
  };

  return (
    <div>
      <input
        onChange={handleSelect}
        hidden
        type="file"
        ref={inputFileRef}
        multiple
      />
      <button onClick={handleClick}>Browse Files</button>

      <div>
        <div
          onDragEnter={handleDefaults}
          onDragOver={handleDefaults}
          onDrop={handleDrop}
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
              return <li key={file.id}>{file.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;
