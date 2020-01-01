import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../redux/reducer";
import "./Nav.css";

const Nav = props => {
  const [menu, setMenu] = useState(true);

  const drop = () => {
    setMenu(!menu);
  };
  // console.log("props", props);
  // console.log(props.redux.reducer.user.loggedIn);
  console.log(setMenu);
  return (
    <div className="header">
      {props.location.pathname === "/login" ? null : (
        <nav className="nav-bar">
          <div className="logo">
            <button>
              <Link to="/" className="logo">
                CLOUD PAY CHECKS
              </Link>
            </button>
          </div>

          <a className="icon">
            <i className="fa fa-bars" onClick={drop}></i>
          </a>
          <div className="myLinks">
            {menu ? (
              <nav className="menu-buttons">
                <button onClick={drop}>
                  <Link to="/calculator" className="menu-buttons">
                    Calculator
                  </Link>
                </button>

                <button onClick={drop}>
                  <Link to="/products" className="menu-buttons">
                    Products
                  </Link>
                </button>

                <button onClick={drop}>
                  <Link to="/invest" className="menu-buttons">
                    Invest
                  </Link>
                </button>

                <button onClick={drop}>
                  <Link className="menu-buttons">Financing</Link>
                </button>

                <button onClick={drop}>
                  <Link className="menu-buttons">Contact Us</Link>
                </button>

                {props.redux.reducer.user.loggedIn ? (
                  <div>
                    <button onClick={drop}>
                      {" "}
                      <Link to="/leads" className="menu-buttons">
                        Leads
                      </Link>
                    </button>

                    <button className="logout" onClick={props.logout}>
                      Logout
                    </button>
                  </div>
                ) : null}
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

export default withRouter(connect(mapStateToProps, { logout })(Nav));
