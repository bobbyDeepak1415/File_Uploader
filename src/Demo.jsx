import React, { useRef } from "react";

const Demo = () => {
  const inputFileRef = useRef(null);

  const handleSelect = (e) => {
    const selectedFiles=Array.from(e.target.files)

    const fileData=selectedFiles.map((file)=>)
  };

  const handleClick = () => {};

  return (
    <div>
      <input
        value={inputFileRef}
        onChange={handleSelect}
        hidden
        multiple
      />
      <button onClick={handleClick}>Browse Files</button>
    </div>
  );
};

export default Demo;
