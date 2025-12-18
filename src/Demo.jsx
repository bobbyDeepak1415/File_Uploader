import React, { useState } from "react";

const Demo = () => {

  const [count,setCount]=useState(0)

  return (
    <div>
      <p>{count}</p>
      <button>Click</button>
    </div>
  );
};

export default Demo;
