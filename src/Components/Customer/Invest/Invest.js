import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
// import Stripe from 'stripe'

import "./Invest.css";

class Invest extends React.Component {
  constructor() {
    super();
    this.state = {
      name_first: "",
      name_last: "",
      phone: "",
      email: "",
      lead_status: "Pending",
      amount: []
    };
  }

  componentDidMount() {}

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitButton = () => {
    //? this function creates a lead when the customer presses the submit button to invest and withing this function it will open strip
    // console.log(this.state);
    axios
      .post("/api/leads", {
        name_first: this.state.name_first,
        name_last: this.state.name_last,
        phone: this.state.phone,
        email: this.state.email,
        lead_status: this.state.lead_status
      })
      .then(res => {
        console.log(res);
        this.setState({
          name_first: "",
          name_last: "",
          phone: 0,
          lead_status: "active",
          amount: this.handleChange
        });
      })
      .catch(err => console.log(err));
  };

  onOpened = () => {
    console.log("opened");
  };

  onClosed = () => {
    console.log("closed");
  };

  onToken = token => {
    console.log(token);
    let { amount } = this.state;
    amount *= 100;
    console.log(amount);
    token.card = void 0;
    axios
      .post("api/payment", { token, amount: this.state.amount })
      .then(res => {
        console.log(res);
        alert(
          `transaction approved for ${amount}, please watch email for a docusign`
        );
      });
  };

  render() {
    // console.log(submitButton)
    console.log(this.state);
    // var REACT_APP_STRIPE_KEY = Stripe('pk_live_yPH3gVCkN6IOElI40SDM3bfu00J0T42rMa')
    return (
      <div id="body">
        <br></br>
        <script src="https://js.stripe.com/v3/"></script>
        <div className="all-inputs">
          <br></br>
          <h2>Invest:</h2>
          {/* <br></br> */}
          {/* <br></br> */}
          <p>
            *Watch email to receive a docusign within the next business day*
          </p>
          <br></br>
          <br></br>
          <div className="invest-inputs">
            <div className="input-lines">
              <h4>{"First name: "}</h4>
              <input
                placeholder="First name"
                className="input-boxes"
                name="name_first"
                value={this.state.name_first}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="input-lines">
              <h4>{"Last Name: "}</h4>
              <input
                placeholder="Last name"
                className="input-boxes"
                name="name_last"
                value={this.state.name_last}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="input-lines">
              <h4>{"Phone Number: "}</h4>
              <input
                placeholder="Phone"
                className="input-boxes"
                name="phone"
                value={this.state.phone}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="input-lines">
              <h4>{"Email: "}</h4>
              <input
                placeholder="email"
                className="input-boxes"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="input-lines">
              <h4> {"Amount: "}</h4>
              <input
                className="input-boxes"
                name="amount"
                placeholder="i.e. $15000.00"
                value={this.state.amount}
                type="number"
                onChange={e => this.handleChange(e)}
              />
                </div>
              <br></br>

              <button onClick={this.submitButton} className='pay'>
                
                <StripeCheckout
                  name="test"
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
                  charge={this.onToken}
                  amount={this.state.amount}
                  currency="USD"
                  opened={this.onOpened}
                  closed={this.onClosed}
                  allowRememberMe //default is true
                  onClick={() => {
                    this.onToken();
                  }}
                  // onClick={}
                ></StripeCheckout>
              </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Invest;
