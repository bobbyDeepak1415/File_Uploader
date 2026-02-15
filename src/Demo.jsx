import { useState } from "react";

export default function Demo() {

  const [query,setQuery]=useState("")

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

  const filteredProducts=products.map(product=>product.name).filter().includes(query)

  return <>
  <div>
    {filteredProducts.map((product))}

    <input value={query} onChange={(e)=>setQuery(e.target.value)}></input>
  </div>
  </>

 ;
}
