import React from "react";
import axios from "axios";
import "./Leads.css";

class editLeads extends React.Component {
  constructor() {
    super();
    this.state = {
      name_first: "",
      name_last: "",
      phone: 0,
      email: "",
      lead_status: "",
      notes: "",
      editing: false
    };
  }
  editingFn = () => {
    this.setState({ editing: !this.state.editing });
    axios
      .put("/api/leads", {
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
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { e, i } = this.props;
    return (
      <div>
        {this.state.editing ? (
          <div key={`hey ${i}`}>
            <div className="each-lead">
              <div>
                <input
                  className="inputs"
                  placeholder="John"
                  value={this.state.name_first}
                  name="name_first"
                  onChange={e => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="inputs"
                  placeholder="Doe"
                  value={this.state.name_last}
                  name="name_last"
                  onChange={e => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="inputs"
                  placeholder="(000)-000-0000"
                  value={this.state.phone}
                  name="phone"
                  onChange={e => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="inputs"
                  placeholder="JohnDoe@gmail.com"
                  value={this.state.email}
                  name="email"
                  onChange={e => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="inputs"
                  placeholder="Active"
                  value={this.state.lead_status}
                  name="lead_status"
                  onChange={e => this.handleInput(e)}
                />
              </div>
              <div>
                <input
                  className="inputs"
                  placeholder="notes"
                  value={this.state.notes}
                  name="notes"
                  onChange={e => this.handleInput(e)}
                />
              </div>
              <button onClick={() => this.props.editLead(e.lead_id)}>
                save changes
              </button>
            </div>
          </div>
        ) : (
          <div key={`hey ${i}`}>
            <div className="each-lead">
              <div>{e.name_first}</div>
              <div>{e.name_last}</div>
              <div>{e.phone}</div>
              <div>{e.email}</div>
              <div>{e.lead_status}</div>
              <div>{e.notes}</div>
            </div>
          </div>
        )}
        <nav className="buttons-box">
          <button className="redux-button" onClick={() => this.editingFn()}>
            Edit Lead
          </button>
          <button
            className="redux-button"
            onClick={() => this.props.deleteLead(e.lead_id)}
          >
            Delete Lead
          </button>
        </nav>
      </div>
    );
  }
}
export default editLeads;
