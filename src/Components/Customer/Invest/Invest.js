import React from "react";
import axios from 'axios';

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
    //!upon click it will push to Strip and also create new lead with the status of active
    console.log(this.state)
    axios.post("/api/leads", {
      name_first: this.state.name_first,
      name_last: this.state.name_last,
      phone: this.state.phone,
      email: this.state.email,
      lead_status: this.state.lead_status
    }).then(res => {
      //!finish here
    })
  };

  render() {
    return (
      <div id="body">
        <div>
          Invest
          <div className="invest-inputs">
            <div>
              {"First name: "}
              <input placeholder="First name" className="input-boxes" />
            </div>
            <div>
              {"Last Name: "}
              <input placeholder="Last name" className="input-boxes" />
            </div>
            <div>
              {"Phone Number: "}
              <input placeholder="Phone" className="input-boxes" />
            </div>
            <div>
              {"Email: "}
              <input placeholder="email" className="input-boxes" />
            </div>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Invest;
