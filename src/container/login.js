import React from "react";
import { connect } from "react-redux";
import Login from "../components/Login";
import { setUser, setLogin } from "../redux/actions";


const mapStateToProps = state => ({
  login: state.login // true or false
});
const mapDispatchToProps = dispatch => {
  return {

    setLogin: login => dispatch(setLogin(login)),
    setUser: userName => dispatch(setUser(userName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
