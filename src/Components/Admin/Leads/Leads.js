import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getLeads, deleteLead, editLead } from "../../../redux/reducer";
import EditLeads from './EditLeads';
import "./Leads.css";

class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: []
      
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
    // console.log(this.props);
    console.log(this.props.redux.reducer);
    let { leads } = this.props.redux.reducer;
    // console.log(leads);
    if (!this.props.redux.reducer.user.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="newLead-input">
          New Lead:
          <br></br>
          <div className="input-display">
            First Name:
            <input
              className="inputs"
              placeholder="John"
              value={this.state.name_first}
              name="name_first"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="input-display">
            Last Name:
            <input
              className="inputs"
              placeholder="Doe"
              value={this.state.name_last}
              name="name_last"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="input-display">
            Phone Number:
            <input
              className="inputs"
              placeholder="(000)-000-0000"
              value={this.state.phone}
              name="phone"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="input-display">
            Email:
            <input
              className="inputs"
              placeholder="JohnDoe@gmail.com"
              value={this.state.email}
              name="email"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="input-display">
            Lead Status:
            <input
              className="inputs"
              placeholder="Active"
              value={this.state.lead_status}
              name="lead_status"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <div className="input-display">
            Notes:{" "}
            <input
              className="inputs"
              placeholder="notes"
              value={this.state.notes}
              name="notes"
              onChange={e => this.handleInput(e)}
            />
          </div>
          <button className="submit" onClick={this.handleNewLead}>
            Submit
          </button>
        </div>
        {leads[0] ? (
          <div className="leads-box">
            {this.props.redux.reducer.leads.map((e, i) => {
              return (
                <div>
                  < EditLeads 
                  i={i}
                  e={e}
                  key={i + 'component'} />
                  
                </div>
              );
            })}
          </div>
        ) : null}
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
export default connect(mapStateToProps, { getLeads, deleteLead, editLead })(Leads);
