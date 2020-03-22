import React from "react";
import axios from "axios";
// import StripeCheckout from "react-stripe-checkout";
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
          `Information has been received, please watch your email inbox to receive more info within 2 business days`
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
        {/* <script src="https://js.stripe.com/v3/"></script> */}
        <div className="all-inputs">
          <br></br>
          <br></br>
          <h2>Contact Us:</h2>
          <br></br>
          {/* <br></br> */}
          <p>*Please monitor your email for more information*</p>
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
              <h4> {"Questions/Comments: "}</h4>
              <input
                className="comment-box"
                name="amount"
                value={this.state.amount}
                type="number"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <br></br>

            <button onClick={this.submitButton} className="pay">
              submit
            </button>
          </div>
        </div>
        <section className='contact-us'>
          <p className='paragraph'>
            If in need of an expedited contact please send a short email to one of the following addresses and we will get back to you as soon as we can.
          </p>
          <br></br>
          <p className='emails'>
            <a>onesheepdog@gmail.com</a>
            <br></br>
            <a>derekcbutler@gmail.com</a>
            <br></br>
            <a>mmeiling007@gmail.com</a>
          </p>
        </section>
      </div>
    );
  }
}
export default Invest;
