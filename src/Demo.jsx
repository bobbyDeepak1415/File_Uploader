import React, { useRef, useState } from "react";

const Demo = () => {
  const [files, setFiles] = useState([]);

  const inputFileRef = useRef(null);

  const handleSelect = () => {};

  return (
    <div>
      <input ref={inputFileRef} multiple hidden onChange={handleSelect} />
      <button>Browse files</button>
      <div>
        <h2>Your files here:</h2>
      </div>

      {files}
    </div>
  );
};

export default Demo;
