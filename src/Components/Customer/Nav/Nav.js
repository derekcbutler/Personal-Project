import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../redux/reducer";
import "./Nav.css";
import logo from '../../../images/ENDUROLogo.png'

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
                {/* <img className='enduro-logo' src={logo}/> */}
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
                <button >
                  <Link to="/calculator" className="menu-buttons">
                    Calculator
                  </Link>
                </button>

                <button>
                  <Link to='/about-product' className="menu-buttons">
                    About
                  </Link>
                </button>

                <button>
                  <Link className="menu-buttons">
                  FAQ(coming soon)
                  </Link>
                </button>

                <button>
                  <Link className="menu-buttons">
                  Compare Investment(coming soon)
                  </Link>
                </button>

                {/* <button onClick={drop}>
                  <Link to="/products" className="menu-buttons">
                    Products
                  </Link>
                </button> */}

                <button >
                  <Link to="/invest" className="menu-buttons">
                  Contact Us
                  </Link>
                </button>

                {/* <button >
                  <Link className="menu-buttons">Contact Us</Link>
                </button> */}

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
