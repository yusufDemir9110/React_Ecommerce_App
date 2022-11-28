import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Products</li>
        </Link>
        <Link to="/favorite-products">
          <li>Favorites</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
