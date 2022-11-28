const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favoriteProductsIds: [action.payload, ...state.favoriteProductsIds],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoriteProductsIds: state.favoriteProductsIds.filter(
          (item) => item !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default AppReducer;
