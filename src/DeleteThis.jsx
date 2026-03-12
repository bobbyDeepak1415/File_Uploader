import React, { useState } from "react";

const products = [
  { id: 1, name: "MacBook Pro" },
  { id: 2, name: "iPhone 15" },
  { id: 3, name: "Samsung Galaxy" },
  { id: 4, name: "Dell XPS" },
  { id: 5, name: "HP Pavilion" },
  { id: 6, name: "iPad Air" },
  { id: 7, name: "Sony Headphones" },
  { id: 8, name: "Apple Watch" },
  { id: 9, name: "Google Pixel" },
  { id: 10, name: "Asus ROG" },
  { id: 11, name: "Lenovo ThinkPad" },
  { id: 12, name: "AirPods Pro" },
  { id: 13, name: "Microsoft Surface" },
  { id: 14, name: "OnePlus Nord" },
  { id: 15, name: "Canon Camera" },
];

const DeleteThis = () => {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  return (
    <div style={{ backgroundColor: "gray", height: "100vh" }}>
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <div>
        {filteredProducts.length
          ? filteredProducts.map((product) => {
              return <li key={product.id}>{product.name}</li>;
            })
          : products.map((product) => {
              return <li key={product.id}>{product.name}</li>;
            })}
      </div>
    </div>
  );
};

export default DeleteThis;
