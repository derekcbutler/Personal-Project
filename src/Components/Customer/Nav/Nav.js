import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { connect } from 'react-redux';
// import { logout } from '../../../redux/'
import "./Nav.css";

const Nav = (props) => {




    console.log("props", props)
  return (
    <div>
      {props.location.pathname === "/login" ? null : (
        <nav className="nav-bar">
          <div className="logo">
            <Link to="/" className="logo">
              Cyber Investments
            </Link>
          </div>
          <nav className="menu-buttons">
            <Link to="/calculator" className="menu-buttons">
              Calculator
            </Link>
            <Link to="/products" className="menu-buttons">
              Products
            </Link>
            <Link className="menu-buttons">Invest</Link> //?    MAKE A LINK FOR THIS
          </nav>
        </nav>
      )}
    </div>
  );
};
export default withRouter(Nav);
