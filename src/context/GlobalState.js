import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import FavLogo from "../assets/heart-solid.svg";
import NotFavLogo from "../assets/heart-regular.svg";
import ProductDetail from "../pages/ProductDetail";

const initialState = {
  favoriteProductsIds: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addFavorite = (id, e) => {
    e.target.src = FavLogo;
    dispatch({
      type: "ADD_FAVORITE",
      payload: id,
    });
  };

  const removeFavorite = (id, e) => {
    e.target.src = NotFavLogo;
    dispatch({
      type: "REMOVE_FAVORITE",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        favoriteProductsIds: state.favoriteProductsIds,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
