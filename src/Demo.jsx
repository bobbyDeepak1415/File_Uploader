import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState([0, 1]);

  const handleClick = () => {
    setCount((prev) => [...prev,prev.length+1]);
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
