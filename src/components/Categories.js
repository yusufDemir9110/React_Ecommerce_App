import React from "react";

function Categories({ changeCategory, categoriesData, showError }) {
  return (
    <div>
      <div className="categoryList">
        {categoriesData.map((category) => (
          <div key={category}>
            <button onClick={() => changeCategory(category)}>{category}</button>
          </div>
        ))}
      </div>
      <div>
        {showError !== null ? `Something went wrong: ${showError}` : ""}
      </div>
    </div>
  );
}

export default Categories;
