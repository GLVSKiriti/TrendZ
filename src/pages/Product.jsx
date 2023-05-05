import React from "react";
import "./Product.css";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

function Product() {
  return (
    <div className="productpage">
      <NavBar />
      <Announcement />
      <div className="ProductWrapper">
        <div className="imageContainer">
          <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className="infoContainer">
          <h1 className="title">Denim JumpSuit</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            omnis possimus non magnam sequi temporibus ipsa aspernatur,
            repellendus atque recusandae reiciendis optio! Saepe corporis
            quidem, culpa possimus libero enim doloribus.
          </p>
          <span className="price">200₹</span>
          <div className="filterContainer">
            <div className="filter">
              <span className="title">Color</span>
              <div
                className="filterColor"
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className="filterColor"
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className="filter">
              <span className="title">Size</span>
              <select className="filterSize">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="AddContainer">
            <div className="AmountContainer">
              <Remove />
              <span className="amount">1</span>
              <Add />
            </div>
            <button className="AddToCart">Add To Cart</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Product;
