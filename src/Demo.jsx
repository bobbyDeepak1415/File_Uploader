import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
  const inputFileRef = useRef(null);

  const [files, setFiles] = useState([]);

  // const [files, setFiles] = useState(()=>{
  //   const files=localStorage.getItem("files")
  //   return files ? JSON.parse(files) : []
  // });

  // useEffect()

  const handleSelect = (e) => {
    e.preventDefault();
    const selectedFiles = Array.from(e.target.files);

    const fileNames = selectedFiles.map((file) => {
      return {
        name: file.name,
      };
    });

    setFiles((prev) => [...prev, ...fileNames]);
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
    const selectedFiles = Array.from(e.dataTransfer.files);
    const fileNames = selectedFiles.map((file) => {
      return {
        name: file.name,
      };
    });

    setFiles((prev) => [...prev, ...fileNames]);
  };

  return (
    <div>
      <input
        type="file"
        ref={inputFileRef}
        multiple
        hidden
        onChange={handleSelect}
      />
      <button onClick={handleClick}>Browse files</button>

      <div
        className="h-80 w-[80vw] m-auto border-2 border-neutral-900 border-dashed mt-5"
        onDrop={handleDrop}
        onDragEnter={handleDefaults}
        onDragOver={handleDefaults}
      >
        Drop your files here
      </div>
      <div>
        <h2>Your files here:</h2>
      </div>
      <ul>
        {files.map((file, index) => {
          return <li key={index}>{file.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Demo;
