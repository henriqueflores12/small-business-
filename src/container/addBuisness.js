import { connect } from 'react-redux';
import AddBiz from '../components/addBiz';
import {add_Buisness} from '../redux/actions';

   

const mapDispatchToProps = (dispatch) => {
        return {
            add_Buisness: (buisness) => dispatch(add_Buisness(buisness))
        }
    }

export default  connect(null, mapDispatchToProps)(AddBiz)