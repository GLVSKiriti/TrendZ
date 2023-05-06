import React from "react";
import "./Cart.css";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

function Cart() {
  return (
    <div className="cartpage">
      <NavBar />
      <Announcement />
      <div className="cartWrapper">
        <h1 className="title">Your Bag</h1>
        <div className="top">
          <button
            className="topbutton"
            style={{ backgroundColor: "transparent" }}
          >
            Continue Shopping
          </button>
          <div className="toptexts">
            <span className="toptext">Shopping Bag(2)</span>
            <span className="toptext">Your Wishlist(0)</span>
          </div>
          <button
            className="topbutton"
            style={{ backgroundColor: "black", color: "white", border: "none" }}
          >
            CheckOut Now
          </button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="productDetail">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <div className="details">
                  <div className="productname">
                    <b>Product:</b>Jessie Thunder Shoes
                  </div>
                  <div className="productId">
                    <b>ID:</b> 93813718293
                  </div>
                  <div
                    className="productColor"
                    style={{ backgroundColor: "black" }}
                  ></div>
                  <div className="productSize">
                    <b>Size:</b> M
                  </div>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <Add />
                  <div className="productAmount">2</div>
                  <Remove />
                </div>
                <div className="productPrice">30₹</div>
              </div>
            </div>
            <hr />
            <div className="product">
              <div className="productDetail">
                <img
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt=""
                />
                <div className="details">
                  <div className="productname">
                    <b>Product:</b>Hakura T-Shirt
                  </div>
                  <div className="productId">
                    <b>ID:</b> 93813718293
                  </div>
                  <div
                    className="productColor"
                    style={{ backgroundColor: "gray" }}
                  ></div>
                  <div className="productSize">
                    <b>Size:</b> M
                  </div>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <Add />
                  <div className="productAmount">1</div>
                  <Remove />
                </div>
                <div className="productPrice">50₹</div>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1 className="title">Order Summary</h1>
            <div className="summaryItem">
              <span>Subtotal</span>
              <span>80₹</span>
            </div>
            <div className="summaryItem">
              <span>Estimated Shipping</span>
              <span>30₹</span>
            </div>
            <div className="summaryItem">
              <span>Discount</span>
              <span>-30₹</span>
            </div>
            <div
              className="summaryItem"
              style={{ fontWeight: "500", fontSize: "24px" }}
            >
              <span>Total</span>
              <span>80₹</span>
            </div>
            <button>CheckOut Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
