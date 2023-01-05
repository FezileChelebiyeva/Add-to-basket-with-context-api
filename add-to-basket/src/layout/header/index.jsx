import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
      <div className="logo">
        <h1>Products</h1>
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="products-list">Products List</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="products-in-basket">Products in Basket</NavLink>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Header;
