import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;
const Filtertext = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const FilterSelector = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
`;

function ProductList() {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filter, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (event) => {
    const value = event.target.value;
    setFilters({
      ...filter,
      [event.target.name]: value,
    });
  };
  return (
    <div>
      <Announcement />
      <NavBar />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <Filtertext>Filter Products:</Filtertext>
          <FilterSelector name="color" onChange={handleFilters}>
            <option disabled>Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </FilterSelector>
          <FilterSelector name="size" onChange={handleFilters}>
            <option disabled>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </FilterSelector>
        </Filter>
        <Filter>
          <Filtertext>Sort Products:</Filtertext>
          <FilterSelector
            onChange={(event) => {
              setSort(event.target.value);
            }}
          >
            <option value={"newest"}>Newest</option>
            <option value={"asc"}>Price (asc)</option>
            <option value={"desc"}>Price (desc)</option>
          </FilterSelector>
        </Filter>
      </FilterContainer>
      <Products category={category} filter={filter} sort={sort} />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default ProductList;
