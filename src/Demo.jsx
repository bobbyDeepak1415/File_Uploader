import React, { useRef } from "react";

const Demo = () => {

  const inputFileRef=useRef(null)

  return <div>

    <input hidden type="file" ref={inputFileRef} multiple />
    <button>Browse Files</button>

  </div>;
};

export default Demo;
