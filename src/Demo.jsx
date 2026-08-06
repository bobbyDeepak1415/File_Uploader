import React, { useRef, useState } from "react";

const Demo = () => {
  const [files, setFiles] = useState([]);

  const inputFileRef = useRef(null);

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
      <input ref={inputFileRef} multiple hidden onChange={handleSelect} />
      <button onClick={handleClick}>Browse files</button>
      <div>
        <h2>Your files here:</h2>
      </div>

      {files}
    </div>
  );
};

export default Demo;
