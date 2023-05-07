import React from "react";
import NavBar from "../components/NavBar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 15px;
`;

const Toptexts = styled.div`
  ${mobile({ display: "none" })}
`;

const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "row", alignItems: "baseline", marginTop: "15px" })}
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ marginRight: "20px" })}
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 12px" })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Title2 = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Button2 = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
function Cart() {
  return (
    <div className="cartpage">
      <NavBar />
      <Announcement />
      <Wrapper className="cartWrapper">
        <Title>Your Bag</Title>
        <Top>
          <Button style={{ backgroundColor: "transparent" }}>
            Continue Shopping
          </Button>
          <Toptexts className="toptexts">
            <Toptext className="toptext">Shopping Bag(2)</Toptext>
            <Toptext className="toptext">Your Wishlist(0)</Toptext>
          </Toptexts>
          <Button
            style={{ backgroundColor: "black", color: "white", border: "none" }}
          >
            CheckOut Now
          </Button>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                  alt=""
                />
                <Details>
                  <div className="productname">
                    <b>Product:</b>Jessie Thunder Shoes
                  </div>
                  <div className="productId">
                    <b>ID:</b> 93813718293
                  </div>
                  <ProductColor
                    style={{ backgroundColor: "black" }}
                  ></ProductColor>
                  <div className="productSize">
                    <b>Size:</b> M
                  </div>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>30₹</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  alt=""
                />
                <Details>
                  <div className="productname">
                    <b>Product:</b>Hakura T-Shirt
                  </div>
                  <div className="productId">
                    <b>ID:</b> 93813718293
                  </div>
                  <ProductColor
                    style={{ backgroundColor: "gray" }}
                  ></ProductColor>
                  <div className="productSize">
                    <b>Size:</b> M
                  </div>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>50₹</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <Title2>Order Summary</Title2>
            <SummaryItem>
              <span>Subtotal</span>
              <span>80₹</span>
            </SummaryItem>
            <SummaryItem>
              <span>Estimated Shipping</span>
              <span>30₹</span>
            </SummaryItem>
            <SummaryItem>
              <span>Discount</span>
              <span>-30₹</span>
            </SummaryItem>
            <SummaryItem style={{ fontWeight: "500", fontSize: "24px" }}>
              <span>Total</span>
              <span>80₹</span>
            </SummaryItem>
            <Button2>CheckOut Now</Button2>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Cart;
