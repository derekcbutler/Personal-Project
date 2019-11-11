import React from "react";
import axios from "axios";

import "./Invest.css";

class Invest extends React.Component {
  constructor() {
    super();
    this.state = {
      name_first: "",
      name_last: "",
      phone: "",
      email: "",
      lead_status: "Pending"
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
        lead_status: this.state.lead_status
      })
      .then(res => {
        this.setState({
          name_first: "",
          name_last: "",
          phone: 0,
          lead_status: 'active'
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div id="body">
        <div>
          Invest
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
            <button className="submit" onClick={this.submitButton}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Invest;
