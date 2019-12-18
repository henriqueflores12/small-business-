import { connect } from 'react-redux'
import Total from '../components/total'

const mapStateToProps = (state) => {
    return {
        buisness: state.buisness
    }
}

export default connect(mapStateToProps)(Total)