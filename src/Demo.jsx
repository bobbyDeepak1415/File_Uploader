import React, {  useMemo, useState } from "react";
import handleClick from "./handleClick";

const Demo = () => {
  const [count, setCount] = useState(1);

  const computedValue=useMemo(()=>{
    console.log("Calculating...")
return count*1000
  },[count])

  return (
    <div>
      <button onClick={()=>handleClick(setCount)}>click</button>

      <p>count:{count}</p>
      <p>compouted Value:{computedValue}</p>
    </div>
  );
};

export default Demo;
