import { connect } from "react-redux";
import Dashboard from "../components/dashboard";
import { AddBusiness, removeBusiness } from "../redux/actions";

// import AddBusiness from './AddBusiness'
// import { removeCar } action here

const mapStateToProps = state => {
  console.log(state, "DASHBOARD");
  return {
    user: state.user,
    business: state.business
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBuinsness: business => dispatch(AddBusiness(business)),
    removeBusiness: index => dispatch(removeBusiness(index))
  };
};
// add mapDispatchToProps function here

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
