import React from "react";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products() {
  return (
    <Container className="Products">
      {popularProducts.map((item) => {
        return <ProductItem item={item} key={item.id} />;
      })}
    </Container>
  );
}

export default Products;
