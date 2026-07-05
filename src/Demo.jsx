import React, { useRef } from "react";

const Demo = () => {
  const inputFileRef = useRef();

  const handleClick = () => {
    inputFileRef.current.click();
    inputFileRef.current.value = "";
  };

  return (
    <div>
      <h2>
        FileUpLoader
        <input ref={inputFileRef} type="file" hidden multiple />
        <button onClick={handleClick}>Click</button>
      </h2>
    </div>
  );
};

export default Demo;
