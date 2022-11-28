import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavLogo from "../assets/heart-solid.svg";
import NotFavLogo from "../assets/heart-regular.svg";
import { GlobalContext } from "../context/GlobalState";

function Products({ productsData, isProductsLoading, showError }) {
  const { addFavorite, removeFavorite, favoriteProductsIds } =
    useContext(GlobalContext);

  return (
    <div>
      <div className="productList">
        {isProductsLoading ? (
          <h1>Loading</h1>
        ) : (
          productsData.map((product) => (
            <div className="productCard" key={product.id}>
              <div
                className="favoriteHearthContainer"
                onClick={
                  favoriteProductsIds.includes(product.id)
                    ? (e) => removeFavorite(product.id, e)
                    : (e) => addFavorite(product.id, e)
                }
              >
                <img
                  className="favorite-Hearth"
                  src={
                    favoriteProductsIds.includes(product.id)
                      ? FavLogo
                      : NotFavLogo
                  }
                  alt="favorite hearth"
                />
              </div>
              <Link to={`/products/${product.id}`} state={product.id}>
                <div>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
      <div>
        {showError !== null ? `Something went wrong: ${showError}` : ""}
      </div>
    </div>
  );
}

export default Products;
