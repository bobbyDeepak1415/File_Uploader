import React, { useState } from "react";

const Demo = () => {

  const [input,setInput]=useState("")
  const [items,setItems]=useState([])

  return (
    <div>
      <input></input>
      <button>Add</button>
      <div>
        {items.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </div>
    </div>
  );
};

export default Demo;
