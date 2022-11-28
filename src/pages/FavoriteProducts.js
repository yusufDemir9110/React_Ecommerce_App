import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import FavLogo from "../assets/heart-solid.svg";

const FavoriteProducts = () => {
  const { favoriteProductsIds } = useContext(GlobalContext);
  const [productsData, setProductsData] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const productsUrl = "https://fakestoreapi.com/products";
        const response = await fetch(productsUrl);
        const data = await response.json();
        setProductsData(data);
        const newData = [];
        productsData.map((item) => {
          if (favoriteProductsIds.includes(item.id)) {
            newData.push(item);
          }
          return newData;
        });
        setFavoriteProducts(newData);
        setIsProductsLoading(false);
      } catch (error) {
        setIsProductsLoading(false);
        setShowError(error.message);
      }
    };
    getProductData();
  }, [favoriteProducts]);

  return (
    <div className="productList">
      {isProductsLoading ? (
        <h1>Loading</h1>
      ) : (
        favoriteProducts.map((item) => (
          <div className="productCard" key={item.id}>
            <div className="favoriteHearthContainer">
              <img src={FavLogo} alt="favorite hearth" />
            </div>
            <img src={item.image} alt={item.title} />
            <h1>{item.title}</h1>
          </div>
        ))
      )}
      <div>
        {favoriteProducts.length === 0 ? (
          <h1>There is no favorite item</h1>
        ) : null}
      </div>
      <div>
        {showError !== null ? `Something went wrong: ${showError}` : ""}
      </div>
    </div>
  );
};

export default FavoriteProducts;
