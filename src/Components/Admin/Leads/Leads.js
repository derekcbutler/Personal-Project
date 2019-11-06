import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getLeads } from "../../../redux/reducer";
import './Leads.css';

class Leads extends React.Component {
  constructor() {
    super();
    this.state = {
      name_first: "",
      name_last: "",
      phone: 0,
      email: "",
      lead_status: "",
      notes: ""
    };
  }

  componentDidMount() {
    this.props.getLeads();
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // displayLeads = () => {
  //   axios.get("/api/leads").then(res => {

  //   })
  // }

  handleNewLead = () => {
    console.log(this.state);
    axios
      .post("/api/leads", {
        name_first: this.state.name_first,
        name_last: this.state.name_last,
        phone: this.state.phone,
        email: this.state.email,
        lead_status: this.state.lead_status,
        notes: this.state.notes
      })
      .then(res => {
        this.props.updateUser(res.data);
        this.setState({
          name_first: "",
          name_last: "",
          phone: 0,
          email: "",
          lead_status: "",
          notes: ""
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.props);
    let { leads } = this.props.redux.reducer;
    if (!this.props.redux.reducer.user.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="newLead-input">
          New Lead:
          <br></br>
          <input
            placeholder="first name"
            value={this.state.name_first}
            name="name_first"
            onChange={e => this.handleInput(e)}
          />
          <input
            placeholder="last name"
            value={this.state.name_last}
            name="name_last"
            onChange={e => this.handleInput(e)}
          />
          <input
            placeholder="phone number"
            value={this.state.phone}
            name="phone"
            onChange={e => this.handleInput(e)}
          />
          <input
            placeholder="email"
            value={this.state.email}
            name="email"
            onChange={e => this.handleInput(e)}
          />
          <input
            placeholder=""
            value={this.state.lead_status}
            name="lead_status"
            onChange={e => this.handleInput(e)}
          />
          <input
            placeholder="notes"
            value={this.state.notes}
            name="notes"
            onChange={e => this.handleInput(e)}
          />
          <button onClick={this.handleNewLead}>Submit</button>
          {/* {this.state.status ? (
            <div>
              <div>Active</div>
              <div>Inactive</div>
              <div>Not Interested</div>
              <div>Pending</div>
            </div>
          ) : null} */}
          //! FINISH HERE
        </div>
        {leads[0] ? (
          <div className='leads-box'>
            {" "}
            {leads[0].name_first}
            {leads[0].name_last}
            {leads[0].phone}
            {leads[0].email}
            {leads[0].lead_status}
            {leads[0].notes}
          </div>
        ) : null}

        <nav>
          <button>Edit Lead</button>
          <button>Delete Lead</button>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    redux: state
  };
};
//the empty {} below works as mapDispatchToProps
export default connect(
  mapStateToProps,
  { getLeads }
)(Leads);
