import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/data";

const ProductDetail = () => {
    const {id} = useParams()
    const product = products.find((p) => p.id === parseInt(id));
  return (
    <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
    </div>
  );
};

export default ProductDetail;
