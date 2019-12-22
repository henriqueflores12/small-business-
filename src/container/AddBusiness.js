import { connect } from "react-redux";
import AddBiz from "../components/AddBusiness";
import { AddBusiness } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    AddBusiness: business => dispatch(AddBusiness(business))
  };
};

export default connect(null, mapDispatchToProps)(AddBiz);
