import { useCallback, useState } from "react";
import handleClick from "./handleClick";

const Demo = () => {
  const [item, setItem] = useState(1);

  const memoized = useCallback(() => {
    handleClick(setItem);
  }, [setItem]);

  return (
    <div>
      <button onClick={memoized}>Click</button>

      <p>{item}</p>
    </div>
  );
};

export default Demo;
