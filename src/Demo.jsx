import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div>
        <ul>
          <li>{count}</li>
        </ul>
      </div>
    </div>
  );
};

export default Demo;
