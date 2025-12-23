import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      setProducts(response.data.products);
    } catch (e) {
      console.error("failed fetching", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const styles = {
    main: {
      padding: "20px",
    },
    title: {
      color: "#5C6AC4",
    },
  };

  return (
    <div style={styles.main}>
      <div>
        {products.map((product, id) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </div>
    </div>
  );
};

export default Demo;
