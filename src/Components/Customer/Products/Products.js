import React from "react";
import "./Products.css";
import { Link, withRouter } from "react-router-dom";
import bundle1img from "../../../images/bundle1img.jpg";
import bundle2img from "../../../images/bundle2img.jpg";
import bundle3img from "../../../images/bundle3img.jpg";
import Footer from "../Footer/Footer";

function Products() {
  return (
    <>
    <div className="full">
      <body id="body">
        <section>
          <div className="bundle1">
            <div className="bundle">
              <img id="bundle1img" src={bundle1img} />
              <div className="first-bundle">
                <h1>BUNDLE ONE - $15,000*</h1>
                <p className="returns">{`$750 per month/ per server (5%)`}</p>
                <h4>Product Includes:</h4>
                <p className="italics">{`Product Protection Plan`}</p>
                <p className="italics">{`After year 5 payout: $4,950 (33%)`}</p>
                <p className="italics">{`After year 10 payout: $15,000 (100%)*`}</p>
                <p className="italics">
                  {"(Original investment is returned after 10 years)*"}{" "}
                </p>
                <Link to="/invest">
                  <button className="invest-button">invest</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bundle1">
            <div className="bundle">
              <img id="bundle1img" src={bundle2img} />
              <div className="first-bundle">
                <h1>BUNDLE TWO - $7,500*</h1>
                <p className="returns">{`$300 per month/ per server (4%)`}</p>
                <h4>Product Includes:</h4>
                <p className="italics">{`Product Protection Plan`}</p>
                <p className="italics">{`After year 5 payout: $2,745 (33%)`}</p>
                <p className="italics">{`After year 10 payout: $7,500 (100%)*`}</p>
                <p className="italics">
                  {"(Original investment is returned after 10 years)*"}{" "}
                </p>
                <Link to="/invest">
                  <button className="invest-button">invest</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bundle1">
            <div className="bundle">
              <img id="bundle1img" src={bundle3img} />
              <div className="first-bundle">
                <h1>BUNDLE THREE - $2,500*</h1>
                <p className="returns">{`$75 per month/ per server (3%)`}</p>
                <h4>Product Includes:</h4>
                <p className="italics">{`Product Protection Plan`}</p>
                <p className="italics">{`After year 5 payout: $825 (33%)`}</p>
                <p className="italics">{`After year 10 payout: $2,500 (100%)*`}</p>
                <p className="italics">
                  {"(Original investment is returned after 10 years)*"}{" "}
                </p>
                <Link to="/invest">
                  <button className="invest-button">invest</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
    <Footer />
    </>
  );
}
export default withRouter(Products);
