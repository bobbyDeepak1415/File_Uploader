import React, { useRef, useState } from "react";

function Demo() {
  const [users, setUsers] = useState([]);
  const inputFileRef = useRef(null);

  const handleClick = () => {
    inputFileRef.current.click();
    inputFileRef.current.value = "";
  };

  const handleSelect = () => {};

  return (
    <div>
      <h2>Demo</h2>
      <input
        ref={inputFileRef}
        type="file"
        multiple
        hidden
        onChange={handleSelect}
      ></input>
      <button style={{marginBottom:"2rem"}} onClick={handleClick}>Click to browse</button>
      <div
        style={{
          border: "1px dashed",
          height: "40vh",
          width: "80vw",
          margin:"auto"
        }}
      >
        Drop your files here:
      </div>
    </div>
  );
}

export default Demo;
