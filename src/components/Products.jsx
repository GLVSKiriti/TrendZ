import React from "react";
import "./Products.css";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

function Products() {
  return (
    <div className="Products">
      {popularProducts.map((item) => {
        return <ProductItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default Products;
