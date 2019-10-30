import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser, login } from "../../redux/reducer";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.login = this.login.bind(this);
  }
  componentDidMount() {}

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  login() {
    console.log("login:",this.state);
    axios
      .post("/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.updateUser(res.data);
        this.props.history.push("/landing");
        this.setState({ username: "", password: "" });
        this.props.login();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="login">
        username        <input
          value={this.state.username}
          name="username"
          onChange={e => this.handleInput(e)}
        />
        password
        <input
          value={this.state.password}
          name="password"
          onChange={e => this.handleInput(e)}
        />
        <button className="login-button" onClick={this.login}>
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  const { user } = reduxStore;
  return {
    user
  };
};
const mapDispatchToProps = {
  updateUser,
  login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
