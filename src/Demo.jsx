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

  const handleClick = () => {
    inputFileRef.current.click();
  };

  const handleChange = (e) => {
    const fileData = Array.from(e.target.files);

    const fileNames = fileData.map((file) => {
      return {
        name: file.name,
      };
    });

    setSelectedFiles((prev) => [...prev, ...fileNames]);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        ref={inputFileRef}
        type="file"
        hidden
        multiple
      />
      <button onClick={handleClick}>Add Files</button>
      <div>
        <ul>
          {selectedFiles.map((file) => {
            return <li key={file.id}>{file.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Demo;
