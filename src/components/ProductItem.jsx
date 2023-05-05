import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";

function ProductItem({ item }) {
  return (
    <div className="ProductItem">
      <div className="circle"></div>
      <img src={item.img} alt="" className="productImage" />
      <div className="productInfo">
        <div className="productIcon">
          <ShoppingCartOutlined />
        </div>
        <div className="productIcon">
          <SearchOutlined />
        </div>
        <div className="productIcon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
