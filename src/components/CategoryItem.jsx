import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const CategoryInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  border: none;
  color: gray;
  background-color: white;
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <CategoryImage src={item.img} alt="" />
      <CategoryInfo>
        <CategoryTitle>{item.title}</CategoryTitle>
        <Link to={`/products/${item.category}`}>
          <CategoryButton>Shop Now</CategoryButton>
        </Link>
      </CategoryInfo>
    </Container>
  );
}

export default CategoryItem;
