import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import FavLogo from "../assets/heart-solid.svg";
import NotFavLogo from "../assets/heart-regular.svg";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const { addFavorite, removeFavorite, favoriteProductsIds } =
    useContext(GlobalContext);
  useEffect(() => {
    const getProductDetail = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${location.state}`
      );
      const data = await response.json();
      setProduct(data);
    };
    getProductDetail();
  }, [location.state]);
  return (
    <div className="productDetailCardContainer">
      <div key={product.id}>
        <div
          className="favoriteHearthContainer"
          onClick={
            favoriteProductsIds.includes(product.id)
              ? (e) => removeFavorite(product.id, e)
              : (e) => addFavorite(product.id, e)
          }
        >
          <img
            className="detailFavoriteHearth"
            src={
              favoriteProductsIds.includes(product.id) ? FavLogo : NotFavLogo
            }
            alt="favorite hearth"
          />
        </div>
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
