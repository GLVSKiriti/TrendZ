import React from "react";

function CategoryItem({ item }) {
  return (
    <div className="CategoryItem">
      <img src={item.img} alt="" className="categoryImage" />
      <div className="categoryInfo">
        <h1 className="categoryTitle">{item.title}</h1>
        <button className="categoryButton">Shop Now</button>
      </div>
    </div>
  );
}

export default CategoryItem;
