import React from "react";
import { connect } from "react-redux";
import Login from "../components/login";
import { handleLogIn } from "../redux/actions";

const mapStateToProps = state => ({
  login: state.login // true or false
});
const mapDispatchToProps = dispatch => {
  return {
    handleLogIn: login => dispatch(handleLogIn(login))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
