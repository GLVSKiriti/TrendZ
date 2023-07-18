import React, { useEffect, useState } from "react";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products(props) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          props.category
            ? `http://localhost:5000/api/product?category=${props.category}`
            : `http://localhost:5000/api/product?`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [props.category]);

  useEffect(() => {
    props.category &&
      setFilteredProducts(
        products.filter((item) => {
          return Object.entries(props.filter).every(([key, value]) => {
            return item[key].includes(value);
          });
        })
      );
  }, [products, props.category, props.filter]);

  useEffect(() => {
    if (props.sort === "newest") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.createdAt - b.createdAt);
      });
    } else if (props.sort === "asc") {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => a.price - b.price);
      });
    } else {
      setFilteredProducts((prev) => {
        return [...prev].sort((a, b) => b.price - a.price);
      });
    }
  }, [props.sort]);

  return (
    <Container>
      {props.category
        ? filteredProducts.map((item) => {
            return <ProductItem item={item} key={item.id} />;
          })
        : products.slice(0, 8).map((item) => {
            return <ProductItem item={item} key={item.id} />;
          })}
    </Container>
  );
}

export default Products;
