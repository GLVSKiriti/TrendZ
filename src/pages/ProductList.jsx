import React from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import "./ProductList.css";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function ProductList() {
  return (
    <div className="ProductList">
      <Announcement />
      <NavBar />
      <h1 className="ProductListTitle">Dresses</h1>
      <div className="filterContainer">
        <div className="filter">
          <span className="filtertext">Filter Products:</span>
          <select className="filterselector">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="filterselector">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filtertext">Sort Products:</span>
          <select className="filterselector">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductList;
