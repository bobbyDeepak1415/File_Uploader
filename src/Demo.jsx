import axios from "axios";
import { useEffect, useState } from "react";

const Demo = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data);
    } catch (e) {
      console.error("failed fetching...", e);
    }
  };

  useEffect(()=>{
fetchData()
  },[])

  return <div>{
    products.map((product,id)=>{
      return <li key={id}>{product.title}</li>
    })
    }</div>;
};

export default Demo;
