import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

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
    //!upon click it will push to Strip and also create new lead with the status of active
    console.log(this.state);
    axios
      .post("/api/leads", {
        name_first: this.state.name_first,
        name_last: this.state.name_last,
        phone: this.state.phone,
        email: this.state.email,
        lead_status: this.state.lead_status,
      })
      .then(res => {
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

  onCharge = charge => {
    console.log(charge);
    let { amount } = this.state;
    amount *= 100;
    console.log(amount);
    charge.card = void 0;
    axios
      .post("api/payment", { charge, amount: this.state.amount })
      .then(res => {
        console.log(res);
        alert(
          `transaction approved for ${amount}, please watch email for a docusign`
        );
      });
  };

  render() {
    return (
      <div id="body">
        <div>
          <br></br>
          Invest:
          <br></br>
          <br></br>
          <div className="invest-inputs">
            <div>
              {"First name: "}
              <input
                placeholder="First name"
                className="input-boxes"
                name="name_first"
                value={this.state.name_first}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              {"Last Name: "}
              <input
                placeholder="Last name"
                className="input-boxes"
                name="name_last"
                value={this.state.name_last}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              {"Phone Number: "}
              <input
                placeholder="Phone"
                className="input-boxes"
                name="phone"
                value={this.state.phone}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              {"Email: "}
              <input
                placeholder="email"
                className="input-boxes"
                name="email"
                value={this.state.email}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div>
              {"Amount: "}
              <input
                className="input-boxes"
                placeholder="i.e. $15000.00"
                value={this.state.amount}
                type="number"
                onChange={e => this.handleChange(e)}
              />
              <br></br>
              
              <StripeCheckout
                name="test"
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                charge={this.onCharge}
                amount={this.state.amount}
                currency="USD"
                opened={this.onOpened}
                closed={this.onClosed}
                allowRememberMe //default is true
                onClick={this.submitButton}
              ></StripeCheckout>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Invest;
