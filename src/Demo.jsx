import React, { useState } from "react";

const Demo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setItems([...items, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const filteredItems = items.filter((_, i) => i !== index);

    setItems(filteredItems);
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={handleClick}>Add</button>
      <div style={{ display: "flex" }}>
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => handleDelete(item.index)}>Remove</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Demo;
