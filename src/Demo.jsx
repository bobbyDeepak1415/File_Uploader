import React, { useState } from "react";

const Demo = () => {

  // const [count,setCount]=useState(0)

  let count=0

const increment=()=>{
count=count+1
}

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>increment}>Click</button>
      {/* <button onClick={()=>setCount(count+1)}>Click</button> */}
    </div>
  );
};

export default Demo;
,