import React from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const Title2 = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const AddToCart = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: teal;
    color: white;
  }
`;

function Product() {
  return (
    <div className="productpage">
      <NavBar />
      <Announcement />
      <Wrapper className="ProductWrapper">
        <ImageContainer className="imageContainer">
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </ImageContainer>
        <InfoContainer className="infoContainer">
          <Title className="title">Denim JumpSuit</Title>
          <Desc className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            omnis possimus non magnam sequi temporibus ipsa aspernatur,
            repellendus atque recusandae reiciendis optio! Saepe corporis
            quidem, culpa possimus libero enim doloribus.
          </Desc>
          <Price className="price">200₹</Price>
          <FilterContainer className="filterContainer">
            <Filter className="filter">
              <Title2 className="title">Color</Title2>
              <FilterColor
                className="filterColor"
                style={{ backgroundColor: "black" }}
              ></FilterColor>
              <FilterColor
                className="filterColor"
                style={{ backgroundColor: "darkblue" }}
              ></FilterColor>
              <FilterColor
                className="filterColor"
                style={{ backgroundColor: "gray" }}
              ></FilterColor>
            </Filter>
            <Filter className="filter">
              <Title2 className="title">Size</Title2>
              <FilterSize className="filterSize">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer className="AddContainer">
            <AmountContainer className="AmountContainer">
              <Remove />
              <Amount className="amount">1</Amount>
              <Add />
            </AmountContainer>
            <AddToCart className="AddToCart">Add To Cart</AddToCart>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Product;
