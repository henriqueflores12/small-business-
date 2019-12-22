  
import { connect } from 'react-redux'
import business from '../container/business'

const mapStateToProps = (state) => {
    return {
        business: state.business
    }
}

export default connect(mapStateToProps)(business)