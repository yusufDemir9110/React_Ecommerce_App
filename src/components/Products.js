import React from "react";
import { Link } from "react-router-dom";

function Products({ productsData, isProductsLoading, showError }) {
  return (
    <div>
      <div className="productList">
        {isProductsLoading ? (
          <h1>Loading</h1>
        ) : (
          productsData.map((product) => (
            <Link
              to={`/products/${product.id}`}
              state={product.id}
              key={product.id}
              className="productCard"
            >
              <div>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </div>
            </Link>
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
