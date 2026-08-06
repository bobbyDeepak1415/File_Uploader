import React, { useEffect, useRef, useState } from "react";

const Demo = () => {
  const inputFileRef = useRef(null);

  const [files, setFiles] = useState([]);

  
  const handleSelect = (e) => {
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
