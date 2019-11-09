import React from "react";
import "./Products.css";
import { Link, withRouter } from "react-router-dom";

function Products() {
  return (
    <div className="full">
      <body id="body">
        <section>
          <div>
            <div className="bundle">
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
            <br></br>
            <div className="bundle">
              <h1>BUNDLE TWO - $7,500*</h1>
              <p className="returns">{`$300 per month/ per server (5%)`}</p>
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
            <br></br>
            <div className="bundle">
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
        </section>
      </body>
    </div>
  );
}
export default withRouter(Products);
