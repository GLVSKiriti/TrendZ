import React from "react";
import "./Footer.css";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterLeft">
        <h1 className="logo">TrendZ</h1>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          nihil exercitationem id nam ipsam libero accusantium quia incidunt
          earum illo.
        </p>
        <div className="socialcontainer">
          <div className="socialicon" style={{ backgroundColor: "#3B5999" }}>
            <Facebook />
          </div>
          <div className="socialicon" style={{ backgroundColor: "#E4405f" }}>
            <Instagram />
          </div>
          <div className="socialicon" style={{ backgroundColor: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className="socialicon" style={{ backgroundColor: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="FooterCenter">
        <h3 className="title">Useful Links</h3>
        <ul className="list">
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="FooterRight">
        <h3 className="title">Contact</h3>
        <div className="contactItem">
          <Room style={{ marginRight: "10px" }} /> Guntur,Andhra Pradesh,India
        </div>
        <div className="contactItem">
          <Phone style={{ marginRight: "10px" }} /> +91 123456789
        </div>
        <div className="contactItem">
          <MailOutline style={{ marginRight: "10px" }} />
          trendz2023@gmail.com
        </div>
        <img
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt=""
          className="payment"
        />
      </div>
    </div>
  );
}

export default Footer;
