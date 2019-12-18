import { connect } from 'react-redux'
import Dashboard from '../components/dashboard'
import { add_Buisness,remove_Buisness } from '../redux/actions'

// import add_Buisness from './addBuisness'
// import { removeCar } action here
 
const mapStateToProps = (state) => {
    console.log(state,"DASHBOARD")
    return {
        user: state.user,
        buisness: state.buisness
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBuinsness: (buisness) => dispatch(add_Buisness(buisness)),
        removeBuisness: (index) => dispatch(remove_Buisness(index))
    }
}
// add mapDispatchToProps function here

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)