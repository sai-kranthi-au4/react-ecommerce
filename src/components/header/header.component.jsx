import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img src={Logo} alt="Logo" width="45" height="45" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
