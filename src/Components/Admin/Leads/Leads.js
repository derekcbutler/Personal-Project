import React from "react";
import axios from "axios";

class Leads extends React.Component {
  constructor() {
    super();
    this.state = {
      first: "",
      last: "",
      phone: 0,
      email: "",
      status: false,
      notes: ""
    };
  }

  componentDidMount() {}

  // textAppear = () => {
  //     //? This is the function that makes the input boxes appear when the New Lead Button is pushed

  // }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleStatus = () => {
      this.setState({ status : !this.state.status});
  }

  handleNewLead = () => {
    axios
      .post("/api/leads", {
        first: this.state.first,
        last: this.state.last,
        phone: this.state.phone,
        email: this.state.email,
        status: null,
        notes: this.state.notes
      })
      .then(res => {
        this.props.updateUser(res.data);
        this.setState({
          first: "",
          last: "",
          phone: 0,
          email: "",
          status: false, //! might need to change this value???
          notes: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
          
        <div>
          <input
            placeholder="first name"
            value={this.state.first}
            name="first"
            onChange={e => this.handleNewLead}
          />
          <input
            placeholder="last name"
            value={this.state.last}
            name="last"
            onChange={e => this.handleNewLead}
          />
          <input
            placeholder="phone number"
            value={this.state.phone}
            name="phone"
            onChange={this.handleNewLead}
          />
          <input
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={this.handleNewLead}
          />
          <button>status</button>
          <input
            placeholder="notes"
            value={this.state.notes}
            name="notes"
            onChange={this.handleNewLead}
          />
          <button>Submit</button>
          {this.state.status ? (
              <div>Active</div>
              <div>Inactive</div>
              <div>Not Interested</div>
              <div>Pending</div>

          ) : null }//! FINISH HERE
        </div>
        <nav>
          <button>Edit Lead</button>
          <button>Delete Lead</button>
        </nav>
      </div>
    );
  }
}

export default Leads;
