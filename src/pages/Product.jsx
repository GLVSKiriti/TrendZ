import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
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
  ${mobile({ width: "100%" })}
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
  &:hover {
    border: 2.5px solid black;
  }
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
  ${mobile({ width: "100%" })}
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
  transition: 0.15s all ease;
`;

function Product() {
  const location = useLocation();
  const pid = location.pathname.split("/")[2];

  const [product, setProduct] = useState({
    categories: [],
    color: [],
    size: [],
  });

  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const handleqty = (fun) => {
    if (fun === "incr") {
      setQty(qty + 1);
    } else if (qty > 1) {
      setQty(qty - 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/product/find/${pid}`,
          {
            headers: {
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTlhYWU4M2Q1M2I5ZGNkN2E2ODMwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Mzc4NzA2NywiZXhwIjoxNjg0MDQ2MjY3fQ.kC0Obf4B2UfWq4uMu7Rkp6F_e8DDeUGLxgg1oAWmhtY",
            },
          }
        );
        setProduct(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [pid]);
  return (
    <div>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} alt="" />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            <Filter>
              <Title2>Color</Title2>
              {product.color.map((e) => {
                return (
                  <FilterColor
                    style={{ backgroundColor: `${e}` }}
                    key={e}
                    onClick={() => setColor(e)}
                  ></FilterColor>
                );
              })}
            </Filter>
            <Filter>
              <Title2>Size</Title2>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size.map((e) => {
                  return <option key={e}>{e}</option>;
                })}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => {
                  handleqty("decr");
                }}
              />
              <Amount>{qty}</Amount>
              <Add
                onClick={() => {
                  handleqty("incr");
                }}
              />
            </AmountContainer>
            <AddToCart>Add To Cart</AddToCart>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Product;
