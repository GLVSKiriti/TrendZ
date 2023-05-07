import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Socialcontainer = styled.div`
  display: flex;
`;
const Socialicon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const FooterCenter = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Listitem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const FooterRight = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
function Footer() {
  return (
    <Container>
      <FooterLeft>
        <Logo>TrendZ</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          nihil exercitationem id nam ipsam libero accusantium quia incidunt
          earum illo.
        </Desc>
        <Socialcontainer>
          <Socialicon style={{ backgroundColor: "#3B5999" }}>
            <Facebook />
          </Socialicon>
          <Socialicon style={{ backgroundColor: "#E4405f" }}>
            <Instagram />
          </Socialicon>
          <Socialicon style={{ backgroundColor: "#55ACEE" }}>
            <Twitter />
          </Socialicon>
          <Socialicon style={{ backgroundColor: "#E60023" }}>
            <Pinterest />
          </Socialicon>
        </Socialcontainer>
      </FooterLeft>
      <FooterCenter>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Man Fashion</Listitem>
          <Listitem>Woman Fashion</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Order Tracking</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms</Listitem>
        </List>
      </FooterCenter>
      <FooterRight>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Guntur,Andhra Pradesh,India
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 123456789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          trendz2023@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </FooterRight>
    </Container>
  );
}

export default Footer;
