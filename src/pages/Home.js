import React from "react";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";

import Products from "../components/Products";

const Home = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [isProductsLoading, setIsProductsLoading] = useState(true);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    const getCategoryData = async () => {
      try {
        const categoryUrl = "https://fakestoreapi.com/products/categories";
        const response = await fetch(categoryUrl);
        const data = await response.json();
        setCategoriesData(data);
      } catch (error) {
        setShowError(error.message);
      }
    };
    getCategoryData();
  }, []);

  useEffect(() => {
    const getProductData = async () => {
      try {
        const productsUrl = "https://fakestoreapi.com/products";
        const response = await fetch(productsUrl);
        const data = await response.json();
        setProductsData(data);
        setIsProductsLoading(false);
      } catch (error) {
        setIsProductsLoading(false);
        setShowError(error.message);
      }
    };
    getProductData();
  }, []);

  const changeCategory = async (newCategory) => {
    try {
      setIsProductsLoading(true);
      const selectedCategoryUrl = `https://fakestoreapi.com/products/category/${newCategory}`;
      const response = await fetch(selectedCategoryUrl);
      const data = await response.json();
      setProductsData(data);
      setIsProductsLoading(false);
    } catch (error) {
      setShowError(error.message);
    }
  };

  return (
    <div>
      <Categories
        changeCategory={changeCategory}
        categoriesData={categoriesData}
        showError={showError}
      />
      <Products
        productsData={productsData}
        isProductsLoading={isProductsLoading}
        showError={showError}
      />
    </div>
  );
};

export default Home;
