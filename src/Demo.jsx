import React, { useState } from "react";

const Demo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        click
      </button>
      <div>
        <li>

        {count}
        </li>

      </div>
    </div>
  );
};

export default Demo;
