import React from "react";
import { connect } from 'react-redux';
import naveBar from '../components/naveBar';





const mapStateToProps = state => ({
    loggedIn: state.loggedIn // true or false
  })


  export default connect(mapStateToProps)(naveBar)