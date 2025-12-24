import axios from "axios";
import { useState } from "react";

const Demo = () => {

  const [products,setProducts]=useState([])

  const fetchData=async()=>{

    try{

      const data = await axios.get("https://fakestoreapi.com/products");
      setProducts(data.data.products)
    }catch(e){
      console.error("failed fetching...",e)
    }


  }

  return <div>
  
  {}
  

  </div>;
};

export default Demo;
