import React from "react";
import axios from "axios";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

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


  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleStatus = () => {
    this.setState({ status: !this.state.status });
  };

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
    console.log(this.props.redux.user.loggedIn)
    if(!this.props.redux.user.loggedIn ){
      return <Redirect to='/'/>
    }
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
            <div>
              <div>Active</div>
              <div>Inactive</div>
              <div>Not Interested</div>
              <div>Pending</div>
            </div>
           ) : null}
          //! FINISH HERE
        </div>
        <nav>
          <button>Edit Lead</button>
          <button>Delete Lead</button>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    redux :state
  }
}
//the empty {} below works as mapDispatchToProps
export default connect(mapStateToProps, {})(Leads);
