import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState([]);

  const handleClick = () => {
    setCount((prev) => prev);
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
      <div>
        <ul>
          {count.map((count) => {
            return <li>{count}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Demo;
