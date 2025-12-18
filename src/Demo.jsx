import React, { useState } from "react";

const Demo = () => {

  const [count,setCount]=useState(0)

const increment=()=>{
  setCount(count+1)
  setCount(count+1)
  setCount(count+1)

}

  return <>
  <p>{count}</p>
  <button onClick={increment}>Click</button>
  </>;
};

export default Demo;

