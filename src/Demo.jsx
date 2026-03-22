import React, { useCallback, useState } from "react";
import handleClick from "./handleClick";

const Demo = () => {
  const [count, setCount] = useState(1);

  const memoizedClick = useCallback(() => {
    handleClick(setCount);
  }, [setCount]);

  return (
    <div>
      <button onClick={memoizedClick}>click</button>

      <p>{count}</p>
    </div>
  );
};

export default Demo;
