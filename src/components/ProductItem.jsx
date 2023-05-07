import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const ProductInfo = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  position: relative;
  &:hover ${ProductInfo} {
    opacity: 1;
  }
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const ProductIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: whitesmoke;
    transform: scale(1.1);
  }
`;
function ProductItem({ item }) {
  return (
    <Container className="Container">
      <Circle className="circle"></Circle>
      <Image src={item.img} alt="" className="productImage" />
      <ProductInfo className="productInfo">
        <ProductIcon className="productIcon">
          <ShoppingCartOutlined />
        </ProductIcon>
        <ProductIcon className="productIcon">
          <SearchOutlined />
        </ProductIcon>
        <ProductIcon className="productIcon">
          <FavoriteBorderOutlined />
        </ProductIcon>
      </ProductInfo>
    </Container>
  );
}

export default ProductItem;
