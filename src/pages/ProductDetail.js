import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  useEffect(() => {
    const getProductDetail = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${location.state}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProductDetail();
  }, []);
  return (
    <div className="productDetailCardContainer">
      <div key={product.id}>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <h3>Category: {product.category}</h3>
        <p>Description: {product.description}</p>
        <h2>Price: {product.price} Euro</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
