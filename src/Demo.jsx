import React, { useState } from "react";

const Demo = () => {

  const [input,setInput]=useState("")
  const [items,setItems]=useState([])

  const handleClick=()=>{
    
  }

  return (
    <div>
      <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <button onClick={handleClick}>Add</button>
      <div>
        {items.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </div>
    </div>
  );
};

export default Demo;
