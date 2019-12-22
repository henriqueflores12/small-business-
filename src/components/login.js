import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import { Link } from "react-router-dom";

class login extends Component {
  state = {
    username: '',
    password: ''
  }
  handleLogin = () => {
    document.cookie = "loggedIn=true";
    // create user object with local state values
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.setLogin(true);
    this.props.setUser(newUser) // pass newUser object to redux action
  };
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div className="App-header2">
        <div className="loginContainer">
          {/* <Button color="inherit">Login</Button> */}
          <TextField
            id="Username*"
            label="Username*"
            type="text"
            autoComplete="current-password"
            margin="normal"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e)}
          >
            password
          </TextField>

          <TextField
            id="standard-password-input"
            label="Password*"
            type="password"
            autoComplete="current-password"
            margin="normal"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e)}
          >
            password
          </TextField>
          <Link to="/dashboard1">
            <Button
              color="inherit"
              onClick={() => this.handleLogin()}
            >
              login
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default login;
