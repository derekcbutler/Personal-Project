import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../redux/reducer";
import "./Nav.css";

const Nav = props => {
  const [menu, setMenu] = useState(false);

  const drop = () => {
    setMenu(!menu);
  };

  console.log("props", props);
  console.log(props.redux.user.loggedIn);
  // console.log(props)
  return (
    <div>
      {props.location.pathname === "/login" ? null : (
        <nav className="nav-bar">
          <div className="logo">
            <Link to="/" className="logo">
              Cloud Investments
            </Link>
          </div>
          <a className="icon">
            <i className="fa fa-bars" onClick={drop} ></i>
          </a>
          <div className="myLinks">
            {menu ? (
              <nav className="menu-buttons">
                <Link to="/calculator" className="menu-buttons">
                  Calculator
                </Link>
                <Link to="/products" className="menu-buttons">
                  Products
                </Link>
                {props.redux.user.loggedIn ? (
                  <div>
                    <Link to="/leads" className="menu-buttons">
                      Leads
                    </Link>
                    <button onClick={props.logout}>Logout</button>
                  </div>
                ) : null}

                {/* <Link className="menu-buttons">Invest</Link> //!    MAKE A LINK FOR THIS */}
              </nav>
            ) : null}
          </div>
        </nav>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    redux: state
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Nav)
);
