import React, { useRef, useState } from "react";

export default function Demo(props) {
  const inputFileRef = useRef(0);
  const [files, setFiles] = useState([]);

  const handleSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);

  };
  const handleClick = () => {
    // inputFileRef.value=""
    inputFileRef.current.click()
  };

  return (
    <div>
      <h2>FileUploader</h2>
      <input type="file" ref={inputFileRef} multiple onChange={handleSelect} hidden></input>
      <button onClick={handleClick}>Upload Files</button>
    </div>
  );
}
