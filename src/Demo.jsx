import axios from "axios";
import { useEffect, useState } from "react";

const Demo = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.get("https://dummyjson.com/products");
      setProducts(data.data.products);
    } catch (e) {
      console.error("failed fetching...", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <li key={product.id}>{product.title}</li>;
      })}
    </div>
  );
};

export default Demo;
