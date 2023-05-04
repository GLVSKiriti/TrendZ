import React from "react";
import "../components/NavBar.css";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

function NavBar() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span>EN</span>
          <div className="searchcontainer">
            <input type="text" className="input" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="center">
          <h1 className="logo">TrendZ</h1>
        </div>
        <div className="right">
          <div className="menuItem">Register</div>
          <div className="menuItem">SignIn</div>
          <div className="menuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
