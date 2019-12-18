  
import { connect } from 'react-redux'
import buisness from '../container/buisness'

const mapStateToProps = (state) => {
    return {
        buisness: state.buisness
    }
}

export default connect(mapStateToProps)(buisness)